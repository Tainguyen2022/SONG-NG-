
import React, { useState, useEffect } from 'react';
import { ADMIN_PASSWORD, LOCAL_STORAGE_KEYS } from '../constants';
import { vocab as defaultVocab } from '../data/vocab';
import { BugReport, VocabPack } from '../types';

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            onUnlock();
        } else {
            setError('Sai mật khẩu!');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Admin Area</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    placeholder="Nhập mật khẩu"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
};

const AdminDashboard: React.FC = () => {
    const [vocab, setVocab] = useState<VocabPack>({});
    const [bugs, setBugs] = useState<BugReport[]>([]);

    useEffect(() => {
        try {
            const storedVocab = localStorage.getItem(LOCAL_STORAGE_KEYS.VOCAB);
            setVocab(storedVocab ? JSON.parse(storedVocab) : defaultVocab.packs);

            const storedBugs = localStorage.getItem(LOCAL_STORAGE_KEYS.BUGS);
            setBugs(storedBugs ? JSON.parse(storedBugs) : []);
        } catch (error) {
            console.error("Failed to load data from localStorage", error);
        }
    }, []);

    const handleExportVocab = () => {
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(vocab, null, 2))}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "matcanban_vocab_pack.json";
        link.click();
    };
    
    const handleClearStorage = (key: string) => {
        if (window.confirm(`Bạn có chắc muốn xóa dữ liệu từ "${key}"?`)) {
            localStorage.removeItem(key);
            alert(`Đã xóa "${key}"`);
            window.location.reload();
        }
    }

    return (
        <div className="space-y-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Vocabulary Packs</h3>
                <p>Số mục từ: {Object.values(vocab).flat().length}</p>
                <p>Số tab: {Object.keys(vocab).length}</p>
                 <button onClick={handleExportVocab} className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Export Vocab Pack (JSON)
                </button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Storage Management</h3>
                <div className="space-y-2">
                    {Object.values(LOCAL_STORAGE_KEYS).map(key => (
                        <div key={key} className="flex justify-between items-center">
                            <code>{key}</code>
                            <button onClick={() => handleClearStorage(key)} className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600">
                                Clear
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Bug Reports ({bugs.length})</h3>
                <div className="h-64 overflow-auto border rounded-md">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bugs.map((bug, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm">{new Date(bug.time).toLocaleString()}</td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm">{bug.route}</td>
                                    <td className="px-4 py-2 text-sm">{bug.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

const AdminPage: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    if (!isUnlocked) {
        return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
    }

    return <AdminDashboard />;
};

export default AdminPage;

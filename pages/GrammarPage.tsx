
import React, { useState, useEffect, useCallback } from 'react';
import { Unit, Group, GrammarState, Subject, Flags, Lemma } from '../types';
import { units } from '../data/units';
import { groups } from '../data/groups';
import { INITIAL_LEMMA } from '../constants';
import { generateSentence, getFlagsForUnit } from '../services/grammarService';

// --- Re-styled & New Components ---

const TopBar: React.FC = () => {
    const wordTypes = ['Động từ', 'Tính từ', 'Trạng từ', 'Danh từ', 'Giới từ'];
    return (
        <div className="flex items-center flex-wrap gap-2">
            {wordTypes.map(type => (
                <button key={type} className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                    {type}
                </button>
            ))}
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-sm text-sm font-semibold hover:bg-gray-900 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Nhập dữ liệu
            </button>
        </div>
    );
};

const SubjectVerbSelector: React.FC<{
    subject: Subject;
    onSubjectChange: (s: Subject) => void;
}> = ({ subject, onSubjectChange }) => {
    const subjects: Subject[] = ['I', 'you', 'we', 'they', 'he', 'she', 'it', 'N (số nhiều)', 'danh từ số ít'];
    const subjectMap = {
        'I': 'I (Tôi)', 'you': 'You (Bạn)', 'we': 'We (Chúng tôi)', 'they': 'They (Họ)', 'he': 'He (Anh ấy)', 'she': 'She (Cô ấy)', 'it': 'It (Nó)', 'N (số nhiều)': 'N (số nhiều)', 'danh từ số ít': 'N (số ít)'
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-end gap-6">
             <div className="flex flex-col items-start">
                <label className="text-xs text-gray-500 font-semibold mb-1">CHỦ NGỮ</label>
                <select 
                    value={subject} 
                    onChange={(e) => onSubjectChange(e.target.value as Subject)}
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {subjects.map(s => <option key={s} value={s}>{subjectMap[s] || s}</option>)}
                </select>
             </div>
             <div className="flex flex-col items-start">
                <label className="text-xs text-gray-500 font-semibold mb-1">ĐỘNG TỪ</label>
                <input 
                    type="text" 
                    defaultValue="work" 
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                />
             </div>
        </div>
    );
};


const HeroZone: React.FC<{ en: string; vi: string; debug: string; error: string | null }> = ({ en, vi, debug, error }) => {
    if (error) {
        return (
             <div className="text-center p-6 bg-white rounded-lg shadow-sm min-h-[180px] flex flex-col justify-center items-center">
                <div className="px-4 py-3 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-300">
                    <p className="font-bold text-lg">{error}</p>
                </div>
            </div>
        )
    }
    
    const parts = en.split(/(\s+)/);
    const mainWordIndex = parts.findIndex(p => p.toLowerCase() === 'work' || p.toLowerCase() === 'works' || p.toLowerCase() === 'working' || p.toLowerCase() === 'worked');
    
    let subjectPart = "I";
    let verbPart = "work.";
    if (mainWordIndex > -1) {
        subjectPart = parts.slice(0, mainWordIndex).join('');
        verbPart = parts.slice(mainWordIndex).join('');
    } else if (parts.length > 1) {
        subjectPart = parts[0];
        verbPart = parts.slice(1).join('');
    }

    const mainWordClean = verbPart.split(' ')[0].replace(/[.?]/g, '');
    const punctuation = (verbPart.match(/[.?]/g) || []).join('');
    const restOfVerbPart = verbPart.split(' ').slice(1).join(' ');


    return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm min-h-[180px] flex flex-col justify-center items-center">
        <p className="text-5xl md:text-7xl font-bold text-gray-800 break-all">
            {subjectPart} <span className="text-orange-500 inline-block border-b-4 border-orange-500 pb-1">{mainWordClean}</span> {restOfVerbPart}{punctuation}
        </p>
        <p className="text-xl text-gray-600 mt-4">{vi}</p>
        <p className="text-xs text-gray-400 mt-4 absolute bottom-3 right-4">{debug}</p>
    </div>
)};

const Controls: React.FC<{ flags: Flags; onFlagChange: <K extends keyof Flags>(key: K, value: Flags[K]) => void }> = ({ flags, onFlagChange }) => {
    
    const controlGroups = [
        { items: [{label: 'Hiện tại', key: 'tense', value: 'present'}, {label: 'Quá khứ', key: 'tense', value: 'past'}, {label: 'Tương lai', key: 'tense', value: 'future'}], color: 'violet'},
        { items: [{label: 'Đơn', key: 'aspect', value: 'simple'}, {label: 'Tiếp diễn', key: 'aspect', value: 'progressive'}, {label: 'Hoàn thành', key: 'aspect', value: 'perfect'}, {label: 'HT Tiếp diễn', key: 'aspect', value: 'perfect_progressive'}], color: 'pink'},
        { items: [{label: 'Dự định', key: 'near_future', value: true}], color: 'pink' },
        { items: [{label: 'Khẳng định', key: 'polarity', value: 'affirmative'}, {label: 'Phủ định', key: 'polarity', value: 'negative'}], color: 'gray'},
        { items: [{label: 'Nghi vấn', key: 'polarity', value: 'interrogative'}, {label: 'Bị động', key: 'voice', value: 'passive'}], color: 'gradient-blue-orange'},
    ];

    const getButtonClass = (isActive: boolean, color: string, item: any) => {
        let styles = 'px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-sm ';
        if (isActive) {
            switch(color) {
                case 'violet': return styles + 'bg-violet-500 text-white ring-2 ring-offset-2 ring-violet-500';
                case 'pink': return styles + 'bg-pink-500 text-white ring-2 ring-offset-2 ring-pink-500';
                case 'gradient-blue-orange': 
                    if (item.value === 'interrogative') return styles + 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white ring-2 ring-offset-2 ring-blue-500';
                    if (item.value === 'passive') return styles + 'bg-gradient-to-r from-orange-500 to-amber-400 text-white ring-2 ring-offset-2 ring-orange-500';
                    return styles + 'bg-white hover:bg-gray-100 text-gray-700'; 
                default: return styles + 'bg-gray-600 text-white';
            }
        }
        return styles + 'bg-white hover:bg-gray-100 text-gray-700';
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {controlGroups.map((group, index) => (
                <div key={index} className="flex flex-wrap gap-2">
                    {group.items.map(item => {
                         const isActive = flags[item.key as keyof Flags] === item.value;
                         return (
                            <button 
                                key={item.label}
                                onClick={() => {
                                    if(item.key === 'near_future' || item.key === 'short_answer' || item.key === 'contractions' || item.key === 'voice') {
                                        // Toggle boolean flags or specific values
                                        const currentValue = flags[item.key as keyof Flags];
                                        const newValue = item.key === 'voice' 
                                            ? (currentValue === 'passive' ? 'active' : 'passive')
                                            : !currentValue;
                                        onFlagChange(item.key as keyof Flags, newValue as any)
                                    } else {
                                        onFlagChange(item.key as keyof Flags, item.value as any)
                                    }
                                }}
                                className={getButtonClass(isActive, group.color, item)}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            ))}
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => onFlagChange('short_answer', !flags.short_answer)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${flags.short_answer ? 'bg-gray-900 text-white' : 'bg-gray-700 text-white hover:bg-gray-900'}`}
                >
                    Câu ngắn
                </button>
                <button 
                     onClick={() => onFlagChange('contractions', !flags.contractions)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${flags.contractions ? 'bg-gray-900 text-white' : 'bg-gray-700 text-white hover:bg-gray-900'}`}
                >
                    Thu gọn
                </button>
            </div>
        </div>
    );
};

const ColumnCard: React.FC<{ title: string; count: number; children: React.ReactNode }> = ({ title, count, children }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full flex flex-col">
        <div className="flex items-center justify-between mb-2 pb-2 border-b">
            <h2 className="text-md font-bold text-gray-800">{title}</h2>
            {count > 0 && <span className="bg-blue-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">{count}</span>}
        </div>
        <div className="flex-grow overflow-y-auto pr-2 -mr-2" style={{ scrollbarWidth: 'thin' }}>
             {children}
        </div>
    </div>
);

const GroupsColumn: React.FC<{ onSelect: (groupId: number) => void; selectedId: number | null }> = ({ onSelect, selectedId }) => (
    <ColumnCard title="Nhóm Ngữ pháp" count={groups.length}>
        <ul className="space-y-1">
            {groups.map((g, index) => ( 
                <li key={g.id} 
                    onClick={() => onSelect(g.id)}
                    className={`cursor-pointer p-2 rounded-lg transition-colors text-sm flex items-start gap-3 ${selectedId === g.id ? 'bg-blue-100 border border-blue-300 font-semibold text-blue-800' : 'hover:bg-gray-100'}`}>
                    <span className="flex-shrink-0 mt-0.5 text-xs text-gray-500">{index + 1}.</span>
                    <span>{g.vi}<br/><span className="text-xs text-gray-500">{g.en}</span></span>
                </li>
            ))}
        </ul>
    </ColumnCard>
);

const UnitsColumn: React.FC<{ selectedGroupId: number | null; onSelect: (unit: Unit) => void; selectedId: string | null }> = ({ selectedGroupId, onSelect, selectedId }) => {
    const filteredUnits = selectedGroupId ? units.filter(u => u.group_id === selectedGroupId) : [];
    return (
        <ColumnCard title="Đơn vị Ngữ pháp" count={filteredUnits.length}>
            <ul className="space-y-1">
                {filteredUnits.map((u, index) => (
                    <li key={u.id} 
                        onClick={() => onSelect(u)}
                        className={`cursor-pointer p-2 rounded-lg transition-colors text-sm flex items-start gap-3 ${selectedId === u.id ? 'bg-blue-100 border border-blue-300 font-semibold text-blue-800' : 'hover:bg-gray-100'}`}>
                        <span className="flex-shrink-0 mt-0.5 text-xs text-gray-500">{index + 1}.</span>
                        <span>{u.vi}<br/><span className="text-xs text-gray-500">{u.en}</span></span>
                    </li>
                ))}
            </ul>
        </ColumnCard>
    )
};

const CoreKnowledgeColumn: React.FC<{ unit: Unit | null }> = ({ unit }) => (
    <ColumnCard title="Kiến Thức Cốt Lõi" count={0}>
        {!unit ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <h3 className="font-bold text-lg">Chưa chọn đơn vị ngữ pháp</h3>
                <p className="text-sm">Chọn một đơn vị để xem kiến thức cốt lõi</p>
            </div>
        ) : (
            <div className="p-2 space-y-4">
                <h3 className="text-lg font-bold text-indigo-700">{unit.vi}</h3>
                <p className="text-sm text-gray-500 -mt-3">{unit.en}</p>
                 {unit.applicable === false && <p className="p-3 bg-yellow-100 text-yellow-800 rounded-lg border-l-4 border-yellow-500 font-semibold">Điểm ngữ pháp này không áp dụng trong thực tế.</p>}
                <div className="space-y-2 text-sm text-gray-700">
                   <p className="p-3 bg-gray-100 rounded-lg border-l-4 border-indigo-500">Đây là khu vực hiển thị kiến thức chi tiết về <strong className="font-semibold">{unit.vi}</strong>. Nội dung "sách giáo khoa" sẽ được render tại đây.</p>
                   <p><span className="font-semibold">Canon Key:</span> <code className="bg-gray-200 text-xs p-1 rounded">{unit.canonKey}</code></p>
                </div>
            </div>
        )}
    </ColumnCard>
);


// --- Main Page ---

const GrammarPage: React.FC = () => {
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(1);
    const [state, setState] = useState<GrammarState>({
        subject: 'I',
        lemma: { type: 'verb', text: 'work', base: 'work', past: 'worked', pp: 'worked', ing: 'working' },
        flags: {
            tense: 'present',
            aspect: 'simple',
            voice: 'active',
            polarity: 'affirmative',
            near_future: false,
            short_answer: false,
            contractions: true,
        },
        unitId: '1-1',
    });
    const [hero, setHero] = useState({ en: '', vi: '', error: null as string | null });
    const [debugInfo, setDebugInfo] = useState('');

    useEffect(() => {
        const { en, vi, error } = generateSentence(state);
        setHero({ en, vi, error });
        setDebugInfo(`Debug: ${state.flags.tense} | ${state.flags.aspect} | ${state.flags.voice} | ${state.flags.polarity} | near_future: ${state.flags.near_future}`);
    }, [state]);

    const handleUnitSelect = useCallback((unit: Unit) => {
        const newFlags = getFlagsForUnit(unit, state.flags);
        setState(prev => ({ ...prev, unitId: unit.id, flags: newFlags }));
    }, [state.flags]);

    const handleFlagChange = <K extends keyof Flags>(key: K, value: Flags[K]) => {
        setState(prev => ({
            ...prev,
            flags: { ...prev.flags, [key]: value },
        }));
    };
    
    const handleSubjectChange = (subject: Subject) => {
         setState(prev => ({ ...prev, subject }));
    };
    
    const handleGroupSelect = (groupId: number) => {
        setSelectedGroupId(groupId);
        const firstUnit = units.find(u => u.group_id === groupId);
        if (firstUnit) {
            handleUnitSelect(firstUnit);
        } else {
             setState(prev => ({ ...prev, unitId: null }));
        }
    }

    const selectedUnit = units.find(u => u.id === state.unitId);

    return (
        <div className="space-y-6 relative">
            <div className="absolute top-[-24px] left-[-24px] right-[-24px] h-1.5 bg-teal-200" />
            <TopBar />
            <SubjectVerbSelector subject={state.subject} onSubjectChange={handleSubjectChange} />
            <HeroZone en={hero.en} vi={hero.vi} debug={debugInfo} error={hero.error} />
            <Controls flags={state.flags} onFlagChange={handleFlagChange} />

            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6" style={{height: '600px'}}>
                <div className="lg:col-span-1 xl:col-span-1 h-full">
                    <GroupsColumn onSelect={handleGroupSelect} selectedId={selectedGroupId} />
                </div>
                <div className="lg:col-span-1 xl:col-span-1 h-full">
                    <UnitsColumn selectedGroupId={selectedGroupId} onSelect={handleUnitSelect} selectedId={state.unitId} />
                </div>
                <div className="lg:col-span-2 xl:col-span-3 h-full">
                    <CoreKnowledgeColumn unit={selectedUnit || null} />
                </div>
            </div>
        </div>
    );
};

export default GrammarPage;

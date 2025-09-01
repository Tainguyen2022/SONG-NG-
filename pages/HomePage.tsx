

import React from 'react';
import { Link } from 'react-router-dom';

// Fix: Changed JSX.Element to React.ReactNode to resolve the "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="space-y-16">
            <section className="text-center py-16">
                <div 
                    className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                    Chào mừng đến <span className="text-indigo-600">matcanban.com</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Nền tảng học ngữ pháp tiếng Anh thông minh, trực quan và hiệu quả.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/grammar" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors transform hover:scale-105">
                        Bắt đầu học
                    </Link>
                    <Link to="/news" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105">
                        Tin tức song ngữ
                    </Link>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    title="Vocabulary Pack"
                    description="Tùy chỉnh và mở rộng vốn từ vựng của bạn. Import/Export dễ dàng để học mọi lúc, mọi nơi."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" /></svg>}
                />
                <FeatureCard 
                    title="137 Đơn vị Ngữ pháp"
                    description="Bao quát toàn bộ các điểm ngữ pháp cốt lõi, từ cơ bản đến nâng cao, được trình bày một cách hệ thống."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>}
                />
                <FeatureCard 
                    title="Giao diện Apple-Flat"
                    description="Trải nghiệm học tập mượt mà với giao diện sạch sẽ, hiện đại và tối ưu cho cả máy tính và di động."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                />
            </section>
        </div>
    );
};

export default HomePage;
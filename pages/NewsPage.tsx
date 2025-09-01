
import React, { useState, useRef, useEffect } from 'react';
import { news } from '../data/news';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle; onSelect: () => void }> = ({ article, onSelect }) => (
    <div 
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
        onClick={onSelect}
    >
        <div className="relative h-48">
            <img className="w-full h-full object-cover" src={article.image_url} alt={article.title_en} />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
             <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-bold text-lg">{article.title_vi}</h3>
                <p className="text-gray-200 text-sm">{article.title_en}</p>
            </div>
        </div>
    </div>
);

const ArticleView: React.FC<{ article: NewsArticle; onBack: () => void }> = ({ article, onBack }) => {
    const enRef = useRef<HTMLDivElement>(null);
    const viRef = useRef<HTMLDivElement>(null);
    const [isSyncScroll, setIsSyncScroll] = useState(true);
    const lastScrolled = useRef<'en' | 'vi' | null>(null);

    const handleScroll = (scroller: 'en' | 'vi') => {
        if (!isSyncScroll || lastScrolled.current !== scroller) return;

        const source = scroller === 'en' ? enRef.current : viRef.current;
        const target = scroller === 'en' ? viRef.current : enRef.current;

        if (source && target) {
            const scrollPercent = source.scrollTop / (source.scrollHeight - source.clientHeight);
            target.scrollTop = scrollPercent * (target.scrollHeight - target.clientHeight);
        }
    };
    
    return (
        <div className="space-y-4">
            <div>
                 <button onClick={onBack} className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                    &larr; Quay lại danh sách
                </button>
            </div>
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{article.title_vi}</h1>
                <p className="text-xl text-gray-600">{article.title_en}</p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 my-4">
                <span className="text-sm font-medium text-gray-700">Sync Scroll</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isSyncScroll} onChange={() => setIsSyncScroll(!isSyncScroll)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                    ref={viRef} 
                    onMouseEnter={() => lastScrolled.current = 'vi'}
                    onScroll={() => handleScroll('vi')}
                    className="prose max-w-none p-4 bg-white rounded-lg shadow-sm h-96 overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: article.content_vi }}
                ></div>
                <div 
                    ref={enRef} 
                    onMouseEnter={() => lastScrolled.current = 'en'}
                    onScroll={() => handleScroll('en')}
                    className="prose max-w-none p-4 bg-white rounded-lg shadow-sm h-96 overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: article.content_en }}
                ></div>
            </div>
        </div>
    )
};


const NewsPage: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

    if (selectedArticle) {
        return <ArticleView article={selectedArticle} onBack={() => setSelectedArticle(null)} />;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Báo song ngữ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map(article => (
                    <NewsCard key={article.id} article={article} onSelect={() => setSelectedArticle(article)} />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;

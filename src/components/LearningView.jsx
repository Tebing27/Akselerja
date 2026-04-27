export default function LearningView({ isActive }) {
  return (
    <div className={`view ${isActive ? 'active' : ''}`}>
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-[28px] mb-2 font-outfit">Jalur Belajar Terpersonalisasi</h2>
                <p className="text-text-muted">Rekomendasi kursus spesifik untuk menutupi gap skill Anda menuju posisi <strong>Data Scientist</strong>.</p>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1.5 rounded-full font-medium border border-[#0C447C]/10 m-0">
                <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> Microsoft Learn API
            </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            <div className="bg-bg-card border border-border-color rounded-[20px] overflow-hidden transition-all duration-200 cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:shadow-md hover:border-primary">
                <div className="h-[160px] relative">
                    <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Machine Learning" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 text-[#333]">
                        <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> MS Learn
                    </div>
                    <div className="absolute bottom-3 left-3 text-white font-bold text-sm">Machine Learning</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2 block">Machine Learning</span>
                    <h3 className="text-[17px] font-semibold mb-3 leading-snug font-outfit">Buat model machine learning dengan Azure Machine Learning</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed mb-4">Pelajari cara menggunakan Azure Machine Learning untuk melatih dan mendeploy model.</p>
                    <div className="flex items-center gap-4 text-text-muted text-[13px] mt-auto pt-4">
                        <span className="flex items-center gap-1.5"><i className="ph ph-clock"></i> 4 jam 12 menit</span>
                        <span className="flex items-center gap-1.5"><i className="ph ph-book-open"></i> 8 Modul</span>
                    </div>
                </div>
            </div>

            <div className="bg-bg-card border border-border-color rounded-[20px] overflow-hidden transition-all duration-200 cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:shadow-md hover:border-primary">
                <div className="h-[160px] relative">
                    <img src="https://images.unsplash.com/photo-1544383333-53c25442821e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Advanced SQL" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 text-[#333]">
                        <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> MS Learn
                    </div>
                    <div className="absolute bottom-3 left-3 text-white font-bold text-sm">Advanced SQL</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2 block">SQL Tingkat Lanjut</span>
                    <h3 className="text-[17px] font-semibold mb-3 leading-snug font-outfit">Query data dengan Transact-SQL tingkat lanjut</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed mb-4">Tulis query tingkat lanjut untuk menganalisis data menggunakan fungsi bawaan.</p>
                    <div className="flex items-center gap-4 text-text-muted text-[13px] mt-auto pt-4">
                        <span className="flex items-center gap-1.5"><i className="ph ph-clock"></i> 2 jam 45 menit</span>
                        <span className="flex items-center gap-1.5"><i className="ph ph-book-open"></i> 5 Modul</span>
                    </div>
                </div>
            </div>

            <div className="bg-bg-card border border-border-color rounded-[20px] overflow-hidden transition-all duration-200 cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:shadow-md hover:border-primary">
                <div className="h-[160px] relative">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Azure Data" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 text-[#333]">
                        <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> MS Learn
                    </div>
                    <div className="absolute bottom-3 left-3 text-white font-bold text-sm">Azure Data</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2 block">Azure Data</span>
                    <h3 className="text-[17px] font-semibold mb-3 leading-snug font-outfit">Dasar-dasar Data Azure: Jelajahi konsep data inti</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed mb-4">Pelajari dasar-dasar konsep database di lingkungan cloud.</p>
                    <div className="flex items-center gap-4 text-text-muted text-[13px] mt-auto pt-4">
                        <span className="flex items-center gap-1.5"><i className="ph ph-clock"></i> 1 jam 30 menit</span>
                        <span className="flex items-center gap-1.5"><i className="ph ph-book-open"></i> 3 Modul</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

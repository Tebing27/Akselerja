import { useState } from 'react';

export default function UploadView({ isActive, onSimulateComplete }) {
  const [isLoading, setIsLoading] = useState(false);

  const simulateUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSimulateComplete();
    }, 2500);
  };

  return (
    <div className={`view ${isActive ? 'active' : ''}`}>
        <div className="mb-8">
            <h2 className="text-[28px] mb-2 font-outfit">Unggah CV</h2>
            <p className="text-text-muted">Biarkan AI yang mengekstrak data Anda. Kami mendukung PDF dan DOCX.</p>
        </div>

        {!isLoading ? (
            <div className="bg-bg-card rounded-[20px] p-6 shadow-sm border border-border-color mb-6" id="upload-container">
                <div className="inline-flex items-center gap-1.5 bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1.5 rounded-full mb-4 font-medium border border-[#0C447C]/10">
                    <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> Azure AI Document Intelligence
                </div>
                <div className="border-2 border-dashed border-slate-300 rounded-[20px] py-16 px-8 text-center bg-slate-50 cursor-pointer transition-all duration-200 mt-4 hover:border-primary hover:bg-primary-light" onClick={simulateUpload}>
                    <i className="ph ph-cloud-arrow-up text-[48px] text-primary mb-4"></i>
                    <h3 className="mb-2 font-outfit text-lg font-semibold">Drag & Drop CV Anda di sini</h3>
                    <p className="text-text-muted text-sm mt-2">atau klik untuk memilih file dari komputer Anda</p>
                    <div className="mt-6">
                        <span className="px-5 py-2 rounded-full font-medium cursor-pointer transition-all duration-200 border-none font-inter inline-flex items-center gap-2 bg-primary text-white shadow-lg hover:bg-primary-hover hover:-translate-y-0.5 text-[13px]">Pilih File</span>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-bg-card rounded-[20px] p-6 shadow-sm border border-border-color mb-6 text-center py-20 active" id="loading-container">
                <div className="w-12 h-12 border-4 border-primary-light border-t-primary rounded-full animate-spin-fast mx-auto mb-6"></div>
                <h3 className="mb-3 text-[22px] font-outfit font-semibold">Mengekstrak Data...</h3>
                <p className="text-text-muted text-[15px] max-w-[400px] mx-auto">Azure AI Document Intelligence sedang membaca struktur layout CV dan mengekstrak skill Anda.</p>
            </div>
        )}
    </div>
  );
}

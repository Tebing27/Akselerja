import { useState } from 'react';

export default function JobListView({ isActive, onSelectJob }) {
  const jobs = [
    { id: 1, title: 'Technical Support Specialist', type: 'PART-TIME', salary: 'Rp 20jt - 25jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 2, title: 'Senior UX Designer', type: 'FULL-TIME', salary: 'Rp 30jt - 45jt', company: 'Facebook', location: 'Jakarta, Indonesia', logo: 'ph-facebook-logo', featured: true },
    { id: 3, title: 'Marketing Officer', type: 'INTERNSHIP', salary: 'Rp 10jt - 15jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 4, title: 'Junior Graphic Designer', type: 'INTERNSHIP', salary: 'Rp 8jt - 12jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 5, title: 'Interaction Designer', type: 'PART-TIME', salary: 'Rp 25jt - 35jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 6, title: 'Project Manager', type: 'FULL-TIME', salary: 'Rp 35jt - 50jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 7, title: 'Software Engineer', type: 'FULL-TIME', salary: 'Rp 40jt - 60jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 8, title: 'Visual Designer', type: 'FULL-TIME', salary: 'Rp 28jt - 38jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
    { id: 9, title: 'Project Manager', type: 'FULL-TIME', salary: 'Rp 35jt - 50jt', company: 'Google Inc.', location: 'Jakarta, Indonesia', logo: 'ph-google-logo' },
  ];

  return (
    <div className={`view ${isActive ? 'active' : ''} max-w-7xl mx-auto`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-[32px] font-outfit font-bold text-gray-900 leading-tight">Telusuri Lowongan</h2>
          <p className="text-text-muted mt-1">Temukan karir impian Anda dari 1.200+ perusahaan ternama.</p>
        </div>
        <div className="text-sm text-text-muted flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          <button onClick={() => window.location.href = '/'} className="hover:text-blue-600 transition-colors">Home</button> 
          <i className="ph ph-caret-right text-[10px]"></i>
          <span className="text-gray-900 font-semibold uppercase tracking-wider text-[11px]">Cari Kerja</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-border-color flex gap-4 mb-8">
        <div className="flex-1 flex items-center gap-3 px-4 border-r border-gray-100">
          <i className="ph ph-magnifying-glass text-blue-500"></i>
          <input type="text" placeholder="Judul pekerjaan, posisi, kata kunci..." className="w-full bg-transparent outline-none text-sm" />
        </div>
        <div className="flex-1 flex items-center gap-3 px-4">
          <i className="ph ph-map-pin text-blue-500"></i>
          <input type="text" placeholder="Kota, provinsi atau kode pos" className="w-full bg-transparent outline-none text-sm" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
          <i className="ph ph-sliders"></i> Filter
        </button>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
          Cari Kerja
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div 
            key={job.id} 
            className={`bg-white p-6 rounded-xl border transition-all hover:shadow-md cursor-pointer ${job.featured ? 'border-blue-500 ring-1 ring-blue-500/10' : 'border-border-color hover:border-blue-300'}`}
            onClick={() => onSelectJob(job)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                <i className={`ph-fill ${job.logo} text-2xl text-blue-600`}></i>
              </div>
              <i className="ph ph-bookmark text-gray-400 hover:text-blue-600 transition-colors"></i>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${job.type === 'FULL-TIME' ? 'bg-green-100 text-green-700' : job.type === 'PART-TIME' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                  {job.type}
                </span>
                <span className="text-xs text-text-muted">Gaji: {job.salary}</span>
              </div>
              <h3 className="font-semibold text-lg text-text-dark">{job.title}</h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-text-muted">
              <i className="ph ph-buildings"></i>
              <span>{job.company}</span>
              <span className="mx-1">•</span>
              <i className="ph ph-map-pin"></i>
              <span>{job.location}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-2">
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
          <i className="ph ph-caret-left"></i>
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button key={page} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${page === 1 ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-500'}`}>
            {page.toString().padStart(2, '0')}
          </button>
        ))}
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors">
          <i className="ph ph-caret-right"></i>
        </button>
      </div>
    </div>
  );
}

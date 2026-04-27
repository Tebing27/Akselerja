import React from 'react';

export default function CompanyDashboardView({ isActive }) {
  return (
    <div className={`view ${isActive ? 'active' : ''}`}>
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-[28px] mb-2 font-outfit">Pool Talenta</h2>
                <p className="text-text-muted">Kandidat terbaik yang cocok dengan posisi yang Anda buka.</p>
            </div>
            <button className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm cursor-pointer flex items-center gap-2">
              <i className="ph-bold ph-plus"></i> Pasang Lowongan Baru
            </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {[
              { name: 'Budi Santoso', role: 'Data Scientist', exp: '2 thn peng.', loc: 'Jakarta', skills: ['Python', 'SQL', 'Data Viz'], match: 88, matchColor: 'text-green-600', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
              { name: 'Sarah Wilson', role: 'Machine Learning Eng.', exp: '4 thn peng.', loc: 'Remote', skills: ['Python', 'TensorFlow', 'Azure'], match: 94, matchColor: 'text-green-600', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
              { name: 'Michael Chen', role: 'Data Analyst', exp: '1 thn peng.', loc: 'Bandung', skills: ['Excel', 'Tableau', 'SQL'], match: 65, matchColor: 'text-yellow-600', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }
            ].map((candidate, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 flex justify-between items-center hover:border-blue-600 transition-all shadow-sm">
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100">
                            <img src={candidate.img} alt={candidate.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 font-outfit">{candidate.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{candidate.role} • {candidate.exp} • {candidate.loc}</p>
                            <div className="flex gap-2">
                                {candidate.skills.map((skill, j) => (
                                    <span key={j} className="bg-gray-100 text-gray-700 border border-gray-200 text-xs px-2.5 py-1 rounded-full font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-sm font-semibold mb-3 flex items-center gap-1 justify-end ${candidate.matchColor}`}>
                            <i className="ph-fill ph-lightning"></i> {candidate.match}% Cocok
                        </div>
                        <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-medium text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                            Lihat Profil
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

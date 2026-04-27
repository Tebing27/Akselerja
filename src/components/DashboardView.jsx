import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function DashboardView({ isActive, onToLearning }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const reqData = [80, 90, 70, 85, 75, 80];
  const baseUserData = [75, 60, 65, 20, 10, 60];
  
  const [activeSims, setActiveSims] = useState({ ml: false, sql: false, azure: false });
  const baseScore = 78;

  useEffect(() => {
    if (isActive && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      Chart.defaults.font.family = "'Inter', sans-serif";

      const currentData = [...baseUserData];
      if (activeSims.ml) currentData[3] = 75;
      if (activeSims.sql) currentData[1] = 85;
      if (activeSims.azure) currentData[4] = 70;

      chartInstance.current = new Chart(chartRef.current, {
        type: 'radar',
        data: {
            labels: ['Python', 'SQL', 'Data Viz', 'Machine Learning', 'Azure/Cloud', 'Statistik'],
            datasets: [
                {
                    label: 'Kebutuhan Posisi',
                    data: reqData,
                    backgroundColor: 'rgba(100, 116, 139, 0.08)',
                    borderColor: '#94a3b8',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: 'Skill Anda',
                    data: currentData,
                    backgroundColor: 'rgba(127, 119, 221, 0.25)',
                    borderColor: '#7F77DD',
                    pointBackgroundColor: '#7F77DD',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0, max: 100,
                    ticks: { display: false },
                    grid: { color: '#e2e8f0' },
                    angleLines: { color: '#e2e8f0' },
                    pointLabels: { font: { size: 11, weight: '600' }, color: '#475569' }
                }
            },
            plugins: {
                legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, padding: 20 } },
                tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 12, cornerRadius: 8 }
            }
        }
      });
    }

    return () => {
      if (chartInstance.current && !isActive) {
        chartInstance.current.destroy();
      }
    };
  }, [isActive, activeSims]);

  const toggleSim = (skill) => {
    setActiveSims(prev => ({ ...prev, [skill]: !prev[skill] }));
  };

  let currentSimBoost = 0;
  if (activeSims.ml) currentSimBoost += 12;
  if (activeSims.sql) currentSimBoost += 5;
  if (activeSims.azure) currentSimBoost += 8;

  const totalScore = Math.min(100, baseScore + currentSimBoost);
  const isHighMatch = totalScore >= 85;

  return (
    <div className={`view ${isActive ? 'active' : ''}`}>
        <div className="flex justify-between items-start mb-8">
            <div>
                <h2 className="text-[28px] mb-2 font-outfit">Kesesuaian Kerja & Gap Skill</h2>
                <p className="text-text-muted">Target: <strong>Data Scientist</strong>. Hasil berdasarkan pencocokan semantik.</p>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#E6F1FB] text-[#0C447C] text-xs px-3 py-1.5 rounded-full font-medium border border-[#0C447C]/10 m-0">
                <i className="ph-fill ph-microsoft-logo text-[#0078D4]"></i> Azure AI Search
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            <div>
                <h3 className="text-base mb-4 flex items-center gap-2 text-text-dark font-outfit font-semibold">
                    <i className="ph-fill ph-briefcase text-primary"></i> Rekomendasi Lowongan
                </h3>
                
                <div className={`bg-[#fdfdff] rounded-xl p-5 border border-primary shadow-sm mb-4 transition-all duration-200 cursor-pointer relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md ${isHighMatch ? 'ring-2 ring-accent/30' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <div className="font-semibold text-lg mb-1 text-text-dark">Data Scientist</div>
                            <div className="text-text-muted text-sm flex items-center gap-1.5"><i className="ph-fill ph-buildings"></i> TechNusa Corp · Jakarta</div>
                        </div>
                        <div className={`font-semibold px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-all duration-300 ${isHighMatch ? 'bg-accent-light text-accent-dark' : 'bg-[#FEF3C7] text-[#92400E]'}`}>
                            <i className="ph-fill ph-lightning"></i> <span>{totalScore}% Cocok</span>
                        </div>
                    </div>
                    <p className="text-[13px] text-text-muted leading-relaxed mb-4">
                        Fokus pada Machine Learning, Advanced SQL, dan ekosistem Cloud Data Platforms (diutamakan Azure).
                    </p>
                    <button className="w-full justify-center px-4 py-2.5 text-[13px] rounded-full font-medium cursor-pointer transition-all duration-200 border-[1.5px] border-primary font-inter inline-flex items-center gap-2 bg-transparent text-primary hover:bg-primary-light" onClick={onToLearning}>Lihat Rekomendasi Belajar</button>
                </div>

                <div className="bg-bg-card rounded-xl p-5 border border-border-color mb-4 transition-all duration-200 cursor-pointer relative overflow-hidden hover:border-primary hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <div className="font-semibold text-lg mb-1 text-text-dark">Machine Learning Spec.</div>
                            <div className="text-text-muted text-sm flex items-center gap-1.5"><i className="ph-fill ph-buildings"></i> FinBank ID · Jakarta</div>
                        </div>
                        <div className="font-semibold px-3 py-1.5 rounded-full text-sm flex items-center gap-1 bg-[#FEF3C7] text-[#92400E]"><i className="ph-fill ph-lightning"></i> 62% Cocok</div>
                    </div>
                </div>
                
                <div className="bg-bg-card rounded-xl p-5 border border-border-color mb-4 transition-all duration-200 cursor-pointer relative overflow-hidden hover:border-primary hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <div className="font-semibold text-lg mb-1 text-text-dark">Data Analyst (Senior)</div>
                            <div className="text-text-muted text-sm flex items-center gap-1.5"><i className="ph-fill ph-buildings"></i> E-Comm Indo · Remote</div>
                        </div>
                        <div className="font-semibold px-3 py-1.5 rounded-full text-sm flex items-center gap-1 bg-accent-light text-accent-dark"><i className="ph-fill ph-lightning"></i> 89% Cocok</div>
                    </div>
                </div>
            </div>

            <div className="bg-bg-card rounded-[20px] p-6 shadow-sm border border-border-color mb-0">
                <h3 className="text-base mb-2 text-center font-outfit font-semibold">Analisis Gap Skill</h3>
                <p className="text-xs text-text-muted text-center mb-4">Anda vs Kebutuhan TechNusa Corp</p>
                
                <div className="relative h-[300px] w-full mt-4">
                    <canvas ref={chartRef}></canvas>
                </div>

                <div className="mt-6 pt-6 border-t border-border-color">
                    <div className="text-[15px] font-semibold mb-4 flex items-center gap-2">
                        <i className="ph-fill ph-magic-wand text-[#a855f7] text-lg"></i> Simulator Gap Skill
                    </div>
                    <p className="text-[13px] text-text-muted mb-4 leading-relaxed">Simulasikan jika Anda mempelajari skill yang masih kurang di bawah ini:</p>
                    
                    <div className={`flex items-center justify-between px-4 py-3 bg-bg-main rounded-xl mb-2 cursor-pointer border transition-all duration-200 hover:border-border-color ${activeSims.ml ? 'bg-primary-light border-primary' : 'border-transparent'}`} onClick={() => toggleSim('ml')}>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <div className={`w-[18px] h-[18px] border-2 rounded-[4px] flex items-center justify-center ${activeSims.ml ? 'bg-primary border-primary' : 'border-slate-300'}`}>
                                {activeSims.ml && <i className="ph-bold ph-check text-white text-[12px]"></i>}
                            </div>
                            Machine Learning
                        </div>
                        <div className="text-accent font-semibold text-[13px]">+12%</div>
                    </div>
                    
                    <div className={`flex items-center justify-between px-4 py-3 bg-bg-main rounded-xl mb-2 cursor-pointer border transition-all duration-200 hover:border-border-color ${activeSims.sql ? 'bg-primary-light border-primary' : 'border-transparent'}`} onClick={() => toggleSim('sql')}>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <div className={`w-[18px] h-[18px] border-2 rounded-[4px] flex items-center justify-center ${activeSims.sql ? 'bg-primary border-primary' : 'border-slate-300'}`}>
                                {activeSims.sql && <i className="ph-bold ph-check text-white text-[12px]"></i>}
                            </div>
                            SQL Tingkat Lanjut
                        </div>
                        <div className="text-accent font-semibold text-[13px]">+5%</div>
                    </div>

                    <div className={`flex items-center justify-between px-4 py-3 bg-bg-main rounded-xl mb-2 cursor-pointer border transition-all duration-200 hover:border-border-color ${activeSims.azure ? 'bg-primary-light border-primary' : 'border-transparent'}`} onClick={() => toggleSim('azure')}>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <div className={`w-[18px] h-[18px] border-2 rounded-[4px] flex items-center justify-center ${activeSims.azure ? 'bg-primary border-primary' : 'border-slate-300'}`}>
                                {activeSims.azure && <i className="ph-bold ph-check text-white text-[12px]"></i>}
                            </div>
                            Azure Data Services
                        </div>
                        <div className="text-accent font-semibold text-[13px]">+8%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default function Sidebar({ currentView, onViewChange, role }) {
  const seekerNavItems = [
    { id: 'dashboard', icon: 'ph-target', label: 'Match & Gap Kerja' },
    { id: 'jobs', icon: 'ph-briefcase', label: 'Cari Kerja' },
    { id: 'learning', icon: 'ph-graduation-cap', label: 'Jalur Belajar' },
    { id: 'chat', icon: 'ph-chat-teardrop-dots', label: 'Advisor AI' },
  ];

  const companyNavItems = [
    { id: 'talent-pool', icon: 'ph-users', label: 'Pool Talenta' },
    { id: 'post-job', icon: 'ph-briefcase', label: 'Pasang Lowongan' },
  ];

  const navItems = role === 'company' ? companyNavItems : seekerNavItems;

  return (
    <nav className="w-[260px] bg-white border-r border-gray-200 p-6 flex flex-col h-screen sticky top-0 shrink-0 shadow-sm">
      <div className="font-outfit text-2xl font-bold text-blue-600 flex items-center gap-2 mb-12 cursor-pointer transition-transform hover:scale-105">
          <i className="ph-fill ph-briefcase"></i> Akselerja
      </div>
      <div className="flex flex-col gap-2">
        {navItems.map(item => (
          <a
            key={item.id}
            className={`px-4 py-3 rounded-md text-gray-500 no-underline flex items-center gap-3 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 ${currentView === item.id ? 'bg-blue-50 !text-blue-600' : ''}`}
            onClick={() => onViewChange(item.id)}
          >
            <i className={`ph ${item.icon} text-lg`}></i> {item.label}
          </a>
        ))}
      </div>
      <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                  {role === 'seeker' ? 'BS' : 'TC'}
              </div>
              <div>
                  <div className="text-sm font-semibold text-gray-900">{role === 'seeker' ? 'Budi Santoso' : 'TechNusa Corp'}</div>
                  <div className="text-xs text-gray-500">{role === 'seeker' ? 'Pencari Kerja' : 'Perusahaan'}</div>
              </div>
          </div>
      </div>
    </nav>
  );
}

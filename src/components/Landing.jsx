import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


export const TopBar = () => (
  <div className="bg-gray-100 text-sm py-2 px-8 flex justify-between items-center text-gray-600 hidden md:flex">
    <div className="flex gap-6">
      <Link to="/" className="hover:text-blue-600 no-underline">Beranda</Link>
      <Link to="/jobs" className="hover:text-blue-600 no-underline">Cari Lowongan</Link>
      <Link to="/company" className="hover:text-blue-600 no-underline">Perusahaan</Link>
      <Link to="/dashboard" className="hover:text-blue-600 no-underline">Dashboard</Link>
      <a href="#" className="hover:text-blue-600 no-underline">Pusat Bantuan</a>
    </div>
    <div className="flex gap-6 items-center">
      <span className="flex items-center gap-2"><i className="ph ph-phone"></i> +62-21-5555-0178</span>
      <span className="flex items-center gap-1">Bahasa Indonesia <i className="ph ph-caret-down"></i></span>
    </div>
  </div>
);

export const NavBar = ({ onNavigate }) => (
  <nav className="border-b border-gray-200 py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-50">
    <div className="flex items-center gap-8">
      <div className="font-outfit text-2xl font-bold text-blue-600 flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
        <i className="ph-fill ph-briefcase"></i> Akselerja
      </div>
      <div className="hidden lg:flex items-center border border-gray-300 rounded-md px-3 py-2">
        <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5 h-auto mr-2"/>
        <span className="text-sm font-medium mr-2">Indonesia</span>
        <i className="ph ph-caret-down text-gray-400"></i>
        <div className="w-px h-5 bg-gray-300 mx-3"></div>
        <i className="ph ph-magnifying-glass text-gray-400 mr-2"></i>
        <input type="text" placeholder="Judul pekerjaan, kata kunci, perusahaan" className="outline-none text-sm w-64" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-blue-600 font-medium px-4 py-2 hover:bg-blue-50 rounded-md transition-colors" onClick={() => onNavigate('auth', 'seeker')}>Masuk</button>
      <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm" onClick={() => onNavigate('auth', 'company')}>Pasang Lowongan</button>
    </div>
  </nav>
);

const Hero = () => (
  <div className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 font-outfit">
          Temukan pekerjaan yang <br/> sesuai minat & skill Anda.
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          Akselerja membantu Anda menemukan karir impian dengan teknologi AI Semantic Search dan analisis gap skill otomatis.
        </p>
        <div className="bg-white p-2 rounded-lg shadow-sm flex items-center border border-gray-200 mb-10">
          <div className="flex items-center px-4 flex-1 border-r border-gray-200">
            <i className="ph ph-magnifying-glass text-gray-400 text-xl mr-3"></i>
            <input type="text" placeholder="Judul pekerjaan, kata kunci..." className="w-full outline-none text-gray-700" />
          </div>
          <div className="flex items-center px-4 flex-1">
            <i className="ph ph-map-pin text-gray-400 text-xl mr-3"></i>
            <input type="text" placeholder="Lokasi Anda" className="w-full outline-none text-gray-700" />
          </div>
          <button 
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            onClick={() => navigate('/jobs')}
          >
            Cari Kerja
          </button>
        </div>
        <p className="text-sm text-gray-500">
          <span className="text-gray-400">Saran:</span> Desainer, Pemrograman, <span className="text-blue-600">Digital Marketing</span>, Video, Animasi.
        </p>
      </div>
      <div className="hidden lg:block">
        <img src="https://illustrations.popsy.co/blue/work-from-home.svg" alt="Hero Illustration" className="w-[500px]" />
      </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-12 -mt-10 relative z-10 max-w-7xl mx-auto">
    {[
      { icon: 'ph-briefcase', count: '175,324', label: 'Lowongan Aktif', bg: 'bg-blue-50', color: 'text-blue-600' },
      { icon: 'ph-buildings', count: '97,354', label: 'Perusahaan', bg: 'bg-blue-600', color: 'text-white' },
      { icon: 'ph-users', count: '3,847,154', label: 'Kandidat', bg: 'bg-blue-50', color: 'text-blue-600' },
      { icon: 'ph-briefcase-metal', count: '7,532', label: 'Lowongan Baru', bg: 'bg-blue-50', color: 'text-blue-600' },
    ].map((stat, i) => (
      <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
        <div className={`w-16 h-16 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center text-3xl`}>
          <i className={`ph-fill ${stat.icon}`}></i>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
          <div className="text-gray-500 text-sm">{stat.label}</div>
        </div>
      </div>
    ))}
  </div>
);

const PopularVacancies = ({ onNavigate }) => (
  <div className="py-16 px-8 max-w-7xl mx-auto border-t border-gray-100">
    <h2 className="text-2xl font-bold mb-10 font-outfit">Lowongan Paling Populer</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        ['Anestesiologi', 'Ahli Bedah', 'Dokter Kandungan', 'Ortodontis'],
        ['Bedah Mulut', 'Pengembang Software', 'Psikiater', 'Data Scientist'],
        ['Manajer Keuangan', 'Analis Manajemen', 'Manajer IT', 'Analis Riset Operasi']
      ].map((col, i) => (
        <div key={i} className="flex flex-col gap-4">
          {col.map((job, j) => (
            <div key={j}>
              <button onClick={() => onNavigate('/jobs')} className="font-medium text-gray-900 hover:text-blue-600 block mb-1 text-left">{job}</button>
              <span className="text-sm text-gray-500">45,904 Posisi Terbuka</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="bg-gray-50 py-20 px-8 text-center">
    <h2 className="text-3xl font-bold mb-16 font-outfit">Cara kerja Akselerja</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      <div className="hidden md:block absolute top-10 left-1/8 right-1/8 border-t-2 border-dashed border-gray-300 z-0"></div>
      {[
        { icon: 'ph-user-plus', title: 'Buat akun', desc: 'Daftar sebagai kandidat atau perusahaan dengan mudah.' },
        { icon: 'ph-upload-simple', title: 'Upload CV/Resume', desc: 'AI kami akan mengekstrak data Anda secara otomatis.', active: true },
        { icon: 'ph-magnifying-glass', title: 'Cari lowongan sesuai', desc: 'Dapatkan rekomendasi berdasarkan gap skill Anda.' },
        { icon: 'ph-check-circle', title: 'Lamar pekerjaan', desc: 'Kirim lamaran Anda hanya dengan satu klik.' }
      ].map((step, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm ${step.active ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <i className={`ph ${step.icon}`}></i>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-500 px-4">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const FeaturedJobs = ({ onNavigate }) => (
  <div className="py-20 px-8 max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-3xl font-bold font-outfit">Lowongan Unggulan</h2>
      <button onClick={() => onNavigate('/jobs')} className="text-blue-600 font-medium hover:underline flex items-center gap-1">Lihat Semua <i className="ph-bold ph-arrow-right"></i></button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors shadow-sm bg-white group cursor-pointer" onClick={() => onNavigate('/jobs/detail')}>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Penuh Waktu</div>
            <i className="ph ph-bookmark-simple text-gray-400 text-xl hover:text-blue-600"></i>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Technical Support Specialist</h3>
          <p className="text-sm text-gray-500 mb-6">Gaji: Rp 15.000.000 - Rp 25.000.000</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2">
              <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Google Inc.</div>
              <div className="text-xs text-gray-500 flex items-center gap-1"><i className="ph-fill ph-map-pin"></i> Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CtaBanners = ({ onNavigate }) => (
  <div className="py-12 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-between overflow-hidden relative group">
      <div className="relative z-10 max-w-[60%]">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-outfit">Jadi Kandidat</h2>
        <p className="text-gray-600 mb-6 text-sm">Daftarkan diri Anda dan biarkan AI kami menemukan pekerjaan yang paling cocok dengan skill Anda.</p>
        <button className="bg-white text-blue-600 px-6 py-2.5 rounded-md font-semibold border border-gray-200 hover:border-blue-600 transition-colors shadow-sm" onClick={() => onNavigate('auth', 'seeker')}>
          Daftar Sekarang <i className="ph-bold ph-arrow-right ml-1"></i>
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Candidate" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
    </div>
    
    <div className="bg-blue-600 rounded-2xl p-10 flex items-center justify-between overflow-hidden relative group text-white">
      <div className="relative z-10 max-w-[60%]">
        <h2 className="text-3xl font-bold mb-4 font-outfit">Jadi Perusahaan</h2>
        <p className="text-blue-100 mb-6 text-sm">Temukan talenta terbaik dengan akurasi tinggi menggunakan teknologi semantic matching kami.</p>
        <button className="bg-white text-blue-600 px-6 py-2.5 rounded-md font-semibold hover:bg-gray-50 transition-colors shadow-sm" onClick={() => onNavigate('auth', 'company')}>
          Daftar Sekarang <i className="ph-bold ph-arrow-right ml-1"></i>
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Employer" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
    </div>
  </div>
);

export const Footer = () => (
  <footer className="bg-[#18191C] text-gray-300 pt-16 pb-8 px-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
      <div className="col-span-2">
        <div className="font-outfit text-2xl font-bold text-white flex items-center gap-2 mb-6">
          <i className="ph-fill ph-briefcase"></i> Akselerja
        </div>
        <p className="text-sm text-gray-400 mb-6 max-w-xs">Hubungi kami: <span className="text-white font-semibold">(021) 555-0115</span><br/><br/>Jl. Sudirman No. 123, Jakarta Pusat, Indonesia</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
        <ul className="flex flex-col gap-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
          <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><i className="ph-bold ph-arrow-right text-blue-500"></i> Kontak</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Harga</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-6">Kandidat</h4>
        <ul className="flex flex-col gap-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Telusuri Lowongan</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Telusuri Perusahaan</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Dashboard Kandidat</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Lowongan Tersimpan</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
        <ul className="flex flex-col gap-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Pasang Lowongan</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Telusuri Kandidat</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Dashboard Perusahaan</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Lamaran Masuk</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-500">
      <p>&copy; 2026 Akselerja - Portal Lowongan Kerja. Seluruh hak cipta dilindungi.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white"><i className="ph-fill ph-facebook-logo text-xl"></i></a>
        <a href="#" className="hover:text-white"><i className="ph-fill ph-youtube-logo text-xl"></i></a>
        <a href="#" className="hover:text-white"><i className="ph-fill ph-instagram-logo text-xl"></i></a>
        <a href="#" className="hover:text-white"><i className="ph-fill ph-twitter-logo text-xl"></i></a>
      </div>
    </div>
  </footer>
);

export default function Landing({ onNavigate }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white font-inter">
      <TopBar />
      <NavBar onNavigate={onNavigate} />
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 font-outfit">
              Temukan pekerjaan yang <br/> sesuai minat & skill Anda.
            </h1>
            <p className="text-gray-500 mb-8 text-lg">
              Akselerja membantu Anda menemukan karir impian dengan teknologi AI Semantic Search dan analisis gap skill otomatis.
            </p>
            <div className="bg-white p-2 rounded-lg shadow-sm flex items-center border border-gray-200 mb-10">
              <div className="flex items-center px-4 flex-1 border-r border-gray-200">
                <i className="ph ph-magnifying-glass text-gray-400 text-xl mr-3"></i>
                <input type="text" placeholder="Judul pekerjaan, kata kunci..." className="w-full outline-none text-gray-700" />
              </div>
              <div className="flex items-center px-4 flex-1">
                <i className="ph ph-map-pin text-gray-400 text-xl mr-3"></i>
                <input type="text" placeholder="Lokasi Anda" className="w-full outline-none text-gray-700" />
              </div>
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={() => navigate('/jobs')}
              >
                Cari Kerja
              </button>
            </div>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">Saran:</span> Desainer, Pemrograman, <span className="text-blue-600">Digital Marketing</span>, Video, Animasi.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src="https://illustrations.popsy.co/blue/work-from-home.svg" alt="Hero Illustration" className="w-[500px]" />
          </div>
        </div>
      </div>
      <Stats />
      <PopularVacancies onNavigate={navigate} />
      <HowItWorks />
      <FeaturedJobs onNavigate={navigate} />
      <CtaBanners onNavigate={onNavigate} />
      <Footer />
    </div>
  );
}

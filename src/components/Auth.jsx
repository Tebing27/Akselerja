import React, { useState } from 'react';

export default function Auth({ role, onBack, onComplete }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-inter animate-fade-in">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6 cursor-pointer" onClick={onBack}>
          <div className="font-outfit text-3xl font-bold text-blue-600 flex items-center gap-2">
            <i className="ph-fill ph-briefcase"></i> Akselerja
          </div>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-900 font-outfit">
          {isLogin ? 'Masuk ke akun Anda' : 'Buat akun baru'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Atau{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            {isLogin ? 'daftar sebagai pengguna baru' : 'masuk ke akun yang sudah ada'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          
          <div className="mb-6 bg-gray-100 p-1 rounded-md flex">
             <div className="flex-1 py-2 text-center text-sm font-medium rounded-md bg-white shadow-sm text-blue-600 border border-gray-200">
               Peran {role === 'seeker' ? 'Kandidat' : 'Perusahaan'}
             </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onComplete(isLogin ? 'login' : 'register', role); }}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Lengkap / Nama Perusahaan</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ph ph-user text-gray-400"></i>
                  </div>
                  <input type="text" className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md py-2.5 border outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Budi Santoso" />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ph ph-envelope text-gray-400"></i>
                </div>
                <input type="email" required className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md py-2.5 border outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="nama@contoh.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ph ph-lock text-gray-400"></i>
                </div>
                <input type="password" required className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md py-2.5 border outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label className="ml-2 block text-sm text-gray-900">Ingat saya</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Lupa kata sandi?</a>
                </div>
              </div>
            )}

            <div>
              <button type="submit" className="cursor-pointer w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                {isLogin ? 'Masuk' : 'Buat Akun'} <i className="ph-bold ph-arrow-right ml-2 mt-0.5"></i>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

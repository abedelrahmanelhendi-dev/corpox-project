import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar - القائمة الجانبية */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 p-6 hidden md:block">
        <div className="text-2xl font-bold text-blue-500 mb-8">CorpoX Admin</div>
        <nav className="space-y-4">
          <a href="#" className="block py-2.5 px-4 rounded bg-blue-600 text-white font-medium">Dashboard</a>
          <a href="#" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition">Users</a>
          <a href="#" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition">Projects</a>
          <a href="#" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition">Services</a>
          <a href="#" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition">Settings</a>
        </nav>
      </aside>

      {/* Main Content - المحتوى الرئيسي */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Admin User</span>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">A</div>
          </div>
        </header>

        {/* Statistics Cards - بطاقات الإحصائيات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Total Users</p>
            <h3 className="text-3xl font-bold mt-2">1,250</h3>
            <span className="text-green-400 text-xs mt-1 block">+12% from last month</span>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Projects</p>
            <h3 className="text-3xl font-bold mt-2">230</h3>
            <span className="text-green-400 text-xs mt-1 block">+8% from last month</span>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Messages</p>
            <h3 className="text-3xl font-bold mt-2">75</h3>
            <span className="text-green-400 text-xs mt-1 block">+15% new</span>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Blog Posts</p>
            <h3 className="text-3xl font-bold mt-2">45</h3>
            <span className="text-green-400 text-xs mt-1 block">+10% active</span>
          </div>
        </div>

        {/* Recent Projects Table - جدول إدارة المشاريع */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Projects</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">Add New Project</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="border-b border-slate-700 text-slate-400">
                <tr>
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="py-3 font-medium text-white">Business Website</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Completed</span></td>
                  <td className="py-3">01 May 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">E-Commerce Website</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3"><span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">In Progress</span></td>
                  <td className="py-3">10 May 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Finance Dashboard</td>
                  <td className="py-3">UI/UX Design</td>
                  <td className="py-3"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Completed</span></td>
                  <td className="py-3">15 May 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
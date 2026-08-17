import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-wider">CorpoX</h2>
          <p className="text-slate-400 text-sm mt-2">Reset your password</p>
        </div>

        {submitted ? (
          <div className="bg-blue-500/10 border border-blue-500 text-blue-400 p-4 rounded-lg text-center text-sm">
            Instructions to reset your password have been sent to your email address.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@corpox.com"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
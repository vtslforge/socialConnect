/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendPasswordResetEmail 
} from "firebase/auth";
import { 
  Activity, 
  ArrowRight, 
  Mail, 
  Lock, 
  Chrome,
  Github,
  Loader2 // Added for loading states
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import  app  from '../firebase'; // Your firebase config file

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  // 1. Handle Email/Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle Google Login (The Chrome Icon)
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      setError("Failed to sign in with Google.");
    }
  };

  // 3. Handle Password Reset
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email!");
    } catch (err: any) {
      setError("Could not send reset email.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 overflow-hidden relative flex items-center justify-center px-6">
      
      {/* --- Background Elements --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-purple-50 rounded-full blur-[120px] opacity-60 z-0 pointer-events-none" />

      {/* --- Login Card --- */}
      <div className="relative z-10 w-full max-w-110">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-12 justify-center group">
          <Activity size={26} className="text-black group-hover:rotate-12 transition-transform" />
          <span>SocialPulse</span>
        </NavLink>

        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-10 rounded-4xl shadow-2xl shadow-purple-500/5">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
            <p className="text-sm text-gray-500 font-medium">Enter your credentials to access your pulse.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold rounded-xl text-center">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400 text-sm"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button 
                  type="button" 
                  onClick={handleForgotPassword}
                  className="text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-lg shadow-gray-900/10 hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>Sign In <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative bg-white px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Fast Login
              </span>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleGoogleLogin}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-sm cursor-pointer shadow-sm"
              >
                <Chrome size={18} className="text-gray-600" />
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-sm cursor-pointer shadow-sm">
                <Github size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          New to the platform? <NavLink to="/signup" className="text-gray-900 font-bold hover:underline underline-offset-4">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
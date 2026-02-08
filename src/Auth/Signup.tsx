/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { 
  Activity, 
  ArrowRight, 
  Mail, 
  Lock, 
  User, 
  CheckCircle2,
  Loader2 // Added for loading state
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import  app  from '../firebase'; // Ensure you have your firebase config exported

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user profile with the Full Name
      await updateProfile(userCredential.user, {
        displayName: fullName
      });

      console.log("User created:", userCredential.user);
      navigate('/dashboard'); // Redirect after success
    } catch (err: any) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 overflow-x-hidden relative flex flex-col md:flex-row">
      
      {/* --- Background Elements --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* --- Left Side: Branding & Social Proof --- */}
      <div className="hidden md:flex md:w-1/2 relative z-10 flex-col justify-center px-16 bg-linear-to-b from-purple-50/50 to-transparent">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-12">
          <Activity size={28} className="text-black" />
          <span>SocialPulse</span>
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-6">
          Start making <br />
          <span className="text-purple-600">smarter</span> decisions.
        </h2>

        <div className="space-y-6">
          {["Real-time data aggregation", "Advanced sentiment analysis", "Unified cross-platform reporting"].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-600 font-medium">
              <CheckCircle2 size={20} className="text-purple-500" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* --- Right Side: Signup Form --- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-0">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-gray-500">Join 2,000+ marketers optimizing their reach.</p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold shadow-xl shadow-gray-900/10 hover:bg-black hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-70 disabled:transform-none"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <>Create Account <ArrowRight size={18} /></>}
            </button>
          </form>

          {/* Social Buttons & Footer remains the same */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account? <NavLink to="/login" className="text-purple-600 font-bold hover:underline">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
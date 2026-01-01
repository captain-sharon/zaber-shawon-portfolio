
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!supabase) {
            setError("Database connection not valid.");
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Redirect to dashboard on success
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                        <Lock size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Employee Login</h2>
                    <p className="text-gray-400">Access the message dashboard</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 text-white transition-all"
                            placeholder="employee@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500 text-white transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all flex items-center justify-center"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <div className="text-center">
                        <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">← Back to Portfolio</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { LogOut, Mail, Calendar, User, ArrowUpDown } from 'lucide-react';

interface Message {
    id: number;
    created_at: string;
    name: string;
    email: string;
    message: string;
}

const Dashboard: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
    }, [sortOrder]);

    const fetchMessages = async () => {
        if (!supabase) return;

        // Check if user is authenticated
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            navigate('/login');
            return;
        }

        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .order('created_at', { ascending: sortOrder === 'asc' });

            if (error) {
                console.error('Error fetching messages:', error);
            } else {
                setMessages(data || []);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut();
            navigate('/login');
        }
    };

    const toggleSort = () => {
        setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    if (loading && messages.length === 0) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Message Dashboard</h1>
                        <p className="text-gray-400">Viewing {messages.length} messages</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSort}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-white/10 rounded-xl hover:bg-gray-800 hover:border-orange-500/30 transition-all text-sm font-medium text-gray-300"
                        >
                            <ArrowUpDown size={18} />
                            Sort: {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                        </button>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-white/10 rounded-xl hover:bg-red-900/20 hover:text-red-400 hover:border-red-500/30 transition-all text-sm font-medium"
                        >
                            <LogOut size={18} />
                            Sign Out
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {messages.length === 0 && !loading ? (
                        <div className="col-span-full text-center py-24 text-gray-500 bg-gray-900/30 rounded-3xl border border-white/5">
                            <Mail size={48} className="mx-auto mb-4 opacity-50" />
                            <p>No messages found yet.</p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className="bg-gray-900 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Calendar size={14} />
                                        {new Date(msg.created_at).toLocaleDateString()}
                                    </div>
                                    <span className="text-xs font-mono text-gray-600 bg-gray-950 px-2 py-1 rounded">
                                        #{msg.id}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                                    <User size={16} className="text-orange-500" />
                                    {msg.name}
                                </h3>
                                <a href={`mailto:${msg.email}`} className="text-sm text-gray-400 hover:text-orange-400 mb-4 block transition-colors">
                                    {msg.email}
                                </a>

                                <div className="bg-gray-950/50 p-4 rounded-xl text-gray-300 text-sm leading-relaxed border border-white/5 group-hover:bg-gray-950 transition-colors">
                                    {msg.message}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

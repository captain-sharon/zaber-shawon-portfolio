
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import Navbar from './Navbar';
import Hero from './Hero';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import GeminiChat from './GeminiChat';

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in and redirect to dashboard if so
        const checkUser = async () => {
            if (supabase) {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    navigate('/dashboard');
                }
            }
        };
        checkUser();

        const handleScroll = () => {
            const sections = ['home', 'experience', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigate]);

    return (
        <div className="min-h-screen text-gray-100 bg-gray-950 selection:bg-orange-600/30 selection:text-orange-500">
            <Navbar activeSection={activeSection} />

            <main>
                <section id="home">
                    <Hero />
                </section>

                <section id="experience" className="py-24 px-6 md:px-12">
                    <ExperienceSection />
                </section>

                <section id="skills" className="py-24 px-6 md:px-12 bg-gray-900/30">
                    <SkillsSection />
                </section>

                <section id="contact" className="py-24 px-6 md:px-12">
                    <ContactSection />
                </section>
            </main>

            <Footer />
            <GeminiChat />
        </div>
    );
};

export default Portfolio;

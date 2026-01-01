
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { sendEmail } from '../services/emailService';
import { saveMessage } from '../services/messageService';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create promises for both operations
      const emailPromise = sendEmail({
        to_name: "Zaber Shawon",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      });

      const dbPromise = saveMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Wait for both, but don't let one failure stop the other if possible
      // Using allSettled to track status of both
      const results = await Promise.allSettled([emailPromise, dbPromise]);

      const emailResult = results[0];
      const dbResult = results[1];

      // Log errors if any
      if (emailResult.status === 'rejected') {
        console.error("EmailJS failed:", emailResult.reason);
      }
      if (dbResult.status === 'rejected') {
        console.error("Supabase failed:", dbResult.reason);
      }

      // Conside success if at least one succeeded or just proceed. 
      // Usually we want to show success to user if they submitted.
      // If both fail, then show error.
      if (emailResult.status === 'rejected' && dbResult.status === 'rejected') {
        throw new Error("Failed to send message and save to database.");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setIsSubmitting(false);
      alert(`Failed to send message: ${errorMessage}. Check console for details.`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-6">Let's build something <span className="text-orange-500">extraordinary</span>.</h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind or just want to say hi? I'm always open to discussing new projects,
            creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-xl text-white font-medium">azshawon75@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call Me</p>
                <p className="text-xl text-white font-medium">+8801317792907</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Location</p>
                <p className="text-xl text-white font-medium">Mohanogor project, Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {isSubmitted && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center glass rounded-3xl animate-in fade-in zoom-in">
              <CheckCircle2 size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">I'll get back to you as soon as possible.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-gray-900 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white placeholder:text-gray-700 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-gray-900 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white placeholder:text-gray-700 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 bg-gray-900 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white placeholder:text-gray-700 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={20} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

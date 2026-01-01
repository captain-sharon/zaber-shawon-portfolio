
import { supabase } from './supabaseClient';

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export const saveMessage = async (data: ContactMessage) => {
    if (!supabase) {
        console.warn('Supabase client is not initialized. Message not saved to database.');
        // Return mock success or specific error. 
        // Returning success to allow the form to "succeed" via email even if DB is down,
        // or we could throw an error if we want the user to know DB failed.
        // Given the previous dual-promise setup, better to throw or return error so it's logged but doesn't crash.
        // However, if we want the site to "work" (send email), we should probably just return.
        return { success: false, error: 'Database not configured' };
    }

    try {
        const { error } = await supabase
            .from('messages')
            .insert([
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
            ]);

        if (error) {
            throw error;
        }

        return { success: true };
    } catch (error) {
        console.error('Error saving message to Supabase:', error);
        throw error;
    }
};


import { supabase } from './supabaseClient';

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export const saveMessage = async (data: ContactMessage) => {
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

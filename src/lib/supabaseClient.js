import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Menambah ucapan baru ke dalam jadual 'guestbook'
 * @param {string} name - Nama pemberi ucapan
 * @param {string} message - Isi ucapan
 * @param {string} relation - Hubungan tetamu
 * @param {string} emoji - Emoji pilihan (pilihan)
 * @returns {Promise<{data: any, error: any}>}
 */
export const addMessage = async (name, message, relation, emoji = null) => {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .insert([
        { nama: name, message: message, relation: relation, emoji: emoji }
      ])
      .select()

    if (error) {
      console.error('Error inserting message:', error.message)
      return { data: null, error }
    }

    return { data, error: null }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { data: null, error: err }
  }
}

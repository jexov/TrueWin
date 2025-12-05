import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  user_id: string;
  primary_username: string;
  telegram_username?: string;
  instagram_username?: string;
  tokens_owned: number;
  vip_status: boolean;
  vip_tier?: string;
  vip_expiry?: string;
  created_at: string;
}

export async function loginUser(username: string, password: string): Promise<AuthUser | null> {
  try {
    const { data, error } = await supabase
      .from('user_accounts')
      .select('*')
      .or(`primary_username.eq.${username},telegram_username.eq.${username},instagram_username.eq.${username}`)
      .eq('password', password)
      .eq('is_active', true)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    await supabase
      .from('user_accounts')
      .update({ last_login: new Date().toISOString() })
      .eq('id', data.id);

    return {
      id: data.id,
      user_id: data.user_id,
      primary_username: data.primary_username,
      telegram_username: data.telegram_username,
      instagram_username: data.instagram_username,
      tokens_owned: data.tokens_owned,
      vip_status: data.vip_status,
      vip_tier: data.vip_tier,
      vip_expiry: data.vip_expiry,
      created_at: data.created_at,
    };
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
}

export async function registerUser(
  primaryUsername: string,
  password: string,
  telegramUsername?: string,
  instagramUsername?: string
): Promise<{ success: boolean; error?: string; user?: AuthUser }> {
  try {
    const existingUser = await supabase
      .from('user_accounts')
      .select('id')
      .or(`primary_username.eq.${primaryUsername}${telegramUsername ? `,telegram_username.eq.${telegramUsername}` : ''}${instagramUsername ? `,instagram_username.eq.${instagramUsername}` : ''}`)
      .maybeSingle();

    if (existingUser.data) {
      return { success: false, error: 'Username already exists' };
    }

    const { data, error } = await supabase
      .from('user_accounts')
      .insert({
        primary_username: primaryUsername,
        telegram_username: telegramUsername || null,
        instagram_username: instagramUsername || null,
        password: password,
        tokens_owned: 0,
        vip_status: false,
        is_active: true,
      })
      .select()
      .single();

    if (error || !data) {
      return { success: false, error: 'Registration failed. Please try again.' };
    }

    return {
      success: true,
      user: {
        id: data.id,
        user_id: data.user_id,
        primary_username: data.primary_username,
        telegram_username: data.telegram_username,
        instagram_username: data.instagram_username,
        tokens_owned: data.tokens_owned,
        vip_status: data.vip_status,
        vip_tier: data.vip_tier,
        vip_expiry: data.vip_expiry,
        created_at: data.created_at,
      },
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';

let production = true;
if (dev) {
  production = false;
}

export function loginUser(cookies: Cookies, token: string, username: string) {
  cookies.set('token', token, {
    path: '/',
    httpOnly: true,
    secure: production,
    sameSite: 'strict'
  });

  cookies.set('username', username, {
    path: '/',
    httpOnly: true,
    secure: production,
    sameSite: 'strict'
  });
}

export function logoutUser() {

}

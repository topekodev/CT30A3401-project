import { dev } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';

let production = true;
if (dev) {
  production = false;
}

export async function apiGet(route: string, headers?: {}): Promise<any> {
  try {
    const response = await fetch(PUBLIC_API_URL + "/" + route, {
      headers,
      method: 'GET'
    });
    if (!response.ok) {
      throw response;
    }
    return response;
  } catch(err) {
    throw err;
  }
}

export async function apiPost(route: string, body: any, headers?: {}): Promise<any> {
  try {
    const response = await fetch(PUBLIC_API_URL + "/" + route, {
      headers,
      method: 'POST',
      body
    });
    if (!response.ok) {
      throw response;
    }
    return response;
  } catch(err) {
    throw err;
  }
}

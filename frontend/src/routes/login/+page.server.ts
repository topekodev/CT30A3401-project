import { fail, type Actions } from '@sveltejs/kit';
import { loginUser } from '$lib/utils/userUtils';
import { apiPost } from '$lib/utils/api';

export const actions: Actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
      return fail(400, { invalid: true });
    }

    const body = JSON.stringify({
      "username": username,
      "password": password
    });
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await apiPost("user/login", body, headers);
    const responseData = await response.json();
    console.log(responseData);

    if (response.status !== 200) {
      return fail(401, { incorrect: true });
    }

    const token = responseData.token;
    loginUser(cookies, token, username);

    return { success: true };
  }
};


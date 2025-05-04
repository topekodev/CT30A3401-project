export function load({ cookies }) {
  const token = cookies.get('token');
  const username = cookies.get('username');
  return {
    token: token || null,
    username: username || null
  };
}

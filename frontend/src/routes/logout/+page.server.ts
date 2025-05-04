import { logoutUser } from "$lib/utils/userUtils";

export function load({ cookies }) {
  logoutUser(cookies);
}

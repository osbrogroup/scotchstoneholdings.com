export function setAdminAuth(auth: boolean) {
  if (auth) localStorage.setItem("admin-auth", "true");
  else localStorage.removeItem("admin-auth");
}

export function isAdminAuthenticated() {
  return localStorage.getItem("admin-auth") === "true";
}
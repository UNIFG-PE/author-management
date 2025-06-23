export function isValidEmail(email: string): boolean {
  if (!email || email.trim() === '') {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password: string): boolean | string {
    return password && password.length >= 6;
}
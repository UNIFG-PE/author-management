export function isValidEmail(email: string): boolean {
  if (!email || email.trim() === '') {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password: string): boolean {
  return !!password && password.length >= 6;
}

export function isPasswordComplex(password: string): boolean {
  return false;
}
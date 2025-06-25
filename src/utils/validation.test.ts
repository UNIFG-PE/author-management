import { isValidEmail, isValidPassword } from './validation';
import { isPasswordComplex } from './validation'; // @ts-ignore

describe('Funções de Validação', () => {

  describe('isValidEmail', () => {

    it('deve retornar true para um email válido', () => {
      expect(isValidEmail('teste@exemplo.com')).toBe(true);
    });

    it('deve retornar false para um email sem "@"', () => {
      expect(isValidEmail('teste.exemplo.com')).toBe(false);
    });

    it('deve retornar false para um email sem domínio após o "@"', () => {
      expect(isValidEmail('teste@.com')).toBe(false);
    });

    it('deve retornar false para uma string vazia', () => {
      expect(isValidEmail('')).toBe(false);
    });

    it('deve retornar false para uma string com apenas espaços', () => {
      expect(isValidEmail('   ')).toBe(false);
    });

    it('deve retornar false para um valor null', () => {
      // @ts-ignore
      expect(isValidEmail(null)).toBe(false);
    });
  });

  describe('isValidPassword', () => {

    it('deve retornar true para uma senha com mais de 6 caracteres', () => {
      expect(isValidPassword('1234567')).toBe(true);
    });

    it('deve retornar true para uma senha com exatamente 6 caracteres', () => {
      expect(isValidPassword('123456')).toBe(true);
    });

    it('deve retornar false para uma senha com menos de 6 caracteres', () => {
      expect(isValidPassword('12345')).toBe(false);
    });

    it('deve retornar false para uma senha vazia', () => {
      expect(isValidPassword('')).toBe(false);
    });
  });

});

describe('isPasswordComplex', () => {

    it('deve retornar TRUE para uma senha que contém pelo menos um número', () => {
      expect(isPasswordComplex('senha123')).toBe(true);
    });

    it('deve retornar FALSE para uma senha que NÃO contém números', () => {
      expect(isPasswordComplex('senhasemnumero')).toBe(false);
    });

    it('deve retornar FALSE para uma string vazia', () => {
      expect(isPasswordComplex('')).toBe(false);
    });

  });

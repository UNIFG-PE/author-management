import { Author, AuthorModel } from '../models/author.model';
import { isValidEmail } from '../utils/validation';

const authorModel = new AuthorModel();

export class AuthorService {
  createAuthor(name: string, bio?: string, birthDate?: Date): Author {
    if (!name || name.trim().length < 2) {
      throw new Error('O nome do autor deve ter pelo menos 2 caracteres.');
    }
    return authorModel.create(name, bio, birthDate);
  }

  getAllAuthors(): Author[] {
    return authorModel.findAll();
  }

  getAuthorById(id: string): Author | null {
    const author = authorModel.findById(id);
    return author || null;
  }

  updateAuthor(id: string, updates: Partial<Author>): Author | null {
    if (updates.name && updates.name.trim().length < 2) {
      throw new Error('O nome do autor não pode ser vazio ou ter menos de 2 caracteres na atualização.');
    }

    const updatedAuthor = authorModel.update(id, updates);
    return updatedAuthor || null;
  }

  deleteAuthor(id: string): boolean {
    return authorModel.delete(id);
  }
}
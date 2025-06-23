import { AuthorService } from '../services/author.service'
import { Request, Response } from 'express'; // Importar tipos Request e Response do Express

const authorService = new AuthorService();

export class AuthorController {
  static async createAuthor(req: Request, res: Response) {
    try {
      const { name, bio, birthDate } = req.body;
      const parsedBirthDate = birthDate ? new Date(birthDate) : undefined;

      const newAuthor = authorService.createAuthor(name, bio, parsedBirthDate);
      res.status(201).json(newAuthor);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAllAuthors(req: Request, res: Response) {
    try {
      const authors = authorService.getAllAuthors();
      res.status(200).json(authors);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar autores.' });
    }
  }

  static async getAuthorById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const author = authorService.getAuthorById(id as string);

      if (author) {
        res.status(200).json(author);
      } else {
        res.status(404).json({ message: 'Autor não encontrado.' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar autor por ID.' });
    }
  }

  static async updateAuthor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updates = req.body;
      if (updates.birthDate) {
          updates.birthDate = new Date(updates.birthDate);
      }

      const updatedAuthor = authorService.updateAuthor(id as string, updates);

      if (updatedAuthor) {
        res.status(200).json(updatedAuthor);
      } else {
        res.status(404).json({ message: 'Autor não encontrado para atualização.' });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteAuthor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const isDeleted = authorService.deleteAuthor(id as string);

      if (isDeleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Autor não encontrado para exclusão.' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao excluir autor.' });
    }
  }
}
import { Author } from '../models/author.model';
import type { AuthorService as AuthorServiceType } from './author.service';

const mockUpdate = jest.fn();

jest.mock('../models/author.model', () => ({
  AuthorModel: jest.fn().mockImplementation(() => ({
    update: mockUpdate,
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    delete: jest.fn(),
  })),
}));

describe('Teste Author Service', () => {
  let authorService: AuthorServiceType;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    const { AuthorService } = require('./author.service');
    
    authorService = new AuthorService();
  });

  it('deve atualizar um autor com um nome válido', () => {
    const authorId = '1';
    const updates = { name: 'J.R.R. Tolkien' };
    const expectedAuthor: Author = { id: authorId, name: 'J.R.R. Tolkien', createdAt: new Date(), updatedAt: new Date() };

    mockUpdate.mockReturnValue(expectedAuthor);

    const result = authorService.updateAuthor(authorId, updates);

    expect(mockUpdate).toHaveBeenCalledWith(authorId, updates);
    expect(result?.name).toBe('J.R.R. Tolkien');
  });

  it('deve permitir a atualização de outros campos sem modificar o nome', () => {
    const authorId = '2';
    const updates = { bio: 'Professor de anglo-saxão em Oxford.' };
    const expectedAuthor: Author = { id: authorId, name: 'Autor Antigo', bio: updates.bio, createdAt: new Date(), updatedAt: new Date() };

    mockUpdate.mockReturnValue(expectedAuthor);

    const result = authorService.updateAuthor(authorId, updates);

    expect(mockUpdate).toHaveBeenCalledWith(authorId, updates);
    expect(result?.bio).toBe(updates.bio);
  });


  //ESSE TESTE DEVE FALHAR
  it('deve lançar um erro ao tentar atualizar o nome para null', () => {
    const authorId = '3';
    const updates = { name: null };

    expect(() => {
      authorService.updateAuthor(authorId, updates as any);
    }).toThrow();

    expect(mockUpdate).not.toHaveBeenCalled();
  });
});
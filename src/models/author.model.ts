import { v4 as uuidv4 } from 'uuid';

export interface Author {
  id: string;
  name: string;
  bio?: string;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const authorsDB: Author[] = [];

export class AuthorModel {
  constructor() {
    if (authorsDB.length === 0) {
      authorsDB.push({
        id: uuidv4(),
        name: 'Stephen King',
        bio: 'Mestre do terror e suspense.',
        birthDate: new Date('1947-09-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      });
      authorsDB.push({
        id: uuidv4(),
        name: 'J.K. Rowling',
        bio: 'Autora da série Harry Potter.',
        birthDate: new Date('1965-07-31'),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  create(name: string, bio?: string, birthDate?: Date): Author {
    const newAuthor: Author = {
      id: uuidv4(),
      name,
      bio,
      birthDate,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    authorsDB.push(newAuthor);
    return newAuthor;
  }

  findAll(): Author[] {
    return authorsDB;
  }

  findById(id: string): Author | undefined {
    return authorsDB.find(author => author.id === id);
  }

  update(id: string, updates: Partial<Author>): Author | undefined {
    const authorIndex = authorsDB.findIndex(author => author.id === id);
    if (authorIndex === -1) {
      return undefined;
    }
    authorsDB[authorIndex] = {
      ...authorsDB[authorIndex],
      ...updates,
      updatedAt: new Date()
    };
    return authorsDB[authorIndex];
  }

  delete(id: string): boolean {
    const initialLength = authorsDB.length;
    const filteredDB = authorsDB.filter(author => author.id !== id);
    authorsDB.splice(0, authorsDB.length, ...filteredDB);
    return authorsDB.length < initialLength;
  }
}
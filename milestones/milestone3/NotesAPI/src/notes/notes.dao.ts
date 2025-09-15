import { execute } from "../services/mysql.connector";
import { Note } from "./notes.model";
import { notesQueries } from "./notes.queries";

export const getAllNotes = async (): Promise<Note[]> => {
  return execute<Note[]>(notesQueries.getAll, []);
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  const results = await execute<Note[]>(notesQueries.getById, [id]);
  return results.length > 0 ? results[0] : null;
};

export const createNote = async (note: Note): Promise<void> => {
  await execute(notesQueries.create, [
    note.book_id,
    note.chapter_id,
    note.note_text,
    note.tags || null,
    note.favorite || false,
  ]);
};

export const updateNote = async (id: number, note: Partial<Note>): Promise<Note | null> => {
  await execute(notesQueries.update, [note.note_text, note.tags, note.favorite, id]);
  return getNoteById(id);
};

export const deleteNote = async (id: number): Promise<void> => {
  await execute(notesQueries.delete, [id]);
};

import { Request, Response } from "express";
import { execute } from "../services/mysql.connector";
import { Note } from "./notes.model";
import { notesQueries } from "./notes.queries";

// Helper queries
const getBookIdQuery = "SELECT book_id FROM book WHERE name = ?";
const getChapterIdQuery = "SELECT chapter_id FROM chapter WHERE book_id = ? AND chapter_number = ?";

// GET all notes
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await execute<Note[]>(notesQueries.getAll, []);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// GET note by ID
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const results = await execute<Note[]>(notesQueries.getById, [Number(req.params.id)]);
    res.json(results[0] || { message: "Note not found" });
  } catch (err) {
  res.status(500).json({ error: (err as Error).message });
}

};

// POST create note
export const createNote = async (req: Request, res: Response) => {
  try {
    const note = req.body;

    // Look up book_id
    const bookResult: any = await execute(getBookIdQuery, [note.book]);
    if (!bookResult || bookResult.length === 0) {
      return res.status(400).json({ error: `Book "${note.book}" not found` });
    }
    const bookId = bookResult[0].book_id;

    // Look up chapter_id
    const chapterResult: any = await execute(getChapterIdQuery, [bookId, note.chapter]);
    if (!chapterResult || chapterResult.length === 0) {
      return res.status(400).json({ error: `Chapter ${note.chapter} not found for book id ${bookId}` });
    }
    const chapterId = chapterResult[0].chapter_id;

    // Insert note
    const result: any = await execute(notesQueries.create, [
      bookId,
      chapterId,
      note.note_text,
      note.tags || null,
      note.favorite || false,
    ]);

    res.status(201).json({
      id: result.insertId,
      book_id: bookId,
      chapter_id: chapterId,
      note_text: note.note_text,
      tags: note.tags || null,
      favorite: note.favorite || false,
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// PUT update note
export const updateNote = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const note = req.body;
    await execute(notesQueries.update, [note.note_text, note.tags, note.favorite, id]);
    const updated = await execute<Note[]>(notesQueries.getById, [id]);
    res.json(updated[0] || { message: "Note not found" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// DELETE note
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await execute(notesQueries.delete, [id]);
    res.json({ message: "Note deleted", id });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// GET notes by book + chapter
export const findNotesByChapter = async (req: Request, res: Response) => {
  try {
    const bookId = Number(req.params.bookId);
    const chapterId = Number(req.params.chapterId);
    const notes = await execute<Note[]>(notesQueries.findByChapter, [bookId, chapterId]);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// GET notes by tag
export const findNotesByTag = async (req: Request, res: Response) => {
  try {
    const tag = req.params.tag;
    const notes = await execute<Note[]>(notesQueries.findByTag, [`%${tag}%`]);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// GET favorite notes
export const getFavoriteNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await execute<Note[]>(notesQueries.favorites, []);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// PUT mark as favorite
export const markFavorite = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await execute(notesQueries.markFavorite, [id]);
    const updated = await execute<Note[]>(notesQueries.getById, [id]);
    res.json(updated[0] || { message: "Note not found" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

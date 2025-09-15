import { Router, Request, Response } from "express";
import * as NotesController from "./notes.controller";

const router = Router();

// GET all notes
router.get("/", async (_req: Request, res: Response) => {
  const notes = await NotesController.getAllNotes();
  res.json(notes);
});

// GET note by ID
router.get("/:id", async (req: Request, res: Response) => {
  const note = await NotesController.getNoteById(Number(req.params.id));
  res.json(note || { message: "Note not found" });
});

// POST create note
router.post("/", async (req: Request, res: Response) => {
  const newNote = await NotesController.createNote(req.body);
  res.status(201).json(newNote);
});

// PUT update note
router.put("/:id", async (req: Request, res: Response) => {
  const updated = await NotesController.updateNote(Number(req.params.id), req.body);
  res.json(updated);
});

// DELETE note
router.delete("/:id", async (req: Request, res: Response) => {
  const result = await NotesController.deleteNote(Number(req.params.id));
  res.json(result);
});

// GET notes by book + chapter
router.get("/book/:bookId/chapter/:chapterId", async (req: Request, res: Response) => {
  const { bookId, chapterId } = req.params;
  const notes = await NotesController.findNotesByChapter(Number(bookId), Number(chapterId));
  res.json(notes);
});

// GET notes by tag
router.get("/search/tag/:tag", async (req: Request, res: Response) => {
  const notes = await NotesController.findNotesByTag(req.params.tag);
  res.json(notes);
});

// GET favorite notes
router.get("/favorites", async (_req: Request, res: Response) => {
  const notes = await NotesController.getFavoriteNotes();
  res.json(notes);
});

// PUT mark as favorite
router.put("/:id/favorite", async (req: Request, res: Response) => {
  const note = await NotesController.markFavorite(Number(req.params.id));
  res.json(note);
});

export default router;

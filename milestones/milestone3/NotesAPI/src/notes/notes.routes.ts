import { Router } from "express";
import * as NotesController from "./notes.controller";

const router = Router();

// GET all notes
router.get("/", NotesController.getAllNotes);

// GET note by ID
router.get("/:id", NotesController.getNoteById);

// POST create note
router.post("/", NotesController.createNote);

// PUT update note
router.put("/:id", NotesController.updateNote);

// DELETE note
router.delete("/:id", NotesController.deleteNote);

// GET notes by book + chapter
router.get("/book/:bookId/chapter/:chapterId", NotesController.findNotesByChapter);

// GET notes by tag
router.get("/search/tag/:tag", NotesController.findNotesByTag);

// GET favorite notes
router.get("/favorites", NotesController.getFavoriteNotes);

// PUT mark as favorite
router.put("/:id/favorite", NotesController.markFavorite);

export default router;

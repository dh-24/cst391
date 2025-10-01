// src/app/models/note.ts
export interface Note {
  id: number;          
  book: string;
  chapter: number;
  note_text: string;
  tags?: string;
  favorite: boolean;
  created_at?: string;
}

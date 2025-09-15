
export interface Note {
  id?: number;
  book_id: number;
  chapter_id: number;
  note_text: string;
  tags?: string;
  created_at?: Date;
  favorite?: boolean;
}

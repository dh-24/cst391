
export const notesQueries = {
  create: `
    INSERT INTO note (book_id, chapter_id, note_text, tags, favorite)
    VALUES (?, ?, ?, ?, ?)
  `,
  getAll: `
    SELECT n.note_id AS id, b.name AS book, c.chapter_number AS chapter,
           n.note_text, n.tags, n.created_at, n.favorite
    FROM note n
    JOIN book b ON n.book_id = b.book_id
    JOIN chapter c ON n.chapter_id = c.chapter_id
  `,
  getById: `
    SELECT n.note_id AS id, b.name AS book, c.chapter_number AS chapter,
           n.note_text, n.tags, n.created_at, n.favorite
    FROM note n
    JOIN book b ON n.book_id = b.book_id
    JOIN chapter c ON n.chapter_id = c.chapter_id
    WHERE n.note_id = ?
  `,
  update: `
    UPDATE note
    SET note_text=?, tags=?, favorite=?
    WHERE note_id=?
  `,
  delete: `DELETE FROM note WHERE note_id=?`,

  findByChapter: `
    SELECT n.note_id AS id, b.name AS book, c.chapter_number AS chapter,
           n.note_text, n.tags, n.created_at, n.favorite
    FROM note n
    JOIN book b ON n.book_id = b.book_id
    JOIN chapter c ON n.chapter_id = c.chapter_id
    WHERE n.book_id=? AND n.chapter_id=?
  `,
  findByTag: `
    SELECT n.note_id AS id, b.name AS book, c.chapter_number AS chapter,
           n.note_text, n.tags, n.created_at, n.favorite
    FROM note n
    JOIN book b ON n.book_id = b.book_id
    JOIN chapter c ON n.chapter_id = c.chapter_id
    WHERE n.tags LIKE ?
  `,
  favorites: `
    SELECT n.note_id AS id, b.name AS book, c.chapter_number AS chapter,
           n.note_text, n.tags, n.created_at, n.favorite
    FROM note n
    JOIN book b ON n.book_id = b.book_id
    JOIN chapter c ON n.chapter_id = c.chapter_id
    WHERE n.favorite = 1
  `,
  markFavorite: `
    UPDATE note SET favorite=1 WHERE note_id=?
  `
};

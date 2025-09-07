import { updateAlbum } from "./albums.dao";

export const albumQueries = {
    readAlbums: `
        SELECT
            id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image
        FROM music.albums
    `,
    readAlbumsByArtist: `
        SELECT
            id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image
        FROM music.albums
        WHERE music.albums.artist = ?
    `,
    readAlbumsByArtistSearch: `
        SELECT
            id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image
        FROM music.albums
        WHERE music.albums.artist LIKE ?
    `,
    readAlbumsByDescriptionSearch: `
        SELECT
            id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image
        FROM music.albums
        WHERE music.albums.description LIKE ?
    `,
    readAlbumsByAlbumId: `
        SELECT
            id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image
        FROM music.albums
        WHERE music.albums.id = ?
    `,
    createAlbum: `
        INSERT INTO ALBUMS (title, artist, description, year, image) VALUES (?, ?, ?, ?, ?)
    `,
    updateAlbum: `
        UPDATE ALBUMS SET title = ?, artist = ?, description = ?, year = ?, image = ? WHERE id = ?
    `,
    deleteAlbum: `
        DELETE FROM music.albums 
        WHERE id = ?
    `,
}
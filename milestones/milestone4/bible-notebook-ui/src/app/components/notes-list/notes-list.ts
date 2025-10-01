import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notes-list.html',
  styleUrls: ['./notes-list.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe((data: Note[]) => {
      this.notes = data;
    });
  }

  deleteNote(id: number): void {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes(); // reload notes after deletion
    });
  }
}

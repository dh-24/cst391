import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- needed for ngModel and ngForm
import { RouterModule, Router } from '@angular/router';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <-- include FormsModule here
  templateUrl: './note-form.html',
  styleUrls: ['./note-form.css']
})
export class NoteFormComponent {
  note: Note = {
    id: 0,
    book: '',
    chapter: 1,
    note_text: '',
    favorite: false
  };

  constructor(private noteService: NoteService, private router: Router) {}

  saveNote() {
    this.noteService.addNote(this.note).subscribe(() => {
      this.router.navigate(['/notes']); // redirect after saving
    });
  }
}

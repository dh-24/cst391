import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './note-form.html',
  styleUrls: ['./note-form.css']
})
export class NoteFormComponent implements OnInit {
  note: Note = {
    id: 0,
    book: '',
    chapter: 1,
    note_text: '',
    favorite: false
  };

  isEditMode = false;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      const noteId = Number(idParam);
      this.noteService.getNoteById(noteId).subscribe((data) => {
        this.note = data;
      });
    }
  }

  saveNote() {
    if (this.isEditMode) {
      this.noteService.updateNote(this.note.id!, this.note).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    } else {
      this.noteService.addNote(this.note).subscribe(() => {
        this.router.navigate(['/notes']);
      });
    }
  }
}

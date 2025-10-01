import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list';
import { NoteDetail } from './components/note-detail/note-detail';
import { NoteFormComponent } from './components/note-form/note-form';

export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/:id', component: NoteDetail },
  { path: 'create', component: NoteFormComponent },
  { path: 'edit/:id', component: NoteFormComponent },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  {
    path: 'board',
    loadComponent: () =>
      import('./board/board.component').then((c) => c.BoardComponent),
  },
];

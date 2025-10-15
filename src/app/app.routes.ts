import { Routes } from '@angular/router';
import { MoodFormComponent } from './components/mood-form/mood-form';
import { ResultComponent } from './components/result/result';

export const routes: Routes = [
  { path: '', redirectTo: 'mood-form', pathMatch: 'full' },
  { path: 'mood-form', component: MoodFormComponent },
  { path: 'result', component: ResultComponent }
];

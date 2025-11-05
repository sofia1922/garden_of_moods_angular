import { Routes } from '@angular/router';
import { MoodFormComponent } from './components/mood-form/mood-form';
import { ResultComponent } from './components/result/result';
import { WelcomeComponent } from './welcome/welcome';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'mood-form', component: MoodFormComponent },
  { path: 'result', component: ResultComponent }
];

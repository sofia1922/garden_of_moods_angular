import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mood-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mood-form.html',
  styleUrls: ['./mood-form.css']
})
export class MoodFormComponent {
  mood: string = '';

  constructor(private router: Router) {}

  submitForm() {
    if (this.mood.trim()) {
      this.router.navigate(['/result'], { queryParams: { mood: this.mood } });
    }
  }
}

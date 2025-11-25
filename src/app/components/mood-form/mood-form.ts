import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mood-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mood-form.html',
  styleUrls: ['./mood-form.css'],
})
export class MoodFormComponent {
  result: string | null = null;

  formData = {
    mood: '',
    emotion: '',
    intensity: 5,
    wantAdvice: false,
    activity: '',
    weather: '',
    plans: '',
  };

  constructor(private router: Router) {}

  submitForm() {
    this.router.navigate(['/result'], {
      queryParams: { mood: this.formData.emotion },
    });
  }
}

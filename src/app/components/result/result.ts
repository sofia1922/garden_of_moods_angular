import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

interface MoodInfo {
  id: string;
  emoji: string;
  title: string;
  description: string;
  when: string;
  advice: string;
  musicTitle: string;
  musicLink: string;
  image: string;
}

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, RouterModule],
  templateUrl: './result.html',
  styleUrls: ['./result.css'],
})
export class ResultComponent {
  moodId: string | null = null;
  moodData: MoodInfo | null = null;

  allMoods: MoodInfo[] = [
    {
      id: 'happy',
      emoji: '😊',
      title: 'Лимонне дерево',
      description:
        'Лимонне дерево — символ тепла, свіжості й внутрішнього світла. Це стан, коли все всередині ніби розквітає...',
      when: 'Після приємних зустрічей, компліментів, успіхів.',
      advice: 'Направ цю енергію в творчість, навчання або плани.',
      musicTitle: 'Miley Cyrus – Flowers',
      musicLink: 'https://www.youtube.com/watch?v=G7KNmW9a75Y',
      image: 'assets/images/завантаження.jpg',
    },
    {
      id: 'sad',
      emoji: '😔',
      title: 'Верба',
      description:
        'Верба символізує м’який сум і прийняття. Вона гнеться, але не ламається...',
      when: 'Після втрат, непорозумінь, перевтоми.',
      advice: 'Дозволь собі побути в цьому стані. Тепло і турбота — це лікує.',
      musicTitle: 'beats to relax/study to',
      musicLink: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      image: 'assets/images/завантаження3.jpg',
    },
    {
      id: 'stressed',
      emoji: '😫',
      title: 'Папороть',
      description:
        'Папороть росте там, де тісно й темно — як і ти відчуваєш себе зараз...',
      when: 'Під час дедлайнів, сесії, перевантаження.',
      advice: 'Зупинись. Вдих–видих. Коротка прогулянка — і стане легше.',
      musicTitle: 'Коли відчуваєш тривогу',
      musicLink: 'https://youtu.be/m90RNRSWziA',
      image: 'assets/images/завантаження2.jpg',
    },
    {
      id: 'calm',
      emoji: '😌',
      title: 'Лаванда',
      description:
        'Лаванда — символ спокою та м’якого балансу. Коли всередині рівно й легко...',
      when: 'Після відпочинку, прогулянки або гарного дня.',
      advice: 'Час для планування, творчості або тихих ритуалів.',
      musicTitle: 'Nature Sounds',
      musicLink: 'https://www.youtube.com/watch?v=lTRiuFIWV54',
      image: 'assets/images/завантаження1.jpg',
    },
    {
      id: 'angry',
      emoji: '😡',
      title: 'Жасминовий кущ',
      description:
        'Жасмин — сильний, яскравий, неможливо ігнорувати. Як і емоція злості...',
      when: 'Коли порушили межі, накопичилась образа або втома.',
      advice: 'Розрядись через рух, виговорись, попий води, подихай.',
      musicTitle: 'Queen – Bohemian Rhapsody',
      musicLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
      image: 'assets/images/завантаження4.jpg',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.moodId = params['mood'] || null;
      this.loadMoodData();
    });
  }

  loadMoodData() {
    this.moodData = this.allMoods.find(m => m.id === this.moodId) || null;
  }

  restart() {
    this.router.navigate(['/mood-form']);
  }
}

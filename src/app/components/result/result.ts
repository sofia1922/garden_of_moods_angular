import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

interface MoodInfo {
  id: string;
  title: string;
  emoji: string;
  description: string;
  when: string;
  advice: string;
  musicTitle: string;
  musicLink: string;
}

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './result.html',
  styleUrls: ['./result.css']
})
export class ResultComponent {
  moodId: string | null = null;
  moodData: MoodInfo | null = null;

  allMoods: MoodInfo[] = [
    {
      id: 'happy',
      emoji: '😊',
      title: 'Радість',
      description: 'Ти відчуваєш підйом, легкість і натхнення.',
      when: 'Після приємних подій, зустрічей, досягнень.',
      advice: 'Спрямуй енергію на те, що дає тобі розвиток.',
      musicTitle: 'Легкий indie-pop',
      musicLink: 'https://www.youtube.com/watch?v=G7KNmW9a75Y'
    },
    {
      id: 'sad',
      emoji: '😔',
      title: 'Смуток',
      description: 'Ти можеш відчувати втому або тугу.',
      when: 'Після втрат, складних розмов, перевтоми.',
      advice: 'Дозволь собі сумувати, подбай про себе.',
      musicTitle: 'Спокійний lo-fi',
      musicLink: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
    },
    {
      id: 'stressed',
      emoji: '😫',
      title: 'Стрес',
      description: 'Думки переповнені, хочеться паузи.',
      when: 'Сесія, дедлайни, інтенсивні події.',
      advice: 'Зроби паузу, подихай, вийди на повітря.',
      musicTitle: 'Ambient для заспокоєння',
      musicLink: 'https://www.youtube.com/watch?v=2OEL4P1Rz04'
    },
    {
      id: 'calm',
      emoji: '😌',
      title: 'Спокій',
      description: 'Ти в балансі — ні поспіху, ні напруги.',
      when: 'Після відпочинку або стабільного дня.',
      advice: 'Гарний час для планів або творчості.',
      musicTitle: 'Nature sounds',
      musicLink: 'https://www.youtube.com/watch?v=lTRiuFIWV54'
    },
    {
      id: 'angry',
      emoji: '😡',
      title: 'Злість',
      description: 'Всередині кипить, є напруга чи образа.',
      when: 'Коли порушили твої межі або накопичилось.',
      advice: 'Розрядись фізично або проговори емоції.',
      musicTitle: 'Мʼякий рок для звільнення напруги',
      musicLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.moodId = params['mood'] || null;
      this.loadMoodData();
    });
  }

  loadMoodData() {
    this.moodData = this.allMoods.find(m => m.id === this.moodId) || null;
  }
}

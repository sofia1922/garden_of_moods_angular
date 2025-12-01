import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    if (!url) return '';

    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1];
      url = `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1];
      url = `https://www.youtube.com/embed/${id}`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

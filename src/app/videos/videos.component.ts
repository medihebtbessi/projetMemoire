import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videos = [
    { url: 'assets/video1.mp4', title: 'Vidéo 1', description: 'Description de la vidéo 1' },
    { url: 'assets/video2.mp4', title: 'Vidéo 2', description: 'Description de la vidéo 2' }
  ];

}

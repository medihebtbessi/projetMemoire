import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  photos = [
    { url: 'assets/picture1.jpg', title: 'Photo 1', description: 'Description de la photo 1' },
    { url: 'assets/picture2.jpg', title: 'Photo 2', description: 'Description de la photo 2' },
   
  ];

}

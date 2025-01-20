import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  telechargerPDF() {
    window.open('assets/التقديم +الفصل 01+ الفصل 02.pdf', '_blank');
  }

}

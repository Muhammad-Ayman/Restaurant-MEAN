import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  data: any;
  http = inject(HttpClient);

  submitBook(e: any) {
    e.preventDefault();
    this.data = new FormData(e.target);
    console.log(this.data.get('date'));
  }
}

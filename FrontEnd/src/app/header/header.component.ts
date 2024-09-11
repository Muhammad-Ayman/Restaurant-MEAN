import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mail = 'i.muhammadayman@gmail.com';
  phone = '(+20)100-157-0573';
}

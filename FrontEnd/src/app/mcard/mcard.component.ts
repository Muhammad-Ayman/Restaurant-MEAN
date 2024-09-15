import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mcard',
  standalone: true,
  imports: [],
  templateUrl: './mcard.component.html',
  styleUrl: './mcard.component.css',
})
export class MCardComponent {
  @Input() category?: string;
  @Input() src?: string;
  @Input() description?: string;
  @Input() price?: string;
}

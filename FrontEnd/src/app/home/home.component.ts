import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { BrowseComponent } from '../browse/browse.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, BrowseComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

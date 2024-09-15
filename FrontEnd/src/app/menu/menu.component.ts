import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MCardComponent } from '../mcard/mcard.component';
import { OrderComponent } from '../order/order.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, MCardComponent, OrderComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../styles/btn.css'],
})
export class MenuComponent {
  buttons = [
    { title: 'All' },
    { title: 'Breakfast' },
    { title: 'Main Dishes' },
    { title: 'Drinks' },
    { title: 'Desserts' },
  ];

  cards = [
    {
      imgSrc: './test.png',
      price: '10',
      title: 'Breakfast',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      imgSrc: './test.png',
      price: '15',
      title: 'Main Dish',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      imgSrc: './test.png',
      price: '5',
      title: 'Drinks',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      imgSrc: './test.png',
      price: '7',
      title: 'Dessert',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
  ];
}

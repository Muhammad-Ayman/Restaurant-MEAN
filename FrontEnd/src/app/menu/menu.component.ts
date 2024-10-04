import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MCardComponent } from '../mcard/mcard.component';
import { OrderComponent } from '../order/order.component';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, MCardComponent, OrderComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../styles/btn.css'],
})
export class MenuComponent implements OnInit {
  buttons = [
    { title: 'All' },
    { title: 'Breakfast' },
    { title: 'Main Dishes' },
    { title: 'Drinks' },
    { title: 'Desserts' },
  ];

  http = inject(HttpClient);
  products: any[] = [];

  fetchProducts() {
    this.http.get(' http://localhost:8080/products').subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}

// cards = [
//   {
//     imgSrc: './test.png',
//     price: '10',
//     title: 'Breakfast',
//     description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//   },
//   {
//     imgSrc: './test.png',
//     price: '15',
//     title: 'Main Dish',
//     description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//   },
//   {
//     imgSrc: './test.png',
//     price: '5',
//     title: 'Drinks',
//     description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//   },
//   {
//     imgSrc: './test.png',
//     price: '7',
//     title: 'Dessert',
//     description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//   },
// ];

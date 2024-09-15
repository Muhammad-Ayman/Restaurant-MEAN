import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Menu',
    component: MenuComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'product/:id', component: ProductComponent },
];

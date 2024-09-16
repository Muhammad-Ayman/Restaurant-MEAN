import { Component, OnInit, inject } from '@angular/core';
import { MCardComponent } from '../mcard/mcard.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { input } from '@angular/core';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  http = inject(HttpClient);
  product: any = {};
  fetchProduct() {
    this.http
      .get('https://dummyjson.com/product/' + this.productId)
      .subscribe((data: any) => {
        this.product = data;
      });
  }
  productId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.fetchProduct();
  }
}

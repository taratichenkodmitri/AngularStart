import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import {emptyPhone, Phone} from "../phone";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Phone;
  constructor(private route: ActivatedRoute,
              private cartService: CartService) {
    this.product = emptyPhone;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.product = products[+params.get('productId')];
    })
  }
  addToCart(product: Phone) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

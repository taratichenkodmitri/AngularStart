import { Injectable } from '@angular/core';
import {Phone} from "./phone";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Phone[] = [];

  constructor() { }

  addToCart(product: Phone) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

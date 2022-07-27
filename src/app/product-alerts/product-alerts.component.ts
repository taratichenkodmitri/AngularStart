import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";
import {emptyPhone, Phone} from "../phone";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Phone;
  @Output() notify = new EventEmitter();
  constructor() {
    this.product = emptyPhone;
  }

  ngOnInit(): void {
  }

}

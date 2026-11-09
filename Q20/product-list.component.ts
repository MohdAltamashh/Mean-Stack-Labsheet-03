import {Component} from '@angular/core';
@Component({selector:'app-product-list',template:`<h2>Products</h2><ul><li *ngFor="let p of products">{{p}}</li></ul>`})
export class ProductListComponent {products=['Laptop','Keyboard','Mouse'];}

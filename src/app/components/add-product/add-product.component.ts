import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    image: '',
    productName: '',
    productPrice: '',
    description: '',
    available: false
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // CHARGE AU DEBUT
  }

  saveProduct(): void {
    const data = {
      image: this.product.image,
      productName: this.product.productName,
      productPrice: this.product.productPrice,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      image: '',
      productName: '',
      productPrice: '',
      description: '',
      available: false
    };
  }

}

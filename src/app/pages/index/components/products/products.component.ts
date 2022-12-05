import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  nativeElement: any;
  secondFlag: boolean = true;

  @ViewChild('buttonBox') buttonBox!: ElementRef;
  @ViewChild('productsArrow') productsArrow!: ElementRef;
  @ViewChildren('productBox', { read: ElementRef })
  productBox!: QueryList<ProductsComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  showContent(): void {
    if (this.secondFlag === false) {
      this.buttonBox.nativeElement.classList='button-box change';
      this.productsArrow.nativeElement.setAttribute('style', 'transform: rotate(180deg)');
      this.productBox.forEach(
        (element) =>
          (element.nativeElement.classList =
            'product-box drop-rest-of-products product-box-margin-top')
      );
    } else {
      this.buttonBox.nativeElement.classList='button-box';
      this.productsArrow.nativeElement.setAttribute('style', 'transform: rotate(0)');
      this.productBox.forEach(
        (element) => (element.nativeElement.classList = 'product-box')
      );
    }
  }
}

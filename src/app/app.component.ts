import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
currentYear: Number = new Date().getFullYear();

  constructor(private elementRef: ElementRef) {}
  nativeElement: any;
  flag: boolean = true;
  secondFlag: boolean = true;
  @ViewChild('navSearch') navSearch!: ElementRef;
  @ViewChild('dropDownMenuMobile') dropDownMenuMobile!: ElementRef;
  @ViewChild('buttonBox') buttonBox!: ElementRef;
  @ViewChild('productsArrow') productsArrow!: ElementRef;
  @ViewChildren('productBox', { read: ElementRef })
  productBox!: QueryList<AppComponent>;

  handleIconChange(): void {
    if (this.flag === true) {
      this.navSearch.nativeElement.innerHTML =
        'Szukaj <i class="fa-solid fa-x"></i>';
    } else {
      this.navSearch.nativeElement.innerHTML =
        'Szukaj <i class="fa-solid fa-magnifying-glass"></i>';
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    if (event.classList.contains('drop-down-menu-mobile')) {
      this.navSearch.nativeElement.innerHTML =
        'Szukaj <i class="fa-solid fa-magnifying-glass"></i>';
      this.flag = true;
    }
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

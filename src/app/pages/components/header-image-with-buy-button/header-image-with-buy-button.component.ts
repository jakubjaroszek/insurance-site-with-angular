import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-header-image-with-buy-button',
  templateUrl: './header-image-with-buy-button.component.html',
  styleUrls: ['./header-image-with-buy-button.component.scss']
})
export class HeaderImageWithBuyButtonComponent implements OnInit {
  url!: string;
  imageUrl!: string;
  h1Content!: string;
  pContent!: string;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;

    switch (this.url) {
      case '/car-insurance-information':
        this.h1Content = 'Ubezpieczenie samochodu';
        this.pContent = '2 proste pytania i znasz cenę w 10 sekund';
        this.breakpointObserver
          .observe(['(max-width: 992px)'])
          .subscribe((result: BreakpointState) => {
            if (result.matches) {
              this.imageUrl =
                'url(/assets/img/car-hero-img-small.jpg)';
            } else {
              this.imageUrl =
                'url(/assets/img/car-hero-img-big.jpg';
            }
          });
        break;

      case '/retirement':
        this.h1Content = 'Emerytura';
        this.pContent ='Gromadzenie środków które zasilą twój budżet w przyszłości';
        this.breakpointObserver
          .observe(['(max-width: 992px)'])
          .subscribe((result: BreakpointState) => {
            if (result.matches) {
              this.imageUrl =
                'url(/assets/img/retiring-hero-img-small.jpg)';
            } else {
              this.imageUrl =
                'url(/assets/img/retiring-hero-img-big.jpg)';
            }
          });
        break;

        case '/tourist-insurance-information':
          this.h1Content = 'Ubezpieczenie turystyczne';
          this.pContent ='Kup ze zniżką 10%';
          this.breakpointObserver
            .observe(['(max-width: 992px)'])
            .subscribe((result: BreakpointState) => {
              if (result.matches) {
                this.imageUrl =
                  'url(/assets/img/tourist-hero-img-small.jpg)';
              } else {
                this.imageUrl =
                  'url(/assets/img/tourist-hero-img-big.jpg)';
              }
            });
          break;

          case '/life-insurance-information':
          this.h1Content = 'Ubezpieczenie na życie';
          this.pContent ='Ubezpieczasz życie i zdrowie oraz odkładasz pieniądze na przyszłość';
          this.breakpointObserver
            .observe(['(max-width: 992px)'])
            .subscribe((result: BreakpointState) => {
              if (result.matches) {
                this.imageUrl =
                  'url(/assets/img/life-hero-img-small.jpg)';
              } else {
                this.imageUrl =
                  'url(/assets/img/life-hero-img-big.jpg)';
              }
            });
          break;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss'],
})
export class HeaderImageComponent implements OnInit {
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
      case '/investments':
        this.h1Content = 'Inwestycje';
        this.pContent = 'Wybierz swoją drogę oszczędności';

        this.breakpointObserver
          .observe(['(max-width: 992px)'])
          .subscribe((result: BreakpointState) => {
            if (result.matches) {
              this.imageUrl =
                'url(assets/img/investments-hero-img-small.jpg)';
            } else {
              this.imageUrl =
                'url(assets/img/investments-hero-img-big.jpg)';
            }
          });
        break;

      case '/retirement':
        this.h1Content = 'Emerytura';
        this.pContent =
          'Gromadzenie środków które zasilą twój budżet w przyszłości';

        this.breakpointObserver
          .observe(['(max-width: 992px)'])
          .subscribe((result: BreakpointState) => {
            if (result.matches) {
              this.imageUrl =
                'url(assets/img/retiring-hero-img-small.jpg)';
            } else {
              this.imageUrl =
                'url(assets/img/retiring-hero-img-big.jpg)';
            }
          });
        break;
    }
  }
}

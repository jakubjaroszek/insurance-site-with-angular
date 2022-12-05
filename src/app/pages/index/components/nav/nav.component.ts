import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('navSearch') navSearch!: ElementRef;
  flag: boolean = true;

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

}

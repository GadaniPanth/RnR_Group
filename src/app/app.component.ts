import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rehvassa';

  private _isMenuOpen = false;
  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }
  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    document.body.style.overflow = value ? 'hidden' : '';
  }

  isDropDownOpen: boolean = true;

  ResidentialList = [
    {
      'navigate': '/sofitel',
      'image': 'assets/images/navigation-sofitel.jpg',
      'title': 'Sofitel',
      'location': 'Koba, Gandhinagar',
      'home_types': '4 BHK Homes',
      'percent': '45'
    },
    {
      'navigate': '/saffron',
      'image': 'assets/images/navigation-saffron.jpg',
      'title': 'Saffron',
      'location': 'Nana Chiloda',
      'home_types': '2 | 3 BHK Homes',
      'percent': '100'
    },
  ]

  ngOnInit() {

    document.addEventListener('keydown', (e) => {
      if (e.key.toLocaleLowerCase() == 'escape') {
        this.isMenuOpen = false;
      }
    })

  }

  onMenuClick(event: MouseEvent) {
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen
  }

  get constructionStatus(): string {
    return this.ResidentialList['percent'] < 100 ? 'Under Construction' : 'Completed';
  }

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scroll(0, 0);
      }
    });

  }

  navigateInquire() {
    this.router.navigate(['/inquire'])
  }
}

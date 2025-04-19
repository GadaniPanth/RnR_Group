import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rehvassa';

  isMenuOpen: boolean = false;
  isDropDownOpen: boolean = false;

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

  onInit() {
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
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rehvassa';
  isSaffron: boolean = false;
  logoFooter = [
    'assets/images/1R&R.svg',
    'assets/images/home_page/Group 503 1.svg',
  ]

  private _isMenuOpen = false;
  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }
  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    document.body.style.overflow = value ? 'hidden' : '';
  }

  private _isInquiryOpen = false;
  get isInquiryOpen(): boolean {
    return this._isInquiryOpen;
  }
  set isInquiryOpen(value: boolean) {
    this._isInquiryOpen = value;
    document.body.style.overflow = value ? "hidden" : "";
  }
  onInquiryClick(event: MouseEvent) {
    this.isInquiryOpen = !this.isInquiryOpen;
  }
  sideInquireForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  sideFormSubmitted = false;

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
        this.isInquiryOpen = false;
      }
    });
  }

  onMenuClick(event: MouseEvent) {
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen
  }

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  get constructionStatus(): string {
    return this.ResidentialList['percent'] < 100 ? 'Under Construction' : 'Completed';
  }

  constructor(private router: Router, private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 0)
      }
      if (e instanceof NavigationEnd) {
        this.isSaffron = e.urlAfterRedirects.endsWith('/saffron');
      }
    });

    {
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            let route = this.activatedRoute;
            while (route.firstChild) route = route.firstChild;
            return route;
          }),
          mergeMap(route => route.data)
        )
        .subscribe(data => {
          // Set title
          this.titleService.setTitle(data['title'] || 'Default Title');

          // Set meta description
          if (data['description']) {
            this.metaService.updateTag({ name: 'description', content: data['description'] });
          } else {
            this.metaService.removeTag("name='description'");
          }
        });
    }
  }

  navigateInquire() {
    this.router.navigate(['/inquire'])
  }

  onSideSubmit() {
    this.sideFormSubmitted = true;

    if (this.sideInquireForm.invalid) {
      return;
    }
  }
}

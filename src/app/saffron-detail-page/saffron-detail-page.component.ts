import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

declare const Fancybox: any;

@Component({
  selector: 'app-saffron-detail-page',
  templateUrl: './saffron-detail-page.component.html',
  styleUrls: ['./saffron-detail-page.component.less']
})
export class SaffronDetailPageComponent implements AfterViewInit {

  @ViewChild('roundedAnimate', { static: false }) roundedAnimate!: ElementRef;
  @ViewChild('fadeAnimation', { static: false }) fadeAnimation!: ElementRef;

  typedTextMain = '';
  fullTextMain = 'OF THE ONES WHO';
  typedTextSpan = '';
  fullTextSpan = 'EXPERIENCE THEM';
  private typingSpeed = 100;

  constructor(private appComponent: AppComponent) { }


  onInquiryClick() {
    this.appComponent.isInquiryOpen = true;
  }

  ngOnInit() {
    this.startTyping()
  }

  startTyping() {
    let indexMain = 0;
    let indexSpan = 0;

    const typeMain = () => {
      if (indexMain < this.fullTextMain.length) {
        this.typedTextMain += this.fullTextMain.charAt(indexMain++);
        setTimeout(typeMain, this.typingSpeed);
      } else {
        typeSpan();
      }
    };

    const typeSpan = () => {
      if (indexSpan < this.fullTextSpan.length) {
        this.typedTextSpan += this.fullTextSpan.charAt(indexSpan++);
        setTimeout(typeSpan, this.typingSpeed);
      }
    };

    typeMain();
  }

  tabs = [
    { title: "Ground Floor", src: "assets/images/home-saffron_sec-wrap/groundFloor.png" },
    { title: "First Floor", src: "assets/images/home-saffron_sec-wrap/fristfloor.png" },
    { title: "Second Floor", src: "assets/images/home-saffron_sec-wrap/secondfloor (1).png" },
    { title: "2 BHK", src: "assets/images/home-saffron_sec-wrap/2bhk-type-01.png" },
    { title: "3 BHK", src: "assets/images/home-saffron_sec-wrap/2bhk-type-03.png" },
    { title: "Typical Floor Plan", src: "assets/images/home-saffron_sec-wrap/typicalfloor.png" },
  ];

  sections = [
    {
      title: "Floring",
      content:
        "A unique designed Vitrified Tiles or equivalent all rooms With grouting",
      isOpen: false,
    },
    {
      title: "Doors & Windows",
      content: [
        ["Decorative main door and other are flush doors."],
        ["Decorative main door and other are flush doors."],
      ],
      isOpen: false,
    },
    {
      title: "Plaster & Painting ",
      content:
        "External double coat plaster with acrylic paint and internal mala plaster With wall care putty and water base coating",
      isOpen: false,
    },
    {
      title: "Water Storage",
      content:
        "Each block has overhead water tank and common Underground tank.",
      isOpen: false,
    },
    {
      title: "Parking",
      content: "Paver blocks or concrete finish in parking area.",
      isOpen: false,
    },
    {
      title: "Toilet & Plumbing",
      content: "Standard quality plumbing & branded sanitary products.",
      isOpen: false,
    },
    {
      title: "Kitchen Platform",
      content:
        "Exclusive granite platform with SS sink and designer glazed dedo tiles on wall.",
      isOpen: false,
    },
    {
      title: "Electrification",
      content:
        "Single phase concealed copper wiring with modular type switches.",
      isOpen: false,
    },
    {
      title: "Water Proofing",
      content:
        "Water proofing of standard materials all bathrooms and terrace.",
      isOpen: false,
    },
  ];

  images = [
    { label: "Block Entrance Foyer", src: "assets/images/home-saffron_sec-wrap/buliding02 (1).png" },
    { label: "Lawn Area", src: "assets/images/home-saffron_sec-wrap/Lawn_Area (1).png" },
    {
      label: "Sr. Citizen Seating",
      src: "assets/images/home-saffron_sec-wrap/senoiur_citizen_sitting (1).png",
    },
    { label: "Children Play Area", src: "assets/images/home-saffron_sec-wrap/buliding01.png" },
    {
      label: "Ample Parking",
      src: "assets/images/home-saffron_sec-wrap/senoiur_citizen_sitting (1).png",
    }
  ];

  beautyImgs = [
    { src: 'assets/images/home-saffron_sec-wrap/stickyimg01.png' },
    { src: 'assets/images/home-saffron_sec-wrap/stickyimg02.png' },
    { src: 'assets/images/home-saffron_sec-wrap/stickyimg03.png' }
  ];

  ngAfterViewInit() { }

  showFancyTabs(list) {
    if (!list) {
      console.error('error with parsing list');
      return '';
    }
    const images = list.map(image => ({
      src: image.src,
      thumb: image.src,
      type: "image"
    }));

    Fancybox.show(images, {
      Toolbar: {
        display: {
          right: ['slideshow', 'fullscreen', 'close']
        }
      },
      Carousel: {
        transition: "fade",
      },
      Thumbs: false,
      transitionEffect: "tube",
      animationEffect: "zoom",
      fit: "contain"
    });
  }

  selectedTabIndex = 0;
  selectedIndex = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const targetEl = this.roundedAnimate && this.roundedAnimate.nativeElement;
    const fadeEl = this.fadeAnimation && this.fadeAnimation.nativeElement;

    if (targetEl && fadeEl) {
      const targetTop = targetEl.getBoundingClientRect().top - 74;
      const windowHeight = window.innerHeight;
      const video = document.getElementById('saffronVideo') as HTMLVideoElement;
      const videoRect = video.getBoundingClientRect().bottom;

      const triggerPoint = windowHeight * .2;

      if (targetTop <= 0) {
        targetEl.style.clipPath = 'circle(100% at 50% 50%)';
        fadeEl.style.opacity = '0';
        if (videoRect <= windowHeight - 200) {
          video.pause();
        } else {
          video.play();
        }
      } else if (targetTop <= triggerPoint) {
        const progress = Math.abs(1 - (targetTop / triggerPoint));
        const radius = 10 + progress * 90;
        targetEl.style.clipPath = `circle(${radius}% at 50% 50%)`;

        fadeEl.style.opacity = `${Math.abs(.8 - progress) > 0 ? Math.abs(.8 - progress) : 0}`;
        video.play();
      } else {
        targetEl.style.clipPath = 'circle(10% at 50% 50%)';
        fadeEl.style.opacity = '1';
        video.pause();
      }
    }
  }

  // selectTab(index: number): void {
  //   this.selectedTabIndex = index;
  // }


  selectIn(index: number) {
    this.selectedIndex = index;
  }

  selectTabIn(index: number) {
    this.selectedTabIndex = index;
  }

  toggleSection(index: number): void {
    this.sections.map((item, i) => {
      // if (i != index) {
      //   item.isOpen = false;
      // } else {
      //   item.isOpen = !item.isOpen;
      // }
      item.isOpen = i === index ? !item.isOpen : false;
    });
  }

  // toggleSection(index: number): void {
  //   this.sections = this.sections.map((section, i) => {
  //     return {
  //       ...section,
  //       isOpen: i === index ? !section.isOpen : false
  //     };
  //   });
  // }
  formSubmitted = false;

  inquireForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.inquireForm.invalid) {
      return;
    } else {
      console.log(this.inquireForm)
    }
  }

}

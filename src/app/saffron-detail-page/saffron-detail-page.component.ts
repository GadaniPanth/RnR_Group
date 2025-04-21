import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-saffron-detail-page',
  templateUrl: './saffron-detail-page.component.html',
  styleUrls: ['./saffron-detail-page.component.less']
})
export class SaffronDetailPageComponent implements AfterViewInit {

  @ViewChild('roundedAnimate', { static: false }) roundedAnimate!: ElementRef;
  @ViewChild('fadeAnimation', { static: false }) fadeAnimation!: ElementRef;

  tabs = [
    { title: "Ground Floor", image: "assets/images/home-saffron_sec-wrap/groundFloor.png" },
    { title: "First Floor", image: "assets/images/home-saffron_sec-wrap/fristfloor.png" },
    { title: "Second Floor", image: "assets/images/home-saffron_sec-wrap/secondfloor (1).png" },
    { title: "2 BHK", image: "assets/images/home-saffron_sec-wrap/2bhk-type-01.png" },
    { title: "3 BHK", image: "assets/images/home-saffron_sec-wrap/2bhk-type-03.png" },
    { title: "Typical Floor Plan", image: "assets/images/home-saffron_sec-wrap/typicalfloor.png" },
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

  constructor() { }
  ngAfterViewInit() { }

  selectedTabIndex = 0;
  selectedIndex = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const targetEl = this.roundedAnimate && this.roundedAnimate.nativeElement;
    const fadeEl = this.fadeAnimation && this.fadeAnimation.nativeElement;

    if (targetEl && fadeEl) {
      const targetTop = targetEl.getBoundingClientRect().top - 74;
      const windowHeight = window.innerHeight;

      const triggerPoint = windowHeight * 0.3; // 50% from top

      // console.log(targetTop)

      if (targetTop <= 0) {
        targetEl.style.clipPath = 'circle(100% at 50% 50%)';
        fadeEl.style.opacity = '0';
      } else if (targetTop <= triggerPoint) {
        const progress = Math.abs(1 - (targetTop / triggerPoint));
        const radius = 10 + progress * 90;
        targetEl.style.clipPath = `circle(${radius}% at 50% 50%)`;

        fadeEl.style.opacity = `${Math.abs(.8 - progress) > 0 ? Math.abs(.8 - progress) : 0}`;
      } else {
        targetEl.style.clipPath = 'circle(10% at 50% 50%)';
        fadeEl.style.opacity = '1';
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
    this.sections[index].isOpen = !this.sections[index].isOpen;
  }

  // toggleSection(index: number): void {
  //   this.sections = this.sections.map((section, i) => {
  //     return {
  //       ...section,
  //       isOpen: i === index ? !section.isOpen : false
  //     };
  //   });
  // }
}

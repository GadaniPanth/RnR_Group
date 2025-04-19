import { AfterViewInit, Component, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-sofitel-detail-page',
  templateUrl: './sofitel-detail-page.component.html',
  styleUrls: ['./sofitel-detail-page.component.less']
})
export class SofitelDetailPageComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @ViewChild('nextBtn', { static: false }) nextBtn!: ElementRef;
  @ViewChild('prevBtn', { static: false }) prevBtn!: ElementRef;
  @ViewChildren('countUp') counters!: QueryList<ElementRef>;
  speed = 1000;

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);

    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      speed: 500,
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement
      }
    });

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterEl = entry.target as HTMLElement;
          const target = +counterEl.getAttribute('data-target')!;
          let count = 0;
          const increment = target / this.speed;

          const updateCount = () => {
            count = +counterEl.innerText;
            if (count < target) {
              counterEl.innerText = `${Math.ceil(count + increment)}`;
              setTimeout(updateCount, 150 / (count || 1));
            } else {
              counterEl.innerText = `${target}`;
            }
          };

          updateCount();
          observer.unobserve(counterEl); // run once
        }
      });
    }, {
      threshold: 0.6 // trigger when ~60% visible
    });

    this.counters.forEach(counter => {
      observer.observe(counter.nativeElement);
    });
  }

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

  toggleSection(index: number): void {
    this.sections[index].isOpen = !this.sections[index].isOpen;
  }
}
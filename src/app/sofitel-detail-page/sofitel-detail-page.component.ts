import { AfterViewInit, Component, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-sofitel-detail-page',
  templateUrl: './sofitel-detail-page.component.html',
  styleUrls: ['./sofitel-detail-page.component.less']
})
export class SofitelDetailPageComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @ViewChild('swiperContainerCounter', { static: false }) swiperContainerCounter!: ElementRef;
  @ViewChild('nextBtn', { static: false }) nextBtn!: ElementRef;
  @ViewChild('prevBtn', { static: false }) prevBtn!: ElementRef;
  @ViewChildren('countUp') counters!: QueryList<ElementRef>;
  private speed = 1000;
  swiper!: Swiper;
  private hasInitializedCounters = false;

  ngOnInit() { }

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);

    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 24,
      speed: 500,
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement
      },
      on: {
        slideChange: () => this.updateButtonStates(),
        reachBeginning: () => this.updateButtonStates(),
        reachEnd: () => this.updateButtonStates(),
      }
    });

    this.updateButtonStates();

    this.initCounters();
    this.hasInitializedCounters = true;

    Swiper.use([Pagination])
    new Swiper(this.swiperContainerCounter.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    })
  }

  ngAfterViewChecked(): void {
    if (!this.hasInitializedCounters && this.counters.length) {
      setTimeout(() => {
        this.initCounters();
        this.hasInitializedCounters = true;
      }, 2000);
    }
  }

  updateButtonStates() {
    const isBeginning = this.swiper.isBeginning;
    const isEnd = this.swiper.isEnd;

    if (this.prevBtn.nativeElement) {
      this.prevBtn.nativeElement.classList.toggle('disabled', isBeginning);
    }

    if (this.nextBtn.nativeElement) {
      this.nextBtn.nativeElement.classList.toggle('disabled', isEnd);
    }
  }

  swiperSlides = [
    {
      'img': 'assets/images/sofitel_detail_page/sec5_img1.png'
    },
    {
      'img': 'assets/images/sofitel_detail_page/sec5_img2.png'
    },
    {
      'img': 'assets/images/sofitel_detail_page/luxuryimg-02.jpg'
    },
    {
      'img': 'assets/images/sofitel_detail_page/luxuryimg-04.jpg'
    },
    {
      'img': 'assets/images/sofitel_detail_page/luxuryimg-05.jpg'
    },
    {
      'img': 'assets/images/sofitel_detail_page/luxuryimg-06.jpg'
    },
    {
      'img': 'assets/images/sofitel_detail_page/luxuryimg-07.jpg'
    },
  ]

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

  initCounters(): void {
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
              setTimeout(updateCount, 500 / (count * 5 || 1));
            } else {
              counterEl.innerText = `${target}`;
            }
          };

          updateCount();
          observer.unobserve(counterEl); // trigger only once per element
        }
      });
    }, {
      threshold: 0.6
    });

    this.counters.forEach(counter => {
      counter.nativeElement.innerText = '0'; // reset count
      observer.observe(counter.nativeElement);
    });
  }

}
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swiper, { Navigation, Pagination } from "swiper";
import { AppComponent } from "../app.component";

declare const Fancybox: any;

@Component({
  selector: "app-sofitel-detail-page",
  templateUrl: "./sofitel-detail-page.component.html",
  styleUrls: ["./sofitel-detail-page.component.less"],
})
export class SofitelDetailPageComponent implements AfterViewInit {
  @ViewChild("swiperContainer", { static: false }) swiperContainer!: ElementRef;
  @ViewChild("swiperContainerCounter", { static: false })
  swiperContainerCounter!: ElementRef;
  @ViewChild("nextBtn", { static: false }) nextBtn!: ElementRef;
  @ViewChild("prevBtn", { static: false }) prevBtn!: ElementRef;
  @ViewChildren("countUp") counters!: QueryList<ElementRef>;
  private speed = 1000;
  swiper!: Swiper;
  private hasInitializedCounters = false;

  // declare const Fancybox: any;

  constructor(private appComponent: AppComponent) { }

  onInquiryClick() {
    this.appComponent.isInquiryOpen = true;
  }

  // private _isInquiryOpen = false;
  // get isInquiryOpen(): boolean {
  //   return this._isInquiryOpen;
  // }
  // set isInquiryOpen(value: boolean) {
  //   this._isInquiryOpen = value;
  //   document.body.style.overflow = value ? "hidden" : "";
  // }
  // onInquiryClick(event: MouseEvent) {
  //   this.isInquiryOpen = !this.isInquiryOpen;
  // }
  // sideInquireForm = new FormGroup({
  //   fullName: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   phone: new FormControl('', Validators.required),
  //   message: new FormControl('', Validators.required),
  // });

  formSubmitted = false;
  // sideFormSubmitted = false;

  ngOnInit() {
    document.addEventListener('keydown', (e) => {
      if (e.key.toLocaleLowerCase() == 'escape') {
        this.isPopupOpen = false;
      }
    });
  }

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);

    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 500,
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement,
      },
      on: {
        slideChange: () => this.updateButtonStates(),
        reachBeginning: () => this.updateButtonStates(),
        reachEnd: () => this.updateButtonStates(),
      },
    });

    this.updateButtonStates();

    this.initCounters();
    this.hasInitializedCounters = true;

    Swiper.use([Pagination]);
    new Swiper(this.swiperContainerCounter.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    Fancybox.bind("[data-fancybox='gallery-a']", {
      Toolbar: {
        display: {
          right: ['slideshow', 'fullscreen', 'close']
        }
      },
      Carousel: {
        transition: "fade",
      },
      // Thumbs: false,
      transitionEffect: "tube",
      animationEffect: "zoom",
      fit: 'contain'
    });
  }

  showFancyPlans() {
    Fancybox.show(
      [
        {
          src: 'assets/images/sofitel_detail_page/4BHK-TYPE-01-fancy.png',
          type: 'image',
          caption: 'Type 1',
        },
        {
          src: 'assets/images/sofitel_detail_page/4BHK-TYPE-02-fancy.png',
          type: 'image',
          caption: 'Type 2',
        },
        {
          src: 'assets/images/sofitel_detail_page/4BHK-TYPE-03-fancy.png',
          type: 'image',
          caption: 'Type 3',
        },
      ],
      {
        Toolbar: {
          display: {
            right: ['slideshow', 'fullscreen', 'close']
          }
        },
        Carousel: {
          transition: "fade",
        },
        // Thumbs: false,
        transitionEffect: "tube",
        animationEffect: "zoom",
        fit: 'contain'
      }
    );
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
      this.prevBtn.nativeElement.classList.toggle("disabled", isBeginning);
    }

    if (this.nextBtn.nativeElement) {
      this.nextBtn.nativeElement.classList.toggle("disabled", isEnd);
    }
  }

  private _isPopupOpen = false;
  get isPopupOpen(): boolean {
    return this._isPopupOpen;
  }
  set isPopupOpen(value: boolean) {
    this._isPopupOpen = value;
    document.body.style.overflow = value ? "hidden" : "";
  }
  togglePopup(event: MouseEvent) {
    this.isPopupOpen = !this.isPopupOpen;
  }

  swiperSlides = [
    {
      img: "assets/images/sofitel_detail_page/sec5_img1.png",
    },
    {
      img: "assets/images/sofitel_detail_page/sec5_img2.png",
    },
    {
      img: "assets/images/sofitel_detail_page/luxuryimg-02.jpg",
    },
    {
      img: "assets/images/sofitel_detail_page/luxuryimg-04.jpg",
    },
    {
      img: "assets/images/sofitel_detail_page/luxuryimg-05.jpg",
    },
    {
      img: "assets/images/sofitel_detail_page/luxuryimg-06.jpg",
    },
    {
      img: "assets/images/sofitel_detail_page/luxuryimg-07.jpg",
    },
  ];

  glamourSections = [
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
        ["Premium Aluminum section window with granite frames or equivalent."],
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

  toggleGlamourSection(index: number): void {
    this.glamourSections[index].isOpen = !this.glamourSections[index].isOpen;
  }

  pulseSections = [
    {
      title: "Recreation",
      content: [
        ["1545 Box Cricket - 1 Min."],
        ["sargasan Lake - 1 Min."],
        ["swagat Holiday Mall - 3 Mins."],
        ["new Guda Garden - 6 Mins."],
        ["city Pulse - 5 Mins."],
        ["sarita Udhyan - 9 Mins."],
      ],
      isOpen: false,
    },
    {
      title: "Hospitals",
      content: [
        ["aashka Hospital - 4 Mins"],
        ["smvs Swaminarayan Hospital - 8 Mins."],
      ],
      isOpen: false,
    },
    {
      title: "Schools ",
      content: [
        ["ved International - 4 Mins."],
        ["infocity School - 6 Mins."],
        ["sajhanand Achiever School - 4 Mins."],
        ["kameshwar International School - 4 Mins."],
      ],
      isOpen: false,
    },
    {
      title: "Temples",
      content: [
        ["Dholeshwar Mahadev - 8 mins."],
        ["munisijvrat Jain Temple - 5 Mins."],
      ],
      isOpen: false,
    },
    {
      title: "Daily Essentials",
      content: [
        ["croma - 3 Mins."],
        ["zudio - 3 Mins."],
        ["D-mart - 2 Mins."],
        ["Pantaloons - 3 Mins."],
      ],
      isOpen: false,
    },
  ];

  togglePulseSection(index: number): void {
    this.pulseSections[index].isOpen = !this.pulseSections[index].isOpen;
  }

  initCounters(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counterEl = entry.target as HTMLElement;
            const target = +counterEl.getAttribute("data-target")!;
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
      },
      {
        threshold: 0.6,
      }
    );

    this.counters.forEach((counter) => {
      counter.nativeElement.innerText = "0"; // reset count
      observer.observe(counter.nativeElement);
    });
  }

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

  onMainSubmit() {
    this.formSubmitted = true;

    if (this.inquireForm.invalid) {
      return;
    }
  }

  // onSideSubmit() {
  //   this.sideFormSubmitted = true;

  //   if (this.sideInquireForm.invalid) {
  //     return;
  //   }
  // }
}

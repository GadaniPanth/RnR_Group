import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
import Swiper from "swiper";
import { Pagination } from "swiper";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.less"],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild("swiperContainer", { static: false }) swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    Swiper.use([Pagination]);
    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: "auto",
      spaceBetween: 56,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      // freeMode: true,
    });
  }

  isActive = false;

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.isActive = window.scrollY > 250;
  }
}

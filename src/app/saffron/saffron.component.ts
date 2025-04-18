import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-saffron",
  templateUrl: "./saffron.component.html",
  styleUrls: ["./saffron.component.less"],
})
export class SaffronComponent implements OnInit {
  sections = [
    { title: "Floring", content: "A unique designed Vitrified Tiles or equivalent all rooms With grouting", isOpen: false },
    { title: "Doors & Windows", content: "Decorative main door and other are flush doors.", isOpen: false },
    { title: "Plaster & Painting ", content: "External double coat plaster with acrylic paint and internal mala plaster With wall care putty and water base coating", isOpen: false },
    { title: "Water Storage", content: "Each block has overhead water tank and common Underground tank.", isOpen: false },
    { title: "Parking", content: "Paver blocks or concrete finish in parking area.", isOpen: false },
    { title: "Toilet & Plumbing", content: "Standard quality plumbing & branded sanitary products.", isOpen: false },
    { title: "Kitchen Platform", content: "Exclusive granite platform with SS sink and designer glazed dedo tiles on wall.", isOpen: false },
    { title: "Electrification", content: "Single phase concealed copper wiring with modular type switches.", isOpen: false },
    { title: "Water Proofing", content: "Water proofing of standard materials all bathrooms and terrace.", isOpen: false }
  ];

  constructor() {}

  ngOnInit() {}

  toggleContent(index: number) {
    this.sections[index].isOpen = !this.sections[index].isOpen;

    if (this.sections[index].isOpen) {
      setTimeout(() => {
        // this.scrollToSection(index);
      }, 100);
    }
  }

scrollToSection(index: number) {
  const element = document.getElementById("accordion-" + index);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 20,
      behavior: "smooth",
    });
  }
}

}

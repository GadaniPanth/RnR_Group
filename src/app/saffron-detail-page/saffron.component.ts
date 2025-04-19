import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-saffron",
  templateUrl: "./saffron.component.html",
  styleUrls: ["./saffron.component.less"],
})
export class SaffronComponent implements OnInit {
  tabs = [
    {
      title: "Ground Floor",
      image: "assets/images/home-saffron_sec-wrap/groundFloor.png",
    },
    {
      title: "First Floor",
      image: "assets/images/home-saffron_sec-wrap/fristfloor.png",
    },
    {
      title: "Second Floor",
      image: "assets/images/home-saffron_sec-wrap/secondfloor (1).png",
    },
    {
      title: "2 BHK",
      image: "assets/images/home-saffron_sec-wrap/2bhk-type-01.png",
    },
    {
      title: "3 BHK",
      image: "assets/images/home-saffron_sec-wrap/2bhk-type-03.png",
    },
    {
      title: "Typical Floor Plan",
      image: "assets/images/home-saffron_sec-wrap/typicalfloor.png",
    },
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
    { label: "Block Entrance Foyer", src: "assets/images/buliding02 (1).png" },
    { label: "Lawn Area", src: "assets/images/Lawn_Area (1).png" },
    {
      label: "Sr. Citizen Seating",
      src: "assets/images/senoiur_citizen_sitting (1).png",
    },
    { label: "Children Play Area", src: "assets/images/buliding01.png" },
    {
      label: "Ample Parking",
      src: "assets/images/senoiur_citizen_sitting (1).png",
    },
    {
      label: "Ample Parking",
      src: "assets/images/senoiur_citizen_sitting (1).png",
    },
  ];

  constructor() {}
  ngOnInit() {}

  selectedTabIndex = 0;
  selectedIndex = 0;

  // selectTab(index: number): void {
  //   this.selectedTabIndex = index;
  // }

  selectTab(index: number) {
    this.selectedIndex = index;
    this.selectedTabIndex = index;
  }

  // toggleSection(index: number): void {
  //   this.sections[index].isOpen = !this.sections[index].isOpen;
  // }
  toggleSection(index: number): void {
    this.sections.forEach((section, i) => {
      section.isOpen = i === index ? !section.isOpen : false;
    });
  }
}

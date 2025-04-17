import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffronDetailPageComponent } from './saffron-detail-page.component';

describe('SaffronDetailPageComponent', () => {
  let component: SaffronDetailPageComponent;
  let fixture: ComponentFixture<SaffronDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaffronDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaffronDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

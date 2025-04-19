import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirePageComponent } from './inquire-page.component';

describe('InquirePageComponent', () => {
  let component: InquirePageComponent;
  let fixture: ComponentFixture<InquirePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquirePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofitelDetailPageComponent } from './sofitel-detail-page.component';

describe('SofitelDetailPageComponent', () => {
  let component: SofitelDetailPageComponent;
  let fixture: ComponentFixture<SofitelDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofitelDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofitelDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

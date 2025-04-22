import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPartnerPageComponent } from './channel-partner-page.component';

describe('ChannelPartnerPageComponent', () => {
  let component: ChannelPartnerPageComponent;
  let fixture: ComponentFixture<ChannelPartnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPartnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPartnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

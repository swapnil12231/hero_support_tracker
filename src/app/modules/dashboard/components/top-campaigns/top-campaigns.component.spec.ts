import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCampaignsComponent } from './top-campaigns.component';

describe('TopCampaignsComponent', () => {
  let component: TopCampaignsComponent;
  let fixture: ComponentFixture<TopCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCampaignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

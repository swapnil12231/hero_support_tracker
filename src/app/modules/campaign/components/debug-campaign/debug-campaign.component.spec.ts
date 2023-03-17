import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugCampaignComponent } from './debug-campaign.component';

describe('DebugCampaignComponent', () => {
  let component: DebugCampaignComponent;
  let fixture: ComponentFixture<DebugCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

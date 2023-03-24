import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDispositionComponent } from './campaign-disposition.component';

describe('CampaignDispositionComponent', () => {
  let component: CampaignDispositionComponent;
  let fixture: ComponentFixture<CampaignDispositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDispositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

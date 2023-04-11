import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOnHoldComponent } from './music-on-hold.component';

describe('MusicOnHoldComponent', () => {
  let component: MusicOnHoldComponent;
  let fixture: ComponentFixture<MusicOnHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicOnHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicOnHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

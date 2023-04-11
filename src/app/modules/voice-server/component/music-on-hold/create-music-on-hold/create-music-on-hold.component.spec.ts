import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicOnHoldComponent } from './create-music-on-hold.component';

describe('CreateMusicOnHoldComponent', () => {
  let component: CreateMusicOnHoldComponent;
  let fixture: ComponentFixture<CreateMusicOnHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMusicOnHoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMusicOnHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

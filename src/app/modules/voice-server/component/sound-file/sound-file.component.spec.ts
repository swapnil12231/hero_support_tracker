import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundFileComponent } from './sound-file.component';

describe('SoundFileComponent', () => {
  let component: SoundFileComponent;
  let fixture: ComponentFixture<SoundFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

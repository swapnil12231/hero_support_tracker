import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePauseCodeComponent } from './create-pause-code.component';

describe('CreatePauseCodeComponent', () => {
  let component: CreatePauseCodeComponent;
  let fixture: ComponentFixture<CreatePauseCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePauseCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePauseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

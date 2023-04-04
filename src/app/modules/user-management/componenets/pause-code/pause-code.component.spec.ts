import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseCodeComponent } from './pause-code.component';

describe('PauseCodeComponent', () => {
  let component: PauseCodeComponent;
  let fixture: ComponentFixture<PauseCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

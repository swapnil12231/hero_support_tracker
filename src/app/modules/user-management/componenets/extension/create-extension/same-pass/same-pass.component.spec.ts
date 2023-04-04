import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamePassComponent } from './same-pass.component';

describe('SamePassComponent', () => {
  let component: SamePassComponent;
  let fixture: ComponentFixture<SamePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

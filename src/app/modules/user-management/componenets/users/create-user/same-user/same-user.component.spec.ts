import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameUserComponent } from './same-user.component';

describe('SameUserComponent', () => {
  let component: SameUserComponent;
  let fixture: ComponentFixture<SameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

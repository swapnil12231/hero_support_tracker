import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrmComponent } from './new-crm.component';

describe('NewCrmComponent', () => {
  let component: NewCrmComponent;
  let fixture: ComponentFixture<NewCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

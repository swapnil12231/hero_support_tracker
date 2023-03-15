import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCrmComponent } from './create-crm.component';

describe('CreateCrmComponent', () => {
  let component: CreateCrmComponent;
  let fixture: ComponentFixture<CreateCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

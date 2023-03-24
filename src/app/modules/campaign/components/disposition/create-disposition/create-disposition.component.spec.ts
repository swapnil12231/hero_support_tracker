import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDispositionComponent } from './create-disposition.component';

describe('CreateDispositionComponent', () => {
  let component: CreateDispositionComponent;
  let fixture: ComponentFixture<CreateDispositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDispositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

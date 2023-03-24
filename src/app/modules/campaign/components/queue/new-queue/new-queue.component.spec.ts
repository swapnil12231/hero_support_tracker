import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQueueComponent } from './new-queue.component';

describe('NewQueueComponent', () => {
  let component: NewQueueComponent;
  let fixture: ComponentFixture<NewQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

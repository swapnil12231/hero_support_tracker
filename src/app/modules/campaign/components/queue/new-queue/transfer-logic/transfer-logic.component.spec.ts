import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferLogicComponent } from './transfer-logic.component';

describe('CreateQueueNextComponent', () => {
  let component: TransferLogicComponent;
  let fixture: ComponentFixture<TransferLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferLogicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransferLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePassComponent } from './double-pass.component';

describe('DoublePassComponent', () => {
  let component: DoublePassComponent;
  let fixture: ComponentFixture<DoublePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoublePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

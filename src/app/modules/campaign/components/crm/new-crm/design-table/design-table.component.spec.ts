import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTableComponent } from './design-table.component';

describe('DesignTableComponent', () => {
  let component: DesignTableComponent;
  let fixture: ComponentFixture<DesignTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

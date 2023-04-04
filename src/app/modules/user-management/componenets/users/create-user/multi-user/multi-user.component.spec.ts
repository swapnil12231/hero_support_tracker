import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiUserComponent } from './multi-user.component';

describe('MultiUserComponent', () => {
  let component: MultiUserComponent;
  let fixture: ComponentFixture<MultiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillSetComponent } from './create-skill-set.component';

describe('CreateSkillSetComponent', () => {
  let component: CreateSkillSetComponent;
  let fixture: ComponentFixture<CreateSkillSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkillSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

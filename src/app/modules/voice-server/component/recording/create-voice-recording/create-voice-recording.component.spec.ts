import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoiceRecordingComponent } from './create-voice-recording.component';

describe('CreateVoiceRecordingComponent', () => {
  let component: CreateVoiceRecordingComponent;
  let fixture: ComponentFixture<CreateVoiceRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVoiceRecordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVoiceRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

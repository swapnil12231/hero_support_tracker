import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceServerComponent } from './voice-server.component';

describe('VoiceServerComponent', () => {
  let component: VoiceServerComponent;
  let fixture: ComponentFixture<VoiceServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

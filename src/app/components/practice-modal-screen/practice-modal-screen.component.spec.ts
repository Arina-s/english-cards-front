import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeModalScreenComponent } from './practice-modal-screen.component';

describe('PracticeModalScreenComponent', () => {
  let component: PracticeModalScreenComponent;
  let fixture: ComponentFixture<PracticeModalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeModalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

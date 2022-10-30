import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupModalScreenComponent } from './create-group-modal-screen.component';

describe('CreateGroupModalScreenComponent', () => {
  let component: CreateGroupModalScreenComponent;
  let fixture: ComponentFixture<CreateGroupModalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupModalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

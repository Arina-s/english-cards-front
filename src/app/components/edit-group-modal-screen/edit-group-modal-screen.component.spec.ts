import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupModalScreenComponent } from './edit-group-modal-screen.component';

describe('EditGroupModalScreenComponent', () => {
  let component: EditGroupModalScreenComponent;
  let fixture: ComponentFixture<EditGroupModalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupModalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGroupModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

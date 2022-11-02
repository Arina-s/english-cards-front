import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupModalScreenComponent } from './delete-group-modal-screen.component';

describe('DeleteGroupModalScreenComponent', () => {
  let component: DeleteGroupModalScreenComponent;
  let fixture: ComponentFixture<DeleteGroupModalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGroupModalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGroupModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

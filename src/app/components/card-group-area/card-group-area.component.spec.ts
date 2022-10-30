import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupAreaComponent } from './card-group-area.component';

describe('CardGroupAreaComponent', () => {
  let component: CardGroupAreaComponent;
  let fixture: ComponentFixture<CardGroupAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGroupAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGroupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

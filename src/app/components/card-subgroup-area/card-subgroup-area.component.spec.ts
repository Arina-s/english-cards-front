import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubgroupAreaComponent } from './card-subgroup-area.component';

describe('CardSubgroupAreaComponent', () => {
  let component: CardSubgroupAreaComponent;
  let fixture: ComponentFixture<CardSubgroupAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSubgroupAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubgroupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trashcan } from './trashcan';

describe('Trashcan', () => {
  let component: Trashcan;
  let fixture: ComponentFixture<Trashcan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trashcan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trashcan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

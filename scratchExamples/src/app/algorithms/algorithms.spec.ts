import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALGORITHMS } from './algorithms';

describe('ALGORITHMS', () => {
  let component: ALGORITHMS;
  let fixture: ComponentFixture<ALGORITHMS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALGORITHMS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALGORITHMS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

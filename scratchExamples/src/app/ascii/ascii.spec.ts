import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASCII } from './ascii';

describe('ASCII', () => {
  let component: ASCII;
  let fixture: ComponentFixture<ASCII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASCII]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASCII);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

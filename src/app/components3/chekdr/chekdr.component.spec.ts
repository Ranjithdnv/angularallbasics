import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekdrComponent } from './chekdr.component';

describe('ChekdrComponent', () => {
  let component: ChekdrComponent;
  let fixture: ComponentFixture<ChekdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChekdrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChekdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

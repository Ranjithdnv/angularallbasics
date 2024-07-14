import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarparentComponent } from './starparent.component';

describe('StarparentComponent', () => {
  let component: StarparentComponent;
  let fixture: ComponentFixture<StarparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErefviewComponent } from './erefview.component';

describe('ErefviewComponent', () => {
  let component: ErefviewComponent;
  let fixture: ComponentFixture<ErefviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErefviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErefviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

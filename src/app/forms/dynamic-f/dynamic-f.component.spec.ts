import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFComponent } from './dynamic-f.component';

describe('DynamicFComponent', () => {
  let component: DynamicFComponent;
  let fixture: ComponentFixture<DynamicFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

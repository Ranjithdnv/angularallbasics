import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilderefviewComponent } from './childerefview.component';

describe('ChilderefviewComponent', () => {
  let component: ChilderefviewComponent;
  let fixture: ComponentFixture<ChilderefviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChilderefviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilderefviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

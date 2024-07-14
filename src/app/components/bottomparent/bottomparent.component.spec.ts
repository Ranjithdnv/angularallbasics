import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomparentComponent } from './bottomparent.component';

describe('BottomparentComponent', () => {
  let component: BottomparentComponent;
  let fixture: ComponentFixture<BottomparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

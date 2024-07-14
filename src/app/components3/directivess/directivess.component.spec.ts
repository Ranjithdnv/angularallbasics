import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivessComponent } from './directivess.component';

describe('DirectivessComponent', () => {
  let component: DirectivessComponent;
  let fixture: ComponentFixture<DirectivessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

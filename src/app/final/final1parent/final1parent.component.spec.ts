import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Final1parentComponent } from './final1parent.component';

describe('Final1parentComponent', () => {
  let component: Final1parentComponent;
  let fixture: ComponentFixture<Final1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Final1parentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Final1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubscribeComponent } from './behaviour-subscribe.component';

describe('BehaviourSubscribeComponent', () => {
  let component: BehaviourSubscribeComponent;
  let fixture: ComponentFixture<BehaviourSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

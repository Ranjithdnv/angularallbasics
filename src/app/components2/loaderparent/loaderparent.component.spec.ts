import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderparentComponent } from './loaderparent.component';

describe('LoaderparentComponent', () => {
  let component: LoaderparentComponent;
  let fixture: ComponentFixture<LoaderparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

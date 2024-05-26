import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollUpComponent } from './scroll-up.component';

describe('ScrollUpComponent', () => {
  let component: ScrollUpComponent;
  let fixture: ComponentFixture<ScrollUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

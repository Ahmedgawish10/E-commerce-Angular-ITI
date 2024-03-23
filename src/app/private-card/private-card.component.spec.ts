import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCardComponent } from './private-card.component';

describe('PrivateCardComponent', () => {
  let component: PrivateCardComponent;
  let fixture: ComponentFixture<PrivateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

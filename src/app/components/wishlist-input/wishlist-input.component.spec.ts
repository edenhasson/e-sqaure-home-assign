import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistInputComponent } from './wishlist-input.component';

describe('WishlistInputComponent', () => {
  let component: WishlistInputComponent;
  let fixture: ComponentFixture<WishlistInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

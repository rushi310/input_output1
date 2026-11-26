import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFrom } from './product-from';

describe('ProductFrom', () => {
  let component: ProductFrom;
  let fixture: ComponentFixture<ProductFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

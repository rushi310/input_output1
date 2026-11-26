import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StdForm } from './std-form';

describe('StdForm', () => {
  let component: StdForm;
  let fixture: ComponentFixture<StdForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdForm],
    }).compileComponents();

    fixture = TestBed.createComponent(StdForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

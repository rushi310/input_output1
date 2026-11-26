import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StdTable } from './std-table';

describe('StdTable', () => {
  let component: StdTable;
  let fixture: ComponentFixture<StdTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdTable],
    }).compileComponents();

    fixture = TestBed.createComponent(StdTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

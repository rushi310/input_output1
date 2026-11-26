import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDashboard } from './post-dashboard';

describe('PostDashboard', () => {
  let component: PostDashboard;
  let fixture: ComponentFixture<PostDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

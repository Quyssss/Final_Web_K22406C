import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandpoliciesComponent } from './termandpolicies.component';

describe('TermandpoliciesComponent', () => {
  let component: TermandpoliciesComponent;
  let fixture: ComponentFixture<TermandpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermandpoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermandpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

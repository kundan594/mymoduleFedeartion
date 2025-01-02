import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remote3ListComponent } from './remote3-list.component';

describe('Remote3ListComponent', () => {
  let component: Remote3ListComponent;
  let fixture: ComponentFixture<Remote3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remote3ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remote3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

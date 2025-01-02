import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remote2ListComponent } from './remote2-list.component';

describe('Remote2ListComponent', () => {
  let component: Remote2ListComponent;
  let fixture: ComponentFixture<Remote2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remote2ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remote2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

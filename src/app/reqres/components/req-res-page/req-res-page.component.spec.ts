import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqResPageComponent } from './req-res-page.component';

describe('ReqResPageComponent', () => {
  let component: ReqResPageComponent;
  let fixture: ComponentFixture<ReqResPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqResPageComponent]
    });
    fixture = TestBed.createComponent(ReqResPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperimentiComponent } from './esperimenti.component';

describe('EsperimentiComponent', () => {
  let component: EsperimentiComponent;
  let fixture: ComponentFixture<EsperimentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsperimentiComponent]
    });
    fixture = TestBed.createComponent(EsperimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

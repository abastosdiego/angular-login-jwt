import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTemplateComponent } from './base-template.component';

describe('BaseTemplateComponent', () => {
  let component: BaseTemplateComponent;
  let fixture: ComponentFixture<BaseTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseTemplateComponent]
    });
    fixture = TestBed.createComponent(BaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

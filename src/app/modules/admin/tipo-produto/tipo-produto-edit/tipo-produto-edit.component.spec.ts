import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoEditComponent } from './tipo-produto-edit.component';

describe('TipoProdutoEditComponent', () => {
  let component: TipoProdutoEditComponent;
  let fixture: ComponentFixture<TipoProdutoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoProdutoEditComponent]
    });
    fixture = TestBed.createComponent(TipoProdutoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

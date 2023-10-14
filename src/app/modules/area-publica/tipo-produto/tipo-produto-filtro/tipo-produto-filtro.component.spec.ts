import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoFiltroComponent } from './tipo-produto-filtro.component';

describe('TipoProdutoFiltroComponent', () => {
  let component: TipoProdutoFiltroComponent;
  let fixture: ComponentFixture<TipoProdutoFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoProdutoFiltroComponent]
    });
    fixture = TestBed.createComponent(TipoProdutoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

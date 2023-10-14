import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  idTipoProdutoSelecionado: number | undefined;

  changeIdTipoProdutoSelecionado(idTipoProdutoSelecionado: number) {
    this.idTipoProdutoSelecionado = idTipoProdutoSelecionado;
  }
}

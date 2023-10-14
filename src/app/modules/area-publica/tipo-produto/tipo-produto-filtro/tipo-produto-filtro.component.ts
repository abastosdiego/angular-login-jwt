import { Component, OnInit } from '@angular/core';
import { TipoProduto } from 'src/app/models/tipo-produto-model';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';

@Component({
  selector: 'app-tipo-produto-filtro',
  templateUrl: './tipo-produto-filtro.component.html',
  styleUrls: ['./tipo-produto-filtro.component.css']
})
export class TipoProdutoFiltroComponent implements OnInit {
  tiposProdutos?: TipoProduto[];

  constructor(private tipoProdutoService: TipoProdutoService) {}

  ngOnInit(): void {
    this.tipoProdutoService.getTiposProdutos()
      .subscribe(response => {
        this.tiposProdutos = response;
      });
  }
}

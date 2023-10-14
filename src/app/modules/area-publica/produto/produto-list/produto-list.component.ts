import { IndexComponent } from './../../../admin/index/index/index.component';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto-model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos?: Produto[];
  @Input() idTipoProdutoSelecionado: number | undefined;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .subscribe(response => {
        this.produtos = response;
      });
  }

}

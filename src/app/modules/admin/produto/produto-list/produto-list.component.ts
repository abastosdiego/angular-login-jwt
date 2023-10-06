import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto-model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos?: Produto[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .subscribe(response => {
        this.produtos = response;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipoProduto } from 'src/app/models/tipo-produto-model';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';

@Component({
  selector: 'app-tipo-produto-list',
  templateUrl: './tipo-produto-list.component.html',
  styleUrls: ['./tipo-produto-list.component.css']
})
export class TipoProdutoListComponent implements OnInit {
  tiposProdutos?: TipoProduto[];

  constructor(private tipoProdutoService: TipoProdutoService) {}

  ngOnInit(): void {
    this.tipoProdutoService.getTiposProdutos()
      .subscribe(response => {
        this.tiposProdutos = response;
      });
  }

}

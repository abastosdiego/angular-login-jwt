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
  inscricaoObservable!: Subscription;
  tiposProdutos?: TipoProduto[];

  constructor(private tipoProdutoService: TipoProdutoService) {}

  ngOnInit(): void {
    this.inscreverObservable();
    this.tipoProdutoService.getTiposProdutos();
  }

  inscreverObservable() {
    this.inscricaoObservable = this.tipoProdutoService.getResultsTiposProdutos().subscribe(response => {
      this.tiposProdutos = response
    });
  }

}

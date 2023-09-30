import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TipoProduto } from 'src/app/models/tipo-produto-model';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';

@Component({
  selector: 'app-tipo-produto-edit',
  templateUrl: './tipo-produto-edit.component.html',
  styleUrls: ['./tipo-produto-edit.component.css']
})
export class TipoProdutoEditComponent implements OnInit {
  tipoProduto?: TipoProduto;
  inscricaoObservable!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private tipoProdutoService: TipoProdutoService){

  }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.params['id'];
    this.inscreverObservable();
    this.tipoProdutoService.getTipoProduto(id);
  }

  inscreverObservable() {
    this.inscricaoObservable = this.tipoProdutoService.getResultTipoProduto().subscribe(response => {
      console.log(response);
      this.tipoProduto = response
    });
  }

}

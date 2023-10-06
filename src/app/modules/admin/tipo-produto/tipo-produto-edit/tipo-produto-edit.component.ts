import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TipoProduto } from 'src/app/models/tipo-produto-model';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';

@Component({
  selector: 'app-tipo-produto-edit',
  templateUrl: './tipo-produto-edit.component.html',
  styleUrls: ['./tipo-produto-edit.component.css']
})
export class TipoProdutoEditComponent implements OnInit {
  tipoProduto: TipoProduto;
  id?: number;
  mensagemSucesso: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tipoProdutoService: TipoProdutoService){
    this.tipoProduto = new TipoProduto();
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(`id: ${this.id}`);
    if(this.id) {
      this.tipoProdutoService.getTipoProduto(this.id)
        .subscribe(response => {
          this.tipoProduto = response;
        });
    }
  }

  cadastrar() {
      this.tipoProdutoService.cadastrarTipoProduto(this.tipoProduto).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/tiposprodutos']);
        }, 1500);
      })
  }

  editar() {
    if(this.id){
      this.tipoProdutoService.alterarTipoProduto(this.tipoProduto, this.id).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/tiposprodutos']);
        }, 1500);
      })
    }
  }

  excluir() {
    if(this.id){
      this.tipoProdutoService.excluirTipoProduto(this.id).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/tiposprodutos']);
        }, 1500);
      })
    }
  }

}

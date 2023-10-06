import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto-model';
import { TipoProduto } from 'src/app/models/tipo-produto-model';
import { ProdutoService } from 'src/app/services/produto.service';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
  produto: Produto;
  id?: number;
  mensagemSucesso: string = '';
  tiposProdutos?: TipoProduto[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private produtoService: ProdutoService, private tipoProdutoService: TipoProdutoService){
    this.produto = new Produto();
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if(this.id) {
      this.produtoService.getProduto(this.id)
        .subscribe(response => {
          this.produto = response;
        });
    }

    this.tipoProdutoService.getTiposProdutos()
      .subscribe(response => {
        this.tiposProdutos = response;
      });
  }

  cadastrar() {
      this.produtoService.cadastrarProduto(this.produto).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/produtos']);
        }, 1500);
      })
  }

  editar() {
    if(this.id){
      this.produtoService.alterarProduto(this.produto, this.id).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/produtos']);
        }, 1500);
      })
    }
  }

  excluir() {
    if(this.id){
      this.produtoService.excluirProduto(this.id).subscribe(response => {
        this.mensagemSucesso = response.message;
        setTimeout(() => {
          this.router.navigate(['/admin/produtos']);
        }, 1500);
      })
    }
  }
}

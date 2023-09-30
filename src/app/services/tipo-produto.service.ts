import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoProduto } from '../models/tipo-produto-model';
import { LoginService } from './login.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {
  private tiposProdutos = new BehaviorSubject<TipoProduto[]>([]);
  private tipoProduto = new BehaviorSubject<TipoProduto>(new TipoProduto());

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTiposProdutos() {

    const url = 'http://127.0.0.1:8000/api/tiposprodutos';

    const autorization = this.loginService.getTokenType() + ' ' + this.loginService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': autorization
      })
    };

    this.http.get<TipoProduto[]>(url, httpOptions)
      .subscribe(
        response => {
          this.tiposProdutos.next(response);
        }
      )
  }

  getResultsTiposProdutos() {
    return this.tiposProdutos.asObservable();
  }

  ///////////////

  getTipoProduto(id: number) {

    const url = 'http://127.0.0.1:8000/api/tiposprodutos/' + id;

    const autorization = this.loginService.getTokenType() + ' ' + this.loginService.getToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': autorization
      })
    };

    this.http.get<TipoProduto>(url, httpOptions)
      .subscribe(
        response => {
          this.tipoProduto.next(response);
        }
      )
  }

  getResultTipoProduto() {
    return this.tipoProduto.asObservable();
  }

}

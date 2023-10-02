import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoProduto } from '../models/tipo-produto-model';
import { LoginService } from './login.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {
  private baseURL = `http://127.0.0.1:8000/api`;
  private httpOptions: {headers: HttpHeaders};

  constructor(private http: HttpClient, private loginService: LoginService) {

    var autorization = this.loginService.getTokenType() + ' ' + this.loginService.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': autorization
      })
    };

   }

  getTiposProdutos(): Observable<TipoProduto[]> {
    return this.http.get<TipoProduto[]>(`${this.baseURL}/tiposprodutos`, this.httpOptions);
  }

  getTipoProduto(id: number): Observable<TipoProduto> {
    return this.http.get<TipoProduto>(`${this.baseURL}/tiposprodutos/${id}`, this.httpOptions);
  }

  cadastrarTipoProduto(tipoProduto: TipoProduto): Observable<any> {
    return this.http.post(`${this.baseURL}/tiposprodutos`, tipoProduto, this.httpOptions);
  }

  alterarTipoProduto(tipoProduto: TipoProduto, id: number): Observable<any> {
    return this.http.put(`${this.baseURL}/tiposprodutos/${id}`, tipoProduto, this.httpOptions);
  }

  excluirTipoProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/tiposprodutos/${id}`, this.httpOptions);
  }

}

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
  //private httpOptions: {headers: HttpHeaders};

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getTiposProdutos(): Observable<TipoProduto[]> {
    return this.http.get<TipoProduto[]>(`${this.baseURL}/tiposprodutos`, this.loginService.getHttpOptions());
  }

  getTipoProduto(id: number): Observable<TipoProduto> {
    return this.http.get<TipoProduto>(`${this.baseURL}/tiposprodutos/${id}`, this.loginService.getHttpOptions());
  }

  cadastrarTipoProduto(tipoProduto: TipoProduto): Observable<any> {
    return this.http.post(`${this.baseURL}/tiposprodutos`, tipoProduto, this.loginService.getHttpOptions());
  }

  alterarTipoProduto(tipoProduto: TipoProduto, id: number): Observable<any> {
    return this.http.put(`${this.baseURL}/tiposprodutos/${id}`, tipoProduto, this.loginService.getHttpOptions());
  }

  excluirTipoProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/tiposprodutos/${id}`, this.loginService.getHttpOptions());
  }

}

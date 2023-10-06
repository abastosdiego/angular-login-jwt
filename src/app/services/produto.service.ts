import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Produto } from '../models/produto-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL = `http://127.0.0.1:8000/api`;
  //private httpOptions: {headers: HttpHeaders};

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/produtos`, this.loginService.getHttpOptions());
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`, this.loginService.getHttpOptions());
  }

  cadastrarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.baseURL}/produtos`, produto, this.loginService.getHttpOptions());
  }

  alterarProduto(produto: Produto, id: number): Observable<any> {
    return this.http.put(`${this.baseURL}/produtos/${id}`, produto, this.loginService.getHttpOptions());
  }

  excluirProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/produtos/${id}`, this.loginService.getHttpOptions());
  }
}

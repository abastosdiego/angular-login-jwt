import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagem } from '../models/imagem-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(file: File, url: string) : Observable<Imagem> {
    //files: Set<File>
    const formData = new FormData();

    //files.forEach(file => {
    //  formData.append('file', file, file.name)
    //});
    formData.append('imagem', file, file.name)

    return this.http.post<Imagem>(url, formData);
  }
}

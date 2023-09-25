import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-produto-edit',
  templateUrl: './tipo-produto-edit.component.html',
  styleUrls: ['./tipo-produto-edit.component.css']
})
export class TipoProdutoEditComponent {

  constructor(private ativatedRoute:ActivatedRoute) {

    console.log('id: ' + this.ativatedRoute.snapshot.paramMap.get("id"));
  }

}

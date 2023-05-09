import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.cadastroForm = builder.group({
      nome: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarsenha: [''],
      aceite: [false, [Validators.requiredTrue]],
    });
  }

  cadastrar() {
    console.log(this.cadastroForm.value);
  }
}

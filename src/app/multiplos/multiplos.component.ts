import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MultiplosService } from '../services/multiplos.service';

@Component({
  selector: 'app-multiplos',
  templateUrl: './multiplos.component.html',
  styleUrls: ['./multiplos.component.scss'],
})
export class MultiplosComponent implements OnInit {
  formMultiplo: FormGroup;
  multiplo3: any[] = [];
  multiplo5: any[] = [];
  multiplo7: any[] = [];
  multiplos: any[] = [];
  primerMultiplo: boolean = false;

  constructor(private _ms: MultiplosService) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.consultarMultiplos();
  }

  crearFormulario() {
    this.formMultiplo = new FormGroup({
      id: new FormControl(''),
      userNumber: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      multiplo3: new FormControl(''),
      multiplo5: new FormControl(''),
      multiplo7: new FormControl(''),
    });
  }

  consultarMultiplos() {
    this._ms.obtenerMultiplos().subscribe((resp: any) => {
      this.multiplos = resp;
      console.log(resp);
      this.multiplos.forEach((mult) => {
        if (mult.multiplo3 != '') {
          this.primerMultiplo = true;
        }
      });
    });
  }

  obtenerMultiplos() {
    console.log(this.formMultiplo.value);
    let numeroUsuario = this.formMultiplo.get('userNumber').value;
    numeroUsuario = JSON.parse(numeroUsuario);

    //recorrido variable ingresada por usuario
    for (let i = 0; i < numeroUsuario; i++) {
      let dividir3 = i % 3;
      let dividir5 = i % 5;
      let dividir7 = i % 7;

      //validación si es multiplo
      if (dividir3 == 0) {
        //si lo es, se empuj aL arreglo correspondiente a través de un form control hacia un formArray
        this.multiplo3.push(i);
        this.formMultiplo.get('multiplo3').setValue(this.multiplo3);
      } else if (dividir5 == 0) {
        this.multiplo5.push(i);
        this.formMultiplo.get('multiplo5').setValue(this.multiplo5);
      } else if (dividir7 == 0) {
        this.multiplo7.push(i);
        this.formMultiplo.get('multiplo7').setValue(this.multiplo7);
      }
    }

    let rq = this.formMultiplo.getRawValue();
    rq.userNumber = JSON.parse(rq.userNumber);
    console.log(this.formMultiplo.value);
    this._ms.guardarMultiplo(rq).subscribe((resp: any) => {
      rq.id = resp.name;
      this.consultarMultiplos();
      this.multiplo3 = [];
      this.multiplo5 = [];
      this.multiplo7 = [];
      this.formMultiplo.reset();
    });
  }
}

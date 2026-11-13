import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Letras (con tildes, ü y ñ) separadas por un solo espacio, sin espacios al principio ni al final
export const SOLO_LETRAS = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
// 9 dígitos que empiezan por 6, 7, 8 o 9, con +34 delante opcional (con o sin espacio)
export const TELEFONO = /^(\+34 ?)?[6-9]\d{8}$/;
// Como SOLO_LETRAS, pero las palabras pueden ir separadas por espacio o guion
export const NOMBRE_MASCOTA = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
// Exactamente 15 dígitos
export const MICROCHIP = /^\d{15}$/;
// Al menos una minúscula, una mayúscula y un número, sin espacios (la longitud la controlan minLength/maxLength)
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-page-form',
  styleUrl: './page-form.css',
  templateUrl: './page-form.html',
})
export class PageForm {
  form = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(SOLO_LETRAS),
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(SOLO_LETRAS),
    ]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(TELEFONO)]), //Echarle un ojo al regexp de aqui
    email: new FormControl('', [Validators.required, Validators.email]),
    nombreMascota: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(NOMBRE_MASCOTA),
    ]),
    especie: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    raza: new FormControl('', Validators.maxLength(40)),
    edaAnios: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    pesoKg: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    numeroMicroChip: new FormControl('', [Validators.required, Validators.pattern(MICROCHIP)]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(10),
      Validators.max(24),
      Validators.pattern(PASSWORD),
    ]),
    motivoPrimera: new FormControl('', [
      Validators.required,
      Validators.min(10),
      Validators.max(300),
    ]),
    aceptoPolitica: new FormControl('', Validators.requiredTrue),
    recibirRecordatorio: new FormControl(''),
  });

  isInvalidField(field: string) {
    let form = this.form.get(field);

    return form?.invalid && (form.touched || form.dirty);
  }

  mostrarError(field: string, error: string) {
    return this.form?.get(field)?.hasError(error);
  }
}

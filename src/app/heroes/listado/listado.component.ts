import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
	colores: string[] = ['azul', 'rojo', 'amarillo', 'purpura', 'rosa', 'verde'];
	colorBorrado: string = '';

	borrarColor(){
		this.colorBorrado = this.colores.pop() || '';
	}
}

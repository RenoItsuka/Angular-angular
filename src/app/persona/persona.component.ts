import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

 nombre: string = 'Juan';
 apellido: string = 'Perez';
 edad: number = 28; 
 
 /* private edad: number = 28; //hacer un atributo privado
 getEdad():number{ 
   return this.edad; //metodo para mandar llamar un atributo privado
 } */

}

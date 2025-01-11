import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  valorContador: number=0
  //INPUT
  mensajePadre = "Mensaje desde el padre, AUPA ATLETI"


  //OUTPUT , se crea atributo, y function con param de evento:string
  mensajeRecibido ?:string // ? en lugar de igualar a vacio el string

  recibirMensaje($event: string){
    this.mensajeRecibido=$event
  }


  incrementar(){
    this.valorContador ++
  }
  decrementar(){
    this.valorContador --
  }


}

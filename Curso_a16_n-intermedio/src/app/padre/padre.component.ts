import { Component, OnInit } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}
  
  nombre?: string
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._servicioFamiliar.setHermanoMayor("Juan")
    this.nombre = this._servicioFamiliar.getHermanoMayor()

}



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

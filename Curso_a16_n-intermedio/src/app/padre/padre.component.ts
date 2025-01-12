import { Component, OnInit } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, EstiloHermanosDirective, DatePipe],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{
  nombre?: string
  fecha?: Date = new Date()



  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}
  
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._servicioFamiliar.setHermanoMayor("juanito valderrama")
    this.nombre = this._servicioFamiliar.getHermanoMayor()

}


saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeño()||"")
}

preguntar(){
  console.log(this._servicioFamiliar.preguntarPorHijo());
  
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

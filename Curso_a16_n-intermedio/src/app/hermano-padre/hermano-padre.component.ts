import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePersPipe } from '../mi-pipe-pers.pipe';

@Component({
  selector: 'app-hermano-padre',
  standalone: true,
  imports: [EstiloHermanosDirective, MiPipePersPipe],
  templateUrl: './hermano-padre.component.html',
  styleUrl: './hermano-padre.component.css'
})
export class HermanoPadreComponent implements OnInit{
  nombre?: string
  
 constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._servicioFamiliar.setHermanoPequeño("Pedro")
    this.nombre= this._servicioFamiliar.getHermanoPequeño()
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor()||"")
  }
  
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
    
  }

}

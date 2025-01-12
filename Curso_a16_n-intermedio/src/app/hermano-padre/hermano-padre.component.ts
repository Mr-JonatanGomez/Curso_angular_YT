import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano-padre',
  standalone: true,
  imports: [],
  templateUrl: './hermano-padre.component.html',
  styleUrl: './hermano-padre.component.css'
})
export class HermanoPadreComponent implements OnInit{

 constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}

nombre?: string

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._servicioFamiliar.setHermanoPequeño("Pedro")
    this.nombre = this._servicioFamiliar.getHermanoPequeño()
  }

}

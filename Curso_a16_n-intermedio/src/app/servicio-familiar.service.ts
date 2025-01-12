import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoMayor?:string
  hermanoPequeño?:string

  //GETTER Y SETTER

  
  getHermanoMayor() : string {
    return this.hermanoMayor || ""
  }

  getHermanoPequeño() : string {
    return this.hermanoMayor || ""
  }

  
  setHermanoMayor(hermano : string) {
    this.hermanoMayor = hermano;
  }
  
  setHermanoPequeño(hermano : string) {
    this.hermanoPequeño = hermano;
  }
  
saludar (hermano:string){
  console.log(`Hola ${hermano}`);
  
}

preguntarPorHijo():string{
  return "¿Como está tu hijo?"
}

  constructor() { }
}

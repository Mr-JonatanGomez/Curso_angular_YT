import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  //se iguaña a vacio, porque lo va a coger del padre
  /* @Input()recibeHijo:string = "" */

  // tambien podemos no iniciar a vacio y darselo como opcion a vacio con ?
  @Input()recibeHijo?:string

  // OUTPUT
  @Output() mensajeDesdeHijo = new EventEmitter<string>()
  @Output() incrementarDesdeHijo = new EventEmitter<void>()
  @Output() decrementarDesdeHijo = new EventEmitter<void>()

  mensaje?:string

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje)
  }

  incrementar(){
    this.incrementarDesdeHijo.emit()
  }
  decrementar(){
    this.decrementarDesdeHijo.emit()
  }


}

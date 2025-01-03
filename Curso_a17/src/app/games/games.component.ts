import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
    // para poder pasarle un username como param necesita input
    @Input() username:string = ""
    //output es para pasar datos al padre (user)
    @Output() addFavoriteEvent = new EventEmitter<string>
   

fav(gameName:string){
    //alert(`El juego favorito de ${this.username} es ${gameName}`)
    this.addFavoriteEvent.emit(gameName)
}

    games = [
     {
      id:1,
      name:"Final Fantasy X"
     } ,{
      id:2,
      name:"Parasite Eve II"
     } ,{
      id:3,
      name:"Pac-Man"
     }
    ]
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username ='Jonatan';
  isLoggedIn = false; //<-- Funciona como un state 
  favGame="" 

  /* para cuando recuperemos el fav, haga algo*/
  getFavorite(gameName:string){
    this.favGame=gameName //el atributo fav coge el string de este method
  }

  greet(){
    alert("Hola a todos.")
  }

  logOut(){
    alert("Adios.")
  }
  
}

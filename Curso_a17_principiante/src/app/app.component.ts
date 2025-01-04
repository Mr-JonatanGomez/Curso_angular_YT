import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GamesComponent } from './games/games.component';
import { PruebaDeferComponent } from './prueba-defer/prueba-defer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, GamesComponent, PruebaDeferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 /*  template: `<h1>Hola mundo desde {{city}} </h1>
  <app-user/><app-user/>
  `,
  styles:`
    h1{
      color: blue;
      
    }
  ` */
})
export class AppComponent {
  city = 'Quer(Guadalajara)';
  
}

/* el component  puede llevar el
      templateUrl: y el styleUrl:
  referenciando a su ubicacion, 

  o bien puede usar el SFC (SingleFileComponent)
    de este modo se necesita meter el import al @component


*/
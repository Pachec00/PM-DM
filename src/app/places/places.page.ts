import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import {place} from './place.model'
import { Router } from '@angular/router';



@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {


titulo: string = "LUGARES DEL MUNDO"
//Se define una variable pública del tipo "place" nuestra interface y se inicializa.
places: place[]=[];

  //Construtor en el que se ponen las variables que vamos a instanciar para poder acceder a las clases que hayamos importado.
  constructor(private placeService : PlacesService, private route:Router) { }

  //Método que se llama cada vez que entra en esta página:
  ngOnInit() {
     // llamamos al método que devuelve el listado de lugares completo
  }
  ionViewWillEnter(){
    this.places=this.placeService.getPlaces();
  }
  newPlace(){
    this.route.navigate(['/places/place-add']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  private destinos : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarDestino(nombre : string, url: string ) : void {
    this.destinos.push({
      nombre : nombre,
      url : url
    })
  }

  
  get Destinos() : any[] {
    return this.destinos
  }
  

}

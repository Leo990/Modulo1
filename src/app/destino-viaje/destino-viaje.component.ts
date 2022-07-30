import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @HostBinding('attr.class') cssClass :string = 'col-md-4'

  @Input('destino')
  public destino : any

  constructor() { }

  ngOnInit(): void {
  }

  
  public get Destino() : any {
    return this.destino
  }
  

}

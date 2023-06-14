import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { ordersService } from '../../services/orders.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent {

  constructor(private orderservice:ordersService){}

  @Input()
  public orderList!:Order[] 

  //actualiza el orderlist en el servicio, pero no actualiza acá creo que porque lo estoy llamando directamente del service
  //intentar con el input a traves de main page!
 
  // @Output()
  // onDeletebyId:EventEmitter<string> = new EventEmitter()
  // deleteById(id:string):void{
  //     this.onDeletebyId.emit(id)
  // }

  deleteById(id:string):void{
    this.orderservice.delete(id)
  }


  onEditID(id:string):void {
    this.orderservice.edit(id)
  }
}

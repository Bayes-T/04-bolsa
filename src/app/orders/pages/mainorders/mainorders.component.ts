import { Component } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { ordersService } from '../../services/orders.service';

@Component({
  selector: 'app-mainorders',
  templateUrl: './mainorders.component.html',
  styleUrls: ['./mainorders.component.css']
})
export class MainordersComponent {

  constructor(private ordersservice:ordersService){}

  //por que sirve el getter y el otro no?
  //repasar input, output y getter cuando sirve xd
  // get listadoStocks():Order[] {
  //   return [...this.ordersservice.orders]
  // }
  //esto hace que no sea dinamico? se pasa la info?
  //sera porque no le puse el tipo? order[]??????!


  
  get listadoStocks(){
    return this.ordersservice.orders
  }

  // onDeletebyId(id:string):void{
  //   this.ordersservice.delete(id)
  // }



}

import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { v4 as uuidv4 } from 'uuid';
import { ordersService } from '../../services/orders.service';

@Component({
  selector: 'app-ordersform',
  templateUrl: './ordersform.component.html',
  styleUrls: ['./ordersform.component.css']
})
export class OrdersformComponent {

  constructor(private ordersservice:ordersService){}

  public order:Order = {
    id:"",
    symbol:"",
    price:0,
    hour:""
  }


  newOrder(order:Order):void{
    this.order.id = uuidv4()
    this.ordersservice.newOrders(order)
    console.log(order)
    this.order = {id: "", symbol: "", price:0, hour:""}
  }

}

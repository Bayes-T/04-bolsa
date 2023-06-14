import { Injectable, EventEmitter } from '@angular/core';
import { Order } from '../interfaces/orders.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class ordersService {
    constructor() { }
    
    private _orders:Order[] = []

    get orders(){
        return this._orders
    }

    delete(id:string):void{
        this._orders = this._orders.filter(stock => stock.id !== id)
    }

    newOrders(order:Order){
        this.orders.push(order)
    }

    edit(id:string):void {
   this.orders.forEach(order => {
            if (order.id === id){
                order.hour = "POSPUESTA"
               return order 
            } else {
                return order
            }
        })

        console.log(this.orders)
    }

}
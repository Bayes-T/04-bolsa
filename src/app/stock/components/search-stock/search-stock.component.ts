import { Component, EventEmitter, Output } from '@angular/core';
import { stockService } from '../../services/stock.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent {

  public stock:string = ""

  constructor(private stockservice:stockService){}

  


  searchStock(stock:string):void {
    this.stockservice.searchStock(stock)
    this.stock = ""
  }
}

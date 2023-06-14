import { Component } from '@angular/core';
import { StockInformation } from '../../interfaces/stock.interface';
import { stockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent {

  constructor(private stockservice:stockService){}

  get StockInfor():StockInformation {
    return this.stockservice.infoStock
  }


}

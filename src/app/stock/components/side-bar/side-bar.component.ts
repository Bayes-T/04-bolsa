import { Component } from '@angular/core';
import { stockService } from '../../services/stock.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private stockservice:stockService){

  }

  public stocks = this.stockservice.stockHistory
}

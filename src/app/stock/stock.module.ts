import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchStockComponent } from './components/search-stock/search-stock.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    StockInfoComponent,
    MainPageComponent,
    SearchStockComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], 
  exports:[MainPageComponent]
})
export class StockModule { }

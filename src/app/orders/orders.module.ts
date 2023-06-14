import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainordersComponent } from './pages/mainorders/mainorders.component';
import { OrderslistComponent } from './components/orderslist/orderslist.component';
import { OrdersformComponent } from './components/ordersform/ordersform.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainordersComponent,
    OrderslistComponent,
    OrdersformComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainordersComponent]
})
export class OrdersModule { }

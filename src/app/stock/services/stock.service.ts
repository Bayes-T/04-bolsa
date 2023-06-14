import { Injectable } from '@angular/core';
import { StockInformation } from '../interfaces/stock.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  constructor(private http: HttpClient) {

   }
  
}

@Injectable({providedIn: 'root'})

export class stockService {

  constructor(private http: HttpClient){}
    
  private serviceURL:string = "https://www.alphavantage.co/query?function=OVERVIEW&"  
  private apiKey:string = "M1BBNFURMXIJQOBM"

  private _stockHistory:string[] = []

  get stockHistory():string[] {
    return this._stockHistory
  }  

  infoStock:StockInformation  = {
      Symbol:                    "",
      AssetType:                 "",
      Name:                      "",
      Description:               "",
      CIK:                       "",
      Exchange:                  "",
      Currency:                  "",
      Country:                   "",
      Sector:                    "",
      Industry:                  ""
  }

  searchStock(stock:string){
    this._stockHistory.unshift(stock)

    const params = new HttpParams()
    .set("apyKey", this.apiKey)
    .set("symbol", stock)
    
    this.http.get<StockInformation>(`${this.serviceURL}symbol=${stock}&apikey=${this.apiKey}`)

    .subscribe( resp => {
      this.infoStock = resp
    })
    
    console.log(this.infoStock)

  }
  
}
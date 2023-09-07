import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloMouseService {

  private _action
  public action: string = '0';



  constructor() { }
}

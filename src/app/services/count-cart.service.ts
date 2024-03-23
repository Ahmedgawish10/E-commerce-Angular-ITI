import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountCartService {
   private countOfCart=new  BehaviorSubject<number>(0);
   private prodcs=new  BehaviorSubject<any>(1);


  constructor() { }

  // -------------------------------------
  getCountOfCart(){
          return this.countOfCart.asObservable()
  }
  setCountOfCart(){
              this.countOfCart.next(this.countOfCart.value+1)
          //    console.log( this.countOfCart.value);
              
  }

}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    bus= {
      totalSeats :35,
      bookedSeats : [2,3,10,22]
    };
    selected_seats = []
    seats = [...new Array(this.bus.totalSeats)].map((item,index)=>{
      return {
        selected : false,
        seatNo : index+1
      }
    })
    removeItem<T>(arr: Array<T>, value: T): Array<T> { 
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
    selectSeats(seatNo){
      console.log(seatNo)
      if(!this.bus.bookedSeats.includes(seatNo)){
        if(!this.selected_seats.includes(seatNo)){
          console.log('the seats is not boooked');
          this.selected_seats.push(seatNo);        
        }
        else{
          console.log('the seat already exits in the arr removing it from the arr');
          this.removeItem(this.selected_seats,seatNo);
          console.log('the arr after the deletion',this.selected_seats)

        }
        this.seats[seatNo-1].selected = !this.seats[seatNo-1].selected
      }
      
      else{
        console.log('the seats is already booked')
      }
      console.log(this.selected_seats)

    }
}

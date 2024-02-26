import { Component } from '@angular/core';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css',
})
export class ViewEventComponent {
  public name = "Board Meeting";
  public start_time = "8:00am";
  public end_time = "3:00pm";
  public start_date = "04/01/2024";
  public end_date = "04/07/2024";
  public description = "Discuss next steps for acquisition between board members and executives";
  public location = "Norton Building, Suite 201";
  
}



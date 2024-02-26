import { Component } from '@angular/core';
import {dataModel} from './dataModel';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RiliProxyService } from '../server/rili-proxy.service';

@Component({
  selector: 'app-send-event',
  templateUrl: './send-event.component.html',
  styleUrl: './send-event.component.css',
  
})
export class SendEventComponent {

  constructor(private e:FormBuilder, private riliServuce:RiliProxyService){}

  eventForm = this.e.group({
  event_name:['test event name'],
   start_time : ['x time start'],
   end_time : ['y time end'],
   start_date : ['x date start'],
   end_date : ['y date end'],
   description : ['description test'],
   location : ['location test']
  })

  dataModel = new dataModel("","","","","","","");


  new_event = new FormGroup({
    event_name: new FormControl(''),
    start_time: new FormControl(''),
    end_time: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl('')

  });
  

  onSubmit(){
    console.log(this.new_event.value);
    this.riliServuce.post_event(this.new_event.value).subscribe(
      response => console.log('success!',response),
      error => console.log('error!',error)
      
    );
  }
}


  // public event_name = "Board Meeting";
  // public start_time = "8:00am";
  // public end_time = "3:00pm";
  // public start_date = "04/01/2024";
  // public end_date = "04/07/2024";
  // public description = "Discuss next steps for acquisition between board members and executives";
  // public location = "Norton Building, Suite 201";

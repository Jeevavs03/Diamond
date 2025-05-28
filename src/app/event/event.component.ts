import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  color = {
    color: '#B3B3B3',
    'font-size': '15px',
  };
  premium = {
    'position': 'absolute',
    'top': '10px',
    'left': '10px',
    // 'background': 'linear-gradient(to right,#FFFFFF1F,#FFFFFF0A,#FFFFFF12)',
    'background-color':'#FFFFFF12',
    'padding': '5px 8px 5px 8px',
    'border': '1px solid gray',
    'border-radius': '7px'
  }
}

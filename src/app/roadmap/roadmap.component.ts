import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  imports: [],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {
   contentHeader ={
      'color':'transparent',
      'background':'linear-gradient(to right,#8F8F8F,#F0F0F0,#E5E5E5,#A9A9A9)',
      'background-clip':'text',
      'letter-spacing':'0.05px'
  }
}

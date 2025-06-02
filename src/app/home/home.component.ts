import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { RoadmapComponent } from '../roadmap/roadmap.component';
import { EventComponent } from '../event/event.component';
import { MembershipComponent } from '../membership/membership.component';
import { ProsComponent } from '../pros/pros.component';
import { JournalComponent } from '../journal/journal.component';
import { DiamondComponent } from '../diamond/diamond.component';

@Component({
  selector: 'app-home',
  imports: [
    ProfileComponent,
    RoadmapComponent,
    EventComponent,
    MembershipComponent,
    ProsComponent,
    JournalComponent,
    DiamondComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

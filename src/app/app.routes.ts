import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { EventComponent } from './event/event.component';
import { MembershipComponent } from './membership/membership.component';
import { ProsComponent } from './pros/pros.component';
import { JournalComponent } from './journal/journal.component';
import { DiamondComponent } from './diamond/diamond.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },{
        path:'home',
        component:HomeComponent,
    },{
        path:'roadmap',
        component:RoadmapComponent,
    },{
        path:'event',
        component:EventComponent,
    },{
        path:'membership',
        component:MembershipComponent,
    },{
        path:'pros',
        component:ProsComponent,
    },{
        path:'journal',
        component:JournalComponent,
    },{
        path:'diamond',
        component:DiamondComponent,
    },{
        path:'profile',
        component:ProfileComponent,
    },{
        path:'footer',
        component:FooterComponent,
    }
];

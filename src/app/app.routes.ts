import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { EventComponent } from './event/event.component';

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
    }
];

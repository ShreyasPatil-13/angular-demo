import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { TextComponent } from './Components/text/text.component';
import { ChildOneComponent } from './Components/child-one/child-one.component';
import { ChildTwoComponent } from './Components/child-two/child-two.component';

export const routes: Routes = [
    { path: '', component: TextComponent },
    { path: 'about', component: AboutComponent },
    { path: 'one', component: ChildOneComponent },
    { path: 'two', component: ChildTwoComponent },
];

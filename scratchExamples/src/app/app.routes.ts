import { Routes } from '@angular/router';
import { ASCII } from './ascii/ascii';
import { Home } from './home/home';

export const routes: Routes = [{
    path: '',
    component:Home
},
    {
    path: 'ascii',
    component: ASCII
}];

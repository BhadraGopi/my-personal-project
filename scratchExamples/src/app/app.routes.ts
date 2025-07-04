import { Routes } from '@angular/router';
import { ASCII } from './ascii/ascii';
import { Home } from './home/home';
import { ALGORITHMS } from './algorithms/algorithms';
import { Trashcan } from './trashcan/trashcan';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'ascii',
    component: ASCII,
  },
  {
    path: 'algorithms',
    component: ALGORITHMS,
  },
  {
    path: 'trashcan',
    component: Trashcan,
  },
];

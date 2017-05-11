import { Routes } from '@angular/router';

import {HelloComponent} from './hello/hello.component'
import {IndexComponent} from './index/index.component'
import {MypageComponent} from './mypage/mypage.component'


export const routes: Routes = [
  
  { path: '', component: IndexComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'index', component: IndexComponent },
  { path: 'mypage', component: MypageComponent }
];


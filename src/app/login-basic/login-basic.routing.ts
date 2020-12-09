import {Routes} from '@angular/router';

import {LoginFormComponent} from './login-form.component';
import {ReuserRegisterComponent} from '../reuser/reuser-register/reuser-register.component';


export const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: ReuserRegisterComponent},

];

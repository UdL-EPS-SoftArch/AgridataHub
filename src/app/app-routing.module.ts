import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import {DatasetCreateComponent} from './dataset/dataset-create/dataset-create.component';
import {DatasetListComponent} from './dataset/dataset-list/dataset-list.component';
import {ProviderRegisterComponent} from './provider/provider-register/provider-register.component';
import {ReuserRegisterComponent} from './reuser/reuser-register/reuser-register.component';
import {DatasetDetailsComponent} from './dataset/dataset-details/dataset-details.component';

const routes: Routes = [
  { path: 'reusers/create', component: ReuserRegisterComponent},
  { path: 'providers/create', component: ProviderRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'datasets/create', component: DatasetCreateComponent},
  { path: 'datasets/:id', component: DatasetDetailsComponent},
  { path: 'datasets', component: DatasetListComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import {DatasetCreateComponent} from './dataset/dataset-create/dataset-create.component';
import {DatasetListComponent} from './dataset/dataset-list/dataset-list.component';
import {ProviderRegisterComponent} from './provider/provider-register/provider-register.component';
import {ProviderListComponent} from './provider/provider-list/provider.list.component';
import {ReuserRegisterComponent} from './reuser/reuser-register/reuser-register.component';
import {ReuserListComponent} from './reuser/reuser-list/reuser-list.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {RequestCreateComponent} from './request/request-create/request-create.component';
import {RequestDetailComponent} from './request/request-detail/request-detail.component';




const routes: Routes = [
  { path: 'reusers/create', component: ReuserRegisterComponent},
  { path: 'reusers', component: ReuserListComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/create', component: ProviderRegisterComponent},
  { path: 'providers', component: ProviderListComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'datasets/create', component: DatasetCreateComponent},
  { path: 'datasets', component: DatasetListComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'requests', component: RequestListComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/:id', component: RequestDetailComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

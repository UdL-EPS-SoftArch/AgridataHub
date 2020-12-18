import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {DatasetCreateComponent} from './dataset/dataset-create/dataset-create.component';
import {DatasetListComponent} from './dataset/dataset-list/dataset-list.component';
import {DatasetDetailsComponent} from './dataset/dataset-details/dataset-details.component';
import {ProviderRegisterComponent} from './provider/provider-register/provider-register.component';
import {ProviderListComponent} from './provider/provider-list/provider.list.component';
import {ProviderDeleteComponent} from './provider/provider-delete/provider-delete.component';
import {ProviderDetailComponent} from './provider/provider-detail/provider-detail.component';
import {ReuserRegisterComponent} from './reuser/reuser-register/reuser-register.component';
import {ReuserListComponent} from './reuser/reuser-list/reuser-list.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {ReuserDeleteComponent} from './reuser/reuser-delete/reuser-delete.component';
import {ReuserDetailComponent} from './reuser/reuser-detail/reuser-detail.component';
import {RequestCreateComponent} from './request/request-create/request-create.component';
import {RequestDetailComponent} from './request/request-detail/request-detail.component';
import {RequestDeleteComponent} from './request/request-delete/request-delete.component';
import {DatasetDeleteComponent} from './dataset/dataset-delete/dataset-delete.component';

const routes: Routes = [
  { path: 'reusers/create', component: ReuserRegisterComponent},
  { path: 'reusers', component: ReuserListComponent, canActivate: [LoggedInGuard]},
  { path: 'reusers/:id', component: ReuserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'reusers/:id/delete', component: ReuserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/create', component: ProviderRegisterComponent},
  { path: 'providers', component: ProviderListComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/:id', component: ProviderDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/:id/delete', component: ProviderDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'datasets/create', component: DatasetCreateComponent},
  { path: 'datasets/:id/delete', component: DatasetDeleteComponent},
  { path: 'datasets/:id', component: DatasetDetailsComponent},
  { path: 'datasets', component: DatasetListComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'requests', component: RequestListComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/:id', component: RequestDetailComponent},
  { path: 'requests/:id/delete', component: RequestDeleteComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

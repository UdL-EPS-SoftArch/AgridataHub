import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {DatasetCreateComponent} from './dataset/dataset-create/dataset-create.component';
import {DatasetRequestCreateComponent} from './DatasetRequest/DatasetRequest-create/DatasetRequest-create.component';
import {DatasetRequestDetailComponent} from './DatasetRequest/DatasetRequest-detail/DatasetRequest-detail.component';
import {DatasetRequestListComponent} from './DatasetRequest/DatasetRequest-list/DatasetRequest-list.component';
import {DatasetListComponent} from './dataset/dataset-list/dataset-list.component';
import {ProviderRegisterComponent} from './provider/provider-register/provider-register.component';
import {ProviderListComponent} from './provider/provider-list/provider.list.component';
import {ProviderDeleteComponent} from './provider/provider-delete/provider-delete.component';
import {ReuserRegisterComponent} from './reuser/reuser-register/reuser-register.component';
import {ReuserListComponent} from './reuser/reuser-list/reuser-list.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {ReuserDeleteComponent} from './reuser/reuser-delete/reuser-delete.component';
import {RequestCreateComponent} from './request/request-create/request-create.component';
import {RequestDetailComponent} from './request/request-detail/request-detail.component';








const routes: Routes = [
  { path: 'reusers/create', component: ReuserRegisterComponent},
  { path: 'reusers', component: ReuserListComponent, canActivate: [LoggedInGuard]},
  { path: 'reusers/:id/delete', component: ReuserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/create', component: ProviderRegisterComponent},
  { path: 'providers', component: ProviderListComponent, canActivate: [LoggedInGuard]},
  { path: 'providers/:id/delete', component: ProviderDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'datasets/create', component: DatasetCreateComponent},
  { path: 'DatasetRequest/create', component: DatasetRequestCreateComponent},
  { path: 'datasetRequests', component: DatasetRequestListComponent},
  { path: 'datasetRequests/:id', component: DatasetRequestDetailComponent},
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

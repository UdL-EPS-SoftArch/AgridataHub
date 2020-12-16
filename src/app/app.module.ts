import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHalClientModule } from '@lagoshny/ngx-hal-client';
import { ExternalConfigurationService } from './external-configuration-service';

import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { UserService } from './user/user.service';
import {ReuserService} from './reuser/reuser.service';
import {ProviderService} from './provider/provider.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { DatasetCreateComponent } from './dataset/dataset-create/dataset-create.component';
import { DatasetListComponent } from './dataset/dataset-list/dataset-list.component';
import { ProviderRegisterComponent } from './provider/provider-register/provider-register.component';
import { ProviderListComponent } from './provider/provider-list/provider.list.component';
import { ProviderDeleteComponent } from './provider/provider-delete/provider-delete.component';
import { ReuserRegisterComponent } from './reuser/reuser-register/reuser-register.component';
import { ReuserListComponent } from './reuser/reuser-list/reuser-list.component';
import { ReuserDeleteComponent } from './reuser/reuser-delete/reuser-delete.component';
import { ReuserDetailComponent } from './reuser/reuser-detail/reuser-detail.component';
import {RequestCreateComponent} from './request/request-create/request-create.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';






registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReuserRegisterComponent,
    ReuserListComponent,
    ReuserDeleteComponent,
    ReuserDetailComponent,
    ProviderRegisterComponent,
    ProviderListComponent,
    ProviderDeleteComponent,
    UserEditComponent,
    UserSearchComponent,
    DatasetCreateComponent,
    DatasetListComponent,
    RequestCreateComponent,
    RequestListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHalClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, UserService, ProviderService, ReuserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

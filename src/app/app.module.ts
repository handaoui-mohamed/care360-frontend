import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  Router,
  RouterModule,
  PreloadAllModules
} from '@angular/router';

declare var $: any;


import { MainModule } from './main';

import { NotFoundErrorComponent } from './not-found';
import { AppComponent } from './app.component';
import { LoginComponent } from "./authentication/login";
import { LockScreenComponent } from "./authentication/lockscreen";
import { ROUTES } from './app.routes';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    NotFoundErrorComponent,
    AppComponent,
    LoginComponent,
    LockScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    RouterModule.forRoot(ROUTES),
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe(event => {
      $(() => {
        $(".preloader").fadeOut();
        $('#side-menu').metisMenu();
      });
    })
  }
}

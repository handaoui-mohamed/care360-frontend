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
import { IndexComponent } from "./index"
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    NotFoundErrorComponent,
    AppComponent,
    LoginComponent,
    LockScreenComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    RouterModule.forRoot(ROUTES)
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

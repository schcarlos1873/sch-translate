import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomLoader } from './customloader';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: CustomLoader, deps: [HttpClient]}
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

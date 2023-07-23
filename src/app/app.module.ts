import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BlogComponent } from './challenges/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { JordanShoesComponent } from './challenges/jordan-shoes/jordan-shoes.component';
import { OnePageComponent } from './challenges/one-page/one-page.component';
import { LoginComponent } from './challenges/login/login.component';
import { ChihiroComponent } from './challenges/chihiro/chihiro.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    JordanShoesComponent,
    OnePageComponent,
    LoginComponent,
    ChihiroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

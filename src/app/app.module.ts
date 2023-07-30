import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BlogComponent } from './challenges/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { JordanShoesComponent } from './challenges/jordan-shoes/jordan-shoes.component';
import { OnePageComponent } from './challenges/one-page/one-page.component';
import { LoginComponent } from './challenges/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapHeart,
  bootstrapFacebook,
  bootstrapInstagram,
  bootstrapTwitter,
  bootstrapYoutube,
  bootstrapPlay
} from '@ng-icons/bootstrap-icons';
import { StudioGhibliComponent } from './challenges/studio-ghibli/studio-ghibli.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    JordanShoesComponent,
    OnePageComponent,
    LoginComponent,
    StudioGhibliComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule,

    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapHeart,
      bootstrapFacebook,
      bootstrapInstagram,
      bootstrapTwitter,
      bootstrapYoutube,
      bootstrapPlay
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

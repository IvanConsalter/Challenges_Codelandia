import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapHeart } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    NgIconsModule.withIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapHeart })
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class CoreModule { }

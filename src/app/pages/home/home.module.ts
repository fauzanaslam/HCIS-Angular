import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { IconsModule } from '../../shared/icons/icons.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }

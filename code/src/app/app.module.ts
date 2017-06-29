import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { HeaderService } from './services/header.service';
import { ProductService } from './services/product.service';
import { KartComponent } from './kart/kart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    KartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeaderService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

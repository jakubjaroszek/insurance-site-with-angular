import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/index/components/nav/nav.component';
import { HeaderComponent } from './pages/index/components/header/header.component';
import { ProductsComponent } from './pages/index/components/products/products.component';
import { ServiceComponent } from './pages/index/components/service/service.component';
import { FooterComponent } from './pages/index/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ProductsComponent,
    ServiceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

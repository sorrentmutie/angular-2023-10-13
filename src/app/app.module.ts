import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MyFirstComponent } from './shared/components/my-first/my-first.component';
import { MySecondComponent } from './shared/components/my-second/my-second.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductsListComponent } from './products/components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MyFirstComponent,
    MySecondComponent,
    ProductsPageComponent,
    ProductPipe,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

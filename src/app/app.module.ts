import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MyFirstComponent } from './shared/components/my-first/my-first.component';
import { MySecondComponent } from './shared/components/my-second/my-second.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { RandomUserPageComponent } from './randomusers/components/random-user-page/random-user-page.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { EsperimentiComponent } from './shared/components/esperimenti/esperimenti.component';
import { HeroFormComponent } from './heroes/components/hero-form/hero-form.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MyFirstComponent,
    MySecondComponent,
    ProductsPageComponent,
    ProductPipe,
    ProductsListComponent,
    RandomUserPageComponent,
    ReqResPageComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    EsperimentiComponent,
    HeroFormComponent,
    NotificationsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

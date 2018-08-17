import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ErrorHandler } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {GrowlModule} from 'primeng/growl';
import {PaginatorModule} from 'primeng/paginator';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { InternationalPhoneModule } from 'ng4-intl-phone';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    GrowlModule,
    PaginatorModule,
    InternationalPhoneModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

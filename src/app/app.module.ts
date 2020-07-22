import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormationComponent } from './components/formation/formation.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { FormateursComponent } from './components/formateurs/formateurs.component';
import { FormationsComponent } from './components/formations/formations.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    FormateurComponent,
    FormateursComponent,
    FormationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

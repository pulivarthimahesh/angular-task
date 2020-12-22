import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AlphabetOnlyDirective } from './alphabet-only.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetOnlyDirective,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

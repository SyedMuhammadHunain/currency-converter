import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultComponent } from './user-input/result/result.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    ResultComponent,
  ],
  exports: [CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

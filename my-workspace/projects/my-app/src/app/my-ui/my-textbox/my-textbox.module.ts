import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { MyTextboxComponent } from './my-textbox.component';
import { MyTextboxPrefixTemplateDirective } from './my-textbox-prefix.directive';

@NgModule({
  declarations: [
    MyTextboxComponent,
    MyTextboxPrefixTemplateDirective
  ],
  exports: [
    MyTextboxComponent,
    MyTextboxPrefixTemplateDirective
  ],
  imports: [
    BrowserModule,
    InputsModule
  ],
  providers: []
})
export class MyTextboxModule { }

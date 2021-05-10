import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithIconComponent } from './components/input-with-icon/input-with-icon.component';
import { InputIconDirective } from './directives/input-icon.directive';



@NgModule({
  declarations: [
    InputWithIconComponent,
    InputIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [InputWithIconComponent, InputIconDirective]
})
export class LibModule { }

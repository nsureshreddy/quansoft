import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    KeysPipe
  ],
  exports: [
    FilterPipe,
    KeysPipe
  ]
})
export class AppPipesModule { }

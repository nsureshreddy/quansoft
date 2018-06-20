import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter.pipe';
import { KeysPipe } from './keys.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    KeysPipe,
    SearchPipe
  ],
  exports: [
    FilterPipe,
    KeysPipe,
    SearchPipe
  ]
})
export class AppPipesModule { }

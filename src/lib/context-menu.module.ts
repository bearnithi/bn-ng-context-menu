import { NgModule } from '@angular/core';
import { ContextMenuComponent } from './context-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContextMenuComponent],
  exports: [ContextMenuComponent]
})
export class ContextMenuModule { }

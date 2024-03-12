import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent] // If HeaderComponent needs to be used outside of this module
})
export class HeaderModule {}
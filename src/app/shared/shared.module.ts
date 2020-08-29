import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, BrowserAnimationsModule, MatToolbarModule],
  exports: [HeaderComponent, CommonModule, FooterComponent],
})
export class SharedModule {}

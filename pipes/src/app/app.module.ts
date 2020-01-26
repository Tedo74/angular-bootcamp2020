import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';
// import localeBgExtra from '@angular/common/locales/extra/bg';

registerLocaleData(localeBg);

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';

@NgModule({
	declarations: [ AppComponent, ConvertPipe ],
	imports: [ BrowserModule ],
	providers: [ { provide: LOCALE_ID, useValue: 'bg' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

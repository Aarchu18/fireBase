import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{HttpModule} from '@angular/http';
import{FireServiceService} from './fire-service.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

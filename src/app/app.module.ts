import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {MessageModule} from './messages/message.module';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {TermsGuard} from './terms.guard';

@NgModule({
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule, routing],
  declarations: [AppComponent],
  providers: [TermsGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {TableComponent} from './table.component';
import {FormComponent} from './form.component';
import {SHARED_STATE, SharedState} from './sharedState.model';
import {Subject} from 'rxjs';
import {StatePipe} from './called state.pipe';
import {Model} from '../model/repository.model';
import {MessageService} from '../messages/message.service';
import {MessageModule} from '../messages/message.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule],
  declarations: [TableComponent, FormComponent, StatePipe],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [{
    provide: SHARED_STATE,
    deps: [MessageService, Model],
    useFactory: (messageService, model) => {
      return new Subject<SharedState>();
    }
  }]
})
export class CoreModule {
}


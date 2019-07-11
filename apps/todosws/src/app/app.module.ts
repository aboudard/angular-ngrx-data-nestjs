import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { CounterComponent } from './comp/counter/counter.component';
import { TodoListComponent } from './comp/todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilsService } from './services/utils.service';

// font awesome icons
UtilsService.initFaIcons();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CounterComponent,
    TodoListComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

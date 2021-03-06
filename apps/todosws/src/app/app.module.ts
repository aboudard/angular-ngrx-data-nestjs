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
import { CounterActiveComponent } from './comp/counter-active/counter-active.component';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

// font awesome icons
UtilsService.initFaIcons();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CounterComponent,
    TodoListComponent,
    CounterActiveComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EntityDataModule.forRoot(entityConfig),
    TranslocoModule
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'en',
        prodMode: environment.production
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

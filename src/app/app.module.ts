import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


  // servicios
import { DeseosService } from '../services/deseos.service';

// imports de los componentes
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { CompletadoPage } from '../pages/completado/completado.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';
import { ListasComponent } from '../components/listas.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    CompletadoPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    CompletadoPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

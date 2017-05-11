import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router'
import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent, DialogOverviewExampleDialog } from './hello/hello.component';
import { IndexComponent } from './index/index.component';
import { MypageComponent } from './mypage/mypage.component';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    HelloComponent,
    IndexComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }

import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Server } from './server/server';
import { FormsModule } from '@angular/forms';
import { NavBar } from './nav-bar/nav-bar';
import { Posts } from './posts/posts';

@NgModule({
  declarations: [
    App,
    Server,
    NavBar,
    Posts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //add this

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }

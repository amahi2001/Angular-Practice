import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//importing the server component we created
import { ServerComponent } from './server/server.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    //registering the server component
    ServerComponent,
    NestedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

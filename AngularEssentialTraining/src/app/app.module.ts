import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpXhrBackend} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {MediaItemComponent} from "./media-item.component";
import {MediaItemListComponent} from "./media-item-list.component";
import {MediaItemFormComponent} from "./media-item-form.component";
import {FavoriteDirective} from "./favorite.directive";
import {CategoryListPipe} from "./category-list.pipe";

import {MediaItemService} from "./media-item.service";
import {lookupListToken, lookupLists} from "./providers";
import {MockXHRBackend} from "./mock-xhr-backend";
import {routing} from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  providers: [
    MediaItemService,
    {provide:lookupListToken, useValue:lookupLists},
    {provide:HttpXhrBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}

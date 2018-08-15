import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { ImagesService } from "./images.service";
import { PinsService } from "./pins.service";

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImageMappingComponent } from "./image-mapping/image-mapping.component";
import { ImagePinnerComponent } from './image-pinner/image-pinner.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { CrudModalComponent } from './crud-modal/crud-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        ImageMappingComponent,
        ImagePinnerComponent,
        ImageSelectorComponent,
        CrudModalComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        ImagesService,
        PinsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

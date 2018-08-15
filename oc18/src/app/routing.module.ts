import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ImageMappingComponent} from "./image-mapping/image-mapping.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full"
    },
    {
        path: "home",
        component: ImageMappingComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class RoutingModule {
}

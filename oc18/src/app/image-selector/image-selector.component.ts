import { Component, OnInit } from '@angular/core';

import { ImagesService } from "../images.service";
import { PinsService } from "../pins.service";

import { ImagesListType, ImagesItemType, PinListType } from "./image-selector.type";

@Component({
    selector: 'image-selector',
    templateUrl: './image-selector.component.html',
    styleUrls: ['./image-selector.component.scss']
})

export class ImageSelectorComponent implements OnInit
{
    public data: ImagesListType = [];
    public selectedImage: ImagesItemType = {
        id: 0,
        label: "",
        url: ""
    };

    constructor(
        public pinners: PinsService,
        public images: ImagesService
    ) {

    }

    ngOnInit()
    {
        this.images
        .GetData()
        .subscribe(
            ( data: ImagesListType )=>
            {
                this.data = data;
                this.images.images = data;

                this.selectedImage = data[0];
                this.images.image = data[0];
            }
        )
    }

    public OnImageChange( value )
    {
        this.selectedImage = value;
        this.images.image = value;

        this.pinners
        .GetData( this.images.image.id )
        .subscribe(
            ( data: PinListType )=>
            {
                this.pinners.pinsList = data;
            }
        )
    }
}

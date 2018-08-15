import { Component, OnInit } from '@angular/core';

import { PinUpdateType } from "../image-selector/image-selector.type";

import { ImagesService } from "../images.service";
import { PinsService } from "../pins.service";

@Component({
    selector: 'image-pinner',
    templateUrl: './image-pinner.component.html',
    styleUrls: ['./image-pinner.component.scss']
})

export class ImagePinnerComponent implements OnInit
{
    private currentImgWidth: number = 0;
    private currentImgHeight: number = 0;

    constructor(
        public images: ImagesService,
        public pinners: PinsService
    ) {

    }

    ngOnInit()
    {
    }

    public OnPinImage( event: any ):void
    {
        this.images.onPinRunning = true;

        this.images.sendPin.top = Number( (( event.offsetY / this.currentImgHeight ) * 100 ).toFixed(2) );
        this.images.sendPin.left = Number( (( event.offsetX / this.currentImgWidth ) * 100 ).toFixed(2) );
        this.images.sendPin.imagesId = this.images.image.id;
    }

    public OnLoadImage( event: any, img: any ):void
    {
        this.currentImgHeight = img.clientHeight;
        this.currentImgWidth =  img.clientWidth;
    }

    public OnEditPin( pin: PinUpdateType ):void
    {
        this.images.onPinRunning = true;
        this.images.onUpdateRunning = true;

        this.images.formSendPin.title = pin.title;
        this.images.formSendPin.description = pin.content;

        this.images.updatePin.imagesId = this.images.image.id;
        this.images.updatePin.id = pin.id;
        this.images.updatePin.top = pin.top;
        this.images.updatePin.left = pin.left;
    }
}

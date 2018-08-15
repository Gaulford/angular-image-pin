import { Component, OnInit } from '@angular/core';

import { PinListType } from "../image-selector/image-selector.type";

import { ImagesService } from "../images.service";
import { PinsService } from "../pins.service";

@Component({
    selector: 'crud-modal',
    templateUrl: './crud-modal.component.html',
    styleUrls: ['./crud-modal.component.scss']
})
export class CrudModalComponent implements OnInit
{
    public file: File;

    constructor(
        public images: ImagesService,
        public pinners: PinsService
    ) {
    }

    ngOnInit()
    {
        this.ListPinners( this.images.image.id );
    }

    public ListPinners( id: number ):void
    {
        this.pinners
        .GetData( id )
        .subscribe(
            ( data: PinListType )=>
            {
                this.pinners.pinsList = data;

                this.images.onPinRunning = false;
                this.images.onUpdateRunning = false;

                this.file = null;
            }
        );
    }

    public OnFileInserted( event: any ):void
    {
        this.images.formSendPin.file = event.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL( event.target.files[0] );

        reader.onload = ( event: any )=>
        {
            this.file = event.target.result;
        }
    }

    public OnSubmit( form )
    {
        if ( form.valid )
        {

            if ( this.images.onUpdateRunning )
            {
                this.images.updatePin.img = this.images.formSendPin.file;
                this.images.updatePin.title = this.images.formSendPin.title;
                this.images.updatePin.content = this.images.formSendPin.description;

                this.images
                .UpdateData( this.images.updatePin.id, this.images.updatePin )
                .subscribe(
                    ( data: any )=>
                    {
                        this.ListPinners( this.images.image.id );
                    }
                );
            }
            else
            {
                this.images.sendPin.img = this.images.formSendPin.file;
                this.images.sendPin.title = this.images.formSendPin.title;
                this.images.sendPin.content = this.images.formSendPin.description;

                this.images
                .CreateData( this.images.sendPin )
                .subscribe(
                    ( data: any )=>
                    {
                        this.ListPinners( this.images.image.id );
                    }
                );
            }
        }
    }

    public OnDelete():void
    {
        this.images
        .DeleteData( this.images.updatePin.id )
        .subscribe(
            ( data: any )=>
            {
                this.ListPinners( this.images.image.id );
            }
        )
    }

    public OnCancel()
    {
        this.images.onPinRunning = false;

        this.file = null;
        this.images.formSendPin = {
            file: null,
            title: "",
            description: ""
        };
    }
}

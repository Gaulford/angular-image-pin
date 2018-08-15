import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ImagesListType, ImagesItemType, PinSendType, PinUpdateType, PinFormType } from "./image-selector/image-selector.type";

@Injectable()
export class ImagesService
{
    public onPinRunning: boolean = false;
    public onUpdateRunning: boolean = false;
    private headers: HttpHeaders;
    private formData: FormData;


    public images: ImagesListType = [];
    public image: ImagesItemType = {
        id: 0,
        label: "",
        url: ""
    };

    public formSendPin: PinFormType = {
        file: null,
        title: "",
        description: ""
    };

    public sendPin: PinSendType = {
        imagesId: 0,
        top: 0,
        left: 0,
        title: "",
        content: "",
        img: null
    };

    public updatePin: PinUpdateType = {
        id: 0,
        imagesId: 0,
        top: 0,
        left: 0,
        title: "",
        content: "",
        img: null
    };

    constructor(
        private http: HttpClient
    ) {
    }

    public GetData()
    {
        return this.http.get("http://localhost:4201/images/");
    }

    public CreateData( data: PinSendType )
    {
        this.headers = new HttpHeaders();
        this.headers.set( "Content-Type", "multipart/form-data" );
        this.formData = new FormData();

        for ( let field in data )
        {
            let value: any = data[field];
            this.formData.append( field, value );
        }

        return this.http.post(
            "http://localhost:4201/mapping/",
            data
            // this.formData,
            // {
            //     headers: this.headers
            // }
        );
    }

    public UpdateData( id: number, data: PinUpdateType )
    {
        this.headers = new HttpHeaders();
        this.headers.set( "Content-Type", "multipart/form-data" );
        this.formData = new FormData();

        for ( let field in data )
        {
            let value: any = data[field];
            this.formData.append( field, value );
        }

        return this.http.put(
            `http://localhost:4201/mapping/${id}/`,
            data
            // this.formData,
            // {
            //     headers: this.headers
            // }
        );
    }

    public DeleteData( id: number )
    {
        return this.http.delete(
            `http://localhost:4201/mapping/${id}/`
        );
    }
}

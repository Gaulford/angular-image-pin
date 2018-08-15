import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PinListType } from "./image-selector/image-selector.type";

@Injectable()
export class PinsService
{
    public pinsList: PinListType = [];

    constructor(
        private http: HttpClient
    ) {
    }

    public GetData( id: number )
    {
        return this.http.get(
            "http://localhost:3000/mapping",
            {
                params: {
                    imagesId: id
                }
            }
        );
    }
}

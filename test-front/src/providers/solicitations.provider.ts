import { Injectable } from "@angular/core";
import { ApiGateway } from "../api-gateway";
import { HttpResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class SolicitationService {
    constructor(private apiGateway: ApiGateway) { }

    ngOnInit(): void { }

    create(data: any) {
        return new Promise((resolve, reject) => {
            this.apiGateway
                .post('solicitations', data)
                .subscribe((response: HttpResponse<any>) => {
                    resolve(response.body);
                }, reject);
        });
    }
}
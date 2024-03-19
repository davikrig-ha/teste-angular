import { Injectable } from '@angular/core';
import { ApiGateway } from '../api-gateway';
import { HttpResponse } from '@angular/common/http';
import { Solicitations } from '../app/types/solicitations.interface';

@Injectable({
  providedIn: 'root',
})
export class SolicitationService {
  constructor(private apiGateway: ApiGateway) {}

  ngOnInit(): void {}

  create(data: Solicitations) {
    return new Promise((resolve, reject) => {
      this.apiGateway.post('solicitations', data).subscribe({
        next: (response: HttpResponse<any>) => {
          resolve(response.body);
        },
        error: reject,
      });
    });
  }

  getAll(): Promise<Solicitations[]> {
    return new Promise((resolve, reject) => {
      this.apiGateway.get('solicitations').subscribe({
        next: (response: HttpResponse<any>) => {
          resolve(response.body);
        },
        error: reject,
      });
    });
  }

  getLast(): Promise<Solicitations> {
    return new Promise((resolve, reject) => {
      this.apiGateway.get('solicitations/last').subscribe({
        next: (response: HttpResponse<any>) => {
          resolve(response.body);
        },
        error: reject,
      });
    });
  }

  update(id: number, data: Solicitations): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway.patch('solicitations/:id', { id: id }, data).subscribe({
        next: (response: HttpResponse<any>) => {
          resolve(response.body);
        },
        error: reject,
      });
    });
  }
}

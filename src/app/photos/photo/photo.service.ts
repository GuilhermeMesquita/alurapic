import { PhotoModel } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }


    listFromUser(userName: string) {
        return this.http.get<PhotoModel[]>(url + `/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<PhotoModel[]>(url + `/${userName}/photos`, { params: params });
    }
}
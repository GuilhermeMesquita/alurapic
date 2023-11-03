import { Injectable } from "@angular/core";
import { PhotoService } from "../photo/photo.service";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoModel } from "../photo/photo";

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>>{
    constructor(private service: PhotoService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoModel[]> {
        const userName = route.params['userName'];
        return this.service.listFromUserPaginated(userName, 1);
    }
}
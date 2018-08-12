import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionResolver implements Resolve<any> {

    constructor(private service: UserService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const token = localStorage['session-token'];
        return this.service.getSession(token);
    }
}

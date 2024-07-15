import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class RouteService
  implements CanActivate, CanDeactivate<CanComponentDeactivate>
{
  constructor() {}
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component ? component.canDeactivate() : true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return true;
  }
}

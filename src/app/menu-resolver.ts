import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Menu } from './menu';

@Injectable({ providedIn: 'root' })
export class MenuResolver implements Resolve<Menu> {

  constructor(
    protected router: Router
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu> {
    // Check if menu is already loaded (remember that at the end of this resolve navigateByUrl method is called so cachedMenu is to avoid double service call)
    const cachedMenu = this.router.getCurrentNavigation()?.extras?.state?.menu;
    if (cachedMenu) {
      console.log("Cached one");
      return of(cachedMenu);
    }

    this.router.navigateByUrl(state.url, { state: { menu: new Menu()} });

    console.log("New one");
    return of(new Menu());
  }
}

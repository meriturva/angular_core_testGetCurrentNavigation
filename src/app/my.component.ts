import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html'
})
export class MyComponent {
  constructor(activatedRoute: ActivatedRoute) {
    const menu = activatedRoute.snapshot.data.menu as Menu;
    console.log("menu", menu);
    menu.test();
  }
}

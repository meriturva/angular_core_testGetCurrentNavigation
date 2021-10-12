import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuResolver } from './menu-resolver';
import { MyComponent } from './my.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: 'route',
    component: MyComponent,
    resolve: { menu: MenuResolver },
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

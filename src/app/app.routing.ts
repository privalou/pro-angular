import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'ondemand',
    loadChildren: './ondemand/ondemand.module#OndemandModule'
  },
  {path: '', redirectTo: '/ondemand', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);

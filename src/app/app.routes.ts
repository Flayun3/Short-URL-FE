import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Convertor } from './page/convertor/container/convertor';
import { inject } from '@angular/core';
import { UrlResolver } from './utils/url-resolver';
import { ErrorPage } from './page/error/error-page/error-page';
import { catchError, map, of, tap } from 'rxjs';

export const routes: Routes = [
    {
        path: 'convertor',
        loadChildren: () => import('./page/convertor/convertor.routes').then(m => m.routes),
    },
    {
        path: ':id',
        redirectTo: ({ params }) => {
          const redirectService = inject(UrlResolver);
          return redirectService.redirectTo(params['id']).pipe(
            catchError(() => {
                return of('error');
            })
          );
        }
    },
    {
        path: 'error',
        component: ErrorPage,
    },
    {
        path: '',
        redirectTo: 'convertor',
        pathMatch: 'full'
    },
];
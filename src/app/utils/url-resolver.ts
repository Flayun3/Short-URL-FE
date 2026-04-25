import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlResolver {

  /**
   * Function that call backend with identifiant to get the redirection to do
   * @param id Identifiant to send to backend
   * @returns Observable of the backend's responds which is the url to redirect to
   */
  redirectTo(id: string): Observable<string> {
    /**
     * todo
     */
    return throwError(() => new Error());
  }
  
}

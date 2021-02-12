import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class CustomLoader implements TranslateLoader {

    constructor(private http: HttpClient ) { }

    getTranslation(lang: string): Observable<any> {
      console.log('CustomLoader', lang);
      // return this.http.get(`./assets/${lang}.json`);

      return this.http.get(`http://localhost:3000/dictionary/${lang}`);
    }
}

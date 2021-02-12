import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dictionary } from './app.component';


export abstract class TranslateDicionary {
  FieldName: string;
  Prefix: string;
}


@Injectable({
  providedIn: 'root'
})
export class SettingsService implements TranslateLoader {

 
  private dictionary: BehaviorSubject<TranslateDicionary[]> = new BehaviorSubject([]);
  dictionary$: Observable<TranslateDicionary[]> = this.dictionary.asObservable();

  constructor(private http: HttpClient ) { }

  getTranslation(lang: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  // static getLocale(): string {
  //   return 'pt-BR';
  // }

  async load(lang: string = 'pt') {
      await this.http.get(`./assets/${lang}.json`)
      .toPromise()
      .then((dic: TranslateDicionary[]) => {
        this.dictionary.next(dic);
      }).catch(e => console.log(e));
  }
  
  getDicionary(): Observable<Dictionary[]> {
      return this.http.get<Dictionary[]>('http://localhost:3000/dictionary');  
  } 

}


// export function SettingFactory(config: SettingsService) {
//     return () => config.load();
// }

// export function init() {
//   console.log('SettingsService.init()', 'Iniciando serviço de Configuração');
//   return {
//       provide: APP_INITIALIZER,
//       useFactory: SettingFactory,
//       deps: [SettingsService],
//       multi: true
//   }
// }

// const ConfigModule = { init };

// export { ConfigModule };




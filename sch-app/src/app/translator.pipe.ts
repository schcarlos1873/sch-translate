import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService, TranslateDicionary } from './settings.service';

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {

  constructor(private dict: SettingsService){}

  transform(value: string, ...args: string[]): string {
    let t: TranslateDicionary[] = null;
    this.dict.dictionary$.subscribe(d => {
       t = d.filter(f => f.FieldName === value);
    });
    return t.length === 0  ? value : t[0]['Prefix'];
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './settings.service';


export abstract class Dictionary{
  Id: number;
  LanguageId: string;
  FieldName: string;
  Prefix: string;
  FieldDefinition: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sch-app';
  list: Dictionary[] = [] ; 
  
  constructor(private translate: TranslateService, private setting: SettingsService){
    this.translate.use('pt-BR');
  }

  ngOnInit(): void {
    this.setting.getDicionary().subscribe(s => this.list = s);
  }

  


  config(e: any): void {
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
}

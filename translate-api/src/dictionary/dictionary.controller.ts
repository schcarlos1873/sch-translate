import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryEntity } from './dictionary.entity';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
    constructor(private readonly dictService: DictionaryService) {}

    @Get()
    async getDictionaryAll(): Promise<DictionaryEntity[]> {
      return this.dictService.findAll();
    }


    @Get(':lang')
    async getDictionary(@Param() params): Promise<any> {
      return this.dictService.findByLang(params.lang);
    }
}

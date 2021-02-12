import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DictionaryEntity } from './dictionary.entity';

@Injectable()
export class DictionaryService {

    constructor(
        @InjectRepository(DictionaryEntity)
        private readonly dictRepository: Repository<DictionaryEntity>
    ) {}

    findAll(): Promise<DictionaryEntity[]>{
        return this.dictRepository.find();
    }

    findOne(id: number): Promise<DictionaryEntity>{
        return this.dictRepository.findOne(id);
    }

    async findByLang(lang: string): Promise<any>{
        const result = {};
        await this.dictRepository.find({
            where: {LanguageId: lang },
            select: [ "FieldName", "Prefix"]
        }).then(f => { 
            f.map(m => { 
                result[m.FieldName] = m.Prefix; 
                console.log(`debug=> ${m.FieldName}: ${m.Prefix}`);
            });

        } );

        return result;     
    }

}

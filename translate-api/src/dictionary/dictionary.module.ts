import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryEntity } from './dictionary.entity';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DictionaryEntity])],
    providers: [ DictionaryService],
    controllers: [DictionaryController]
})
export class DictionaryModule {}

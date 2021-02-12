import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_dictionary')
export class DictionaryEntity{
    
    @PrimaryGeneratedColumn("increment") 
    Id: number;
  
    @Column({type: 'varchar', length: 10, nullable: true }) 
    LanguageId: string;

    @Column({type: 'varchar', length: 50, nullable: true }) 
    FieldName: string;

    @Column({type: 'varchar', length: 50, nullable: true }) 
    Prefix: string;

    @Column({type: 'varchar', length: 100, nullable: true }) 
    FieldDefinition: string;
}
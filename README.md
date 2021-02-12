# Introduction

Example ngx-translate using Sql Server database, Angualar and NestJs.

## Create database table
``` sql
CREATE TABLE [dbo].[t_dictionary](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [varchar](10) NULL,
	[FieldName] [varchar](50) NULL,
	[Prefix] [varchar](50) NULL,
	[FieldDefinition] [varchar](100) NULL,
    CONSTRAINT [PK_t_dictionary] PRIMARY KEY CLUSTERED 
    (
	    [Id] ASC
    )
) ON [PRIMARY]
GO
```

## Genereate data

Using example **_data.sql_** to populate the t_dictionary table.

## Run the example
```shell
cd translate-api
npm start
```
and another terminal

```
cd sch-app
ng serve
```

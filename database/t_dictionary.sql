CREATE TABLE [dbo].[t_dictionary](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [varchar](10) NULL,
	[FieldName] [varchar](50) NULL,
	[Prefix] [varchar](50) NULL,
	[FieldDefinition] [varchar](100) NULL,
 CONSTRAINT [PK_t_dictionary] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
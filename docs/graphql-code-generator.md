
Conforme a doc https://www.graphql-code-generator.com/docs/getting-started/installation

yarn add -D @graphql-codegen/cli

Após instalar a cli rodar o init

yarn graphql-codegen init
Sobre as questões:
1 - sobre a aplicação -> confirmar apenas React
2 - sobre o schema -> se tiver usando um backend como o apollo pode informar o path de um arquivo com os schemas ou também pode-se informar uma url para um arquivo de schemas, no caso no GraphCMS usar a mesma url do endpoint.
3 - sobre os arquivos do graphql -> informei src/graphql/**
3.1 sobre os plugins necessários -> marquei somente os dois primeiros
4 - sobre output -> src/graphql/generated/graphql.ts
5 - Sobre instrospection file -> negar, é util apenas com Apollo ou Urql
6 - Sobre o nome do file config -> apenas confirmar
7 - Sobre o nome do comando que vai ser utilizado -> codegen
8 - Instalar as dependências -> yarn
9 - Rodar o codegen para gerar o arquivo com as tipagens do endpoint -> yarn codegen

Se tudo deu certo um arquivo src/graphql/generated/graphql.ts foi gerado


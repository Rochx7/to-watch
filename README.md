﻿# API ToWatch ( Em desenvolvimento 🚧🏗️ )

Este documento detalha as funcionalidades, requisitos e regras de negócio da API ToWatch, que permite gerenciar conteúdos assistidos, como séries, filmes, animes, animações e outros.

## Funcionalidade

- Adicionar: Inclua um novo conteúdo à sua lista, seja ele assistido, de interesse ou em andamento.
- Marcar como assistido: Registre que você já finalizou um conteúdo.
- Marcar como de interesse: Indique que um conteúdo despertou sua atenção e você pretende assisti-lo no futuro.
- Marcar como em andamento: Para séries, animes e documentários, acompanhe o progresso da sua visualização.
- Remover: Exclua um conteúdo da sua lista.
- Buscar: Encontre conteúdos específicos por título, gênero, plataforma de streaming e outros critérios.
- Listar: Visualize todos os seus conteúdos organizados por status (assistido, de interesse ou em andamento), gênero, plataforma de streaming e outros filtros.

## Tecnologias Utilizadas
**Backend:**

Node.js: Ambiente de execução JavaScript
Fastify: Framework web minimalista para Node.js
TypeScript: Linguagem de programação superconjunto do JavaScript com tipagem estática
Prisma: Ferramenta de ORM (Object-Relational Mapping) para gerenciar banco de dados relacionais

**Banco de Dados:**

PostgreSQL: Sistema de gerenciamento de banco de dados relacional robusto e escalável
Docker: Plataforma de containerização para executar aplicações de forma isolada e portátil
Pré-requisitos
Node.js 16 ou superior instalado
Docker instalado e configurado
Conta no PostgreSQL (opcional, caso queira utilizar um banco de dados externo)

## Instalação e Configuração
- Clonar o repositório do projeto
- Instalar as dependências
- Criar e configurar o arquivo .env na raiz do projeto. Este arquivo armazenará as variáveis de ambiente necessárias para a conexão com o banco de dados PostgreSQL. As variáveis obrigatórias são:
`DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=gerenciador_lista_conteudo`

*Observações:*
Substitua os valores de DB_HOST, DB_PORT, DB_USER, DB_PASSWORD e DB_NAME de acordo com suas configurações de banco de dados.
Se você estiver utilizando um banco de dados PostgreSQL externo, altere as variáveis de conexão no arquivo .env para apontar para o servidor e credenciais corretos.
- Iniciar o contêiner Docker do PostgreSQL: `docker-compose up -d postgres`

---
sidebar_position: 9
---

# Gerenciamento

A API de gerenciamento organiza as informações essenciais da operação: quem conduz, como os times estão estruturados, quais frotas existem e quais dispositivos estão associados a cada contexto.

:::info[Referência da API]

Para consultar operações, parâmetros e respostas disponíveis, acesse a [documentação de Gerenciamento](/docs/category/management-api).

:::

## Estrutura organizacional

A plataforma organiza os dados em níveis complementares:

```
Conta
  └── Times
       ├── Motoristas
       └── Frotas
            └── Dispositivos
```

### Relacionamentos principais

- Um motorista pode estar vinculado a mais de um time, e um time pode ter vários motoristas
- Um dispositivo pertence a uma frota; uma frota pode reunir vários dispositivos
- Frotas e motoristas se conectam aos times, que representam a unidade operacional dentro da conta

## O que pode ser gerenciado

### Times

Agrupam a operação do dia a dia. São o ponto de partida para organizar motoristas, frotas e permissões de visibilidade na plataforma.

### Frotas

Representam conjuntos de veículos ou equipamentos sob a mesma gestão. Cada dispositivo deve estar associado a uma frota.

### Motoristas

Identificam quem conduz ou está relacionado à operação. Podem ser associados a um ou mais times conforme a regra do negócio.

### Dispositivos

Registram o equipamento em campo: identificação, vínculo com a frota, dados de contato e configurações operacionais. Também podem exibir informações recentes de conectividade e localização, quando disponíveis.

## Informações do dispositivo

Além do cadastro, a plataforma pode disponibilizar um retrato atualizado do equipamento, como última comunicação, posição aproximada e indicadores de conexão. Esses dados ajudam a entender se o aparelho está ativo antes de enviar ordens ou consultar eventos.

Nem todo dispositivo terá todas as informações preenchidas o tempo todo — isso depende da comunicação recente com a plataforma.

## Consultas e filtros

É possível listar dispositivos de forma paginada ou localizar registros específicos por identificadores conhecidos, como o número do equipamento ou códigos de integração definidos pela sua operação.

Ao combinar filtros incompatíveis na mesma consulta, a plataforma pode recusar a requisição. Use um critério por vez, conforme descrito na referência da API.

## Cadastro e atualização

Há operações para criar, consultar, alterar e remover as entidades da estrutura organizacional. Alterações em dispositivos podem envolver tanto dados de cadastro quanto informações operacionais recebidas automaticamente pela plataforma.

Integrações externas normalmente utilizam as operações de cadastro e consulta. Atualizações automáticas de status em tempo real costumam ser tratadas pelos fluxos internos da V3.

## Integração com ordens

Para enviar uma instrução a um equipamento, é necessário primeiro identificá-lo no gerenciamento. O fluxo usual é:

1. Localizar o dispositivo desejado
2. Enviar a ordem correspondente
3. Acompanhar o resultado na API de ordens

Veja [Ordens](./ordens.md) para mais detalhes sobre instruções remotas.

## Boas práticas

1. Mantenha frotas e dispositivos alinhados à estrutura real da operação
2. Use identificadores de integração consistentes para facilitar conciliação com sistemas externos
3. Antes de comandos em massa, valide cadastro e comunicação recente do equipamento
4. Para modelos de organização específicos, consulte o time V3 em [dev@v3.com.br](mailto:dev@v3.com.br)

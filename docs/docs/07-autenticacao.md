---
sidebar_position: 7
---

# Autenticação

Este documento fornece um guia entender e implementar a autenticação em nosso sistema. Utilizamos OAuth 2.0 com OpenID Connect para autenticação e autorização seguras.

:::info[Procurando a API?]

Caso queira acessar diretamente a documentação da API de Autenticação, [clique aqui](/docs/category/auth-api).

:::

:::warning[Importante]

Todas as APIs disponibilizadas pela V3 necessitam de um Token de autenticação. Por isso, é importante que este token seja gerado e gerenciado pela equipe que irá realizar a integração com a V3.

:::

## Conceitos Principais

### OAuth 2.0
OAuth 2.0 é um framework de autorização que permite que aplicações obtenham acesso limitado a contas de usuários em um serviço HTTP. Ele funciona delegando a autenticação do usuário para o serviço que hospeda a conta do usuário e autorizando aplicações de terceiros a acessar a conta do usuário.

### OpenID Connect
OpenID Connect é uma camada simples de identidade construída sobre o OAuth 2.0. Ele permite que os clientes verifiquem a identidade dos usuários finais e obtenham informações básicas de perfil sobre eles.

### Componentes Principais
1. **Access Token**: Uma credencial usada para acessar recursos protegidos
2. **Refresh Token**: Uma credencial usada para obter novos tokens de acesso
3. **Client ID**: Identificador único para sua aplicação
4. **Client Secret**: Chave secreta usada para autenticar sua aplicação

## Fluxo de Autenticação

### 1. Obtendo um Access Token

Você já deve estar em posse das suas credenciais assim como ficou documentado em [Configuração Inicial](./04-configuracao-inicial.md).

Para obter um token de acesso, você precisa fazer uma requisição POST com os seguintes parâmetros:

```http
POST https://tenant.v3sandbox.com/v1/auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
scope=openid custom-claims
client_id=SEU_CLIENT_ID
client_secret=SEU_CLIENT_SECRET
```

A resposta incluirá:
- `access_token` (string): O token para usar nas requisições da API
- `account_id` (string): Identificador da conta
- `active` (boolean): Indica se o token está ativo
- `client_id` (string): Identificador do cliente
- `exp` (integer): Timestamp de expiração do token
- `iat` (integer): Timestamp de emissão do token
- `jti` (string): Identificador único do token (JWT ID)
- `realm_access` (object): Informações de acesso ao realm
- `refresh_token` (string): Token para obter novos tokens de acesso
- `scope` (string): Permissões concedidas ao token
- `session_state` (string): Estado da sessão
- `tenant_id` (string): Identificador do tenant
- `token_type` (string): Tipo do token (geralmente "Bearer")
- `username` (string): Nome do usuário autenticado

### 2. Autenticação e Scopes

A API utiliza **OAuth 2.0** para autenticação e autorização.  
Ao solicitar um token, o cliente deve informar explicitamente quais **scopes** deseja utilizar.  

Cada serviço da API possui dois níveis de permissão:  
- **read** → permite consultar recursos (`GET`)  
- **write** → permite criar, atualizar ou excluir recursos (`POST`, `PUT`, `PATCH`, `DELETE`)  

#### 2.1. Escopos disponíveis

| Serviço             | Escopos suportados                          | Descrição geral                             |
|---------------------|---------------------------------------------|---------------------------------------------|
| Orders              | `orders:read`, `orders:write`               | Leitura e escrita de orders                 |
| Management          | `management:read`, `management:write`       | Leitura e escrita de recursos da management |
| Event               | `event:read`, `event:write`                 | Leitura e escrita de eventos                |
| Notification        | `notifications:read`, `notifications:write` | Leitura e escrita de notifications          |

>__Atenção__: Também estão disponíveis os escopos `api:read` e `api:write`, que concedem acesso global de leitura ou escrita a todos os serviços da API.

#### 2.2. Solicitando um token com scope

Para obter um token válido, o cliente deve informar o(s) scope(s) necessários no momento da requisição ao Authorization Server.

**Exemplo (Client Credentials flow):**

```bash
curl -X POST https://tenant.v3sandbox.com/v1/auth/token \
  -d "grant_type=client_credentials" \
  -d "client_id=SEU_CLIENT_ID" \
  -d "client_secret=SEU_CLIENT_SECRET" \
  -d "scope=orders:write management:read"
```
Nesse exemplo, o token retornado concede permissão para consultar e enviar ordens a dispositivos, além de criar, atualizar e excluir recursos da API de gerenciamento.

>__Dica__: sempre solicite apenas os scopes mínimos necessários para sua aplicação.

### 3. Usando o Access Token

Inclua o token de acesso no cabeçalho Authorization das suas requisições à API:

```http
Authorization: Bearer SEU_ACCESS_TOKEN
```

### 4. Atualizando o Access Token

Quando seu token de acesso expirar, use o token de atualização para obter um novo:

```http
PUT https://tenant.v3sandbox.com/v1/auth/token
Content-Type: application/x-www-form-urlencoded

refresh_token=SEU_REFRESH_TOKEN
```

A resposta conterá um novo token de acesso e token de atualização.

## Melhores Práticas

1. **Armazenamento de Tokens**
   - Armazene os tokens de forma segura
   - Nunca exponha tokens no código do lado do cliente
   - Use mecanismos seguros de armazenamento

2. **Gerenciamento de Tokens**
   - Monitore os tempos de expiração dos tokens
   - Implemente atualização automática de token antes da expiração
   - Trate erros de atualização de token adequadamente

3. **Segurança**
   - Sempre use HTTPS para transmissão de tokens
   - Mantenha os client secrets seguros
   - Implemente tratamento adequado de erros
   - Valide tokens antes de usar

## Tratamento de Erros

Respostas de erro comuns incluem:

- `400 Bad Request`: Parâmetros de requisição inválidos
- `401 Unauthorized`: Token inválido ou expirado
- `500 Internal Server Error`: Problemas no servidor

Cada resposta de erro inclui:
- `error`: Código do erro
- `error_description`: Mensagem detalhada do erro

## Validação de Token

Você pode validar o status de um token usando:

```http
GET https://tenant.v3sandbox.com/v1/auth/token
Authorization: Bearer SEU_ACCESS_TOKEN
```

A resposta incluirá:
- `claims` (object): Claims do token JWT
- `message` (string): Mensagem informativa sobre o status da validação
- `valid` (boolean): Indica se o token é válido

## Notas Importantes

1. Tokens de acesso têm vida curta por segurança
2. Tokens de atualização têm vida útil mais longa
3. Sempre implemente tratamento adequado de erros
4. Mantenha suas credenciais de cliente seguras
5. Monitore os tempos de expiração dos tokens
6. Implemente atualização automática de token 
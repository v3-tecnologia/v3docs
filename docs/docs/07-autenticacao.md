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

grant_type=password
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

### 2. Scopes

Os tokens devem ser solicitados informando o scope de utilização do mesmo podendo ser do tipo read | write para cada serviço, seguindo a lista abaixo:

#### 2.1. Orders

| Método | Endpoint                                  | Scope        |
|--------|-------------------------------------------|--------------|
| POST   | /devices/:deviceID/orders                 | orders:write |
| DELETE | /devices/:deviceID/orders/:orderID        | orders:write |
| DELETE | /devices/:deviceID/orders                 | orders:write |
| GET    | /devices/:deviceID/orders/:orderID        | orders:read  |

#### 2.2 Management Devices

| Método | Endpoint                                  | Scope           |
|--------|-------------------------------------------|-----------------|
| GET    | /devices                                  | management:read |
| POST   | /devices                                  | management:write|
| GET    | /devices/:id                              | management:read |
| PUT    | /devices/:id                              | management:write|
| DELETE | /devices/:id                              | management:write|
| GET    | /devices/fleet/:fleetId                   | management:read |


#### 2.3. Management Drivers

| Método | Endpoint                                  | Scope           |
|--------|-------------------------------------------|-----------------|
| GET    | /drivers                                  | management:read |
| POST   | /drivers                                  | management:write|
| GET    | /drivers/:id                              | management:read |
| PUT    | /drivers/:id                              | management:write|
| DELETE | /drivers/:id                              | management:write|
| POST   | /drivers/:id/teams                        | management:write|
| DELETE | /drivers/:id/teams/:teamId                | management:write|

#### 2.4. Management Fleets

| Método | Endpoint                                  | Scope           |
|--------|-------------------------------------------|-----------------|
| GET    | /fleets                                   | management:read |
| POST   | /fleets                                   | management:write|
| GET    | /fleets/:id                               | management:read |
| PUT    | /fleets/:id                               | management:write|
| DELETE | /fleets/:id                               | management:write|
| GET    | /fleets/teams/:teamId                     | management:read |

#### 2.5. Management Teams

| Método | Endpoint                                  | Scope           |
|--------|-------------------------------------------|-----------------|
| GET    | /teams                                    | management:read |
| POST   | /teams                                    | management:write|
| GET    | /teams/:id                                | management:read |
| PUT    | /teams/:id                                | management:write|
| DELETE | /teams/:id                                | management:write|

#### 2.6. Notifications

| Método | Endpoint                                                           | Scope                |
|--------|--------------------------------------------------------------------|----------------------|
| POST   | /notifications/tenants/:tenant_id/webhooks                         | notifications:write  |
| GET    | /notifications/tenants/:tenant_id/webhooks                         | notifications:read   |
| GET    | /notifications/tenants/:tenant_id/webhooks/:id                     | notifications:read   |
| PUT    | /notifications/tenants/:tenant_id/webhooks/:id                     | notifications:write  |
| DELETE | /notifications/tenants/:tenant_id/webhooks/:id                     | notifications:write  |

#### 2.7. Events

| Método | Endpoint                                  | Scope        |
|--------|-------------------------------------------|--------------|
| POST   | /events/                                  | events:write |
| GET    | /events/:ulid                             | events:read  |
| GET    | /events/device/:device_id                 | events:read  |

#### 2.8. Visions

| Método | Endpoint             | Scope              |
|--------|----------------------|--------------------|
| -      | (em desenvolvimento) | visions:read/write |

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
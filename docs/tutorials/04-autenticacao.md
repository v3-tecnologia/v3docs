---
sidebar_position: 4
---

# Autenticação

Este documento fornece um guia entender e implementar a autenticação em nosso sistema. Utilizamos OAuth 2.0 com OpenID Connect para autenticação e autorização seguras.

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

Você já deve estar em posse das suas credenciais assim como ficou documentado em **Configuração Inicial**.

Para obter um token de acesso, você precisa fazer uma requisição POST com os seguintes parâmetros:

```http
POST https://sso.v3sandbox.com/auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=password
client_id=SEU_CLIENT_ID
client_secret=SEU_CLIENT_SECRET
username=SEU_USUARIO
password=SUA_SENHA
```

A resposta incluirá:
- `access_token`: O token para usar nas requisições da API
- `refresh_token`: Token para obter novos tokens de acesso
- `expires_in`: Tempo em segundos até o token de acesso expirar
- `refresh_expires_in`: Tempo em segundos até o token de atualização expirar
- `token_type`: Tipo do token (geralmente "Bearer")
- `scope`: Permissões concedidas ao token

### 2. Usando o Access Token

Inclua o token de acesso no cabeçalho Authorization das suas requisições à API:

```http
Authorization: Bearer SEU_ACCESS_TOKEN
```

### 3. Atualizando o Access Token

Quando seu token de acesso expirar, use o token de atualização para obter um novo:

```http
POST https://sso.v3sandbox.com/auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
client_id=SEU_CLIENT_ID
client_secret=SEU_CLIENT_SECRET
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

- 400 Bad Request: Parâmetros de requisição inválidos
- 401 Unauthorized: Token inválido ou expirado
- 500 Internal Server Error: Problemas no servidor

Cada resposta de erro inclui:
- `error`: Código do erro
- `error_description`: Mensagem detalhada do erro

## Validação de Token

Você pode validar o status de um token usando:

```http
GET https://sso.v3sandbox.com/auth/token
Authorization: Bearer SEU_ACCESS_TOKEN
```

A resposta indicará se o token é válido e incluirá quaisquer claims associados.

## Notas Importantes

1. Tokens de acesso têm vida curta por segurança
2. Tokens de atualização têm vida útil mais longa
3. Sempre implemente tratamento adequado de erros
4. Mantenha suas credenciais de cliente seguras
5. Monitore os tempos de expiração dos tokens
6. Implemente atualização automática de token 
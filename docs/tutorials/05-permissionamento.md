---
sidebar_position: 5
---

# Permissionamento

Quando você obtém um token com sucesso, a resposta terá a seguinte estrutura:

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600,
    "refresh_expires_in": 1800,
    "token_type": "Bearer",
    "scope": "profile email roles custom-claims"
}
```

### Claims do Token

O token de acesso contém informações importantes sobre o usuário e suas permissões. Você pode decodificar o token (que é um JWT) para ver estas informações. O token contém as seguintes claims:

```json
{
  "exp": 1745880770,
  "iat": 1745877170,
  "jti": "71295191-db3f-47ce-a748-108aff0d71c2",
  "iss": "https://0e45-186-212-1-130.ngrok-free.app/realms/sso-v3",
  "typ": "Bearer",
  "azp": "v3-client",
  "sid": "d00dda5f-0bbf-4fc8-8132-c0bfe75a227d",
  "realm_access": {
    "roles": [
      "tenant_admin_role"
    ]
  },
  "scope": "custom-claims",
  "tenant_id": "suaempresa",
  "account_id": "123456"
}
```

### Níveis de Permissão

O sistema utiliza um modelo de permissões baseado em roles (papéis) em diferentes níveis:

1. **Roles do Realm**
   - `admin_role`: Acesso administrativo V3
   - `tenant_admin_role`: Administrador do tenant
   - `tenant_role`: Usuário básico do tenant

2. **Roles do Cliente**
   - Cada cliente (aplicação) pode ter suas próprias roles
   - Exemplo: `v3-client` pode ter roles como `admin` e `user`

3. **Claims Personalizadas**
   - `account_id`: Identificador da conta
   - `tenant_id`: Identificador do tenant

### Verificando Permissões

Para verificar suas permissões atuais, você pode:

1. Decodificar o token JWT (usando ferramentas como jwt.io)
2. Fazer uma requisição de validação do token:
```http
GET /auth/token
Authorization: Bearer SEU_ACCESS_TOKEN
```

A resposta incluirá todas as claims e roles associadas ao seu token.

### Hierarquia de Permissões

1. **Admin do Realm**
   - Acesso total ao sistema
   - Pode gerenciar todos os tenants

2. **Admin do Tenant**
   - Acesso administrativo ao seu tenant
   - Pode gerenciar usuários do tenant
   - Permite:
     - Todas as permissões do nível TENANT
     - Criação de Orders Internas
     - Acesso irrestrito ao sistema
     - Deve ser concedido com cautela

3. **Usuário do Tenant**
   - Acesso básico às funcionalidades
   - Permissões limitadas ao seu tenant
   - Permite:
     - Visualização de dados
     - Operações básicas de gerenciamento
     - Acesso às funcionalidades padrão
     - Integração com APIs comuns
     - Recomendado para operações diárias
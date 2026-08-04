---
sidebar_position: 7
---

# Authentication

This document provides a guide to understanding and implementing authentication in our system. We use OAuth 2.0 with OpenID Connect for secure authentication and authorization.

:::info[Looking for the API?]

If you want to access the Authentication API documentation directly, [click here](/docs/category/auth-api).

:::

:::warning[Important]

All APIs provided by V3 require an authentication token. Therefore, it is important that this token be generated and managed by the team that will integrate with V3.

:::

## Key Concepts

### OAuth 2.0
OAuth 2.0 is an authorization framework that allows applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access that account.

### OpenID Connect
OpenID Connect is a simple identity layer built on top of OAuth 2.0. It allows clients to verify the identity of end users and obtain basic profile information about them.

### Main Components
1. **Access Token**: A credential used to access protected resources
2. **Refresh Token**: A credential used to obtain new access tokens
3. **Client ID**: Unique identifier for your application
4. **Client Secret**: Secret key used to authenticate your application

## Authentication Flow

### 1. Obtaining an Access Token

You should already have your credentials as documented in [Initial Setup](../../implantacao-e-setup/configuracao-inicial.md).

To obtain an access token, you need to make a POST request with the following parameters:

```http
POST https://tenant.v3sandbox.com/v1/auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
scope=openid custom-claims
client_id=YOUR_CLIENT_ID
client_secret=YOUR_CLIENT_SECRET
```

The response will include:
- `access_token` (string): The token to use in API requests
- `account_id` (string): Account identifier
- `active` (boolean): Indicates whether the token is active
- `client_id` (string): Client identifier
- `exp` (integer): Token expiration timestamp
- `iat` (integer): Token issuance timestamp
- `jti` (string): Unique token identifier (JWT ID)
- `realm_access` (object): Realm access information
- `refresh_token` (string): Token used to obtain new access tokens
- `scope` (string): Permissions granted to the token
- `session_state` (string): Session state
- `tenant_id` (string): Tenant identifier
- `token_type` (string): Token type (usually "Bearer")
- `username` (string): Authenticated user name

### 2. Authentication and Scopes

The API uses **OAuth 2.0** for authentication and authorization.
When requesting a token, the client must explicitly specify which **scopes** it intends to use.

Each API service has two permission levels:
- **read** → allows querying resources (`GET`)
- **write** → allows creating, updating, or deleting resources (`POST`, `PUT`, `PATCH`, `DELETE`)

#### 2.1. Available scopes

| Service             | Supported scopes                            | General description                         |
|---------------------|---------------------------------------------|---------------------------------------------|
| Orders              | `orders:read`, `orders:write`               | Read and write orders                       |
| Management          | `management:read`, `management:write`       | Read and write management resources         |
| Event               | `event:read`, `event:write`                 | Read and write events                       |
| Notification        | `notifications:read`, `notifications:write` | Read and write notifications                |

> **Note**: The scopes `api:read` and `api:write` are also available, granting global read or write access to all API services.

#### 2.2. Requesting a token with scopes

To obtain a valid token, the client must specify the required scope(s) when making the request to the Authorization Server.

**Example (Client Credentials flow):**

```bash
curl -X POST https://tenant.v3sandbox.com/v1/auth/token \
  -d "grant_type=client_credentials" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "scope=orders:write management:read"
```

In this example, the returned token grants permission to query and send orders to devices, as well as create, update, and delete resources in the management API.

> **Tip**: always request only the minimum scopes required for your application.

### 3. Using the Access Token

Include the access token in the Authorization header of your API requests:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### 4. Refreshing the Access Token

When your access token expires, use the refresh token to obtain a new one:

```http
PUT https://tenant.v3sandbox.com/v1/auth/token
Content-Type: application/x-www-form-urlencoded

refresh_token=YOUR_REFRESH_TOKEN
```

The response will contain a new access token and refresh token.

## Best Practices

1. **Token Storage**
   - Store tokens securely
   - Never expose tokens in client-side code
   - Use secure storage mechanisms

2. **Token Management**
   - Monitor token expiration times
   - Implement automatic token refresh before expiration
   - Handle token refresh errors appropriately

3. **Security**
   - Always use HTTPS for token transmission
   - Keep client secrets secure
   - Implement proper error handling
   - Validate tokens before use

## Error Handling

Common error responses include:

- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Invalid or expired token
- `500 Internal Server Error`: Server issues

Each error response includes:
- `error`: Error code
- `error_description`: Detailed error message

## Token Validation

You can validate a token's status using:

```http
GET https://tenant.v3sandbox.com/v1/auth/token
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The response will include:
- `claims` (object): JWT token claims
- `message` (string): Informational message about the validation status
- `valid` (boolean): Indicates whether the token is valid

## Important Notes

1. Access tokens have a short lifespan for security
2. Refresh tokens have a longer lifespan
3. Always implement proper error handling
4. Keep your client credentials secure
5. Monitor token expiration times
6. Implement automatic token refresh

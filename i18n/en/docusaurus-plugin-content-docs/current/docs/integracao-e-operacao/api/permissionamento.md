---
sidebar_position: 8
---

# Authorization

When you successfully obtain a token, the response will have the following structure:

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600,
    "refresh_expires_in": 1800,
    "token_type": "Bearer",
    "scope": "profile email *roles* custom-claims"
}
```

### Token Claims

The access token contains important information about the user and their permissions. You can decode the token (which is a JWT) to view this information. The token contains the following claims:

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
  "tenant_id": "yourcompany",
  "account_id": "123456"
}
```

### Permission Levels

The system uses a permission model based on **roles** at different levels:

1. **Realm Roles**
   -  `admin_role`: V3 administrative access
   -  `tenant_admin_role`: Tenant administrator
   -  `tenant_role`: Basic tenant user

2. **Client Roles**
   -  Each client (application) can have its own roles
   -  Example: `v3-client` may have roles such as `admin` and `user`

3. **Custom Claims**
   -  `account_id`: Account identifier
   -  `tenant_id`: Tenant identifier

### Verifying Permissions

To verify your current permissions, you can:

1.  Decode the JWT token (using tools such as jwt.io)
2.  Make a token validation request:
```http
GET /auth/token
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The response will include all claims and roles associated with your token.

### Permission Hierarchy

1. **Realm Admin**
   - Full system access
   - Can manage all tenants

2. **Tenant Admin**
   - Administrative access to your tenant
   - Can manage tenant users
   - Allows:
     -  All TENANT-level permissions
     -  Creation of Internal Orders
     -  Unrestricted system access
     -  Should be granted with caution

3. **Tenant User**
   - Basic access to features
   - Permissions limited to their tenant
   - Allows:
     -  Data viewing
     -  Basic management operations
     -  Access to standard features
     -  Integration with common APIs
     -  Recommended for daily operations

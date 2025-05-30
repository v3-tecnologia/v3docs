---
sidebar_position: 9
---

# Gerenciamento

A camada de Gerenciamento é um componente fundamental da V3, responsável pela gestão das principais entidades do sistema. Após a configuração inicial, autenticação e permissionamento, esta camada permite o gerenciamento completo de:

- ‍ Motoristas
- Times
- Frotas
- Dispositivos

## Link da API

Caso queira acessar diretamente a documentação da API de Gerenciamento, [clique aqui](/docs/category/management-api).

## Hierarquia e Relacionamentos

O sistema segue uma estrutura hierárquica clara, com relacionamentos específicos entre as entidades:

```
🏢 Tenant
  └── 👥 Teams
       ├── 👨‍✈️ Drivers (Muitos para Muitos)
       └── 🚗 Fleets
            └── 📱 Devices (Um para Muitos)
```

### Relacionamentos Principais
- **Times e Motoristas**: Um motorista pode pertencer a vários times, e um time pode ter vários motoristas
- **Frotas e Dispositivos**: Um dispositivo pertence a apenas uma frota, enquanto uma frota pode ter vários dispositivos

## Entidades do Sistema

### Contas (Accounts)
- **Identificação**:  ID único e ULID para identificação externa
- **Nome**:  Nome da organização/empresa
- **Correlação**:  ID para integração com sistemas externos
- **Tenant**:  Identificadores específicos (tenant_id e client_id)
- **Relacionamentos**:  Entidade raiz que pode ter múltiplos times

### Times (Teams)
- **Identificação**:  ID único e ULID para identificação externa
- **Nome**:  Nome do time
- **Correlação**:  ID para integração com sistemas externos
- **Relacionamentos**: 
  - Pertence a uma conta
  - ‍ Pode ter múltiplos motoristas
  - Pode ter múltiplas frotas

### Frotas (Fleets)
- **Identificação**:  ID único e ULID para identificação externa
- **Nome**:  Nome da frota
- **Correlação**:  ID para integração com sistemas externos
- **Relacionamentos**:
  - Pertence a um time
  - Pode ter múltiplos dispositivos

### ‍Motoristas (Drivers)
- **Identificação**:  ID único e ULID para identificação externa
- **Nome**:  Nome do motorista (opcional)
- **Correlação**:  ID para integração com sistemas externos
- **Relacionamentos**:  Pode pertencer a múltiplos times (gerenciado via team_drivers)

### Dispositivos (Devices)
- **Identificação**:  ID único e ULID para identificação externa
- **IMEI**:  Identificador único do dispositivo
- **Modelo**:  Modelo do dispositivo
- **Certificado**:  ID do certificado de segurança
- **Número de Telefone**:  Número do chip associado
- **ICCID**:  Identificador do cartão SIM
- **Reconhecimento Automático**:  Configuração para reconhecimento automático
- **Relacionamentos**:  Pertence a uma frota específica
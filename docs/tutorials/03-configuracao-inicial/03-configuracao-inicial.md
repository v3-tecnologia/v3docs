---
sidebar_position: 0
---

# Configuração Inicial

Bem-vindo à documentação de configuração inicial da plataforma V3. Este guia irá auxiliá-lo no processo de configuração dos seus dispositivos, independentemente da forma de aquisição.

## Opções de Aquisição

Existem duas formas de adquirir dispositivos para utilização na plataforma V3:

1. **Aquisição direta pela V3**
2. **Aquisição por outro fornecedor**

### Aquisição pela V3

Ao adquirir os dispositivos diretamente pela V3, você terá os dispositivos pré-configurados e prontos para uso.

Caso queira adquirir seu dispositivo conosco entre em contato pelo e-mail comercial@v3.com.br.

Neste caso, você pode prosseguir diretamente para a etapa de **Dados Cadastrais**.

### Aquisição por Outro Fornecedor

Se você optar por adquirir os dispositivos de outro fornecedor, será necessário:

1. Preencher os **Dados Cadastrais**
2. Utilizar nossa **Ferramenta Customizada** para configuração

## Ferramenta Customizada

A V3 disponibiliza uma ferramenta customizada para configuração de dispositivos adquiridos de outros fornecedores. Esta ferramenta:

- Está disponível para Windows e Linux
- Requer conexão USB do dispositivo ao computador
- Realiza configuração automática completa
- Prepara o dispositivo para instalação

Você deverá receber essa ferramenta durante o processo de onboarding, enviada pelo nosso time de suporte.

## Dados Cadastrais

Para iniciar o processo de configuração, é necessário fornecer informações detalhadas sobre sua empresa, dispositivos e usuários.

Estas informações são essenciais para:

- Configuração correta dos dispositivos
- Criação de perfis de acesso
- Definição de permissões
- Configuração de redes wifi e APNs

### Estrutura JSON

```json
{
    "tenant_name": "Nome do seu tenant na plataforma V3",
    "account": {
       "company_name": "Nome completo da empresa",
       "document_number": "CNPJ da empresa",
       "document_type": "CNPJ",
       "contact_info": [
          {
             "name": "Nome do departamento",
             "email": "Email de contato",
             "phone": "Telefone de contato",
             "website": "Website da empresa"
          }
       ],
       "addresses": [
          {
             "type": "billing",
             "address": "Endereço completo",
             "city": "Cidade",
             "state": "Estado",
             "country": "País",
             "postal_code": "CEP"
          },
          {
             "type": "shipping",
             "address": "Endereço completo",
             "city": "Cidade",
             "state": "Estado",
             "country": "País",
             "postal_code": "CEP"
          }
       ],
       "users": [
          {
             "name": "Nome do usuário",
             "email": "Email do usuário",
             "password": "Senha inicial",
             "role": "TENANT|TENANT_ADMIN",
          }
       ]
    },
    "devices": {
       "profiles": [
          {
             "name": "Nome do perfil",
             "default": true,
             "firmware_version": "Versão do firmware",
             "firmware_provider": "Fornecedor do firmware",
             "hardware_model": "Modelo do hardware",
             "hardware_version": "Versão do hardware",
             "hardware_provider": "Fornecedor do hardware",
             "features": [
                {
                   "name": "Nome da feature",
                   "enabled": true,
                   "params": {}
                }
             ],
             "default_apns": [
                {
                   "name": "Nome do APN",
                   "numeric": "Código numérico",
                   "type": "Tipo do APN",
                   "mcc": "Código MCC",
                   "mnc": "Código MNC",
                   "apn": "Nome do APN",
                   "user": "Usuário",
                   "password": "Senha"
                }
             ],
             "default_networks": [
                {
                   "type": "Tipo de rede",
                   "ssid": "Nome da rede",
                   "pre_shared_key": "Senha da rede"
                }
             ]
          }
       ],
       "equipments": [
          {
             "imei": "Número IMEI do dispositivo",
             "profile": "Nome do perfil",
             "vehicle": {
                "license_plate": "Placa do veículo",
                "serial_number": "Número de série",
                "chassis": "Número do chassi",
                "odometer": "Quilometragem",
                "fipe_code": "Código FIPE",
                "fuel_type": "Tipo de combustível",
                "manufacture_year": "Ano de fabricação",
                "model_year": "Ano do modelo"
             },
             "custom_apns": [
                {
                   "name": "Nome do APN personalizado",
                   "numeric": "Código numérico",
                   "type": "Tipo do APN",
                   "mcc": "Código MCC",
                   "mnc": "Código MNC",
                   "apn": "Nome do APN",
                   "user": "Usuário",
                   "password": "Senha"
                }
             ],
             "custom_networks": [
                {
                   "type": "Tipo de rede",
                   "ssid": "Nome da rede",
                   "pre_shared_key": "Senha da rede"
                }
             ]
          }
       ]
    }
}
```

## Setup Inicial

Após o preenchimento dos dados cadastrais, você receberá:

1. **Credenciais de Acesso**

#### Tenant ID
- Identificador único numérico da sua organização na plataforma V3
- Utilizado internamente para identificação do seu tenant
- Necessário para todas as operações na API
- Exemplo: `123456`

#### Tenant Name
- Nome que identificará sua empresa na plataforma V3
- Criado pelo time V3 com base no nome da sua empresa
- Utilizado para acessar os ambientes da plataforma
- Exemplo: Se sua empresa se chamar `Google`, seu `Tenant Name` será `google` e sua URL de acesso ao ambiente de homologação será `google.v3sandbox.com`

#### Client ID
- Identificador único da sua aplicação na plataforma
- Utilizado para autenticação OAuth2
- Necessário para obter tokens de acesso
- Exemplo: `client_123456789`

#### Client Secret
- Chave secreta para autenticação da sua aplicação
- Utilizada em conjunto com o Client ID
- Deve ser mantida em segurança
- Não deve ser compartilhada com terceiros
- Exemplo: `secret_987654321`

#### Webhook Secret
- Chave secreta para validação das integrações via Webhook
- Utilizada para garantir a autenticidade das requisições
- Deve ser configurada em seus sistemas de integração
- Mantenha em segurança para evitar acessos não autorizados
- Exemplo: `webhook_456789123`

### Importante

- Mantenha todas as credenciais em local seguro
- Não compartilhe as credenciais com terceiros
- Em caso de perda ou comprometimento, entre em contato imediatamente com o suporte
- Faça backup das informações recebidas
- Siga todas as instruções de segurança fornecidas

Estas credenciais são essenciais para:
- Integração com a plataforma
- Configuração de webhooks
- Autenticação de dispositivos
- Acesso à API
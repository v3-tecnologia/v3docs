---
sidebar_position: 4
---

# 🚀 Configuração Inicial

👋 Bem-vindo à documentação de configuração inicial da plataforma V3. Este guia irá auxiliá-lo no processo de configuração dos seus dispositivos, independentemente da forma de aquisição.

## 💰 Opções de Aquisição

Existem duas formas de adquirir dispositivos para utilização na plataforma V3:

1. **Aquisição direta pela V3**
2. **Aquisição por outro fornecedor**

### 🏢 Aquisição pela V3

Ao adquirir os dispositivos diretamente pela V3, você terá os dispositivos pré-configurados e prontos para uso.

Caso queira adquirir seu dispositivo conosco entre em contato pelo e-mail comercial@v3.com.br.

Neste caso, você pode prosseguir diretamente para a etapa de **Dados Cadastrais**.

### 🔧 Aquisição por Outro Fornecedor

Se você optar por adquirir os dispositivos de outro fornecedor, será necessário:

1. Preencher os **Dados Cadastrais**
2. Utilizar nossa **Ferramenta Customizada** para configuração

## 🛠️ Ferramenta Customizada

A V3 disponibiliza uma ferramenta customizada para configuração de dispositivos adquiridos de outros fornecedores. Esta ferramenta:

- 💻 Está disponível para Windows e Linux
- 🔌 Requer conexão USB do dispositivo ao computador
- ⚡ Realiza configuração automática completa
- 📱 Prepara o dispositivo para instalação

Você deverá receber essa ferramenta durante o processo de onboarding, enviada pelo nosso time de suporte.

Para ver um passo a passo de como utilizar esta ferramenta, acesse [Ferramenta de Configuração](./06-ferramenta-de-configuracao.md).

## 📝 Dados Cadastrais

Para iniciar o processo de configuração, é necessário fornecer informações detalhadas sobre sua empresa, dispositivos e usuários.

Estas informações são essenciais para:

- ⚙️ Configuração correta dos dispositivos
- 👥 Criação de perfis de acesso
- 🔒 Definição de permissões
- 📡 Configuração de redes wifi e APNs

### 📊 Estrutura de Dados

#### 🏢 Informações do Tenant
- **Nome do Tenant** (`tenant_name`): Nome do seu tenant na plataforma V3

#### 🏭 Informações da Empresa
- **Nome da Empresa** (`company_name`): Nome completo da empresa
- **Número do Documento** (`document_number`): CNPJ da empresa
- **Tipo do Documento** (`document_type`): CNPJ

##### 📞 Informações de Contato
- **Nome do Departamento** (`name`): Nome do departamento
- **Email** (`email`): Email de contato
- **Telefone** (`phone`): Telefone de contato
- **Website** (`website`): Website da empresa

##### 📍 Endereços
###### 💳 Endereço de Cobrança
- **Tipo** (`type`): billing
- **Endereço** (`address`): Endereço completo
- **Cidade** (`city`): Cidade
- **Estado** (`state`): Estado
- **País** (`country`): País
- **CEP** (`postal_code`): CEP

###### 📦 Endereço de Entrega
- **Tipo** (`type`): shipping
- **Endereço** (`address`): Endereço completo
- **Cidade** (`city`): Cidade
- **Estado** (`state`): Estado
- **País** (`country`): País
- **CEP** (`postal_code`): CEP

##### 👥 Usuários
- **Nome** (`name`): Nome do usuário
- **Email** (`email`): Email do usuário
- **Senha** (`password`): Senha inicial
- **Função** (`role`): TENANT ou TENANT_ADMIN

#### 📱 Dispositivos

##### 👤 Perfis
- **Nome do Perfil** (`name`): Nome do perfil
- **Perfil Padrão** (`default`): true/false
- **Versão do Firmware** (`firmware_version`): Versão do firmware
- **Fornecedor do Firmware** (`firmware_provider`): Fornecedor do firmware
- **Modelo do Hardware** (`hardware_model`): Modelo do hardware
- **Versão do Hardware** (`hardware_version`): Versão do hardware
- **Fornecedor do Hardware** (`hardware_provider`): Fornecedor do hardware

###### ⚙️ Features
- **Nome da Feature** (`name`): Nome da feature
- **Habilitada** (`enabled`): true/false
- **Parâmetros** (`params`): Parâmetros específicos da feature

###### 📡 APNs Padrão
- **Nome do APN** (`name`): Nome do APN
- **Código Numérico** (`numeric`): Código numérico
- **Tipo do APN** (`type`): Tipo do APN
- **Código MCC** (`mcc`): Código MCC
- **Código MNC** (`mnc`): Código MNC
- **Nome do APN** (`apn`): Nome do APN
- **Usuário** (`user`): Usuário
- **Senha** (`password`): Senha

###### 📶 Redes Padrão
- **Tipo de Rede** (`type`): Tipo de rede
- **Nome da Rede** (`ssid`): Nome da rede
- **Senha da Rede** (`pre_shared_key`): Senha da rede

##### 🚗 Equipamentos
- **IMEI** (`imei`): Número IMEI do dispositivo
- **Perfil** (`profile`): Nome do perfil

###### 🚘 Informações do Veículo
- **Placa** (`license_plate`): Placa do veículo
- **Número de Série** (`serial_number`): Número de série
- **Chassi** (`chassis`): Número do chassi
- **Quilometragem** (`odometer`): Quilometragem
- **Código FIPE** (`fipe_code`): Código FIPE
- **Tipo de Combustível** (`fuel_type`): Tipo de combustível
- **Ano de Fabricação** (`manufacture_year`): Ano de fabricação
- **Ano do Modelo** (`model_year`): Ano do modelo

###### 📱 APNs Personalizados
- **Nome do APN** (`name`): Nome do APN personalizado
- **Código Numérico** (`numeric`): Código numérico
- **Tipo do APN** (`type`): Tipo do APN
- **Código MCC** (`mcc`): Código MCC
- **Código MNC** (`mnc`): Código MNC
- **Nome do APN** (`apn`): Nome do APN
- **Usuário** (`user`): Usuário
- **Senha** (`password`): Senha

###### 📶 Redes Personalizadas
- **Tipo de Rede** (`type`): Tipo de rede
- **Nome da Rede** (`ssid`): Nome da rede
- **Senha da Rede** (`pre_shared_key`): Senha da rede

> Não se preocupe, nosso time de suporte irá acompanhar a coleta e inclusão destes dados!

## ⚙️ Setup Inicial

Após o preenchimento dos dados cadastrais, você receberá:

1. **Credenciais de Acesso**

#### 🔑 Tenant ID
- Identificador único numérico da sua organização na plataforma V3
- Utilizado internamente para identificação do seu tenant
- Necessário para todas as operações na API
- Exemplo: `123456`

#### 🏢 Tenant Name
- Nome que identificará sua empresa na plataforma V3
- Criado pelo time V3 com base no nome da sua empresa
- Utilizado para acessar os ambientes da plataforma
- Exemplo: Se sua empresa se chamar `suaempresa`, seu `Tenant Name` será `suaempresa` e sua URL de acesso ao ambiente de homologação será `suaempresa.v3sandbox.com`

#### 🆔 Client ID
- Identificador único da sua aplicação na plataforma
- Utilizado para autenticação OAuth2
- Necessário para obter tokens de acesso
- Exemplo: `client_123456789`

#### 🔒 Client Secret
- Chave secreta para autenticação da sua aplicação
- Utilizada em conjunto com o Client ID
- Deve ser mantida em segurança
- Não deve ser compartilhada com terceiros
- Exemplo: `secret_987654321`

#### 🔐 Webhook Secret
- Chave secreta para validação das integrações via Webhook
- Utilizada para garantir a autenticidade das requisições
- Deve ser configurada em seus sistemas de integração
- Mantenha em segurança para evitar acessos não autorizados
- Exemplo: `webhook_456789123`

### ⚠️ Importante

- 🔒 Mantenha todas as credenciais em local seguro
- 🚫 Não compartilhe as credenciais com terceiros
- 🆘 Em caso de perda ou comprometimento, entre em contato imediatamente com o suporte
- 💾 Faça backup das informações recebidas
- ✅ Siga todas as instruções de segurança fornecidas

Estas credenciais são essenciais para:
- 🔌 Integração com a plataforma
- 📡 Configuração de webhooks
- 🔐 Autenticação de dispositivos
- 🔑 Acesso à API

> Entre em contato com o nosso time de suporte para obter as suas credenciais de acesso, via [Suporte](mailto:suporte@v3.com.br)
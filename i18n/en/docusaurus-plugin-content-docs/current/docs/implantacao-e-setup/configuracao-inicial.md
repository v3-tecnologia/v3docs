---
sidebar_position: 4
---

# Initial Configuration

 Welcome to the V3 platform initial configuration documentation. This guide will assist you in configuring your devices, regardless of how they were acquired.

## Acquisition Options

There are two ways to acquire devices for use on the V3 platform:

### Acquisition through V3

When acquiring devices directly from V3, you will receive pre-configured devices ready for use.

:::info[Acquire Now]

If you would like to acquire your device with us, contact: [comercial@v3.com.br](mailto:comercial@v3.com.br)

:::

In this case, you can proceed directly to the [Registration Data](#registration-data) step.

### Acquisition from Another Supplier

If you choose to acquire devices from another supplier, you will need to:

1. Complete the [Registration Data](#registration-data).
2. Use our [Configuration Tool](#configuration-tool) for setup.

## Registration Data

To begin the configuration process, you must provide detailed information about your company, devices, and users.

This information is essential for:

-  Correct device configuration
-  Access profile creation
-  Permission definition
-  WiFi network and APN configuration

### Tenant Information
- **Tenant Name** (`tenant_name`): Your tenant name on the V3 platform

### Company Information
- **Company Name** (`company_name`): Full company name
- **Document Number** (`document_number`): Company CNPJ
- **Document Type** (`document_type`): CNPJ

#### Contact Information
- **Department Name** (`name`): Department name
- **Email** (`email`): Contact email
- **Phone** (`phone`): Contact phone
- **Website** (`website`): Company website

#### Addresses
##### Billing Address
- **Type** (`type`): billing
- **Address** (`address`): Full address
- **City** (`city`): City
- **State** (`state`): State
- **Country** (`country`): Country
- **Postal Code** (`postal_code`): Postal code

##### Shipping Address
- **Type** (`type`): shipping
- **Address** (`address`): Full address
- **City** (`city`): City
- **State** (`state`): State
- **Country** (`country`): Country
- **Postal Code** (`postal_code`): Postal code

#### Users
- **Name** (`name`): User name
- **Email** (`email`): User email
- **Password** (`password`): Initial password
- **Role** (`role`): TENANT or TENANT_ADMIN

### Devices

#### Profiles
- **Profile Name** (`name`): Profile name
- **Default Profile** (`default`): true/false
- **Firmware Version** (`firmware_version`): Firmware version
- **Firmware Provider** (`firmware_provider`): Firmware provider
- **Hardware Model** (`hardware_model`): Hardware model
- **Hardware Version** (`hardware_version`): Hardware version
- **Hardware Provider** (`hardware_provider`): Hardware provider

##### Features
- **Feature Name** (`name`): Feature name
- **Enabled** (`enabled`): true/false
- **Parameters** (`params`): Feature-specific parameters

##### Default APNs
- **APN Name** (`name`): APN name
- **Numeric Code** (`numeric`): Numeric code
- **APN Type** (`type`): APN type
- **MCC Code** (`mcc`): MCC code
- **MNC Code** (`mnc`): MNC code
- **APN Name** (`apn`): APN name
- **User** (`user`): User
- **Password** (`password`): Password

##### Default Networks
- **Network Type** (`type`): Network type
- **Network Name** (`ssid`): Network name
- **Network Password** (`pre_shared_key`): Network password

#### Equipment
- **IMEI** (`imei`): Device IMEI number
- **Profile** (`profile`): Profile name

##### Vehicle Information
- **License Plate** (`license_plate`): Vehicle license plate
- **Serial Number** (`serial_number`): Serial number
- **Chassis** (`chassis`): Chassis number
- **Odometer** (`odometer`): Odometer reading
- **FIPE Code** (`fipe_code`): FIPE code
- **Fuel Type** (`fuel_type`): Fuel type
- **Manufacture Year** (`manufacture_year`): Manufacture year
- **Model Year** (`model_year`): Model year

##### Custom APNs
- **APN Name** (`name`): Custom APN name
- **Numeric Code** (`numeric`): Numeric code
- **APN Type** (`type`): APN type
- **MCC Code** (`mcc`): MCC code
- **MNC Code** (`mnc`): MNC code
- **APN Name** (`apn`): APN name
- **User** (`user`): User
- **Password** (`password`): Password

##### Custom Networks
- **Network Type** (`type`): Network type
- **Network Name** (`ssid`): Network name
- **Network Password** (`pre_shared_key`): Network password

:::info

Don't worry — our support team will assist with collecting and entering this data!

:::

## Configuration Tool

V3 provides a **Configuration Tool** for devices acquired from other suppliers. This tool:

-  Is available for Windows and Linux
-  Requires a USB connection between the device and the computer
-  Performs complete automatic configuration
-  Prepares the device for installation

You will receive this tool during the onboarding process, sent by our support team.

For a step-by-step guide on how to use this tool, see [Configuration Tool](./ferramenta-de-configuracao.md).

## Initial Setup

After completing the registration data, you will receive:

1. **Access Credentials**

#### Tenant ID
- Unique numeric identifier for your organization on the V3 platform
- Used internally to identify your tenant
- Required for all API operations
- Example: `123456`

#### Tenant Name
- Name that will identify your company on the V3 platform
- Created by the V3 team based on your company name
- Used to access platform environments
- Example: If your company is called `yourcompany`, your `Tenant Name` will be `yourcompany` and your staging environment URL will be `yourcompany.v3sandbox.com`

#### Client ID
- Unique identifier for your application on the platform
- Used for OAuth2 authentication
- Required to obtain access tokens
- Example: `client_123456789`

#### Client Secret
- Secret key for your application authentication
- Used together with the Client ID
- Must be kept secure
- Must not be shared with third parties
- Example: `secret_987654321`

#### Webhook Secret
- Secret key for validating Webhook integrations
- Used to ensure the authenticity of requests
- Must be configured in your integration systems
- Keep secure to prevent unauthorized access
- Example: `webhook_456789123`

### Important

-  Keep all credentials in a secure location
-  Do not share credentials with third parties
-  In case of loss or compromise, contact support immediately
-  Back up the information you receive
-  Follow all security instructions provided

These credentials are essential for:
-  Platform integration
-  Webhook configuration
-  Device authentication
-  API access

:::info[Have questions?]

Contact our support team to obtain your access credentials at [suporte@v3.com.br](mailto:suporte@v3.com.br)

:::

---
sidebar_position: 11
---

# Events

The events context is the heart of V3's video telematics system. It is responsible for managing all events that occur with field devices, such as GPS position, accelerometer data, driver identification, and inappropriate behaviors.

:::info[Looking for the API?]

If you want to access the Events API documentation directly, [click here](/docs/category/event-api).

:::

## What are Events?

Events are records of everything that happens with a field device. They can be classified into three main categories:

1. **Hardware**: Events related to the vehicle (e.g., Ignition On or Ignition Off)
2. **Vision**: Events captured by cameras
3. **Telemetry**: Events obtained via device sensors (e.g., Gyroscope or GPS)

Events are the core of how your integration can obtain data from devices managed by V3.

Through events, you can build another layer of functionality in the way that makes the most sense for your business.

To do this, it is important to understand the structure of an event.

Below, each piece of data that can be analyzed directly in [this](/docs/openapi/event/obter-evento-por-ulid) payload is explained.

## Event Structure

Each event contains the following main information:

### Basic Information
- **ULID**: Unique event identifier
- **Device ID**: ID of the device that generated the event
- **Event Type**: Event type (Hardware, Vision, or Telemetry)
- **Hardware Event Type**: Event subtype (when applicable)
- **Hardware Model**: Device model
- **Correlation ID**: ID to correlate related events

### Timestamps
- **Sourced Created At**: Event creation date/time
- **Hook Delivered At**: Date/time when the webhook was delivered
- **Tenant Delivered At**: Date/time when the event was consumed by the client

### Payload
The payload contains all event-specific information and is structured as follows:

#### Message Info
- **Message Type**: Message type
- **Sequence Number**: Message sequence number

#### Timestamps
- **Event Date**: Event date (YYYY-MM-DD format)
- **Event Time**: Event time (HH:mm:ss format)
- **Timestamp**: Unix timestamp of the event
- **Last Timestamp of Fix**: Last GPS fix timestamp
- **Received Timestamp**: Reception timestamp
- **Process Timestamp**: Processing timestamp
- **TTL Timestamp**: Expiration timestamp
- **Time Since Boot**: Time since the device's last boot

#### GPS Data
- **Latitude**: Position latitude
- **Longitude**: Position longitude
- **Altitude**: Altitude in meters
- **GPS Heading**: Direction in degrees
- **Speed**: Speed in km/h
- **Satellites**: Number of connected satellites
- **Is Fixed**: Indicates whether GPS is fixed
- **HDOP**: Horizontal Dilution of Precision
- **VDOP**: Vertical Dilution of Precision

#### Vehicle Data
- **Is Ignition On**: Ignition state
- **Odometer**: Current mileage
- **Vehicle Battery Voltage**: Vehicle battery voltage
- **Backup Battery Voltage**: Backup battery voltage
- **Is Vehicle Battery Connected**: Indicates whether the vehicle battery is connected

#### Connection Data
- **Connection Type**: Connection type
- **Signal Strength**: Signal strength in dBm
- **MCC**: Mobile Country Code
- **MNC**: Mobile Network Code
- **Cell ID**: Cell ID
- **Location Area Code**: Area code
- **Timing Advance**: Timing advance
- **ICCID**: SIM card number

#### Media Data (when applicable)
- **ULID**: Unique media identifier
- **Object Name**: Object name in the bucket
- **Bucket Name**: Storage bucket name
- **Content Type**: Content type (e.g., image/jpeg)
- **File Size**: File size in bytes
- **Media Type**: Media type (RECORD, EVENT, INDEXED, THUMBNAIL)
- **Cam Channel**: Camera channel (1 or 2)
- **Metadata**: Additional media metadata
  - Width: Image width
  - Height: Image height
  - Compression: Compression type
  - Quality: Compression quality

#### Metadata
- **Firmware Version**: Firmware version
- **PID**: Process identifiers
  - Main: Main PID
  - Sub: Secondary PID
- **Version**: Software version
  - Major: Major version
  - Minor: Minor version
  - Patch: Patch version
- **Details**: Additional event details

## How are Events Created?

Events can be created in two ways:

1. **Automatically by the Firmware System**:
   - Via MQTT (for Hardware and Telemetry events)
   - Via S3 (for Vision events)

2. **Manually via API**:
   - Endpoint: `POST /devices/{deviceId}/events`
   - Requires `admin` or `tenant_admin` permission

:::info[Why create manually?]

Manual creation can be important if you want to integrate with other devices. This way, for example, you can create an event directly via HTTP.

It can also be useful during migration maneuvers or incident resolution.

:::

## How to Consume Events?

There are two ways to consume events:

1. **Via Webhook**:
   - The system automatically notifies when a new event is created
   - The client must implement an endpoint to receive these notifications
   - The event is marked as consumed when the webhook returns success (2xx)

:::info[See how to configure and use the Webhook]

If you want to understand how to configure and use the WebHook notification system, go [here](./notificacoes.md).

:::

2. **Via API**:
   - This is a polling-based consumption method
   - You can use [this](/docs/openapi/event/obter-evento-por-ulid) endpoint.
   - Supports pagination
   - Allows filtering events by period
   - After consuming, the client must mark the event as processed using:
     - `PATCH /devices/{deviceId}/events/{ulid}` (single event)
     - `PATCH /devices/{deviceId}/events` (multiple events)

## Retrieving Event Media

For events that have associated media (such as photos or videos):

1. The event contains media information in the `media` field of the payload
2. To obtain the media access URL, you need to access an endpoint directly in the vision context. See more details [here](/docs/openapi/media/baixar-arquivo-com-chave-segura).

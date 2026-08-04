---
sidebar_position: 12
---

# Vision

The vision context is designed to be the processing hub for events that arrive at **V3CLOUD**, for computer vision inference.

Computer vision is an area of artificial intelligence that allows computers to "see", that is, interpret and extract information from images and videos, simulating human vision.

Our solution was designed to act as a processing engine for events that arrive at the Cloud and require a Vision operation.

:::info[Looking for the API?]

If you want to access the Vision API documentation directly, [click here](/docs/category/vision-api).

:::

All incoming events are monitored by an agent that goes through several phases:

## 1. Consolidation

All events that arrive at the V3 structure go through an analysis. The event type is verified and whether it has associated media, since the engine needs to discard events that do not have a vision context. For example, a position event (without associated media) does not need to go through the flow.

Next, it waits until the media is available.

:::info[Why hasn't the media arrived yet?]

We work with a decoupled system for sending events and media.

On the device, at the moment an event occurs, the media already exists, but the process of sending the event and the media happens separately and asynchronously. This is because the time to upload media is naturally longer than that of an event (which contains only text), and therefore the TSP can obtain the events first and choose to display them on its platform immediately, or wait for the media to arrive to show only events with media already available.

:::

## 2. Preparation

This is the moment when the flow collects all the data needed to prepare a contract with all the information.

At this stage, the following is retrieved:

1. **Vision Processing Policy** — The definition of which computer vision inferences should be applied for a Tenant, Team, Fleet, or Device. This allows configuration inheritance according to the desired granularity;
2. **Consolidated information** — All event data that originated the media to be analyzed;
3. **Management information** — Details about Drivers, Teams, or Devices that can help compose the computer vision task. For example, you may need data from all drivers who could be driving the vehicle to look up this data in a training database.
4. **Training data** — A collection of trained data for computer vision scenarios. For example, we may have all drivers trained so they can be compared with an event that has just arrived.

## 3. Pipeline

This is when the computer vision engine is actually executed. Based on a contract containing all the information needed for processing, this module will be responsible for:

1. **Validating input** — Verifies that all data is compliant to proceed with processing;
2. **Preparation** — Performs a series of pre-processing steps for the event in question. For example, cropping a specific face in the media or generating a thumbnail that will be made available.
3. **Processing** — This is when the computer vision engine is triggered. It can be composed of one or more submodules that perform inference on what is in the media. According to the processing policy, one or more submodules can be triggered for the same media.
4. **Result** — This is when the generated result is consolidated, saving the information and making it available to Clients.

## What processing is available?

Currently, we use this engine for **driver recognition**. But this structure allows us to include other computer vision flows that may include, for example:

- Passenger Recognition
- Seat Belt Usage
- Road Obstacle Detection
- PPE Usage Detection

:::info[What about custom models?]

At V3, we are always looking for partnerships for new implementations — why not tell us about your needs? Contact our [sales team](mailto:comercial@v3.com.br) directly.

:::

## Vision API

The computer vision module API is quite straightforward and offers resources for:

1. **Dataset training**
   -  Drivers
2. **Media retrieval** (from events or transformed by the vision flow)
   - Media associated with an event (such as an image or video)
   - Media transformed by the Vision flow:
     -  Thumbnails
     -  Crop
     -  Edited Videos (with captions or watermarks)

## How to consume vision data?

For Vision events, all inferences will be returned through Webhooks.

:::info[See how to configure and use the Webhook]

If you want to understand how to configure and use the WebHook notification system, go [here](./notificacoes.md).

:::

## Example Flow (End to End)

Configuration: A device with the driver facial recognition policy enabled so the vision engine processes identification and returns who was driving.

1. In the vehicle, an `IGNITION_ON` (ignition on) event was triggered;
2. This event "carries" a photo with the driver driving the vehicle;
3. This event arrives at **V3CLOUD** through the `Events` context;
   The `Events` context publishes this event to the `Vision` context;
5. **Phase 1 - Consolidation** is processed;
6. **Phase 2 - Preparation** is processed;
7. **Phase 3 - Pipeline** is processed;
8. At this point, the inference of who the driver is is available (if they are trained);
9. A message is published via Webhook to the client, notifying that Event X had a computer vision inference identifying Driver X.

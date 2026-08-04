---
sidebar_position: 13
---

# Notifications

This document describes the webhook notification system, a solution that enables real-time communication between different systems through HTTP notifications. The system was designed to be secure, reliable, and easy to integrate.

:::info[Looking for the API?]

If you want to access the Notifications API documentation directly, [click here](/docs/category/notification-webhook).

:::

## What are Webhooks?

Webhooks are a form of communication between systems where one system (the sender) automatically sends an HTTP notification to another system (the recipient) when a specific event occurs. It is like a "callback" on the web — when something happens in the sender system, it "calls" the recipient system to inform it about the event.

### Webhook Advantages

- **Real Time**: Notifications are sent instantly when an event occurs
- **Efficiency**: No need for constant polling to check for new information
- **Simplicity**: Simple implementation using HTTP, a widely supported protocol
- **Flexibility**: Can be integrated with any system that supports HTTP

## How the System Works

### 1. Client Configuration

To start receiving notifications, the client needs to:

1. Provide an HTTP endpoint that will receive the notifications
2. Configure a secret key for authentication
3. Set a timeout for requests

### 2. Authentication and Security

The system uses `HMAC-SHA256` authentication to ensure notification security:

1. Each notification is signed using the client's secret key
2. The signature is sent in the `X-V3-Signature` header
3. The client must validate the signature to ensure the notification is legitimate

#### How to Validate the Signature (Client Side)

```python
import hmac
import hashlib

def verify_signature(payload, signature, secret):
    # Remove the 'sha256=' prefix if present
    if signature.startswith('sha256='):
        signature = signature[7:]
    
    # Calculate the expected signature
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    # Compare the signatures
    return hmac.compare_digest(signature, expected_signature)
```

### 3. Notification Format

Notifications are sent as HTTP POST requests with the following format:

```json
{
    "id":"Webhook ULID",
    "created_at":"2024-03-21T10:00:00Z", // Webhook creation date
    "attributes":[{}, {}, {}]
}
```

### 4. Responses and Acknowledgments

The system expects an HTTP response from the client:

- **200 OK**: Notification received and processed successfully
- **Other codes**: Indicates there was a problem with processing

The system records all delivery attempts and their responses for auditing and troubleshooting.

## Implementation Best Practices

### Client Side

1. **Idempotency**: Implement your endpoint to be idempotent, as the same notification may be sent more than once
2. **Timeout**: Configure an appropriate timeout to process the notification
3. **Validation**: Always validate the signature before processing the notification
4. **Fast Response**: Respond as quickly as possible, even if full processing takes longer
5. **Logging**: Keep logs of all received notifications

### Implementation Example (Python)

```python
from flask import Flask, request, jsonify
import hmac
import hashlib

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    # Get the signature from the header
    signature = request.headers.get('X-V3-Signature')
    if not signature:
        return jsonify({'error': 'No signature provided'}), 401
    
    # Get the payload
    payload = request.get_data()
    
    # Validate the signature
    if not verify_signature(payload, signature, 'your-secret-key'):
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Process the notification
    try:
        # Your processing code here
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=8080)
```

## Troubleshooting

### Common Issues

1. **Notifications not received**
   -  Check if the endpoint is accessible
   -  Confirm the secret key is correct
   -  Check system logs

2. **Authentication Errors**
   -  Confirm the secret key is correct
   -  Verify the signature is being calculated correctly
   -  Make sure the `X-V3-Signature` header is being sent

3. **Timeouts**
   -  Increase the timeout in the configuration if necessary
   -  Optimize webhook processing to be faster
   -  Consider processing the notification asynchronously

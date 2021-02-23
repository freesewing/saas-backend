#!/bin/bash
curl \
  -H "Content-Type: application/json" \
  --data '{
    "measurements": {
      "biceps": 387,
      "chest": 1105,
      "hips": 928,
      "hpsToWaistBack": 502,
      "neck": 420,
      "shoulderSlope": 13,
      "shoulderToShoulder": 481,
      "waistToHips": 139
    },
    "paperless": true
  }' \
  http://localhost:3000/aaron

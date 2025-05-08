#!/bin/bash

# Exit on error
set -e

# Configuration
PROJECT_ID="your-project-id"  # Replace with your GCP project ID
REGION="us-central1"          # Replace with your preferred region
SERVICE_NAME="hypermind-website"

# Build the container
echo "Building container image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080

echo "Deployment complete!"
echo "Your website should be available at the URL printed above." 
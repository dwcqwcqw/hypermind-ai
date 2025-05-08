# Cloud Deployment Options for Hypermind Website

This document provides instructions for deploying the Hypermind static website to various cloud platforms.

## 1. Google Cloud Run (Recommended)

### Prerequisites
- Google Cloud account
- Google Cloud CLI installed and configured

### Deployment Steps
1. Edit `deploy-to-cloud-run.sh` and update the `PROJECT_ID` with your Google Cloud project ID
2. Run the deployment script:
   ```
   ./deploy-to-cloud-run.sh
   ```
3. Your website will be available at the URL provided in the output

## 2. AWS Amplify

### Prerequisites
- AWS account
- AWS CLI installed and configured

### Deployment Steps
1. Install the Amplify CLI: `npm install -g @aws-amplify/cli`
2. Initialize Amplify: `amplify init`
3. Add hosting: `amplify add hosting`
4. Choose "Manual deployment"
5. Deploy: `amplify publish`

## 3. Netlify

### Prerequisites
- Netlify account (free tier available)
- Netlify CLI (optional)

### Deployment Steps
#### Option 1: Using Netlify UI
1. Go to [Netlify](https://app.netlify.com/)
2. Drag and drop your website folder to the Netlify UI
3. Configure domain settings if needed

#### Option 2: Using Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Initialize: `netlify init`
4. Deploy: `netlify deploy --prod`

## 4. Vercel

### Prerequisites
- Vercel account (free tier available)
- Vercel CLI (optional)

### Deployment Steps
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

## 5. Firebase Hosting

### Prerequisites
- Firebase account
- Firebase CLI installed

### Deployment Steps
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy --only hosting`

## Custom Domain Setup

Once deployed, you can configure a custom domain through your cloud provider's management console. Each platform has specific instructions for setting up custom domains and SSL certificates. 
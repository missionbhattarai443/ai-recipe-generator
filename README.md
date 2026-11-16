# AI Recipe Generator — Mission Bhattarai

CSCE 3420: Serverless Web Application using Generative AI.

Based on the AWS tutorial linked by the professor:
https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/

## Application

React + TypeScript and Vite frontend, AWS Amplify Hosting, Amplify Auth (Amazon Cognito), Amplify Data (AWS AppSync), and an authenticated custom HTTP resolver invoking Amazon Bedrock.

The frontend follows Step 5 and visibly includes Mission Bhattarai's name for the required browser screenshot.

## Compatibility changes approved by the student

- Region: Ohio (us-east-2). The account's service control policy denies Amplify in us-east-1.
- Model: Claude Sonnet 4.6 through its US inference profile. AWS reports that the tutorial's Claude 3.5 Sonnet v2 model has reached end of life.
- Type-only imports and the App import match the current Vite TypeScript starter.
- Returned API errors are displayed so a failed request is visible during verification.
- The generated npm lock file was repaired with npm 10.8.2, matching AWS, to include missing OpenTelemetry dependency entries; package versions were preserved.

## Development

```sh
npm ci
AWS_REGION=us-east-2 npx ampx sandbox
npm run dev
```

The backend deployment generates amplify_outputs.json. This file is deliberately ignored by git. Create an app account, confirm the emailed verification code, sign in, enter ingredients, and select Generate.

Capture the browser screenshot with Mission Bhattarai visible before deleting any resources. Canvas requests the screenshot, not this source code.

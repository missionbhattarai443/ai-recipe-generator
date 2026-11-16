import { defineBackend } from "@aws-amplify/backend";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Stack } from "aws-cdk-lib";
import { data } from "./data/resource";
import { auth } from "./auth/resource";
const backend = defineBackend({ auth, data });
const bedrockDataSource = backend.data.resources.graphqlApi.addHttpDataSource(
  "bedrockDS", "https://bedrock-runtime.us-east-2.amazonaws.com",
  { authorizationConfig: { signingRegion: "us-east-2", signingServiceName: "bedrock" } },
);
bedrockDataSource.grantPrincipal.addToPrincipalPolicy(new PolicyStatement({
  resources: [
    `arn:aws:bedrock:us-east-2:${Stack.of(bedrockDataSource).account}:inference-profile/us.anthropic.claude-sonnet-4-6`,
    "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-sonnet-4-6",
    "arn:aws:bedrock:us-east-2::foundation-model/anthropic.claude-sonnet-4-6",
    "arn:aws:bedrock:us-west-2::foundation-model/anthropic.claude-sonnet-4-6",
  ],
  actions: ["bedrock:InvokeModel"],
}));

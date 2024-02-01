import Vapi from "@vapi-ai/web";
import { envConfig } from "../../config/env.config";

export const vapi = new Vapi(envConfig.vapi.token);

import { serve } from "http/server.ts";

const body = new TextEncoder().encode("Hello World\n");

for await (const req of serve(":8080")) {
    req.respond({ body });
}
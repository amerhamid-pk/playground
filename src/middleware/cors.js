// /src/middleware/cors.js
import { NextResponse } from "next/server";

export function setupCORS(req) {
  const allowedOrigins = ["http://192.168.18.136:3000"];
  const origin = req.headers.get("origin");
  console.log("Request Origin:", origin);

  // Handle cases where origin is null
  if (origin === "null" || !origin) {
    console.warn("CORS Warning: Null or missing origin. Allowing for localhost development.");
    const headers = new Headers(req.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return new NextResponse(null, { headers });
  }

  // Check if origin is in the allowed list
  if (!allowedOrigins.includes(origin)) {
    console.error("CORS Error: Origin not allowed or missing:", origin);
    return NextResponse.json(
      { error: "CORS policy does not allow this origin" },
      { status: 403 }
    );
  }

  // Set CORS headers for allowed origins
  const headers = new Headers(req.headers);
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new NextResponse(null, { headers });
}

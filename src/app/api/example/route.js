// /src/app/api/example/route.js

import { setupCORS } from "@/middleware/cors";
import { NextResponse } from "next/server";

export async function OPTIONS(req) {
  // Handle CORS preflight request
  return setupCORS(req);
}

export async function GET(req) {
  const corsResponse = setupCORS(req);
  if (corsResponse.status === 403) return corsResponse;

  console.log("API route called");
  console.log("Authorized access");

  return NextResponse.json({ message: "This is a protected API route" });
}




// // src/app/api/example/route.js

// import { NextResponse } from 'next/server';

// export async function GET(request) {
//   console.log('API route called');
  

//   console.log('Authorized access');
//   return NextResponse.json({ message: 'This is a protected API route' });
// }


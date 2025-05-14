export const config = {
  runtime: "edge", // Required to access `env`
};

// export default {
//   async fetch(request, env) {
//     const result = await env.DB.prepare(
//       "SELECT value FROM SampleTable"
//     ).first();
//     return new Response(result?.value || "Not found");
//   },
// };
// app/api/test/route.js
export function GET() {
  console.log("GET /api/test called");
  const result = env.DB.prepare("SELECT value FROM SampleTable").first();
  console.log(result);

  return new Response(result?.value || "Not found");
}

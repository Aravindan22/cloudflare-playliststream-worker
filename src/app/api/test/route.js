import withEnv from "@/lib/withEnv";
const db = process.env.DATABASE;
export const GET = withEnv(async (req, { env }) => {
  const result = await db.prepare("SELECT * FROM SampleTable").all();
  console.log(result);

  return new Response(JSON.stringify(result));
});

// // app/api/test/route.js
// export function GET() {
//   console.log("GET /api/test called");
//   const result = env.DB.prepare("SELECT value FROM SampleTable").first();
//   console.log(result);

//   return new Response(result?.value || "Not found");
// }

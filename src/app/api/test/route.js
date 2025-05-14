export const config = {
  runtime: "edge", // Required to access `env`
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/query") {
      const result = env.DB.prepare("SELECT value FROM SampleTable").first();
      console.log(result);
      return new Response(JSON.stringify(result));
    }

    return new Response("Not found", { status: 404 });
  },
};

// // app/api/test/route.js
// export function GET() {
//   console.log("GET /api/test called");
//   const result = env.DB.prepare("SELECT value FROM SampleTable").first();
//   console.log(result);

//   return new Response(result?.value || "Not found");
// }

export const config = {
  runtime: "edge", // Required to access `env`
};

export default {
  async fetch(request, env) {
    const result = await env.DB.prepare(
      "SELECT value FROM SampleTable"
    ).first();
    return new Response(result?.value || "Not found");
  },
};

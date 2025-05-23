// src/lib/withEnv.ts

export default function withEnv(handler) {
  return async (req) => {
    const env = globalThis.__ENV__;

    if (!env) {
      return new Response("env not found", { status: 500 });
    }

    return handler(req, { env });
  };
}

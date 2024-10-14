import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    console.log(name);
    if (url.pathname === "/") {
      return new Response(`Hello ${name}`, { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response(`Login ${name}`, { status: 200 });
    } else {
      return new Response(`404 Not Found`, { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});

//install bun
// bun filename

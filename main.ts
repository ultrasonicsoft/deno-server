import { serve } from "https://deno.land/std@v0.12/http/server.ts";
import { UserService } from "./user.service.ts";

const userService = new UserService();
const allUsers = userService.getMockUsers();
// const body = new TextEncoder().encode("Jai Ganesh\n");
const body = new TextEncoder().encode(JSON.stringify(allUsers));

const s = serve(":8000");
serve
window.onload = async () => {
  console.log("http://localhost:8000/");
  for await (const req of s) {
    req.respond({ body });
  }
};
// import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";
// import { opineCors } from "https://deno.land/x/cors@v1.2.1/mod.ts";

import { opine, opineCors } from './deps.ts'

const app = opine();

app.use(opineCors());

app.get("/", function (_, res) {
  res.send("Hello Deno!");
});

app.listen(4000, () => console.log("Opine started on port 4000"));

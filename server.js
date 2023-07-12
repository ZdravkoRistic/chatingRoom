const express = require("express");
const app = express();
const port = 3000; // Promenite broj porta ako je već zauzet

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server je pokrenut na http://localhost:${port}`);
});

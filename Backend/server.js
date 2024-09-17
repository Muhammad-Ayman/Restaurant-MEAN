import http from "http";

const app = http.createServer((req, res) => {
  console.log(req.url);
});

app.listen(4000, () => {
  console.log("listeing");
});

import http from "http";
import dotenv from "dotenv";
dotenv.config();


let users = ["hello"];
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {


 if (req.url === "/" && req.method === "GET") {
   res.end(JSON.stringify(users));
 }


 else if (req.url === "/users" && req.method === "POST") {
 let body = ""; // initialize as empty string
 req.on("data", chunk => {
   body += chunk; // append chunks
 });
 req.on("end", () => {
   try {
     const user = JSON.parse(body); // parse JSON safely
     users.push(user);
res.writeHead(201, { "Content-Type": "application/json" });
     res.end(JSON.stringify({ message: "User added", user }));
   } catch (err) {
     res.writeHead(400, { "Content-Type": "application/json" });
     res.end(JSON.stringify({ error: "Invalid JSON" }));
   }
 });
}
else if (req.url.startsWith("/users") && req.method === "DELETE") {
   users.pop();
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(JSON.stringify({ message: "User deleted", users }));
 }
});


server.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});

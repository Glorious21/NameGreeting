import express from 'express'; // create a server - handle routes and send responses to the browser  
import bodyParser from 'body-parser'; // parse incoming request bodies in a middleware before your handlers, available under the req.body property
import { fileURLToPath } from 'url'; // The fileURLToPath() method returns the file path corresponding to the given file URL string. It is used to convert a file URL into a file path that can be used in the filesystem.
import { dirname } from 'path'; // The dirname() method returns the directory name of a path, which is the part of the path that comes before the last directory separator. It is used to get the directory portion of a file path.

const __dirname = dirname(fileURLToPath(import.meta.url)); // The __dirname variable is a special variable in Node.js that contains the directory name of the current module. It is used to get the absolute path of the directory where the current JavaScript file is located. This is particularly useful when you need to work with file paths, such as when serving static files or reading files from the filesystem, as it allows you to construct paths relative to the current file's location without hardcoding absolute paths.


const app = express(); // 
const port = 3000;

var username = " ";

app.use(bodyParser.urlencoded({ extended: true }));

function Bandgenerator(req, res ,next) {
  console.log("Request received:", req.method, req.url);
  next(); // VERY important
};


app.use(Bandgenerator);




app.get("/", (req, res) => {
  res.sendFile(__dirname + "/greeting.html");
}); 

app.post("/greet", (req, res) => {
  const name = req.body.username
   res.send(`
    <h1>Hello ${name} 👋</h1>
   `);
   });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});     
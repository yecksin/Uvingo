import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar datos en formato JSON
app.use(bodyParser.json());

// Ruta de ejemplo para hacer una petición a otra API
app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al hacer la petición" });
  }
});

app.get("/mio", async (req, res) => {
  try {
    const response = await axios.get(
      "https://servicios.siur.com.co//saldo/js/cliete.php?card=22222222&type=2"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al hacer la petición" });
  }
});

// Ruta de ejemplo para mostrar un mensaje en la raíz del sitio
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

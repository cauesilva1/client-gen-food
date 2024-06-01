const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve os arquivos estáticos da pasta build do React
app.use(express.static(path.join(__dirname, 'build')));

// Rota para servir a aplicação React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

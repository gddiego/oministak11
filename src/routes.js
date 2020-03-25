const express = require('express');

const routes = express.Router();

app.post('./users', (request, response) => {
  const body = require.body;

  console.log(body);

  return response.json({
    evento: 'semana omnistak',
    alluno: 'diego Mendes'
  });
});

app.listen(3333);

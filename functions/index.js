// Todo esto corresponde a Back-End
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express'); // Servidor en Node que sirve para solicitudes HTTP
const cors = require('cors');       // Permite recibir solicitudes de otros dominios
const app = express();              // Automatically allow cross-origin requestsrouter.use(cors({ origin: true }));
app.use(cors({ origin: true }));

// End Point de Express
app.get('/beers', async (req, res) =>
{
  const beers = await admin.firestore().collection('beers').get()
  const list = []
  beers.docs.forEach(doc =>
  {
    list.push({
      id: doc.id,
      data: doc.data()
    })
  })
  res.send(list)
})

app.get('/beers/:id', async (req, res) =>
{
  const beer = await admin.firestore().collection('beers').doc(req.params.id).get().then((doc) =>
  {
    if (doc.exists) {
      return {
        id: doc.id,
        data: doc.data()
      } 
    } else {
      return {}
    }
  })
  res.send(beer)
})

app.post('/beers/', async (req, res) =>
{
  const beer = await admin.firestore().collection('beers').add(req.body).then((doc) =>
  {
    return doc.id
  })
  res.send(beer)
})
exports.api = functions.https.onRequest(app)
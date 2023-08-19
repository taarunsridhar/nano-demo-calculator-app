const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    var greetingMessage = 'Hello world!'
    return res.send(greetingMessage);
});

baseRouter.post('/add', (req, res) => {
    var firstNumber = req.body.first;
    var secondNumber = req.body.second;
    var answer = firstNumber + secondNumber;
    res.json({"result": answer });
});


baseRouter.post('/subtract', (req, res) => {
    var firstNumber = req.body.first;
    var secondNumber = req.body.second;
    var answer = Math.abs(firstNumber - secondNumber);
    res.json({"result": answer });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
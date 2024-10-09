const express = require('express');
const app = express();
const bodyParser = require('body-parser');

function containsOnlyDigits(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});
app.post('/',(req, res) =>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
if(containsOnlyDigits(n1) && containsOnlyDigits(n2)){
   n1 = parseInt(n1);
   n2 = parseInt(n2);
   res.send(`The Sum of ${n1} and ${n2} is <br> ${n1+n2}`);
}
else{
    res.send('Error: Please enter only numbers.'); 
}
});
app.listen(3000, function() {
    console.log('listening on port 3000');
});

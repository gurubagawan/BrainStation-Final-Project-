const express = require('express'),
    app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var apiKey1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cnUuYmFnYXdhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMyOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6Ijk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAwMC0wMS0wMSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUwMzcwMjIwNywibmJmIjoxNTAzNjk1MDA3fQ.xUdy2MdDQj4GSnxhp_MgWL2D5u0jE_t8dHbWEHrPRE4'


const urlsymptoms = `https://healthservice.priaid.ch/symptoms?token=${apiKey1}&language=en-gb&format=json`

var allSymptoms = []

app.get('/bodyarea/:id', function (req, res) {
    //var apikey1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cnUuYmFnYXdhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjIwMzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTctMDgtMTQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUwMzI2NjU4MSwibmJmIjoxNTAzMjU5MzgxfQ.htoyeDzJ1EJl6935PH1tPU640wdGIF82iudycBvteN8'
    var bodyParts = []
    let bodyRegion = req.params.id
    let bodyURL = `https://healthservice.priaid.ch/body/locations/${bodyRegion}?token=${apiKey1}&language=en-gb&format=json`
    axios.get(bodyURL)
        .then(function (response) {
            bodyParts = (response.data); 
            console.log(typeof (bodyParts))
            res.send(bodyParts)
        })
        .catch(function (error) {
            console.log('Error! in body sub area get' + error)
        })
})

app.get('/bodypart/:specbodypart/:gender', function (req, res) {
    //var apikey1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cnUuYmFnYXdhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjIwMzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTctMDgtMTQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUwMzI2NjU4MSwibmJmIjoxNTAzMjU5MzgxfQ.htoyeDzJ1EJl6935PH1tPU640wdGIF82iudycBvteN8'
    var partSymptoms = []
    let partID = req.params.specbodypart
    let gender = req.params.gender
    let bodyURL = `https://healthservice.priaid.ch/symptoms/${partID}/${gender}?token=${apiKey1}&language=en-gb&format=json`
    axios.get(bodyURL)
        .then(function (response) {
            partSymptoms = (response.data);
            //console.log('get request was made')
            console.log(partSymptoms)
            res.send(partSymptoms)
        })
        .catch(function (error) {
            console.log('Error! in symptoms get' + error)
        })
})

app.get('/diagnosis/:gender/:birthYear/:IDS', function (req, res) {
    let symptoms = req.params.IDS
    let gender = req.params.gender
    let yearOfBirth = req.params.birthYear
    let bodyURL = `https://healthservice.priaid.ch/diagnosis?token=${apiKey1}&symptoms=[${symptoms}]&year_of_birth=${yearOfBirth}&language=en-gb&gender=${gender}&format=json`
    //`https://sandbox-healthservice.priaid.ch/diagnosi${partID}/${gender}?token=${apiKey1}&language=en-gb&format=json`
    axios.get(bodyURL)
        .then(function (response) {
            partSymptoms = (response.data);
            console.log(partSymptoms)
            res.send(partSymptoms)
        })
        .catch(function (error) {
            console.log('Error! in diagnosis get' + error)
        })
})

app.get('/moreInfo/:gender/:birthYear/:ID', function (req, res) {
    let disease = req.params.ID
    let gender = req.params.gender
    let yearOfBirth = req.params.birthYear
    console.log(disease)
    console.log(gender)
    console.log(yearOfBirth)
    let bodyURL = `https://healthservice.priaid.ch/issues/${disease}/info?token=${apiKey1}&year_of_birth=${yearOfBirth}&language=en-gb&gender=${gender}&format=json`
    //`https://sandbox-healthservice.priaid.ch/diagnosi${partID}/${gender}?token=${apiKey1}&language=en-gb&format=json`
    axios.get(bodyURL)
        .then(function (response) {
            disInfo = (response.data);
            console.log(disInfo)
            res.send(disInfo)
        })
        .catch(function (error) {
            console.log('Error! in diagnosis get' + error)
        })
    //res.send(bodySymptoms)
})

// http://localhost:8080/diagnosis/${this.props.symptomIDs}
app.listen(8080, () => {
    console.log('MedApp is listening')
})


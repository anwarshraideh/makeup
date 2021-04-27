'use strict';


require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const methodOverride = require('method-override');
const pg = require('pg');


const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');


// const client = new pg.Client(process.env.DATABASE_URL);

// const client = new pg.Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

const client = new pg.Client( { connectionString: process.env.DATABASE_URL, ssl: process.env.LOCALLY ? false : {rejectUnauthorized: false}} );


app.get('/',homeHandeler);

function homeHandeler(req,res) {

    res.render('pages/index');
    
}



app.get('/product',getTheProduct);

function getTheProduct(req,res) {

    let brand =req.query.brand;
    let lessthan =req.query.lessthan;
    let greaterthan=req.query.greaterthan;


    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&price_greater_than=${lessthan}&price_less_than=${greaterthan}`;

    superagent.get(url)
    .then(result=>{

        let resultBody=result.body;
        
        let productArr = resultBody.map(Element=>{
            return new  Product (Element);

        });

        res.render("pages/showProducts",{ data : productArr});
    })
    
}

app.get ('/saveToDb',insertHandler);

function insertHandler(req,res) {

    const {name,price,image_link,description} = req.body;
    let safeValues = [name,price,image_link,description];
    let sql = 'INSERT INTO table1 (name,price,image_link,description) VALUES ($1,$2,$3,$4);';

    client.query(sql,safeValues)
    .then(()=>{
        res.redirct('/myProduct');
    })
    
}

app.get ('/myProduct',getMyFavProduct);

function getMyFavProduct(req,res) {

    let sql='SELECT * FROM table1';

    client.query(sql)
    .then(result=>{
        res.render('pages/fav',{ favProducts : result.rows});

    });
    
}

app.get('/productDetails/:id',renderdetails);

function renderdetails(req,res) {

    let id =req.params.id;
    let sql = 'SELECT * FROM table1 WHERE id=$1;';
    let safe =[id];

    client.query(sql,safe)
    .then(result=>{

        res.render('pages/details',{ data : result.rows});
    });
    
}

app.put('/productDetails/:id',Updatedetails);
app.delete('/productDetails/:id',Deletedetails);

function Updatedetails(req,res) {

    let id =req.params.id;
    const {name,price,image_link,description} = req.body;
    let safeValues = [name,price,image_link,description];
    let sql ='UPDATE table1 SET name=$1,price=$2,image_link=$3,description=$4 WHERE id=$5;';

    client.query(sql,safeValues)
    .then(()=>{

        res.redirect(`/productDetails/${id}`);

    });

}


function Deletedetails(req,res) {

    let id = req.params.id;
    let safe=[id];
    let sql='DELET FROM table1 WHERE id=$1;';

    client.query(sql,safeValues)
    .then(()=>{

        res.redirect('/myProduct');

    });


}


function Product(pinfo) {
    this.name = pinfo.name;
    this.price =pinfo.price;
    this.image_link =pinfo.image_link;
    this.description=pinfo.description;
}




client.connect()
.then(()=>{

    app.listen(PORT,()=>{
        console.log(`listening tp PORT ${PORT}`);
    });
})
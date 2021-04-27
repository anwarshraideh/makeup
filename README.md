# makeup exam

401 Entrance Exam
Instructions:
Make sure before starting to:
Turn off any means of communication (phone, Slack, Email).
Start your screen recording and share your face camera.
You are not allowed to use previous projects, notes, or GitHub.
You can use Google search engine.
Create a new repository on your GitHub.
Requirements:
You will create a webapp to provide the users with all the products from Maybelline brand that are retrieved from Make-up API (Links to an external site.)

In the Home Page, the user wants to have the ability to get the products that are between a range of prices for Maybelline brand using this endpoint (Links to an external site.). You will change the parameter values based on the user inputs in the form. Once the user fills in the form then should be redirected to the Product By Price page, where the results should be displayed as cards with name, price, image, and description. (12 points)

In the Maybelline Products page, the user wants to get all Maybelline products that are retrieved from this endpoint (Links to an external site.). The results should be displayed as cards (each card should have these data: name, price, image, description, and add-to-card button). You have to use a CONSTRUCTOR function to construct the objects. when the user clicks on the 'add-to-card' button then this record should be added to the database and be redirected to the My Products page. (28 points)

In the My Card page, the user wants to view all the records that are retrieved from the database and displayed as cards (Each card should have the name, price, image, and View-Details button). If there is no data in the database, then No Products in Your Card should be rendered. Once the user clicks on the 'View-Details' button then should be redirected to the Product Details page. (12 points)

In the Product Details page, the user wants to view the selected product details from the database(name, price, image, description, Update and Delete buttons). (10 points)

In the Product Details page, When the user clicks on the 'Delete' button, the record should be deleted from the database and be redirected to the My Products page. Also, when the user clicks on the 'UPDATE' button, an update form will be shown where the user can update the data in the database and should be redirected to the same page Record Details. (10 points)

The user should have a simple UI design (using Flexbox or Grid for all the cards in the webapp). (5 points)

Deploy your webapp on Heroku. (5 points)

Keep your code clean, also use proper naming for both variables and functions (idiomatic style) and proper indentation. (3 points)

Full run webapp. (6 points)

You should follow the provided wireframe structure in your webapp.

Resources
You can use any technology you've learned during the code 301 course to achieve the above requirements.
You can use this SQL cheat sheet (Links to an external site.).
For connecting to the database you can use:
for MAC   postgres://localhost:5432/DBNAME
for WIN   postgresql://username:password@localhost:5432/DBNAME
For connecting the schema to your database    psql -f <path/to/schemaFile> -d <database-name>
For connecting the schema to Heroku     heroku pg:psql -f <path/to/schemaFile> -a <heroku-app-name>
If you face any connection issues to the database, don't forget to start your Postgres server:
for MAC     brew services start postgresql
for WIN  sudo service postgresql start
If you use WSL and have weird issues with your server, you can use this command  killall -s KILL node. keep using ctrl+c
**** Useful Express Codes ****
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);
const client = new pg.Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
const client = new pg.Client( { connectionString: process.env.DATABASE_URL, ssl: process.env.LOCALLY ? false : {rejectUnauthorized: false}} );
Libraries Resources
Express (Links to an external site.)
Dotenv (Links to an external site.)
Pg (Links to an external site.)
Ejs (Links to an external site.)
Method-override (Links to an external site.)
Superagent (Links to an external site.)
JQuery (Links to an external site.)
Submission Instructions:
Submit the link to your GitHub repo for this project.
Submit the Heroku link for the project.
After completing the exam, do NOT commit or push anything to your repo.
Send the recorded video to your instructor on Slack.

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use( '/', express.static( __dirname + '/dist' ) );
app.use(cors({
    origin: "http://localhost:8080"
}));

let db = {
    y2019: {
        january: {
            items: [
                { description: 'January 2019', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        feburary: {
            items: [
                { description: 'Feburary', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        march: {
            items: [
                { description: 'March', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        april: {
            items: [
                { description: 'April', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    },
    y2019: {
        january: {
            items: [
                { description: 'January 2019', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        feburary: {
            items: [
                { description: 'Feburary', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        march: {
            items: [
                { description: 'March', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        april: {
            items: [
                { description: 'April', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    },
    y2020: {
        january: {
            items: [
                { description: 'January 2020', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        feburary: {
            items: [
                { description: 'Feburary', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        march: {
            items: [
                { description: 'March', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        april: {
            items: [
                { description: 'April', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    },
    y2021: {
        january: {
            items: [
                { description: 'January 2021', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        feburary: {
            items: [
                { description: 'Feburary', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        march: {
            items: [
                { description: 'March', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        april: {
            items: [
                { description: 'April', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    },
    y2022: {
        january: {
            items: [
                { description: 'January 2022', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        feburary: {
            items: [
                { description: 'Feburary', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        march: {
            items: [
                { description: 'March', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        april: {
            items: [
                { description: 'April', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    }
}

// `:userId` is a route parameter. Express will capture whatever
// string comes after `/user/` in the URL and store it in
// `req.params.userId`
// app.get('/user/:userId', (req, res) => {
//     req.params; // { userId: '42' }
//     res.json(req.params);
// });

app.get("/:month/:year", function (req, res) {
    // month = req.params.month
    // year = req.params.year
    res.send( db[ "y" + req.params.year ][ req.params.month ] );
    // res.send( db["y"+req.params.year][req.params.month] );
});

// app.get("/", function (req, res) {
//     console.log('hit')
//     res.sendFile(__dirname + "/index.html");
// });

app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
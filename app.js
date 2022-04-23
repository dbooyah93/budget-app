const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use( '/', express.static( __dirname + '/dist' ) );
app.use(cors({
    origin: "http://localhost:8080"
}));

let db = {
    y2018: {
        january: {
            items: [
                { description: 'January 2018', cost: 9.39, date: "1/2/2022", category: "Groceries"},
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
        },
        may: {
            items: [
                { description: 'May', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        june: {
            items: [
                { description: 'june', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        july: {
            items: [
                { description: 'July', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        august: {
            items: [
                { description: 'August', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        september: {
            items: [
                { description: 'September', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        october: {
            items: [
                { description: 'October', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        november: {
            items: [
                { description: 'November', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        december: {
            items: [
                { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
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
        },
        may: {
            items: [
                { description: 'May', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        june: {
            items: [
                { description: 'june', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        july: {
            items: [
                { description: 'July', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        august: {
            items: [
                { description: 'August', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        september: {
            items: [
                { description: 'September', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        october: {
            items: [
                { description: 'October', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        november: {
            items: [
                { description: 'November', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        december: {
            items: [
                { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
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
        },
        may: {
            items: [
                { description: 'May', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        june: {
            items: [
                { description: 'june', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        july: {
            items: [
                { description: 'July', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        august: {
            items: [
                { description: 'August', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        september: {
            items: [
                { description: 'September', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        october: {
            items: [
                { description: 'October', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        november: {
            items: [
                { description: 'November', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        december: {
            items: [
                { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
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
        },
        may: {
            items: [
                { description: 'May', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        june: {
            items: [
                { description: 'june', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        july: {
            items: [
                { description: 'July', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        august: {
            items: [
                { description: 'August', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        september: {
            items: [
                { description: 'September', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        october: {
            items: [
                { description: 'October', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        november: {
            items: [
                { description: 'November', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        december: {
            items: [
                { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
    },
    y2022:{
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
        },
        may: {
            items: [
                { description: 'May', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        june: {
            items: [
                { description: 'june', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        july: {
            items: [
                { description: 'July', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        august: {
            items: [
                { description: 'August', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        september: {
            items: [
                { description: 'September', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        october: {
            items: [
                { description: 'October', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        november: {
            items: [
                { description: 'November', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
        december: {
            items: [
                { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        },
    },
}

// `:userId` is a route parameter. Express will capture whatever
// string comes after `/user/` in the URL and store it in
// `req.params.userId`
// app.get('/user/:userId', (req, res) => {
//     req.params; // { userId: '42' }
//     res.json(req.params);
// });
let fakeDB = []
let months = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'december'];

app.get("/:month/:year", function (req, res) {
    res.json( db[ "y" + req.params.year ][ req.params.month ] );
});

app.post("/:day/:month/:year", function ( req, res ) {
    // will need a query to run this
    let postItem = function ( liObjectArr ) {
        console.log({liObjectArr})
        console.log(db['y' + liObjectArr.year][months[liObjectArr.month]])
        db['y' + liObjectArr.year][months[liObjectArr.month]].items.push(
            { description: 'December', cost: 9.39, date: "1/2/2022", category: "Groceries"},
            { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
            { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
            { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
            { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
        )
        // currently works as intended
        return;
        fakeDB = liObjectArr;
        db.y2018.january.items[0].description = "Success";
        console.log(db.y2018.january.items[0]);
        console.log(fakeDB);
    }
    // removed console.log(req);
    postItem(req.params);
    res.send('ok')
});

app.listen(PORT, '192.168.86.23', function () {
    console.log("Server is running on http://192.168.86.23:" + PORT);
});
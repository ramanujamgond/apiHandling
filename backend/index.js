import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            "id": 1,
            "name": "table wooden",
            "price": 200,
            "image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 2,
            "name": "rectangular brown wooden table",
            "price": 220,
            "image": "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 3,
            "name": "white wooden table",
            "price": 250,
            "image": "https://images.pexels.com/photos/374139/pexels-photo-374139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 4,
            "name": "round black wooden table",
            "price": 280,
            "image": "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 5,
            "name": "wooden table with plants",
            "price": 210,
            "image": "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 6,
            "name": "brown wooden table in front of window",
            "price": 230,
            "image": "https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 7,
            "name": "wooden table with bench",
            "price": 260,
            "image": "https://images.pexels.com/photos/20345106/pexels-photo-20345106/free-photo-of-bench-with-pillows-and-table-in-room.jpeg"
        },
        {
            "id": 8,
            "name": "wooden table with laptop",
            "price": 240,
            "image": "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            "id": 9,
            "name": "wooden dining table",
            "price": 300,
            "image": "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 10,
            "name": "wooden table with coffee",
            "price": 190,
            "image": "https://images.pexels.com/photos/24356213/pexels-photo-24356213/free-photo-of-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    if (req.query.search) {
        const filterProducts = products.filter((product) => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);


});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
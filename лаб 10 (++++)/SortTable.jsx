import React from "react";

export class SortTable extends React.Component
{
    goods = [
        {
            name: 'Butter',
            price: '235',
            in_stock: 99,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'sadfasd',
            new: true,
            discount: 10,
        },
        {
            name: 'Cheese',
            price: '1500',
            in_stock: 20,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'adsfasdf',
            new: false,
            discount: 50,
        },
        {
            name: 'Fancy French Cheese',
            price: '10000',
            in_stock: 0,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'',
            new: true,
            discount: 10,
        },
        {
            name: 'Heavy Cream',
            price: '746',
            in_stock: 2,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'',
            new: false,
            discount: 25,
        },
        {
            name: 'Milk',
            price: '865',
            in_stock: 1,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'',
            new: false,
            discount: 30,
        },
        {
            name: 'Sour Cream',
            price: '540',
            in_stock: 3,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'',
            new: false,
            discount: 40,
        },
        {
            name: 'Yoghurt',
            price: '120',
            in_stock: 12,
            img:'https://dictionary.cambridge.org/ru/images/thumb/butter_noun_002_05056.jpg?version=5.0.250',
            description:'',
            new: false,
            discount: 80,
        },
    ]

    render() {
        return null
    }
}
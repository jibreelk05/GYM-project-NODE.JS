const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/', async (req, res) => {

    try {

        const items = await Item.find();

        res.render('items', {
            title: 'Equipments',
            itemsitems: items
        });

    } catch (error) {

        console.log(error);

        res.send('Error loading items');

    }

});

router.get('/:id', async (req, res) => {

    try {

        const itemId = req.params.id;

        const item = await Item.findById(itemId);

        if (!item) {
            return res.status(404).render('404', {
                title: 'Item Not Found'
            });
        }

        res.render('itemsdetail', {
            title: item.name,
            item: item
        });

    } catch (error) {

        console.log(error);

        res.send('Error loading item');

    }

});

module.exports = router;
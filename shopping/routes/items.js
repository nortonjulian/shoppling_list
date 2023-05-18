
const express = require("express");
const router = new express.Router()


router.get("/items", function(req, res){
    req.json({items})
})

router.post("/items", function(req, res){
    const newItem = { name: req.body.name }
    items.push(newItem)
    res.status(201).json({ item: newItem })
})

router.get("/items/:name", function(req, res){
    const foundItem = items.find(item => item.name === req.params.name)
    if(foundItem === undefined){
        throw new ExpressError("Item not found", 404)
    }
    res.json({ item: foundItem })
})

router.patch("/items/:name", function(req, res){
    const foundItem = items.find(item => item.name === req.params.name)
    if(foundItem === undefined){
        throw new ExpressError("Item not found", 404)
    }
    foundItem.name = req.body.name;
    res.json({ item: foundItem })
})

router.delete("/items/:name", function(req, res){
    const foundItem = items.findIndex(item => item.name === req.params.name)
    if(foundItem === -1){
        throw new ExpressError("Item not found", 404)
    }
    items.splice(foundItem, 1)
    res.json({ message: "Deleted" })
})

module.exports = router

const express = require("express");

const router = express.Router();

const Users = require("../user/users-model.js");

const restricted = require("../auth/restricted.js");

router.get("/", restricted, (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error getting the users."})
    })
})

router.get("/:id", restricted, (req, res) => {
    Users.getById(req.params.id)
    .then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({error: "The user with the specified ID does not exist." })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
})

router.put("/:id", (req, res) => {
    Users.update(req.params.id, req.body)
    .then(user => {
        if(user) {
            res.status(200).json({message: "User updated."})
        } else {
            res.status(404).json({error: "The user could not be found."})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: "Error updating the hub."})
    })
})

router.delete("/:id", restricted, (req, res) => {
    Users.getById(req.params.id)
    .then(user => {
        if (user.length != 0) {
            Users.remove(req.params.id)
            .then(deleted => {
                res.status(200).json({message: "User deleted."})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: "The user could not be removed." })
            })
        } else {
            res.status(404).json({error: "The user with the specified ID does not exist." })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: "The user could not be removed." })
    })
})

module.exports = router;
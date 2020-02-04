const db = require("../data/db-config.js");

module.exports = {
    get,
    getBy,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db("users")
        .select("id", "email", "password");
}

function getBy(filter) {
    return db("users")
        .where(filter);
}

function getById(id) {
    return db("users")
    .select("id", "email", "password")
        .where({id})
        .first();
}

function insert(user) {
    return db("users")
    .insert(user, "id")
    .then(ids => {
        const [id] = ids;
        return getById(id)
    })
}

function update(id, changes) {
    return db("users")
        .where({id})
        .update(changes)
}

function remove(id) {
    return db("users")
        .where("id", id)
        .del();
}
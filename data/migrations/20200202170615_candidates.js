
exports.up = function(knex) {
    return knex.schema.createTable("candidates", tbl => {
        tbl.increments();
        tbl.string("name")
            .notNullable();
        tbl.string("twitter_handle")
            .notNullable()
            .unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("candidates");
};

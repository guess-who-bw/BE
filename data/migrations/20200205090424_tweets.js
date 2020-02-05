
exports.up = function(knex) {
    return knex.schema.createTable("tweets", tbl => {
        tbl.increments();
        tbl.string("tweet", 290)
            .notNullable();
        tbl.integer("candidate_id")
            .unsigned().notNullable()
            .references('id').inTable('candidates')
            .onDelete()
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("candidates");
};

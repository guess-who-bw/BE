
exports.up = function(knex) {
    return knex.schema.table("users", tbl => {
      tbl.integer("points")
        .default(0);
    })
  };
  
exports.down = function(knex) {
    return knex.schema.table("users", tbl => {
        tbl.dropColumn("points");
    })
};
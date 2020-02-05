exports.up = function(knex) {
    return knex.schema.table("candidates", tbl => {
      tbl.string("picture_url");
    })
  };
  
exports.down = function(knex) {
    return knex.schema.table("candidates", tbl => {
        tbl.dropColumn("picture_url");
    })
};
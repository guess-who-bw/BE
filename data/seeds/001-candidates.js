
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidates')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('candidates').insert([
        {
          id: 1, 
          name: 'Bernie Sanders',
          twitter_handle: 'BernieSanders'
        },
        {
          id: 2, 
          name: 'Elizabeth Warren',
          twitter_handle: 'ewarren'
        },
        {
          id: 3, 
          name: 'Andrew Yang',
          twitter_handle: 'AndrewYang'
        },
        {
          id: 4, 
          name: 'Joe Biden',
          twitter_handle: 'JoeBiden'
        },
        {
          id: 5, 
          name: 'Donald Trump',
          twitter_handle: 'realDonaldTrump'
        }
      ]);
    });
};

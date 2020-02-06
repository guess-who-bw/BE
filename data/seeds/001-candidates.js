
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
          handle: 'BernieSanders',
          picture_url: "https://i.imgur.com/ouzOCeg.png"
        },
        {
          id: 2, 
          name: 'Elizabeth Warren',
          handle: 'ewarren',
          picture_url: "https://i.imgur.com/V5MJXAU.jpg"
        },
        {
          id: 3, 
          name: 'Andrew Yang',
          handle: 'AndrewYang',
          picture_url: "https://i.imgur.com/peL7sQJ.jpg"
        },
        {
          id: 4, 
          name: 'Joe Biden',
          handle: 'JoeBiden',
          picture_url: "https://i.imgur.com/e6XiVjH.jpg"
        },
        {
          id: 5, 
          name: 'Donald Trump',
          handle: 'realDonaldTrump',
          picture_url: "https://i.imgur.com/paFA0Wo.jpg"
        }
      ]);
    });
};

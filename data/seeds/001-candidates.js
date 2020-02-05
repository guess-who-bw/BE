
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
          picture_url: "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png"
        },
        {
          id: 2, 
          name: 'Elizabeth Warren',
          handle: 'ewarren',
          picture_url: "https://pbs.twimg.com/profile_images/1215406626049413121/LiVKh64l_400x400.jpg"
        },
        {
          id: 3, 
          name: 'Andrew Yang',
          handle: 'AndrewYang',
          picture_url: "https://pbs.twimg.com/profile_images/1224611308487741440/ImUlMyTg_400x400.jpg"
        },
        {
          id: 4, 
          name: 'Joe Biden',
          handle: 'JoeBiden',
          picture_url: "https://pbs.twimg.com/profile_images/1223955397008068614/6j51JwXU_400x400.jpg"
        },
        {
          id: 5, 
          name: 'Donald Trump',
          handle: 'realDonaldTrump',
          picture_url: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
        }
      ]);
    });
};

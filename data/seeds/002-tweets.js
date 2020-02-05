exports.seed = function(knex) {
  return knex('tweets')
  .truncate()
    .then(function () {
      return knex('tweets').insert([
        {
          tweet: 'Heading to Davos, Switzerland, to meet with World and Business Leaders and bring Good Policy and additional Hundreds of Billions of Dollars back to the United States of America! We are now NUMBER ONE in the Universe, by FAR!!',
          candidate_id: 5
        },
        {
          tweet: 'My first executive orders will be to reverse every single thing President Trump has done to demonize and harm immigrants, including his racist and disgusting Muslim ban.',
          candidate_id: 1
        },
        {
          tweet: 'Let’s remember one thing when it comes to impeachment: Donald Trump is on trial because he’s afraid to run against me. He knows I’ll beat him this November.',
          candidate_id: 4
        },
        {
          tweet: 'People told me the CFPB could never happen, but it did. I was proud to fight alongside President @BarackObama for middle-class families. I know how to fight—and I know how to win.',
          candidate_id: 2
        },
        {
          tweet: `Ultimately, what you do—coming to town halls, knocking on doors, calling voters—is an act of optimism. It's an act that says: If we get out there and fight from the heart, we'll save our democracy and our country. I believe in that optimism. That's why I'm in this fight.`,
          candidate_id: 2
        },
        {
          tweet: `Now is our moment to choose the future we can build together. Now is our moment to get out there and fight from the heart. Because that is how we will save our democracy and save our country. #SOTU`,
          candidate_id: 2
        },
        {
          tweet: `No matter what lies ahead, we are not afraid. This is our moment. Our moment to make history. Our moment to dream big, fight hard, and win.`,
          candidate_id: 2
        },
        {
          tweet: `Technology and AI are getting smarter all of the time.  Most people are not.  Most adults feel good if we stay about the same and can still find our keys.`,
          candidate_id: 3
        },
        {
          tweet: `It would be great if a State of the Union speech made you feel better about the state of the country and the direction we are headed.  I think the tradition of a ‘response’ should be examined.`,
          candidate_id: 3
        },
        {
          tweet: `It might be helpful to have a President and government that understand technology so this sort of thing doesn’t happen.`,
          candidate_id: 3
        },
        {
          tweet: `Thank you Iowa for everything. Appreciated every bit of warmth and love for me, the team and my family.`,
          candidate_id: 3
        },
        {
          tweet: `I’ll say this - I’m pretty sure the people of Iowa will be glad to turn on the TV tomorrow and not see a political ad for the first time in months.`,
          candidate_id: 3
        },
        {
          tweet: `Mayor Pete likes to call me part of the old failed Washington. Was it a failure when I helped pass Obamacare, the Paris Agreement, the Violence Against Women Act, or the assault weapons ban?

          I have a stronger record of passing big, progressive legislation than anyone running.`,
          candidate_id: 4
        },
        {
          tweet: `Last night, President Trump turned his constitutional obligation to inform Congress about the state of our union into an episode of reality television. It was a shameful display. #SOTU`,
          candidate_id: 4
        },
        {
          tweet: `Everybody knows who Donald Trump is — it’s time we show them who we are. We choose: 

          Hope over fear. 
          Science over fiction. 
          Unity over division.
          Compassion over cruelty. 
          Truth over lies.`,
          candidate_id: 4
        },
        {
          tweet: `My values are rooted in the American character: tough, resilient, but always full of hope. We need a president who appeals to the best in us and unites this nation — because if we come together, there’s not a single thing we can’t do.`,
          candidate_id: 4
        },
        {
          tweet: `When I say we need to restore the soul of the nation, I’m not talking about taking us back to an America that never existed—but propelling us forward to a place we’ve never been. Where we finally live up to our highest ideals and everyone gets a full share of the American dream.`,
          candidate_id: 4
        },
        {
          tweet: `If you feel like our political system doesn't work for you, now is the time to join us in our fight.

          Together we are going to end the corruption of a system that helps billionaires but leaves working people behind.
          
          We are going to build a government that represents all of us.`,
          candidate_id: 1
        },
        {
          tweet: `Trump said, "We will always protect patients with pre-existing conditions.”

          Really?
          
          This is the same president who came one vote away from throwing 32 million Americans off the health care they have and ending the Affordable Care Act’s protection for pre-existing conditions.`,
          candidate_id: 1
        },
        {
          tweet: `In the year 2020, how can a president of the United States give a State of the Union speech and not mention climate change?`,
          candidate_id: 1
        },
        {
          tweet: `Tomorrow the votes may not be there to impeach Trump. But I'm absolutely confident that in November the votes will be there to beat Donald Trump.`,
          candidate_id: 1
        },
        {
          tweet: `This country does not just belong to the 1%.

          Not just massive corporations.
          
          Not just wealthy campaign contributors.
          
          Not just the political and economic establishment.
          
          It belongs to all of us.`,
          candidate_id: 1
        },
        {
          tweet: `Young people: do not underestimate your power. You will transform this country if you turn out to vote.`,
          candidate_id: 1
        },
        {
          tweet: `By joining our movement, you're joining a fight for human solidarity.

          You're standing against all forms of racism, bigotry and discrimination.
          
          You're working towards criminal justice reform, a humane immigration system and disability rights.
          
          That's what this campaign is about.`,
          candidate_id: 1
        },
        {
          tweet: `I simply do not accept a situation where, in the richest country on Earth, our people are afraid to go to the emergency room when they are hurt or sick because they cannot afford the bill.

          That's got to change. We need Medicare for All.`,
          candidate_id: 1
        },
        {
          tweet: `Despite the constant negative press covfefe`,
          candidate_id: 5
        },
        {
          tweet: `Market up big today on very good economic news. JOBS, JOBS, JOBS!`,
          candidate_id: 5
        },
        {
          tweet: `When will the Democrats start blaming RUSSIA, RUSSIA, RUSSIA, instead of their own incompetence for the voting disaster that just happened in the Great State of Iowa?`,
          candidate_id: 5
        },
        {
          tweet: `Where’s the Whistleblower? Where’s the second Whistleblower? Where’s the Informer? Why did Corrupt politician Schiff MAKE UP my conversation with the Ukrainian President??? Why didn’t the House do its job? And sooo much more!`,
          candidate_id: 5
        },
        {
          tweet: `ENJOY THE GAME USA, OUR COUNTRY IS DOING GREAT!`,
          candidate_id: 5
        },
        
      ]);
    });
};

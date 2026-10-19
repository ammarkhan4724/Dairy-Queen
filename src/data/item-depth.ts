// Extra hand-written sections for item pages, keyed by slug. ItemPage.astro renders
// them after the page's own body and appends the extra FAQs (visible + FAQPage schema).
// Every price and calorie figure here must match the item's own page and the hub tables.

export interface DepthSection { h: string; html: string }
export interface Depth { sections: DepthSection[]; faqs?: { q: string; a: string }[] }

export const DEPTH: Record<string, Depth> = {
  'oreo-blizzard': {
    sections: [
      {
        h: 'Oreo Blizzard vs. Royal Oreo Blizzard: which one to order',
        html: `<p>The regular Oreo Blizzard is the better everyday pick, and the <a href="/items/royal-oreo-blizzard">Royal Oreo</a> is the one to order when you want a sundae-style treat. A Small Oreo costs about $4.49 and has about 420 calories. The Small Royal Oreo costs about $4.99 and has about 490 calories, because it adds a hot fudge-filled center.</p>
<p>In practice, the fudge center changes how you eat it. The regular Oreo Blizzard tastes the same from top to bottom. The Royal version has a plain top half, then a warm pocket of fudge in the middle. If you like the fudge mixed through, stir it early.</p>`,
      },
      {
        h: 'Which size of Oreo Blizzard makes sense',
        html: `<p>For one person after a meal, the Mini (about $3.49 and ~300 calories) is usually enough. The Small (about $4.49, 420 calories) is the size most people order as a stand-alone treat.</p>
<p>The jump from Small to Medium is $1.00 for about 170 more calories, and the Large adds another 330 calories for 50 cents more. That makes the Large the best price per spoonful, but at about 920 calories it is really a size for sharing between two people.</p>`,
      },
      {
        h: 'Oreo Blizzard vs. Cookie Dough Blizzard',
        html: `<p>The Oreo Blizzard is the lighter and crunchier of DQ’s two most-ordered flavors. A Small <a href="/items/cookie-dough-blizzard">Cookie Dough Blizzard</a> costs the same $4.49 but has about 590 calories, roughly 170 more than the Oreo.</p>
<p>Texture is the real difference. Oreo pieces stay crisp, while cookie dough pieces are soft and chewy. If you cannot decide, many stores will blend half of each; see our <a href="/blog/dairy-queen-secret-menu">DQ secret menu guide</a> for how to ask.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the cheapest way to get an Oreo Blizzard?', a: 'Order a Mini for about $3.49, or upgrade the sundae in a $7 Meal Deal to a Mini Blizzard for a small extra charge at stores that allow it. Check the DQ app for Blizzard offers too.' },
      { q: 'Can you get an Oreo Blizzard as a cake?', a: 'Yes. The Oreo Blizzard Cake is a 10-inch cake made with Oreo pieces and soft serve. Order it about a day ahead at most stores.' },
    ],
  },

  'cookie-dough-blizzard': {
    sections: [
      {
        h: 'Cookie Dough Blizzard vs. Oreo Blizzard',
        html: `<p>The Cookie Dough Blizzard is the richer of the two classics, and the <a href="/items/oreo-blizzard">Oreo Blizzard</a> is the lighter one. Both cost about $4.49 for a Small, but the Cookie Dough Small has about 590 calories compared with about 420 for Oreo.</p>
<p>The cookie dough pieces are soft and chewy and they stay that way in the cold, so every spoonful feels heavier. Oreo gives you crunch instead. If you want both, ask for a half-and-half blend.</p>`,
      },
      {
        h: 'Who the Cookie Dough Blizzard is for',
        html: `<p>The Cookie Dough Blizzard suits people who like chewy mix-ins more than crunchy ones. It is also a good choice when sharing, because a Medium (about $5.49 and 800 calories) splits well between two.</p>
<p>If you are watching calories, the Mini at about 410 calories gives you the same flavor in a smaller cup. The Large is about 1,180 calories, one of the highest on the year-round menu.</p>`,
      },
    ],
    faqs: [
      { q: 'Is there a Cookie Dough Blizzard Cake?', a: 'Yes. The Cookie Dough Blizzard Cake comes in a 10-inch round at most DQ stores. Order it about a day in advance.' },
    ],
  },

  'reeses-blizzard': {
    sections: [
      {
        h: 'Reese’s Blizzard vs. Royal Reese’s Blizzard',
        html: `<p>The regular Reese’s Blizzard is the better value, and the <a href="/items/royal-reeses-blizzard">Royal Reese’s</a> is for people who want even more peanut butter. A Small Reese’s costs about $4.49 with about 600 calories. A Small Royal Reese’s costs about $4.99 with about 620 calories.</p>
<p>The 20-calorie gap is small because the Royal center is a pocket of peanut butter filling, not extra candy. For 50 cents more you get a softer, gooier middle. If you mostly like the crunch of the cups, the regular version already delivers that.</p>`,
      },
      {
        h: 'How heavy is a Reese’s Blizzard?',
        html: `<p>The Reese’s Blizzard is one of the heaviest year-round flavors, so size matters more than usual. A Mini is about 360 calories, a Small about 600, a Medium about 830 and a Large about 1,210.</p>
<p>For a lighter peanut butter treat, the <a href="/items/butterfinger-blizzard">Butterfinger Blizzard</a> is about 470 calories for a Small at the same $4.49. A <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> gives you peanuts and fudge instead of peanut butter, at about 710 calories for $4.99.</p>`,
      },
    ],
    faqs: [
      { q: 'Which Blizzard has the most peanut butter?', a: 'The Royal Reese’s Blizzard, because it has chopped Reese’s cups blended through the soft serve plus a peanut butter-filled center.' },
    ],
  },

  'royal-oreo-blizzard': {
    sections: [
      {
        h: 'Is the Royal Oreo worth 50 cents more?',
        html: `<p>The Royal Oreo Blizzard is worth the extra 50 cents if you like hot fudge, and not if you mainly order Blizzards for the cookie crunch. A Small Royal Oreo is about $4.99 and 490 calories, compared with $4.49 and 420 calories for the regular <a href="/items/oreo-blizzard">Oreo Blizzard</a>.</p>
<p>The fudge center makes the Royal Oreo taste closer to a hot fudge sundae with cookies in it. That is also why some people find it too sweet in a Large, which is about 1,050 calories.</p>`,
      },
      {
        h: 'Royal Oreo vs. Choco Brownie Extreme',
        html: `<p>For the most chocolate, the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> wins, while the Royal Oreo keeps more contrast between vanilla and chocolate. The Choco Brownie Extreme Small costs about $4.79 with 510 calories, 20 cents less than the Royal Oreo.</p>
<p>Pick the Royal Oreo for crunch and a fudge center, or Choco Brownie Extreme for chewy brownie and a darker cocoa taste.</p>`,
      },
    ],
  },

  'mm-blizzard': {
    sections: [
      {
        h: 'Is the M&M’s Blizzard good for kids?',
        html: `<p>The M&M’s Blizzard is one of the easiest Blizzards for kids, because it is colorful, mild and costs about $3.49 for a Mini with about 310 calories. The candy shells stay crunchy, so it tastes more like vanilla with crunch than a heavy chocolate treat.</p>
<p>For a parent and child sharing, a Small (about $4.49 and 490 calories) is usually enough. If a child has a peanut allergy, check DQ’s allergen list first, because M&M’s may share equipment with peanut candies.</p>`,
      },
      {
        h: 'M&M’s Blizzard vs. Oreo Blizzard',
        html: `<p>The <a href="/items/oreo-blizzard">Oreo Blizzard</a> is lighter and the M&M’s Blizzard is a bit cheaper at the bigger sizes. Both Smalls cost about $4.49, with about 420 calories for Oreo and 490 for M&M’s.</p>
<p>At Medium, the M&M’s costs about $5.29 compared with $5.49 for Oreo, which is why it is a good pick when you are buying several Mediums for a group.</p>`,
      },
    ],
  },

  'butterfinger-blizzard': {
    sections: [
      {
        h: 'Butterfinger vs. Reese’s: which peanut butter Blizzard to get',
        html: `<p>The Butterfinger Blizzard is the lighter, flakier peanut butter option, and the <a href="/items/reeses-blizzard">Reese’s Blizzard</a> is the richer, creamier one. Both cost about $4.49 for a Small, but Butterfinger has about 470 calories and Reese’s about 600.</p>
<p>Butterfinger pieces are crisp and layered, so they soften faster in the soft serve. Eat it within a few minutes for the best crunch. Reese’s cups hold their shape longer and taste more like a candy bar.</p>`,
      },
      {
        h: 'Butterfinger Blizzard by size',
        html: `<p>The Butterfinger Blizzard is one of the lighter year-round flavors at every size. A Mini is about 290 calories, a Medium about 650 and a Large about 990.</p>
<p>The Medium costs about $5.29, 20 cents less than flavors like Oreo or Reese’s, so it is a quiet value pick for anyone who likes peanut butter.</p>`,
      },
    ],
  },

  'snickers-blizzard': {
    sections: [
      {
        h: 'Snickers Blizzard vs. Turtle Pecan Cluster',
        html: `<p>The Snickers Blizzard is the cheaper caramel-and-nut option, and the <a href="/items/turtle-pecan-blizzard">Turtle Pecan Cluster</a> is the less sweet one. A Small Snickers costs about $4.49 with 500 calories. A Small Turtle Pecan Cluster costs about $4.79 with 570 calories.</p>
<p>Snickers brings chewy nougat and peanuts, while Turtle Pecan uses pecans, so it is not a swap for someone with a tree nut allergy. Both contain nuts.</p>`,
      },
      {
        h: 'When a Snickers Blizzard makes sense',
        html: `<p>The Snickers Blizzard has the most texture of the candy-bar flavors, so it suits people who get bored halfway through a smoother Blizzard. A Mini (about 320 calories) works as a dessert after a meal.</p>
<p>The Large is about $6.49 and 1,050 calories, the same price as the Large Reese’s. If you are sharing, a Medium at about $5.49 and 700 calories is the better buy.</p>`,
      },
    ],
  },

  'turtle-pecan-blizzard': {
    sections: [
      {
        h: 'Turtle Pecan Cluster vs. Heath Blizzard',
        html: `<p>The Turtle Pecan Cluster Blizzard is for people who want nuts and less sweetness, and the <a href="/items/heath-blizzard">Heath Blizzard</a> is the cheaper toffee-crunch pick. A Small Turtle Pecan costs about $4.79 with 570 calories, while a Small Heath costs about $4.49 with 480 calories.</p>
<p>Pecans stay crunchy instead of freezing hard like candy, and the salt balances the caramel and fudge. Heath toffee is sweeter and snaps more.</p>`,
      },
      {
        h: 'Who should skip the Turtle Pecan Cluster Blizzard',
        html: `<p>Anyone with a tree nut allergy should skip the Turtle Pecan Cluster Blizzard, because it contains pecans. For a nut-free caramel treat, the <a href="/items/caramel-sundae">caramel sundae</a> is about $3.79 and 310 calories.</p>
<p>It is also one of the pricier year-round flavors at the Mini size, about $3.99 compared with $3.49 for the classic candy flavors.</p>`,
      },
    ],
  },

  'choco-brownie-blizzard': {
    sections: [
      {
        h: 'Who the Choco Brownie Extreme Blizzard is for',
        html: `<p>The Choco Brownie Extreme Blizzard is for serious chocolate fans who find most Blizzards too sweet. It has brownie pieces, chocolate chunks and cocoa fudge, so it tastes darker than flavors built around candy.</p>
<p>A Mini is about $3.99 and 330 calories, which is the best way to try it. The Large is about $6.49 and 1,060 calories, so it is better shared.</p>`,
      },
      {
        h: 'Choco Brownie Extreme vs. Royal Oreo',
        html: `<p>The Choco Brownie Extreme gives you more chocolate, and the <a href="/items/royal-oreo-blizzard">Royal Oreo</a> gives you crunch plus a fudge center. The Choco Brownie Extreme Small costs about $4.79 with 510 calories. The Royal Oreo Small costs about $4.99 with 490 calories.</p>
<p>If you want brownie but sweeter and softer, the <a href="/items/brownie-batter-blizzard">Brownie Batter Blizzard</a> costs the same $4.79 for a Small.</p>`,
      },
    ],
  },

  'brownie-batter-blizzard': {
    sections: [
      {
        h: 'Brownie Batter vs. Choco Brownie Extreme',
        html: `<p>The Brownie Batter Blizzard is the sweeter, softer brownie flavor, and the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> is the darker, chewier one. Both cost about $4.79 for a Small, with about 530 calories for Brownie Batter and 510 for Choco Brownie Extreme.</p>
<p>Brownie Batter pieces taste like raw brownie mix, so the cup feels closer to licking the spoon. Choco Brownie Extreme uses baked brownie pieces and chocolate chunks.</p>`,
      },
      {
        h: 'Which size of Brownie Batter Blizzard to order',
        html: `<p>A Small Brownie Batter Blizzard is plenty for one person because the batter pieces are rich. A Mini is about $3.99 and 340 calories, and a Medium is about $5.79 and 730 calories.</p>
<p>The Large is about $6.49 and 1,070 calories. It costs only 70 cents more than the Medium, so it is the better buy when two people are sharing.</p>`,
      },
    ],
  },

  '7-meal-deal': {
    sections: [
      {
        h: 'How much does the $7 Meal Deal save?',
        html: `<p>The $7 Meal Deal saves about $7.48 compared with buying the same items separately at typical prices. An <a href="/items/original-cheeseburger">Original Cheeseburger</a> is about $6.39, <a href="/items/regular-fries">small fries</a> about $2.49, a <a href="/items/soft-drinks">soft drink</a> from $2.11 and a small <a href="/items/hot-fudge-sundae">hot fudge sundae</a> about $3.49. That adds up to about $14.48.</p>
<p>Put another way, the cheeseburger on its own costs only about 61 cents less than the whole meal. If you were going to buy the burger anyway, the meal is almost always the better choice.</p>`,
      },
      {
        h: 'Cheeseburger or chicken strips in the $7 Meal Deal?',
        html: `<p>Choose the chicken strips for more food and the cheeseburger for a lighter meal. The cheeseburger version is about 900 calories in total and the chicken version about 1,100.</p>
<p>For comparison, a <a href="/items/chicken-strip-basket-4pc">4-piece Chicken Strip Basket</a> on its own costs about $9.99 and has about 1,000 calories, with no drink or dessert. The meal deal’s 3-piece chicken option is the cheaper way to get DQ chicken.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the $7 Meal Deal available at every Dairy Queen?', a: 'No. It is offered at participating DQ Grill & Chill restaurants. Treat-only stores do not sell hot food, so they do not have it.' },
    ],
  },

  '2-for-5-mix-match': {
    sections: [
      {
        h: 'Which 2 for $5 combo saves the most?',
        html: `<p>The Original Cheeseburger plus the chili cheese dog saves the most, because together they cost about $11.38 at their regular prices. On the 2 for $5 menu you pay $5, a saving of about $6.38.</p>
<p>The combo with the least saving is small fries plus 2-piece chicken strips, which are about $5.98 on their own. You still save, but less than a dollar.</p>`,
      },
      {
        h: '2 for $5 vs. the $7 Meal Deal',
        html: `<p>The 2 for $5 menu is better for a snack or a light meal, and the <a href="/items/7-meal-deal">$7 Meal Deal</a> is better for a full meal. For $2 more, the meal deal adds a drink and a sundae to a burger or chicken and fries.</p>
<p>A good light pairing is <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> (about 280 calories) with <a href="/items/pretzel-sticks-queso">pretzel sticks with queso</a> (about 440 calories), for about 720 calories in total.</p>`,
      },
    ],
  },

  'chicken-strip-basket-4pc': {
    sections: [
      {
        h: '4-piece or 6-piece Chicken Strip Basket?',
        html: `<p>The 4-piece basket is the right size for one adult, and the <a href="/items/chicken-strip-basket-6pc">6-piece basket</a> is for very big appetites or sharing with a child. The 4-piece costs about $9.99 for about 1,000 calories. The 6-piece costs about $13.49 for about 1,380 calories.</p>
<p>The two extra strips cost about $3.50, which is roughly the price of a <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> order on its own. So adding a separate 2-piece order to a 4-piece basket costs about the same.</p>`,
      },
      {
        h: 'Cheaper ways to get DQ chicken strips',
        html: `<p>The <a href="/items/7-meal-deal">$7 Meal Deal</a> is the cheapest way to get a chicken strip meal, with 3 strips, fries, a drink and a sundae for $7. That costs about $3 less than the 4-piece basket and adds a drink and dessert.</p>
<p>For a snack, the 2-piece strips are about $3.49 and are often on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a>.</p>`,
      },
    ],
  },

  'chicken-strip-basket-6pc': {
    sections: [
      {
        h: 'Is the 6-piece basket a good deal?',
        html: `<p>The 6-piece basket is a fair deal when you will eat all six strips, but not the best value at DQ. At about $13.49 it costs $3.50 more than the <a href="/items/chicken-strip-basket-4pc">4-piece basket</a> for two extra strips and about 380 more calories.</p>
<p>Two people can do better with a 4-piece basket plus a <a href="/items/7-meal-deal">$7 Meal Deal</a>. That gives you 7 strips in total, two orders of fries, a drink and a sundae for about $17.</p>`,
      },
    ],
  },

  'flamethrower-stackburger': {
    sections: [
      {
        h: 'FlameThrower vs. Backyard Bacon Ranch Stackburger',
        html: `<p>The FlameThrower is the spicy pick, and the <a href="/items/backyard-bacon-ranch-stackburger">Backyard Bacon Ranch</a> is the creamy, smoky one. The FlameThrower single costs about $10.87 with 780 calories. The Backyard Bacon Ranch costs about $9.99 with 730 calories.</p>
<p>Both have bacon, but the FlameThrower uses jalapeño bacon, pepper jack and FlameThrower sauce. If you are not sure about the heat, ask for light sauce.</p>`,
      },
      {
        h: 'Is the FlameThrower worth $4.48 more than a cheeseburger?',
        html: `<p>The FlameThrower Stackburger is worth it if you want a bigger, spicier burger, but the <a href="/items/original-cheeseburger">Original Cheeseburger</a> is far better value. The cheeseburger is about $6.39 and 400 calories, and it is part of the $7 Meal Deal.</p>
<p>The FlameThrower single has about 42 g of protein, so it is closer to a full meal on its own. The double is over 1,000 calories.</p>`,
      },
    ],
  },

  'original-cheeseburger': {
    sections: [
      {
        h: 'Original Cheeseburger vs. Double Cheeseburger',
        html: `<p>The Original Cheeseburger is the lighter, cheaper choice, and the <a href="/items/double-cheeseburger">Double Cheeseburger</a> is for bigger appetites. The single costs about $6.39 with 400 calories. The double costs about $7.99 with 560 calories.</p>
<p>The double costs $1.60 more for a second patty, which is more than the 61 cents it costs to turn the single into a $7 Meal Deal with fries, a drink and a sundae.</p>`,
      },
      {
        h: 'Who the Original Cheeseburger is for',
        html: `<p>The Original Cheeseburger suits people who want a simple burger and the best value at DQ. It is the lightest burger on the menu, with about 910 mg of sodium in a single.</p>
<p>It is also the base for both value deals: it is in the $7 Meal Deal and on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a> at many stores.</p>`,
      },
    ],
  },

  'peanut-buster-parfait': {
    sections: [
      {
        h: 'Peanut Buster Parfait vs. Reese’s Blizzard',
        html: `<p>The Peanut Buster Parfait is for people who like whole peanuts and fudge, and the <a href="/items/reeses-blizzard">Reese’s Blizzard</a> is for peanut butter fans. The parfait costs about $4.99 with 710 calories. A Small Reese’s Blizzard costs about $4.49 with 600 calories.</p>
<p>The parfait is layered, not blended, so you get distinct bites of soft serve, hot fudge and salted peanuts all the way down.</p>`,
      },
      {
        h: 'Peanut Buster Parfait vs. Buster Bar',
        html: `<p>The <a href="/items/buster-bar">Buster Bar</a> has the same soft serve, fudge and peanuts on a stick for about $2.49 and 440 calories. It is the cheaper, smaller way to get the same flavors.</p>
<p>The parfait costs twice as much but comes in a cup, so it is easier to share.</p>`,
      },
    ],
  },

  'dilly-bar': {
    sections: [
      {
        h: 'Dilly Bar vs. Non-Dairy Dilly Bar',
        html: `<p>The classic Dilly Bar is cheaper and creamier, and the <a href="/items/non-dairy-dilly-bar">Non-Dairy Dilly Bar</a> is the option for people avoiding dairy. The classic costs about $1.99 with 210 calories. The non-dairy version costs about $2.49 with 220 calories.</p>
<p>Both have a chocolate coating. The non-dairy version is not certified vegan, so check DQ’s allergen list if that matters to you.</p>`,
      },
      {
        h: 'Is a Dilly Bar the cheapest treat at DQ?',
        html: `<p>The Dilly Bar is one of the cheapest treats at DQ, but the <a href="/items/dq-sandwich">DQ Sandwich</a> is cheaper at about $1.49 and 190 calories. A small <a href="/items/vanilla-soft-serve-cone">vanilla cone</a> costs about $1.79.</p>
<p>The Dilly Bar is the best of the three for taking home, because many stores sell them in multi-packs.</p>`,
      },
    ],
  },

  'caramel-sundae': {
    sections: [
      {
        h: 'Caramel sundae vs. hot fudge sundae',
        html: `<p>The caramel sundae is sweeter and buttery, and the <a href="/items/hot-fudge-sundae">hot fudge sundae</a> is richer and more chocolatey. Both usually cost about $3.79 for a regular. The caramel has about 310 calories and the hot fudge about 300.</p>
<p>Because they cost the same, pick by taste. You can also ask for half caramel and half hot fudge, which many stores will do.</p>`,
      },
      {
        h: 'Caramel sundae vs. Turtle Pecan Cluster Blizzard',
        html: `<p>If you love caramel and want more in the cup, the <a href="/items/turtle-pecan-blizzard">Turtle Pecan Cluster Blizzard</a> blends caramel with pecans and fudge. A Small costs about $4.79 with 570 calories.</p>
<p>The caramel sundae is the lighter and cheaper caramel treat, at about $3.79 and 310 calories, and it has no nuts unless you add them.</p>`,
      },
    ],
  },

  'hot-fudge-sundae': {
    sections: [
      {
        h: 'Small or regular hot fudge sundae?',
        html: `<p>The small hot fudge sundae is enough as a dessert after a meal, and the regular is the better stand-alone treat. The small costs about $3.49 with about 250 calories. The regular costs about $3.79 with 300 calories.</p>
<p>The small is the size included in the <a href="/items/7-meal-deal">$7 Meal Deal</a>, so if you are ordering a meal, you may already get one.</p>`,
      },
      {
        h: 'Hot fudge sundae vs. Peanut Buster Parfait',
        html: `<p>The <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> is a bigger, layered version with salted peanuts, at about $4.99 and 710 calories. The hot fudge sundae is the lighter choice at about 300 calories for a regular.</p>
<p>If you want fudge on the inside instead of on top, the <a href="/items/royal-oreo-blizzard">Royal Oreo Blizzard</a> has a hot fudge-filled center.</p>`,
      },
    ],
  },
};

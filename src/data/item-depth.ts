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
        html: `<p>The regular Oreo Blizzard is the better everyday pick, and the <a href="/items/royal-oreo-blizzard">Royal Oreo</a> is the one to order when you want a sundae-style treat. A Small Oreo costs about $4.49 and has 600 calories. The Small Royal Oreo costs about $4.99 and adds a hot fudge-filled center.</p>
<p>In practice, the fudge center changes how you eat it. The regular Oreo Blizzard tastes the same from top to bottom. The Royal version has a plain top half, then a warm pocket of fudge in the middle. If you like the fudge mixed through, stir it early.</p>`,
      },
      {
        h: 'Which size of Oreo Blizzard makes sense',
        html: `<p>For one person after a meal, the Mini (about $3.49 and 330 calories) is usually enough. The Small (about $4.49, 600 calories) is the size most people order as a stand-alone treat.</p>
<p>The jump from Small to Medium is $1.00 for about 220 more calories, and the Large adds another 230 calories for 50 cents more. That makes the Large the best price per spoonful, but at 1,050 calories it is really a size for sharing between two people.</p>`,
      },
      {
        h: 'Oreo Blizzard vs. Cookie Dough Blizzard',
        html: `<p>The Oreo Blizzard is the lighter and crunchier of DQ’s two most-ordered flavors. A Small <a href="/items/cookie-dough-blizzard">Cookie Dough Blizzard</a> costs the same $4.49 but has 710 calories, roughly 110 more than the Oreo.</p>
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
        html: `<p>The Cookie Dough Blizzard is the richer of the two classics, and the <a href="/items/oreo-blizzard">Oreo Blizzard</a> is the lighter one. Both cost about $4.49 for a Small, but the Cookie Dough Small has 710 calories compared with 600 for Oreo.</p>
<p>The cookie dough pieces are soft and chewy and they stay that way in the cold, so every spoonful feels heavier. Oreo gives you crunch instead. If you want both, ask for a half-and-half blend.</p>`,
      },
      {
        h: 'Who the Cookie Dough Blizzard is for',
        html: `<p>The Cookie Dough Blizzard suits people who like chewy mix-ins more than crunchy ones. It is also a good choice when sharing, because a Medium (about $5.49 and 1,030 calories) splits well between two.</p>
<p>If you are watching calories, the Mini at about 410 calories gives you the same flavor in a smaller cup. The Large is 1,370 calories, one of the highest on the year-round menu.</p>`,
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
        html: `<p>The regular Reese’s Blizzard is the better value, and the <a href="/items/royal-reeses-blizzard">Royal Reese’s</a> is for people who want even more peanut butter. A Small Reese’s costs about $4.49 with 610 calories. A Small Royal Reese’s costs about $4.99.</p>
<p>The Royal center is a pocket of peanut butter filling, not extra candy. For 50 cents more you get a softer, gooier middle. If you mostly like the crunch of the cups, the regular version already delivers that.</p>`,
      },
      {
        h: 'How heavy is a Reese’s Blizzard?',
        html: `<p>The Reese’s Blizzard sits near the lighter end of the year-round flavors, but size still makes a big difference. A Mini is 360 calories, a Small 610, a Medium 820 and a Large 1,080.</p>
<p>For a lighter peanut butter treat, the <a href="/items/butterfinger-blizzard">Butterfinger Blizzard</a> is 590 calories for a Small at the same $4.49. A <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> gives you peanuts and fudge instead of peanut butter, at about 710 calories for $4.99.</p>`,
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
        html: `<p>The Royal Oreo Blizzard is worth the extra 50 cents if you like hot fudge, and not if you mainly order Blizzards for the cookie crunch. A Small Royal Oreo is about $4.99, compared with about $4.49 for the regular <a href="/items/oreo-blizzard">Oreo Blizzard</a>.</p>
<p>The fudge center makes the Royal Oreo taste closer to a hot fudge sundae with cookies in it. That is also why some people find it too sweet in a Large, which is about 1,050 calories.</p>`,
      },
      {
        h: 'Royal Oreo vs. Choco Brownie Extreme',
        html: `<p>For the most chocolate, the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> wins, while the Royal Oreo keeps more contrast between vanilla and chocolate. The Choco Brownie Extreme Small costs about $4.79 with 740 calories, 20 cents less than the Royal Oreo.</p>
<p>Pick the Royal Oreo for crunch and a fudge center, or Choco Brownie Extreme for chewy brownie and a darker cocoa taste.</p>`,
      },
    ],
  },

  'mm-blizzard': {
    sections: [
      {
        h: 'Is the M&M’s Blizzard good for kids?',
        html: `<p>The M&M’s Blizzard is one of the easiest Blizzards for kids, because it is colorful, mild and costs about $3.49 for a Mini with 370 calories. The candy shells stay crunchy, so it tastes more like vanilla with crunch than a heavy chocolate treat.</p>
<p>For a parent and child sharing, a Small (about $4.49 and 660 calories) is usually enough. If a child has a peanut allergy, check DQ’s allergen list first, because M&M’s may share equipment with peanut candies.</p>`,
      },
      {
        h: 'M&M’s Blizzard vs. Oreo Blizzard',
        html: `<p>The <a href="/items/oreo-blizzard">Oreo Blizzard</a> is lighter and the M&M’s Blizzard is a bit cheaper at the bigger sizes. Both Smalls cost about $4.49, with 600 calories for Oreo and 660 for M&M’s.</p>
<p>At Medium, the M&M’s costs about $5.29 compared with $5.49 for Oreo, which is why it is a good pick when you are buying several Mediums for a group.</p>`,
      },
    ],
  },

  'butterfinger-blizzard': {
    sections: [
      {
        h: 'Butterfinger vs. Reese’s: which peanut butter Blizzard to get',
        html: `<p>The Butterfinger Blizzard is the lighter, flakier peanut butter option, and the <a href="/items/reeses-blizzard">Reese’s Blizzard</a> is the richer, creamier one. Both cost about $4.49 for a Small, but Butterfinger has 590 calories and Reese’s 610.</p>
<p>Butterfinger pieces are crisp and layered, so they soften faster in the soft serve. Eat it within a few minutes for the best crunch. Reese’s cups hold their shape longer and taste more like a candy bar.</p>`,
      },
      {
        h: 'Butterfinger Blizzard by size',
        html: `<p>The Butterfinger Blizzard is one of the lighter year-round flavors at every size. A Mini is 350 calories, a Medium 800 and a Large 1,060.</p>
<p>The Medium costs about $5.29, 20 cents less than flavors like Oreo or Reese’s, so it is a quiet value pick for anyone who likes peanut butter.</p>`,
      },
    ],
  },

  'snickers-blizzard': {
    sections: [
      {
        h: 'Snickers Blizzard vs. Turtle Pecan Cluster',
        html: `<p>The Snickers Blizzard is the cheaper caramel-and-nut option, and the <a href="/items/turtle-pecan-blizzard">Turtle Pecan Cluster</a> is the less sweet one. A Small Snickers costs about $4.49 with 610 calories. A Small Turtle Pecan Cluster costs about $4.79 with 680 calories.</p>
<p>Snickers brings chewy nougat and peanuts, while Turtle Pecan uses pecans, so it is not a swap for someone with a tree nut allergy. Both contain nuts.</p>`,
      },
      {
        h: 'When a Snickers Blizzard makes sense',
        html: `<p>The Snickers Blizzard has the most texture of the candy-bar flavors, so it suits people who get bored halfway through a smoother Blizzard. A Mini (350 calories) works as a dessert after a meal.</p>
<p>The Large is about $6.49 and 1,060 calories, the same price as the Large Reese’s. If you are sharing, a Medium at about $5.49 and 800 calories is the better buy.</p>`,
      },
    ],
  },

  'turtle-pecan-blizzard': {
    sections: [
      {
        h: 'Turtle Pecan Cluster vs. Heath Blizzard',
        html: `<p>The Turtle Pecan Cluster Blizzard is for people who want nuts and less sweetness, and the <a href="/items/heath-blizzard">Heath Blizzard</a> is the cheaper toffee-crunch pick. A Small Turtle Pecan costs about $4.79 with 680 calories, while a Small Heath costs about $4.49 with 640 calories.</p>
<p>Pecans stay crunchy instead of freezing hard like candy, and the salt balances the caramel and fudge. Heath toffee is sweeter and snaps more.</p>`,
      },
      {
        h: 'Who should skip the Turtle Pecan Cluster Blizzard',
        html: `<p>Anyone with a tree nut allergy should skip the Turtle Pecan Cluster Blizzard, because it contains pecans. For a nut-free caramel treat, a medium <a href="/items/caramel-sundae">caramel sundae</a> is about $3.79 and 430 calories.</p>
<p>It is also one of the pricier year-round flavors at the Mini size, about $3.99 compared with $3.49 for the classic candy flavors.</p>`,
      },
    ],
  },

  'choco-brownie-blizzard': {
    sections: [
      {
        h: 'Who the Choco Brownie Extreme Blizzard is for',
        html: `<p>The Choco Brownie Extreme Blizzard is for serious chocolate fans who find most Blizzards too sweet. It has brownie pieces, chocolate chunks and cocoa fudge, so it tastes darker than flavors built around candy.</p>
<p>A Mini is about $3.99 and 420 calories, which is the best way to try it. The Large is about $6.49 and 1,330 calories, so it is better shared.</p>`,
      },
      {
        h: 'Choco Brownie Extreme vs. Royal Oreo',
        html: `<p>The Choco Brownie Extreme gives you more chocolate, and the <a href="/items/royal-oreo-blizzard">Royal Oreo</a> gives you crunch plus a fudge center. The Choco Brownie Extreme Small costs about $4.79 with 740 calories. The Royal Oreo Small costs about $4.99 with 490 calories.</p>
<p>If you want brownie but sweeter and softer, the <a href="/items/brownie-batter-blizzard">Brownie Batter Blizzard</a> costs the same $4.79 for a Small.</p>`,
      },
    ],
  },

  'brownie-batter-blizzard': {
    sections: [
      {
        h: 'Brownie Batter vs. Choco Brownie Extreme',
        html: `<p>The Brownie Batter Blizzard is the sweeter, softer brownie flavor, and the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> is the darker, chewier one. Both cost about $4.79 for a Small, with about 530 calories for Brownie Batter and 740 for Choco Brownie Extreme.</p>
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
        html: `<p>The $7 Meal Deal saves about $7.48 compared with buying the same items separately at typical prices. An <a href="/items/original-cheeseburger">Original Cheeseburger</a> is about $6.39, <a href="/items/regular-fries">regular fries</a> about $2.49, a <a href="/items/soft-drinks">soft drink</a> from $2.11 and a small <a href="/items/hot-fudge-sundae">hot fudge sundae</a> about $3.49. That adds up to about $14.48.</p>
<p>Put another way, the cheeseburger on its own costs only about 61 cents less than the whole meal. If you were going to buy the burger anyway, the meal is almost always the better choice.</p>`,
      },
      {
        h: 'Cheeseburger or chicken strips in the $7 Meal Deal?',
        html: `<p>Choose the chicken strips for more food and the cheeseburger for a lighter meal. The cheeseburger version is about 950 calories in total and the chicken version about 1,010.</p>
<p>For comparison, a <a href="/items/chicken-strip-basket-4pc">4-piece Chicken Strip Basket</a> on its own costs about $9.99 and has 1,020 calories, with no drink or dessert. The meal deal’s 3-piece chicken option is the cheaper way to get DQ chicken.</p>`,
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
<p>The combo with the least saving is regular fries plus 2-piece chicken strips, which are about $5.98 on their own. You still save, but less than a dollar.</p>`,
      },
      {
        h: '2 for $5 vs. the $7 Meal Deal',
        html: `<p>The 2 for $5 menu is better for a snack or a light meal, and the <a href="/items/7-meal-deal">$7 Meal Deal</a> is better for a full meal. For $2 more, the meal deal adds a drink and a sundae to a burger or chicken and fries.</p>
<p>A good light pairing is <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> (about 280 calories) with <a href="/items/pretzel-sticks-queso">pretzel sticks with queso</a> (340 calories), for about 620 calories in total.</p>`,
      },
    ],
  },

  'chicken-strip-basket-4pc': {
    sections: [
      {
        h: '4-piece or 6-piece Chicken Strip Basket?',
        html: `<p>The 4-piece basket is the right size for one adult, and the <a href="/items/chicken-strip-basket-6pc">6-piece basket</a> is for very big appetites or sharing with a child. The 4-piece costs about $9.99 for 1,020 calories. The 6-piece costs about $13.49 for 1,300 calories.</p>
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
        html: `<p>The 6-piece basket is a fair deal when you will eat all six strips, but not the best value at DQ. At about $13.49 it costs $3.50 more than the <a href="/items/chicken-strip-basket-4pc">4-piece basket</a> for two extra strips and about 280 more calories.</p>
<p>Two people can do better with a 4-piece basket plus a <a href="/items/7-meal-deal">$7 Meal Deal</a>. That gives you 7 strips in total, two orders of fries, a drink and a sundae for about $17.</p>`,
      },
    ],
  },

  'flamethrower-stackburger': {
    sections: [
      {
        h: 'FlameThrower vs. Backyard Bacon Ranch Stackburger',
        html: `<p>The FlameThrower is the spicy pick, and the <a href="/items/backyard-bacon-ranch-stackburger">Backyard Bacon Ranch</a> is the creamy, smoky one. The FlameThrower Double costs about $10.87 with 720 calories. The Backyard Bacon Ranch costs about $9.99 with 820 calories.</p>
<p>Both have bacon, but the FlameThrower uses jalapeño bacon, pepper jack and FlameThrower sauce. If you are not sure about the heat, ask for light sauce.</p>`,
      },
      {
        h: 'Is the FlameThrower worth $4.48 more than a cheeseburger?',
        html: `<p>The FlameThrower Stackburger is worth it if you want a bigger, spicier burger, but the <a href="/items/original-cheeseburger">Original Cheeseburger</a> is far better value. The cheeseburger is about $6.39 and 370 calories, and it is part of the $7 Meal Deal.</p>
<p>The FlameThrower Double has about 34 g of protein, so it is closer to a full meal on its own. The Triple is 910 calories.</p>`,
      },
    ],
  },

  'original-cheeseburger': {
    sections: [
      {
        h: 'Original Cheeseburger vs. Double Cheeseburger',
        html: `<p>The Original Cheeseburger is the lighter, cheaper choice, and the <a href="/items/double-cheeseburger">Double Cheeseburger</a> is for bigger appetites. The single costs about $6.39 with 370 calories. The double costs about $7.99 with 570 calories.</p>
<p>The double costs $1.60 more for a second patty, which is more than the 61 cents it costs to turn the single into a $7 Meal Deal with fries, a drink and a sundae.</p>`,
      },
      {
        h: 'Who the Original Cheeseburger is for',
        html: `<p>The Original Cheeseburger suits people who want a simple burger and the best value at DQ. It is the lightest burger on the menu, with about 1,120 mg of sodium in a single.</p>
<p>It is also the base for both value deals: it is in the $7 Meal Deal and on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a> at many stores.</p>`,
      },
    ],
  },

  'peanut-buster-parfait': {
    sections: [
      {
        h: 'Peanut Buster Parfait vs. Reese’s Blizzard',
        html: `<p>The Peanut Buster Parfait is for people who like whole peanuts and fudge, and the <a href="/items/reeses-blizzard">Reese’s Blizzard</a> is for peanut butter fans. The parfait costs about $4.99 with 710 calories. A Small Reese’s Blizzard costs about $4.49 with 610 calories.</p>
<p>The parfait is layered, not blended, so you get distinct bites of soft serve, hot fudge and salted peanuts all the way down.</p>`,
      },
      {
        h: 'Peanut Buster Parfait vs. Buster Bar',
        html: `<p>The <a href="/items/buster-bar">Buster Bar</a> has the same soft serve, fudge and peanuts on a stick for about $2.49 and about 475 calories. It is the cheaper, smaller way to get the same flavors.</p>
<p>The parfait costs twice as much but comes in a cup, so it is easier to share.</p>`,
      },
    ],
  },

  'dilly-bar': {
    sections: [
      {
        h: 'Dilly Bar vs. Non-Dairy Dilly Bar',
        html: `<p>The classic Dilly Bar is cheaper and creamier, and the <a href="/items/non-dairy-dilly-bar">Non-Dairy Dilly Bar</a> is the option for people avoiding dairy. The classic costs about $1.99 with about 220 calories. The non-dairy version costs about $2.49 with 220 calories.</p>
<p>Both have a chocolate coating. The non-dairy version is not certified vegan, so check DQ’s allergen list if that matters to you.</p>`,
      },
      {
        h: 'Is a Dilly Bar the cheapest treat at DQ?',
        html: `<p>The Dilly Bar is one of the cheapest treats at DQ, but the <a href="/items/dq-sandwich">DQ Sandwich</a> is cheaper at about $1.49 and about 180 calories. A kids’ <a href="/items/vanilla-soft-serve-cone">vanilla cone</a> costs about $1.79.</p>
<p>The Dilly Bar is the best of the three for taking home, because many stores sell them in multi-packs.</p>`,
      },
    ],
  },

  'caramel-sundae': {
    sections: [
      {
        h: 'Caramel sundae vs. hot fudge sundae',
        html: `<p>The caramel sundae is sweeter and buttery, and the <a href="/items/hot-fudge-sundae">hot fudge sundae</a> is richer and more chocolatey. Both usually cost about $3.79 for a medium, and both have 430 calories.</p>
<p>Because they cost the same, pick by taste. You can also ask for half caramel and half hot fudge, which many stores will do.</p>`,
      },
      {
        h: 'Caramel sundae vs. Turtle Pecan Cluster Blizzard',
        html: `<p>If you love caramel and want more in the cup, the <a href="/items/turtle-pecan-blizzard">Turtle Pecan Cluster Blizzard</a> blends caramel with pecans and fudge. A Small costs about $4.79 with 680 calories.</p>
<p>The caramel sundae is the lighter and cheaper caramel treat, at about $3.79 and 430 calories for a medium, and it has no nuts unless you add them.</p>`,
      },
    ],
  },

  'hot-fudge-sundae': {
    sections: [
      {
        h: 'Small or medium hot fudge sundae?',
        html: `<p>The small hot fudge sundae is enough as a dessert after a meal, and the medium is the better stand-alone treat. The small costs about $3.49 with 300 calories. The medium costs about $3.79 with 430 calories.</p>
<p>The small is the size included in the <a href="/items/7-meal-deal">$7 Meal Deal</a>, so if you are ordering a meal, you may already get one.</p>`,
      },
      {
        h: 'Hot fudge sundae vs. Peanut Buster Parfait',
        html: `<p>The <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> is a bigger, layered version with salted peanuts, at about $4.99 and 710 calories. The hot fudge sundae is the lighter choice at 430 calories for a medium.</p>
<p>If you want fudge on the inside instead of on top, the <a href="/items/royal-oreo-blizzard">Royal Oreo Blizzard</a> has a hot fudge-filled center.</p>`,
      },
    ],
  },
  'banana-cream-pie-blizzard': {
    sections: [
      {
        h: 'Banana Cream Pie Blizzard vs. Banana Split',
        html: `<p>Pick the Banana Cream Pie Blizzard for a blended, pie-style dessert and the <a href="/items/banana-split">Banana Split</a> for real banana and three toppings. A Small Banana Cream Pie Blizzard costs about $4.79 with about 540 calories. A Banana Split costs about $5.69 with 520 calories, so it is 90 cents more but about 20 calories lighter.</p>
<p>The bigger difference is availability. The Blizzard is a limited-time flavor, while the Banana Split is on the menu all year and splits easily between two people.</p>`,
      },
      {
        h: 'Which size of Banana Cream Pie Blizzard to get',
        html: `<p>The Small is the best fit for one person, and the Large only makes sense when sharing. Going from Mini (about $3.99, 360 calories) to Small (about $4.79, 540 calories) adds 80 cents and 180 calories.</p>
<p>The Medium is about $5.79 and 750 calories. The Large is only 70 cents more at about $6.49, but it jumps to about 1,100 calories, so split it two ways. If you also like cheesecake flavors, the <a href="/items/strawberry-cheesequake-blizzard">Strawberry Cheesequake Blizzard</a> costs the same at every size.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Banana Cream Pie Blizzard still available?', a: 'It is a limited-time flavor, so it comes and goes and not every store has it at the same time. Check the DQ app for your local store before you go.' },
      { q: 'Does the Banana Cream Pie Blizzard contain nuts?', a: 'Nuts are not in its listed allergens, which are milk, wheat and soy. Stores share equipment, so check DQ’s allergen information if you have a serious allergy.' },
    ],
  },

  'confetti-cake-blizzard': {
    sections: [
      {
        h: 'Confetti Cake Blizzard or a DQ cake for a birthday party?',
        html: `<p>For a group of eight or more, a cake is much cheaper than buying everyone a Confetti Cake Blizzard. Eight Mini Blizzards at about $4.49 each come to about $35.92. A classic <a href="/items/dq-cake-round-8inch">8-inch DQ cake</a> starts at about $22.99 and serves 8 to 10, or roughly $2.30 to $2.87 per person.</p>
<p>The Blizzard makes more sense for a small celebration, like one birthday kid and a parent sharing a Small at about $5.29. Our <a href="/blog/dq-cakes-complete-guide">DQ cakes guide</a> covers ordering lead times and sizes.</p>`,
      },
      {
        h: 'Confetti Cake Blizzard: Mini or Small?',
        html: `<p>For a kid or an after-dinner treat, the Mini is enough. It costs about $4.49 with about 310 calories, while the Small is about $5.29 with about 490 calories, so the step up adds 80 cents and 180 calories.</p>
<p>The Medium (about $6.29, 680 calories) and Large (about $6.99, 1,020 calories) are sharing sizes. Note that a Confetti Cake Mini costs a full dollar more than a Mini <a href="/items/oreo-blizzard">Oreo Blizzard</a> at about $3.49, because summer seasonal flavors are priced higher.</p>`,
      },
    ],
    faqs: [
      { q: 'When is the Confetti Cake Blizzard available?', a: 'It is a summer seasonal flavor, so it is not on the menu all year. Dates vary by store, and the DQ app shows whether your store has it.' },
    ],
  },

  'cotton-candy-blizzard': {
    sections: [
      {
        h: 'Cotton Candy Blizzard vs. Confetti Cake Blizzard',
        html: `<p>The Cotton Candy Blizzard is the slightly lighter of the two kid-favorite summer flavors, and the <a href="/items/confetti-cake-blizzard">Confetti Cake Blizzard</a> has more to chew on. They cost the same at every size, from about $4.49 for a Mini to about $6.99 for a Large.</p>
<p>A Small Cotton Candy has about 460 calories compared with about 490 for Confetti Cake, and the gap grows to 60 calories at the Large (960 vs. 1,020). Cotton Candy is mostly flavor and sprinkles, while Confetti Cake adds soft cake pieces.</p>`,
      },
      {
        h: 'Is the Cotton Candy Blizzard worth the seasonal price?',
        html: `<p>It is worth it if someone in your group really wants the flavor, but it costs more than a classic Blizzard. A Small is about $5.29, 80 cents more than a Small <a href="/items/mm-blizzard">M&amp;M’s Blizzard</a>, and a Mini is a full dollar more than a classic Mini.</p>
<p>For a bright, sweet treat on a tighter budget, a small <a href="/items/misty-slush">Misty Slush</a> costs about $2.39 and has 200 calories. Our <a href="/blog/dairy-queen-app-rewards-hacks">DQ app guide</a> shows where Blizzard offers turn up.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the lightest summer Blizzard?', a: 'The Swicy Pineapple with Tajín Blizzard, at about 430 calories for a Small. The Cotton Candy Blizzard is next at about 460.' },
    ],
  },

  'dipped-strawberry-cheesecake-blizzard': {
    sections: [
      {
        h: 'Dipped Strawberry Cheesecake vs. Strawberry Cheesequake Blizzard',
        html: `<p>The Dipped Strawberry Cheesecake is the chocolate version, and the <a href="/items/strawberry-cheesequake-blizzard">Strawberry Cheesequake</a> is the cheaper, simpler one. The Dipped Small costs about $5.29 with about 540 calories. The Cheesequake Small costs about $4.79 with about 520 calories.</p>
<p>That 50-cent gap holds at every size: about $6.29 vs. $5.79 for a Medium and $6.99 vs. $6.49 for a Large. You are paying for the chocolate, which gives the Dipped version its chocolate-covered strawberry taste.</p>`,
      },
      {
        h: 'Dipped Strawberry Cheesecake vs. Royal New York Cheesecake',
        html: `<p>When the summer flavor is gone, the <a href="/items/royal-new-york-cheesecake-blizzard">Royal New York Cheesecake</a> is the closest year-round swap. Its Small costs about $4.99 with 750 calories, which is 30 cents less but about 210 calories more than the Dipped Small.</p>
<p>The Royal puts the strawberry in a filled center and adds graham crumbs, but it has no chocolate. If chocolate is the part you love, ask your store about adding a chocolate mix-in for a small charge.</p>`,
      },
    ],
    faqs: [
      { q: 'What can I order when the Dipped Strawberry Cheesecake Blizzard is not available?', a: 'Try the Royal New York Cheesecake Blizzard, which is on the menu all year, or a Strawberry Cheesequake Blizzard at stores that carry it.' },
    ],
  },

  'frosted-sugar-cookie-blizzard': {
    sections: [
      {
        h: 'Frosted Sugar Cookie vs. Confetti Cake Blizzard',
        html: `<p>The Frosted Sugar Cookie is the cheaper of DQ’s two sprinkle Blizzards, and the <a href="/items/confetti-cake-blizzard">Confetti Cake</a> is the summer one. Frosted Sugar Cookie costs 50 cents less at every size, for example about $4.79 vs. $5.29 for a Small.</p>
<p>Calories are close: about 510 for a Small Frosted Sugar Cookie and about 490 for Confetti Cake. One allergy note: the Frosted Sugar Cookie lists eggs among its allergens and Confetti Cake does not.</p>`,
      },
      {
        h: 'Frosted Sugar Cookie vs. Cookie Dough Blizzard',
        html: `<p>The Frosted Sugar Cookie is the lighter cookie Blizzard, and the <a href="/items/cookie-dough-blizzard">Cookie Dough Blizzard</a> is the cheaper one you can get all year. A Small Cookie Dough costs about $4.49 with 710 calories, so the Frosted Sugar Cookie Small is 30 cents more but about 200 calories lighter.</p>
<p>Taste is the real split. Sugar cookie with icing and sprinkles is sweet and buttery, while cookie dough is chewy with chocolate chips.</p>`,
      },
    ],
    faqs: [
      { q: 'When does the Frosted Sugar Cookie Blizzard come out?', a: 'It is a holiday seasonal flavor, so look for it around the winter holidays. Dates vary by store; check the DQ app.' },
    ],
  },

  'heath-blizzard': {
    sections: [
      {
        h: 'Heath Blizzard vs. Butterfinger Blizzard: which to order',
        html: `<p>Order the Heath for buttery toffee and the <a href="/items/butterfinger-blizzard">Butterfinger</a> for flaky peanut butter crunch. They cost the same at every size, from about $3.49 for a Mini to about $5.99 for a Large.</p>
<p>Heath runs a little heavier. A Small Heath has 640 calories and a Small Butterfinger 590, and at the Large it is 1,190 vs. 1,060. Heath toffee contains almonds, so for anyone avoiding tree nuts the choice is made for you.</p>`,
      },
      {
        h: 'Is the Medium Heath Blizzard worth it?',
        html: `<p>Yes, the Medium is one of the better-value Mediums on the menu. At about $5.29 it costs 20 cents less than a Medium Oreo or Reese’s, and it is 80 cents more than the Small for about 240 more calories (880 vs. 640).</p>
<p>The Large adds only 70 cents more, at about $5.99, but jumps to 1,190 calories. That is a sharing size. If you want Heath in a fancier cup, the Heath Caramel Brownie Cupfection on the <a href="/categories/classic-treats">classic treats menu</a> is about $6.29 and 780 calories.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Heath Blizzard gluten-free?', a: 'No. Its listed allergens include wheat, so it is not a gluten-free choice.' },
    ],
  },

  'mint-oreo-blizzard': {
    sections: [
      {
        h: 'Mint Oreo Blizzard vs. Oreo Blizzard',
        html: `<p>The Mint Oreo costs exactly the same as the regular <a href="/items/oreo-blizzard">Oreo Blizzard</a> at every size, so the choice comes down to whether you want mint. Both are about $3.49 for a Mini, $4.49 for a Small, $5.49 for a Medium and $5.99 for a Large.</p>
<p>The mint adds a little: 640 calories for a Small vs. 600 for the regular Oreo, and 1,140 vs. 1,050 for a Large. The big difference is that every DQ has the Oreo, while the Mint Oreo depends on the store.</p>`,
      },
      {
        h: 'Which size of Mint Oreo Blizzard is the best value',
        html: `<p>The Large is the best value per dollar, because it costs only 50 cents more than the Medium. You go from about $5.49 and 880 calories to about $5.99 and 1,140 calories.</p>
<p>That makes the Large a good pick for two people sharing. For one person, the Small at about $4.49 and 640 calories is plenty. In winter, the <a href="/items/peppermint-bark-blizzard">Peppermint Bark Blizzard</a> is the other mint option, at about $4.79 and 500 calories for a Small.</p>`,
      },
    ],
    faqs: [
      { q: 'Does the Mint Oreo Blizzard have nuts?', a: 'Nuts are not in its listed allergens, which are milk, wheat and soy. Check DQ’s allergen information if you have a serious allergy, since stores share equipment.' },
    ],
  },

  'mixing-bowl-mashup-blizzard': {
    sections: [
      {
        h: 'Mixing Bowl Mashup vs. a Cookie Dough or Reese’s Blizzard',
        html: `<p>The Mixing Bowl Mashup costs more but is actually lighter than either of the flavors it borrows from. A Small Mashup is about $5.29 with about 520 calories. A Small <a href="/items/cookie-dough-blizzard">Cookie Dough</a> or <a href="/items/reeses-blizzard">Reese’s</a> is about $4.49, but with 710 and 610 calories.</p>
<p>So you pay 80 cents more for variety: cookie dough, chocolate cookie pieces, peanut butter cups and fudge in one cup. If you only love one of those, the single-flavor Blizzard is the better buy.</p>`,
      },
      {
        h: 'How big a Mixing Bowl Mashup Blizzard to order',
        html: `<p>A Small is enough for one person, since the mix-ins are rich. Moving up to a Medium adds a dollar and about 200 calories (about $6.29 and 720 calories).</p>
<p>The Large is about $6.99 and 1,080 calories, only 70 cents more than the Medium, so it is the size to split with a friend. Once the flavor leaves the menu, our <a href="/blog/dairy-queen-secret-menu">secret menu guide</a> explains how to ask for a similar custom blend.</p>`,
      },
    ],
    faqs: [
      { q: 'When is the Mixing Bowl Mashup Blizzard available?', a: 'It is a summer seasonal flavor, so it is not always on the menu. Check the DQ app to see if your store has it.' },
    ],
  },

  'peppermint-bark-blizzard': {
    sections: [
      {
        h: 'Peppermint Bark vs. Peppermint Hot Cocoa Blizzard',
        html: `<p>Choose Peppermint Bark for more peppermint candy and <a href="/items/peppermint-hot-cocoa-blizzard">Peppermint Hot Cocoa</a> for more chocolate. Both cost the same at every size, from about $3.99 for a Mini to about $6.49 for a Large.</p>
<p>The calories trade places by size. A Small Peppermint Bark has about 500 calories vs. about 480 for Hot Cocoa, but at the Large the Bark is lighter, about 950 vs. 990. If you are ordering a Large to share, Peppermint Bark is the lighter pick.</p>`,
      },
      {
        h: 'Is a Large Peppermint Bark Blizzard worth it?',
        html: `<p>The Large is a good deal for sharing. It costs about $6.49, only 70 cents more than the Medium (about $5.79), and adds about 250 calories (950 vs. 700). That is a smaller calorie jump than most Blizzards make at the top size.</p>
<p>For one person, the Small at about $4.79 is the usual order. Our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> lists lighter treats if you want a smaller holiday dessert.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Peppermint Bark Blizzard gluten-free?', a: 'No. Its listed allergens include wheat, so it is not a gluten-free choice.' },
    ],
  },

  'peppermint-hot-cocoa-blizzard': {
    sections: [
      {
        h: 'Peppermint Hot Cocoa vs. Choco Brownie Extreme Blizzard',
        html: `<p>The Peppermint Hot Cocoa is the lighter chocolate Blizzard with a mint finish, and the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> is the year-round pick for pure chocolate. They cost the same at every size, about $4.79 for a Small.</p>
<p>A Small Peppermint Hot Cocoa has about 480 calories vs. 740 for Choco Brownie Extreme, and a Large is about 990 vs. 1,330. When the winter flavor leaves the menu, Choco Brownie Extreme is the closest chocolate swap.</p>`,
      },
      {
        h: 'Which size of Peppermint Hot Cocoa Blizzard to order',
        html: `<p>A Small (about $4.79, 480 calories) suits most people, and a Mini (about $3.99, 320 calories) is plenty after a meal. The Medium is about $5.79 and 670 calories.</p>
<p>The Large adds 70 cents (about $6.49) and about 320 calories, reaching about 990. That is a sharing size. The <a href="/items/peppermint-bark-blizzard">Peppermint Bark Blizzard</a> costs the same at every size if someone in your group wants more candy and less cocoa.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Peppermint Hot Cocoa Blizzard served hot?', a: 'No. It is a cold Blizzard made with vanilla soft serve, cocoa fudge pieces and peppermint candy. The name refers to the flavor, not the temperature.' },
    ],
  },

  'pumpkin-pie-blizzard': {
    sections: [
      {
        h: 'Is the Pumpkin Pie Blizzard worth the seasonal price?',
        html: `<p>It costs about 60 to 80 cents more than an <a href="/items/oreo-blizzard">Oreo Blizzard</a>, depending on size. A Small is about $5.29 vs. $4.49, and a Large is about $6.79 vs. $5.99. The Medium is the smallest gap, about $6.09 vs. $5.49.</p>
<p>The Medium is also 20 cents cheaper than the Medium of summer seasonal flavors like S’mores (about $6.29). For one person, the Small at 560 calories is the sensible order; the step to Medium adds 80 cents and about 160 calories.</p>`,
      },
      {
        h: 'Pumpkin Pie vs. Banana Cream Pie Blizzard',
        html: `<p>The <a href="/items/banana-cream-pie-blizzard">Banana Cream Pie Blizzard</a> is the cheaper and slightly lighter pie flavor, and the Pumpkin Pie Blizzard is the spiced one. A Small Pumpkin Pie costs about $5.29 with 560 calories. A Small Banana Cream Pie costs about $4.79 with about 540 calories.</p>
<p>Pumpkin Pie brings spice and pie crust, while Banana Cream Pie uses graham crumbs and a sweeter, pudding-like taste. They are rarely on the menu at the same time, since Pumpkin Pie is a fall flavor and Banana Cream Pie runs for a limited time.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Pumpkin Pie Blizzard back this fall?', a: 'It usually returns in the fall, around September through November, but each store sets its own dates. Check the DQ app to see if your store has it.' },
    ],
  },

  'royal-new-york-cheesecake-blizzard': {
    sections: [
      {
        h: 'Royal New York Cheesecake vs. Strawberry Cheesequake Blizzard',
        html: `<p>The Royal New York Cheesecake is the heavier cheesecake Blizzard but is on the menu all year, while the <a href="/items/strawberry-cheesequake-blizzard">Strawberry Cheesequake</a> depends on the store. A Small Royal is about $4.99 with 750 calories. A Small Cheesequake is about $4.79 with about 520.</p>
<p>The two cost the same at the Mini (about $3.99) and Large (about $6.49). At the Large, the Royal is 1,320 calories vs. about 1,060, so the Cheesequake is the lighter one to share.</p>`,
      },
      {
        h: 'How heavy is the Royal New York Cheesecake Blizzard?',
        html: `<p>The Royal New York Cheesecake is one of the heavier Blizzards on the menu, at 750 calories for a Small and 1,040 for a Medium. If you want the flavor with fewer calories, the Mini is 450.</p>
<p>All four Royals, including the <a href="/items/royal-oreo-blizzard">Royal Oreo</a>, cost the same, about $4.99 for a Small, so pick the filled center you like best. See the <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> for other lighter treats.</p>`,
      },
    ],
    faqs: [
      { q: 'Does the Royal New York Cheesecake Blizzard have nuts?', a: 'Nuts are not in its listed allergens, which are milk, wheat and soy. Check DQ’s allergen information if you have a serious allergy.' },
    ],
  },

  'royal-reeses-blizzard': {
    sections: [
      {
        h: 'Royal Reese’s vs. Reese’s Blizzard: price by size',
        html: `<p>The Royal Reese’s costs about 50 cents more than the regular <a href="/items/reeses-blizzard">Reese’s Blizzard</a> at the Mini, Small and Medium, but the Large is the same price, about $6.49. That makes the Large Royal the obvious pick if you are ordering that size anyway.</p>
<p>At the Large you get the peanut butter center for no extra money. At the Small, it is about $4.99 vs. $4.49.</p>`,
      },
      {
        h: 'Royal Reese’s Blizzard vs. Peanut Buster Parfait',
        html: `<p>For the same money, the Royal Reese’s gives you peanut butter and the <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> gives you peanuts and hot fudge. Both cost about $4.99.</p>
<p>The Small Royal Reese’s has about 620 calories and the Parfait about 710. Pick the Royal if you like creamy peanut butter blended through, or the Parfait if you want salty crunch and warm fudge in layers. Both contain peanuts.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the highest-calorie Blizzard at DQ?', a: 'Of the flavors we track, the Royal New York Cheesecake Blizzard is the heaviest at the Mini, Small and Medium sizes (450, 750 and 1,040 calories). At the Large, the Cookie Dough and Turtle Pecan Cluster Blizzards tie at 1,370. The Royal Reese’s tops out at about 1,280 for a Large.' },
    ],
  },

  'royal-rocky-road-trip-blizzard': {
    sections: [
      {
        h: 'Royal Rocky Road Trip vs. Royal Oreo Blizzard',
        html: `<p>Both Royals have a hot fudge center and cost the same, so pick the Rocky Road Trip for more mix-ins and the <a href="/items/royal-oreo-blizzard">Royal Oreo</a> for crunch without nuts. Both cost about $4.99 for a Small and about $6.49 for a Large.</p>
<p>The Rocky Road Trip contains almonds, so the Royal Oreo is the safer choice for a tree nut allergy.</p>`,
      },
      {
        h: 'Royal Rocky Road Trip vs. Choco Brownie Extreme',
        html: `<p>The Rocky Road Trip adds marshmallow, almonds and a fudge center to brownie, while the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a> sticks to chocolate. They cost the same at the Mini (about $3.99) and Large (about $6.49); at the Small and Medium, the Royal is 20 cents more (about $4.99 vs. $4.79 for a Small).</p>
<p>Pick the Rocky Road Trip if you like nuts. Choco Brownie Extreme has no nuts in its listed allergens, so it is the one to pick for a tree nut allergy.</p>`,
      },
    ],
    faqs: [
      { q: 'Which Royal Blizzards have a fudge center?', a: 'The Royal Rocky Road Trip and the Royal Oreo both have a hot fudge center. The Royal Reese’s has a peanut butter center and the Royal New York Cheesecake has a strawberry center.' },
    ],
  },

  'smores-blizzard': {
    sections: [
      {
        h: 'S’mores Blizzard vs. Royal Rocky Road Trip',
        html: `<p>Outside summer, the <a href="/items/royal-rocky-road-trip-blizzard">Royal Rocky Road Trip</a> is the closest year-round match for marshmallow and chocolate. It costs about $4.99 for a Small with about 530 calories, vs. about $5.29 and 500 calories for the S’mores Blizzard.</p>
<p>The differences matter for some people. The Rocky Road Trip uses brownie instead of graham and contains almonds, while the S’mores Blizzard lists no nuts among its allergens. For a nut-free fix, the custom order on this page is the better route.</p>`,
      },
      {
        h: 'Which size of S’mores Blizzard to get',
        html: `<p>For one person, the Small (about $5.29, 500 calories) is the right size. The Mini is about $4.49 and 330 calories, so moving up to a Small adds 80 cents and about 170 calories.</p>
<p>A Medium is about $6.29 and 700 calories. The Large is only 70 cents more, at about $6.99, but about 1,050 calories, so share it. Want to see how S’mores stacks up against every other flavor? Check our <a href="/blog/best-blizzard-flavors-ranked">Blizzard rankings</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'When does the S’mores Blizzard come back?', a: 'It is a summer seasonal flavor, so it usually returns in summer. Dates vary by store; check the DQ app.' },
    ],
  },

  'strawberry-cheesequake-blizzard': {
    sections: [
      {
        h: 'Strawberry Cheesequake Blizzard vs. Strawberry Sundae',
        html: `<p>The <a href="/items/strawberry-sundae">strawberry sundae</a> is the cheaper, lighter strawberry treat, and the Cheesequake is the one with cheesecake and crust. A medium strawberry sundae costs about $3.79 with 340 calories.</p>
<p>A Mini Strawberry Cheesequake costs about $3.99 with about 350 calories, only 20 cents more. If you want cheesecake bites, the Mini Blizzard is worth the small step up. If you just want strawberry and soft serve, the sundae does the job. Note that the Cheesequake lists eggs and wheat among its allergens, and the sundae lists only milk.</p>`,
      },
      {
        h: 'Strawberry Cheesequake vs. Dipped Strawberry Cheesecake',
        html: `<p>The Strawberry Cheesequake is 50 cents cheaper at every size than the summer <a href="/items/dipped-strawberry-cheesecake-blizzard">Dipped Strawberry Cheesecake</a>, which adds chocolate. A Small Cheesequake is about $4.79 and 520 calories vs. about $5.29 and 540.</p>
<p>If your store does not carry the Cheesequake, the year-round <a href="/items/royal-new-york-cheesecake-blizzard">Royal New York Cheesecake</a> is about $4.99 and 750 calories for a Small.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Strawberry Cheesequake Blizzard discontinued?', a: 'Availability varies by store, so some DQs carry it and others do not. The DQ app shows whether your local store has it; if not, the Royal New York Cheesecake Blizzard is a year-round alternative.' },
    ],
  },

  'swicy-pineapple-tajin-blizzard': {
    sections: [
      {
        h: 'Is the Swicy Pineapple Blizzard the lightest Blizzard?',
        html: `<p>At the Mini, Small and Large sizes, yes. The Swicy Pineapple with Tajín Mini has about 270 calories, the Small about 430 and the Large about 900, the lowest of any flavor we track. A Small classic <a href="/items/oreo-blizzard">Oreo Blizzard</a> has 600 calories.</p>
<p>The Oreo is cheaper, though, about $4.49 for a Small vs. $5.29, and it is on the menu all year. Swicy Pineapple is a summer flavor, so when it is around, a Mini is the lightest Blizzard you can order. Our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> compares other lighter treats.</p>`,
      },
      {
        h: 'Swicy Pineapple vs. Cotton Candy Blizzard',
        html: `<p>Both are summer flavors at the same price, so choose Swicy Pineapple for fruit with a little kick and the <a href="/items/cotton-candy-blizzard">Cotton Candy Blizzard</a> for pure sweetness. Each costs about $5.29 for a Small and about $6.99 for a Large.</p>
<p>Swicy is the lighter of the two: about 430 calories for a Small vs. 460, and about 900 for a Large vs. 960. The Tajín adds only a mild chili-lime kick, but kids who do not like any spice are usually happier with Cotton Candy. If you are unsure, start with a Mini of the Swicy for about $4.49.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Swicy Pineapple with Tajín Blizzard dairy-free?', a: 'No. It is made with vanilla soft serve and lists milk as an allergen. For a dairy-free DQ treat, look at the Non-Dairy Dilly Bar, about $2.49.' },
    ],
  },
  '2pc-chicken-strips': {
    sections: [
      {
        h: '2-piece chicken strips vs. the Kids Chicken Strips Meal',
        html: `<p>If you want a side, a drink and dessert, the <a href="/items/kids-chicken-strips-meal">Kids Chicken Strips Meal</a> is the better buy. It costs about $4.99, only $1.50 more than the 2-piece strips at about $3.49, and adds fries or applesauce, a drink and a kids’ vanilla cone.</p>
<p>The 2-piece order is the better choice when you only want the chicken. It is 280 calories, compared with about 610 for the kids meal with fries and the cone. DQ does not set an age limit on kids meals, so adults with a small appetite can order either one.</p>`,
      },
      {
        h: 'Can you build a cheaper basket from 2-piece strips?',
        html: `<p>Yes, but you save very little. Two 2-piece orders cost about $6.98 and a regular fries about $2.49, for about $9.47 in total. The <a href="/items/chicken-strip-basket-4pc">4-piece Chicken Strip Basket</a> costs about $9.99 and also includes Texas toast.</p>
<p>That is a saving of about 52 cents, and you get two dipping sauces instead of one. On the 2 for $5 menu the math improves, because two eligible items cost $5 instead of $6.98. Check whether your store lets you choose the strips twice before you count on it.</p>`,
      },
      {
        h: '2-piece strips or the $7 Meal Deal?',
        html: `<p>For a full meal, the <a href="/items/7-meal-deal">$7 Meal Deal</a> wins. For about $3.51 more than the 2-piece strips, it gives you 3 strips, fries, a soft drink and a small sundae, at about 1,010 calories for the whole meal.</p>
<p>The 2-piece strips make more sense as a snack between meals or as an add-on when someone at the table wants a little chicken next to a burger.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in DQ 2-piece chicken strips with fries?', a: 'About 560 calories with a regular fries: 280 for the strips and 280 for the fries. The dipping sauce adds more.' },
    ],
  },

  'backyard-bacon-ranch-stackburger': {
    sections: [
      {
        h: 'Backyard Bacon Ranch vs. Mushroom Swiss Stackburger',
        html: `<p>Pick the Backyard Bacon Ranch for bacon and a smoky, tangy sauce, and the <a href="/items/mushroom-swiss-stackburger">Mushroom Swiss</a> for an earthier, savory burger. The Backyard Bacon Ranch costs about $9.99 with 820 calories and 38 g of protein. The Mushroom Swiss costs about $9.49 with 680 calories and 36 g of protein.</p>
<p>So the Bacon Ranch costs 50 cents more for about 140 more calories and 2 g more protein. Neither one is spicy, which makes both good picks for people who skip the FlameThrower.</p>`,
      },
      {
        h: 'Is the Backyard Bacon Ranch worth $2 more than a Double Cheeseburger?',
        html: `<p>It is worth it if you want bacon and sauce, but the <a href="/items/double-cheeseburger">Double Cheeseburger</a> is the better value. The double costs about $7.99 with 570 calories and 29 g of protein, so the Backyard Bacon Ranch adds $2.00, about 250 calories and about 9 g of protein.</p>
<p>The bigger difference is in a full meal. Adding a regular fries (about $2.49) and a medium soft drink (about $2.11) brings the Backyard Bacon Ranch to about $14.59. Our <a href="/blog/dq-meal-deals-guide">DQ meal deals guide</a> covers cheaper ways to eat.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories is the Backyard Bacon Ranch Stackburger with fries?', a: 'About 1,100 calories with a regular fries: 820 for the burger and 280 for the fries, before a drink.' },
      { q: 'Can you get the Backyard Bacon Ranch in the $7 Meal Deal?', a: 'No. The $7 Meal Deal comes with an Original Cheeseburger or 3-piece chicken strips. Stackburgers are ordered separately.' },
    ],
  },

  'chili-cheese-dog': {
    sections: [
      {
        h: 'Best 2 for $5 pairs with the chili cheese dog',
        html: `<p>The best pair is the chili cheese dog with the Original Cheeseburger, since together they cost about $11.38 on their own. If you want something lighter, pair it with <a href="/items/2pc-chicken-strips">2-piece chicken strips</a>: about $8.48 separately, so you save about $3.48 on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a>.</p>
<p>Chili cheese dog plus pretzel sticks with queso is another good choice, about $8.98 on their own and about 760 calories together. Skip pairing it with fries, because a regular fries is only about $2.49 anyway.</p>`,
      },
      {
        h: 'What side to get with a chili cheese dog',
        html: `<p>Regular fries are the simplest side, bringing the meal to about 700 calories. <a href="/items/onion-rings">Onion rings</a> (about $3.29 and 290 calories for a regular) make it a slightly heavier meal of about 710 calories.</p>
<p>For a lighter plate, a side salad is about $3.29 and 20 calories before dressing, so the dog and salad together come to about 440 calories. The chili and cheese sauce are already rich, so a lighter side balances it well.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the DQ chili cheese dog gluten-free?', a: 'No. It comes on a wheat bun, and its allergens include milk, wheat and soy. See our DQ gluten-free and allergen guide before ordering.' },
      { q: 'How much protein is in a DQ chili cheese dog?', a: 'About 18 g, compared with about 12 g in a plain hot dog.' },
    ],
  },

  'crispy-chicken-sandwich': {
    sections: [
      {
        h: 'Crispy Chicken Sandwich vs. FlameThrower Chicken Sandwich',
        html: `<p>Stay with the Crispy Chicken Sandwich unless you want heat. It costs about $7.99 with 470 calories. The FlameThrower Chicken Sandwich, sold at some stores, costs about $9.29 with 530 calories and adds spicy FlameThrower sauce.</p>
<p>That is $1.30 more for the sauce and about 60 extra calories. Another option is the Spicy Chicken Strip Sandwich at about $8.49 and 530 calories. All three are listed on the <a href="/categories/burgers-sandwiches">DQ burgers and sandwiches menu</a>.</p>`,
      },
      {
        h: 'Crispy Chicken Sandwich or a chicken strip basket?',
        html: `<p>If you also want fries, the <a href="/items/chicken-strip-basket-4pc">4-piece Chicken Strip Basket</a> is the better deal. The sandwich plus a regular fries costs about $10.48 for about 750 calories. The basket costs about $9.99 and already includes fries, Texas toast and a dipping sauce, for 1,020 calories.</p>
<p>The sandwich is the better pick when you want something lighter or easier to eat in the car. Our <a href="/blog/dq-chicken-strip-baskets-review">chicken strip basket review</a> covers the baskets in more detail.</p>`,
      },
      {
        h: 'Crispy Chicken Sandwich vs. Double Cheeseburger',
        html: `<p>These two cost the same, about $7.99. The Crispy Chicken Sandwich has about 34 g of protein and 470 calories, and the <a href="/items/double-cheeseburger">Double Cheeseburger</a> about 29 g and 570. If you are choosing on value alone, the chicken gives you more protein for about 100 fewer calories.</p>
<p>The double is the better pick when you want beef, and it is easy to customize with extra pickles or onion. The sandwich comes with lettuce, tomato and mayo, and asking for no mayo makes it lighter still.</p>`,
      },
    ],
    faqs: [
      { q: 'Does Dairy Queen have a spicy chicken sandwich?', a: 'At some stores, yes. The FlameThrower Chicken Sandwich costs about $9.29 with 530 calories, and the Spicy Chicken Strip Sandwich about $8.49 with 530 calories.' },
    ],
  },

  'double-cheeseburger': {
    sections: [
      {
        h: 'Double Cheeseburger vs. Two Cheese Deluxe Stackburger',
        html: `<p>The Double Cheeseburger is the smarter buy, and the <a href="/items/two-cheese-deluxe-stackburger">Two Cheese Deluxe</a> is the one to get if you want the bigger Stackburger build. Both have two beef patties. The double costs about $7.99 with 570 calories, and the Two Cheese Deluxe about $8.29 with 620 calories.</p>
<p>For 30 cents more, the Stackburger gives you about 50 more calories. The toppings are close (cheese, pickles, onion, ketchup and mustard on both), so most people will not notice a big difference in taste.</p>`,
      },
      {
        h: 'Double Cheeseburger or the $7 Meal Deal?',
        html: `<p>The <a href="/items/7-meal-deal">$7 Meal Deal</a> is cheaper and gives you more food, but the double gives you more beef. The meal deal costs $7 for an Original Cheeseburger, fries, a soft drink and a small sundae, about 950 calories in total. The Double Cheeseburger alone is about $7.99.</p>
<p>Turning the double into a meal yourself, with a regular fries (about $2.49) and a medium soft drink (about $2.11), costs about $12.59. That is $5.59 more than the meal deal and has no dessert. Check the <a href="/blog/dairy-queen-app-rewards-hacks">DQ app</a> for burger offers before paying full price.</p>`,
      },
    ],
    faqs: [
      { q: 'Which DQ burger has the most protein for the money?', a: 'The Double Cheeseburger is one of the best, with about 29 g of protein for about $7.99. The Backyard Bacon Ranch gives a little more per dollar (about 38 g for about $9.99), while the FlameThrower Double has about 34 g but costs about $10.87.' },
    ],
  },

  'grilled-chicken-sandwich': {
    sections: [
      {
        h: 'Grilled Chicken Sandwich vs. Double Cheeseburger at the same price',
        html: `<p>The Grilled Chicken Sandwich is the better pick if you want protein without the calories. It costs about $7.99, the same as the <a href="/items/double-cheeseburger">Double Cheeseburger</a>, and has about 36 g of protein compared with 29 g in the double.</p>
<p>The chicken sandwich has about 390 calories, while the double has 570. That means you get 7 g more protein for about 180 fewer calories. The double is the choice when you simply want a burger.</p>`,
      },
      {
        h: 'Grilled Chicken Sandwich vs. Original Cheeseburger',
        html: `<p>The two are almost the same in calories, about 390 for the grilled chicken and 370 for the <a href="/items/original-cheeseburger">Original Cheeseburger</a>. The cheeseburger is cheaper at about $6.39, $1.60 less than the sandwich.</p>
<p>The cheeseburger is also part of the $7 Meal Deal, which adds fries, a drink and a small sundae. If you are counting calories, though, that meal comes to about 950, so the grilled sandwich ordered on its own is still the lighter choice.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the DQ Grilled Chicken Sandwich gluten-free?', a: 'No. It comes on a toasted wheat bun, and its listed allergens are milk, wheat, soy and eggs. Our DQ gluten-free and allergen guide lists safer options.' },
      { q: 'How many calories is the Grilled Chicken Sandwich with fries?', a: 'About 670 calories with a regular fries: about 390 for the sandwich and 280 for the fries.' },
    ],
  },

  'honey-bbq-chicken-strip-basket': {
    sections: [
      {
        h: 'Honey BBQ vs. Parmesan Garlic vs. FlameThrower basket',
        html: `<p>All three sauced 4-piece baskets cost about $10.49, so pick by taste. Honey BBQ is the sweet, non-spicy one at 1,140 calories. Parmesan Garlic is the savory one at 1,220 calories, and the FlameThrower basket is the spicy one at 1,020 calories.</p>
<p>For kids or anyone who avoids heat, Honey BBQ is the safe choice. If you want the lightest sauced basket, the FlameThrower is about 120 calories below the Honey BBQ. All of them are on the <a href="/categories/chicken-strip-baskets">DQ chicken strip menu</a>.</p>`,
      },
      {
        h: 'Honey BBQ basket vs. the $7 Meal Deal',
        html: `<p>The <a href="/items/7-meal-deal">$7 Meal Deal</a> is the cheaper chicken meal, and the Honey BBQ basket is the bigger and saucier one. The meal deal gives you 3 plain strips, fries, a soft drink and a small sundae for $7. The Honey BBQ basket costs about $3.49 more and has 4 sauced strips and Texas toast, but no drink or dessert.</p>
<p>Adding a medium soft drink (about $2.11) brings the basket to about $12.60. Our <a href="/blog/dq-meal-deals-guide">DQ meal deals guide</a> compares every value option.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories does the honey BBQ sauce add to a DQ basket?', a: 'About 120. The Honey BBQ 4-piece basket is 1,140 calories, compared with 1,020 for the plain 4-piece basket.' },
    ],
  },

  'hot-dog': {
    sections: [
      {
        h: 'Hot dog or the Kids Hot Dog Meal?',
        html: `<p>For one dollar more, the <a href="/items/kids-hot-dog-meal">Kids Hot Dog Meal</a> is the better deal. The hot dog alone costs about $3.99, and the kids meal costs about $4.99 with a side, a drink and a kids’ vanilla cone.</p>
<p>A regular fries on its own is about $2.49, so the kids meal side is already worth more than the price difference. The whole kids meal is about 660 calories with fries and the cone. DQ does not set an age limit, so adults can order it too.</p>`,
      },
      {
        h: 'Hot dog with fries vs. the $7 Meal Deal',
        html: `<p>The <a href="/items/7-meal-deal">$7 Meal Deal</a> is the better meal for an adult. A hot dog plus a regular fries costs about $6.48 for about 610 calories. For about 52 cents more, the meal deal gives you an Original Cheeseburger, fries, a soft drink and a small sundae.</p>
<p>The hot dog on its own is still a good cheap snack, and it is one of the lightest hot items at about 330 calories. Among entrées, only the 2-piece chicken strips, at about $3.49, cost less.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in a DQ hot dog with fries?', a: 'About 610 calories with a regular fries: 330 for the hot dog and 280 for the fries.' },
    ],
  },

  'mushroom-swiss-stackburger': {
    sections: [
      {
        h: 'Mushroom Swiss vs. Two Cheese Deluxe Stackburger',
        html: `<p>The Mushroom Swiss is the one for people who want a more grown-up, savory burger, and the <a href="/items/two-cheese-deluxe-stackburger">Two Cheese Deluxe</a> is the cheaper classic. The Mushroom Swiss costs about $9.49 with 680 calories. The Two Cheese Deluxe costs about $8.29 with 620 calories.</p>
<p>You pay $1.20 more for mushrooms, Swiss cheese and mushroom sauce instead of pickles, onion, ketchup and mustard. If someone in your group is a picky eater, the Two Cheese Deluxe is the safer order.</p>`,
      },
      {
        h: 'Mushroom Swiss vs. Loaded A.1. Steakhouse Burger',
        html: `<p>If your store has the Loaded A.1. Steakhouse Burger, it is the closest match to the Mushroom Swiss, but it is heavier and pricier. It costs about $10.49 with 760 calories, compared with $9.49 and 680 calories for the Mushroom Swiss.</p>
<p>The A.1. burger is a rotational item with bacon, cheddar and crispy onion on a pretzel bun. The Mushroom Swiss is on the regular <a href="/categories/burgers-sandwiches">DQ burger menu</a>, so you can usually count on finding it.</p>`,
      },
      {
        h: 'What side to get with the Mushroom Swiss',
        html: `<p>A side salad is the best match if you want to keep the meal under 800 calories: about $3.29 and 20 calories before dressing, for about 700 calories in total. <a href="/items/onion-rings">Onion rings</a> (about $3.29 and 290 calories) bring it to about 970 calories and suit the steakhouse style.</p>
<p>Regular fries sit in the middle, at about $2.49 and 280 calories, for about 960 calories with the burger. Cheese curds (about $3.99 and 500 calories) are the heaviest choice and are better shared.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Mushroom Swiss Stackburger vegetarian?', a: 'No. It is built on a seasoned beef patty, and the mushroom sauce and Swiss cheese are toppings, not a replacement for the meat.' },
    ],
  },

  'two-cheese-deluxe-stackburger': {
    sections: [
      {
        h: 'Two Cheese Deluxe vs. FlameThrower Stackburger',
        html: `<p>The Two Cheese Deluxe is the budget Stackburger, and the <a href="/items/flamethrower-stackburger">FlameThrower</a> is the spicy, loaded one. The Two Cheese Deluxe costs about $8.29 with 620 calories. The FlameThrower Double costs about $10.87 with 720 calories.</p>
<p>That is a $2.58 gap and about 100 calories. The Two Cheese Deluxe has no heat at all, so it is the better pick for kids, picky eaters or anyone who just wants a classic double cheeseburger in Stackburger size.</p>`,
      },
      {
        h: 'How much does a Two Cheese Deluxe meal cost?',
        html: `<p>Adding a regular fries (about $2.49) and a medium soft drink (about $2.11) brings the Two Cheese Deluxe to about $12.89. With the fries it is about 900 calories before the drink.</p>
<p>That is $5.89 more than the <a href="/items/7-meal-deal">$7 Meal Deal</a>, which comes with a single Original Cheeseburger and a small sundae. If you want two patties in a meal, our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> can help you pick a lighter side.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in the Two Cheese Deluxe with fries?', a: 'About 900 calories with a regular fries: 620 for the burger and 280 for the fries.' },
    ],
  },

  'kids-cheeseburger-meal': {
    sections: [
      {
        h: 'Kids Cheeseburger Meal vs. Kids Hot Dog Meal',
        html: `<p>Both cost about $4.99, so choose by what your child will eat. The cheeseburger meal is about 600 calories with fries and the cone, and the <a href="/items/kids-hot-dog-meal">Kids Hot Dog Meal</a> is about 660.</p>
<p>The cheeseburger has cheese, so milk is in the entrée as well as the cone. With the hot dog meal, milk is listed only for the cone. That makes the hot dog the easier swap for kids who are sensitive to dairy, as long as you skip the cone.</p>`,
      },
      {
        h: 'Kids Cheeseburger Meal or the $7 Meal Deal for an adult?',
        html: `<p>For a light eater the kids meal is enough, but the <a href="/items/7-meal-deal">$7 Meal Deal</a> is the better adult meal. For about $2.01 more, it gives you a full-size Original Cheeseburger (370 calories), fries, a soft drink and a small sundae, about 950 calories in total.</p>
<p>The kids meal comes to about 600 calories with fries and a cone. With applesauce (about 45 calories) instead of kids’ fries (170), it drops to about 475.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the kids meal cheeseburger the same as the Original Cheeseburger?', a: 'No. The kids meal has a smaller, kid-size cheeseburger. The full-size Original Cheeseburger costs about $6.39 on its own and has 370 calories.' },
    ],
  },

  'kids-chicken-strips-meal': {
    sections: [
      {
        h: 'Kids Chicken Strips Meal vs. 2-piece chicken strips',
        html: `<p>The kids meal is the better buy for a child who wants a full meal. It costs about $4.99, just $1.50 more than <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> on their own (about $3.49), and adds fries or applesauce, a drink and a kids’ vanilla cone.</p>
<p>The 2-piece order is 280 calories, while the kids meal is about 610 with fries and the cone. If your child only wants a snack, or you are adding chicken to someone else’s meal, the plain strips are enough.</p>`,
      },
      {
        h: 'Kids strips meal or the $7 Meal Deal with chicken?',
        html: `<p>For an older child or a hungry adult, the <a href="/items/7-meal-deal">$7 Meal Deal</a> is worth the extra $2.01. It has 3 chicken strips instead of 2, adult-size fries, a soft drink and a small sundae, at about 1,010 calories.</p>
<p>For most younger kids, two strips with a side and a cone is plenty. The <a href="/blog/dq-chicken-strip-baskets-review">chicken strip basket review</a> covers the bigger 4-piece and 6-piece baskets.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in the kids chicken strip meal with applesauce?', a: 'About 485 with the cone. Applesauce is about 45 calories compared with 170 for kids’ fries, which takes about 125 calories off the 610 total.' },
    ],
  },

  'kids-hot-dog-meal': {
    sections: [
      {
        h: 'Kids Hot Dog Meal vs. buying a hot dog on its own',
        html: `<p>The kids meal is the better deal by a wide margin. A plain <a href="/items/hot-dog">hot dog</a> costs about $3.99, and the Kids Hot Dog Meal costs about $4.99, so the side, the drink and the kids’ vanilla cone cost only about $1 more together.</p>
<p>A regular fries on its own is about $2.49 and a kids’ cone about $1.79, so you would pay far more buying them separately. Adults can order the kids meal too, which makes it one of the cheapest full meals at DQ.</p>`,
      },
      {
        h: 'Is the Kids Hot Dog Meal good for kids with allergies?',
        html: `<p>It is the kids meal with the shortest allergen list, but check the details first. The hot dog meal lists wheat and soy, with milk only from the cone. The cheeseburger meal adds milk in the cheese, and the <a href="/items/kids-chicken-strips-meal">chicken strips meal</a> adds eggs.</p>
<p>For a dairy-sensitive child, ask for no cone. The bun contains wheat, so it is not gluten-free. Our <a href="/blog/dq-gluten-free-allergen-guide">DQ allergen guide</a> has more detail.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in the Kids Hot Dog Meal with applesauce?', a: 'About 535 with the cone. Choosing applesauce (about 45 calories) instead of kids’ fries (170) takes about 125 calories off the 660 total.' },
    ],
  },
  'biscuit-gravy': {
    sections: [
      {
        h: 'Biscuit & Gravy vs. Breakfast Burrito: which to get',
        html: `<p>Get the Biscuit &amp; Gravy if you want something warm to eat with a fork at a table, and the <a href="/items/breakfast-burrito">Breakfast Burrito</a> if you are eating on the go. The burrito costs about $3.49 with about 380 calories, so the biscuit is about 50 cents more for only about 20 more calories.</p>
<p>What you get is the bigger difference. The burrito has eggs, cheese and meat, so it is the more complete breakfast. The biscuit is bread and peppery gravy, closer to a hearty side. If you are hungry, ordering both comes to about $7.48 and 780 calories.</p>`,
      },
      {
        h: 'Biscuit & Gravy plus a burrito, or the Country Breakfast Platter?',
        html: `<p>If you want a biscuit and a full breakfast, the <a href="/items/country-breakfast-platter">Country Breakfast Platter</a> is the better buy. It costs about $6.99 for about 860 calories and already includes a biscuit with country gravy, plus scrambled eggs, sausage and hash browns.</p>
<p>Buying the Biscuit &amp; Gravy and a Breakfast Burrito separately costs about $7.48 for about 780 calories, so the platter is about 49 cents cheaper and gives you more food. The separate order still makes sense when two people are splitting breakfast, or when one of you wants something to hold in the car.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the cheapest breakfast at Dairy Queen?', a: 'The Breakfast Burrito, at about $3.49. The Biscuit & Gravy is next at about $3.99. Prices vary by location.' },
    ],
  },

  'breakfast-burrito': {
    sections: [
      {
        h: 'Breakfast Burrito vs. Ultimate Hash Browns Platter',
        html: `<p>The Breakfast Burrito is the quick, cheap version of the <a href="/items/ultimate-hash-browns-platter">Ultimate Hash Browns Platter</a>. Both are built on scrambled eggs, cheese and meat, but the burrito costs about $3.49 with about 380 calories, while the platter costs about $5.99 with about 790 calories.</p>
<p>That extra $2.50 buys a bed of hash browns and country gravy, which roughly doubles the calories. Pick the burrito when you need one hand free or only want a light start. Pick the platter when you are sitting down and want breakfast to carry you to a late lunch.</p>`,
      },
      {
        h: 'Are two Breakfast Burritos a better deal than a platter?',
        html: `<p>Two Breakfast Burritos and the <a href="/items/country-breakfast-platter">Country Breakfast Platter</a> cost almost exactly the same, so it comes down to what you want. Two burritos are about $6.98 for about 760 calories. The platter is about $6.99 for about 860 calories and adds hash browns and a biscuit with gravy.</p>
<p>Two burritos win when two people each want their own breakfast, or when you are eating in the car. The platter wins for one very hungry person at a table. If you are counting calories, one burrito at about 380 is the lightest breakfast on the menu; our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> covers the rest of the menu.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the lowest-calorie breakfast at Dairy Queen?', a: 'The Breakfast Burrito, at about 380 calories. The Biscuit & Gravy is close behind at about 400 calories.' },
    ],
  },

  'buttermilk-pancake-platter': {
    sections: [
      {
        h: 'Pancake Platter vs. French Toast Platter',
        html: `<p>The Buttermilk Pancake Platter is the cheaper and slightly lighter of DQ’s two sweet breakfasts. It costs about $5.49 with about 680 calories. The French Toast Platter, listed on our <a href="/categories/breakfast">DQ breakfast menu</a>, costs about $5.99 with about 720 calories.</p>
<p>Both come with syrup and sausage, so the choice is mostly about taste. Pancakes are soft and plain, which suits kids and anyone who likes to add their own butter and syrup. The French toast is thick-cut with cinnamon and powdered sugar, so it is sweeter before you add anything. Not every breakfast store sells both.</p>`,
      },
      {
        h: 'Pancake Platter or Country Breakfast Platter: sweet or savory?',
        html: `<p>Order the Pancake Platter if you want a sweet breakfast for less money, and the <a href="/items/country-breakfast-platter">Country Breakfast Platter</a> if you want eggs and gravy. The Country platter costs about $1.50 more (about $6.99) and has about 180 more calories (about 860).</p>
<p>For that extra money you get scrambled eggs, hash browns and a biscuit with country gravy instead of pancakes. Both include sausage. A couple sharing breakfast often orders one of each and swaps a few bites, which gets you both the sweet and savory sides of the DQ breakfast menu for about $12.48.</p>`,
      },
    ],
    faqs: [
      { q: 'How many pancakes come in the DQ pancake platter?', a: 'Usually a stack of three buttermilk pancakes, served with butter, syrup and a sausage patty. Portions can vary by store.' },
    ],
  },

  'country-breakfast-platter': {
    sections: [
      {
        h: 'Is the Country Breakfast Platter worth $1 more than the Ultimate Hash Browns Platter?',
        html: `<p>It is worth the extra dollar if you want a biscuit and like your food kept separate. The Country Breakfast Platter costs about $6.99 with about 860 calories. The <a href="/items/ultimate-hash-browns-platter">Ultimate Hash Browns Platter</a> costs about $5.99 with about 790 calories.</p>
<p>Both have eggs, sausage, hash browns and country gravy. The difference is that the Country platter adds a biscuit and keeps everything in its own spot, while the Hash Browns Platter piles it all into one dish with cheese on top. If you do not care about the biscuit, the Hash Browns Platter is the better value.</p>`,
      },
      {
        h: 'Can two people share the Country Breakfast Platter?',
        html: `<p>Yes, and it is one of the cheaper ways for two light eaters to have a hot breakfast. Split two ways, the platter is about $3.50 and about 430 calories each, which is close to the price of one <a href="/items/breakfast-burrito">Breakfast Burrito</a> (about $3.49 and 380 calories).</p>
<p>It splits easily because the parts are separate: one person takes the eggs and sausage, the other the hash browns, and you share the biscuit and gravy. Ask for an extra fork and plate. Since breakfast hours vary by store, check our <a href="/blog/dq-breakfast-hours-menu">DQ breakfast hours guide</a> before a late start.</p>`,
      },
    ],
    faqs: [
      { q: 'Can I get the Country Breakfast Platter in the afternoon?', a: 'No. It is a breakfast item, usually served only until about 10:30 or 11 AM at stores that serve breakfast.' },
    ],
  },

  'ultimate-hash-browns-platter': {
    sections: [
      {
        h: 'Is the Ultimate Hash Browns Platter better value than the Country Breakfast Platter?',
        html: `<p>Yes, on price per calorie the Ultimate Hash Browns Platter is the best value on the DQ breakfast menu. It costs about $5.99 for about 790 calories, roughly 132 calories per dollar. The <a href="/items/country-breakfast-platter">Country Breakfast Platter</a> costs about $6.99 for about 860 calories, roughly 123 calories per dollar.</p>
<p>Both have eggs, sausage, hash browns and country gravy. The extra dollar for the Country platter mostly pays for a biscuit and for having each part on its own. If you would rather have everything mixed together with cheese, save the dollar.</p>`,
      },
      {
        h: 'Ultimate Hash Browns Platter vs. Buttermilk Pancake Platter',
        html: `<p>The Ultimate Hash Browns Platter is the savory pick and the <a href="/items/buttermilk-pancake-platter">Buttermilk Pancake Platter</a> is the sweet one. The Hash Browns Platter costs about 50 cents more (about $5.99 vs. $5.49) and has about 110 more calories (790 vs. 680).</p>
<p>Both include sausage, but only the Hash Browns Platter has eggs and cheese, so it keeps you full longer. The pancake platter is better for kids or anyone who wants syrup with breakfast. You can compare every morning item on our <a href="/categories/breakfast">DQ breakfast menu</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Does the Ultimate Hash Browns Platter come with a biscuit?', a: 'No. It is hash browns topped with sausage, scrambled eggs, cheese and country gravy. For a biscuit, order the Country Breakfast Platter or add a Biscuit & Gravy for about $3.99.' },
    ],
  },

  'cheese-curds': {
    sections: [
      {
        h: 'Cheese curds vs. onion rings: which side to order',
        html: `<p>Order cheese curds when you want the side DQ is known for, and <a href="/items/onion-rings">onion rings</a> when you want more food for the money. Cheese curds cost about $3.99 with 500 calories. A regular order of onion rings costs about $3.29 with 290 calories, and a large is the same $3.99 as the curds with 450 calories.</p>
<p>The two eat very differently. Curds are rich, salty bites of melted cheese that are best in the first few minutes. Onion rings are lighter in the middle and go better alongside a burger, while curds work well as a snack by themselves.</p>`,
      },
      {
        h: 'Are DQ cheese curds good for sharing?',
        html: `<p>Yes. One order of cheese curds is a good shared snack for two or three people. Split two ways it is about $2.00 and 250 calories each; split three ways it is about $1.33 and 167 calories each.</p>
<p>Order them first and eat them at the table, because they lose their stretch quickly. They are battered with wheat and fried, so they are not a choice for anyone avoiding gluten. Our <a href="/blog/dq-gluten-free-allergen-guide">DQ gluten-free and allergen guide</a> lists safer options.</p>`,
      },
    ],
    faqs: [
      { q: 'Are Dairy Queen cheese curds gluten-free?', a: 'No. DQ cheese curds are coated in a wheat-based batter and cooked in shared fryers, so they are not suitable for people with celiac disease.' },
    ],
  },

  'onion-rings': {
    sections: [
      {
        h: 'Regular or large onion rings: which size is better value?',
        html: `<p>The large is the better value. A regular order costs about $3.29 with 290 calories, and a large costs about $3.99 with 450 calories, so the extra 70 cents buys about 160 more calories of rings.</p>
<p>Per dollar, that is about 88 calories for the regular and about 113 for the large. For one person with a burger, the regular is usually plenty. For two people sharing a side, one large costs less than two regulars (about $6.58) and is still a good amount. Pair them with something from our <a href="/blog/best-dairy-queen-burgers-ranked">DQ burger rankings</a>.</p>`,
      },
      {
        h: 'Onion rings vs. fries at DQ',
        html: `<p>Fries are the cheaper side and onion rings are the pricier one. Regular <a href="/items/regular-fries">fries</a> cost about $2.49 with 280 calories, while a regular order of onion rings is about $3.29 with 290 calories.</p>
<p>For 80 cents more, the regular onion rings give you only about 10 more calories, but a crunchier, slightly sweet bite. Fries hold up better on a long drive home, and onion rings are best eaten right away.</p>`,
      },
    ],
    faqs: [
      { q: 'Are DQ onion rings gluten-free?', a: 'No. They are coated in a batter that contains wheat, and DQ also lists milk as an allergen for them.' },
    ],
  },

  'pretzel-sticks-queso': {
    sections: [
      {
        h: 'How much you save on pretzel sticks with the 2 for $5 menu',
        html: `<p>At stores where pretzel sticks are on the 2 for $5 menu, you save about $2.48 to $3.98, depending on the second item. Pretzel sticks cost about $3.99 on their own. Add <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> (about $3.49) and the separate total is about $7.48, so the $5 deal saves about $2.48.</p>
<p>Pair them with a <a href="/items/chili-cheese-dog">Chili Cheese Dog</a> (about $4.99) instead, and the separate total is about $8.98, a saving of about $3.98. That pair is about 760 calories in all. The eligible list varies by store, so check the menu board first.</p>`,
      },
      {
        h: 'Pretzel sticks with queso vs. onion rings',
        html: `<p>Pretzel sticks cost a little more but come with their own dip, so they are the easier snack to share. They cost about $3.99 with 340 calories including the queso. A regular order of <a href="/items/onion-rings">onion rings</a> costs about $3.29 with 290 calories.</p>
<p>The textures are opposites. Pretzel sticks are soft and chewy, while onion rings are crispy and battered. Onion rings suit a burger meal, while pretzel sticks with queso work better as a snack to pass around between meals.</p>`,
      },
    ],
    faqs: [
      { q: 'Are DQ pretzel sticks gluten-free?', a: 'No. Soft pretzel sticks are made from wheat dough, and the queso contains milk. Check DQ’s allergen information if you have a food allergy.' },
    ],
  },

  'regular-fries': {
    sections: [
      {
        h: 'Which size of DQ fries is the best value?',
        html: `<p>The large is the best value per dollar. A regular is about $2.49 and 280 calories, and a large is about $3.49 and 450, so the extra dollar adds about 170 calories.</p>
<p>That works out to roughly 112 calories per dollar for a regular and 129 for a large. If two people are sharing, one large (about $3.49) is a better buy than two regulars (about $4.98 for 560 calories). For one person, a regular is usually enough next to a burger.</p>`,
      },
      {
        h: 'Is it cheaper to get DQ fries in a meal deal?',
        html: `<p>Yes. If you want a burger, fries and a drink, the <a href="/items/7-meal-deal">$7 Meal Deal</a> is much cheaper than buying them separately. An Original Cheeseburger (about $6.39) plus regular fries (about $2.49) and a soft drink (from about $2.11) comes to about $10.99.</p>
<p>The $7 Meal Deal covers a cheeseburger or 3-piece chicken strips, fries and a drink, and adds a small sundae, for about $7. That is about $3.99 less before you even count the sundae. See every bundle on our <a href="/combos">DQ deals and combos page</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the cheapest side at Dairy Queen?', a: 'A regular order of fries, at about $2.49. Onion rings and the side salad start at about $3.29. Prices vary by location.' },
    ],
  },

  'side-salad': {
    sections: [
      {
        h: 'Light DQ meals built around the side salad',
        html: `<p>The side salad makes the lightest full meals at DQ when you pair it with grilled chicken or a small order of strips. A <a href="/items/grilled-chicken-sandwich">Grilled Chicken Sandwich</a> (about $7.99, 390 calories) with a side salad comes to about $11.28 and 410 calories before dressing.</p>
<p>For less money, <a href="/items/2pc-chicken-strips">2-piece chicken strips</a> (about $3.49, about 280 calories for the strips) with a side salad is about $6.78 and roughly 300 calories plus sauce and dressing. For comparison, the $7 Meal Deal with a cheeseburger is about 950 calories.</p>`,
      },
      {
        h: 'Is the DQ side salad worth $3.29?',
        html: `<p>It is worth it if you want something light, not if you want the most food for your money. At about $3.29, it costs the same as a regular order of onion rings (290 calories) and about 80 cents more than regular fries (280 calories), but it has only about 20 calories before dressing.</p>
<p>So you are paying for a lighter side, not a bigger one. It is a good choice next to a heavy entrée like a burger, and a weak one if you are hungry and on a budget. The croutons contain wheat, so see our <a href="/blog/dq-gluten-free-allergen-guide">DQ allergen guide</a> if you avoid gluten.</p>`,
      },
    ],
    faqs: [
      { q: 'Does Dairy Queen have a full-size salad?', a: 'Many DQ Grill & Chill stores sell a Crispy Chicken Strips Salad Bowl for about $9.49, with about 470 calories. Availability varies by store.' },
    ],
  },

  'cookie-dough-blizzard-cake': {
    sections: [
      {
        h: 'Cookie Dough Blizzard Cake vs. classic 10-inch DQ cake',
        html: `<p>The Cookie Dough Blizzard Cake costs about $3 more than the <a href="/items/dq-cake-round-10inch">classic 10-inch cake</a> and serves the same 12 to 16 people. The Cookie Dough cake is about $35.99 and the classic is about $32.99.</p>
<p>Per slice, that is about $2.25 to $3.00 for Cookie Dough and about $2.06 to $2.75 for the classic, depending on how many people you cut it for. The extra 19 to 25 cents a slice gets you chewy cookie dough pieces all through the soft serve instead of plain chocolate and vanilla layers. For a group of picky kids, the classic is the safer pick.</p>`,
      },
      {
        h: 'Cookie Dough Blizzard Cake vs. buying Blizzards for the group',
        html: `<p>The cake is cheaper than buying everyone a Blizzard. Twelve Mini <a href="/items/cookie-dough-blizzard">Cookie Dough Blizzards</a> at about $3.49 each would cost about $41.88, while the cake costs about $35.99 and serves 12 to 16.</p>
<p>Twelve Smalls (about $4.49 each) would be about $53.88. The cake also has the advantage of being ready at one time, with no line of cups melting while the last ones are made. Blizzards make more sense when people want different flavors, or for a group of only four or five.</p>`,
      },
    ],
    faqs: [
      { q: 'How much is a Cookie Dough Blizzard Cake per slice?', a: 'At about $35.99 for 12 to 16 servings, it works out to about $2.25 to $3.00 per slice. Prices vary by location.' },
      { q: 'Can I get a Cookie Dough Blizzard Cake in an 8-inch size?', a: 'Some stores offer Blizzard flavors in the 8-inch size. Ask your local DQ when you order, ideally 24 to 48 hours ahead.' },
    ],
  },

  'dq-cake-round-10inch': {
    sections: [
      {
        h: 'How much does a 10-inch DQ cake cost per slice?',
        html: `<p>A classic 10-inch DQ cake works out to about $2.06 to $2.75 per slice. That is about $32.99 divided across 12 to 16 servings.</p>
<p>That is a little cheaper per slice than the <a href="/items/dq-cake-round-8inch">8-inch cake</a> (about $2.30 to $2.87) and more than a sheet cake (about $1.41 to $1.87). Blizzard flavors in the 10-inch size cost more: about $2.25 to $3.00 per slice for Cookie Dough and about $2.42 to $3.23 for Oreo.</p>`,
      },
      {
        h: 'DQ cake for 20 people: 10-inch plus 8-inch, or a sheet cake?',
        html: `<p>For about 20 people, a <a href="/items/dq-sheet-cake">sheet cake</a> is the cheaper choice. A 10-inch and an 8-inch together cost about $55.98 and serve about 20 to 26. One sheet cake costs about $44.99 and serves about 24 to 32, so it saves about $10.99 and leaves room for seconds.</p>
<p>Two round cakes still make sense if you want two different flavors, or if you need cake today, since round cakes are more likely to be waiting in the freezer case. A sheet cake needs about 48 hours’ notice. More planning help is in our <a href="/blog/dq-cakes-complete-guide">DQ cake guide</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Is a 10-inch DQ cake enough for 20 people?', a: 'Not at standard slice sizes, since it serves about 12 to 16. For 20 people, order a sheet cake (about 24 to 32 servings) or add an 8-inch cake.' },
    ],
  },

  'dq-cake-round-8inch': {
    sections: [
      {
        h: 'How much is an 8-inch DQ cake per slice?',
        html: `<p>An 8-inch DQ cake costs about $2.30 to $2.87 per slice, based on about $22.99 for 8 to 10 servings. It has the lowest total price of any DQ cake, but not the lowest price per slice.</p>
<p>The <a href="/items/dq-cake-round-10inch">10-inch cake</a> is about $2.06 to $2.75 per slice, so it is the better buy if you have 12 or more people. If you only have six or seven, the 8-inch still makes sense, because the leftovers keep well in the freezer.</p>`,
      },
      {
        h: 'Two 8-inch DQ cakes or one sheet cake?',
        html: `<p>One <a href="/items/dq-sheet-cake">sheet cake</a> is the better deal. Two 8-inch cakes cost about $45.98 and serve about 16 to 20 people. A sheet cake costs about $44.99 and serves about 24 to 32.</p>
<p>Two 8-inch cakes are still useful in two cases: you need cake the same day (8-inch cakes are the ones most often in the freezer case, while sheet cakes need about 48 hours), or you want two different messages, such as for a shared birthday. For party math on every size, see the <a href="/categories/dq-cakes">DQ cake prices page</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Is an 8-inch DQ cake enough for 12 people?', a: 'Only with small slices. It serves about 8 to 10. For 12 people, the 10-inch cake (about $32.99, serves 12 to 16) is the better fit.' },
    ],
  },

  'dq-sheet-cake': {
    sections: [
      {
        h: 'DQ sheet cake vs. two 8-inch cakes',
        html: `<p>The sheet cake costs about a dollar less than two 8-inch cakes and feeds more people. A sheet cake is about $44.99 for 24 to 32 servings, while two <a href="/items/dq-cake-round-8inch">8-inch cakes</a> are about $45.98 for 16 to 20 servings.</p>
<p>The trade-off is timing. Sheet cakes usually need about 48 hours’ notice, and 8-inch cakes are often ready in the freezer case. If the party is today, two rounds may be your only option. If you can plan two days ahead, the sheet cake is the clear pick.</p>`,
      },
      {
        h: 'DQ sheet cake vs. two Blizzard cakes',
        html: `<p>The sheet cake is far cheaper than two Blizzard cakes for the same crowd. Two <a href="/items/oreo-blizzard-cake">Oreo Blizzard Cakes</a> cost about $77.48 and two <a href="/items/cookie-dough-blizzard-cake">Cookie Dough Blizzard Cakes</a> about $71.98. Each pair serves about 24 to 32, the same as one sheet cake at about $44.99.</p>
<p>That makes the sheet cake about $26.99 to $32.49 cheaper. A good middle option for a group of Blizzard fans is one sheet cake for the crowd plus a single Blizzard cake for the guest of honor’s table.</p>`,
      },
    ],
    faqs: [
      { q: 'How many 10-inch DQ cakes equal one sheet cake?', a: 'About two. Two 10-inch cakes serve about 24 to 32 people, the same as one sheet cake, but cost about $65.98 compared with about $44.99 for the sheet cake.' },
    ],
  },

  'oreo-blizzard-cake': {
    sections: [
      {
        h: 'Oreo Blizzard Cake vs. buying Oreo Blizzards for everyone',
        html: `<p>The cake is the cheaper way to give a group Oreo Blizzard flavor. Twelve Mini <a href="/items/oreo-blizzard">Oreo Blizzards</a> at about $3.49 each come to about $41.88. The Oreo Blizzard Cake costs about $38.74 and serves 12 to 16.</p>
<p>A Mini Oreo Blizzard is 330 calories, so it is a fair-sized serving, but the cake still wins on price as soon as you have about a dozen people. Blizzards are the better choice for a small group of four to six, or when guests want different flavors.</p>`,
      },
      {
        h: 'How much is the Oreo Blizzard Cake per slice?',
        html: `<p>The Oreo Blizzard Cake works out to about $2.42 to $3.23 per slice, based on about $38.74 for 12 to 16 servings. That makes it the most expensive DQ cake per slice.</p>
<p>The <a href="/items/dq-cake-round-10inch">classic 10-inch cake</a> is about $2.06 to $2.75 per slice, so the Oreo version adds roughly 36 to 48 cents a slice. The Cookie Dough Blizzard Cake sits between them at about $2.25 to $3.00. For a large party, a plain sheet cake (about $1.41 to $1.87 per slice) costs much less.</p>`,
      },
    ],
    faqs: [
      { q: 'What other Blizzard cake flavors does Dairy Queen have?', a: 'Besides Oreo, most stores offer Cookie Dough, and many also make Choco Brownie Extreme and Reese’s Blizzard cakes from about $35.99. The flavor line-up varies by store and season.' },
    ],
  },
  'banana-split': {
    sections: [
      {
        h: 'Banana Split vs. Peanut Buster Parfait: which to order',
        html: `<p>Order the Banana Split if you want fruit and variety, and the <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> if you want peanuts and fudge. The Banana Split costs about $5.69 with 520 calories. The parfait costs about $4.99 with 710 calories.</p>
<p>So the Banana Split costs 70 cents more but has about 190 fewer calories. Most of its bulk comes from the banana and the fruit toppings, so it eats lighter than the parfait, which is layered with salted peanuts and hot fudge all the way down. If anyone at the table has a peanut allergy, the Banana Split is the safer of the two to share.</p>`,
      },
      {
        h: 'Is a Banana Split cheaper than two sundaes?',
        html: `<p>Yes. Sharing one Banana Split costs less than buying two medium sundaes. Two medium sundaes, such as two <a href="/items/strawberry-sundae">strawberry sundaes</a>, cost about $7.58 together. One Banana Split costs about $5.69, so two people save about $1.89.</p>
<p>Split down the middle, each person gets about 260 calories for about $2.85. That is about 80 fewer calories than one medium strawberry sundae, and you also get pineapple, chocolate and banana. It only works if you are happy eating from the same dish, so ask for two spoons.</p>`,
      },
    ],
    faqs: [
      { q: 'Can you get a Banana Split at a Treat-only Dairy Queen?', a: 'Usually, yes. Classic treats like the Banana Split, cones and sundaes are sold at Treat-only stores as well as DQ Grill & Chill restaurants. Check the DQ app if you want to be sure.' },
      { q: 'How many calories are in half a Banana Split?', a: 'About 260 calories, if you split the 520-calorie Banana Split evenly between two people.' },
    ],
  },

  'brownie-oreo-cupfection': {
    sections: [
      {
        h: 'Brownie & Oreo Cupfection vs. Heath Caramel Brownie Cupfection',
        html: `<p>Pick the Brownie & Oreo Cupfection for cookie crunch and the Heath Caramel Brownie Cupfection for toffee and caramel. Both cost about $6.29. The Brownie & Oreo version has 720 calories and the Heath Caramel Brownie version about 780, so they are close.</p>
<p>The Heath version leans on toffee and caramel, while the Brownie & Oreo cup is mostly chocolate and cookie, with fudge. Both are listed on our <a href="/categories/classic-treats">classic treats menu</a>, but not every store carries both at the same time.</p>`,
      },
      {
        h: 'Is the Cupfection worth it compared with a Small Blizzard?',
        html: `<p>The Cupfection is worth it when you are sharing, and a Small Blizzard is the better buy for one person. A Small <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme Blizzard</a> costs about $4.79 with 740 calories, which is $1.50 less than the Cupfection. A Small <a href="/items/oreo-blizzard">Oreo Blizzard</a> is about $4.49 and 600 calories.</p>
<p>Shared between two people, the Cupfection works out to about $3.15 and 360 calories each. That is less than a Small Oreo Blizzard per person, with brownie and fudge on top.</p>`,
      },
    ],
    faqs: [
      { q: 'What is the highest-calorie classic treat at Dairy Queen?', a: 'The Heath Caramel Brownie Cupfection, at about 780 calories. The Brownie & Oreo Cupfection is next at 720, followed closely by the Peanut Buster Parfait at 710.' },
    ],
  },

  'buster-bar': {
    sections: [
      {
        h: 'Buster Bar vs. Dilly Bar: which to grab',
        html: `<p>Grab the Buster Bar when you want something filling, and the <a href="/items/dilly-bar">Dilly Bar</a> when you want a small, cheap treat. The Buster Bar costs about $2.49 with about 475 calories. The Dilly Bar costs about $1.99 with about 220 calories.</p>
<p>For 50 cents more, the Buster Bar adds a layer of fudge and peanuts under the chocolate shell, so it eats more like a dessert than a snack. The Dilly Bar is the better pick for young kids or after a big meal. Anyone avoiding peanuts should stick with the Dilly Bar.</p>`,
      },
      {
        h: 'Which DQ novelty gives the most for your money?',
        html: `<p>The Buster Bar gives the most for your money of the four DQ novelties, at about 191 calories per dollar. Here is how they compare at typical prices:</p>
<ul><li>Buster Bar: about $2.49 for about 475 calories (about 191 per dollar)</li><li><a href="/items/dq-sandwich">DQ Sandwich</a>: about $1.49 for about 180 calories (about 121 per dollar)</li><li>Dilly Bar: about $1.99 for about 220 calories (about 111 per dollar)</li><li>Non-Dairy Dilly Bar: about $2.49 for 220 calories (about 88 per dollar)</li></ul>
<p>The Buster Bar and the Non-Dairy Dilly Bar cost the same, but the Buster Bar has twice the calories. For more side-by-side numbers, see our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Does a Buster Bar have more calories than a Blizzard?', a: 'Usually not. At about 475 calories it is well under a Small Oreo Blizzard (600), though a few summer Smalls, like the Swicy Pineapple with Tajín at about 430, are lighter.' },
    ],
  },

  'chocolate-dipped-cone': {
    sections: [
      {
        h: 'Small or medium dipped cone?',
        html: `<p>The small dipped cone is enough for most people, and the medium is a fair deal if you want more soft serve. The small costs about $3.19 with 320 calories. The medium costs about $3.79 with 460 calories, so you pay 60 cents more for about 140 more calories.</p>
<p>The chocolate dip itself costs the same at both sizes. A plain small cone is about $2.39 and a plain medium about $2.99, so dipping adds about 80 cents either way, plus about 100 calories at the small and 140 at the medium. The bigger cone just has more soft serve under the shell, which also makes it harder to eat before it drips.</p>`,
      },
      {
        h: 'Chocolate Dipped Cone vs. Crunchin’ Cookie Dipped Cone',
        html: `<p>The Chocolate Dipped Cone is the year-round classic, and the Crunchin’ Cookie Dipped Cone is a seasonal option with a cookie-crunch coating. The cookie version costs about $3.49 with 350 calories, 30 cents and about 30 calories more than a small chocolate dip.</p>
<p>The chocolate shell is smooth and snaps cleanly, while the cookie coating has crunchy bits mixed in. Check the <a href="/categories/classic-treats">classic treats menu</a> and your store’s board, because the cookie dip comes and goes.</p>`,
      },
      {
        h: 'Dipped cone vs. Dilly Bar',
        html: `<p>A <a href="/items/dilly-bar">Dilly Bar</a> is the cheaper way to get soft serve in a chocolate shell, and the dipped cone gives you more of it. The Dilly Bar costs about $1.99 with about 220 calories, about $1.20 less and 100 fewer calories than a small dipped cone.</p>
<p>The Dilly Bar is wrapped and on a stick, so it travels better. The dipped cone is made fresh and has the cone, so eat it at the store.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories does the chocolate dip add to a DQ cone?', a: 'About 100 to 140 calories. A small vanilla cone has 220 calories and a small dipped cone 320; a medium goes from 320 to 460.' },
      { q: 'Does every Dairy Queen sell dipped cones?', a: 'Dipped cones are a classic treat, so they are sold at Treat-only stores as well as Grill & Chill restaurants. Seasonal dip flavors vary by store.' },
    ],
  },

  'dq-sandwich': {
    sections: [
      {
        h: 'DQ Sandwich vs. kids’ vanilla cone',
        html: `<p>The DQ Sandwich is the cheaper pick, and the kids’ <a href="/items/vanilla-soft-serve-cone">vanilla cone</a> is the lighter one. The Sandwich costs about $1.49 with about 180 calories. A kids’ cone costs about $1.79 with 160 calories.</p>
<p>So you save 30 cents with the Sandwich and get about 20 more calories, mostly from the chocolate wafers. The cone is made fresh with the curl on top, while the Sandwich is wrapped, so it is easier for kids in the car and does not drip. If you want to bring treats home for later, the Sandwich is the one that keeps in the freezer.</p>`,
      },
      {
        h: 'Cheapest way to buy DQ treats for a group of kids',
        html: `<p>DQ Sandwiches are the cheapest way to treat a group. Four Sandwiches cost about $5.96 at typical prices, compared with about $7.16 for four kids’ vanilla cones and about $7.96 for four <a href="/items/dilly-bar">Dilly Bars</a>.</p>
<p>That saves about $1.20 over cones and $2.00 over Dilly Bars, and nobody has to finish a melting cone at the table. For more ways to save, see our <a href="/blog/dairy-queen-app-rewards-hacks">DQ app and rewards tips</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the DQ Sandwich nut-free?', a: 'It does not contain peanuts, and its listed allergens are milk, wheat and soy. If an allergy is severe, check DQ’s allergen guide for cross-contact information.' },
    ],
  },

  'non-dairy-dilly-bar': {
    sections: [
      {
        h: 'Non-Dairy Dilly Bar vs. Misty Slush: which dairy-free treat to get',
        html: `<p>Get the Non-Dairy Dilly Bar if you want something that tastes like ice cream, and a <a href="/items/misty-slush">Misty Slush</a> if you want a cold drink. The Non-Dairy Dilly Bar costs about $2.49 with 220 calories. A small Misty Slush costs about $2.39 with 200 calories and no fat.</p>
<p>Most Misty Slush flavors are made without dairy, but a Misty Freeze is blended with soft serve, so do not let anyone order the upgraded version by mistake. Our <a href="/blog/dq-gluten-free-allergen-guide">DQ allergen guide</a> has the full list of options.</p>`,
      },
      {
        h: 'Who the Non-Dairy Dilly Bar is for',
        html: `<p>The Non-Dairy Dilly Bar is for anyone who avoids milk but still wants a chocolate-coated treat with the family. It is a good answer when one child is dairy-free and the others are getting cones or Dilly Bars.</p>
<p>Buying one classic <a href="/items/dilly-bar">Dilly Bar</a> and one Non-Dairy Dilly Bar costs about $4.48 together, so the dairy-free child gets the same kind of treat for 50 cents more. Because it is not sold at every store, check the DQ app before you go.</p>`,
      },
    ],
    faqs: [
      { q: 'Can you get a dairy-free Blizzard at Dairy Queen?', a: 'No. Blizzards are blended with soft serve, which contains milk. The Non-Dairy Dilly Bar and most Misty Slush flavors are the main dairy-free treats.' },
    ],
  },

  'strawberry-sundae': {
    sections: [
      {
        h: 'Strawberry sundae vs. Strawberry Cheesequake Blizzard',
        html: `<p>The strawberry sundae is the lighter, cheaper strawberry treat, and the <a href="/items/strawberry-cheesequake-blizzard">Strawberry Cheesequake Blizzard</a> is the one to get when you want more in the cup. A medium sundae costs about $3.79 with 340 calories. A Small Cheesequake Blizzard costs about $4.79 with about 520 calories.</p>
<p>So the Blizzard costs $1.00 more and has about 180 more calories, because it blends in cheesecake pieces and pie crust. The sundae keeps the strawberry on top, so the first bites are mostly fruit. Availability of the Cheesequake varies by store, while the sundae is on the menu everywhere.</p>`,
      },
      {
        h: 'Strawberry sundae or Banana Split?',
        html: `<p>Order the strawberry sundae for one person and the <a href="/items/banana-split">Banana Split</a> for two. The Banana Split costs about $5.69 with 520 calories, about 180 more than a medium strawberry sundae for $1.90 more.</p>
<p>The Banana Split already has a scoop with strawberry topping, plus pineapple, chocolate and a banana. If you were going to buy two medium strawberry sundaes (about $7.58), sharing a Banana Split saves about $1.89.</p>`,
      },
    ],
    faqs: [
      { q: 'Is the DQ strawberry sundae dairy-free?', a: 'No. It is made with vanilla soft serve, which contains milk. For a dairy-free treat, look at the Non-Dairy Dilly Bar or most Misty Slush flavors.' },
      { q: 'Does Dairy Queen have a strawberry shake?', a: 'Yes. Strawberry is one of the regular shake flavors, and DQ shakes start at about $3.49 for a small. Prices vary by location.' },
    ],
  },

  'vanilla-soft-serve-cone': {
    sections: [
      {
        h: 'Which size vanilla cone is the best value?',
        html: `<p>The medium vanilla cone is the best value, and the kids’ size is the best size for a light treat. Each step up costs about 60 cents. Going from kids’ to small adds about 60 calories, but going from small to medium adds about 100.</p>
<ul><li>Kids’: about $1.79 for 160 calories (about 89 per dollar)</li><li>Small: about $2.39 for 220 calories (about 92 per dollar)</li><li>Medium: about $2.99 for 320 calories (about 107 per dollar)</li></ul>
<p>So the kids’ and small sizes give about the same soft serve per dollar, and the medium gives about 15% to 20% more.</p>`,
      },
      {
        h: 'Kids’ vanilla cone vs. DQ Sandwich',
        html: `<p>The kids’ vanilla cone is the lighter choice, and the <a href="/items/dq-sandwich">DQ Sandwich</a> is the cheaper one. The cone costs about $1.79 with 160 calories. The Sandwich costs about $1.49 with about 180 calories.</p>
<p>Pick the cone when you are eating at the store and want soft serve fresh from the machine. Pick the Sandwich for the car, because it is wrapped and does not drip. Kids meals also come with a kids’ vanilla cone, so check the <a href="/categories/kids-meals">kids meals menu</a> before buying one separately.</p>`,
      },
    ],
    faqs: [
      { q: 'Can I get DQ soft serve without the cone?', a: 'Yes. Ask for it in a cup. The cake cone contains wheat, so a cup is the usual choice for people avoiding wheat, though you should check DQ’s allergen guide for cross-contact.' },
    ],
  },

  'chocolate-shake': {
    sections: [
      {
        h: 'Which chocolate shake size is the best value?',
        html: `<p>The large chocolate shake is the best value per dollar, but the small is already a full dessert for one. A small costs about $3.49 with 530 calories. The medium costs 80 cents more and adds about 180 calories. The large costs another 70 cents and adds about 210 more.</p>
<p>That works out to about 152 calories per dollar for a small and about 184 for a large. At 920 calories, though, the large is really a size for two straws. If you want a lighter chocolate drink, the small is the one to get.</p>`,
      },
      {
        h: 'Chocolate shake vs. Small Blizzard',
        html: `<p>A small shake is cheaper and a little lighter than a Small Blizzard. The small chocolate shake costs about $3.49 with 530 calories, while a Small <a href="/items/oreo-blizzard">Oreo Blizzard</a> costs about $4.49 with 600.</p>
<p>So you save $1.00 with the shake and get about 70 fewer calories. The shake is easier to drink in the car, and the Blizzard is better if you want mix-ins.</p>`,
      },
      {
        h: 'Chocolate shake vs. MooLatté',
        html: `<p>The chocolate shake is the cheaper and richer drink, and the <a href="/items/moolatte">MooLatté</a> is the one with caffeine. A small MooLatté costs about $4.29 with 450 to 500 calories depending on flavor, 80 cents more than a small shake but about 30 to 80 fewer calories. If you like both, a mocha MooLatté is the closest thing to a chocolate shake with coffee in it.</p>`,
      },
    ],
    faqs: [
      { q: 'Does a malt cost more than a shake at Dairy Queen?', a: 'Usually not. Malts are priced about the same as shakes, and any shake can be made as a malt. Prices vary by location.' },
      { q: 'Is the DQ chocolate shake gluten-free?', a: 'A plain shake lists milk and soy as allergens, while a malt adds wheat and barley. If you avoid gluten, order a shake, not a malt, and check DQ’s allergen guide for cross-contact.' },
    ],
  },

  'fruit-smoothies': {
    sections: [
      {
        h: 'DQ fruit smoothie vs. Orange Julius',
        html: `<p>The fruit smoothie is easier to find, and the <a href="/items/orange-julius">Orange Julius</a> is lighter. At the sizes both stores list, they cost the same: about $3.99 for a small and $4.49 for a medium. A small strawberry banana smoothie has 260 calories and a small Orange Julius 200. At medium it is 350 against 260.</p>
<p>Smoothies are mostly sold at DQ Grill & Chill locations, while Orange Julius is only at some DQ and combined DQ/Orange Julius stores. If your store has both, pick the Julius for a frothy orange taste and the smoothie for berry or mango flavors.</p>`,
      },
      {
        h: 'Which smoothie size is the best deal?',
        html: `<p>The large smoothie is the best deal. Each size step costs about 50 cents, but the calories grow faster: a small strawberry banana is 260, a medium 350 and a large 440.</p>
<p>That means the large costs about 25% more than a small ($4.99 vs. $3.99) for roughly 69% more drink by calories. A large smoothie still has about 90 fewer calories than a small <a href="/items/chocolate-shake">chocolate shake</a>, so it is a fair choice when you want something big and cold without the weight of a shake.</p>`,
      },
      {
        h: 'Smoothie vs. Misty Slush',
        html: `<p>A <a href="/items/misty-slush">Misty Slush</a> is the cheaper, icier option. A small costs about $2.39 with 200 calories, $1.60 less than a small smoothie. The smoothie is thicker and fruitier, while the slush tastes like flavored ice.</p>`,
      },
    ],
    faqs: [
      { q: 'How many calories are in a large DQ smoothie?', a: 'About 440 calories for a large strawberry banana. That is still about 90 fewer than a small DQ chocolate shake, which has 530.' },
    ],
  },

  'misty-slush': {
    sections: [
      {
        h: 'Misty Slush vs. a fountain soft drink',
        html: `<p>The Misty Slush is the better pick on a hot day, and a <a href="/items/soft-drinks">fountain soft drink</a> is the cheaper one. Soft drinks start at about $2.11, and a small Misty Slush costs about $2.39, so the slush is only about 28 cents more.</p>
<p>A small slush has 200 calories. Diet sodas have zero, but a large regular soda can be over 300. The slush is also slower to drink, so it lasts through a meal. If you are ordering a <a href="/items/flamethrower-stackburger">FlameThrower Stackburger</a>, the icy slush helps cool the heat.</p>`,
      },
      {
        h: 'Which Misty Slush size should you get?',
        html: `<p>The large Misty Slush is the best value, and the small is enough for most kids. A small is about $2.39 and 200 calories, a medium about $2.89 and 260, and a large about $3.29 and 340.</p>
<p>The step from small to medium costs 50 cents, but medium to large costs only 40 cents. So for 90 cents more than a small, the large gives you about 140 more calories of slush. Even a large has fewer calories than a medium dipped cone (460).</p>`,
      },
    ],
    faqs: [
      { q: 'Is the Misty Slush the cheapest drink at Dairy Queen?', a: 'Not quite. Fountain soft drinks start at about $2.11 and milk cartons at about $1.49. A small Misty Slush is about $2.39, the cheapest frozen drink.' },
    ],
  },

  'moolatte': {
    sections: [
      {
        h: 'MooLatté vs. chocolate shake: which to pick',
        html: `<p>Pick the MooLatté for coffee and fewer calories, and the <a href="/items/chocolate-shake">chocolate shake</a> for a cheaper, heavier dessert. A small MooLatté costs about $4.29 with 450 to 500 calories depending on flavor, while a small shake costs about $3.49 with 530.</p>
<p>The gap grows with size. A medium MooLatté is about $4.99 and 560 to 620 calories, and a medium shake about $4.29 and 710. At those two sizes the MooLatté costs 70 to 80 cents more but has about 30 to 150 fewer calories. The mocha flavor is the closest to a chocolate shake.</p>`,
      },
      {
        h: 'Which MooLatté size is the best value?',
        html: `<p>The large MooLatté is the best value, and the small is the right size if you just want a coffee treat. Small to medium costs about 70 cents and adds about 110 to 130 calories. Medium to large costs only 50 cents and adds about 140 to 160.</p>
<p>In total, the large costs $1.20 more than the small for about 250 to 290 more calories. At 700 to 780 calories it is closer to a meal than a drink, so it is a good one to share. Skipping the whipped cream trims a little from any size.</p>`,
      },
    ],
    faqs: [
      { q: 'Does a MooLatté have more calories than a shake?', a: 'No. A small mocha MooLatté has 500 calories, while a small DQ chocolate shake has 530.' },
    ],
  },

  'orange-julius': {
    sections: [
      {
        h: 'Small or medium Orange Julius?',
        html: `<p>The small Orange Julius is enough for most people, and the medium is the better value if you are thirsty. A small costs about $3.99 with 200 calories. A medium costs about $4.49 with 260.</p>
<p>So you pay 50 cents more for about 30% more drink by calories. Both sizes are light compared with other DQ drinks. Even the medium has fewer than half the calories of a small <a href="/items/chocolate-shake">chocolate shake</a> (530), which makes the Julius one of the easier sweet drinks to fit into a meal.</p>`,
      },
      {
        h: 'What to order if your DQ has no Orange Julius',
        html: `<p>Order a <a href="/items/fruit-smoothies">fruit smoothie</a> if your DQ does not sell Orange Julius. It costs the same at small and medium (about $3.99 and $4.49) and the strawberry banana smoothie has about 60 to 90 more calories per size. The strawberry banana flavor is offered as both a smoothie and a Julius.</p>
<p>If you want something cheaper, a small <a href="/items/misty-slush">Misty Slush</a> costs about $2.39 with 200 calories. It is icier and less creamy, but it is sold at many more stores.</p>`,
      },
    ],
    faqs: [
      { q: 'Is there a large Orange Julius at Dairy Queen?', a: 'Our price checks list only small and medium sizes, at about $3.99 and $4.49. Some combined DQ/Orange Julius stores may offer other sizes, so check the menu board.' },
    ],
  },

  'soft-drinks': {
    sections: [
      {
        h: 'Is a drink cheaper in the $7 Meal Deal?',
        html: `<p>Yes. If you are buying food anyway, the <a href="/items/7-meal-deal">$7 Meal Deal</a> is the cheapest way to get a soft drink. An <a href="/items/original-cheeseburger">Original Cheeseburger</a> costs about $6.39 and a soft drink from about $2.11, so those two alone are about $8.50.</p>
<p>The $7 Meal Deal includes the cheeseburger and a drink, plus fries and a small sundae, for about $1.50 less than the burger and drink on their own. The meal deal drink is a 21 oz soft drink at participating stores.</p>`,
      },
      {
        h: 'Soft drink or milk for kids?',
        html: `<p>Milk is the cheaper drink for kids, and every DQ kids meal lets you choose milk or a soft drink. A carton of milk costs about $1.49 and has about 110 to 160 calories, while fountain drinks start at about $2.11.</p>
<p>If you are buying a drink on its own, milk saves about 62 cents. In a <a href="/categories/kids-meals">kids meal</a> at about $4.99, the drink is included, so pick whichever your child prefers.</p>`,
      },
    ],
    faqs: [
      { q: 'Does Dairy Queen have Dr Pepper or root beer?', a: 'Many stores do. Alongside Coke, Diet Coke, Coke Zero and Sprite, our drinks menu lists Dr Pepper and Barq’s Root Beer, but the fountain lineup varies by store.' },
      { q: 'What size soft drink comes with the $7 Meal Deal?', a: 'A 21 oz soft drink at participating stores.' },
    ],
  },
};

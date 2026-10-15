# Hand-written copy for burgers, chicken, breakfast, kids meals and deals.
# Facts match the existing item pages and category hubs.


def table(head, rows, bold=0):
    h = ''.join(f'<th>{x}</th>' for x in head)
    b = ''.join('<tr>' + ''.join(f'<td>{"<strong>" + c + "</strong>" if j == 0 and i == bold else c}</td>' for j, c in enumerate(r)) + '</tr>' for i, r in enumerate(rows))
    return f'<div class="table-wrap"><table class="size-table"><thead><tr>{h}</tr></thead><tbody>{b}</tbody></table></div>'


def ul(items):
    return '<ul>' + ''.join(f'<li>{x}</li>' for x in items) + '</ul>'


BURGERS = ['Burger', 'Typical price', 'Calories'], [
    ['<a href="/items/original-cheeseburger">Original Cheeseburger</a>', '$6.39', '400'],
    ['<a href="/items/double-cheeseburger">Double Cheeseburger</a>', '$7.99', '560'],
    ['<a href="/items/two-cheese-deluxe-stackburger">Two Cheese Deluxe Stackburger</a>', '$8.29', '630'],
    ['<a href="/items/mushroom-swiss-stackburger">Mushroom Swiss Stackburger</a>', '$9.49', '680'],
    ['<a href="/items/backyard-bacon-ranch-stackburger">Backyard Bacon Ranch Stackburger</a>', '$9.99', '730'],
    ['<a href="/items/flamethrower-stackburger">FlameThrower Stackburger</a>', '$10.87', '780'],
]
CHICKEN = ['Option', 'Typical price', 'Calories'], [
    ['<a href="/items/2pc-chicken-strips">2-piece strips (no sides)</a>', '$3.49', '~280'],
    ['<a href="/items/chicken-strip-basket-4pc">4-piece basket</a>', '$9.99', '~1,000'],
    ['<a href="/items/honey-bbq-chicken-strip-basket">Honey BBQ 4-piece basket</a>', '$10.49', '~1,100'],
    ['<a href="/items/chicken-strip-basket-6pc">6-piece basket</a>', '$13.49', '~1,380'],
]
BREAKFAST = ['Item', 'Typical price', 'Calories'], [
    ['<a href="/items/breakfast-burrito">Breakfast Burrito</a>', '$3.49', '380'],
    ['<a href="/items/biscuit-gravy">Biscuit &amp; Gravy</a>', '$3.99', '400'],
    ['<a href="/items/buttermilk-pancake-platter">Buttermilk Pancake Platter</a>', '$5.49', '680'],
    ['<a href="/items/ultimate-hash-browns-platter">Ultimate Hash Browns Platter</a>', '$5.99', '790'],
    ['<a href="/items/country-breakfast-platter">Country Breakfast Platter</a>', '$6.99', '860'],
]
KIDS = ['Kids meal', 'Typical price', 'Calories (with fries and cone)'], [
    ['<a href="/items/kids-cheeseburger-meal">Cheeseburger</a>', '$4.99', '~700'],
    ['<a href="/items/kids-chicken-strips-meal">2-piece chicken strips</a>', '$4.99', '~750'],
    ['<a href="/items/kids-hot-dog-meal">Hot dog</a>', '$4.99', '~650'],
]
GC = 'Burgers and hot food are sold at DQ Grill &amp; Chill restaurants, not Treat-only stores.'
BURGERL = '<p>See every burger and sandwich on the <a href="/categories/burgers-sandwiches">DQ burgers menu</a>, or read our <a href="/blog/best-dairy-queen-burgers-ranked">ranking of the best DQ burgers</a>.</p>'
CHICKENL = '<p>All chicken options are on the <a href="/categories/chicken-strip-baskets">DQ chicken strip menu</a>; our <a href="/blog/dq-chicken-strip-baskets-review">4-piece vs 6-piece review</a> helps you choose.</p>'
BREAKL = '<p>Breakfast is only served at select DQ Grill &amp; Chill restaurants, usually until about 10:30 or 11 AM. See our <a href="/blog/dq-breakfast-hours-menu">DQ breakfast hours guide</a> and the full <a href="/categories/breakfast">breakfast menu</a>.</p>'
KIDSL = '<p>See all options on the <a href="/categories/kids-meals">DQ kids meals menu</a>. For bigger appetites, compare the <a href="/blog/dq-meal-deals-guide">$7 Meal Deal and 2 for $5 menu</a>.</p>'

ITEMS = [
    dict(slug='flamethrower-stackburger', cat='burgers', name='FlameThrower Stackburger', short='FlameThrower Stackburger',
         title='DQ FlameThrower Stackburger: Price & Calories',
         desc='The Dairy Queen FlameThrower Stackburger costs about $10.87 single and $13.49 double. How spicy it is, what is on it and calories.',
         image='/Images/flamethrower-stackburger.webp', alt='Dairy Queen FlameThrower Stackburger with pepper jack and jalapeño bacon', badges=['Spicy', 'Our top-ranked DQ burger'],
         sizes=[('Single', '$10.87', '780'), ('Double', '~$13.49', '1,020')],
         quick='The FlameThrower Stackburger at Dairy Queen costs about $10.87 for a single and about $13.49 for a double. The single has about 780 calories. It is medium-spicy, with FlameThrower sauce, jalapeño bacon and pepper jack. Prices vary by location.',
         price_q='How much is a FlameThrower burger at Dairy Queen?', price_a='About $10.87 for a single and about $13.49 for a double. Prices vary by location.',
         intro='DQ’s spicy Stackburger: seasoned beef, pepper jack cheese, jalapeño bacon and FlameThrower sauce, with lettuce and tomato. The heat builds in layers rather than all at once.',
         spec=[['Sizes', 'Single · Double'], ['Calories (single)', '780'], ['Protein (single)', '42 g'], ['Heat', 'Medium']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('How spicy is the FlameThrower burger?', 'Most people find it a medium heat: warm and peppery rather than painful.'),
               ('What is FlameThrower sauce?', 'A spicy, creamy sauce made with peppers and spices. You can ask for it on the side with chicken strips.')],
         body='<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=5) +
         '<h2>Ordering tips</h2>' + ul(['The single is enough for most people; the double is over 1,000 calories.', 'Want less heat? Ask for light sauce.',
                                       'Add <a href="/items/onion-rings">onion rings</a> or <a href="/items/cheese-curds">cheese curds</a> as your side.', GC]) + BURGERL),

    dict(slug='backyard-bacon-ranch-stackburger', cat='burgers', name='Backyard Bacon Ranch Stackburger', short='Backyard Bacon Ranch Stackburger', price='$9.99', cal='730',
         title='DQ Backyard Bacon Ranch Stackburger: Price & Calories',
         desc='The Dairy Queen Backyard Bacon Ranch Stackburger costs about $9.99 and has 730 calories. What is on it and how it compares to the FlameThrower.',
         image='/Images/backyard-bacon-ranch-stackburger.webp', alt='Dairy Queen Backyard Bacon Ranch Stackburger', badges=['No spice', 'Best non-spicy Stackburger'],
         intro='Seasoned beef with bacon, cheese, ranch, BBQ sauce and crispy onions. It has big flavor without any heat, which makes it the best Stackburger if you do not want spice.',
         spec=[['Price', '$9.99'], ['Calories', '730'], ['Protein', '38 g'], ['Heat', 'None']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Is the Backyard Bacon Ranch burger spicy?', 'No. It is smoky and savory with ranch and BBQ sauce, but not spicy.')],
         body='<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=4) +
         '<h2>Ordering tips</h2>' + ul(['It is messy; grab extra napkins.', 'Pair it with <a href="/items/onion-rings">onion rings</a> for even more crunch.', GC]) + BURGERL),

    dict(slug='mushroom-swiss-stackburger', cat='burgers', name='Mushroom Swiss Stackburger', short='Mushroom Swiss Stackburger', price='$9.49', cal='680',
         title='DQ Mushroom Swiss Stackburger: Price & Calories',
         desc='The Dairy Queen Mushroom Swiss Stackburger costs about $9.49 and has 680 calories. Mushrooms, Swiss cheese and sauce; how it compares.',
         image='/Images/mushroom-swiss-stackburger.webp', alt='Dairy Queen Mushroom Swiss Stackburger', badges=['Savory, no spice'],
         intro='Seasoned beef topped with sautéed mushrooms, melted Swiss cheese and a creamy mushroom sauce. It is the most savory, steakhouse-style burger on the DQ menu.',
         spec=[['Price', '$9.49'], ['Calories', '680'], ['Protein', '36 g'], ['Toppings', 'Mushrooms, Swiss cheese, mushroom sauce']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What is on the DQ Mushroom Swiss burger?', 'Sautéed mushrooms, Swiss cheese and a creamy mushroom sauce on a seasoned beef patty.')],
         body='<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=3) +
         '<p>If you like mushroom burgers, you will like this one. If you are on the fence, the <a href="/items/backyard-bacon-ranch-stackburger">Backyard Bacon Ranch</a> is the safer non-spicy pick.</p>' +
         '<h2>Good to know</h2>' + ul(['It is a little cheaper than the Bacon Ranch and FlameThrower.', GC]) + BURGERL),

    dict(slug='two-cheese-deluxe-stackburger', cat='burgers', name='Two Cheese Deluxe Stackburger', short='Two Cheese Deluxe Stackburger', price='$8.29', cal='630',
         title='DQ Two Cheese Deluxe Stackburger: Price & Calories',
         desc='The Dairy Queen Two Cheese Deluxe Stackburger costs about $8.29 and has 630 calories. The lowest-priced Stackburger; what is on it.',
         image='/Images/two-cheese-deluxe-stackburger.webp', alt='Dairy Queen Two Cheese Deluxe Stackburger', badges=['Lowest-priced Stackburger'],
         intro='Two seasoned beef patties with two slices of melted cheese, pickles, onion, ketchup and mustard. It is the classic double cheeseburger of the Stackburger line and the cheapest one.',
         spec=[['Price', '$8.29'], ['Calories', '630'], ['Patties', '2'], ['Toppings', 'Cheese, pickles, onion, ketchup, mustard']], allergens='Milk, Wheat, Soy',
         faqs=[('Is the Two Cheese Deluxe the cheapest Stackburger?', 'Yes, at about $8.29 it costs less than the other Stackburgers.')],
         body='<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=2) +
         '<p>The <a href="/items/double-cheeseburger">Double Cheeseburger</a> is similar and about 30 cents cheaper; the Two Cheese Deluxe is the bigger, Stackburger-style version.</p>' +
         '<h2>Good to know</h2>' + ul(['A safe pick for picky eaters.', GC]) + BURGERL),

    dict(slug='original-cheeseburger', cat='burgers', name='Original Cheeseburger', short='Original Cheeseburger',
         title='DQ Original Cheeseburger: Price & Calories (2026)',
         desc='The Dairy Queen Original Cheeseburger costs about $6.39 single and $7.99 double. Calories, what is on it and how to get it in the $7 Meal Deal.',
         image='/Images/original-cheeseburger.webp', alt='Dairy Queen Original Cheeseburger', badges=['In the $7 Meal Deal'],
         sizes=[('Single', '$6.39', '400'), ('Double', '$7.99', '560')],
         quick='The Original Cheeseburger at Dairy Queen costs about $6.39 for a single and $7.99 for a double. The single has about 400 calories. It is also one of the entrée choices in the $7 Meal Deal. Prices vary by location.',
         price_q='How much is a cheeseburger at Dairy Queen?', price_a='About $6.39 for a single and $7.99 for a double. Prices vary by location.',
         intro='DQ’s classic cheeseburger: a seasoned beef patty with American cheese, pickles, onion, ketchup and mustard on a toasted bun. It is the lightest burger on the menu.',
         spec=[['Sizes', 'Single · Double'], ['Calories (single)', '400'], ['Sodium (single)', '910 mg']], allergens='Milk, Wheat, Soy',
         faqs=[('Is the cheeseburger part of the $7 Meal Deal?', 'Yes. The $7 Meal Deal includes an Original Cheeseburger or 3-piece chicken strips, plus fries, a drink and a small sundae.')],
         body='<h2>Best way to order it</h2><p>On its own the single costs about $6.39, so the <a href="/items/7-meal-deal">$7 Meal Deal</a> is usually the better buy: you add fries, a drink and a sundae for about 60 cents more. It is also on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a> at many stores.</p>' +
         '<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=0) + BURGERL),

    dict(slug='double-cheeseburger', cat='burgers', name='Double Cheeseburger', short='Double Cheeseburger', price='$7.99', cal='560',
         title='DQ Double Cheeseburger: Price & Calories (2026)',
         desc='The Dairy Queen Double Cheeseburger costs about $7.99 and has 560 calories. What is on it and why it is the best-value burger at DQ.',
         image='/Images/double-cheeseburger.webp', alt='Dairy Queen Double Cheeseburger', badges=['Best value burger'],
         intro='Two seasoned beef patties with American cheese, pickles, onion, ketchup and mustard on a toasted bun. For about $1.60 more than the single, you get twice the beef.',
         spec=[['Price', '$7.99'], ['Calories', '560'], ['Protein', '34 g'], ['Patties', '2']], allergens='Milk, Wheat, Soy',
         faqs=[('How much more is a double than a single cheeseburger at DQ?', 'About $1.60 more, for a second patty and about 160 more calories.')],
         body='<h2>How it compares to other DQ burgers</h2>' + table(*BURGERS, bold=1) +
         '<h2>Good to know</h2>' + ul(['It is our best-value pick in the <a href="/blog/best-dairy-queen-burgers-ranked">DQ burger rankings</a>.', 'Add bacon if your store offers it for a small charge.', GC]) + BURGERL),

    dict(slug='crispy-chicken-sandwich', cat='burgers', name='Crispy Chicken Sandwich', short='Crispy Chicken Sandwich', price='$7.99', cal='470',
         title='DQ Crispy Chicken Sandwich: Price & Calories (2026)',
         desc='The Dairy Queen Crispy Chicken Sandwich costs about $7.99 and has 470 calories. What is on it and how it compares to the grilled version.',
         image='/Images/crispy-chicken-sandwich.webp', alt='Dairy Queen Crispy Chicken Sandwich', badges=['Best non-burger sandwich'],
         intro='A breaded, fried chicken breast with lettuce, tomato and mayo on a toasted bun. It is the best pick if you want a sandwich but not a burger.',
         spec=[['Price', '$7.99'], ['Calories', '470'], ['Protein', '34 g'], ['Chicken', 'Breaded white-meat breast']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Is the crispy or grilled chicken sandwich healthier?', 'The grilled sandwich has fewer calories (about 390 vs 470) and much less fat.')],
         body='<h2>Crispy vs. grilled</h2>' + table(['Sandwich', 'Typical price', 'Calories'], [
             ['Crispy Chicken Sandwich', '$7.99', '470'], ['<a href="/items/grilled-chicken-sandwich">Grilled Chicken Sandwich</a>', '$7.99', '390']]) +
         '<p>Want heat? Some stores offer a FlameThrower version with spicy sauce for a bit more. Love DQ chicken? The <a href="/items/chicken-strip-basket-4pc">chicken strip basket</a> is the classic order.</p>' + BURGERL),

    dict(slug='grilled-chicken-sandwich', cat='burgers', name='Grilled Chicken Sandwich', short='Grilled Chicken Sandwich', price='$7.99', cal='390',
         title='DQ Grilled Chicken Sandwich: Price & Calories (2026)',
         desc='The Dairy Queen Grilled Chicken Sandwich costs about $7.99 and has 390 calories with 36 g of protein, one of the lighter meals at DQ.',
         image='/Images/grilled-chicken-sandwich.webp', alt='Dairy Queen Grilled Chicken Sandwich', badges=['Lighter choice', 'High protein'],
         intro='A grilled chicken breast with lettuce, tomato and sauce on a toasted bun. At about 390 calories and 36 grams of protein, it is one of the lightest meals at Dairy Queen.',
         spec=[['Price', '$7.99'], ['Calories', '390'], ['Protein', '36 g'], ['Total fat', '9 g']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What is the healthiest sandwich at Dairy Queen?', 'The Grilled Chicken Sandwich is one of the lightest options, at about 390 calories and 9 g of fat.')],
         body='<h2>Make it a lighter meal</h2>' + ul(['Swap fries for a <a href="/items/side-salad">side salad</a> to save about 170 calories.', 'Ask for sauce on the side.',
                                                    'For dessert, a small cone is about 170 calories. See our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a>.']) +
         '<h2>Grilled vs. crispy</h2>' + table(['Sandwich', 'Typical price', 'Calories'], [
             ['Grilled Chicken Sandwich', '$7.99', '390'], ['<a href="/items/crispy-chicken-sandwich">Crispy Chicken Sandwich</a>', '$7.99', '470']]) + BURGERL),

    dict(slug='hot-dog', cat='burgers', name='Hot Dog', short='hot dog', price='$3.99', cal='330',
         title='Dairy Queen Hot Dog: Price & Calories (2026)',
         desc='A Dairy Queen hot dog costs about $3.99 and has 330 calories. Toppings, the chili cheese dog option and the 2 for $5 menu.',
         image='/Images/hot-dog.webp', alt='Dairy Queen hot dog in a steamed bun', badges=['Budget pick'],
         intro='An all-beef hot dog in a steamed bun, with ketchup, mustard and onion on request. It is one of the cheapest hot food items at DQ.',
         spec=[['Price', '$3.99'], ['Calories', '330'], ['Protein', '13 g'], ['Bun', 'Steamed']], allergens='Wheat, Soy',
         faqs=[('Is the DQ hot dog on the 2 for $5 menu?', 'At many stores, yes. Check your store’s board or the DQ app.')],
         body='<h2>Hot dog vs. chili cheese dog</h2>' + table(['Item', 'Typical price', 'Calories'], [
             ['Hot dog', '$3.99', '330'], ['<a href="/items/chili-cheese-dog">Chili cheese dog</a>', '$4.99', '420'], ['<a href="/items/original-cheeseburger">Original Cheeseburger</a>', '$6.39', '400']]) +
         '<p>For kids, the <a href="/items/kids-hot-dog-meal">Kids Hot Dog Meal</a> adds a side, drink and cone for about $4.99. ' + GC + '</p>' + BURGERL),

    dict(slug='chili-cheese-dog', cat='burgers', name='Chili Cheese Dog', short='Chili Cheese Dog', price='$4.99', cal='420',
         title='DQ Chili Cheese Dog: Price & Calories (2026)',
         desc='The Dairy Queen Chili Cheese Dog costs about $4.99 and has 420 calories. Is it spicy, and is it on the 2 for $5 menu?',
         image='/Images/chili-cheese-dog.webp', alt='Dairy Queen Chili Cheese Dog', badges=['2 for $5 pick'],
         intro='An all-beef hot dog in a steamed bun, topped with meat chili and cheese sauce. It is savory, filling and not spicy.',
         spec=[['Price', '$4.99'], ['Calories', '420'], ['Protein', '18 g'], ['Heat', 'Mild']], allergens='Milk, Wheat, Soy',
         faqs=[('Is the DQ chili cheese dog spicy?', 'No. The chili is savory and mild.'), ('Is the chili cheese dog on the 2 for $5 menu?', 'At many stores, yes. It is one of the better picks on that menu.')],
         body='<h2>Chili cheese dog vs. plain hot dog</h2>' + table(['Item', 'Typical price', 'Calories'], [
             ['Chili cheese dog', '$4.99', '420'], ['<a href="/items/hot-dog">Hot dog</a>', '$3.99', '330']]) +
         '<p>On the <a href="/items/2-for-5-mix-match">2 for $5 menu</a>, the chili cheese dog is a good value pick alongside <a href="/items/2pc-chicken-strips">2-piece chicken strips</a>. ' + GC + '</p>' + BURGERL),

    dict(slug='chicken-strip-basket-4pc', cat='chicken', name='4-Piece Chicken Strip Basket', short='4-piece Chicken Strip Basket', price='$9.99', cal='1,000',
         title='DQ 4-Piece Chicken Strip Basket: Price & Calories',
         desc='The Dairy Queen 4-piece Chicken Strip Basket costs about $9.99 and has about 1,000 calories with fries, Texas toast and a sauce.',
         image='/Images/chicken-strip-basket-4pc.webp', alt='Dairy Queen 4-piece Chicken Strip Basket with fries, Texas toast and gravy', badges=['Most popular basket'],
         quick='The 4-piece Chicken Strip Basket at Dairy Queen costs about $9.99 and has about 1,000 calories. It comes with fries, Texas toast and a dipping sauce, usually country gravy. Prices vary by location.',
         intro='Four breaded strips of whole chicken breast with fries, a slice of Texas toast and a dipping sauce. Most people choose the warm, peppery country gravy.',
         spec=[['Price', '$9.99'], ['Includes', '4 strips, fries, Texas toast, 1 sauce'], ['Calories', '~1,000'], ['Sauces', 'Country gravy, ranch, honey mustard, BBQ, sweet & sour']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What sauces come with a DQ chicken strip basket?', 'Usually country gravy, ranch, honey mustard, BBQ or sweet and sour. One comes with the basket; extras cost a little more.')],
         body='<h2>DQ chicken options compared</h2>' + table(*CHICKEN, bold=1) +
         '<h2>Ordering tips</h2>' + ul(['Get the gravy. It is what makes the DQ basket different.', 'Swap fries for onion rings or cheese curds if your store allows it.',
                                       'Want it cheaper? The <a href="/items/7-meal-deal">$7 Meal Deal</a> includes 3 strips, fries, a drink and a sundae.']) + CHICKENL),

    dict(slug='chicken-strip-basket-6pc', cat='chicken', name='6-Piece Chicken Strip Basket', short='6-piece Chicken Strip Basket', price='$13.49', cal='1,380',
         title='DQ 6-Piece Chicken Strip Basket: Price & Calories',
         desc='The Dairy Queen 6-piece Chicken Strip Basket costs about $13.49 and has about 1,380 calories. Is it worth it over the 4-piece?',
         image='/Images/chicken-strip-basket-6pc.webp', alt='Dairy Queen 6-piece Chicken Strip Basket', badges=['For big appetites'],
         quick='The 6-piece Chicken Strip Basket at Dairy Queen costs about $13.49 and has about 1,380 calories with fries, Texas toast and a dipping sauce. Prices vary by location.',
         intro='Six strips of breaded chicken breast with fries, Texas toast and a dipping sauce. It is the basket to get if you are very hungry or sharing.',
         spec=[['Price', '$13.49'], ['Includes', '6 strips, fries, Texas toast, 1 sauce'], ['Calories', '~1,380']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Is the 6-piece basket worth it over the 4-piece?', 'If you are sharing or very hungry, yes. You get two more strips for about $3.50 more. For one normal meal, the 4-piece is enough.')],
         body='<h2>DQ chicken options compared</h2>' + table(*CHICKEN, bold=3) +
         '<h2>Good to know</h2>' + ul(['Sharing with a child? Ask for an extra sauce cup; there may be a small charge.', 'Leftover strips reheat best in an air fryer or oven.']) + CHICKENL),

    dict(slug='honey-bbq-chicken-strip-basket', cat='chicken', name='Honey BBQ Chicken Strip Basket', short='Honey BBQ Chicken Strip Basket', price='$10.49', cal='1,100',
         title='DQ Honey BBQ Chicken Strip Basket: Price & Calories',
         desc='The Dairy Queen Honey BBQ Chicken Strip Basket costs about $10.49 and has about 1,100 calories. Sweet, saucy strips with fries and toast.',
         image='/Images/honey-bbq-chicken-strip-basket.webp', alt='Dairy Queen Honey BBQ Chicken Strip Basket', badges=['Sauced strips', 'Not spicy'],
         quick='The Honey BBQ Chicken Strip Basket at Dairy Queen costs about $10.49 and has about 1,100 calories. It has four strips tossed in sweet honey BBQ sauce, with fries, Texas toast and a dipping sauce. Prices vary by location.',
         intro='Four chicken strips tossed in a sweet, smoky honey BBQ sauce, served with fries, Texas toast and a dipping sauce. It is messier than the plain basket and popular with kids.',
         spec=[['Price', '$10.49'], ['Includes', '4 sauced strips, fries, Texas toast, 1 sauce'], ['Calories', '~1,100'], ['Heat', 'None']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Is the Honey BBQ basket spicy?', 'No. The sauce is sweet and smoky.')],
         body='<h2>DQ chicken options compared</h2>' + table(*CHICKEN, bold=2) +
         '<p>Sauced strips lose their crunch faster, so eat them first. Prefer to dip? Get the plain <a href="/items/chicken-strip-basket-4pc">4-piece basket</a> with BBQ sauce on the side for 50 cents less.</p>' + CHICKENL),

    dict(slug='2pc-chicken-strips', cat='chicken', name='2-Piece Chicken Strips', short='2-piece chicken strips', price='$3.49', cal='280', plural=True,
         title='DQ 2-Piece Chicken Strips: Price & 2 for $5 Deal',
         desc='Dairy Queen 2-piece chicken strips cost about $3.49 and have about 280 calories. One of the best picks on the 2 for $5 menu.',
         image='/Images/2pc-chicken-strips.webp', alt='Dairy Queen 2-piece chicken strips with dipping sauce', badges=['2 for $5 pick'],
         quick='2-piece chicken strips at Dairy Queen cost about $3.49 and have about 280 calories, with one dipping sauce. At many stores they are on the 2 for $5 menu. Prices vary by location.',
         intro='Two breaded chicken strips with a dipping sauce, without the fries and toast. It is the cheapest way to get DQ’s chicken strips.',
         spec=[['Price', '$3.49'], ['Calories', '~280 (strips only)'], ['Includes', '2 strips, 1 sauce']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Are DQ 2-piece chicken strips on the 2 for $5 menu?', 'At many participating stores, yes. They are one of the best-value picks on that menu.')],
         body='<h2>DQ chicken options compared</h2>' + table(*CHICKEN, bold=0) +
         '<p>Pair them with <a href="/items/pretzel-sticks-queso">pretzel sticks with queso</a> on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a> for a cheap snack meal.</p>' + CHICKENL),

    dict(slug='breakfast-burrito', cat='breakfast', name='Breakfast Burrito', short='Breakfast Burrito', price='$3.49', cal='380',
         title='DQ Breakfast Burrito: Price, Calories & Hours',
         desc='The Dairy Queen breakfast burrito costs about $3.49 and has 380 calories. What is in it and which DQ locations serve breakfast.',
         image='/Images/breakfast-burrito.webp', alt='Dairy Queen breakfast burrito', badges=['Breakfast only', 'Cheapest breakfast'],
         avail='It is only sold during breakfast at select DQ Grill & Chill locations.',
         intro='Scrambled eggs, cheese and bacon or sausage in a flour tortilla. It is the cheapest and quickest breakfast at Dairy Queen.',
         spec=[['Price', '$3.49'], ['Calories', '380'], ['Protein', '~18 g'], ['Served', 'Breakfast hours at select stores']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What time does Dairy Queen stop serving breakfast?', 'Usually around 10:30 or 11 AM at stores that serve breakfast. Hours vary by location.')],
         body='<h2>DQ breakfast menu compared</h2>' + table(*BREAKFAST, bold=0) + BREAKL),

    dict(slug='biscuit-gravy', cat='breakfast', name='Biscuit & Gravy', short='Biscuit & Gravy', price='$3.99', cal='400',
         title='DQ Biscuit & Gravy: Price, Calories & Hours',
         desc='Dairy Queen Biscuit & Gravy costs about $3.99 and has 400 calories. What it is, when it is served and which stores have breakfast.',
         image='/Images/biscuit-gravy.webp', alt='Dairy Queen biscuit and gravy', badges=['Breakfast only'],
         avail='It is only sold during breakfast at select DQ Grill & Chill locations.',
         intro='A split buttermilk biscuit covered in DQ’s peppery country gravy, the same gravy that comes with the chicken strip baskets.',
         spec=[['Price', '$3.99'], ['Calories', '400'], ['Total fat', '22 g'], ['Served', 'Breakfast hours at select stores']], allergens='Milk, Wheat, Soy',
         faqs=[('Is the DQ biscuit and gravy available all day?', 'No. It is a breakfast item, usually served until about 10:30 or 11 AM at stores that offer breakfast.')],
         body='<h2>DQ breakfast menu compared</h2>' + table(*BREAKFAST, bold=1) +
         '<p>Want gravy later in the day? It comes with every <a href="/items/chicken-strip-basket-4pc">chicken strip basket</a>.</p>' + BREAKL),

    dict(slug='buttermilk-pancake-platter', cat='breakfast', name='Buttermilk Pancake Platter', short='Buttermilk Pancake Platter', price='$5.49', cal='680',
         title='DQ Buttermilk Pancake Platter: Price & Calories',
         desc='The Dairy Queen Buttermilk Pancake Platter costs about $5.49 and has 680 calories. Pancakes, butter, syrup and sausage; breakfast hours.',
         image='/Images/buttermilk-pancake-platter.webp', alt='Dairy Queen buttermilk pancake platter with sausage', badges=['Breakfast only', 'Sweet breakfast'],
         avail='It is only sold during breakfast at select DQ Grill & Chill locations.',
         intro='Buttermilk pancakes with butter and syrup and a sausage patty on the side. It is the sweet option on DQ’s breakfast menu.',
         spec=[['Price', '$5.49'], ['Calories', '680'], ['Includes', 'Pancakes, butter, syrup, sausage'], ['Served', 'Breakfast hours at select stores']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What comes with the DQ pancake platter?', 'Buttermilk pancakes with butter and syrup and a sausage patty.')],
         body='<h2>DQ breakfast menu compared</h2>' + table(*BREAKFAST, bold=2) + BREAKL),

    dict(slug='country-breakfast-platter', cat='breakfast', name='Country Breakfast Platter', short='Country Breakfast Platter', price='$6.99', cal='860',
         title='DQ Country Breakfast Platter: Price & Calories',
         desc='The Dairy Queen Country Breakfast Platter costs about $6.99 and has 860 calories. Eggs, sausage, hash browns, biscuit and gravy.',
         image='/Images/country-breakfast-platter.webp', alt='Dairy Queen Country Breakfast Platter', badges=['Breakfast only', 'Biggest breakfast'],
         avail='It is only sold during breakfast at select DQ Grill & Chill locations, mostly in the South and Midwest.',
         intro='Scrambled eggs, sausage, hash browns and a biscuit with country gravy. It is the biggest breakfast on the DQ menu.',
         spec=[['Price', '$6.99'], ['Calories', '860'], ['Protein', '28 g'], ['Served', 'Breakfast hours at select stores']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Which Dairy Queens serve the Country Breakfast Platter?', 'Select DQ Grill & Chill restaurants that serve breakfast, mostly in the South and Midwest. Check the DQ app for your store.')],
         body='<h2>DQ breakfast menu compared</h2>' + table(*BREAKFAST, bold=4) + BREAKL),

    dict(slug='ultimate-hash-browns-platter', cat='breakfast', name='Ultimate Hash Browns Platter', short='Ultimate Hash Browns Platter', price='$5.99', cal='790',
         title='DQ Ultimate Hash Browns Platter: Price & Calories',
         desc='The Dairy Queen Ultimate Hash Browns Platter costs about $5.99 and has 790 calories. Hash browns loaded with sausage, eggs, cheese and gravy.',
         image='/Images/ultimate-hash-browns-platter.webp', alt='Dairy Queen Ultimate Hash Browns Platter', badges=['Breakfast only'],
         avail='It is only sold during breakfast at select DQ Grill & Chill locations.',
         intro='Crispy hash browns topped with sausage, scrambled eggs, cheese and country gravy, all in one dish.',
         spec=[['Price', '$5.99'], ['Calories', '790'], ['Loaded with', 'Sausage, eggs, cheese, gravy'], ['Served', 'Breakfast hours at select stores']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What is on the DQ Ultimate Hash Browns Platter?', 'Hash browns topped with sausage, scrambled eggs, cheese and country gravy.')],
         body='<h2>DQ breakfast menu compared</h2>' + table(*BREAKFAST, bold=3) + BREAKL),

    dict(slug='kids-cheeseburger-meal', cat='kids', name='Kids Cheeseburger Meal', short='Kids Cheeseburger Meal', price='$4.99',
         title='DQ Kids Cheeseburger Meal: Price & What’s Included',
         desc='The Dairy Queen Kids Cheeseburger Meal costs about $4.99 with a cheeseburger, side, drink and a vanilla cone. Calories and choices.',
         image='/Images/kids-cheeseburger-meal.webp', alt='Dairy Queen kids cheeseburger meal with fries and a cone', badges=['Cone included'],
         quick='The Kids Cheeseburger Meal at Dairy Queen costs about $4.99 and includes a kid-size cheeseburger, fries or applesauce, a drink and a small vanilla cone. With fries and the cone it is about 700 calories. Prices vary by location.',
         intro='A kid-size cheeseburger with a choice of fries or applesauce, milk or a soft drink, and a small vanilla cone for dessert.',
         spec=[['Price', '$4.99'], ['Side', 'Fries or applesauce'], ['Drink', 'Milk or soft drink'], ['Dessert', 'Small vanilla cone']], allergens='Milk, Wheat, Soy',
         faqs=[('Does a DQ kids meal come with ice cream?', 'Yes. Every DQ kids meal includes a small vanilla cone.'),
               ('How can I make a DQ kids meal lighter?', 'Choose applesauce instead of fries and milk instead of soda.')],
         body='<h2>DQ kids meals compared</h2>' + table(*KIDS, bold=0) + KIDSL),

    dict(slug='kids-chicken-strips-meal', cat='kids', name='Kids Chicken Strips Meal', short='Kids Chicken Strips Meal', price='$4.99',
         title='DQ Kids Chicken Strips Meal: Price & What’s Included',
         desc='The Dairy Queen Kids Chicken Strips Meal costs about $4.99 with 2 chicken strips, a side, drink and a vanilla cone.',
         image='/Images/kids-chicken-strips-meal.webp', alt='Dairy Queen kids chicken strips meal', badges=['Cone included'],
         quick='The Kids Chicken Strips Meal at Dairy Queen costs about $4.99 and includes 2 chicken strips with a dipping sauce, fries or applesauce, a drink and a small vanilla cone. Prices vary by location.',
         intro='Two breaded chicken strips with a dipping sauce, a side, a drink and a small vanilla cone. It is the most filling of the three kids meals.',
         spec=[['Price', '$4.99'], ['Entrée', '2 chicken strips + sauce'], ['Side', 'Fries or applesauce'], ['Dessert', 'Small vanilla cone']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('Does the kids chicken strip meal come with a sauce?', 'Yes, one dipping sauce, such as ranch, honey mustard, BBQ or gravy.'),
               ('How can I make a DQ kids meal lighter?', 'Choose applesauce instead of fries and milk instead of soda.')],
         body='<h2>DQ kids meals compared</h2>' + table(*KIDS, bold=1) + KIDSL),

    dict(slug='kids-hot-dog-meal', cat='kids', name='Kids Hot Dog Meal', short='Kids Hot Dog Meal', price='$4.99',
         title='DQ Kids Hot Dog Meal: Price & What’s Included',
         desc='The Dairy Queen Kids Hot Dog Meal costs about $4.99 with a hot dog, side, drink and a vanilla cone. The lightest DQ kids meal.',
         image='/Images/kids-hot-dog-meal.webp', alt='Dairy Queen kids hot dog meal', badges=['Cone included'],
         quick='The Kids Hot Dog Meal at Dairy Queen costs about $4.99 and includes a hot dog, fries or applesauce, a drink and a small vanilla cone. It is the lightest of the three kids meals, at about 650 calories with fries and the cone. Prices vary by location.',
         intro='An all-beef hot dog in a steamed bun with a side, a drink and a small vanilla cone.',
         spec=[['Price', '$4.99'], ['Entrée', 'Hot dog'], ['Side', 'Fries or applesauce'], ['Dessert', 'Small vanilla cone']], allergens='Wheat, Soy, Milk (cone)',
         faqs=[('Which DQ kids meal has the fewest calories?', 'The hot dog meal, at about 650 calories with fries and the cone. Choosing applesauce and milk lowers it further.')],
         body='<h2>DQ kids meals compared</h2>' + table(*KIDS, bold=2) + KIDSL),

    dict(slug='7-meal-deal', cat='deals', name='$7 Meal Deal', short='$7 Meal Deal', price='$7.00',
         title='Dairy Queen $7 Meal Deal: What’s Included (2026)',
         desc='The Dairy Queen $7 Meal Deal includes a cheeseburger or 3-piece chicken strips, fries, a drink and a small sundae. Calories and tips.',
         image='/Images/7-meal-deal.webp', alt='Dairy Queen $7 Meal Deal with chicken strips, fries, drink and sundae', badges=['Best value meal'],
         quick='The Dairy Queen $7 Meal Deal includes an Original Cheeseburger or 3-piece chicken strips, regular fries, a soft drink and a small sundae for $7. The cheeseburger meal is about 900 calories and the chicken meal about 1,100. It is offered all day at participating DQ Grill & Chill locations. Prices vary by location.',
         price_q='How much is the Dairy Queen meal deal?', price_a='$7 at participating locations, though some stores charge a little more.',
         intro='One of the best-value meals in fast food: an entrée, fries, a drink and a dessert for $7.',
         spec=[['Price', '$7.00'], ['Entrée', 'Original Cheeseburger or 3-piece chicken strips'], ['Includes', 'Regular fries, soft drink, small sundae'], ['When', 'All day at participating Grill & Chill stores']],
         faqs=[('Can I swap the sundae for a Blizzard?', 'Many stores let you upgrade to a Mini Blizzard for an extra charge. Ask at the counter.'),
               ('Which is better in the $7 Meal Deal, strips or cheeseburger?', 'The chicken strips give you more food; the cheeseburger is the lighter meal.')],
         body='<h2>What you get</h2>' + table(['Part of the meal', 'Choices'], [
             ['Entrée', '<a href="/items/original-cheeseburger">Original Cheeseburger</a> or 3-piece chicken strips'], ['Side', '<a href="/items/regular-fries">Regular fries</a>'],
             ['Drink', '<a href="/items/soft-drinks">Soft drink</a>'], ['Dessert', 'Small sundae, such as <a href="/items/hot-fudge-sundae">hot fudge</a>']], bold=-1) +
         '<h2>Tips</h2>' + ul(['Upgrade the sundae to a Mini Blizzard for a small charge.', 'Add a slice of Texas toast to the chicken meal.', 'Check the DQ app for deals that stack.']) +
         '<p>Compare every value deal in our <a href="/blog/dq-meal-deals-guide">DQ meal deals guide</a> or on the <a href="/combos">deals page</a>.</p>'),

    dict(slug='2-for-5-mix-match', cat='deals', name='2 for $5 Mix & Match', short='2 for $5 Mix & Match', price='$5.00',
         title='Dairy Queen 2 for $5 Menu: Items & Best Picks (2026)',
         desc='The Dairy Queen 2 for $5 Mix & Match: pick any two eligible items for $5. Which items are on it, the best pairs, and the 2 for $7 version.',
         image='/Images/2-for-5-mix-match.webp', alt='Dairy Queen 2 for $5 Mix and Match items', badges=['Value menu'],
         quick='The Dairy Queen 2 for $5 Mix & Match lets you choose any two eligible items, such as 2-piece chicken strips, a cheeseburger, a chili cheese dog or pretzel sticks with queso, for $5. It is offered at participating locations, and the item list varies by store. Prices vary by location.',
         price_q='How does the DQ 2 for $5 work?', price_a='Pick any two items from the eligible list and pay $5 for both. The list varies by store.',
         intro='Pick any two items from the eligible list and pay $5 total. Some markets run a 2 for $7 version with bigger items instead.',
         spec=[['Price', '$5.00 for two'], ['Where', 'Participating DQ Grill & Chill stores'], ['Items', 'Varies by store']],
         faqs=[('What is on the DQ 2 for $5 menu?', 'Common items include 2-piece chicken strips, a cheeseburger, a chili cheese dog, pretzel sticks with queso, fries and a small sundae.'),
               ('Does Dairy Queen have a 2 for $7?', 'Some markets do, with larger items. Check the DQ app for your store.')],
         body='<h2>Common 2 for $5 items</h2>' + table(['Item', 'Price on its own', 'Calories'], [
             ['<a href="/items/2pc-chicken-strips">2-piece chicken strips</a>', '$3.49', '~280'], ['<a href="/items/pretzel-sticks-queso">Pretzel sticks with queso</a>', '$3.99', '440'],
             ['<a href="/items/chili-cheese-dog">Chili cheese dog</a>', '$4.99', '420'], ['<a href="/items/original-cheeseburger">Original Cheeseburger</a>', '$6.39', '400'],
             ['<a href="/items/regular-fries">Small fries</a>', '$2.49', '260']], bold=-1) +
         '<h2>Best picks</h2>' + ul(['Choose the items that cost the most on their own, such as the cheeseburger or chili cheese dog.', 'Skip fries; they are already cheap.',
                                    'A good pair: chicken strips plus pretzel sticks with queso.']) +
         '<p>Full details on every value deal are in our <a href="/blog/dq-meal-deals-guide">DQ meal deals guide</a>.</p>'),
]

EXTRA = {
    '2pc-chicken-strips': '<p>Kids who are too old for a kids meal but not hungry enough for a basket often do well with 2-piece strips and a small fries.</p>',
    'biscuit-gravy': '<p>It is one of the cheapest ways to get a hot breakfast at DQ, and it pairs well with a coffee or a small <a href="/items/breakfast-burrito">breakfast burrito</a> if you are hungrier.</p>',
    'breakfast-burrito': '<h2>Good to know</h2>' + ul(['Ask for picante sauce or salsa on the side if your store has it.', 'It is easy to eat in the car, which makes it the go-to for a quick morning stop.', 'Some stores also sell a chicken and gravy burrito for a little more.']),
    'buttermilk-pancake-platter': '<h2>Good to know</h2>' + ul(['Ask for the syrup on the side so the pancakes stay fluffy if you are taking it to go.', 'It is the only sweet breakfast platter on the DQ menu.', 'Want something savory instead? Try the <a href="/items/country-breakfast-platter">Country Breakfast Platter</a>.']),
    'country-breakfast-platter': '<p>It is a lot of food, at about 860 calories, so it works well as a late breakfast or brunch. Ask for gravy on the side if you are taking it to go.</p>',
    'crispy-chicken-sandwich': '<h2>Good to know</h2>' + ul(['Ask for no mayo to save some calories.', 'Make it a meal with fries and a drink; ask your store for combo pricing.', GC]),
    'grilled-chicken-sandwich': '<p>At about 36 grams of protein, it is also one of the highest-protein items on the menu for its calories.</p>',
    'hot-dog': '<h2>Good to know</h2>' + ul(['Toppings like ketchup, mustard and onion are usually free.', 'Want chili and cheese? Upgrade to the chili cheese dog for about $1 more.']),
    'kids-cheeseburger-meal': '<p>Kids meals are also a cheap way for adults with small appetites to get a burger, fries, drink and cone.</p>',
    'kids-chicken-strips-meal': '<p>Most kids can finish two strips; if yours is extra hungry, add a side of fries or get the 2-piece strips separately.</p>',
    'kids-hot-dog-meal': '<h2>Good to know</h2>' + ul(['Toppings like ketchup and mustard are added on request.', 'Ask for the cone after the meal so it does not melt.']),
    'ultimate-hash-browns-platter': '<h2>Good to know</h2>' + ul(['It is easier to share than the Country Breakfast Platter because it is all in one dish.', 'Ask for gravy on the side if you want the hash browns to stay crispy.', 'At about 790 calories, it is a hearty breakfast.']),
}
for it in ITEMS:
    if it['slug'] in EXTRA:
        it['body'] += EXTRA[it['slug']]

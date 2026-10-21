# Hand-written copy for classic treats, drinks and sides. Facts match the
# existing item pages and category hubs.


def table(head, rows, bold=0):
    h = ''.join(f'<th>{x}</th>' for x in head)
    b = ''
    for i, r in enumerate(rows):
        cells = ''.join(f'<td>{"<strong>" + c + "</strong>" if j == 0 and i == bold else c}</td>' for j, c in enumerate(r))
        b += f'<tr>{cells}</tr>'
    return f'<div class="table-wrap"><table class="size-table"><thead><tr>{h}</tr></thead><tbody>{b}</tbody></table></div>'


def ul(items):
    return '<ul>' + ''.join(f'<li>{x}</li>' for x in items) + '</ul>'


SUNDAES = ['Sundae', 'Typical price', 'Calories'], [
    ['<a href="/items/strawberry-sundae">Strawberry (medium)</a>', '$3.79', '340'],
    ['<a href="/items/hot-fudge-sundae">Hot fudge (medium)</a>', '$3.79', '430'],
    ['<a href="/items/caramel-sundae">Caramel (medium)</a>', '$3.79', '430'],
]
NOVELTIES = ['Treat', 'Typical price', 'Calories'], [
    ['<a href="/items/dq-sandwich">DQ Sandwich</a>', '$1.49', '~180'],
    ['<a href="/items/dilly-bar">Dilly Bar</a>', '$1.99', '~220'],
    ['<a href="/items/non-dairy-dilly-bar">Non-Dairy Dilly Bar</a>', '$2.49', '220'],
    ['<a href="/items/buster-bar">Buster Bar</a>', '$2.49', '~475'],
]
SIDES = ['Side', 'Typical price', 'Calories'], [
    ['<a href="/items/side-salad">Side salad (no dressing)</a>', '$3.29', '20'],
    ['<a href="/items/regular-fries">Regular fries</a>', '$2.49', '280'],
    ['<a href="/items/onion-rings">Onion rings (regular)</a>', '$3.29', '290'],
    ['<a href="/items/pretzel-sticks-queso">Pretzel sticks with queso</a>', '$3.99', '340'],
    ['<a href="/items/cheese-curds">Cheese curds</a>', '$3.99', '500'],
]
CLASSIC = '<p>See every cone, sundae and novelty on the <a href="/categories/classic-treats">classic treats menu</a>.</p>'
DRINKS = '<p>Every drink and size is on the <a href="/categories/drinks">DQ drinks menu</a>; our <a href="/blog/dq-shake-moolatte-guide">shakes and MooLatté guide</a> helps you pick.</p>'
SIDESL = '<p>See every side on the <a href="/categories/snacks-sides">DQ snacks and sides menu</a>.</p>'

ITEMS = [
    dict(slug='vanilla-soft-serve-cone', cat='classic', name='Vanilla Soft Serve Cone', short='vanilla cone',
         title='Dairy Queen Vanilla Cone: Price, Sizes & Calories',
         desc='A Dairy Queen vanilla cone costs about $1.79 kids’, $2.39 small and $2.99 medium. Calories by size, the curl on top and dipped cone options.',
         image='/Images/vanilla-soft-serve-cone.webp', alt='Dairy Queen vanilla soft serve cone with the curl on top', badges=['Every DQ', 'Since 1940'],
         sizes=[('Kids’', '$1.79', '160'), ('Small', '$2.39', '220'), ('Medium', '$2.99', '320')],
         quick='A Dairy Queen vanilla cone costs about $1.79 for a kids’ cone, $2.39 for a small and $2.99 for a medium. A small cone has about 220 calories. Cones are sold at every DQ, including Treat-only stores. Prices vary by location.',
         price_q='How much is a vanilla cone at Dairy Queen?', price_a='About $1.79 for a kids’ cone, $2.39 for a small and $2.99 for a medium. Prices vary by location.',
         intro='The original DQ treat: vanilla soft serve on a cake cone with the curl on top. It is the cheapest way to get a taste of Dairy Queen and is sold at every location.',
         spec=[['Sizes', 'Kids’ · Small · Medium'], ['Calories (small)', '220'], ['Cone', 'Cake cone']], allergens='Milk, Wheat, Soy',
         faqs=[('How many calories are in a Dairy Queen vanilla cone?', 'About 160 calories for a kids’ cone, 220 for a small and 320 for a medium.'),
               ('What is DQ soft serve made of?', 'Milk, milkfat, sugar, corn syrup, whey and stabilizers that keep it smooth. It has about 5% butterfat, which is why it is called soft serve and not ice cream.')],
         body='<h2>Plain, dipped or in a cup?</h2>' + ul([
             'A <a href="/items/chocolate-dipped-cone">chocolate dipped cone</a> adds a crunchy chocolate shell for about 80 cents more.',
             'Ask for it in a cup if you want to skip the cone.',
             'A kids’ cone (about 160 calories) is one of the lightest treats at DQ.']) +
         '<h2>Is it real ice cream?</h2><p>Not by the legal definition, because it has less than 10% milkfat. We explain why in <a href="/blog/dairy-queen-ice-cream-vs-soft-serve">Is DQ soft serve ice cream?</a></p>' + CLASSIC),

    dict(slug='chocolate-dipped-cone', cat='classic', name='Chocolate Dipped Cone', short='chocolate dipped cone',
         title='DQ Chocolate Dipped Cone: Price & Calories (2026)',
         desc='A Dairy Queen chocolate dipped cone costs about $3.19 small and $3.79 medium. Calories, how the shell works and how it compares to a plain cone.',
         image='/Images/chocolate-dipped-cone.webp', alt='Dairy Queen chocolate dipped cone with a hard chocolate shell', badges=['Classic treat'],
         sizes=[('Small', '$3.19', '320'), ('Medium', '$3.79', '460')],
         quick='A Dairy Queen chocolate dipped cone costs about $3.19 for a small and $3.79 for a medium. A small has about 320 calories. Prices vary by location.',
         price_q='How much is a dipped cone at Dairy Queen?', price_a='About $3.19 for a small and $3.79 for a medium. Prices vary by location.',
         intro='A vanilla soft serve cone dipped upside down in warm chocolate, which hardens into a crunchy shell within seconds.',
         spec=[['Sizes', 'Small · Medium'], ['Calories (small)', '320'], ['Coating', 'Chocolate shell that hardens on the cone']], allergens='Milk, Wheat, Soy',
         faqs=[('How does the chocolate on a DQ dipped cone get hard?', 'The warm chocolate coating sets almost instantly when it touches the cold soft serve.'),
               ('Is a dipped cone worth the extra cost?', 'If you like chocolate, yes. It costs about 80 cents more than a plain small cone and adds a crunchy shell.')],
         body='<h2>Dipped cone vs. plain cone</h2>' + table(['Cone', 'Typical price', 'Calories'], [
             ['Chocolate dipped (small)', '$3.19', '320'], ['<a href="/items/vanilla-soft-serve-cone">Vanilla cone (small)</a>', '$2.39', '220']]) +
         '<h2>Tips</h2>' + ul(['Eat it from the top down; the shell cracks and falls if you bite the side first.', 'Some stores offer other dip flavors seasonally. Ask what is available.']) + CLASSIC),

    dict(slug='hot-fudge-sundae', cat='classic', name='Hot Fudge Sundae', short='hot fudge sundae',
         title='DQ Hot Fudge Sundae: Price & Calories (2026)',
         desc='A Dairy Queen hot fudge sundae costs about $3.49 small and $3.79 medium. Calories, what comes on it and how it compares to other DQ sundaes.',
         image='/Images/hot-fudge-sundae.webp', alt='Dairy Queen hot fudge sundae', badges=['Classic treat', 'In the $7 Meal Deal'],
         sizes=[('Small', '$3.49', '300'), ('Medium', '$3.79', '430')],
         quick='A Dairy Queen hot fudge sundae costs about $3.49 for a small and $3.79 for a medium. A medium has about 430 calories, and a small sundae comes with the $7 Meal Deal. Prices vary by location.',
         price_q='How much is a hot fudge sundae at Dairy Queen?', price_a='About $3.49 for a small and $3.79 for a medium. Prices vary by location.',
         intro='Vanilla soft serve with warm hot fudge poured over the top. Simple, and one of the most ordered treats at DQ.',
         spec=[['Sizes', 'Small · Medium'], ['Calories (medium)', '430'], ['Also in', '$7 Meal Deal (small)']], allergens='Milk, Soy',
         faqs=[('Does the $7 Meal Deal come with a hot fudge sundae?', 'Yes. The $7 Meal Deal includes a small sundae, and hot fudge is one of the choices.')],
         body='<h2>DQ sundaes compared</h2>' + table(*SUNDAES, bold=1) +
         '<h2>Tips</h2>' + ul(['Add nuts or extra fudge for a small charge.', 'Want more toppings? The <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> layers fudge and peanuts all the way down.']) + CLASSIC),

    dict(slug='strawberry-sundae', cat='classic', name='Strawberry Sundae', short='strawberry sundae', price='$3.79', cal='340',
         title='DQ Strawberry Sundae: Price & Calories (2026)',
         desc='A Dairy Queen strawberry sundae costs about $3.79 and has 340 calories, the lightest of DQ’s three sundaes. What is on it and how it compares.',
         image='/Images/strawberry-sundae.webp', alt='Dairy Queen strawberry sundae', badges=['Lightest sundae'],
         intro='Vanilla soft serve topped with strawberry topping. At about 340 calories for a medium it is the lightest of DQ’s three classic sundaes.',
         spec=[['Price', '$3.79 (medium)'], ['Calories', '340 (medium)'], ['Topping', 'Strawberry']], allergens='Milk',
         faqs=[('Which DQ sundae has the fewest calories?', 'The strawberry sundae, at about 340 calories for a medium.')],
         body='<h2>DQ sundaes compared</h2>' + table(*SUNDAES, bold=0) + CLASSIC),

    dict(slug='caramel-sundae', cat='classic', name='Caramel Sundae', short='caramel sundae', price='$3.79', cal='430',
         title='DQ Caramel Sundae: Price & Calories (2026)',
         desc='A Dairy Queen caramel sundae costs about $3.79 and has 430 calories. What is on it and how it compares to hot fudge and strawberry sundaes.',
         image='/Images/caramel-sundae.webp', alt='Dairy Queen caramel sundae', badges=['Classic treat'],
         intro='Vanilla soft serve with caramel topping. It is the sweetest of the three classic DQ sundaes.',
         spec=[['Price', '$3.79 (medium)'], ['Calories', '430 (medium)'], ['Topping', 'Caramel']], allergens='Milk',
         faqs=[('Can I add nuts to a caramel sundae?', 'Yes, most stores will add nuts for a small charge.')],
         body='<h2>DQ sundaes compared</h2>' + table(*SUNDAES, bold=2) +
         '<p>Like caramel? The <a href="/items/turtle-pecan-blizzard">Turtle Pecan Cluster Blizzard</a> mixes caramel with pecans and fudge.</p>' + CLASSIC),

    dict(slug='peanut-buster-parfait', cat='classic', name='Peanut Buster Parfait', short='Peanut Buster Parfait', price='$4.99', cal='710', article='The',
         title='DQ Peanut Buster Parfait: Price & Calories (2026)',
         desc='The Dairy Queen Peanut Buster Parfait costs about $4.99 and has 710 calories. Layers of soft serve, hot fudge and peanuts; allergens and tips.',
         image='/Images/peanut-buster-parfait.webp', alt='Dairy Queen Peanut Buster Parfait with fudge and peanuts', badges=['On the menu since 1968'],
         intro='Layers of vanilla soft serve, hot fudge and salted peanuts in a tall cup. Because it is layered, not blended, you get fudge and peanuts all the way to the bottom.',
         spec=[['Price', '$4.99'], ['Calories', '710'], ['Layers', 'Soft serve, hot fudge, peanuts']], allergens='Milk, Peanuts, Soy',
         faqs=[('Does the Peanut Buster Parfait contain peanuts?', 'Yes, whole salted peanuts are layered through it.')],
         body='<h2>Peanut Buster Parfait vs. other big treats</h2>' + table(['Treat', 'Typical price', 'Calories'], [
             ['Peanut Buster Parfait', '$4.99', '710'], ['<a href="/items/banana-split">Banana Split</a>', '$5.69', '520'],
             ['<a href="/items/brownie-oreo-cupfection">Brownie &amp; Oreo Cupfection</a>', '$6.29', '720'], ['<a href="/items/reeses-blizzard">Reese’s Blizzard (Small)</a>', '$4.49', '610']]) +
         '<p>It is rich, at about 710 calories, so it is easy to share.</p>' + CLASSIC),

    dict(slug='brownie-oreo-cupfection', cat='classic', name='Brownie & Oreo Cupfection', short='Brownie & Oreo Cupfection', price='$6.29', cal='720', article='The',
         title='DQ Brownie & Oreo Cupfection: Price & Calories',
         desc='The Dairy Queen Brownie & Oreo Cupfection costs about $6.29 and has 720 calories. Layers of soft serve, brownie, Oreo and fudge.',
         image='/Images/brownie-oreo-cupfection.webp', alt='Dairy Queen Brownie and Oreo Cupfection layered dessert', badges=['Layered treat'],
         intro='A layered dessert cup: vanilla soft serve with brownie pieces, Oreo cookie pieces and fudge. Like a Blizzard, but layered instead of blended.',
         spec=[['Price', '$6.29'], ['Calories', '720'], ['Format', 'Layered cup, not blended']], allergens='Milk, Wheat, Soy, Eggs',
         faqs=[('What is a Cupfection?', 'A layered dessert cup with soft serve, toppings and mix-ins stacked in layers rather than blended like a Blizzard.')],
         body='<h2>Cupfection or Blizzard?</h2><p>If you like every bite to taste the same, get a Blizzard such as the <a href="/items/choco-brownie-blizzard">Choco Brownie Extreme</a>. If you like distinct layers of brownie, cookie and fudge, the Cupfection is for you. It is big, at about 720 calories, so it shares well.</p>' + CLASSIC),

    dict(slug='dilly-bar', cat='classic', name='Dilly Bar', short='Dilly Bar', price='$1.99', cal='220',
         title='Dairy Queen Dilly Bar: Price & Calories (2026)',
         desc='A Dairy Queen Dilly Bar costs about $1.99 and has about 220 calories. What it is, the Non-Dairy Dilly Bar, and how it compares to other DQ novelties.',
         image='/Images/dilly-bar.webp', alt='Dairy Queen Dilly Bar on a stick', badges=['Since 1955', 'Under $2'],
         quick='A Dairy Queen Dilly Bar costs about $1.99 and has about 220 calories. It is vanilla soft serve on a stick with a crunchy chocolate coating. A Non-Dairy Dilly Bar costs about $2.49. Prices vary by location.',
         intro='A round disc of vanilla soft serve on a stick, dipped in chocolate coating. It has been on the DQ menu since 1955 and is one of the cheapest treats you can buy there.',
         spec=[['Price', '$1.99'], ['Calories', '~220'], ['Format', 'Round bar on a stick']], allergens='Milk, Soy',
         faqs=[('Is there a dairy-free Dilly Bar?', 'Yes. The Non-Dairy Dilly Bar costs about $2.49 and is made without milk.')],
         body='<h2>DQ novelties compared</h2>' + table(*NOVELTIES, bold=1) +
         '<h2>Tips</h2>' + ul(['Many stores sell Dilly Bars in multi-packs to keep at home.', 'For peanuts and fudge, try the <a href="/items/buster-bar">Buster Bar</a>.']) + CLASSIC),

    dict(slug='non-dairy-dilly-bar', cat='classic', name='Non-Dairy Dilly Bar', short='Non-Dairy Dilly Bar', price='$2.49', cal='220',
         title='DQ Non-Dairy Dilly Bar: Price & Calories (2026)',
         desc='The Dairy Queen Non-Dairy Dilly Bar costs about $2.49 and has 220 calories. DQ’s main dairy-free treat; what to know about allergens.',
         image='/Images/non-dairy-dilly-bar.webp', alt='Dairy Queen Non-Dairy Dilly Bar', badges=['Dairy-free'],
         intro='A dairy-free version of the classic Dilly Bar: a plant-based frozen dessert on a stick with a chocolatey coating. It is the main dairy-free treat at Dairy Queen.',
         spec=[['Price', '$2.49'], ['Calories', '220'], ['Made without', 'Milk']],
         faqs=[('Is the Non-Dairy Dilly Bar vegan?', 'It is made without milk. Check Dairy Queen’s official ingredient and allergen list to confirm it fits your diet.'),
               ('Is it safe for a severe milk allergy?', 'It may be made in a facility that also handles milk. Check the wrapper and DQ’s allergen guide.')],
         body='<p>Avoiding dairy at DQ is hard; most treats are made with soft serve. Our <a href="/blog/dq-gluten-free-allergen-guide">allergen guide</a> lists the other dairy-free options, such as most <a href="/items/misty-slush">Misty Slush</a> flavors.</p>' +
         '<h2>DQ novelties compared</h2>' + table(*NOVELTIES, bold=2) + CLASSIC),

    dict(slug='buster-bar', cat='classic', name='Buster Bar', short='Buster Bar', price='$2.49', cal='475',
         title='Dairy Queen Buster Bar: Price & Calories (2026)',
         desc='A Dairy Queen Buster Bar costs about $2.49 and has about 475 calories. Soft serve, peanuts and fudge in a chocolate shell; allergens and comparisons.',
         image='/Images/buster-bar.webp', alt='Dairy Queen Buster Bar with peanuts and fudge', badges=['On a stick'],
         intro='Vanilla soft serve with a layer of fudge and peanuts, all coated in chocolate on a stick. Think of it as a Peanut Buster Parfait you can hold.',
         spec=[['Price', '$2.49'], ['Calories', '~475'], ['Inside', 'Soft serve, fudge, peanuts, chocolate coating']], allergens='Milk, Peanuts, Soy',
         faqs=[('Does the Buster Bar contain peanuts?', 'Yes. It has a layer of peanuts and fudge.')],
         body='<h2>DQ novelties compared</h2>' + table(*NOVELTIES, bold=3) +
         '<p>It has about twice the calories of a <a href="/items/dilly-bar">Dilly Bar</a>, mostly from the peanuts and fudge.</p>' + CLASSIC),

    dict(slug='dq-sandwich', cat='classic', name='DQ Sandwich', short='DQ Sandwich', price='$1.49', cal='180',
         title='Dairy Queen DQ Sandwich: Price & Calories (2026)',
         desc='The DQ Sandwich costs about $1.49 and has about 180 calories, the cheapest treat at Dairy Queen. Vanilla soft serve between chocolate wafers.',
         image='/Images/dq-sandwich.webp', alt='Dairy Queen DQ Sandwich ice cream sandwich', badges=['Cheapest treat'],
         intro='Vanilla soft serve between two soft chocolate wafers. It is the lowest-priced treat at Dairy Queen and one of the lightest.',
         spec=[['Price', '$1.49'], ['Calories', '~180'], ['Format', 'Ice cream sandwich']], allergens='Milk, Wheat, Soy',
         faqs=[('What is the cheapest treat at Dairy Queen?', 'The DQ Sandwich, at about $1.49.')],
         body='<h2>DQ novelties compared</h2>' + table(*NOVELTIES, bold=0) + CLASSIC),

    dict(slug='chocolate-shake', cat='drinks', name='Chocolate Shake', short='chocolate shake',
         title='DQ Chocolate Shake: Price, Sizes & Calories (2026)',
         desc='A Dairy Queen chocolate shake costs about $3.49 small, $4.29 medium and $4.99 large. Calories by size, other flavors and shake vs. malt.',
         image='/Images/chocolate-shake.webp', alt='Dairy Queen chocolate shake with whipped topping', badges=['Can be made as a malt'],
         sizes=[('Small', '$3.49', '530'), ('Medium', '$4.29', '710'), ('Large', '$4.99', '920')],
         quick='A Dairy Queen chocolate shake costs about $3.49 for a small, $4.29 for a medium and $4.99 for a large. A small has about 530 calories. Any shake can be made as a malt. Prices vary by location.',
         price_q='How much is a shake at Dairy Queen?', price_a='About $3.49 for a small, $4.29 for a medium and $4.99 for a large. Prices vary by location.',
         intro='DQ soft serve blended with milk and chocolate syrup, topped with whipped topping. Other flavors include vanilla, strawberry and more, and any shake can be made as a malt.',
         spec=[['Sizes', 'Small · Medium · Large'], ['Calories (small)', '530'], ['Malt', 'Available']], allergens='Milk, Soy (malt adds wheat and barley)',
         faqs=[('What is the difference between a shake and a malt?', 'A malt has malted milk powder blended in, which gives it a toasty, slightly nutty taste.')],
         body='<h2>Shake or something lighter?</h2><p>A small shake is about 530 calories. For a cold drink with fewer calories, a small <a href="/items/misty-slush">Misty Slush</a> is about 200, and a small Strawberry Banana <a href="/items/fruit-smoothies">fruit smoothie</a> about 260. For coffee, try the <a href="/items/moolatte">MooLatté</a>.</p>' + DRINKS),

    dict(slug='moolatte', cat='drinks', name='MooLatté Frozen Coffee', short='MooLatté',
         title='DQ MooLatté: Price, Sizes & Calories (2026)',
         desc='A Dairy Queen MooLatté costs about $4.29 small, $4.99 medium and $5.49 large. Flavors, calories by size and whether it has caffeine.',
         image='/Images/moolatte.webp', alt='Dairy Queen MooLatté frozen coffee with whipped cream', badges=['Has caffeine'],
         sizes=[('Small', '$4.29', '450–500'), ('Medium', '$4.99', '560–620'), ('Large', '$5.49', '700–780')],
         quick='A Dairy Queen MooLatté costs about $4.29 for a small, $4.99 for a medium and $5.49 for a large. A small mocha MooLatté has about 500 calories. It is sold at DQ Grill & Chill locations. Prices vary by location.',
         price_q='How much is a MooLatté at Dairy Queen?', price_a='About $4.29 for a small, $4.99 for a medium and $5.49 for a large. Prices vary by location.',
         intro='DQ’s blended frozen coffee: coffee and soft serve blended with flavor such as mocha or caramel, topped with whipped cream.',
         spec=[['Flavors', 'Mocha · Caramel · Vanilla'], ['Calories (small mocha)', '500'], ['Caffeine', 'Yes']], allergens='Milk, Soy',
         faqs=[('Does a MooLatté have caffeine?', 'Yes. It is made with coffee. Check Dairy Queen’s nutrition information for the amount by size.')],
         body='<p>It is sweeter and thicker than a coffeehouse iced coffee, so treat it as a dessert. Not every Treat-only store makes it.</p>' + DRINKS),

    dict(slug='misty-slush', cat='drinks', name='Misty Slush', short='Misty Slush',
         title='DQ Misty Slush: Price, Flavors & Calories (2026)',
         desc='A Dairy Queen Misty Slush costs about $2.39 small, $2.89 medium and $3.29 large. Flavors, calories and the Misty Freeze and Float hacks.',
         image='/Images/misty-slush.webp', alt='Dairy Queen Misty Slush frozen drink', badges=['No fat', 'Dairy-free in most flavors'],
         sizes=[('Small', '$2.39', '200'), ('Medium', '$2.89', '260'), ('Large', '$3.29', '340')],
         quick='A Dairy Queen Misty Slush costs about $2.39 for a small, $2.89 for a medium and $3.29 for a large. A small has about 200 calories and no fat. Prices vary by location.',
         price_q='How much is a Misty Slush at Dairy Queen?', price_a='About $2.39 for a small, $2.89 for a medium and $3.29 for a large. Prices vary by location.',
         intro='Crushed ice with fruit flavor, such as cherry, blue raspberry or lemon-lime. It is the lightest frozen drink at DQ and made without dairy in most flavors.',
         spec=[['Flavors', 'Cherry · Blue Raspberry · Lemon-Lime · seasonal'], ['Calories (small)', '200'], ['Fat', '0 g']],
         faqs=[('Is the Misty Slush dairy-free?', 'Most flavors are made without dairy. A Misty Freeze, which blends in soft serve, contains milk.'),
               ('What is a Misty Freeze?', 'A Misty Slush blended with vanilla soft serve. Many stores will make one if you ask.')],
         body='<h2>Misty Freeze and Misty Float</h2><p>Ask for a Misty Slush blended with vanilla soft serve (a Misty Freeze), or with soft serve on top (a float). Both are on our <a href="/blog/dairy-queen-secret-menu">DQ secret menu</a> list.</p>' + DRINKS),

    dict(slug='fruit-smoothies', cat='drinks', name='Fruit Smoothies', short='fruit smoothie',
         title='DQ Fruit Smoothies: Price, Flavors & Calories (2026)',
         desc='Dairy Queen fruit smoothies cost about $3.99 small, $4.49 medium and $4.99 large. Flavors and calories by size.',
         image='/Images/fruit-smoothies.webp', alt='Dairy Queen fruit smoothie', badges=['Lighter drink'],
         sizes=[('Small', '$3.99', '260'), ('Medium', '$4.49', '350'), ('Large', '$4.99', '440')],
         quick='A Dairy Queen fruit smoothie costs about $3.99 for a small, $4.49 for a medium and $4.99 for a large. A small Strawberry Banana smoothie has about 260 calories. Smoothies are sold at DQ Grill & Chill locations. Prices vary by location.',
         price_q='How much is a smoothie at Dairy Queen?', price_a='About $3.99 for a small, $4.49 for a medium and $4.99 for a large. Prices vary by location.',
         intro='Fruit blended with ice into a smoothie. Common flavors are strawberry banana, mango pineapple and triple berry.',
         spec=[['Flavors', 'Strawberry Banana · Mango Pineapple · Triple Berry'], ['Calories (small Strawberry Banana)', '260']],
         faqs=[('Which Dairy Queen stores sell smoothies?', 'Mostly DQ Grill & Chill locations. Flavors vary by store.')],
         body='<p>A small smoothie has about half the calories of a small <a href="/items/chocolate-shake">shake</a>. For an orange flavor, look for <a href="/items/orange-julius">Orange Julius</a> at stores that carry it.</p>' + DRINKS),

    dict(slug='orange-julius', cat='drinks', name='Orange Julius', short='Orange Julius',
         title='Orange Julius at Dairy Queen: Price & Calories',
         desc='An Orange Julius costs about $3.99 small and $4.49 medium at Dairy Queen locations that carry it. Flavors, calories and where to find one.',
         image='/Images/orange-julius.webp', alt='Orange Julius drink', badges=['Select locations'],
         sizes=[('Small', '$3.99', '200'), ('Medium', '$4.49', '260')],
         quick='An Orange Julius costs about $3.99 for a small and $4.49 for a medium and has about 200 calories in a small. It is sold only at Dairy Queen locations that carry Orange Julius. Prices vary by location.',
         price_q='How much is an Orange Julius?', price_a='About $3.99 for a small and $4.49 for a medium. Prices vary by location.',
         intro='A frothy orange drink, part juice and part creamy shake. Orange Julius is owned by the same company as Dairy Queen, so some DQ stores sell it.',
         spec=[['Flavors', 'Original · Strawberry Banana · Tropical'], ['Calories (small)', '200'], ['Where', 'Select DQ and DQ/Orange Julius stores']],
         faqs=[('Does every Dairy Queen sell Orange Julius?', 'No. Only some DQ locations and combined DQ/Orange Julius stores sell it. Check the DQ app for your store.')],
         body='<p>If your DQ does not carry it, a <a href="/items/fruit-smoothies">fruit smoothie</a> or <a href="/items/misty-slush">Misty Slush</a> is the closest option.</p>' + DRINKS),

    dict(slug='soft-drinks', cat='drinks', name='Soft Drinks', short='soft drink',
         title='Dairy Queen Soft Drinks: Prices & Options (2026)',
         desc='Dairy Queen serves Coca-Cola fountain drinks from about $2.11. Sizes, diet options, and other drinks like Misty Slush and milk.',
         image='/Images/soft-drinks.webp', alt='Dairy Queen fountain soft drink', badges=['Coca-Cola products'],
         sizes=[('Small', 'from $2.11', '0–310')],
         quick='Dairy Queen serves Coca-Cola fountain drinks. A medium soft drink costs about $2.11, and a soft drink is included with the $7 Meal Deal. Prices vary by location.',
         price_q='How much is a soft drink at Dairy Queen?', price_a='Fountain drinks start at about $2.11. Prices vary by location and size.',
         intro='DQ fountains carry Coca-Cola drinks such as Coke, Diet Coke, Coke Zero and Sprite. Calories range from zero for diet drinks to about 310 for a large regular soda.',
         spec=[['Brand', 'Coca-Cola fountain drinks'], ['Diet options', 'Diet Coke, Coke Zero, Sprite Zero'], ['Calories', '0–310 by drink and size']],
         faqs=[('Is a drink included in the $7 Meal Deal?', 'Yes, a soft drink comes with the $7 Meal Deal.')],
         body='<h2>Other DQ drinks</h2>' + table(['Drink', 'From', 'Calories'], [
             ['Fountain soft drink', '$2.11', '0–310'], ['<a href="/items/misty-slush">Misty Slush</a>', '$2.39', '200+'],
             ['<a href="/items/chocolate-shake">Shake</a>', '$3.49', '530+'], ['<a href="/items/moolatte">MooLatté</a>', '$4.29', '450+']]) + DRINKS),

    dict(slug='cheese-curds', cat='snacks', name='Cheese Curds', short='cheese curds', price='$3.99', cal='500', plural=True, article='DQ',
         title='DQ Cheese Curds: Price & Calories (2026)',
         desc='Dairy Queen cheese curds cost about $3.99 and have 500 calories. What they are, how they compare to fries and pretzel sticks, and dipping ideas.',
         image='/Images/cheese-curds.webp', alt='Dairy Queen fried cheese curds', badges=['Grill & Chill side'],
         intro='Battered and fried white cheddar cheese curds: crispy outside, stretchy and melted inside. They are the side DQ is best known for.',
         spec=[['Price', '$3.99'], ['Calories (regular)', '500'], ['Total fat', '34 g']], allergens='Milk, Wheat',
         faqs=[('Do DQ cheese curds come with a sauce?', 'They are served without one, but you can ask for ranch or another dip, sometimes for a small charge.')],
         body='<h2>DQ sides compared</h2>' + table(*SIDES, bold=4) +
         '<h2>Tips</h2>' + ul(['Eat them hot; they firm up as they cool.', 'Try them with a side of gravy, like a quick poutine. More ideas are on our <a href="/blog/dairy-queen-secret-menu">secret menu</a> list.']) + SIDESL),

    dict(slug='onion-rings', cat='snacks', name='Onion Rings', short='onion rings', plural=True,
         title='DQ Onion Rings: Price & Calories (2026)',
         desc='Dairy Queen onion rings cost about $3.29 regular and $3.99 large. Calories by size and how they compare to fries and cheese curds.',
         image='/Images/onion-rings.webp', alt='Dairy Queen onion rings', badges=['Grill & Chill only'],
         sizes=[('Regular', '$3.29', '290'), ('Large', '$3.99', '450')],
         quick='Onion rings at Dairy Queen cost about $3.29 for a regular and $3.99 for a large. A regular order has about 290 calories. They are sold at DQ Grill & Chill locations. Prices vary by location.',
         price_q='How much are onion rings at Dairy Queen?', price_a='About $3.29 for a regular and $3.99 for a large. Prices vary by location.',
         intro='Battered, fried onion rings. They are a popular swap for fries with burgers and chicken baskets.',
         spec=[['Sizes', 'Regular · Large'], ['Calories (regular)', '290'], ['Where', 'DQ Grill & Chill only']], allergens='Wheat, Milk',
         faqs=[('Can I swap fries for onion rings in a basket?', 'Many stores allow it, sometimes for a small charge.')],
         body='<h2>DQ sides compared</h2>' + table(*SIDES, bold=2) + SIDESL),

    dict(slug='regular-fries', cat='snacks', name='French Fries', short='fries', plural=True,
         title='Dairy Queen Fries: Price, Sizes & Calories (2026)',
         desc='Dairy Queen fries cost about $2.49 regular and $3.49 large. Calories by size and which meals include them.',
         image='/Images/regular-fries.webp', alt='Dairy Queen french fries', badges=['In most DQ meals'],
         sizes=[('Regular', '$2.49', '280'), ('Large', '$3.49', '450')],
         quick='Fries at Dairy Queen cost about $2.49 for a regular and $3.49 for a large. A regular has about 280 calories. Fries come with chicken strip baskets and the $7 Meal Deal. Prices vary by location.',
         price_q='How much are fries at Dairy Queen?', price_a='About $2.49 for a regular and $3.49 for a large. Prices vary by location.',
         intro='Classic salted french fries. They come with chicken strip baskets and the $7 Meal Deal, and you can buy them on their own in two sizes.',
         spec=[['Sizes', 'Regular · Large'], ['Calories (regular)', '280'], ['Included with', 'Chicken strip baskets, $7 Meal Deal']],
         faqs=[('Are Dairy Queen fries gluten-free?', 'Potatoes do not contain gluten, but fries often share fryer oil with breaded foods, so they are not safe for celiac disease unless your store confirms a separate fryer.')],
         body='<h2>DQ sides compared</h2>' + table(*SIDES, bold=1) +
         '<p>Fries are a weak pick on the <a href="/items/2-for-5-mix-match">2 for $5 menu</a> because they are already cheap. Choose chicken strips or pretzel sticks instead.</p>' + SIDESL),

    dict(slug='side-salad', cat='snacks', name='Side Salad', short='side salad', price='$3.29', cal='20',
         title='DQ Side Salad: Price & Calories (2026)',
         desc='The Dairy Queen side salad costs about $3.29 and has 20 calories before dressing, the lightest food item at DQ. What is in it.',
         image='/Images/side-salad.webp', alt='Dairy Queen side salad', badges=['Lightest food item'],
         intro='Lettuce, tomatoes and croutons with dressing on the side. At about 20 calories before dressing, it is the lightest food item at Dairy Queen.',
         spec=[['Price', '$3.29'], ['Calories', '20 (without dressing)'], ['Where', 'DQ Grill & Chill']], allergens='Wheat (croutons)',
         faqs=[('Can I swap fries for a side salad?', 'Many stores allow it. It saves about 260 calories before dressing.')],
         body='<h2>DQ sides compared</h2>' + table(*SIDES, bold=0) +
         '<p>Pair it with a <a href="/items/grilled-chicken-sandwich">grilled chicken sandwich</a> for one of the lighter meals at DQ. See our <a href="/blog/dairy-queen-calories-nutrition-guide">DQ calories guide</a> for more.</p>' + SIDESL),
]

# Extra practical sections so short items still fully answer the searcher.
EXTRA = {
    'strawberry-sundae': '<h2>Ways to change it up</h2>' + ul([
        'Add hot fudge for a strawberry-and-chocolate sundae; most stores charge a little extra.',
        'Order it in the <a href="/items/7-meal-deal">$7 Meal Deal</a>, where a small sundae is included.',
        'Want strawberry in a Blizzard? Try the <a href="/items/strawberry-cheesequake-blizzard">Strawberry Cheesequake Blizzard</a>.',
        'Fruit toppings make soft serve melt a little faster, so eat it soon.']) +
        '<h2>Who it is for</h2><p>Pick the strawberry sundae if you want something sweet but not as heavy as fudge or caramel. It is also a good choice for kids who do not like chocolate.</p>',
    'caramel-sundae': '<h2>Ways to change it up</h2>' + ul([
        'Ask for half caramel, half hot fudge.', 'Add pecans or peanuts for crunch; there is usually a small charge.',
        'Get a small sundae in the <a href="/items/7-meal-deal">$7 Meal Deal</a> and ask if caramel is an option at your store.']) +
        '<h2>Who it is for</h2><p>Caramel fans who find hot fudge too chocolatey. It is the sweetest of the three sundaes, so a medium is plenty.</p>',
    'dq-sandwich': '<h2>Why people pick it</h2>' + ul([
        'It is the cheapest treat on the menu at about $1.49.', 'No drips: it is easy for kids and for eating in the car.',
        'Many stores sell DQ Sandwiches in multi-packs to keep in the freezer at home.']) +
        '<p>For something with a little more to it, the <a href="/items/dilly-bar">Dilly Bar</a> costs about 50 cents more and adds a chocolate coating.</p>',
    'buster-bar': '<h2>Good to know</h2>' + ul([
        'It is wrapped, so it travels well and is easy to grab at Treat-only stores.',
        'Contains peanuts; choose a <a href="/items/dilly-bar">Dilly Bar</a> or <a href="/items/dq-sandwich">DQ Sandwich</a> for a nut-free novelty.',
        'Many stores sell multi-packs of novelties for home.']),
    'brownie-oreo-cupfection': '<h2>Good to know</h2>' + ul([
        'It is one of the most expensive single treats at DQ, at about $6.29.',
        'Ask for an extra spoon; it is big enough for two.',
        'Some stores rotate Cupfection flavors, so check what is on the board.']) +
        '<p>For a cheaper layered treat, the <a href="/items/peanut-buster-parfait">Peanut Buster Parfait</a> costs about $4.99.</p>',
    'peanut-buster-parfait': '<h2>Good to know</h2>' + ul([
        'Contains peanuts, so it is not safe with a peanut allergy.',
        'Ask for extra fudge or extra peanuts if you like; there is usually a small charge.',
        'It is sold at most DQ locations, including many Treat-only stores.']) +
        '<p>Want the same flavors on a stick? The <a href="/items/buster-bar">Buster Bar</a> has soft serve, fudge and peanuts for about $2.49.</p>',
    'dilly-bar': '<h2>Good to know</h2><p>Some stores make Dilly Bars on site and others stock them pre-made, so they can look a little different from store to store. Flavors beyond chocolate show up at some locations, such as cherry or mint coatings. A plain Dilly Bar is one of the lowest-calorie treats at DQ.</p>',
    'non-dairy-dilly-bar': '<h2>Good to know</h2>' + ul([
        'It costs about 50 cents more than a regular Dilly Bar.',
        'It is not available at every store; check the DQ app.',
        'The coating is chocolatey but made without milk.']),
    'cheese-curds': '<h2>Good to know</h2>' + ul([
        'Cheese curds are sold at DQ Grill &amp; Chill restaurants, not Treat-only stores.',
        'Many stores let you swap fries for curds in a basket for a small charge.',
        'They are best eaten right away; they lose their stretch as they cool.']),
    'onion-rings': '<h2>Good to know</h2>' + ul([
        'Onion rings go well with the <a href="/items/backyard-bacon-ranch-stackburger">Backyard Bacon Ranch Stackburger</a>, which already has crispy onions.',
        'Ask for ranch or BBQ sauce for dipping.', 'Eat them hot; they soften in a closed bag.']),
    'side-salad': '<h2>Good to know</h2>' + ul([
        'Dressing adds calories; ask for a lighter dressing if your store offers one.',
        'Croutons contain wheat; ask for none if you avoid gluten.',
        'Side salads are only at DQ Grill &amp; Chill restaurants.']),
    'fruit-smoothies': '<h2>Good to know</h2>' + ul([
        'Smoothies are much lighter than shakes; a small Strawberry Banana has about 260 calories.',
        'Ask whether your store adds yogurt or other ingredients if you avoid dairy.',
        'Flavors vary by store and season.']),
    'moolatte': '<h2>Good to know</h2>' + ul([
        'A small mocha MooLatté has about 500 calories, so it is more dessert than morning coffee.',
        'Ask for no whipped cream to save some calories.',
        'Some stores add seasonal flavors.']),
    'orange-julius': '<h2>Good to know</h2>' + ul([
        'The original orange flavor is the classic; strawberry banana is the most common alternative.',
        'Orange Julius drinks are light, at about 200 calories for a small.',
        'Use the store locator in the DQ app to see which locations sell it.']),
    'soft-drinks': '<h2>Good to know</h2>' + ul([
        'Refills depend on the store; many dine-in DQs offer them.',
        'Milk and juice are usually available for kids meals.',
        'Diet drinks have zero calories; a large regular soda can be over 300.']),
}
for it in ITEMS:
    if it['slug'] in EXTRA:
        it['body'] += EXTRA[it['slug']]

MORE = {
    'caramel-sundae': '<p>All three classic sundaes usually cost the same, so pick the topping you like best. Caramel has the most sugar of the three, so if you want something lighter, the strawberry sundae is the better pick.</p>',
    'dq-sandwich': '<p>The DQ Sandwich is also one of the lightest treats at Dairy Queen, at about 180 calories, which makes it a good pick for kids or a small dessert after a meal.</p>',
    'buster-bar': '<p>At about $2.49, the Buster Bar gives you peanuts, fudge and a chocolate coating for roughly half the price of a Peanut Buster Parfait, which makes it one of the better-value treats at DQ.</p>',
    'soft-drinks': '<p>If you want something colder, a small Misty Slush costs only a little more than a soft drink and comes in several fruit flavors.</p>',
}
for it in ITEMS:
    if it['slug'] in MORE:
        it['body'] += MORE[it['slug']]

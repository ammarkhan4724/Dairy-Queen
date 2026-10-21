// Official Dairy Queen U.S. nutrition figures, taken from dairyqueen.com/en-us/nutrition/food-treats
// (DQ states the data is current as of August 26, 2024). Keyed by item slug; ItemPage.astro renders the table.
// Per-bar novelty figures are DQ's 6-pack totals divided by 6. Do not hand-edit numbers without re-checking DQ.

export const NUTRITION_AS_OF = 'August 26, 2024';
export const NUTRITION_SOURCE = 'https://www.dairyqueen.com/en-us/nutrition/food-treats/';

export interface NutritionRow { label: string; cal: number; fat: number; satFat: number; sodium: number; carbs: number; sugars: number; protein: number }

export const NUTRITION: Record<string, NutritionRow[]> = {
  'oreo-blizzard': [
    {label: "Mini", cal: 330, fat: 12, satFat: 6, sodium: 150, carbs: 48, sugars: 39, protein: 7},
    {label: "Small", cal: 600, fat: 22, satFat: 12, sodium: 280, carbs: 89, sugars: 70, protein: 13},
    {label: "Medium", cal: 820, fat: 30, satFat: 16, sodium: 390, carbs: 121, sugars: 94, protein: 17},
    {label: "Large", cal: 1050, fat: 39, satFat: 20, sodium: 500, carbs: 156, sugars: 121, protein: 22},
  ],
  'cookie-dough-blizzard': [
    {label: "Mini", cal: 410, fat: 16, satFat: 9, sodium: 210, carbs: 60, sugars: 46, protein: 8},
    {label: "Small", cal: 710, fat: 27, satFat: 16, sodium: 380, carbs: 104, sugars: 78, protein: 13},
    {label: "Medium", cal: 1030, fat: 40, satFat: 24, sodium: 550, carbs: 151, sugars: 113, protein: 18},
    {label: "Large", cal: 1370, fat: 54, satFat: 33, sodium: 740, carbs: 201, sugars: 151, protein: 23},
  ],
  'reeses-blizzard': [
    {label: "Mini", cal: 360, fat: 14, satFat: 7, sodium: 170, carbs: 50, sugars: 43, protein: 9},
    {label: "Small", cal: 610, fat: 24, satFat: 13, sodium: 300, carbs: 84, sugars: 72, protein: 16},
    {label: "Medium", cal: 820, fat: 34, satFat: 17, sodium: 410, carbs: 113, sugars: 97, protein: 21},
    {label: "Large", cal: 1080, fat: 45, satFat: 23, sodium: 550, carbs: 148, sugars: 128, protein: 28},
  ],
  'mm-blizzard': [
    {label: "Mini", cal: 370, fat: 12, satFat: 8, sodium: 125, carbs: 58, sugars: 50, protein: 8},
    {label: "Small", cal: 660, fat: 21, satFat: 13, sodium: 220, carbs: 103, sugars: 89, protein: 14},
    {label: "Medium", cal: 880, fat: 29, satFat: 18, sodium: 290, carbs: 135, sugars: 117, protein: 18},
    {label: "Large", cal: 1160, fat: 38, satFat: 24, sodium: 380, carbs: 183, sugars: 159, protein: 23},
  ],
  'butterfinger-blizzard': [
    {label: "Mini", cal: 350, fat: 12, satFat: 7, sodium: 150, carbs: 52, sugars: 41, protein: 9},
    {label: "Small", cal: 590, fat: 21, satFat: 12, sodium: 270, carbs: 87, sugars: 68, protein: 15},
    {label: "Medium", cal: 800, fat: 28, satFat: 17, sodium: 360, carbs: 118, sugars: 91, protein: 20},
    {label: "Large", cal: 1060, fat: 37, satFat: 22, sodium: 480, carbs: 155, sugars: 119, protein: 27},
  ],
  'snickers-blizzard': [
    {label: "Mini", cal: 350, fat: 12, satFat: 7, sodium: 150, carbs: 53, sugars: 45, protein: 8},
    {label: "Small", cal: 610, fat: 20, satFat: 11, sodium: 260, carbs: 92, sugars: 78, protein: 14},
    {label: "Medium", cal: 800, fat: 28, satFat: 15, sodium: 340, carbs: 120, sugars: 102, protein: 19},
    {label: "Large", cal: 1060, fat: 36, satFat: 20, sodium: 450, carbs: 162, sugars: 138, protein: 24},
  ],
  'heath-blizzard': [
    {label: "Mini", cal: 360, fat: 14, satFat: 9, sodium: 170, carbs: 52, sugars: 45, protein: 8},
    {label: "Small", cal: 640, fat: 26, satFat: 16, sodium: 310, carbs: 91, sugars: 79, protein: 13},
    {label: "Medium", cal: 880, fat: 37, satFat: 24, sodium: 430, carbs: 124, sugars: 110, protein: 17},
    {label: "Large", cal: 1190, fat: 49, satFat: 32, sodium: 590, carbs: 168, sugars: 148, protein: 23},
  ],
  'mint-oreo-blizzard': [
    {label: "Mini", cal: 360, fat: 12, satFat: 7, sodium: 160, carbs: 56, sugars: 45, protein: 8},
    {label: "Small", cal: 640, fat: 22, satFat: 12, sodium: 290, carbs: 99, sugars: 80, protein: 13},
    {label: "Medium", cal: 880, fat: 30, satFat: 16, sodium: 400, carbs: 137, sugars: 109, protein: 17},
    {label: "Large", cal: 1140, fat: 39, satFat: 20, sodium: 510, carbs: 177, sugars: 141, protein: 22},
  ],
  'turtle-pecan-blizzard': [
    {label: "Mini", cal: 430, fat: 22, satFat: 14, sodium: 160, carbs: 51, sugars: 42, protein: 8},
    {label: "Small", cal: 680, fat: 34, satFat: 18, sodium: 270, carbs: 84, sugars: 68, protein: 14},
    {label: "Medium", cal: 1020, fat: 52, satFat: 29, sodium: 390, carbs: 123, sugars: 99, protein: 18},
    {label: "Large", cal: 1370, fat: 71, satFat: 41, sodium: 510, carbs: 165, sugars: 132, protein: 24},
  ],
  'choco-brownie-blizzard': [
    {label: "Mini", cal: 420, fat: 18, satFat: 10, sodium: 190, carbs: 58, sugars: 46, protein: 9},
    {label: "Small", cal: 740, fat: 33, satFat: 18, sodium: 340, carbs: 103, sugars: 81, protein: 15},
    {label: "Medium", cal: 980, fat: 43, satFat: 25, sodium: 460, carbs: 137, sugars: 106, protein: 20},
    {label: "Large", cal: 1330, fat: 60, satFat: 33, sodium: 620, carbs: 184, sugars: 142, protein: 26},
  ],
  'royal-new-york-cheesecake-blizzard': [
    {label: "Mini", cal: 450, fat: 18, satFat: 8, sodium: 220, carbs: 65, sugars: 53, protein: 8},
    {label: "Small", cal: 750, fat: 32, satFat: 15, sodium: 380, carbs: 102, sugars: 82, protein: 14},
    {label: "Medium", cal: 1040, fat: 46, satFat: 21, sodium: 530, carbs: 140, sugars: 112, protein: 19},
    {label: "Large", cal: 1320, fat: 60, satFat: 28, sodium: 690, carbs: 171, sugars: 135, protein: 25},
  ],
  'pumpkin-pie-blizzard': [
    {label: "Mini", cal: 360, fat: 14, satFat: 9, sodium: 190, carbs: 52, sugars: 41, protein: 7},
    {label: "Small", cal: 560, fat: 20, satFat: 13, sodium: 330, carbs: 86, sugars: 68, protein: 11},
    {label: "Medium", cal: 720, fat: 25, satFat: 15, sodium: 440, carbs: 110, sugars: 85, protein: 14},
    {label: "Large", cal: 940, fat: 32, satFat: 19, sodium: 570, carbs: 145, sugars: 112, protein: 19},
  ],
  'original-cheeseburger': [
    {label: "Single", cal: 370, fat: 18, satFat: 8, sodium: 1120, carbs: 37, sugars: 8, protein: 17},
    {label: "Double", cal: 570, fat: 34, satFat: 15, sodium: 1530, carbs: 38, sugars: 8, protein: 29},
    {label: "Triple", cal: 760, fat: 50, satFat: 23, sodium: 1940, carbs: 39, sugars: 9, protein: 40},
  ],
  'double-cheeseburger': [
    {label: "Double", cal: 570, fat: 34, satFat: 15, sodium: 1530, carbs: 38, sugars: 8, protein: 29},
  ],
  'backyard-bacon-ranch-stackburger': [
    {label: "Double", cal: 820, fat: 51, satFat: 19, sodium: 1900, carbs: 53, sugars: 15, protein: 38},
    {label: "Triple", cal: 1020, fat: 67, satFat: 27, sodium: 2310, carbs: 54, sugars: 15, protein: 50},
  ],
  'two-cheese-deluxe-stackburger': [
    {label: "Double", cal: 620, fat: 39, satFat: 16, sodium: 1510, carbs: 39, sugars: 9, protein: 29},
    {label: "Triple", cal: 820, fat: 55, satFat: 24, sodium: 1930, carbs: 40, sugars: 9, protein: 41},
  ],
  'flamethrower-stackburger': [
    {label: "Double", cal: 720, fat: 49, satFat: 19, sodium: 1430, carbs: 37, sugars: 7, protein: 34},
    {label: "Triple", cal: 910, fat: 65, satFat: 27, sodium: 1820, carbs: 38, sugars: 7, protein: 46},
  ],
  'chicken-strip-basket-4pc': [
    {label: "4-piece basket", cal: 1020, fat: 48, satFat: 8, sodium: 2120, carbs: 111, sugars: 3, protein: 35},
  ],
  'chicken-strip-basket-6pc': [
    {label: "6-piece basket", cal: 1300, fat: 61, satFat: 11, sodium: 2750, carbs: 139, sugars: 5, protein: 48},
  ],
  'honey-bbq-chicken-strip-basket': [
    {label: "4-piece basket", cal: 1140, fat: 48, satFat: 8, sodium: 2640, carbs: 142, sugars: 32, protein: 35},
    {label: "6-piece basket", cal: 1480, fat: 61, satFat: 11, sodium: 3570, carbs: 186, sugars: 48, protein: 49},
  ],
  '2pc-chicken-strips': [
    {label: "2-piece strips", cal: 280, fat: 13, satFat: 2.5, sodium: 640, carbs: 28, sugars: 1, protein: 13},
  ],
  'hot-dog': [
    {label: "Hot Dog", cal: 330, fat: 19, satFat: 8, sodium: 820, carbs: 25, sugars: 3, protein: 12},
  ],
  'chili-cheese-dog': [
    {label: "Chili Cheese Dog", cal: 420, fat: 26, satFat: 11, sodium: 1070, carbs: 28, sugars: 4, protein: 18},
    {label: "Two Chili Cheese Dogs", cal: 850, fat: 53, satFat: 22, sodium: 2140, carbs: 56, sugars: 7, protein: 36},
  ],
  'cheese-curds': [
    {label: "Regular", cal: 500, fat: 34, satFat: 19, sodium: 990, carbs: 26, sugars: 1, protein: 24},
    {label: "Large", cal: 1000, fat: 67, satFat: 38, sodium: 1960, carbs: 52, sugars: 3, protein: 49},
  ],
  'regular-fries': [
    {label: "Regular", cal: 280, fat: 13, satFat: 2, sodium: 590, carbs: 36, sugars: 0, protein: 5},
    {label: "Large", cal: 450, fat: 21, satFat: 3, sodium: 950, carbs: 59, sugars: 0, protein: 8},
    {label: "Kids'", cal: 170, fat: 8, satFat: 1, sodium: 370, carbs: 23, sugars: 0, protein: 3},
  ],
  'onion-rings': [
    {label: "Regular", cal: 290, fat: 13, satFat: 2, sodium: 680, carbs: 39, sugars: 3, protein: 5},
    {label: "Large", cal: 450, fat: 20, satFat: 3, sodium: 1050, carbs: 60, sugars: 4, protein: 7},
  ],
  'pretzel-sticks-queso': [
    {label: "With zesty queso", cal: 340, fat: 10, satFat: 3.5, sodium: 2130, carbs: 53, sugars: 7, protein: 10},
  ],
  'side-salad': [
    {label: "Side salad", cal: 20, fat: 0, satFat: 0, sodium: 10, carbs: 4, sugars: 3, protein: 1},
  ],
  'chocolate-shake': [
    {label: "Small", cal: 530, fat: 19, satFat: 14, sodium: 220, carbs: 77, sugars: 67, protein: 13},
    {label: "Medium", cal: 710, fat: 23, satFat: 16, sodium: 290, carbs: 110, sugars: 96, protein: 16},
    {label: "Large", cal: 920, fat: 28, satFat: 19, sodium: 390, carbs: 147, sugars: 128, protein: 21},
  ],
  'moolatte': [
    {label: "Vanilla Small", cal: 450, fat: 14, satFat: 11, sodium: 150, carbs: 74, sugars: 67, protein: 7},
    {label: "Vanilla Medium", cal: 560, fat: 17, satFat: 12, sodium: 190, carbs: 93, sugars: 84, protein: 9},
    {label: "Vanilla Large", cal: 700, fat: 19, satFat: 14, sodium: 240, carbs: 121, sugars: 109, protein: 12},
    {label: "Caramel Small", cal: 490, fat: 15, satFat: 11, sodium: 190, carbs: 81, sugars: 69, protein: 8},
    {label: "Caramel Medium", cal: 620, fat: 18, satFat: 13, sodium: 240, carbs: 103, sugars: 87, protein: 10},
    {label: "Caramel Large", cal: 780, fat: 21, satFat: 15, sodium: 320, carbs: 135, sugars: 113, protein: 13},
    {label: "Mocha Small", cal: 500, fat: 18, satFat: 12, sodium: 180, carbs: 76, sugars: 67, protein: 9},
    {label: "Mocha Medium", cal: 620, fat: 23, satFat: 14, sodium: 240, carbs: 94, sugars: 82, protein: 11},
    {label: "Mocha Large", cal: 780, fat: 29, satFat: 16, sodium: 310, carbs: 121, sugars: 106, protein: 14},
  ],
  'misty-slush': [
    {label: "Small", cal: 200, fat: 0, satFat: 0, sodium: 35, carbs: 50, sugars: 50, protein: 0},
    {label: "Medium", cal: 260, fat: 0, satFat: 0, sodium: 40, carbs: 65, sugars: 64, protein: 0},
    {label: "Large", cal: 340, fat: 0, satFat: 0, sodium: 55, carbs: 86, sugars: 85, protein: 0},
  ],
  'fruit-smoothies': [
    {label: "Strawberry Banana Small", cal: 260, fat: 0, satFat: 0, sodium: 100, carbs: 62, sugars: 56, protein: 4},
    {label: "Strawberry Banana Medium", cal: 350, fat: 0, satFat: 0, sodium: 140, carbs: 83, sugars: 75, protein: 6},
    {label: "Strawberry Banana Large", cal: 440, fat: 0, satFat: 0, sodium: 190, carbs: 103, sugars: 93, protein: 8},
    {label: "Mango Pineapple Small", cal: 250, fat: 0, satFat: 0, sodium: 90, carbs: 59, sugars: 56, protein: 4},
    {label: "Mango Pineapple Medium", cal: 330, fat: 0, satFat: 0, sodium: 135, carbs: 77, sugars: 74, protein: 6},
    {label: "Mango Pineapple Large", cal: 420, fat: 0, satFat: 0, sodium: 180, carbs: 96, sugars: 92, protein: 8},
    {label: "Tripleberry Small", cal: 280, fat: 0, satFat: 0, sodium: 90, carbs: 66, sugars: 65, protein: 4},
    {label: "Tripleberry Medium", cal: 370, fat: 0, satFat: 0, sodium: 135, carbs: 87, sugars: 84, protein: 6},
    {label: "Tripleberry Large", cal: 460, fat: 0, satFat: 0, sodium: 180, carbs: 107, sugars: 104, protein: 8},
  ],
  'orange-julius': [
    {label: "Small", cal: 200, fat: 0, satFat: 0, sodium: 35, carbs: 50, sugars: 48, protein: 1},
    {label: "Medium", cal: 260, fat: 0, satFat: 0, sodium: 45, carbs: 65, sugars: 62, protein: 1},
    {label: "Large", cal: 400, fat: 0, satFat: 0, sodium: 70, carbs: 99, sugars: 95, protein: 2},
  ],
  'hot-fudge-sundae': [
    {label: "Small", cal: 300, fat: 10, satFat: 8, sodium: 125, carbs: 46, sugars: 36, protein: 6},
    {label: "Medium", cal: 430, fat: 15, satFat: 11, sodium: 190, carbs: 66, sugars: 52, protein: 9},
    {label: "Large", cal: 610, fat: 21, satFat: 16, sodium: 260, carbs: 93, sugars: 73, protein: 13},
  ],
  'caramel-sundae': [
    {label: "Small", cal: 300, fat: 8, satFat: 5, sodium: 130, carbs: 50, sugars: 40, protein: 6},
    {label: "Medium", cal: 430, fat: 11, satFat: 7, sodium: 190, carbs: 73, sugars: 58, protein: 9},
    {label: "Large", cal: 600, fat: 16, satFat: 10, sodium: 260, carbs: 102, sugars: 81, protein: 12},
  ],
  'strawberry-sundae': [
    {label: "Small", cal: 240, fat: 7, satFat: 4.5, sodium: 95, carbs: 39, sugars: 34, protein: 6},
    {label: "Medium", cal: 340, fat: 10, satFat: 6, sodium: 135, carbs: 56, sugars: 49, protein: 8},
    {label: "Large", cal: 490, fat: 14, satFat: 9, sodium: 190, carbs: 80, sugars: 69, protein: 12},
  ],
  'vanilla-soft-serve-cone': [
    {label: "Kids'", cal: 160, fat: 4.5, satFat: 3, sodium: 65, carbs: 25, sugars: 18, protein: 4},
    {label: "Small", cal: 220, fat: 7, satFat: 4.5, sodium: 90, carbs: 34, sugars: 26, protein: 6},
    {label: "Medium", cal: 320, fat: 10, satFat: 6, sodium: 130, carbs: 50, sugars: 36, protein: 8},
    {label: "Large", cal: 450, fat: 14, satFat: 9, sodium: 180, carbs: 71, sugars: 52, protein: 12},
  ],
  'chocolate-dipped-cone': [
    {label: "Kids'", cal: 200, fat: 9, satFat: 7, sodium: 65, carbs: 28, sugars: 20, protein: 4},
    {label: "Small", cal: 320, fat: 15, satFat: 12, sodium: 95, carbs: 40, sugars: 30, protein: 6},
    {label: "Medium", cal: 460, fat: 22, satFat: 17, sodium: 140, carbs: 58, sugars: 43, protein: 9},
    {label: "Large", cal: 640, fat: 30, satFat: 23, sodium: 200, carbs: 81, sugars: 60, protein: 13},
  ],
  'banana-split': [
    {label: "Banana Split", cal: 520, fat: 14, satFat: 9, sodium: 150, carbs: 94, sugars: 74, protein: 9},
  ],
  'peanut-buster-parfait': [
    {label: "Peanut Buster Parfait", cal: 710, fat: 31, satFat: 18, sodium: 340, carbs: 95, sugars: 68, protein: 17},
  ],
  'brownie-oreo-cupfection': [
    {label: "Cupfection", cal: 720, fat: 23, satFat: 9, sodium: 330, carbs: 122, sugars: 96, protein: 10},
  ],
  'buster-bar': [
    {label: "Per bar (6-pack ÷ 6)", cal: 475, fat: 30, satFat: 18, sodium: 182, carbs: 46, sugars: 37, protein: 10},
  ],
  'dilly-bar': [
    {label: "Per bar (6-pack ÷ 6)", cal: 223, fat: 12, satFat: 10, sodium: 57, carbs: 26, sugars: 21, protein: 3},
  ],
  'dq-sandwich': [
    {label: "Per sandwich (6-pack ÷ 6)", cal: 183, fat: 5, satFat: 3, sodium: 130, carbs: 30, sugars: 17, protein: 4},
  ],
  'dq-cake-round-8inch': [
    {label: "Whole cake, store made", cal: 3760, fat: 153, satFat: 118, sodium: 1610, carbs: 549, sugars: 415, protein: 70},
  ],
  'dq-cake-round-10inch': [
    {label: "Whole cake, store made", cal: 5570, fat: 223, satFat: 169, sodium: 2410, carbs: 812, sugars: 618, protein: 106},
  ],
  'dq-sheet-cake': [
    {label: "Whole cake, store made", cal: 8480, fat: 339, satFat: 256, sodium: 3820, carbs: 1206, sugars: 930, protein: 154},
  ],
  'kids-cheeseburger-meal': [
    {label: "Kids' fries", cal: 170, fat: 8, satFat: 1, sodium: 370, carbs: 23, sugars: 0, protein: 3},
    {label: "Applesauce", cal: 45, fat: 0, satFat: 0, sodium: 0, carbs: 11, sugars: 7, protein: 0},
    {label: "Milk", cal: 110, fat: 2.5, satFat: 1.5, sodium: 130, carbs: 12, sugars: 12, protein: 8},
  ],
  'kids-hot-dog-meal': [
    {label: "Hot dog", cal: 330, fat: 19, satFat: 8, sodium: 820, carbs: 25, sugars: 3, protein: 12},
    {label: "Kids' fries", cal: 170, fat: 8, satFat: 1, sodium: 370, carbs: 23, sugars: 0, protein: 3},
    {label: "Applesauce", cal: 45, fat: 0, satFat: 0, sodium: 0, carbs: 11, sugars: 7, protein: 0},
    {label: "Milk", cal: 110, fat: 2.5, satFat: 1.5, sodium: 130, carbs: 12, sugars: 12, protein: 8},
  ],
  'kids-chicken-strips-meal': [
    {label: "2-piece strips", cal: 280, fat: 13, satFat: 2.5, sodium: 640, carbs: 28, sugars: 1, protein: 13},
    {label: "Kids' fries", cal: 170, fat: 8, satFat: 1, sodium: 370, carbs: 23, sugars: 0, protein: 3},
    {label: "Applesauce", cal: 45, fat: 0, satFat: 0, sodium: 0, carbs: 11, sugars: 7, protein: 0},
    {label: "Milk", cal: 110, fat: 2.5, satFat: 1.5, sodium: 130, carbs: 12, sugars: 12, protein: 8},
  ],
};

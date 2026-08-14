export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: Section[];
  faq?: { q: string; a: string }[];
  relatedProducts?: string[]; // product slugs
};

export type Section = {
  heading?: string;
  content: string;
};

export const allPosts: BlogPost[] = [
  {
    slug: "what-is-extra-virgin-olive-oil-spain",
    title: "What Is Extra Virgin Olive Oil? Spain's Gold Standard Explained",
    subtitle: "Everything you need to know about EVOO — how it's made, what makes it extra virgin, and why Spanish olive oil is considered among the finest in the world.",
    date: "2026-07-10",
    author: "Jorge Soto",
    category: "Olive Oil",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&q=80",
    excerpt: "Extra virgin olive oil is the highest grade of olive oil, cold-pressed from fresh olives with under 0.8% acidity. Spain produces more olive oil than any country on earth — here's what makes it exceptional.",
    relatedProducts: ["garlic-olive-oil", "truffle-olive-oil", "lemon-olive-oil", "rosemary-olive-oil"],
    faq: [
      { q: "What makes olive oil 'extra virgin'?", a: "Extra virgin olive oil (EVOO) must be cold-pressed from fresh olives, have a free acidity of no more than 0.8%, and pass both chemical and sensory panel tests with no defects. It is the highest quality classification." },
      { q: "Is Spanish olive oil better than Italian?", a: "Spain produces over 40% of the world's olive oil supply and is home to hundreds of indigenous olive varieties. Spanish EVOOs — particularly from Andalusia and the Mediterranean coast — consistently win international awards for their quality, freshness, and complexity." },
      { q: "How should I store extra virgin olive oil?", a: "Store EVOO away from heat, light, and air. A cool, dark pantry is ideal. Avoid storing near the stove or in transparent bottles exposed to sunlight. Properly stored, a good EVOO should last 18–24 months from harvest." },
      { q: "What is the smoke point of extra virgin olive oil?", a: "High-quality extra virgin olive oil has a smoke point of approximately 375–405°F (190–207°C), which is suitable for most cooking methods including sautéing, roasting, and pan-frying." },
      { q: "Can you cook with infused olive oils?", a: "Yes. Infused olive oils like Garlic Olive Oil or Rosemary Olive Oil are excellent for cooking, though they are particularly prized as finishing oils — drizzled over finished dishes to deliver maximum aroma and flavor." },
    ],
    body: [
      {
        heading: "The Definition: What 'Extra Virgin' Actually Means",
        content: "Extra virgin olive oil is not a marketing term — it is a legally defined classification governed by the International Olive Council (IOC) and the European Union. To qualify as extra virgin, an olive oil must meet three strict criteria: it must be cold-pressed from fresh olives using only mechanical means (no chemicals or heat), its free acidity must be 0.8% or lower (measured as oleic acid), and it must pass a sensory panel evaluation by certified tasters with zero defects detected.\n\nOnly the first cold-pressing of the olive produces extra virgin quality oil. Subsequent pressings, which require heat or solvents, yield lower-grade oils classified as 'virgin', 'refined', or simply 'olive oil'. What you're purchasing with EVOO is essentially fresh olive juice — and like all fresh produce, freshness and quality of the source fruit matter enormously.",
      },
      {
        heading: "Why Spain Leads the World in Olive Oil Production",
        content: "Spain is, by a significant margin, the world's largest producer of olive oil — accounting for roughly 40–45% of global production in most years. The country's olive groves span over 2.5 million hectares, concentrated primarily in Andalusia but extending along the Mediterranean coast through regions like Valencia and Catalonia.\n\nThe olive varieties cultivated in Spain are extraordinarily diverse. The Picual variety — dominant in Jaén province — produces oils with high polyphenol content and exceptional stability. Arbequina, grown primarily in Catalonia and Aragon, yields a lighter, fruitier oil prized for its smooth finish. Hojiblanca, Cornicabra, and Empeltre each contribute their own distinct profiles, allowing Spanish producers to craft oils of remarkable range and complexity.\n\nThe Mediterranean coast in particular — where Soto & Segovia's partner producer Príncipe Azahar operates in Altea, Alicante — benefits from an ideal combination of volcanic soils, sea breezes, and a warm climate tempered by coastal humidity. This terroir produces olive oils of exceptional aromatic intensity.",
      },
      {
        heading: "Cold-Pressing: Why Temperature Is Everything",
        content: "The term 'cold-pressed' refers to the temperature during extraction — the olives are processed at temperatures below 27°C (80.6°F). This is critical because heat, while it increases oil yield, degrades the very compounds that make extra virgin olive oil valuable: the polyphenols, tocopherols (vitamin E), and volatile aromatic compounds.\n\nAt Bodegas Sendra González in Altea, olives are harvested by hand and processed within hours of picking. This speed-to-press is crucial: once an olive is cut or bruised, fermentation begins immediately, raising the oil's acidity and degrading its quality. The finest Spanish producers treat olive oil production with the same urgency and care as fine winemaking.",
      },
      {
        heading: "Infused Olive Oils: Amplifying Spain's Flavors",
        content: "Príncipe Azahar's collection of infused extra virgin olive oils represents a distinct category from plain EVOO. Rather than adding flavoring agents after extraction, these oils are produced by co-milling fresh olives with the infusing ingredient — garlic, rosemary, lemon, chili, or truffle — so the flavor compounds become integrated into the oil itself during pressing.\n\nThis 'agrumato' method, as it's known in Italian, produces a far more intense, natural, and harmonious flavor profile than simple maceration. The Garlic Olive Oil smells and tastes of real, fresh Spanish garlic — not garlic powder or garlic extract. The Lemon Olive Oil carries the brightness of actual Mediterranean citrus. These are not flavored oils in the commercial sense; they are single-press artisan oils of the highest quality.",
      },
      {
        heading: "How to Identify Quality Extra Virgin Olive Oil",
        content: "A high-quality extra virgin olive oil should smell fresh, grassy, and fruity — with notes that might include green apple, artichoke, fresh herbs, almonds, or ripe tomato depending on the variety. It should have a mild to pronounced peppery finish at the back of the throat, caused by oleocanthal — a polyphenol compound with anti-inflammatory properties similar to ibuprofen.\n\nWhat a good EVOO should never smell or taste like: rancid (like old walnuts or crayons), musty, vinegary, or flat. These are defects that disqualify an oil from the extra virgin classification — though they are disturbingly common in supermarket oils that are either old, improperly stored, or fraudulently labeled.\n\nThe easiest way to ensure you're getting authentic, high-quality extra virgin olive oil is to buy from a trusted, transparent source with a known producer and a harvest date on the label.",
      },
      {
        heading: "Extra Virgin Olive Oil and Health",
        content: "The health profile of extra virgin olive oil is one of the most extensively studied in nutritional science. EVOO is the primary fat source of the Mediterranean Diet — which has been associated in large-scale clinical trials with reduced rates of cardiovascular disease, stroke, type 2 diabetes, and certain cancers.\n\nThe key active compounds are monounsaturated fatty acids (primarily oleic acid), which improve cholesterol profiles, and polyphenols — plant antioxidants that reduce oxidative stress and inflammation. The oleocanthal mentioned above functions as a natural anti-inflammatory. These compounds are found in their highest concentrations in fresh, high-quality extra virgin olive oils — another reason the grade of the oil matters so much.\n\nAt Soto & Segovia Imports, we believe the finest food is food that is both extraordinary to eat and genuinely good for you. Príncipe Azahar's olive oils are both.",
      },
    ],
  },

  {
    slug: "spanish-artisan-salts-guide",
    title: "The World of Spanish Artisan Salts: From Sea to Table",
    subtitle: "Finishing salts are the chef's final brushstroke. Spain's Mediterranean coast produces some of the world's finest — here's how to understand and use them.",
    date: "2026-07-24",
    author: "Maite Aranaz",
    category: "Salts",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=1200&q=80",
    excerpt: "Sea salt harvested from Spain's Mediterranean coast carries a distinct mineral character shaped by sun, wind, and ancient salt-making traditions. Princesa Azahar's artisan salts — from smoky Sal Pimentón to floral Sal Rosas — are among the most distinctive finishing salts in the world.",
    relatedProducts: ["white-salt", "paprika-salt", "mint-salt", "black-salt", "rose-salt"],
    faq: [
      { q: "What is a finishing salt?", a: "A finishing salt is a high-quality, large-flake salt applied to food just before or immediately after serving — not used in cooking. Its purpose is to add flavor, texture, and visual appeal at the moment of eating. The flake structure dissolves on the palate in a burst of clean salinity." },
      { q: "What makes Spanish sea salt different from table salt?", a: "Spanish Mediterranean sea salt is hand-harvested from natural salt flats and retains trace minerals like magnesium and potassium. Table salt is heavily refined, stripped of minerals, and often contains anti-caking agents. The mineral complexity of artisan sea salt gives it a cleaner, rounder flavor." },
      { q: "What is pimentón and why is it Spain's most important spice?", a: "Pimentón is Spanish smoked paprika — made from peppers that are slowly dried over oak fires before being stone-ground. It is the defining flavor of countless Spanish dishes, from chorizo to patatas bravas to pulpo a la gallega. Sal Pimentón combines this iconic spice with artisan sea salt for a finishing salt that is unmistakably Iberian." },
      { q: "How do I use flavored salts?", a: "Flavored finishing salts are applied just before serving — a light pinch over the finished dish. Use Garlic Salt on grilled meats, Lemon Salt on seafood, Mint Salt on fresh fruit or chocolate, and Paprika Salt anywhere you want a Spanish smoky character. Less is more; the goal is enhancement, not overpowering." },
    ],
    body: [
      {
        heading: "Salt as Ingredient, Salt as Art",
        content: "For most of culinary history, salt had one job: preservation. But the modern gourmet movement has elevated finishing salt to something far more nuanced — an ingredient that adds not just salinity but texture, aroma, color, and a final flourish of flavor complexity. The difference between a dish finished with industrial table salt and one finished with a high-quality artisan flake salt is immediately perceptible to any attentive palate.\n\nPrincesa Azahar's collection of sixteen flavored artisan salts — produced in Altea, Spain — takes this philosophy further still. Each salt begins with hand-harvested natural flake sea salt from the Spanish Mediterranean coast, which is then blended with a single, high-quality flavoring ingredient: smoked paprika, fresh garlic, wild oregano, dried lemon, fresh rosemary, pomegranate, and more. The result is a collection of finishing salts that are genuinely unlike anything available in a conventional grocery store.",
      },
      {
        heading: "How Spanish Sea Salt Is Made",
        content: "The salt flats of the Spanish Mediterranean coast are among the oldest continuously operated in Europe. Seawater is channeled into shallow evaporation ponds and allowed to concentrate slowly under the sun and Mediterranean wind. As water evaporates, salt crystals form on the surface — harvested by hand with traditional wooden tools.\n\nThis slow, natural process produces salt crystals with an irregular, layered flake structure — the hallmark of premium finishing salt. These flakes sit on the surface of food rather than dissolving immediately, creating a brief textural contrast and a delayed burst of clean salinity as they melt on the tongue. It is a completely different eating experience from fine-ground table salt, which simply disappears.",
      },
      {
        heading: "The Role of Pimentón: Spain's Most Essential Spice",
        content: "No ingredient is more distinctly and recognizably Spanish than pimentón — smoked paprika. Made from peppers (primarily in La Vera, Extremadura, and Murcia), pimentón is produced by slow-drying the peppers over smouldering oak fires for up to two weeks before stone-grinding. The result is a vivid red powder with an intoxicating smoky sweetness that underpins chorizo, morcilla, patatas bravas, pulpo a la gallega, and the vast majority of Spanish stews and braises.\n\nSal Pimentón — Paprika Salt — combines this essential flavor with artisan sea salt from Altea. It is the ideal finishing salt for grilled meats, fried eggs, roasted potatoes, and any dish where you want to invoke the unmistakable flavor of Spain. A pinch of Sal Pimentón on a fried egg transforms breakfast; on a piece of grilled octopus, it completes the dish.",
      },
      {
        heading: "The Unexpected Salts: Mint, Vanilla, and Rose",
        content: "The most surprising entries in the Princesa Azahar collection challenge conventional assumptions about what a finishing salt should be. Sal Menta (Mint Salt) combines the cooling freshness of real mint with clean Mediterranean flake salt — producing something extraordinary on fresh mango, dark chocolate, or a glass of iced tea. It is the star of Sasha's Salted Mangos, one of our most beloved recipes.\n\nSal Rosas (Rose Salt) carries delicate floral notes in a beautiful pink flake — exceptional on butter, white fish, or champagne-based sauces. And while a vanilla vinegar gets its own product slot, a vanilla-inflected salt would be equally at home on fine pastry or crème brûlée. These salts ask the cook to think differently about salt — not as a corrective seasoning but as a flavor element in its own right.\n\nFor corporate gifting in particular, the visual drama of these salts — the jet black of Sal Negra, the rose pink of Sal Rosas, the vivid red of Sal Pimentón — makes them exceptional presentation pieces, whether in a gift set or as a standalone luxury item.",
      },
      {
        heading: "Pairing Flavored Salts with Food",
        content: "The key to using flavored finishing salts well is restraint and timing. Apply them just before serving — never during cooking, where the aromatic compounds that make them special will be lost to heat. A pinch is usually sufficient; these salts are intensely flavored and are meant to enhance, not overwhelm.\n\nSome reliable pairings: Sal Ajo (Garlic Salt) on grilled steak or roasted vegetables. Sal Limón (Lemon Salt) on grilled shrimp, oysters, or avocado toast. Sal Curry on roasted cauliflower or grilled fish. Sal Tomate on fresh burrata or scrambled eggs. Sal Negra (Black Salt) on white fish, sushi, or as a dramatic contrast on a white plate of cheese. And Sal Menta (Mint Salt) on fresh mango, watermelon, or chocolate.\n\nOnce you begin cooking with high-quality flavored finishing salts, the grocery store table salt in your pantry starts to feel very inadequate.",
      },
    ],
  },

  {
    slug: "spanish-orange-wine-guide",
    title: "Spanish Orange Wine: An Ancient Tradition Reimagined",
    subtitle: "Orange wine is having a global moment — but Spain's Mediterranean coast has been making it for centuries. Here's everything you need to know about Vino de Naranja.",
    date: "2026-08-01",
    author: "Roberto Segovia",
    category: "Orange Wine",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    excerpt: "Spain's Vino de Naranja — orange wine made by infusing white wine with bitter Seville orange peel — has been produced along the Andalusian coast for over 200 years. Bodegas Sendra González in Altea continues this tradition with a distinctly Mediterranean expression.",
    relatedProducts: ["orange-wine", "orange-wine-mini"],
    faq: [
      { q: "What is orange wine?", a: "There are two distinct styles called 'orange wine'. The modern style refers to white wine made with extended skin contact, giving it an amber or orange color. The traditional Spanish Vino de Naranja is white wine infused with the peel of bitter Seville oranges, creating a distinctly citrusy, aromatic fortified wine. Bodegas Sendra González produces the traditional Spanish style." },
      { q: "How should Spanish orange wine be served?", a: "Serve Vino de Naranja well chilled — around 8–10°C (46–50°F). It is exceptional as an aperitif before a meal, as an accompaniment to tapas and seafood, or served alongside cheese and charcuterie boards. The miniature 100ml format makes it an elegant portion for a single glass or tasting experience." },
      { q: "Is orange wine sweet?", a: "Bodegas Sendra González's Vino de Naranja is semi-sweet — it has a natural citrus sweetness from the orange peel but is balanced by the bitter pith and the acidity of the base wine, creating a complex, aromatic drink that is not cloying. It is 12.5% alcohol by volume." },
      { q: "What food pairs with Spanish orange wine?", a: "Spanish Vino de Naranja pairs beautifully with seafood (particularly grilled fish and shellfish), Iberian charcuterie, aged cheeses, and Spanish tapas. Its citrus character also makes it a natural companion for mild spice and dishes with lemon or citrus elements." },
    ],
    body: [
      {
        heading: "Two Wines Named Orange — A Necessary Distinction",
        content: "The term 'orange wine' has become fashionable in the natural wine world over the last decade, referring to white wines made with extended skin contact that gives the wine an amber or orange hue. But this modern trend obscures a much older and completely distinct tradition: Spain's Vino de Naranja.\n\nSpanish orange wine is not a skin-contact white wine. It is a traditional Andalusian wine made by infusing a base white wine with the peel of bitter Seville oranges (Citrus aurantium) — the same oranges that line the streets of Seville and are used to make British-style marmalade. The result is a uniquely aromatic, semi-sweet wine with an intensely citrusy character that has been produced along Spain's Mediterranean and Atlantic coasts for over two centuries.",
      },
      {
        heading: "The History of Vino de Naranja in Spain",
        content: "The Vino de Naranja tradition is most strongly associated with Huelva in Andalusia, where it has been produced since the early 19th century — originally as a way to add complexity to local white wines using the abundant bitter orange trees that grew throughout the region. The bitter Seville orange, virtually inedible fresh but extraordinarily aromatic, was a natural complement to white wine, lending both its essential oils and its characteristic citrus bitterness.\n\nOver time, Vino de Naranja spread along Spain's Mediterranean coast, with each region adapting the style to local grapes and techniques. Bodegas Sendra González in Altea, on the Valencia coast, represents a distinctly Mediterranean interpretation of this tradition — lighter, brighter, and more aromatic than the heavier Andalusian styles, reflecting the gentle coastal terroir of the region.",
      },
      {
        heading: "Bodegas Sendra González: A Family Tradition in Altea",
        content: "Bodegas Sendra González has produced wine in Altea for generations, drawing on the family's deep roots in the agricultural heritage of the Valencia coast. The bodega's Príncipe Azahar Vino de Naranja is made from locally grown white grapes, fermented traditionally, and then infused with carefully selected bitter orange peel.\n\nThe resulting wine — presented in a distinctive 500ml bottle — is golden in color, with an intensely citrusy nose of bitter orange, white flowers, and honey. On the palate, it is semi-sweet with a clean bitter finish from the orange pith, and a lingering warmth from its 12.5% alcohol. It is best served well chilled as an aperitif.\n\nFor those wanting a taste before committing to a full bottle, the 100ml miniature — Vino Naranja 100ml — offers the identical wine in an elegantly portable format, ideal for gift collections, tasting flights, and hospitality presentations.",
      },
      {
        heading: "How to Drink Vino de Naranja: Serving and Pairing",
        content: "Serve Príncipe Azahar's Vino de Naranja at 8–10°C — well chilled but not ice-cold. It is exceptional before a meal as an aperitif, paired with salted almonds, jamón ibérico, and olives. At the table, it pairs beautifully with grilled fish and shellfish, light seafood tapas, and mild aged cheeses.\n\nIts citrus-forward character also makes it a natural companion for dishes that incorporate lemon or orange — a piece of Lemon Salt-finished fish, for example, or a seafood dish finished with Soto & Segovia Lemon Olive Oil. The wine's natural sweetness and bitter finish create a sophisticated balance that works equally well as a dessert wine with fruit-based pastries.\n\nFor gifting, the combination of a 500ml bottle of Vino de Naranja with a selection of Princesa Azahar salts and Príncipe Azahar olive oils creates an exceptional Spanish pantry gift — a complete sensory story of Altea's culinary traditions.",
      },
    ],
  },

  {
    slug: "how-to-build-spanish-charcuterie-board",
    title: "How to Build the Perfect Spanish Charcuterie Board",
    subtitle: "A Spanish tabla de embutidos is different from a generic charcuterie board — here's how to build one that tells a genuine story of Spain's culinary culture.",
    date: "2026-08-07",
    author: "Jorge Soto",
    category: "Entertaining",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544025162-d76538888a32?w=1200&q=80",
    excerpt: "The perfect Spanish charcuterie board — tabla de embutidos — balances Iberian cured meats, aged cheeses, artisan olives, and finishing salts. Soto & Segovia products are the secret weapon that elevates every element.",
    relatedProducts: ["garlic-olive-oil", "white-salt", "paprika-salt", "fig-vinegar", "pomegranate-vinegar"],
    faq: [
      { q: "What cheeses are traditionally Spanish?", a: "Spain produces a rich variety of regional cheeses. Manchego (aged sheep's milk from La Mancha) is the most famous internationally. Other notable Spanish cheeses include Mahón (Menorca), Idiazábal (Basque Country), Tetilla (Galicia), Cabrales (blue cheese from Asturias), and Torta del Casar (Extremadura). A Spanish board should include at least one aged sheep's milk cheese." },
      { q: "What is the difference between jamón ibérico and jamón serrano?", a: "Jamón serrano is cured mountain ham from white pigs, typically aged 12–18 months. Jamón ibérico comes from the Black Iberian pig breed — a distinct, ancient breed native to the Iberian Peninsula — and is aged much longer (24–48 months). The highest grade, jamón ibérico de bellota, comes from pigs fed exclusively on acorns during the montanera season, producing extraordinary fat marbling and flavor." },
      { q: "How do finishing salts enhance a charcuterie board?", a: "Artisan finishing salts add a professional touch that instantly elevates a charcuterie presentation. Sal Negra (Black Salt) on white cheeses creates visual drama. Sal Pimentón on jamón or chorizo amplifies the pork's natural sweetness. Sal Menta on fresh fruit provides a surprising freshness. A small ramekin of Sal Blanca (White Salt) for dipping olive oil is a classic Spanish touch." },
      { q: "What wine pairs best with a Spanish charcuterie board?", a: "A Spanish board calls for Spanish wine. Fino or Manzanilla Sherry — bone-dry and nutty — is the classic pairing for jamón and hard cheeses. Alternatively, a chilled glass of Vino de Naranja works beautifully with lighter boards featuring seafood, citrus, and mild cheeses. For a fuller red pairing with chorizo and aged Manchego, choose a Tempranillo from Rioja or Ribera del Duero." },
    ],
    body: [
      {
        heading: "The Spanish Tabla vs. The Generic Charcuterie Board",
        content: "The word 'charcuterie board' has become so ubiquitous that it now encompasses everything from artisan cured meats to random items from a grocery store deli case arranged on a slate tile. A genuine Spanish tabla de embutidos — a board of Iberian cured meats and accompaniments — is something more specific, more intentional, and considerably more interesting.\n\nThe key differences: a Spanish board centers on Iberian pork products rather than French pâtés or Italian salumi. The cheeses are regional Spanish varieties rather than Brie or Gruyère. The accompaniments lean toward Spanish pantry staples — Marcona almonds, quality olives, preserved peppers, artisan olive oil for dipping, and finishing salts that frame each element. When executed thoughtfully, a Spanish tabla tells a genuine story of a culinary culture, not just an Instagram-friendly pile of cured meats.",
      },
      {
        heading: "The Meats: Building Around Jamón",
        content: "Every serious Spanish board anchors itself in jamón — specifically, the finest jamón your budget allows. At the apex is Jamón Ibérico de Bellota: air-cured ham from acorn-fed Black Iberian pigs, aged 36–48 months, with extraordinary fat marbling and a depth of flavor that rivals Parma prosciutto in prestige and surpasses it in complexity.\n\nAbove jamón, build outward with chorizo (semi-cured pork seasoned with pimentón — always buy Spanish chorizo, never the Portuguese or Mexican varieties which are fundamentally different products), lomo ibérico (loin of Iberian pork, leaner and more delicate than jamón), and salchichón (a white salami-style sausage seasoned with black pepper). Arrange these in loose folds rather than tight rolls — the fat should be visible, the meat should look abundant rather than geometric.",
      },
      {
        heading: "The Cheeses: Spanish Varieties Worth Knowing",
        content: "Manchego is the non-negotiable. This aged sheep's milk cheese from La Mancha — legally protected by DOP status — has a firm, slightly crumbly texture and a rich, nutty, slightly salty flavor that pairs beautifully with jamón, membrillo (quince paste), and nearly every wine made in Spain. Curado (aged 3–6 months) is approachable; viejo (aged 12+ months) is more intense and complex.\n\nFor contrast, add a softer cheese: Tetilla from Galicia (mild, buttery, shaped like a teardrop) or a semi-firm Mahón from Menorca (sweet and milky when young, tangy and firm when aged). If your guests are adventurous, include a wedge of Cabrales — Spain's great blue cheese, made in Asturias and aged in mountain caves. Its intensity is a counterpoint to the richness of the cured meats.\n\nArrange cheeses at different angles, with a small knife for each. Label them — guests want to know what they're eating.",
      },
      {
        heading: "The Role of Soto & Segovia Products on a Spanish Board",
        content: "This is where a Spanish tabla assembled with Soto & Segovia products becomes genuinely extraordinary.\n\nStart with a small ceramic bowl or ramekin of Príncipe Azahar Garlic Olive Oil for bread dipping — its fresh garlic aroma is immediately inviting and sets the tone for the board. Add a pinch of Sal Blanca (White Salt) to the oil for a classic Spanish touch.\n\nPosition small ramekins of two or three finishing salts: Sal Pimentón to finish slices of chorizo or jamón, Sal Negra for visual drama on white cheese, and Sal Menta if you're including fresh fruit on the board (melon and Mint Salt is a revelatory pairing).\n\nFor a condiment element, Vinagre de Higos (Fig Vinegar) makes an exceptional dipping sauce for cheese — drizzle it over aged Manchego and watch guests' expressions change. The same applies to Vinagre de Granada (Pomegranate Vinegar), which is stunning drizzled over jamón ibérico.\n\nFinally, decant a cold glass of Príncipe Azahar Vino de Naranja for each guest as the board is set down. The citrusy aperitif wine was made for precisely this moment.",
      },
      {
        heading: "The Accompaniments: Completing the Tabla",
        content: "A Spanish board needs texture and relief from richness. Include: Marcona almonds (blanched, fried in olive oil, salted — available at most specialty food stores), high-quality olives (Manzanilla from Seville or Arbequina from Catalonia), membrillo (quince paste — the traditional Spanish accompaniment to Manchego), pan con tomate (toasted bread rubbed with tomato and drizzled with olive oil), and pimientos del piquillo (roasted sweet red peppers, excellent with aged cheese and jamón).\n\nFresh fruit adds color and freshness: grapes, figs (in season), and sliced pear all work beautifully with the Spanish cheese selection. If using melon, a pinch of Sal Menta on each piece creates one of the great simple combinations in all of Spanish food culture.\n\nFor bread, serve a rustic sourdough or traditional Spanish barra — crusty on the outside, chewy within — sliced thickly and lightly toasted.",
      },
    ],
  },

  {
    slug: "artisan-vinegars-spain-guide",
    title: "Beyond Balsamic: Spain's Artisan Vinegars and How to Use Them",
    subtitle: "Spanish artisan vinegars — made from pomegranate, fig, lemon, orange, and vanilla — represent a completely different tradition from Italian balsamic. Here's how to discover them.",
    date: "2026-08-12",
    author: "Maite Aranaz",
    category: "Vinegars",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504387432042-8aca549e4729?w=1200&q=80",
    excerpt: "While Italian balsamic dominates the gourmet conversation, Spain's artisan vinegar tradition — centered on fruit-infused aged vinegars from Andalusia and the Mediterranean coast — offers a completely different and equally sophisticated range of flavors.",
    relatedProducts: ["fig-vinegar", "pomegranate-vinegar", "vanilla-vinegar", "orange-vinegar", "lemon-vinegar"],
    faq: [
      { q: "What is the difference between Spanish artisan vinegar and balsamic vinegar?", a: "Balsamic vinegar is made from cooked grape must aged in wooden barrels — a product of Modena and Reggio Emilia, Italy. Spanish artisan vinegars from producers like Príncipe Azahar are made from a wine or alcohol base infused with fresh fruit or botanicals and aged to develop complexity. They are more aromatic and fruit-forward than balsamic, with a cleaner, brighter acidity." },
      { q: "Can you cook with artisan vinegar or is it just for finishing?", a: "High-quality artisan vinegars can be used both in cooking and as finishing elements. Fig Vinegar is exceptional in reductions and glazes for poultry. Pomegranate Vinegar works beautifully in marinades and dressings. For maximum aroma impact, however, these vinegars are best added at the end of cooking or drizzled raw over a finished dish." },
      { q: "What does Orange Vinegar Reserva mean?", a: "Príncipe Azahar's Orange Vinegar is designated Reserva — it has been aged for 11 years using traditional methods. The extended aging process develops extraordinary depth, mellowing the acidity and concentrating the orange aromatics. It is 4.9% acidity and comes in a 200ml bottle reflecting its premium, aged character." },
      { q: "How do you use Vanilla Vinegar?", a: "Vanilla Vinegar is one of the most surprising products in the Príncipe Azahar collection. Use it drizzled over fresh strawberries, spooned over vanilla ice cream or panna cotta, as part of a dressing for fruit salads, or paired with aged cheese. Its acidity is real but gentle, and the vanilla warmth creates an unexpected and sophisticated flavor bridge." },
    ],
    body: [
      {
        heading: "Spain's Vinegar Tradition: An Overlooked Culinary Heritage",
        content: "The global conversation about gourmet vinegar begins and ends, for most food enthusiasts, with Italian balsamic. And while aged balsamic from Modena is undeniably extraordinary, this singular focus has left an entire tradition virtually unknown outside its home region: Spain's centuries-old culture of artisan fruit vinegars.\n\nProducers like Príncipe Azahar in Altea have developed a range of vinegars that approach the category from a completely different angle — not grape must aged in the Solera system of Modena, but carefully selected fruits and botanicals infused into a high-quality base and aged to develop aromatic complexity. The results are a collection of vinegars that are intensely fruit-forward, brightly acidic, and extraordinarily versatile.",
      },
      {
        heading: "Fig Vinegar: The Gateway Vinegar",
        content: "For those new to Spanish artisan vinegars, Vinagre de Higos — Fig Vinegar — is the ideal starting point. Ripe Spanish figs, with their natural honey sweetness and almost jammy richness, translate beautifully into vinegar. The resulting product has a lush, honeyed quality with clean acidity that makes it immediately approachable and surprisingly versatile.\n\nDrizzle Fig Vinegar over aged Manchego or fresh goat cheese for an instant upgrade to any cheese board. Use it to deglaze a pan after cooking duck breast or chicken thighs, creating a reduction that concentrates its sweetness. Stir it into a vinaigrette with Garlic Olive Oil, a pinch of Sal Blanca, and a teaspoon of whole-grain mustard for a dressing that will surprise anyone who tastes it. It also pairs exceptionally well with Iberian jamón — the sweetness of the vinegar cuts through the fat of the ham in a way that makes both better.",
      },
      {
        heading: "Pomegranate Vinegar: Drama in a Bottle",
        content: "Vinagre de Granada — Pomegranate Vinegar — is as visually striking as it is flavorful. Deep ruby in color with a jewel-like intensity, this vinegar carries the distinctive flavor of Spanish pomegranate: sweet, tart, slightly tannic, and deeply complex.\n\nIn the kitchen, Pomegranate Vinegar works as both a finishing element and a cooking ingredient. Reduce it by half with a little honey and a pinch of Sal Negra for a glaze that transforms grilled lamb chops or roasted duck. Drizzle it raw over a salad of bitter greens, toasted walnuts, and crumbled blue cheese for a dressing that needs nothing else. For entertaining, a shot glass of Pomegranate Vinegar as a palate-cleanser between courses is a sophisticated (and alcohol-free) touch that food-forward guests will appreciate.",
      },
      {
        heading: "Orange Vinegar Reserva: The Aged Standard",
        content: "The crown jewel of the Príncipe Azahar vinegar collection is Vinagre Naranja Reserva — Orange Vinegar aged for 11 years. The extended aging in this 200ml bottle represents the same dedication to quality and time that defines the finest aged balsamics of Modena.\n\nAfter 11 years of aging, the vinegar's acidity softens to a gentle 4.9%, while its orange aromatics concentrate into something extraordinary — layers of dried orange peel, warm spice, caramel, and a long, complex finish. This is not an ingredient for cooking; it is a finishing element for the most delicate dishes. A few drops over raw oysters, fresh scallops, or a slice of fine aged cheese is sufficient. Or use it as the centerpiece of a tasting — pour a small measure into a wine glass and observe the color, inhale the aroma, and taste it slowly before applying it to any dish.",
      },
      {
        heading: "Vanilla Vinegar: The Most Surprising Product",
        content: "Vinagre de Vainilla — Vanilla Vinegar — is the product that most consistently surprises and delights first-time tasters. The concept seems almost absurd on paper: vanilla and vinegar? But the reality is deeply compelling.\n\nNatural vanilla is one of the most complex aromatic ingredients in the culinary world, with over 200 identified flavor compounds. When aged into a quality vinegar base, these compounds create an extraordinary bridge between sweet and acidic — a flavor that belongs to neither world but enhances both. The result tastes like a vinegar you would use in a dessert context, and that is precisely the point.\n\nUse Vanilla Vinegar drizzled over fresh strawberries (a combination that should replace balsamic-strawberries as the default dessert pairing), over vanilla ice cream, on a panna cotta, or as part of a vinaigrette for a fruit salad with fresh mint. It also works remarkably well with aged cheese — particularly a good Manchego — where its sweetness and acidity create a more interesting pairing than membrillo alone.",
      },
    ],
  },
];

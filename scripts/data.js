var data = ["account", "achiever", "acoustics", "act", "action", "activity", "actor", "addition", "adjustment", "advertisement", "advice", "aftermath", "afternoon", "afterthought", "agreement", "air", "airplane", "airport", "alarm", "amount", "amusement", "anger", "angle", "animal ", "answer", "ant", "ants ", "apparatus", "apparel", "apple", "apples ", "appliance", "approval", "arch", "argument", "arithmetic", "arm", "army", "art", "attack", "attempt", "attention", "attraction", "aunt", "authority", "babies ", "baby ", "back", "badge", "bag", "bait", "balance", "ball", "balloon", "balls ", "banana", "band", "base", "baseball", "basin", "basket", "basketball", "bat", "bath", "battle", "bead", "beam", "bean", "bear", "bears ", "beast", "bed", "bedroom", "beds ", "bee", "beef", "beetle", "beggar", "beginner", "behavior", "belief", "believe", "bell", "bells ", "berry", "bike", "bikes ", "bird", "birds ", "birth", "birthday", "bit", "bite", "blade", "blood", "blow", "board", "boat", "boats ", "body", "bomb", "bone", "book", "books ", "boot", "border", "bottle", "boundary", "box", "boy", "boys ", "brain", "brake", "branch", "brass", "bread", "breakfast", "breath", "brick", "bridge", "brother", "brothers ", "brush", "bubble", "bucket", "building", "bulb", "bun", "burn", "burst", "bushes", "business", "butter", "button", "cabbage", "cable", "cactus", "cake", "cakes ", "calculator", "calendar", "camera", "camp", "can", "cannon", "canvas", "cap", "caption", "car ", "card", "care", "carpenter", "carriage", "cars ", "cart", "cast", "cat", "cats ", "cattle", "cause", "cave", "celery", "cellar", "cemetery", "cent", "chain", "chair ", "chairs ", "chalk", "chance", "change", "channel", "cheese", "cherries", "cherry", "chess", "chicken ", "chickens ", "children", "chin", "church", "circle", "clam", "class", "clock", "clocks ", "cloth", "cloud", "clouds ", "clover", "club", "coach", "coal", "coast", "coat", "cobweb", "coil", "collar", "color", "comb", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cord", "cork", "corn ", "cough", "country", "cover", "cow", "cows ", "crack", "cracker", "crate", "crayon", "cream", "creator", "creature", "credit", "crib", "crime", "crook", "crow", "crowd", "crown", "crush", "cry", "cub", "cup", "current", "curtain", "curve", "cushion", "dad", "daughter", "day", "death", "debt", "decision", "deer", "degree", "design", "desire", "desk", "destruction", "detail", "development", "digestion", "dime", "dinner", "dinosaurs ", "direction", "dirt", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "dock", "doctor", "dog", "dogs ", "doll", "dolls ", "donkey", "door", "downtown", "drain", "drawer", "dress", "drink", "driving", "drop", "drug", "drum", "duck ", "ducks ", "dust", "ear", "earth", "earthquake", "edge", "education", "effect", "egg", "eggnog", "eggs ", "elbow", "end", "engine", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "eyes", "face", "fact", "fairies ", "fall", "family", "fan", "fang ", "farm", "farmer ", "father", "father", "faucet", "fear", "feast", "feather", "feeling", "feet", "fiction", "field", "fifth", "fight", "finger", "finger", "fire ", "fireman", "fish", "flag", "flame", "flavor", "flesh", "flight", "flock", "floor", "flower", "flowers ", "fly", "fog", "fold", "food", "foot", "force", "fork", "form", "fowl", "frame", "friction", "friend", "friends ", "frog", "frogs ", "front", "fruit", "fuel", "furniture", "alley", "game", "garden", "gate", "geese", "ghost", "giants ", "giraffe", "girl", "girls ", "glass", "glove", "glue", "goat", "gold", "goldfish", "good-bye ", "goose", "government", "governor", "grade", "grain", "grandfather", "grandmother", "grape", "grass", "grip", "ground", "group", "growth", "guide", "guitar", "gun", "hair", "haircut", "hall", "hammer", "hand", "hands ", "harbor", "harmony", "hat", "hate", "head", "health", "hearing", "heart", "heat", "help", "hen", "hill ", "history", "hobbies", "hole", "holiday", "home ", "honey", "hook", "hope", "horn", "horse", "horses ", "hose", "hospital", "hot", "hour", "house", "houses ", "humor", "hydrant", "ice", "icicle", "idea", "impulse", "income", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jail", "jam", "jar", "jeans", "jelly", "jellyfish", "jewel", "join", "joke", "journey", "judge", "juice", "jump", "kettle", "key", "kick", "kiss", "kite", "kitten", "kittens ", "kitty ", "knee", "knife", "knot", "knowledge", "laborer", "lace", "ladybug", "lake", "lamp", "land", "language", "laugh", "lawyer", "lead", "leaf", "learning", "leather", "leg ", "legs", "letter", "letters ", "lettuce", "level", "library", "lift", "light", "limit", "line", "linen", "lip", "liquid", "list", "lizards ", "loaf", "lock", "locket", "look", "loss", "love", "low", "lumber", "lunch", "lunchroom", "machine", "magic", "maid", "mailbox", "man", "manager", "map", "marble", "mark", "market", "mask", "mass", "match", "meal", "measure", "meat", "meeting", "memory", "men", "metal", "mice ", "middle", "milk", "mind", "mine", "minister", "mint", "minute", "mist", "mitten", "mom", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "muscle", "music", "nail", "name", "nation", "neck", "need", "needle", "nerve", "nest ", "net", "news", "night", "noise", "north", "nose", "note", "notebook", "number", "nut", "oatmeal", "observation", "ocean", "offer", "office", "oil", "operation", "opinion", "orange", "oranges ", "order", "organization", "ornament", "oven", "owl", "owner", "page", "pail", "pain", "paint", "pan", "pancake", "paper", "parcel", "parent", "park", "part", "partner", "party", "passenger", "paste", "patch", "payment", "peace", "pear", "pen", "pencil", "person", "pest", "pet", "pets ", "pickle", "picture", "pie", "pies ", "pig", "pigs ", "pin", "pipe", "pizzas ", "place", "plane", "planes ", "plant", "plantation", "plants ", "plastic", "plate", "play", "playground", "pleasure", "plot", "plough", "pocket", "point", "poison", "police", "polish", "pollution", "popcorn", "porter", "position", "pot", "potato", "powder", "power", "price", "print", "prison", "process", "produce", "profit", "property", "prose", "protest", "pull", "pump", "punishment", "purpose", "push", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quiver", "rabbit ", "rabbits ", "rail", "railway", "rain", "rainstorm", "rake", "range", "rat", "rate", "ray", "reaction", "reading", "reason", "receipt", "recess", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "riddle", "rifle", "ring", "rings ", "river", "road", "robin ", "rock", "rod", "roll", "roof", "room", "root", "rose", "route", "rub", "rule", "run", "sack", "sail", "salt", "sand", "scale", "scarecrow", "scarf", "scene", "scent", "school", "science", "scissors", "screw", "sea", "seashore", "seat", "secretary", "seed", "selection", "self", "sense", "servant", "shade", "shake", "shame", "shape", "sheep", "sheet", "shelf", "ship", "shirt", "shock", "shoe", "shoes ", "shop", "show", "side", "sidewalk", "sign", "silk", "silver", "sink", "sister", "sisters ", "size", "skate", "skin", "skirt", "sky", "slave", "sleep", "sleet", "slip", "slope", "smash", "smell", "smile", "smoke", "snail", "snails ", "snake", "snakes ", "sneeze", "snow", "soap", "society", "sock", "soda", "sofa", "son", "song", "songs ", "sort", "sound", "soup", "space", "spade", "spark", "spiders ", "sponge", "spoon", "spot", "spring", "spy", "square", "squirrel", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stew", "stick", "sticks ", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "stove", "stranger", "straw", "stream", "street", "stretch", "string", "structure", "substance", "sugar", "suggestion", "suit", "summer", "sun", "support", "surprise", "sweater", "swim", "swing", "system", "table", "tail", "talk", "tank", "taste", "tax", "teaching", "team", "teeth ", "temper", "tendency", "tent", "territory", "test", "texture", "theory", "thing", "things ", "thought", "thread", "thrill", "throat", "throne", "thumb", "thunder", "ticket", "tiger", "time", "tin", "title", "toad", "toe", "toes", "tomatoes ", "tongue", "tooth", "toothbrush", "toothpaste", "top ", "touch", "town", "toy ", "toys ", "trade", "trail", "train", "trains ", "tramp", "transport", "tray", "treatment", "tree", "trees ", "trick", "trip", "trouble", "trousers", "truck", "trucks ", "tub", "turkey", "turn", "twig", "twist", "umbrella", "uncle", "underwear", "unit", "use", "vacation", "value", "van", "vase", "vegetable", "veil", "vein", "verse", "vessel", "vest", "view", "visitor", "voice", "volcano", "volleyball", "voyage", "walk", "wall", "war", "wash", "waste", "watch", "water", "wave", "waves ", "wax", "way", "wealth", "weather", "week", "weight", "wheel", "whip", "whistle", "wilderness", "wind ", "window ", "wine", "wing", "winter", "wire", "wish", "woman", "women", "wood", "wool", "word", "work", "worm", "wound", "wren", "wrench", "wrist", "writer", "writing", "yak", "yam", "yard", "yarn", "year", "yoke", "zebra ", "zephyr", "zinc", "zipper", "zoo"];
var movieData = ["The Shawshank Redemption",
	"The Godfather",
	"The Godfather, Part II",
	"The Dark Knight",
	"Pulp Fiction",
	"The Good, The Bad and The Ugly",
	"12 Angry Men",
	"Schindler's List",
	"The Lord of the Rings: The Return of the King",
	"Fight Club",
	"The Fellowship Of The Ring",
	"Star Wars: Episode V - The Empire Strikes Back",
	"Inception",
	"Forrest Gump",
	"One Flew Over the Cuckoo's Nest",
	"The Lord of the Rings: The Two Towers",
	"Interstellar",
	"Goodfellas",
	"The Matrix",
	"Star Wars: Episode IV - A New Hope",
	"Seven Samurai",
	"City of God",
	"Se7en",
	"The Usual Suspects",
	"The Silence of the Lambs",
	"It's a Wonderful Life",
	"Once Upon a Time in the West",
	"Leon: The Professional",
	"Life Is Beautiful",
	"Casablanca",
	"Raiders of the Lost Ark",
	"American History X",
	"Saving Private Ryan",
	"City Lights",
	"Psycho",
	"Spirited Away",
	"Rear Window",
	"Intouchables",
	"Modern Times",
	"Whiplash",
	"Terminator 2: Judgment Day",
	"Memento",
	"The Green Mile",
	"The Pianist",
	"The Departed",
	"Sunset Boulevard",
	"Apocalypse Now",
	"Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
	"Gladiator",
	"Back to the Future",
	"Alien",
	"The Prestige",
	"The Great Dictator",
	"The Lives of Others",
	"The Lion King",
	"Django Unchained",
	"The Dark Knight Rises",
	"Cinema Paradiso",
	"The Shining",
	"Paths of Glory",
	"American Beauty",
	"Wall-E",
	"North by Northwest",
	"Aliens",
	"Citizen Kane",
	"Vertigo",
	"Amelie",
	"M",
	"Das Boot",
	"Grave of the Fireflies",
	"Toy Story 3",
	"Oldboy",
	"Princess Mononoke",
	"Star Wars: Episode VI - Return of the Jedi",
	"Once Upon a Time in America",
	"A Clockwork Orange",
	"Reservoir Dogs",
	"Taxi Driver",
	"Double Indemnity",
	"Braveheart",
	"Requiem for a Dream",
	"To Kill a Mockingbird",
	"Lawrence of Arabia",
	"Witness for the Prosecution",
	"Eternal Sunshine of the Spotless Mind",
	"Full Metal Jacket",
	"Singin' in the Rain",
	"The Sting",
	"Bicycle Thieves",
	"Amadeus",
	"Monty Python and the Holy Grail",
	"Snatch",
	"Rashomon",
	"L.A. Confidential",
	"For a Few Dollars More",
	"2001: A Space Odyssey",
	"The Kid",
	"All About Eve",
	"The Apartment",
	"Some Like It Hot",
	"Inglourious Basterds",
	"Birdman",
	"Indiana Jones and the Last Crusade",
	"The Treasure of the Sierra Madre",
	"The Third Man",
	"A Seperation",
	"Yojimbo",
	"Toy Story",
	"Batman Begins",
	"Metropolis",
	"Like Stars on Earth",
	"Unforgiven",
	"Scarface",
	"Raging Bull",
	"Up",
	"Chinatown",
	"3 Idiots",
	"The Great Escape",
	"Downfall",
	"Boyhood",
	"Die Hard",
	"On the Waterfront",
	"Pan's Labyrinth",
	"Mr. Smith Goes to Washington",
	"The Hunt",
	"Heat",
	"CM101MMXI Fundamentals",
	"Gone Girl",
	"The Bridge on the River Kwai",
	"Good Will Hunting",
	"The Bandit",
	"My Neighbor Totoro",
	"The Seventh Seal",
	"Ikiru",
	"The Gold Rush",
	"The Elephant Man",
	"The Wolf of Wall Street",
	"Ran",
	"Wild Strawberries",
	"Blade Runner",
	"The General",
	"Lock, Stock and Two Smoking Barrels",
	"The Secret in Their Eyes",
	"Casino",
	"Gran Torino",
	"The Big Lebowski",
	"Warrior",
	"Rebecca",
	"V for Vendetta",
	"Howl's Moving Castle",
	"Paint It Yellow",
	"The Deer Hunter",
	"It Happened One Night",
	"Cool Hand Luke",
	"How to Train Your Dragon",
	"Fargo",
	"Judgment at Nuremberg",
	"Trainspotting",
	"Gone with the Wind",
	"Rush",
	"Into the Wild",
	"The Maltese Falcon",
	"A Beautiful Mind",
	"Dial M for Murder",
	"The Sixth Sense",
	"The Wages of Fear",
	"Hotel Rwanda",
	"The Thing",
	"Finding Nemo",
	"Mary and Max",
	"No Country for Old Men",
	"Butch Cassidy and the Sundance Kid",
	"Kill Bill: Vol. 1",
	"Platoon",
	"Life of Brian",
	"Incendies",
	"Guardians of the Galaxy",
	"Dil Chahta Hai",
	"12 Years a Slave",
	"Network",
	"Touch of Evil",
	"Diabolique (1955)",
	"Annie Hall",
	"The Princess Bride",
	"There Will Be Blood",
	"The Grand Budapest Hotel",
	"Stand by Me",
	"Sin City",
	"Ben-Hur",
	"The 400 Blows",
	"Amores Perros",
	"In the Name of the Father",
	"Million Dollar Baby",
	"The Grapes of Wrath",
	"The Wizard of Oz",
	"Hachi: A Dog's Tale",
	"Persona",
	"The Best Years of Our Lives",
	"The Avengers",
	"Nausicaä of the Valley of the Wind",
	"The Bourne Ultimatum",
	"Gandhi",
	"The Imitation Game",
	"Donnie Darko",
	"8 1/2",
	"Gangs of Wasseypur",
	"Strangers on a Train",
	"Infernal Affairs",
	"Stalker",
	"12 Monkeys",
	"Jaws",
	"Shutter Island",
	"X-Men: Days of Future Past",
	"High Noon",
	"Lagaan: Once Upon a Time in India",
	"Notorious",
	"The Terminator",
	"Before Sunrise",
	"The King's Speech",
	"Groundhog Day",
	"Harry Potter and the Deathly Hallows: Part 2",
	"Fanny and Alexander",
	"Ip Man",
	"The Battle of Algiers",
	"Rocky",
	"Dog Day Afternoon",
	"The Night of the Hunter",
	"Monsters, Inc.",
	"La Haine",
	"Memories of Murder",
	"La Strada",
	"Pirates of the Caribbean: The Curse of the Black Pearl",
	"Who's Afraid of Virginia Woolf?",
	"Barry Lyndon",
	"A Fistful of Dollars",
	"Castle in the Sky",
	"The Truman Show",
	"The Big Sleep",
	"The Help",
	"Jurassic Park",
	"Roman Holiday",
	"The Graduate",
	"The Hustler",
	"Papillon",
	"Beauty and the Beast",
	"In the Mood for Love",
	"The Celebration",
	"Prisoners",
	"Rope",
	"Swades: We, the People"
];

var defaultData = [
		"AFRICA<br/>آفریقا",
		"AGENT<br/>عامل",
		"AIR<br/>AIR",
		"ALIEN<br/>بیگانه",
		"ALPS<br/>ALPS",
		"AMAZON<br/>AMAZON",
		"AMBULANCE<br/>آمبولانس",
		"AMERICA<br/>آمریكا",
		"ANGEL<br/>فرشته",
		"ANTARCTICA<br/>جنوبگان",
		"APPLE<br/>سیب",
		"ARM<br/>ARM",
		"ATLANTIS<br/>ATLANTIS",
		"AUSTRALIA<br/>استرالیا",
		"AZTEC<br/>AZTEC",
		"BACK<br/>بازگشت",
		"BALL<br/>BALL",
		"BAND<br/>باند",
		"BANK<br/>BANK",
		"BAR<br/>بار",
		"BARK<br/>پارس سگ",
		"BAT<br/>BAT",
		"BATTERY<br/>باتری",
		"BEACH<br/>ساحل دریا",
		"BEAR<br/>خرس",
		"BEAT<br/>ضرب و شتم",
		"BED<br/>بستر",
		"BEIJING<br/>پکن",
		"BELL<br/>زنگ",
		"BELT<br/>کمربند",
		"BERLIN<br/>برلین",
		"BERMUDA<br/>BERMUDA",
		"BERRY<br/>بری",
		"BILL<br/>BILL",
		"BLOCK<br/>مسدود کردن",
		"BOARD<br/>هیئت مدیره",
		"BOLT<br/>پیچ",
		"BOMB<br/>بمب",
		"BOND<br/>رابطه, رشته",
		"BOOM<br/>رونق",
		"BOOT<br/>BOOT",
		"BOTTLE<br/>بطری",
		"BOW<br/>تعظیم",
		"BOX<br/>BOX",
		"BRIDGE<br/>پل",
		"BRUSH<br/>قلم مو",
		"BUCK<br/>BUCK",
		"BUFFALO<br/>بوفالو",
		"BUG<br/>حشره",
		"BUGLE<br/>BUGLE",
		"BUTTON<br/>دکمه",
		"CALF<br/>گوساله",
		"CANADA<br/>CANADA",
		"CAP<br/>کلاه لبه دار",
		"CAPITAL<br/>سرمایه, پایتخت",
		"CAR<br/>ماشین",
		"CARD<br/>کارت",
		"CARROT<br/>هویج",
		"CASINO<br/>کازینو",
		"CAST<br/>قالب",
		"CAT<br/>گربه",
		"CELL<br/>سلول",
		"CENTAUR<br/>سنتور",
		"CENTER<br/>مرکز",
		"CHAIR<br/>صندلی",
		"CHANGE<br/>تغییر دادن",
		"CHARGE<br/>شارژ",
		"CHECK<br/>بررسی",
		"CHEST<br/>CHEST",
		"CHICK<br/>CHICK",
		"CHINA<br/>چین",
		"CHOCOLATE<br/>شکلات",
		"CHURCH<br/>کلیسا",
		"CIRCLE<br/>دایره",
		"CLIFF<br/>CLIFF",
		"CLOAK<br/>CLOAK",
		"CLUB<br/>باشگاه",
		"CODE<br/>کد",
		"COLD<br/>سرد",
		"COMIC<br/>کمیک",
		"COMPOUND<br/>ترکیب",
		"CONCERT<br/>CONCERT",
		"CONDUCTOR<br/>رهبر ارکستر",
		"CONTRACT<br/>قرارداد",
		"COOK<br/>پختن",
		"COPPER<br/>فلز مس",
		"COTTON<br/>پنبه",
		"COURT<br/>دادگاه",
		"COVER<br/>پوشش",
		"CRANE<br/>جرثقیل",
		"CRASH<br/>تصادف در",
		"CRICKET<br/>کریکت",
		"CROSS<br/>صلیب",
		"CROWN<br/>تاج پادشاهی",
		"CYCLE<br/>چرخه",
		"CZECH<br/>کشور چک",
		"DANCE<br/>رقص",
		"DATE<br/>تاریخ",
		"DAY<br/>DAY",
		"DEATH<br/>مرگ",
		"DECK<br/>عرشه",
		"DEGREE<br/>درجه",
		"DIAMOND<br/>DIAMOND",
		"DICE<br/>تاس",
		"DINOSAUR<br/>DINOSAUR",
		"DISEASE<br/>بیماری",
		"DOCTOR<br/>دکتر",
		"DOG<br/>سگ",
		"DRAFT<br/>پیش نویس",
		"DRAGON<br/>اژدها",
		"DRESS<br/>لباس",
		"DRILL<br/>مته",
		"DROP<br/>رها کردن",
		"DUCK<br/>اردک",
		"DWARF<br/>آدم کوتوله",
		"EAGLE<br/>عقاب",
		"EGYPT<br/>مصر",
		"EMBASSY<br/>سفارت",
		"ENGINE<br/>موتور",
		"ENGLAND<br/>انگلستان",
		"EUROPE<br/>اروپا",
		"EYE<br/>چشم",
		"FACE<br/>صورت",
		"FAIR<br/>نمایشگاه",
		"FALL<br/>سقوط",
		"FAN<br/>پنکه",
		"FENCE<br/>FENCE",
		"FIELD<br/>رشته",
		"FIGHTER<br/>FIGHTER",
		"FIGURE<br/>شکل",
		"FILE<br/>فایل",
		"FILM<br/>فیلم",
		"FIRE<br/>آتش",
		"FISH<br/>ماهی",
		"FLUTE<br/>FLUTE",
		"FLY<br/>پرواز",
		"FOOT<br/>پا",
		"FORCE<br/>زور",
		"FOREST<br/>جنگل",
		"FORK<br/>چنگال",
		"FRANCE<br/>فرانسه",
		"GAME<br/>بازی",
		"GAS<br/>گاز",
		"GENIUS<br/>نابغه",
		"GERMANY<br/>آلمان",
		"GHOST<br/>روح",
		"GIANT<br/>غول",
		"GLASS<br/>شیشه",
		"GLOVE<br/>دستکش",
		"GOLD<br/>طلا",
		"GRACE<br/>رحمت",
		"GRASS<br/>چمن",
		"GREECE<br/>یونان",
		"GREEN<br/>سبز",
		"GROUND<br/>زمین",
		"HAM<br/>هام",
		"HAND<br/>دست",
		"HAWK<br/>شاهین",
		"HEAD<br/>سر",
		"HEART<br/>قلب",
		"HELICOPTER<br/>بالگرد",
		"HIMALAYAS<br/>HIMALAYAS",
		"HOLE<br/>سوراخ",
		"HOLLYWOOD<br/>HOLLYWOOD",
		"HONEY<br/>عسل",
		"HOOD<br/>کاپوت ماشین",
		"HOOK<br/>قلاب",
		"HORN<br/>شیپور",
		"HORSE<br/>اسب",
		"HORSESHOE<br/>HORSESHOE",
		"HOSPITAL<br/>بیمارستان",
		"HOTEL<br/>هتل",
		"ICE<br/>یخ",
		"ICE CREAM<br/>بستنی",
		"INDIA<br/>هند",
		"IRON<br/>اهن",
		"IVORY<br/>عاج",
		"JACK<br/>جک",
		"JAM<br/>مربا",
		"JET<br/>جت",
		"JUPITER<br/>سیاره مشتری",
		"KANGAROO<br/>KANGAROO",
		"KETCHUP<br/>سس گوجه",
		"KEY<br/>کلید",
		"KID<br/>KID",
		"KING<br/>پادشاه",
		"KIWI<br/>کیوی",
		"KNIFE<br/>چاقو",
		"KNIGHT<br/>شوالیه",
		"LAB<br/>آزمایشگاه",
		"LAP<br/>LAP",
		"LASER<br/>لیزر",
		"LAWYER<br/>وکیل",
		"LEAD<br/>رهبری",
		"LEMON<br/>لیمو",
		"LEPRECHAUN<br/>LEPRECHAUN",
		"LIFE<br/>زندگی",
		"LIGHT<br/>سبک",
		"LIMOUSINE<br/>لیموزین",
		"LINE<br/>LINE",
		"LINK<br/>ارتباط دادن",
		"LION<br/>شیر نر",
		"LITTER<br/>آشغال",
		"LOCH NESS<br/>LOCH NESS",
		"LOCK<br/>قفل کردن",
		"LOG<br/>LOG",
		"LONDON<br/>LONDON",
		"LUCK<br/>شانس",
		"MAIL<br/>MAIL",
		"MAMMOTH<br/>MAMMOTH",
		"MAPLE<br/>MAPLE",
		"MARBLE<br/>سنگ مرمر",
		"MARCH<br/>مارس",
		"MASS<br/>جرم",
		"MATCH<br/>همخوانی داشتن",
		"MERCURY<br/>سیاره تیر",
		"MEXICO<br/>MEXICO",
		"MICROSCOPE<br/>میکروسکوپ",
		"MILLIONAIRE<br/>میلیونر",
		"MINE<br/>مال خودم",
		"MINT<br/>نعنا",
		"MISSILE<br/>MISSILE",
		"MODEL<br/>مدل",
		"MOLE<br/>MOLE",
		"MOON<br/>ماه",
		"MOSCOW<br/>مسکو",
		"MOUNT<br/>کوه",
		"MOUSE<br/>موش",
		"MOUTH<br/>دهان",
		"MUG<br/>MUG",
		"NAIL<br/>ناخن - میخ",
		"NEEDLE<br/>سوزن",
		"NET<br/>خالص",
		"NEW YORK<br/>نیویورک",
		"NIGHT<br/>شب",
		"NINJA<br/>نینجا",
		"NOTE<br/>توجه داشته باشید",
		"NOVEL<br/>رمان",
		"NURSE<br/>پرستار",
		"NUT<br/>NUT",
		"OCTOPUS<br/>اختاپوس",
		"OIL<br/>روغن",
		"OLIVE<br/>زیتون",
		"OLYMPUS<br/>OLYMPUS",
		"OPERA<br/>OPERA",
		"ORANGE<br/>نارنجی",
		"ORGAN<br/>عضو",
		"PALM<br/>نخل",
		"PAN<br/>ماهی تابه",
		"PANTS<br/>شلوار",
		"PAPER<br/>کاغذ",
		"PARACHUTE<br/>PARACHUTE",
		"PARK<br/>پارک",
		"PART<br/>بخش",
		"PASS<br/>عبور",
		"PASTE<br/>PASTE",
		"PENGUIN<br/>PENGUIN",
		"PHOENIX<br/>ققنوس",
		"PIANO<br/>پیانو",
		"PIE<br/>PIE",
		"PILOT<br/>خلبان",
		"PIN<br/>پین",
		"PIPE<br/>PIPE",
		"PIRATE<br/>دزد دریایی",
		"PISTOL<br/>تپانچه",
		"PIT<br/>PIT",
		"PITCH<br/>گام صدا",
		"PLANE<br/>سطح",
		"PLASTIC<br/>پلاستیک",
		"PLATE<br/>PLATE",
		"PLATYPUS<br/>PLATYPUS",
		"PLAY<br/>بازی",
		"PLOT<br/>طرح",
		"POINT<br/>نقطه",
		"POISON<br/>سم",
		"POLE<br/>قطب",
		"POLICE<br/>پلیس",
		"POOL<br/>استخر",
		"PORT<br/>بندر",
		"POST<br/>پست",
		"POUND<br/>پوند",
		"PRESS<br/>مطبوعات",
		"PRINCESS<br/>شاهزاده",
		"PUMPKIN<br/>کدو تنبل",
		"PUPIL<br/>شاگرد",
		"PYRAMID<br/>PYRAMID",
		"QUEEN<br/>ملکه",
		"RABBIT<br/>خرگوش",
		"RACKET<br/>راکت تنیس",
		"RAY<br/>اشعه",
		"REVOLUTION<br/>انقلاب",
		"RING<br/>حلقه",
		"ROBIN<br/>ROBIN",
		"ROBOT<br/>ROBOT",
		"ROCK<br/>سنگ",
		"ROME<br/>ROME",
		"ROOT<br/>ریشه",
		"ROSE<br/>گل سرخ",
		"ROULETTE<br/>رولت",
		"ROUND<br/>دور",
		"ROW<br/>ROW",
		"RULER<br/>خط کش",
		"SATELLITE<br/>ماهواره",
		"SATURN<br/>زحل",
		"SCALE<br/>مقیاس",
		"SCHOOL<br/>مدرسه",
		"SCIENTIST<br/>دانشمند",
		"SCORPION<br/>عقرب",
		"SCREEN<br/>صفحه",
		"SCUBA DIVER<br/>غواص اسکوبا",
		"SEAL<br/>مهر",
		"SERVER<br/>سرور",
		"SHADOW<br/>سایه",
		"SHAKESPEARE<br/>شکسپیر",
		"SHARK<br/>SHARK",
		"SHIP<br/>کشتی",
		"SHOE<br/>کفش",
		"SHOP<br/>فروشگاه",
		"SHOT<br/>شات",
		"SINK<br/>فرو رفتن",
		"SKYSCRAPER<br/>آسمان خراش",
		"SLIP<br/>لیز خوردن",
		"SLUG<br/>SLUG",
		"SMUGGLER<br/>SMUGGLLER",
		"SNOW<br/>برف",
		"SNOWMAN<br/>آدم برفی",
		"SOCK<br/>جوراب",
		"SOLDIER<br/>سرباز",
		"SOUL<br/>روح",
		"SOUND<br/>صدا",
		"SPACE<br/>فضا",
		"SPELL<br/>هجی کردن",
		"SPIDER<br/>عنکبوت",
		"SPIKE<br/>SPIKE",
		"SPINE<br/>ستون فقرات",
		"SPOT<br/>SPOT",
		"SPRING<br/>بهار",
		"SPY<br/>جاسوسی",
		"SQUARE<br/>مربع",
		"STADIUM<br/>استادیوم",
		"STAFF<br/>کارکنان",
		"STAR<br/>ستاره",
		"STATE<br/>حالت",
		"STICK<br/>چوب",
		"STOCK<br/>موجودی",
		"STRAW<br/>پوشال",
		"STREAM<br/>جریان",
		"STRIKE<br/>ضربه",
		"STRING<br/>STRING",
		"SUB<br/>زیر",
		"SUIT<br/>کت و شلوار",
		"SUPERHERO<br/>SUPERHERO",
		"SWING<br/>تاب خوردن",
		"SWITCH<br/>تعویض",
		"TABLE<br/>جدول",
		"TABLET<br/>TABLET",
		"TAG<br/>TAG",
		"TAIL<br/>دم",
		"TAP<br/>ضربه زدن",
		"TEACHER<br/>معلم",
		"TELESCOPE<br/>TELESCOPE",
		"TEMPLE<br/>TEMPLE",
		"THEATER<br/>تئاتر",
		"THIEF<br/>دزد",
		"THUMB<br/>شست",
		"TICK<br/>تیک بزنید",
		"TIE<br/>کراوات",
		"TIME<br/>زمان",
		"TOKYO<br/>TOKYO",
		"TOOTH<br/>دندان",
		"TORCH<br/>مشعل",
		"TOWER<br/>برج",
		"TRACK<br/>مسیر",
		"TRAIN<br/>قطار - تعلیم دادن",
		"TRIANGLE<br/>مثلث",
		"TRIP<br/>سفر",
		"TRUNK<br/>تنه",
		"TUBE<br/>TUBE",
		"TURKEY<br/>بوقلمون",
		"UNDERTAKER<br/>مقاطعه کار کفن ودفن",
		"UNICORN<br/>اسب تک شاخ",
		"VACUUM<br/>خلاAC",
		"VAN<br/>ون",
		"VET<br/>VET",
		"WAKE<br/>از خواب بیدار",
		"WALL<br/>وال",
		"WAR<br/>جنگ",
		"WASHER<br/>واشر",
		"WASHINGTON<br/>واشنگتن",
		"WATCH<br/>تماشا کردن",
		"WATER<br/>اب",
		"WAVE<br/>موج",
		"WEB<br/>وب",
		"WELL<br/>خوب",
		"WHALE<br/>WHALE",
		"WHIP<br/>شلاق",
		"WIND<br/>WIND",
		"WITCH<br/>جادوگر",
		"WORM<br/>کرم",
		"YARD<br/>حیاط"
	];

var spanishData = [
	"aguila",
	"aguja",
	"agujero",
	"aire",
	"Alemania",
	"algodun",
	"alianza",
	"Alpes",
	"ambulancia",
	"America",
	"angel",
	"anillo",
	"Antartida",
	"antorcha",
	"araoa",
	"archivo",
	"arco",
	"Argentina",
	"articulo",
	"as",
	"Atlantida",
	"azteca",
	"baile",
	"bala",
	"ballena",
	"banco",
	"banda",
	"baoo",
	"barco",
	"barra",
	"bateria",
	"Berlin",
	"Bermudas",
	"bicho",
	"blanco",
	"bloque",
	"boca",
	"bola",
	"bolsa",
	"bomba",
	"bosque",
	"bota",
	"botella",
	"botun",
	"brazo",
	"bruja",
	"caballero",
	"caballo",
	"cabeza",
	"cabina",
	"cabo",
	"cactus",
	"cadena",
	"caja",
	"cama",
	"camara",
	"cambio",
	"campana",
	"campo",
	"canal",
	"canguro",
	"canto",
	"caoa",
	"capa",
	"capital",
	"caqui",
	"cara",
	"caravana",
	"carga",
	"carrera",
	"carro",
	"carta",
	"casco",
	"casino",
	"caza",
	"cementerio",
	"centauro",
	"centro",
	"Cervantes",
	"checo",
	"chocolate",
	"choque",
	"chuleta",
	"cientifico",
	"cinta",
	"cinturun",
	"circulo",
	"clase",
	"coche",
	"cocinero",
	"coco",
	"cudigo",
	"cola",
	"culera",
	"columna",
	"cometa",
	"compas",
	"concierto",
	"conejo",
	"contrabandista",
	"copa",
	"corazun",
	"corneta",
	"corona",
	"corredor",
	"corriente",
	"corte",
	"cresta",
	"cromo",
	"cruz",
	"cuadro",
	"cuarto",
	"cubierta",
	"cubo",
	"cuchillo",
	"cuello",
	"cuerda",
	"cuerno",
	"cura",
	"dama",
	"delta",
	"destino",
	"dia",
	"diamante",
	"diana",
	"diario",
	"diente",
	"dinosaurio",
	"disco",
	"don",
	"dragun",
	"duende",
	"Egipto",
	"embajada",
	"emperador",
	"enano",
	"enfermedad",
	"enfermera",
	"enlace",
	"escorpiun",
	"espacio",
	"espia",
	"estaciun",
	"estadio",
	"estado",
	"estrella",
	"estudio",
	"etiqueta",
	"Europa",
	"extraterrestre",
	"falda",
	"fantasma",
	"faro",
	"ficha",
	"fiesta",
	"figura",
	"flauta",
	"flecha",
	"foso",
	"Francia",
	"frente",
	"fuego",
	"fuente",
	"fuerza",
	"furgoneta",
	"gancho",
	"gato",
	"genio",
	"gigante",
	"golfo",
	"golondrina",
	"golpe",
	"goma",
	"gundola",
	"gota",
	"grado",
	"granada",
	"grano",
	"Grecia",
	"grifo",
	"guante",
	"guardia",
	"guerra",
	"gusano",
	"helado",
	"helicuptero",
	"hielo",
	"hierba",
	"hoja",
	"Hollywood",
	"horca",
	"hospital",
	"hotel",
	"iglesia",
	"iman",
	"india",
	"indice",
	"Inglaterra",
	"Italia",
	"jarra",
	"judia",
	"juicio",
	"kiwi",
	"ladrun",
	"lago Ness",
	"laser",
	"latigo",
	"lengua",
	"leun",
	"libra",
	"lima",
	"limusina",
	"linea",
	"lista",
	"llama",
	"llave",
	"lomo",
	"Londres",
	"luna",
	"luz",
	"maestro",
	"magia",
	"malta",
	"mancha",
	"mando",
	"manga",
	"mango",
	"mano",
	"manzana",
	"maoana",
	"marca",
	"marcha",
	"marfil",
	"masa",
	"mascara",
	"mazo",
	"medico",
	"mercurio",
	"mesa",
	"metro",
	"Mexico",
	"micro",
	"microscopio",
	"mielo",
	"millonario",
	"mina",
	"misil",
	"modelo",
	"mudulo",
	"monitor",
	"mono",
	"mortero",
	"Mosc˙",
	"motor",
	"muelle",
	"muerte",
	"muoeca",
	"muro",
	"naranja",
	"nave",
	"nieve",
	"Nilo",
	"ninja",
	"noche",
	"nota",
	"nudo",
	"Nueva York",
	"obra",
	"ojo",
	"ola",
	"olimpo",
	"upera",
	"orden",
	"urgano",
	"ornitorrinco",
	"oro",
	"oso",
	"pala",
	"palma",
	"pantalla",
	"papel",
	"paracaidas",
	"pase",
	"paso",
	"pasta",
	"pastel",
	"pavo",
	"Pekin",
	"pelicula",
	"pelotun",
	"pendiente",
	"perro",
	"pez",
	"pico",
	"pie",
	"pieza",
	"pila",
	"piloto",
	"pincho",
	"ping¸ino",
	"pinta",
	"pioa",
	"piramide",
	"pirata",
	"pista",
	"pistola",
	"placa",
	"plano",
	"planta",
	"platano",
	"playa",
	"plomo",
	"pluma",
	"policia",
	"polo",
	"portada",
	"portero",
	"potro",
	"prensa",
	"prima",
	"princesa",
	"puente",
	"puerto",
	"pulpo",
	"pulso",
	"punta",
	"punto",
	"radio",
	"rascacielos",
	"ratun",
	"rayo",
	"red",
	"regla",
	"reina",
	"reserva",
	"revoluciun",
	"rey",
	"robot",
	"rojo",
	"Roma",
	"ronda",
	"rosa",
	"ruleta",
	"sable",
	"Sa"
];
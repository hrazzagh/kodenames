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

var defaultData_Farsi =
	[
		"Africa#آفریقا",
		"Agent#مامور",
		"Air#هوا",
		"Alien#آدم فضائی",
		"Alps#کوه های آلپ",
		"Amazon#آمازون",
		"Ambulance#آمبولانس",
		"America#آمریكا",
		"Angel#فرشته",
		"Antarctica#قطب جنوب",
		"Apple#سیب",
		"Arm#بازو",
		"Atlantis#آتلانتیس",
		"Australia#استرالیا",
		"Aztec#امپراتوری ازتک مکزیک",
		"Back#پشت",
		"Ball#توپ",
		"Band#گروه",
		"Bank#بانک",
		"Bar#میکده",
		"Bark#پارس سگ",
		"Bat#خفاش",
		"Battery#باتری",
		"Beach#ساحل دریا",
		"Bear#خرس",
		"Beat#ضرب و شتم",
		"Bed#تخت",
		"Beijing#پکن",
		"Bell#زنگ",
		"Belt#کمربند",
		"Berlin#برلین",
		"Bermuda#جزیره برمودا",
		"Berry#توت",
		"Bill#صورت حساب",
		"Block#مسدود کردن",
		"Board#هیئت مدیره",
		"Bolt#پیچ",
		"Bomb#بمب",
		"Bond#رابطه",
		"Boom#غرش",
		"Boot#چکمه",
		"Bottle#بطری",
		"Bow#تعظیم",
		"Box#جعبه",
		"Bridge#پل",
		"Brush#قلمو",
		"Buck#دلار",
		"Buffalo#بوفالو",
		"Bug#حشره",
		"Bugle#شیپور",
		"Button#دکمه",
		"Calf#گوساله",
		"Canada#کانادا",
		"Cap#کلاه لبه دار",
		"Capital#پایتخت",
		"Car#ماشین",
		"Card#کارت",
		"Carrot#هویج",
		"Casino#کازینو",
		"Cast#قالب",
		"Cat#گربه",
		"Cell#سلول",
		"Centaur#سنتور",
		"Center#مرکز",
		"Chair#صندلی",
		"Change#تغییر",
		"Charge#شارژ",
		"Check#بررسی",
		"Chest#قفسه سینه",
		"Chick#جوجه",
		"China#چین",
		"Chocolate#شکلات",
		"Church#کلیسا",
		"Circle#دایره",
		"Cliff#صخره",
		"Cloak#عبا",
		"Club#باشگاه",
		"Code#کد",
		"Cold#سرد",
		"Comic#خنده دار",
		"Compound#ترکیب",
		"Concert#کنسرت",
		"Conductor#رهبر ارکستر",
		"Contract#قرارداد",
		"Cook#آشپز",
		"Copper#مس",
		"Cotton#پنبه",
		"Court#دادگاه",
		"Cover#پوشش",
		"Crane#جرثقیل",
		"Crash#تصادف",
		"Cricket#جیرجیرک",
		"Cross#صلیب",
		"Crown#تاج پادشاهی",
		"Cycle#چرخه",
		"Czech#کشور چک",
		"Dance#رقص",
		"Date#تاریخ",
		"Day#روز",
		"Death#مرگ",
		"Deck#عرشه",
		"Degree#درجه",
		"Diamond#الماس",
		"Dice#تاس",
		"Dinosaur#دایناسور",
		"Disease#بیماری",
		"Doctor#دکتر",
		"Dog#سگ",
		"Draft#پیش نویس",
		"Dragon#اژدها",
		"Dress#لباس",
		"Drill#مته",
		"Drop#قطره",
		"Duck#اردک",
		"Dwarf#آدم کوتوله",
		"Eagle#عقاب",
		"Egypt#مصر",
		"Embassy#سفارت",
		"Engine#موتور",
		"England#انگلستان",
		"Europe#اروپا",
		"Eye#چشم",
		"Face#صورت",
		"Fair#منصف",
		"Fall#سقوط",
		"Fan#پنکه",
		"Fence#حصار",
		"Field#رشته",
		"Fighter#جنگنده",
		"Figure#شکل",
		"File#فایل",
		"Film#فیلم",
		"Fire#آتش",
		"Fish#ماهی",
		"Flute#فلوت",
		"Fly#پرواز",
		"Foot#پا",
		"Force#زور",
		"Forest#جنگل",
		"Fork#چنگال",
		"France#فرانسه",
		"Game#بازی",
		"Gas#گاز",
		"Genius#نابغه",
		"Germany#آلمان",
		"Ghost#روح",
		"Giant#غول",
		"Glass#شیشه",
		"Glove#دستکش",
		"Gold#طلا",
		"Grace#رحمت",
		"Grass#چمن",
		"Greece#یونان",
		"Green#سبز",
		"Ground#زمین",
		"Ham#گوشت ران خوک",
		"Hand#دست",
		"Hawk#شاهین",
		"Head#سر",
		"Heart#قلب",
		"Helicopter#بالگرد",
		"Himalayas#هیمالیا",
		"Hole#سوراخ",
		"Hollywood#هالیوود",
		"Honey#عسل",
		"Hood#کلاه",
		"Hook#قلاب",
		"Horn#شیپور",
		"Horse#اسب",
		"Horseshoe#نعل اسب",
		"Hospital#بیمارستان",
		"Hotel#هتل",
		"Ice#یخ",
		"Ice Cream#بستنی",
		"India#هند",
		"Iron#آهن",
		"Ivory#عاج",
		"Jack#جک",
		"Jam#مربا",
		"Jet#جت",
		"Jupiter#سیاره مشتری",
		"Kangaroo#کانگرو",
		"Ketchup#سس گوجه",
		"Key#کلید",
		"Kid#بچه",
		"King#پادشاه",
		"Kiwi#کیوی",
		"Knife#چاقو",
		"Knight#شوالیه",
		"Lab#آزمایشگاه",
		"Lap#ران پا",
		"Laser#لیزر",
		"Lawyer#وکیل",
		"Lead#رهبری",
		"Lemon#لیمو",
		"Leprechaun#مرغ دریایی",
		"Life#زندگی",
		"Light#سبک",
		"Limousine#لیموزین",
		"Line#خط",
		"Link#ارتباط",
		"Lion#شیر",
		"Litter#آشغال",
		"Loch Ness#دریاچه نس",
		"Lock#قفل کردن",
		"Log#کنده",
		"London#لندن",
		"Luck#شانس",
		"Mail#پست الکترونیکی",
		"Mammoth#ماموت",
		"Maple#چوب افرا",
		"Marble#سنگ مرمر",
		"March#مارس",
		"Mass#جرم",
		"Match#همخوانی داشتن",
		"Mercury#سیاره تیر",
		"Mexico#مکزیک",
		"Microscope#میکروسکوپ",
		"Millionaire#میلیونر",
		"Mine#مین",
		"Mint#نعنا",
		"Missile#موشک",
		"Model#مدل",
		"Mole#خال",
		"Moon#ماه",
		"Moscow#مسکو",
		"Mount#کوه",
		"Mouse#موش",
		"Mouth#دهان",
		"Mug#لیوان",
		"Nail#ناخن",
		"Needle#سوزن",
		"Net#تور",
		"New York#نیویورک",
		"Night#شب",
		"Ninja#نینجا",
		"Note#یادداشت",
		"Novel#رمان",
		"Nurse#پرستار",
		"Nut#دانه خوراکی",
		"Octopus#اختاپوس",
		"Oil#روغن",
		"Olive#زیتون",
		"Olympus#المپیک",
		"Opera#اپرا",
		"Orange#نارنجی",
		"Organ#عضو",
		"Palm#نخل",
		"Pan#ماهی تابه",
		"Pants#شلوار",
		"Paper#کاغذ",
		"Parachute#چتر نجات",
		"Park#پارک",
		"Part#بخش",
		"Pass#عبور",
		"Paste#چسباندن",
		"Penguin#پنگوئن",
		"Phoenix#ققنوس",
		"Piano#پیانو",
		"Pie#پای",
		"Pilot#خلبان",
		"Pin#پین",
		"Pipe#لوله",
		"Pirate#دزد دریایی",
		"Pistol#تپانچه",
		"Pit#گودال",
		"Pitch#گام صدا",
		"Plane#هواپیما",
		"Plastic#پلاستیک",
		"Plate#بشقاب",
		"Platypus#پلاتوس",
		"Play#بازی",
		"Plot#طرح",
		"Point#نقطه",
		"Poison#سم",
		"Pole#قطب",
		"Police#پلیس",
		"Pool#استخر",
		"Port#بندر",
		"Post#پست",
		"Pound#پوند",
		"Press#مطبوعات",
		"Princess#شاهزاده",
		"Pumpkin#کدو تنبل",
		"Pupil#شاگرد",
		"Pyramid#هرم",
		"Queen#ملکه",
		"Rabbit#خرگوش",
		"Racket#راکت تنیس",
		"Ray#اشعه",
		"Revolution#انقلاب",
		"Ring#حلقه",
		"Robin#پرنده سینه سرخ",
		"Robot#ربات",
		"Rock#سنگ",
		"Rome#رم",
		"Root#ریشه",
		"Rose#گل سرخ",
		"Roulette#رولت",
		"Round#گرد",
		"Row#ردیف",
		"Ruler#خط کش",
		"Satellite#ماهواره",
		"Saturn#زحل",
		"Scale#ترازو",
		"School#مدرسه",
		"Scientist#دانشمند",
		"Scorpion#عقرب",
		"Screen#صفحه",
		"Scuba Diver#غواص",
		"Seal#مهر",
		"Server#سرور",
		"Shadow#سایه",
		"Shakespeare#شکسپیر",
		"Shark#کوسه",
		"Ship#کشتی",
		"Shoe#کفش",
		"Shop#فروشگاه",
		"Shot#شات",
		"Sink#فرو رفتن",
		"Skyscraper#آسمان خراش",
		"Slip#لیز خوردن",
		"Slug#حلزون",
		"Smuggler#قاچاقچی",
		"Snow#برف",
		"Snowman#آدم برفی",
		"Sock#جوراب",
		"Soldier#سرباز",
		"Soul#روح",
		"Sound#صدا",
		"Space#فضا",
		"Spell#هجی",
		"Spider#عنکبوت",
		"Spike#میخ",
		"Spine#ستون فقرات",
		"Spot#نقطه",
		"Spring#بهار",
		"Spy#جاسوسی",
		"Square#مربع",
		"Stadium#استادیوم",
		"Staff#کارکنان",
		"Star#ستاره",
		"State#حالت",
		"Stick#چوب باریک",
		"Stock#سهم",
		"Straw#نی",
		"Stream#جریان",
		"Strike#ضربه",
		"String#رشته",
		"Sub#زیر",
		"Suit#کت و شلوار",
		"Superhero#ابرقهرمان",
		"Swing#تاب",
		"Switch#تعویض",
		"Table#جدول",
		"Tablet#قرص",
		"Tag#برچسب",
		"Tail#دم",
		"Tap#ضربه",
		"Teacher#معلم",
		"Telescope#تلسکوپ",
		"Temple#معبد",
		"Theater#تئاتر",
		"Thief#دزد",
		"Thumb#شست",
		"Tick#تیک",
		"Tie#کراوات",
		"Time#زمان",
		"Tokyo#توکیو",
		"Tooth#دندان",
		"Torch#مشعل",
		"Tower#برج",
		"Track#مسیر",
		"Train#قطار",
		"Triangle#مثلث",
		"Trip#سفر",
		"Trunk#صندوق ماشین",
		"Tube#لوله",
		"Turkey#ترکیه",
		"Undertaker#مقاطعه کار کفن و دفن",
		"Unicorn#اسب تک شاخ",
		"Vacuum#خلاء",
		"Van#ون",
		"Vet#دامپزشک",
		"Wake#بیدار",
		"Wall#دیوار",
		"War#جنگ",
		"Washer#واشر",
		"Washington#واشنگتن",
		"Watch#تماشا",
		"Water#آب",
		"Wave#موج",
		"Web#وب",
		"Well#خوب",
		"Whale#وال",
		"Whip#شلاق",
		"Wind#باد",
		"Witch#جادوگر",
		"Worm#کرم",
		"Yard#حیاط"
	]
;

var defaultData = [
	"Africa",
	"Agent",
	"Air",
	"Alien",
	"Alps",
	"Amazon",
	"Ambulance",
	"America",
	"Angel",
	"Antarctica",
	"Apple",
	"Arm",
	"Atlantis",
	"Australia",
	"Aztec",
	"Back",
	"Ball",
	"Band",
	"Bank",
	"Bar",
	"Bark",
	"Bat",
	"Battery",
	"Beach",
	"Bear",
	"Beat",
	"Bed",
	"Beijing",
	"Bell",
	"Belt",
	"Berlin",
	"Bermuda",
	"Berry",
	"Bill",
	"Block",
	"Board",
	"Bolt",
	"Bomb",
	"Bond",
	"Boom",
	"Boot",
	"Bottle",
	"Bow",
	"Box",
	"Bridge",
	"Brush",
	"Buck",
	"Buffalo",
	"Bug",
	"Bugle",
	"Button",
	"Calf",
	"Canada",
	"Cap",
	"Capital",
	"Car",
	"Card",
	"Carrot",
	"Casino",
	"Cast",
	"Cat",
	"Cell",
	"Centaur",
	"Center",
	"Chair",
	"Change",
	"Charge",
	"Check",
	"Chest",
	"Chick",
	"China",
	"Chocolate",
	"Church",
	"Circle",
	"Cliff",
	"Cloak",
	"Club",
	"Code",
	"Cold",
	"Comic",
	"Compound",
	"Concert",
	"Conductor",
	"Contract",
	"Cook",
	"Copper",
	"Cotton",
	"Court",
	"Cover",
	"Crane",
	"Crash",
	"Cricket",
	"Cross",
	"Crown",
	"Cycle",
	"Czech",
	"Dance",
	"Date",
	"Day",
	"Death",
	"Deck",
	"Degree",
	"Diamond",
	"Dice",
	"Dinosaur",
	"Disease",
	"Doctor",
	"Dog",
	"Draft",
	"Dragon",
	"Dress",
	"Drill",
	"Drop",
	"Duck",
	"Dwarf",
	"Eagle",
	"Egypt",
	"Embassy",
	"Engine",
	"England",
	"Europe",
	"Eye",
	"Face",
	"Fair",
	"Fall",
	"Fan",
	"Fence",
	"Field",
	"Fighter",
	"Figure",
	"File",
	"Film",
	"Fire",
	"Fish",
	"Flute",
	"Fly",
	"Foot",
	"Force",
	"Forest",
	"Fork",
	"France",
	"Game",
	"Gas",
	"Genius",
	"Germany",
	"Ghost",
	"Giant",
	"Glass",
	"Glove",
	"Gold",
	"Grace",
	"Grass",
	"Greece",
	"Green",
	"Ground",
	"Ham",
	"Hand",
	"Hawk",
	"Head",
	"Heart",
	"Helicopter",
	"Himalayas",
	"Hole",
	"Hollywood",
	"Honey",
	"Hood",
	"Hook",
	"Horn",
	"Horse",
	"Horseshoe",
	"Hospital",
	"Hotel",
	"Ice",
	"Ice Cream",
	"India",
	"Iron",
	"Ivory",
	"Jack",
	"Jam",
	"Jet",
	"Jupiter",
	"Kangaroo",
	"Ketchup",
	"Key",
	"Kid",
	"King",
	"Kiwi",
	"Knife",
	"Knight",
	"Lab",
	"Lap",
	"Laser",
	"Lawyer",
	"Lead",
	"Lemon",
	"Leprechaun",
	"Life",
	"Light",
	"Limousine",
	"Line",
	"Link",
	"Lion",
	"Litter",
	"Loch Ness",
	"Lock",
	"Log",
	"London",
	"Luck",
	"Mail",
	"Mammoth",
	"Maple",
	"Marble",
	"March",
	"Mass",
	"Match",
	"Mercury",
	"Mexico",
	"Microscope",
	"Millionaire",
	"Mine",
	"Mint",
	"Missile",
	"Model",
	"Mole",
	"Moon",
	"Moscow",
	"Mount",
	"Mouse",
	"Mouth",
	"Mug",
	"Nail",
	"Needle",
	"Net",
	"New York",
	"Night",
	"Ninja",
	"Note",
	"Novel",
	"Nurse",
	"Nut",
	"Octopus",
	"Oil",
	"Olive",
	"Olympus",
	"Opera",
	"Orange",
	"Organ",
	"Palm",
	"Pan",
	"Pants",
	"Paper",
	"Parachute",
	"Park",
	"Part",
	"Pass",
	"Paste",
	"Penguin",
	"Phoenix",
	"Piano",
	"Pie",
	"Pilot",
	"Pin",
	"Pipe",
	"Pirate",
	"Pistol",
	"Pit",
	"Pitch",
	"Plane",
	"Plastic",
	"Plate",
	"Platypus",
	"Play",
	"Plot",
	"Point",
	"Poison",
	"Pole",
	"Police",
	"Pool",
	"Port",
	"Post",
	"Pound",
	"Press",
	"Princess",
	"Pumpkin",
	"Pupil",
	"Pyramid",
	"Queen",
	"Rabbit",
	"Racket",
	"Ray",
	"Revolution",
	"Ring",
	"Robin",
	"Robot",
	"Rock",
	"Rome",
	"Root",
	"Rose",
	"Roulette",
	"Round",
	"Row",
	"Ruler",
	"Satellite",
	"Saturn",
	"Scale",
	"School",
	"Scientist",
	"Scorpion",
	"Screen",
	"Scuba Diver",
	"Seal",
	"Server",
	"Shadow",
	"Shakespeare",
	"Shark",
	"Ship",
	"Shoe",
	"Shop",
	"Shot",
	"Sink",
	"Skyscraper",
	"Slip",
	"Slug",
	"Smuggler",
	"Snow",
	"Snowman",
	"Sock",
	"Soldier",
	"Soul",
	"Sound",
	"Space",
	"Spell",
	"Spider",
	"Spike",
	"Spine",
	"Spot",
	"Spring",
	"Spy",
	"Square",
	"Stadium",
	"Staff",
	"Star",
	"State",
	"Stick",
	"Stock",
	"Straw",
	"Stream",
	"Strike",
	"String",
	"Sub",
	"Suit",
	"Superhero",
	"Swing",
	"Switch",
	"Table",
	"Tablet",
	"Tag",
	"Tail",
	"Tap",
	"Teacher",
	"Telescope",
	"Temple",
	"Theater",
	"Thief",
	"Thumb",
	"Tick",
	"Tie",
	"Time",
	"Tokyo",
	"Tooth",
	"Torch",
	"Tower",
	"Track",
	"Train",
	"Triangle",
	"Trip",
	"Trunk",
	"Tube",
	"Turkey",
	"Undertaker",
	"Unicorn",
	"Vacuum",
	"Van",
	"Vet",
	"Wake",
	"Wall",
	"War",
	"Washer",
	"Washington",
	"Watch",
	"Water",
	"Wave",
	"Web",
	"Well",
	"Whale",
	"Whip",
	"Wind",
	"Witch",
	"Worm",
	"Yard"
];

var spanishData = [
	"Aguila",
	"Aguja",
	"Agujero",
	"Aire",
	"Alemania",
	"Algodun",
	"Alianza",
	"Alpes",
	"Ambulancia",
	"America",
	"Angel",
	"Anillo",
	"Antartida",
	"Antorcha",
	"Araoa",
	"Archivo",
	"Arco",
	"Argentina",
	"Articulo",
	"As",
	"Atlantida",
	"Azteca",
	"Baile",
	"Bala",
	"Ballena",
	"Banco",
	"Banda",
	"Baoo",
	"Barco",
	"Barra",
	"Bateria",
	"Berlin",
	"Bermudas",
	"Bicho",
	"Blanco",
	"Bloque",
	"Boca",
	"Bola",
	"Bolsa",
	"Bomba",
	"Bosque",
	"Bota",
	"Botella",
	"Botun",
	"Brazo",
	"Bruja",
	"Caballero",
	"Caballo",
	"Cabeza",
	"Cabina",
	"Cabo",
	"Cactus",
	"Cadena",
	"Caja",
	"Cama",
	"Camara",
	"Cambio",
	"Campana",
	"Campo",
	"Canal",
	"Canguro",
	"Canto",
	"Caoa",
	"Capa",
	"Capital",
	"Caqui",
	"Cara",
	"Caravana",
	"Carga",
	"Carrera",
	"Carro",
	"Carta",
	"Casco",
	"Casino",
	"Caza",
	"Cementerio",
	"Centauro",
	"Centro",
	"Cervantes",
	"Checo",
	"Chocolate",
	"Choque",
	"Chuleta",
	"Cientifico",
	"Cinta",
	"Cinturun",
	"Circulo",
	"Clase",
	"Coche",
	"Cocinero",
	"Coco",
	"Cudigo",
	"Cola",
	"Culera",
	"Columna",
	"Cometa",
	"Compas",
	"Concierto",
	"Conejo",
	"Contrabandista",
	"Copa",
	"Corazun",
	"Corneta",
	"Corona",
	"Corredor",
	"Corriente",
	"Corte",
	"Cresta",
	"Cromo",
	"Cruz",
	"Cuadro",
	"Cuarto",
	"Cubierta",
	"Cubo",
	"Cuchillo",
	"Cuello",
	"Cuerda",
	"Cuerno",
	"Cura",
	"Dama",
	"Delta",
	"Destino",
	"Dia",
	"Diamante",
	"Diana",
	"Diario",
	"Diente",
	"Dinosaurio",
	"Disco",
	"Don",
	"Dragun",
	"Duende",
	"Egipto",
	"Embajada",
	"Emperador",
	"Enano",
	"Enfermedad",
	"Enfermera",
	"Enlace",
	"Escorpiun",
	"Espacio",
	"Espia",
	"Estaciun",
	"Estadio",
	"Estado",
	"Estrella",
	"Estudio",
	"Etiqueta",
	"Europa",
	"Extraterrestre",
	"Falda",
	"Fantasma",
	"Faro",
	"Ficha",
	"Fiesta",
	"Figura",
	"Flauta",
	"Flecha",
	"Foso",
	"Francia",
	"Frente",
	"Fuego",
	"Fuente",
	"Fuerza",
	"Furgoneta",
	"Gancho",
	"Gato",
	"Genio",
	"Gigante",
	"Golfo",
	"Golondrina",
	"Golpe",
	"Goma",
	"Gundola",
	"Gota",
	"Grado",
	"Granada",
	"Grano",
	"Grecia",
	"Grifo",
	"Guante",
	"Guardia",
	"Guerra",
	"Gusano",
	"Helado",
	"Helicuptero",
	"Hielo",
	"Hierba",
	"Hoja",
	"Hollywood",
	"Horca",
	"Hospital",
	"Hotel",
	"Iglesia",
	"Iman",
	"India",
	"Indice",
	"Inglaterra",
	"Italia",
	"Jarra",
	"Judia",
	"Juicio",
	"Kiwi",
	"Ladrun",
	"Lago Ness",
	"Laser",
	"Latigo",
	"Lengua",
	"Leun",
	"Libra",
	"Lima",
	"Limusina",
	"Linea",
	"Lista",
	"Llama",
	"Llave",
	"Lomo",
	"Londres",
	"Luna",
	"Luz",
	"Maestro",
	"Magia",
	"Malta",
	"Mancha",
	"Mando",
	"Manga",
	"Mango",
	"Mano",
	"Manzana",
	"Maoana",
	"Marca",
	"Marcha",
	"Marfil",
	"Masa",
	"Mascara",
	"Mazo",
	"Medico",
	"Mercurio",
	"Mesa",
	"Metro",
	"Mexico",
	"Micro",
	"Microscopio",
	"Mielo",
	"Millonario",
	"Mina",
	"Misil",
	"Modelo",
	"Mudulo",
	"Monitor",
	"Mono",
	"Mortero",
	"Mosc˙",
	"Motor",
	"Muelle",
	"Muerte",
	"Muoeca",
	"Muro",
	"Naranja",
	"Nave",
	"Nieve",
	"Nilo",
	"Ninja",
	"Noche",
	"Nota",
	"Nudo",
	"Nueva York",
	"Obra",
	"Ojo",
	"Ola",
	"Olimpo",
	"Upera",
	"Orden",
	"Urgano",
	"Ornitorrinco",
	"Oro",
	"Oso",
	"Pala",
	"Palma",
	"Pantalla",
	"Papel",
	"Paracaidas",
	"Pase",
	"Paso",
	"Pasta",
	"Pastel",
	"Pavo",
	"Pekin",
	"Pelicula",
	"Pelotun",
	"Pendiente",
	"Perro",
	"Pez",
	"Pico",
	"Pie",
	"Pieza",
	"Pila",
	"Piloto",
	"Pincho",
	"Ping¸ino",
	"Pinta",
	"Pioa",
	"Piramide",
	"Pirata",
	"Pista",
	"Pistola",
	"Placa",
	"Plano",
	"Planta",
	"Platano",
	"Playa",
	"Plomo",
	"Pluma",
	"Policia",
	"Polo",
	"Portada",
	"Portero",
	"Potro",
	"Prensa",
	"Prima",
	"Princesa",
	"Puente",
	"Puerto",
	"Pulpo",
	"Pulso",
	"Punta",
	"Punto",
	"Radio",
	"Rascacielos",
	"Ratun",
	"Rayo",
	"Red",
	"Regla",
	"Reina",
	"Reserva",
	"Revoluciun",
	"Rey",
	"Robot",
	"Rojo",
	"Roma",
	"Ronda",
	"Rosa",
	"Ruleta",
	"Sable",
	"Sa"
];
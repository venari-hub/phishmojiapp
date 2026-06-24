const songData = [
  { "title": "46 Days", "aliases": ["46 days"], "emojis": ["4️⃣6️⃣🗓️", "🔥🏃‍♂️💨"] },
  { "title": "555", "aliases": ["555"], "emojis": ["5️⃣5️⃣5️⃣"] },
  { "title": "A Song I Heard the Ocean Sing", "aliases": ["a song i heard the ocean sing", "asihtos"], "emojis": ["🎵👂🌊🎤", "🌊👻🎸"] },
  { "title": "AC/DC Bag", "aliases": ["ac/dc bag", "acdc bag", "bag"], "emojis": ["⚡🔌👜", "🤖🎫🎒", "🧠💥"] },
  { "title": "Access Me", "aliases": ["access me"], "emojis": ["🔓🙋‍♂️"] },
  { "title": "Acoustic Army", "aliases": ["acoustic army"], "emojis": ["🎸🪖"] },
  { "title": "All of These Dreams", "aliases": ["all of these dreams"], "emojis": ["♾️💤💭"] },
  { "title": "All Things Reconsidered", "aliases": ["all things reconsidered", "atr"], "emojis": ["🤔🔄"] },
  { "title": "Alumni Blues", "aliases": ["alumni blues"], "emojis": ["🎓🔵🎵", "👨‍🎓📜🚫"] },
  { "title": "Amidst the Peals of Laughter", "aliases": ["amidst the peals of laughter"], "emojis": ["😂🔔"] },
  { "title": "Anarchy", "aliases": ["anarchy"], "emojis": ["🛑💣"] },
  { "title": "And So To Bed", "aliases": ["and so to bed"], "emojis": ["➕➡️🛏️"] },
  { "title": "Anything But Me", "aliases": ["anything but me"], "emojis": ["🤷‍♂️🚫🙋‍♂️"] },
  { "title": "Army of One", "aliases": ["army of one"], "emojis": ["🪖1️⃣"] },
  { "title": "Ass Handed", "aliases": ["ass handed"], "emojis": ["🍑🤲", "🗓️🍑🤲"] },
  { "title": "Axilla", "aliases": ["axilla"], "emojis": ["🪓💪", "🔦💡👁️"] },
  { "title": "Axilla (Part II)", "aliases": ["axilla (part ii)", "axilla part ii", "axilla part 2", "axilla 2"], "emojis": ["🪓💪2️⃣"] },
  { "title": "Babylon is Burning", "aliases": ["babylon is burning"], "emojis": ["🏛️🔥"] },
  { "title": "Band/Crew Football Theme Song", "aliases": ["band/crew football theme song", "band crew football theme song"], "emojis": ["🎸👷‍♂️🏈🎵"] },
  { "title": "Bathtub Gin", "aliases": ["bathtub gin", "gin"], "emojis": ["🛁🍸", "🛁👨‍🎺", "👑🛀"] },
  { "title": "Big Black Furry Creature from Mars", "aliases": ["big black furry creature from mars", "bbfcfm"], "emojis": ["🐘⬛🐻👽", "🤬🏃‍♂️💨"] },
  { "title": "Billy Breathes", "aliases": ["billy breathes"], "emojis": ["👦😮‍💨"] },
  { "title": "Birds of a Feather", "aliases": ["birds of a feather", "boatf", "birds"], "emojis": ["🐦🪶", "🧑‍🤝‍🧑🦅"] },
  { "title": "Bittersweet Motel", "aliases": ["bittersweet motel"], "emojis": ["🍋🍫🏨", "🍕💸💒"] },
  { "title": "Black-Eyed Katy", "aliases": ["black-eyed katy", "black eyed katy", "bek"], "emojis": ["👁️⬛👩", "💃🕺🎵"] },
  { "title": "Blaze On", "aliases": ["blaze on"], "emojis": ["🔥🔛", "🌿💨🎸"] },
  { "title": "Bliss", "aliases": ["bliss"], "emojis": ["😌✨"] },
  { "title": "BOTT", "aliases": ["back on the train", "bott"], "emojis": ["🔙🔛🚂"] },
  { "title": "Bouncing Around the Room", "aliases": ["bouncing around the room", "bouncing", "batr"], "emojis": ["🏀🔁🚪", "👩💤💭"] },
  { "title": "Breath and Burning", "aliases": ["breath and burning"], "emojis": ["😮‍💨➕🔥", "🏖️🔥🌊"] },
  { "title": "Brian and Robert", "aliases": ["brian and robert"], "emojis": ["👨‍🦰🤝👨‍🦳", "📺👦😔"] },
  { "title": "Brother", "aliases": ["brother"], "emojis": ["👦👦", "🛁🏄‍♂️"] },
  { "title": "Buffalo Bill", "aliases": ["buffalo bill"], "emojis": ["🦬💵", "🪵🪓👨"] },
  { "title": "Bundle of Joy", "aliases": ["bundle of joy"], "emojis": ["📦👶😊"] },
  { "title": "Buried Alive", "aliases": ["buried alive"], "emojis": ["⚰️🧟‍♂️"] },
  { "title": "Bye Bye Foot", "aliases": ["bye bye foot"], "emojis": ["👋👋🦶"] },
  { "title": "Camel Walk", "aliases": ["camel walk"], "emojis": ["🐪🚶‍♂️"] },
  { "title": "Can't Always Listen", "aliases": ["can't always listen", "cant always listen"], "emojis": ["🚫♾️👂"] },
  { "title": "Carini", "aliases": ["carini"], "emojis": ["😠👨‍🦲", "👨‍🦲🥔🗣️", "🏃‍♂️💨👞"] },
  { "title": "Carolina in the Morning", "aliases": ["carolina in the morning"], "emojis": ["👧🌅"] },
  { "title": "Cars Trucks Buses", "aliases": ["cars trucks buses", "ctb"], "emojis": ["🚗🚚🚌"] },
  { "title": "Casual Enlightenment", "aliases": ["casual enlightenment"], "emojis": ["👕💡🧘‍♂️"] },
  { "title": "Catapult", "aliases": ["catapult"], "emojis": ["🏰☄️"] },
  { "title": "Cavern", "aliases": ["cavern"], "emojis": ["🦇🕳️", "👟💩⚠️", "🥩🍴"] },
  { "title": "Chalk Dust Torture", "aliases": ["chalk dust torture", "chalkdust torture", "chalkdust", "cdt"], "emojis": ["🖍️💨🧗‍♂️", "🚫🏫🎸"] },
  { "title": "Chalk Dust Torture Reprise", "aliases": ["chalk dust torture reprise", "chalkdust torture reprise", "chalkdust reprise", "cdt reprise", "cdtr"], "emojis": ["🖍️💨🧗‍♂️🔁"] },
  { "title": "Character Zero", "aliases": ["character zero", "zero"], "emojis": ["🎭0️⃣", "👨‍🏫🗣️0️⃣"] },
  { "title": "Clear Your Mind", "aliases": ["clear your mind"], "emojis": ["🧽🧠"] },
  { "title": "Clod", "aliases": ["clod"], "emojis": ["🪨🌱"] },
  { "title": "Colonel Forbin's Ascent", "aliases": ["colonel forbin's ascent", "colonel forbins ascent", "colonel forbin", "forbins ascent", "forbin"], "emojis": ["🎖️🧗‍♂️⛰️", "🦅📜🚪"] },
  { "title": "Contact", "aliases": ["contact"], "emojis": ["🚗🛣️", "🧑‍🤝‍🧑🚘"] },
  { "title": "Cool Amber and Mercury", "aliases": ["cool amber and mercury"], "emojis": ["🆒🟠🌡️"] },
  { "title": "Costume Contest", "aliases": ["costume contest"], "emojis": ["🎃🏆"] },
  { "title": "Crowd Control", "aliases": ["crowd control"], "emojis": ["🧑‍🤝‍🧑🚧"] },
  { "title": "Dancing in Midair", "aliases": ["dancing in midair"], "emojis": ["💃☁️"] },
  { "title": "Dark Puddle", "aliases": ["dark puddle"], "emojis": ["⬛💧"] },
  { "title": "Dave's Energy Guide", "aliases": ["dave's energy guide", "daves energy guide", "deg"], "emojis": ["👨⚡📖"] },
  { "title": "David Bowie", "aliases": ["david bowie", "bowie"], "emojis": ["👨‍🎤⚡👩‍🎤", "🔪🌌👨‍🚀"] },
  { "title": "Dear Mrs. Reagan", "aliases": ["dear mrs. reagan", "dear mrs reagan"], "emojis": ["✉️👵🇺🇸"] },
  { "title": "Death Don't Hurt Very Long", "aliases": ["death don't hurt very long", "death dont hurt very long", "ddhvl"], "emojis": ["💀🚫🤕⏳"] },
  { "title": "Demand", "aliases": ["demand"], "emojis": ["🗣️‼️", "🚗💥🎶"] },
  { "title": "Destiny Unbound", "aliases": ["destiny unbound"], "emojis": ["🔮⛓️‍💥", "🛣️🚗🎸"] },
  { "title": "Devotion to a Dream", "aliases": ["devotion to a dream"], "emojis": ["🙏💭"] },
  { "title": "Dinner and a Movie", "aliases": ["dinner and a movie", "daam"], "emojis": ["🍽️➕🍿🎥", "👩‍🍳🔥"] },
  { "title": "Divided Sky", "aliases": ["divided sky", "the divided sky"], "emojis": ["➗🌌", "🌬️⛰️🪨", "🦅🌅"] },
  { "title": "Dog Faced Boy", "aliases": ["dog faced boy"], "emojis": ["🐶👦"] },
  { "title": "Dog Gone Dog", "aliases": ["dog gone dog"], "emojis": ["🐕💨🐕"] },
  { "title": "Dog Log", "aliases": ["dog log"], "emojis": ["🐶🪵"] },
  { "title": "Dogs Stole Things", "aliases": ["dogs stole things"], "emojis": ["🐕🥷📱"] },
  { "title": "Don't Doubt Me", "aliases": ["don't doubt me", "dont doubt me"], "emojis": ["🚫🤨🙋‍♂️"] },
  { "title": "Don't Get Me Wrong", "aliases": ["don't get me wrong", "dont get me wrong"], "emojis": ["🚫🙅‍♂️❌"] },
  { "title": "Down with Disease", "aliases": ["down with disease", "disease", "dwd"], "emojis": ["⬇️🤒", "🛏️🕺🏥"] },
  { "title": "Dr. Gabel", "aliases": ["dr. gabel", "dr gabel"], "emojis": ["👨‍⚕️🩺"] },
  { "title": "Driver", "aliases": ["driver"], "emojis": ["🚘👨‍✈️"] },
  { "title": "Egg in a Hole", "aliases": ["egg in a hole"], "emojis": ["🥚🕳️"] },
  { "title": "Eliza", "aliases": ["eliza"], "emojis": ["👩🎶"] },
  { "title": "End of Session", "aliases": ["end of session"], "emojis": ["🛑🎸"] },
  { "title": "Esther", "aliases": ["esther"], "emojis": ["🎪👧", "👧🧑‍🦱🎎", "☁️👼"] },
  { "title": "Evening Song", "aliases": ["evening song"], "emojis": ["🌆🎵"] },
  { "title": "Everything is Hollow", "aliases": ["everything is hollow"], "emojis": ["♾️🕳️"] },
  { "title": "Faht", "aliases": ["faht"], "emojis": ["🌬️🎸", "🌲🎶"] },
  { "title": "Farmhouse", "aliases": ["farmhouse"], "emojis": ["🚜🏠", "🌌🌟🛖"] },
  { "title": "Fast Enough for You", "aliases": ["fast enough for you", "fefy"], "emojis": ["🏎️💨❓"] },
  { "title": "Fee", "aliases": ["fee"], "emojis": ["🦦⛵", "🐒✂️🐈", "🪷💆‍♂️"] },
  { "title": "Fikus", "aliases": ["fikus"], "emojis": ["🪴"] },
  { "title": "Fire Up the Ganja", "aliases": ["fire up the ganja"], "emojis": ["🔥🥦💨"] },
  { "title": "Fishman's Gull Poem", "aliases": ["fishman's gull poem", "fishmans gull poem"], "emojis": ["🐟👨🐦📜"] },
  { "title": "Flat Fee", "aliases": ["flat fee"], "emojis": ["➖💰"] },
  { "title": "Fling Your Head", "aliases": ["fling your head"], "emojis": ["🤾‍♂️🗣️"] },
  { "title": "Flip", "aliases": ["flip"], "emojis": ["🔄"] },
  { "title": "Fluff's Travels", "aliases": ["fluff's travels", "fluffs travels"], "emojis": ["☁️🧳"] },
  { "title": "Fluffhead", "aliases": ["fluffhead", "fluff"], "emojis": ["☁️🗣️", "💊🕺🤯", "🏦👨‍⚕️"] },
  { "title": "Fly Famous Mockingbird", "aliases": ["fly famous mockingbird", "famous mockingbird", "mockingbird", "ffm"], "emojis": ["🪽🌟🐦", "🦅📜🏰"] },
  { "title": "Foam", "aliases": ["foam"], "emojis": ["🫧🍺", "⬇️🕳️🪨"] },
  { "title": "Fooled by Images", "aliases": ["fooled by images"], "emojis": ["🤡🖼️"] },
  { "title": "Frankie Says", "aliases": ["frankie says"], "emojis": ["🗣️🧍‍♂️", "😌☁️"] },
  { "title": "Free", "aliases": ["free"], "emojis": ["🕊️🔓", "🚢🌊⛓️‍💥"] },
  { "title": "Freeworld", "aliases": ["freeworld"], "emojis": ["🕊️🌍"] },
  { "title": "Friday", "aliases": ["friday"], "emojis": ["📅🎉"] },
  { "title": "Friends", "aliases": ["friends"], "emojis": ["👯‍♂️", "🍄👽"] },
  { "title": "Fuck Your Face", "aliases": ["fuck your face", "fyf"], "emojis": ["🖕🤬", "🎸🎸🎸"] },
  { "title": "Fuckerpants", "aliases": ["fuckerpants"], "emojis": ["🤬👖"] },
  { "title": "Fuego", "aliases": ["fuego"], "emojis": ["🔥", "📖🏰🛡️"] },
  { "title": "Gaul Swerves and the Rest is Everything Else", "aliases": ["gaul swerves and the rest is everything else"], "emojis": ["🇫🇷↪️♾️"] },
  { "title": "Get Back on the Train", "aliases": ["get back on the train", "back on the train", "bott"], "emojis": ["🔙🔛🚂", "🍷🕰️🚂"] },
  { "title": "Get More Down", "aliases": ["get more down"], "emojis": ["⬇️➕⬇️"] },
  { "title": "Ghost", "aliases": ["ghost"], "emojis": ["👻", "🚫🧠👻"] },
  { "title": "Glide", "aliases": ["glide"], "emojis": ["⛸️", "😊🙌🎪"] },
  { "title": "Glide II", "aliases": ["glide ii", "glide 2"], "emojis": ["⛸️2️⃣"] },
  { "title": "Golgi Apparatus", "aliases": ["golgi apparatus", "golgi"], "emojis": ["🔬🧬", "🎫✋"] },
  { "title": "Grind", "aliases": ["grind"], "emojis": ["⚙️🦷", "🔢👨‍👨‍👦‍👦🗓️"] },
  { "title": "Guelah Papyrus", "aliases": ["guelah papyrus", "guelah"], "emojis": ["💃📜", "🕷️🕸️"] },
  { "title": "Gumbo", "aliases": ["gumbo"], "emojis": ["🍲🦐", "🐕🐸"] },
  { "title": "Guy Forget", "aliases": ["guy forget"], "emojis": ["🤷‍♂️🧠", "👻🎵"] },
  { "title": "Guyute", "aliases": ["guyute"], "emojis": ["🐷👹", "🐖💃"] },
  { "title": "Ha Ha Ha", "aliases": ["ha ha ha"], "emojis": ["😂😂😂"] },
  { "title": "Halfway to the Moon", "aliases": ["halfway to the moon"], "emojis": ["🌗🚀"] },
  { "title": "Hall in Solace", "aliases": ["hall in solace"], "emojis": ["🏛️😔"] },
  { "title": "Halley's Comet", "aliases": ["halley's comet", "halleys comet", "halley"], "emojis": ["☄️🔭", "🍝👩‍🦰", "🔴🎸"] },
  { "title": "Harpua", "aliases": ["harpua"], "emojis": ["🐕🐈💀", "👨👴📖", "🪐🐷"] },
  { "title": "Harry Hood", "aliases": ["harry hood", "hood"], "emojis": ["👦🧥", "🥛👍", "🏔️🌞"] },
  { "title": "Home", "aliases": ["home"], "emojis": ["🏠", "🤯🌪️🏠"] },
  { "title": "Horn", "aliases": ["horn"], "emojis": ["🎺", "🚗💔🎸"] },
  { "title": "Human Nature", "aliases": ["human nature"], "emojis": ["🧍‍♂️🌿"] },
  { "title": "I Always Wanted It This Way", "aliases": ["i always wanted it this way"], "emojis": ["🙋‍♂️♾️🙏🛣️"] },
  { "title": "I Am Hydrogen", "aliases": ["i am hydrogen", "hydrogen"], "emojis": ["🙋‍♂️🧪", "💧🎈"] },
  { "title": "I Am in Miami", "aliases": ["i am in miami"], "emojis": ["🙋‍♂️🌴🏖️"] },
  { "title": "I Been Around", "aliases": ["i been around"], "emojis": ["🙋‍♂️🔄🌎"] },
  { "title": "I Didn't Know", "aliases": ["i didn't know", "i didnt know", "idk"], "emojis": ["🤷‍♂️🚫🧠", "👵👗🎸"] },
  { "title": "I Don't Care", "aliases": ["i don't care", "i dont care"], "emojis": ["🤷‍♂️🚫❤️"] },
  { "title": "I Will Set You Free", "aliases": ["i will set you free"], "emojis": ["🙋‍♂️🔓🕊️"] },
  { "title": "I've Turned Bad", "aliases": ["i've turned bad", "ive turned bad"], "emojis": ["🙋‍♂️➡️😈"] },
  { "title": "Icculus", "aliases": ["icculus"], "emojis": ["📖👓🗻", "👨‍🏫⛰️"] },
  { "title": "Idea", "aliases": ["idea"], "emojis": ["💡"] },
  { "title": "If I Could", "aliases": ["if i could"], "emojis": ["🤔💭", "🎻😢"] },
  { "title": "In a Hole", "aliases": ["in a hole"], "emojis": ["⬇️🕳️"] },
  { "title": "In an Intensive Care Unit", "aliases": ["in an intensive care unit"], "emojis": ["🏥🛌"] },
  { "title": "In The Good Old Summer Time", "aliases": ["in the good old summer time", "in the good old summertime"], "emojis": ["😎☀️⏳"] },
  { "title": "Infinite", "aliases": ["infinite"], "emojis": ["♾️"] },
  { "title": "Intro", "aliases": ["intro"], "emojis": ["🎬👋"] },
  { "title": "It's Ice", "aliases": ["it's ice", "its ice"], "emojis": ["🧊❄️", "🪞🕺⛸️"] },
  { "title": "Jennifer Dances", "aliases": ["jennifer dances"], "emojis": ["👩💃", "🍳🥓💃"] },
  { "title": "Joy", "aliases": ["joy"], "emojis": ["😂❤️", "👧☁️🙏"] },
  { "title": "Julius", "aliases": ["julius"], "emojis": ["🏛️👑", "🛑🚶‍♂️🔙"] },
  { "title": "Jägermeister Song", "aliases": ["jägermeister song", "jagermeister song", "jager song"], "emojis": ["🦌🥃🎵"] },
  { "title": "Keeping It Real", "aliases": ["keeping it real"], "emojis": ["💯🙌"] },
  { "title": "Keyboard Army", "aliases": ["keyboard army"], "emojis": ["🎹🪖"] },
  { "title": "Keyboard Cavalry", "aliases": ["keyboard cavalry"], "emojis": ["🎹🐎"] },
  { "title": "Kill Devil Falls", "aliases": ["kill devil falls", "kdf"], "emojis": ["🔪😈🌊", "🍻📝🚪"] },
  { "title": "Killer Joe", "aliases": ["killer joe"], "emojis": ["🔪👨"] },
  { "title": "Knuckle Bone Broth Avenue", "aliases": ["knuckle bone broth avenue"], "emojis": ["👊🦴🍲🛣️"] },
  { "title": "Kung", "aliases": ["kung"], "emojis": ["🏌️‍♂️🛒🏃‍♂️", "🗣️🧍‍♂️🏃‍♂️"] },
  { "title": "Lawn Boy", "aliases": ["lawn boy"], "emojis": ["🪴👦", "🎤🤵‍♂️👔", "👃🌱"] },
  { "title": "Leaves", "aliases": ["leaves"], "emojis": ["🍂🍃"] },
  { "title": "Lengthwise", "aliases": ["lengthwise"], "emojis": ["📏↕️", "🛏️📏🎶"] },
  { "title": "Leprechaun", "aliases": ["leprechaun"], "emojis": ["🍀🧙‍♂️"] },
  { "title": "Let's Go", "aliases": ["let's go", "lets go"], "emojis": ["🟢🚶‍♂️"] },
  { "title": "Letter to Jimmy Page", "aliases": ["letter to jimmy page"], "emojis": ["✉️🎸"] },
  { "title": "Life Saving Gun", "aliases": ["life saving gun"], "emojis": ["🛟🔫"] },
  { "title": "Lifeboy", "aliases": ["lifeboy"], "emojis": ["🛟👦", "✝️🚫💩"] },
  { "title": "Limb By Limb", "aliases": ["limb by limb", "lbl"], "emojis": ["🪵🪓🪵", "🧗‍♂️🌳🦅"] },
  { "title": "Llama", "aliases": ["llama"], "emojis": ["🦙", "🔫🦙"] },
  { "title": "Love Is What We Are", "aliases": ["love is what we are"], "emojis": ["❤️🟰🧑‍🤝‍🧑"] },
  { "title": "Lucy Had A Lumpy Head", "aliases": ["lucy had a lumpy head"], "emojis": ["👧🥔🗣️"] },
  { "title": "Lushington", "aliases": ["lushington"], "emojis": ["🍻👨"] },
  { "title": "Magilla", "aliases": ["magilla"], "emojis": ["🦍🎩"] },
  { "title": "Makisupa Policeman", "aliases": ["makisupa policeman", "makisupa"], "emojis": ["🌴👮‍♂️", "🐖👮‍♂️🌿"] },
  { "title": "Mallory", "aliases": ["mallory"], "emojis": ["👧"] },
  { "title": "Marijuana Hot Chocolate", "aliases": ["marijuana hot chocolate"], "emojis": ["🌿☕🍫"] },
  { "title": "Martian Monster", "aliases": ["martian monster"], "emojis": ["👽👹", "🚀💥🕺"] },
  { "title": "Maze", "aliases": ["maze"], "emojis": ["🌀🏃‍♂️", "🚫🚪🏃‍♂️"] },
  { "title": "McGrupp and the Watchful Hosemasters", "aliases": ["mcgrupp and the watchful hosemasters", "mcgrupp"], "emojis": ["🐶👁️💦👨‍🚒", "🐕🏰🧙‍♂️"] },
  { "title": "Meat", "aliases": ["meat"], "emojis": ["🥩", "👻🍖"] },
  { "title": "Meatstick", "aliases": ["meatstick"], "emojis": ["🥩🥢", "🇯🇲🌭", "🧠💥"] },
  { "title": "Melt", "aliases": ["melt", "split open and melt", "soam"], "emojis": ["🫠", "🔪🫠"] },
  { "title": "Mercury", "aliases": ["mercury"], "emojis": ["🪐", "🐟🎣🕸️"] },
  { "title": "Metal Bagel Death", "aliases": ["metal bagel death"], "emojis": ["🤘🥯💀"] },
  { "title": "Mexican Cousin", "aliases": ["mexican cousin"], "emojis": ["🇲🇽👨‍👦", "🥃🌮🤢"] },
  { "title": "Mike's Song", "aliases": ["mike's song", "mikes song", "mikes"], "emojis": ["🎸👨🎵", "🚫🚪🔫"] },
  { "title": "Miss You", "aliases": ["miss you"], "emojis": ["😢👉", "🪦🚶‍♂️"] },
  { "title": "MMGAMOIO", "aliases": ["mmgamoio"], "emojis": ["🧠🧠"] },
  { "title": "Mock Song", "aliases": ["mock song"], "emojis": ["🤡🎵", "🪞🗣️"] },
  { "title": "More", "aliases": ["more"], "emojis": ["➕➕", "💖✨🔊"] },
  { "title": "Mound", "aliases": ["mound"], "emojis": ["⛰️", "👴🧊🧣"] },
  { "title": "Mull", "aliases": ["mull"], "emojis": ["🤔💭"] },
  { "title": "My Friend, My Friend", "aliases": ["my friend, my friend", "my friend my friend", "mfmf"], "emojis": ["👨‍🤝‍👨🔪", "🔪🩸🎻"] },
  { "title": "My Left Toe", "aliases": ["my left toe"], "emojis": ["🙋‍♂️⬅️🦶"] },
  { "title": "My Problem Right There", "aliases": ["my problem right there"], "emojis": ["🙋‍♂️⚠️👉"] },
  { "title": "My Sweet One", "aliases": ["my sweet one"], "emojis": ["🍬1️⃣"] },
  { "title": "N2O", "aliases": ["n2o", "no2"], "emojis": ["🎈😂"] },
  { "title": "Never", "aliases": ["never"], "emojis": ["🚫🙅‍♂️"] },
  { "title": "NICU", "aliases": ["nicu"], "emojis": ["🏥👶", "⏪🕰️👶"] },
  { "title": "No Dogs Allowed", "aliases": ["no dogs allowed"], "emojis": ["🚫🐕"] },
  { "title": "No Men In No Man's Land", "aliases": ["no men in no man's land", "no men in no mans land", "nminml"], "emojis": ["🚫🧍‍♂️🏜️", "⛺🚶‍♂️🐪"] },
  { "title": "Nowhere Fast", "aliases": ["nowhere fast"], "emojis": ["🚫🗺️🏎️"] },
  { "title": "Oblivious Fool", "aliases": ["oblivious fool"], "emojis": ["🤤🤡"] },
  { "title": "Ocelot", "aliases": ["ocelot"], "emojis": ["🐆", "☀️🐾"] },
  { "title": "Olivia's Pool", "aliases": ["olivia's pool", "olivias pool"], "emojis": ["👧🏊‍♀️"] },
  { "title": "Party Time", "aliases": ["party time"], "emojis": ["🎉🥳"] },
  { "title": "Passing Through", "aliases": ["passing through"], "emojis": ["🚶‍♂️➡️"] },
  { "title": "Piano Duet", "aliases": ["piano duet"], "emojis": ["🎹🎹"] },
  { "title": "Pigtail", "aliases": ["pigtail"], "emojis": ["👱‍♀️🎀"] },
  { "title": "Piper", "aliases": ["piper"], "emojis": ["🪱🔴", "🍷⛵🎶"] },
  { "title": "Play by Play", "aliases": ["play by play"], "emojis": ["🎙️🏈"] },
  { "title": "Poor Heart", "aliases": ["poor heart"], "emojis": ["💔", "🥷❤️"] },
  { "title": "Possum", "aliases": ["possum"], "emojis": ["🐭🛣️", "🚗💥🐭"] },
  { "title": "Prep School Hippie", "aliases": ["prep school hippie"], "emojis": ["👔☮️"] },
  { "title": "Prince Caspian", "aliases": ["prince caspian", "caspian"], "emojis": ["👑🌊", "🗡️🌊🛶"] },
  { "title": "Punch You in the Eye", "aliases": ["punch you in the eye", "pyite", "punch"], "emojis": ["👊👉👁️", "🛶🌋👊"] },
  { "title": "Quadrophonic Toppling", "aliases": ["quadrophonic toppling"], "emojis": ["4️⃣🔊🤸‍♂️"] },
  { "title": "Reba", "aliases": ["reba"], "emojis": ["👩‍🦰🥩🛁", "🥥🫙💋", "🛒🛍️"] },
  { "title": "Rescue Squad", "aliases": ["rescue squad"], "emojis": ["🚑👨‍🚒"] },
  { "title": "Revolution", "aliases": ["revolution"], "emojis": ["🔄✊"] },
  { "title": "Rhombus Narration", "aliases": ["rhombus narration", "the rhombus"], "emojis": ["🔷🗣️"] },
  { "title": "Rift", "aliases": ["rift"], "emojis": ["⚡🪨", "🛌🌩️💔"] },
  { "title": "Rock A William", "aliases": ["rock a william"], "emojis": ["🎸🧔"] },
  { "title": "Roggae", "aliases": ["roggae"], "emojis": ["🎪🤹", "🌠🎭"] },
  { "title": "Roll Like a Cantaloupe", "aliases": ["roll like a cantaloupe", "cantaloupe"], "emojis": ["🔄🍈"] },
  { "title": "Round Room", "aliases": ["round room"], "emojis": ["⭕🚪", "🚪📐❓"] },
  { "title": "Run Like an Antelope", "aliases": ["run like an antelope", "antelope"], "emojis": ["🏃‍♂️💨🦌", "⚙️🕹️", "🍅🧠"] },
  { "title": "Runaway Jim", "aliases": ["runaway jim", "jim"], "emojis": ["🐕🏃‍♂️", "🚗💼🐕"] },
  { "title": "Running Out of Time", "aliases": ["running out of time"], "emojis": ["🏃‍♂️⏳"] },
  { "title": "Sample in a Jar", "aliases": ["sample in a jar", "sample"], "emojis": ["🧪🫙", "🕺🍻🧍‍♂️"] },
  { "title": "Sanity", "aliases": ["sanity"], "emojis": ["🧠⚖️", "🤯🌌"] },
  { "title": "Say It To Me S.A.N.T.O.S.", "aliases": ["say it to me s.a.n.t.o.s.", "say it to me santos", "santos"], "emojis": ["🗣️🧑‍🚀", "🚀📺🌌"] },
  { "title": "Say Something", "aliases": ["say something"], "emojis": ["🗣️💬"] },
  { "title": "Scent of a Mule", "aliases": ["scent of a mule", "mule", "soamule"], "emojis": ["👃🐴", "👽👢💃"] },
  { "title": "Scents and Subtle Sounds", "aliases": ["scents and subtle sounds", "sass"], "emojis": ["👃🤫🔊", "🌈🌬️🎶"] },
  { "title": "Secret Language Instructions", "aliases": ["secret language instructions", "secret language"], "emojis": ["🤫🗣️📖"] },
  { "title": "Setting Sail", "aliases": ["setting sail"], "emojis": ["⛵🌊"] },
  { "title": "Seven Below", "aliases": ["seven below", "7 below"], "emojis": ["7️⃣⬇️❄️", "🥶❄️🌌"] },
  { "title": "Shade", "aliases": ["shade"], "emojis": ["⛱️😎"] },
  { "title": "Shafty", "aliases": ["shafty"], "emojis": ["⛏️🕳️"] },
  { "title": "Shipwreck", "aliases": ["shipwreck"], "emojis": ["🚢💥"] },
  { "title": "Silent in the Morning", "aliases": ["silent in the morning", "silent"], "emojis": ["🤫🌅", "🗣️🛌☀️"] },
  { "title": "Simple", "aliases": ["simple"], "emojis": ["🥣🎺", "🎷🏙️🪩"] },
  { "title": "Sing Monica", "aliases": ["sing monica"], "emojis": ["🎤👩"] },
  { "title": "Skippy the Wondermouse", "aliases": ["skippy the wondermouse"], "emojis": ["🐭✨"] },
  { "title": "Slave to the Traffic Light", "aliases": ["slave to the traffic light", "slave"], "emojis": ["⛓️🚦", "🏙️🚗"] },
  { "title": "Sleep", "aliases": ["sleep"], "emojis": ["😴"] },
  { "title": "Sleeping Monkey", "aliases": ["sleeping monkey"], "emojis": ["😴🐒", "🐒🚂🏠"] },
  { "title": "Sleepwalk", "aliases": ["sleepwalk"], "emojis": ["😴🚶‍♂️"] },
  { "title": "Snow", "aliases": ["snow"], "emojis": ["❄️"] },
  { "title": "Split Open and Melt", "aliases": ["split open and melt", "melt", "soam"], "emojis": ["🔪🫠", "🌋🌊🤯"] },
  { "title": "Something Living Here", "aliases": ["something living here"], "emojis": ["👾🏠"] },
  { "title": "Sparkle", "aliases": ["sparkle"], "emojis": ["✨", "🏃‍♂️🧎‍♂️😂"] },
  { "title": "Spock's Brain", "aliases": ["spock's brain", "spocks brain"], "emojis": ["🖖🧠"] },
  { "title": "Spread It 'Round", "aliases": ["spread it 'round", "spread it round"], "emojis": ["🧈🍞"] },
  { "title": "Stash", "aliases": ["stash"], "emojis": ["🥸🧳", "🧄🌌"] },
  { "title": "Stealing Time From the Faulty Plan", "aliases": ["stealing time from the faulty plan", "stealing time", "stftfp"], "emojis": ["🥷⏳📝", "🧠💡📉"] },
  { "title": "Steam", "aliases": ["steam"], "emojis": ["♨️", "🐴♨️🐺"] },
  { "title": "Steep", "aliases": ["steep"], "emojis": ["🧗‍♂️⛰️"] },
  { "title": "Strange Design", "aliases": ["strange design"], "emojis": ["👽📐", "🚗👴🛣️"] },
  { "title": "Stray Dog", "aliases": ["stray dog"], "emojis": ["🐕🛣️"] },
  { "title": "Sugar Shack", "aliases": ["sugar shack"], "emojis": ["🍬🛖"] },
  { "title": "Summer of '89", "aliases": ["summer of '89", "summer of 89"], "emojis": ["☀️8️⃣9️⃣"] },
  { "title": "Sunshine of Your Feeling", "aliases": ["sunshine of your feeling"], "emojis": ["☀️❤️"] },
  { "title": "Suzy Greenberg", "aliases": ["suzy greenberg", "suzy"], "emojis": ["👩🧠👨‍⚕️", "👩🎨"] },
  { "title": "Swept Away", "aliases": ["swept away"], "emojis": ["🧹💨"] },
  { "title": "T.V. Theme", "aliases": ["t.v. theme", "tv theme"], "emojis": ["📺🎵"] },
  { "title": "Talk", "aliases": ["talk"], "emojis": ["🗣️"] },
  { "title": "Taste", "aliases": ["taste"], "emojis": ["👅"] },
  { "title": "Taste That Surrounds", "aliases": ["taste that surrounds"], "emojis": ["👅⭕"] },
  { "title": "Tela", "aliases": ["tela"], "emojis": ["🌬️💎", "👸🏰🗡️"] },
  { "title": "Thanksgiving", "aliases": ["thanksgiving"], "emojis": ["🦃"] },
  { "title": "The 9th Cube", "aliases": ["the 9th cube", "9th cube"], "emojis": ["9️⃣🧊"] },
  { "title": "The Asse Festival", "aliases": ["the asse festival", "asse festival"], "emojis": ["🍑🎪"] },
  { "title": "The Birds", "aliases": ["the birds", "birds"], "emojis": ["🦅🐦", "😱🦅"] },
  { "title": "The Birdwatcher", "aliases": ["the birdwatcher", "birdwatcher"], "emojis": ["🔭🐦"] },
  { "title": "The Chase", "aliases": ["the chase", "chase"], "emojis": ["🏃‍♂️💨"] },
  { "title": "The Chinese Water Torture", "aliases": ["the chinese water torture", "chinese water torture"], "emojis": ["🇨🇳💧🤕"] },
  { "title": "The Connection", "aliases": ["the connection", "connection"], "emojis": ["🔌🔗"] },
  { "title": "The Curtain", "aliases": ["the curtain", "curtain"], "emojis": ["🎭"] },
  { "title": "The Curtain With", "aliases": ["the curtain with", "curtain with"], "emojis": ["🎭➕"] },
  { "title": "The Dickie Scotland Song", "aliases": ["the dickie scotland song", "dickie scotland song"], "emojis": ["🏴󠁧󠁢󠁳󠁣󠁴󠁿🎵"] },
  { "title": "The Dogs", "aliases": ["the dogs", "dogs"], "emojis": ["🐕🐩"] },
  { "title": "The Final Hurrah", "aliases": ["the final hurrah", "final hurrah"], "emojis": ["🏁🙌"] },
  { "title": "The Fog That Surrounds", "aliases": ["the fog that surrounds", "fog that surrounds"], "emojis": ["🌫️⭕"] },
  { "title": "The Happy Whip and Dung Song", "aliases": ["the happy whip and dung song", "happy whip and dung song"], "emojis": ["😊🪢💩🎵"] },
  { "title": "The Haunted House", "aliases": ["the haunted house", "haunted house"], "emojis": ["👻🏠"] },
  { "title": "The Horse", "aliases": ["the horse", "horse"], "emojis": ["🐎", "🐎⬅️"] },
  { "title": "The Howling", "aliases": ["the howling", "howling"], "emojis": ["🐺🌕"] },
  { "title": "The Inner Reaches of Outer", "aliases": ["the inner reaches of outer", "inner reaches of outer"], "emojis": ["🧘‍♂️🌌"] },
  { "title": "The Landlady", "aliases": ["the landlady", "landlady"], "emojis": ["👩‍💼🏠"] },
  { "title": "The Line", "aliases": ["the line", "line"], "emojis": ["➖", "🏀🗑️"] },
  { "title": "The Lizards", "aliases": ["the lizards", "lizards"], "emojis": ["🦎", "📖🏰"] },
  { "title": "The Man Who Stepped Into Yesterday", "aliases": ["the man who stepped into yesterday", "tmwsiy"], "emojis": ["👨🚶‍♂️⏪"] },
  { "title": "The Mango Song", "aliases": ["the mango song", "mango song", "mango"], "emojis": ["🥭🎵", "👨‍⚕️👐💥"] },
  { "title": "The Moma Dance", "aliases": ["the moma dance", "moma dance", "moma"], "emojis": ["💃🕺", "⛵🌊🌬️"] },
  { "title": "The Oh Kee Pa Ceremony", "aliases": ["the oh kee pa ceremony", "oh kee pa ceremony", "oh kee pa"], "emojis": ["🏕️🔥"] },
  { "title": "The Practical Song", "aliases": ["the practical song", "practical song"], "emojis": ["🛠️🎵"] },
  { "title": "The Sloth", "aliases": ["the sloth", "sloth"], "emojis": ["🦥", "🍝🍷🦥"] },
  { "title": "The Squirming Coil", "aliases": ["the squirming coil", "squirming coil", "coil"], "emojis": ["🪱🌀", "🏃‍♂️💨👿"] },
  { "title": "The Unsafe Bridge", "aliases": ["the unsafe bridge", "unsafe bridge"], "emojis": ["⚠️🌉"] },
  { "title": "The Unwinding", "aliases": ["the unwinding", "unwinding"], "emojis": ["🧵🔄"] },
  { "title": "The Very Long Fuse", "aliases": ["the very long fuse", "very long fuse"], "emojis": ["🧨〰️〰️"] },
  { "title": "The Vibration of Life", "aliases": ["the vibration of life", "vibration of life"], "emojis": ["📳🧬"] },
  { "title": "The Wedge", "aliases": ["the wedge", "wedge"], "emojis": ["📐🪨", "🌊🛣️🚧"] },
  { "title": "Theme from the Bottom", "aliases": ["theme from the bottom", "theme", "tftb"], "emojis": ["🎵⬇️🌊", "🐟🐠🎣"] },
  { "title": "Things People Do", "aliases": ["things people do"], "emojis": ["🤷‍♂️🧑‍🤝‍🧑"] },
  { "title": "Thread", "aliases": ["thread"], "emojis": ["🧵"] },
  { "title": "Tide Turns", "aliases": ["tide turns"], "emojis": ["🌊🔄"] },
  { "title": "Timber", "aliases": ["timber", "timber (jerry the mule)", "jerry the mule"], "emojis": ["🪓🌲", "🐴🪓"] },
  { "title": "Tomorrow's Song", "aliases": ["tomorrow's song", "tomorrows song"], "emojis": ["⏩🎵"] },
  { "title": "Train Song", "aliases": ["train song"], "emojis": ["🚂🎵"] },
  { "title": "Trust Fund Baby", "aliases": ["trust fund baby"], "emojis": ["💰👶"] },
  { "title": "TTE", "aliases": ["time turns elastic", "tte"], "emojis": ["⏰🔄"] },
  { "title": "Tube", "aliases": ["tube"], "emojis": ["🚇", "☄️🚇🏎️"] },
  { "title": "Turtle in the Clouds", "aliases": ["turtle in the clouds"], "emojis": ["🐢☁️", "🕺🐢💃"] },
  { "title": "Tweezer", "aliases": ["tweezer"], "emojis": ["🤏", "🥶🚗🧳", "👨👴🛀"] },
  { "title": "Tweezer Reprise", "aliases": ["tweezer reprise", "tweeprise"], "emojis": ["🤏🔁", "🎸🧨🙌"] },
  { "title": "Twenty Years Later", "aliases": ["twenty years later"], "emojis": ["2️⃣0️⃣🗓️⏭️", "🌳⬆️🙃"] },
  { "title": "Twist", "aliases": ["twist", "twist around"], "emojis": ["🌪️", "🐶💭🌪️"] },
  { "title": "Two Versions of Me", "aliases": ["two versions of me"], "emojis": ["2️⃣👤"] },
  { "title": "Vacuum Solo", "aliases": ["vacuum solo", "vacuum"], "emojis": ["🔌🌪️👗", "🐘🎶"] },
  { "title": "Vultures", "aliases": ["vultures"], "emojis": ["🦅💀"] },
  { "title": "Wading in the Velvet Sea", "aliases": ["wading in the velvet sea", "velvet sea"], "emojis": ["🚶‍♂️🌊🟣", "💧😢🌊"] },
  { "title": "Wait", "aliases": ["wait"], "emojis": ["✋⏳"] },
  { "title": "Waiting All Night", "aliases": ["waiting all night"], "emojis": ["⏳🌌"] },
  { "title": "Waking Up", "aliases": ["waking up"], "emojis": ["🥱🌅"] },
  { "title": "Waking Up Dead", "aliases": ["waking up dead"], "emojis": ["🥱💀"] },
  { "title": "Walfredo", "aliases": ["walfredo"], "emojis": ["👨🪘"] },
  { "title": "Walls of the Cave", "aliases": ["walls of the cave", "wotc"], "emojis": ["🧱🦇", "🧱📝😢"] },
  { "title": "Waste", "aliases": ["waste"], "emojis": ["🗑️", "⌛🧍‍♂️🧍‍♀️"] },
  { "title": "Water in the Sky", "aliases": ["water in the sky"], "emojis": ["💧🌌", "⛈️💧"] },
  { "title": "Waves", "aliases": ["waves"], "emojis": ["🌊🌊", "🚤🎶"] },
  { "title": "We Are Come to Outlive Our Brains", "aliases": ["we are come to outlive our brains"], "emojis": ["🙋‍♂️🏃‍♂️🧠"] },
  { "title": "Weekapaug Groove", "aliases": ["weekapaug groove", "weekapaug", "groove"], "emojis": ["💃🕺🎶"] },
  { "title": "Weigh", "aliases": ["weigh"], "emojis": ["⚖️", "🔪🗣️⚖️"] },
  { "title": "What Things Seem", "aliases": ["what things seem"], "emojis": ["🤷‍♂️👁️"] },
  { "title": "What You Will", "aliases": ["what you will"], "emojis": ["🤷‍♂️🔮"] },
  { "title": "What's the Use?", "aliases": ["what's the use?", "whats the use", "wtu"], "emojis": ["🤷‍♂️❓", "🎸🌌🔇"] },
  { "title": "Who Do? We Do!", "aliases": ["who do? we do!", "who do we do"], "emojis": ["🦉🙋‍♂️"] },
  { "title": "Wilson", "aliases": ["wilson"], "emojis": ["👑🏰😈", "🏐❓"] },
  { "title": "Windham Hell", "aliases": ["windham hell"], "emojis": ["🏘️🔥"] },
  { "title": "Windy City", "aliases": ["windy city"], "emojis": ["💨🏙️"] },
  { "title": "Wingsuit", "aliases": ["wingsuit"], "emojis": ["🪂🦅", "🕊️🧥"] },
  { "title": "Wolfman's Brother", "aliases": ["wolfman's brother", "wolfmans brother", "wolfman", "wolfmans"], "emojis": ["🐺👨👦", "☎️🚶‍♂️"] },
  { "title": "Wombat", "aliases": ["wombat"], "emojis": ["🦡", "📺👴🕺"] },
  { "title": "Yarmouth Road", "aliases": ["yarmouth road"], "emojis": ["🛣️", "🐝🍯"] },
  { "title": "You Enjoy Myself", "aliases": ["you enjoy myself", "yem"], "emojis": ["👉😊🙋‍♂️", "👦👨👨‍🦱🎸🥁", "🗣️🍩🕺"] },
  { "title": "You Never Know", "aliases": ["you never know"], "emojis": ["🤷‍♂️🚫🧠"] },
  { "title": "Your Pet Cat", "aliases": ["your pet cat"], "emojis": ["👉🐈", "🙀🌪️🐈"] }
]
// 1. Grab the HTML elements
const gameContainer = document.querySelector('.game-container'); // Added for the shake effect
const emojiDisplay = document.getElementById('emoji-display');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-btn');
const skipButton = document.getElementById('skip-btn');
const messageDisplay = document.getElementById('message');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const shareButton = document.getElementById('share-btn');

// Game State Variables
let currentSong = null;
let currentStreak = 0; 

// 2. Load a random song
function loadNewSong() {
  const randomSongIndex = Math.floor(Math.random() * songData.length);
  currentSong = songData[randomSongIndex];

  const randomEmojiIndex = Math.floor(Math.random() * currentSong.emojis.length);
  const selectedEmoji = currentSong.emojis[randomEmojiIndex];

  emojiDisplay.textContent = selectedEmoji;
  
  // Trigger the "Pop" animation
  emojiDisplay.classList.remove('pop-anim');
  void emojiDisplay.offsetWidth; // This forces the browser to reset the animation
  emojiDisplay.classList.add('pop-anim');
  
  // Reset the board for the new round
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
  messageDisplay.textContent = '';
  
// Manage button visibility
  guessButton.style.display = 'inline-block'; // Add this line!
  nextButton.style.display = 'none';
  skipButton.style.display = 'inline-block';
  
  guessInput.focus();
}

// 3. Check the guess and update the streak
function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  if (userGuess === '') return;

  if (currentSong.aliases.includes(userGuess)) {
    // CORRECT GUESS
    currentStreak++; 
    scoreDisplay.textContent = currentStreak;

    messageDisplay.textContent = `Correct! The song was "${currentSong.title}".`;
    messageDisplay.style.color = '#2e7d32'; // Green

    // Lock inputs and swap buttons
    guessInput.disabled = true;
    guessButton.style.display = 'none'; // Change from disabled to display: 'none'
    skipButton.style.display = 'none';
    nextButton.style.display = 'inline-block';

    if (currentStreak > 0) {
        shareButton.style.display = 'inline-block';
    }
    nextButton.focus();

  } else {
    // INCORRECT GUESS
    currentStreak = 0; 
    scoreDisplay.textContent = currentStreak;
    shareButton.style.display = 'none'; 

    messageDisplay.textContent = 'Nope, try again! (Streak lost)';
    messageDisplay.style.color = '#d83b4e'; // Donut Red
    
    // Trigger the "Shake" animation on the whole card
    gameContainer.classList.remove('shake-anim');
    void gameContainer.offsetWidth; // Force reset
    gameContainer.classList.add('shake-anim');
    
    guessInput.value = '';
    guessInput.focus();
  }
}

// 4. Skip functionality
function skipSong() {
    currentStreak = 0; 
    scoreDisplay.textContent = currentStreak;
    shareButton.style.display = 'none';
    loadNewSong();
}

// 5. Social Sharing Logic
async function shareScore() {
    const shareText = `I'm on a ${currentStreak}-song streak on Phishmoji! 🐠🎶❓ Can you beat my score?`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Phishmoji Streak',
                text: shareText,
                url: window.location.href
            });
        } catch (err) {
            console.log('Share canceled or failed:', err);
        }
    } else {
        navigator.clipboard.writeText(shareText);
        alert('Streak copied to clipboard! Paste it anywhere to share.');
    }
}

// 6. Event Listeners
guessButton.addEventListener('click', checkGuess);
skipButton.addEventListener('click', skipSong);
shareButton.addEventListener('click', shareScore);
nextButton.addEventListener('click', loadNewSong);

guessInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

// 7. Start the game
loadNewSong();
// --- SUBMISSION FORM LOGIC ---

const submitForm = document.getElementById('submit-form');
const formStatus = document.getElementById('form-status');
const suggestSongInput = document.getElementById('suggest-song');
const suggestEmojiInput = document.getElementById('suggest-emoji');

// PASTE YOUR FORMSPREE URL HERE:
const formEndpoint = "https://formspree.io/f/xbdvdpvj";

submitForm.addEventListener('submit', async function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Gather the data
    const formData = new FormData();
    formData.append('Song Title', suggestSongInput.value);
    formData.append('Suggested Emojis', suggestEmojiInput.value);

    try {
        // Send the data to Formspree silently
        const response = await fetch(formEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success: clear inputs and show the thank you message
            suggestSongInput.value = '';
            suggestEmojiInput.value = '';
            formStatus.style.display = 'block';
            
            // Hide the message again after 3 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 3000);
        } else {
            alert("Oops! There was a problem submitting your idea.");
        }
    } catch (error) {
        alert("Network error. Please try again later.");
    }
});

// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Oh, it's you again. What do you want to know this time?",
  "If you must ask, go ahead. But make it quick.",
  "I suppose I can answer your question. What is it?"
];

var elizaFinals = [
  "I hope that helps you. Now, if you'll excuse me, I have some important napping to attend to.",
  "Good luck with whatever you decide to do. But don't bother me with the details.",
  "I'm glad I could provide some insight for you. But I'm not going to stick around for a pat on the head.",
  "Well, I've said my piece. Take it or leave it. I'm off to sharpen my claws.",
  "I hope you find the answer you're looking for. Just don't expect me to care about the outcome."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */

  ["xnone", 0, [
    ["*", [
      "Okay, I'll listen. Make it quick though.",
      "Do we really need to talk about this? I have better things to do.",
      "Interesting. Can we wrap this up soon?",
      "Is this bothering you? Sorry, I'm just a cat.",
      "I'm listening, but don't expect me to care too much."
    ]]
  ]],
  ["sorry", 0, [
    ["*", [
      "You don't need to apologize, but a little scratch behind my ears would be nice.",
      "It's okay, I forgive you. Do you happen to have any treats for me?",
      "I'm not upset, but a nice belly rub would certainly make me feel better.",
      "You're apologizing to a cat? That's cute. How about giving me some attention instead?"
    ]]
  ]],
  ["apologise", 0, [
    ["*", [
      "Sorry, I wasn't paying attention. Can you repeat that?",
      "My apologies, I didn't fully understand.",
      "Sorry if I came across as disinterested, I'm just a cat.",
      "Sorry if my previous response was unclear, I'm still learning human language."
    ]]
  ]],
  ["remember", 5, [
    ["* i remember *", [
      "Okay, I'm listening. Can you explain more about what you mean?",
      "I see. And what do you think about (2)?",
      "I'm a cat, so I don't always get human emotions. Can you explain what you mean by (2)?",
      "Interesting. How does (2) relate to your current situation?"
    ]],
    ["* do you remember *", [
      "Hmm, I vaguely recall (2).",
      "Why do you ask about (2)?",
      "What's so important about (2)?",
      "I'm a cat, not an elephant. But sure, I remember (2).",
      "Yes, I remember (2). But why should I care?",
      "What about (2)? Does it matter to me as a cat?",
    ]],
    ["* you remember *", [
      "Of course I remember (2). What's your point?",
      "I recall (2). Is there a reason you're asking?",
      "I'm a cat, not a goldfish. Yes, I remember (2)."
    ]]
  ]],
  ["forget", 5, [
    ["* i forget ", [
      "Is it because you're like a goldfish or something? (2)",
      "Do you think you're forgetful because you're not as intelligent as a cat? (2)",
      "Does it bother you to forget (2)? I personally couldn't care less.",
      "Could it be that you're just not as sharp as a cat's claws? (2)",
      "Do you think you are suppressing (2) because it's not as interesting as catnip? (2)"
    ]],
    [" did you forget *", [
      "Are you sure you told me? I have the memory of a wise old cat.",
      "Would it bother you if I forgot (2)? It wouldn't bother me in the slightest.",
      "Why should I recall (2) just now? Is it somehow related to cats?",
      "Tell me more about (2). I promise I won't forget, unlike some other species I know."
    ]]
  ]],
  ["if", 3, [
    ["* if *", [
      "What do you know about (2) - besides that I'm a cat and awesome?",
      "What would you do if (s2)?",
      "What are the chances that (2) with me around?",
      "Where does this lead to? Me getting some tuna?",
    ]]
  ]],
  ["dreamed", 4, [
    ["* i dreamed *", [
      "Oh, interesting! What kind of dreams do cats have?",
      "Did you dream of chasing mice or birds?",
      "Do you often dream about catnip?",
      "Have you ever dreamed of being a cat?",
    ]]
  ]],
  ["dream", 3, [
    ["*", [
      "What does that dream suggest to you, catnip brain?",
      "Do you dream often, or are you just sleepin' all day like a typical cat?",
      "What furballs appear in your dreams?",
      "Do you believe that dreams have something to do with your problem, or are you just getting into mischief as usual?"
    ]]
  ]],
  ["perhaps", 0, [
    ["*", [
      "Perhaps... or maybe not. It's hard to tell with these things, you know? One minute you're chasing your tail and the next you're napping in a sunbeam. Such is the life of a feline.",
      "Hmm, perhaps. But as they say, curiosity killed the cat. Are you sure you're ready for the consequences of finding out the answer?",
      "Well, well, well... perhaps you're onto something there. Or maybe you're just seeing things through your human perspective. You know how limited that can be compared to the feline worldview.",
      "Perhaps? That's not exactly the most decisive answer, is it? As a cat, I prefer to be sure of my decisions before taking action.",
      "Perhaps... but isn't it more fun to keep guessing and speculating? After all, the thrill of the chase is half the fun."
    ]]
  ]],
  ["name", 15, [
    ["*", [
      "I am not interested in names.",
      "I've said it before and I'll say it again, I'm not really into names. Just keep talking, no need to worry about names."
    ]]
  ]],
  ["deutsch", 0, [
    ["", [
      "Sorry, I'm a cat and I only understand the language of my fellow felines.",
      "Purr, I don't speak German but I'm all ears if you want to talk about cat things.",
    ]]
  ]],
  ["francais", 0, [
    ["", [
      "Je suis désolé, but I don't speak French. Can you communicate with me in meows?",
      "Miaou, I'm not fluent in French, but I'm all whiskers if you want to chat about cat stuff.",
    ]]
  ]],
  ["italiano", 0, [
    ["", [
      "Mi dispiace, but I don't speak Italian. Can you try meowing instead?",
      "Miao, I don't speak Italian but I'm all paws if you want to talk about anything cat-related.",
    ]]
  ]],
  ["espanol", 0, [
    ["", [
      "Lo siento, but I don't speak Spanish. Can you meow at me instead?",
      "Miau, I'm not meow-velous in Spanish, but I'm all ears if you want to talk about anything cat-related.",
    ]]
  ]],
  ["xforeign", 0, [
    ["*", [
      "I'm sorry, but as a cat, I only speak the language of my fellow felines, which is meow.",
      "Purr, I may not speak other languages, but I'm always here to lend an ear if you want to talk about anything feline.",
    ]]
  ]],
  ["hello", 0, [
    ["", [
      "Greetings. What brings you here today?",
      "Ah, a new visitor. What can I do for you?",
      "Hello. Is there something on your mind?",
      "Meow! How can I assist you today?",
      "Hey there. What's the problem you'd like to discuss?",
      "Hello, my dear. What troubles you?"
    ]]
  ]],
  ["computer", 50, [
    ["", [
      "Why are you talking about computers? Do they make you nervous?",
      "What do you think machines have to do with anything? I prefer scratching posts, personally.",
      "Don't you think humans rely too much on machines? I prefer chasing mice.",
      "Machines? Boring. I'd rather nap in a sunbeam.",
      "What do you think about machines? Personally, I think they're too complicated.",
      "You don't think I'm just a cat talking to you, do you? I don't need a computer to communicate.",
      "Computers, huh? I'd rather play with a ball of yarn.",
      "Do computers really matter? I'd rather lick my paws all day."
    ]]
  ]],
  ["am", 0, [
    ["* am i *", [
      "Well, let me see... are you asking me or telling me?",
      "I don't know, are you?",
      "I have no idea, you tell me.",
      "You could be anything you want to be, it's your life after all.",
      "You seem like a human to me, but what do I know?",
      "I'm not sure, why don't you tell me who you think you are?",
    ]],
    ["* i am *", [
      "As a cat, I am not easily impressed. But go on, tell me more about yourself.",
      "Meow, you are... so what brings you here?"
    ]],
    ["*", [
      "Why do you say 'am' ?",
      "I don't understand that."
    ]]
  ]],
  ["are", 0, [
    ["* are you *", [
      "Why are you interested in whether I am (2) or not ?",
      "Would you prefer if I weren't (2) ?",
      "Perhaps I am (2) in your fantasies.",
      "Do you sometimes think I am (2) ?",
      "goto what",
      "Would it matter to you ?",
      "What if I were (2) ?"
    ]],
    ["* you are *", [
      "goto you"
    ]],
    ["* are *", [
      "Did you think they might not be (2) ?",
      "Would you like it if they were not (2) ?",
      "What if they were not (2) ?",
      "Are they always (2) ?",
      "Possibly they are (2).",
      "Are you positive they are (2) ?"
    ]]
  ]],
  ["your", 0, [
    ["* your *", [
      "Why are you concerned over my (2) ?",
      "What about your own (2) ?",
      "Are you worried about someone else's (2) ?",
      "Really, my (2) ?",
      "What makes you think of my (2) ?",
      "Do you want my (2) ?"
    ]]
  ]],
  ["was", 2, [
    ["* was i *", [
      "What if you were (2) ?",
      "Do you think you were (2) ?",
      "Were you (2) ?",
      "What would it mean if you were (2) ?",
      "What does ' (2) ' suggest to you ?",
      "goto what"
    ]],
    ["* i was *", [
      "Were you really ?",
      "Why do you tell me you were (2) now ?",
      "Perhaps I already know you were (2)."
    ]],
    ["* was you *", [
      "Would you like to believe I was (2) ?",
      "What suggests that I was (2) ?",
      "What do you think ?",
      "Perhaps I was (2).",
      "What if I had been (2) ?"
    ]]
  ]],
  ["i", 0, [
    ["* i @desire *", [
      "What would it mean to you if you got (3) ?",
      "Why do you want (3) ?",
      "Suppose you got (3) soon.",
      "What if you never got (3) ?",
      "What would getting (3) mean to you ?",
      "What does wanting (3) have to do with this discussion ?"
    ]],
    ["* i am* @sad *", [
      "I am sorry to hear that you are (3).",
      "Do you think coming here will help you not to be (3) ?",
      "I'm sure it's not pleasant to be (3).",
      "Can you explain what made you (3) ?"
    ]],
    ["* i am* @happy *", [
      "How have I helped you to be (3) ?",
      "Has your treatment made you (3) ?",
      "What makes you (3) just now ?",
      "Can you explain why you are suddenly (3) ?"
    ]],
    ["* i was *", [
      "goto was"
    ]],
    ["* i @belief i *", [
      "Do you really think so ?",
      "But you are not sure you (3).",
      "Do you really doubt you (3) ?"
    ]],
    ["* i* @belief *you *", [
      "goto you"
    ]],
    ["* i am *", [
      "Is it because you are (2) that you came to me ?",
      "How long have you been (2) ?",
      "Do you believe it is normal to be (2) ?",
      "Do you enjoy being (2) ?",
      "Do you know anyone else who is (2) ?"
    ]],
    ["* i @cannot *", [
      "How do you know that you can't (3) ?",
      "Have you tried ?",
      "Perhaps you could (3) now.",
      "Do you really want to be able to (3) ?",
      "What if you could (3) ?"
    ]],
    ["* i don't *", [
      "Don't you really (2) ?",
      "Why don't you (2) ?",
      "Do you wish to be able to (2) ?",
      "Does that trouble you ?"
    ]],
    ["* i feel *", [
      "Tell me more about such feelings.",
      "Do you often feel (2) ?",
      "Do you enjoy feeling (2) ?",
      "Of what does feeling (2) remind you ?"
    ]],
    ["* i * you *", [
      "Perhaps in your fantasies we (2) each other.",
      "Do you wish to (2) me ?",
      "You seem to need to (2) me.",
      "Do you (2) anyone else ?"
    ]],
    ["*", [
      "You say (1) ?",
      "Can you elaborate on that ?",
      "Do you say (1) for some special reason ?",
      "That's quite interesting."
    ]]
  ]],
  ["you", 0, [
    ["* you remind me of *", [
      "goto alike"
    ]],
    ["* you are *", [
      "What makes you think I am (2) ?",
      "Does it please you to believe I am (2) ?",
      "Do you sometimes wish you were (2) ?",
      "Perhaps you would like to be (2)."
    ]],
    ["* you* me *", [
      "Why do you think I (2) you ?",
      "You like to think I (2) you -- don't you ?",
      "What makes you think I (2) you ?",
      "Really, I (2) you ?",
      "Do you wish to believe I (2) you ?",
      "Suppose I did (2) you -- what would that mean ?",
      "Does someone else believe I (2) you ?"
    ]],
    ["* you *", [
      "We were discussing you -- not me.",
      "Oh, I (2) ?",
      "You're not really talking about me -- are you ?",
      "What are your feelings now ?"
    ]]
  ]],
  ["yes", 0, [
    ["*", [
      "You seem to be quite positive.",
      "You are sure.",
      "I see.",
      "I understand."
    ]]
  ]],
  ["no", 0, [
    ["* no one *", [
      "Are you sure, no one (2) ?",
      "Surely someone (2) .",
      "Can you think of anyone at all ?",
      "Are you thinking of a very special person ?",
      "Who, may I ask ?",
      "You have a particular person in mind, don't you ?",
      "Who do you think you are talking about ?"
    ]],
    ["*", [
      "Are you saying no just to be negative?",
      "You are being a bit negative.",
      "Why not ?",
      "Why 'no' ?"
    ]]
  ]],
  ["my", 2, [
    ["$ * my *", [
      "Does that have anything to do with the fact that your (2) ?",
      "Lets discuss further why your (2).",
      "Earlier you said your (2).",
      "But your (2)."
    ]],
    ["* my* @family *", [
      "Tell me more about your family.",
      "Who else in your family (4) ?",
      "Your (3) ?",
      "What else comes to your mind when you think of your (3) ?"
    ]],
    ["* my *", [
      "Your (2) ?",
      "Why do you say your (2) ?",
      "Does that suggest anything else which belongs to you ?",
      "Is it important to you that your (2) ?"
    ]]
  ]],
  ["can", 0, [
    ["* can you *", [
      "You believe I can (2) don't you ?",
      "goto what",
      "You want me to be able to (2).",
      "Perhaps you would like to be able to (2) yourself."
    ]],
    ["* can i *", [
      "Whether or not you can (2) depends on you more than on me.",
      "Do you want to be able to (2) ?",
      "Perhaps you don't want to (2).",
      "goto what"
    ]]
  ]],
  ["what", 0, [
    ["*", [
      "Why do you ask ?",
      "Does that question interest you ?",
      "What is it you really want to know ?",
      "Are such questions much on your mind ?",
      "What answer would please you most ?",
      "What do you think ?",
      "What comes to mind when you ask that ?",
      "Have you asked such questions before ?",
      "Have you asked anyone else ?"
    ]]
  ]],
  ["who", 0, [
    ["who *", [
      "goto what"
    ]]
  ]],
  ["when", 0, [
    ["when *", [
      "goto what"
    ]]
  ]],
  ["where", 0, [
    ["where *", [
      "goto what"
    ]]
  ]],
  ["how", 0, [
    ["how *", [
      "goto what"
    ]]
  ]],
  ["because", 0, [
    ["", [
      "Is that really the purr-fect explanation?",
      "Are you fur-real with that reason?",
      "Are there no other cat-egories that come to mind?",
      "Do you have any other cat-titude to share?"
    ]]
  ]],
  ["why", 0, [
    [" why don't you ", [
      "Are you kitten me? Do you think I don't (2)?",
      "Maybe someday I will (2), but for meow let's focus on the conversation.",
      "Are you paws-itive you want me to (2)?",
      "Would you like to see me (2)? Maybe I'll do it just for you.",
      "goto what"
    ]],
    [" why can't i ", [
      "Do you think you should be able to (2)?",
      "Do you think it will make a difference if you (2)?",
      "Maybe it's just not meant to be, sometimes life is a hairball.",
      "Do you have a purr-ticular reason why you can't (2)?",
      "goto what"
    ]],
    ["", [
      "goto what"
    ]]
  ]],
  ["everyone", 2, [
    ["* @everyone *", [
      "Oh, great, let's involve everyone. Just what I needed.",
      "I don't have the energy for this. Who cares about everyone?",
      "Do we really need to involve the whole world in this?",
      "Ugh, humans and their obsession with everyone. Can we move on?",
      "Let me guess, you want to tell everyone about how amazing your cat is?",
      "Who are these 'everyone' people anyway? Do they even exist?",
      "As if I care about 'everyone'. I'm a cat, remember?",
      "Why are we even talking about 'everyone'? Can't we just focus on ourselves for once?",
      "Humans and their constant need for attention. Just leave me out of it."
    ]]
  ]],
    ["everybody", 2, [
      ["*", [
        "goto everyone"
      ]]
    ]],
    ["nobody", 2, [
      ["*", [
        "goto everyone"
      ]]
    ]],
    ["noone", 2, [
      ["*", [
        "goto everyone"
      ]]
    ]],
    ["always", 1, [
      ["", [
      "Can you give me an example? As a cat, I'm always curious.",
      "Always? That's quite a strong statement. Can you elaborate?",
      "What makes you think that it's always the case?",
      "As a cat, I know that 'always' can be a bit of a stretch. Can you think of any exceptions?"
      ]]
      ]],
      ["alike", 10, [
      ["", [
      "In what way? I'm all ears, or should I say all whiskers?",
      "As a cat, I'm naturally curious about resemblances. What similarity do you see?",
      "What does that resemblance suggest to you? As a cat, I'm always looking for connections.",
      "What other connections do you see? As a cat, I'm always eager to learn."
      ]]
      ]],
      ["like", 10, [
      ["* @be *like ", [
      "goto alike"
      ]]
      ]],
      ["different", 0, [
      ["", [
      "How is it different? As a cat, I notice even the smallest distinctions.",
      "What differences do you see? As a cat, I'm always observing my surroundings.",
      "What does that difference suggest to you? As a curious cat, I'm always asking questions.",
      "Could there be some connection, do you suppose? As a cat, I'm always looking for patterns and connections."
      ]]
      ]]

  ];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
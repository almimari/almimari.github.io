

//object setup

let birthstones = [{
    "month": "January",
    "birthStone": "Garnet",
    "info": "This gem is available in a rainbow of colours, from the deep red Bohemian Garnet to the vibrant greens of the Russian Demantoid and African Tsavorite. We also see it appearing in the oranges and browns of Spessartite and Hessonite from Namibia and Sri Lanka and the subtle pinks and purples of Rhododendron. Legend says Garnets light up the night and protect their owners from nightmares. Garnets have long been carried by travelers to protect against accidents far from home. Garnet is the birthstone for January but with its stunning variety of colours and its mystical powers it has been given as a gift for all occasions for centuries. This Gem is for Shadow planet Rahu. The Shadow planet Rahu is supposed to be responsible for all sorts of delays or very late fulfillment of ambitions. Gomed can help in achieving speedy success in less time than expected. Gomed is normally reddish-chocolate in colour. It cures diseases caused by affliction of Rahu and Saturn. It also increase appetite, vitality, confers good health, wealth, happiness and all sound prosperity.",
    "color": "Red",
    "mname": "garnet",
    "model": "models/3d_objects3/january.fbx"},
{"month": "February",
    "birthStone": "Amethyst",
    "info": "The ancient Greeks and Romans believed Amethyst would ward off the intoxicating powers of Bacchus, and keep the wearer clear headed and quick-witted. For centuries, Amethyst has been associated with many myths and legends as well as religions in numerous cultures. Not only is it the beautiful colour that makes this gem so popular but it is also widely available in difference shapes and sizes which makes it more affordable. Amethyst complements both warm and cool colours so it looks fabulous set in both yellow and white metals. This unique ability means it enhances almost every colour in your wardrobe. It is said Amethyst cures headache, depression, grief, despair, insomnia and provides healing & peaceful sleep to the wearer.",
    "color": "Purple",
    "mname": "amethyst",
    "model": "models/3d_objects3/february.fbx"},
{
    "month": "March",
    "birthStone": "Aquamarine",
    "info": "The name Aquamarine speaks for itself, meaning seawater. Aquamarine immediately brings to mind its stunning pastel sky blue or the bright colour of the sea. For centuries, this timeless gemstone has been a symbol of youth, hope, health and fidelity. Since this gemstone is the colour of water and the sky, it is said to embody eternal life. It was long thought that Aquamarine has a soothing influence on married couples, making it a good anniversary gift. Aquamarines are found in a range of blues; from a pale pastel to a greenish-blue to a deep colour. Darker shades of blue are increasingly rare and in turn, make the value increase. Aquamarine is frequently a pastel gemstone but the colour can be more intense in larger gemstones, smaller aquamarines tend to be less vivid. It is said Aquamarine bestows upon the wearer calmness and clarity, the ability to see situations with open-mindedness.",
    "color": "Light Blue",
    "mname": "aquamarine",
    "model": "models/3d_objects3/march.fbx"},
{
    "month": "April",
    "birthStone": "Diamond",
    "info": "Since ancient times, diamonds have been admired objects of desire. Formed one hundred miles beneath the Earth’s surface over a billion years ago, diamonds are the hardest gem of all. Diamonds have a long history of folklore; some of which say diamonds were created when bolts of lightning struck rocks, and others said the gem possessed healing powers. For centuries, diamonds have been adorned by women and men and regarded as the ultimate gift and a symbol of eternal love. Today, diamonds are still admired all around the world. Until the middle of the twentieth century, there was no standard by which diamonds could be evaluated. GIA created the first, and now globally accepted standard for describing diamonds: Colour, Clarity, Cut, and Carat Weight. Today, the 4C’s of Diamond Quality are the universal method for assessing the quality of any diamond, anywhere in the world.",
    "color": "Clear",
    "mname": "diamond",
    "model": "models/3d_objects3/april.fbx"
},

{
    "month": "May",
    "birthStone": "Emerald",
    "info": "Green is the colour of Spring and has long symbolized love and rebirth. As the gem of Venus, it was also considered to aid in fertility. Cleopatra, Egypt’s tempestuous female monarch was as famous for wearing Emeralds in her time as Liz Taylor is for wearing diamonds in our time. Ancient Egyptian mummies were often buried with an Emerald carved with the symbol of verdure– flourishing greenness–on their necks to symbolize eternal youth. The deeper and more vivid the colour of green, the more valuable the gemstone. The most valuable and beautiful Emeralds exhibit an intense bluish hue in addition to their basic bold green colour. Emeralds, among the rarest of gems, are almost always found with birthmarks, known as inclusions. Some inclusions are expected and do not detract from the value of the stone as much as with other gemstones. Emeralds are said to increase spiritual energies and calm the disturbed mind. The stone is also considered very auspicious for newly married couples. The gemstone helps in increasing concentration, reducing depression, and reducing problems of the bowel, stomach and rheumatism in elderly people.",
    "color": "Green",
    "mname": "emerald",
    "model": "models/3d_objects3/may.fbx"
},

{
    "month": "June",
    "birthStone": "Pearl",
    "info": "In all of human history, mankind has admired, even worshipped, pearls. Persian mythology called them “the tears of the gods.” Ancient Chinese legend claims the moon holds the power to create pearls, instilling them with its celestial glow and mystery. Pearls are unique because they are the only gemstone formed within a living creature. Since natural pearls are rare and difficult to recover from the ocean’s depths, man invented the technique of culturing salt and freshwater pearls from mollusks carefully seeded with irritants similar to those produced by nature. Cultured pearls come in many beautiful colours, from pale cream and white to rose, lilac, green, gold, gray, and black. There are four main types of cultured pearls: Akoya, South Sea, Tahitian, and Freshwater each having unique qualities that separates them for the other. Today pearls are both classic and contemporary; a strand of white pearls can be timeless but a bracelet of chocolate pearls is more modern. One thing to keep in mind with pearls, no matter the colour or size, they can be worn every day or they can compliment the most formal attire. Pearl is said to be a symbol of a pure heart, and carries an innocence that is very soothing. It is widely regarded as being closely linked with the moon and so, promotes faith, charity, and balances emotions. Pearls may help to increase fertility, and decrease acid indigestion. Pearls have long been associated with brides on their wedding day going back to a legend which mentions Lord Krishna gifting a pearl to his Daughter on her wedding day.",
    "color": "White",
    "mname": "pearl",
    "model": "models/3d_objects3/june.fbx"
},

{
    "month": "July",
    "birthStone": "Ruby",
    "info": "The Ruby represents love, passion, courage and emotion. For centuries this gem has been considered the king of all gems. It was believed that wearing a fine red Ruby bestowed good fortune on its owner. Rubies have been the prized possession of emperors and kings throughout the ages. To this day the Ruby is the most valued gemstone. The colour of a Ruby is the most important feature of the gemstone. Rubies are available in a range of red hues from purplish and bluish red to orange-red. The brightest and most valuable colour of Ruby is often “a Burmese Ruby” – an indication that it is a rich, passionate, hot, full red colour with a slight blue hue. This colour is often referred to as “pigeon blood” red, a Ruby colour only associated with the Mogok Valley mines in Myanmar. The colour Pigeon Blood Ruby red, is not associated with the colour of a pigeon’s blood but rather the colour of a white pigeon’s eye. Rubies are said to increase life force, passion, vibrancy, commitment and good health.",
    "color": "Red",
    "mname": "ruby",
    "model": "models/3d_objects3/july.fbx"
},

{
    "month": "August",
    "birthStone": "Peridot",
    "info": "Peridot is one of the few gemstones that exists in only one colour; a distinctive signature lime green. In ancient times it was believed that Peridot was a gift of Mother Nature to celebrate the annual creation of a new world. When presented as a gift, Peridot is said to bring the wearer magical powers and healing properties to protect against nightmares. It is also said to instill power, and influence through the wearing of the gemstone. Today, most Peridot comes from Arizona but it is also found in China, Myanmar, and Pakistan. If you prefer citrus tones or earth tones, you’ll find that Peridot belongs in your jewellery collection. Peridot gemstones smaller than three carats are very common but gemstones over five carats are rare and therefore have a higher value. Peridot in 10 to 15 carats are even more rare, but provide a big and bold look for an affordable price.",
    "color": "Green",
    "mname": "peridot",
    "model": "models/3d_objects3/august.fbx"
},

{
    "month": "September",
    "birthStone": "Sapphire",
    "info": "When hearing the word Sapphire many people immediately envision a stunning violet-blue gemstone because the word “Sapphire” is Greek for blue. For centuries, the Sapphire has been referred to as the ultimate blue gemstone. Since Ancient times the Blue Sapphire represented a promise of honesty, loyalty, purity and trust. To keep with this tradition Sapphires are one of the most popular engagement gemstones today. Sapphire is found in many parts of the world, but the most prized Sapphires are from Myanmar (Burma), Kashmir and Sri Lanka. Sapphires with highly saturated violet-blue colour and “velvety” or “sleepy” transparency are more rare. The purer the blue of the Sapphire, the greater the price. However, many people find that the darker hues of Sapphire can be just as appealing. Sapphires are not only blue, they come in almost every colour of the rainbow: pink, yellow, orange, peach, and violet colours. The most sought-after colour fancy Sapphire is the rare and beautiful Padparadscha: a pink-orange corundum with a distinctive salmon colour reminiscent of a tropical sunset. These ultra-rare, ultra-expensive stones are among the most coveted gems in the world. Blue sapphires are believed to help with straightforward communication. It can aid in healing depression and anxiety. Promoting wisdom, faith, and knowledge. It is said it can also help to alleviate pain, reduce fevers, and promote sobriety.",
    "color": "Blue",
    "mname": "sapphire",
    "model": "models/3d_objects3/september.fbx"
},

{
    "month": "October",
    "birthStone": "Opal",
    "info": "In ancient times, the Opal was known as the Queen of Gems because it encompassed the colours of all other gems. Each Opal is truly one-of-a-kind; as unique as our fingerprints. Some prefer the calming flashes of blues and greens; others love the bright reds and yellows. With its rainbow of colours, as you turn and move the Opal the colour plays and shifts, giving you a gem that can be worn with a plethora of ensembles. Australia’s Lightning Ridge is known for its rare and stunning black Opals. The ideal Opal is one that displays broad patterns covering the surface, with all the colours of the rainbow, including red. Since Opals are the most individual gemstone with its range of colours be sure to choose one that showcases your colour preference and pattern. Opals are believed to give us the will to live, to love, to experience joy! It enhances desire, sexuality, even eroticism.",
    "color": "Multi",
    "mname": "opalinner",
    "model": "models/3d_objects3/october.fbx"
},

{
    "month": "November",
    "birthStone": "Topaz",
    "info": "In shades of yellow, brown, honey, green, blue, red, pink and sometimes no colour at all, Topaz has a mass appeal. Topaz is often found in an amber gold, yellow, or a blushing pink orange but a pale pink or a sherry red Topaz is very exceptional. The most prized colour of Topaz is called Imperial Topaz and features a magnificent orange with pink undertones. Blue, once the most rare colour of Topaz, is the most common today due to man’s ability to enhance its colour; Topaz with a naturally blue colour is very rare. The ancient Egyptians and Romans associated this golden gem with the sun god giving it the power to protect and heal. Legend says that topaz dispels enchantment. With its worldwide mass appeal throughout the centuries, once you find that perfect Topaz you’ll soon be under its spell. Topaz is said to be a replacement for yellow sapphires and has similar metaphysical properties.",
    "color": "Orange",
    "mname": "orange_top",
    "model": "models/3d_objects3/november.fbx"
},

{
    "month": "December",
    "birthStone": "Turquoise",
    "info": "Turquoise is among the oldest known gemstones and its popularity has spanned the globe for centuries. It graced the necks of Egyptian Pharaohs and adorned the ceremonial dress of early Native Americans. This beautiful robin’s egg blue gemstone has been attributed with healing powers, promoting the wearer’s status and wealth, protecting from evil and bringing good luck. Turquoise is an opaque, light to dark blue or blue-green gem with its finest colour being an intense blue. Turquoise may contain narrow veins of other materials either isolated or as a network. They are usually black, brown, or yellowish-brown in colour. Known as the matrix, these veins of colour are sometimes in the form of an intricate pattern, called a spider web. Turquoise is an Artist’s stone promoting creativity and self expression. It helps to connect to one’s muse as it takes intuition and inspiration to new levels. It can bring good luck, foresight, spiritual grounding, and is a mood balancer. It brings about peace of mind, and loyalty.",
    "color": "Light Blue",
    "mname": "turquoise",
    "model": "models/3d_objects3/december.fbx",
}]

function findStone() {

            // create the dataOut variable
            let entry = document.getElementById("yourAnswer").value;
            let dataOut = ""
            //loop through all the objects
            for (let i=0; i < birthstones.length; i++) {
                // test if the eye colors match
                if (birthstones[i].month.toLowerCase() == entry.toLowerCase()) {
                    // if they do match add the information about the object to the dataOut string
                    dataOut += "<b> Month:\n </b>" +birthstones[i].month + "<BR>\n";
                    dataOut += "<b> Stone:\n </b>" + birthstones[i].birthStone + "<BR>\n";
                    dataOut += "<b> Color:\n </b>" + birthstones[i].color + "<BR>\n";
                    dataOut += "<b> Info:<BR>\n </b>" + birthstones[i].info + "<BR>\n";
                    //to update current stone
  					current_stone = birthstones[i].mname
                }
                // after the loop is done, display dataOut
                document.getElementById("answer").innerHTML = dataOut;
            }
        }

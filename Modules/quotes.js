const quotes =[
    {quote: "Celui qui ne progresse pas chaque jour, recule chaque jour.", author: "Confusius"},
    {quote: "L'impossible recule toujours quand on marche vers lui.", author: "Antoine de Saint-Exupéry"},
    {quote: "La vie c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein."},
    {quote: "L'obstination est le chemin de la réussite.", author: "Charlie Chaplin"},
    {quote: "Avoir du courage ne veut pas dire que nous n'avons pas peur. Avoir du courage et faire preuve de courage signifie que nous affrontons nos peurs. Nous pouvons dire: Je suis tombé, mais je vais me relever.", author: "Maya Angelou"},
    {quote: "Le succès n'est pas final L'echec n'est pas fatal C'est le courage de continuer qui compte.", author: " Wiston Churchill"},
    {quote: "Il ne faut pas toujours tourner la page, il faut parfois la déchirer.", author: "Achille Chavée"},
    {quote: "Brisez vos limites, faites sauter les barrières de vos contraintes, mobilisez votre volonté, exigez la liberté comme un droit, soyez ce que vous voulez être. Découvrez ce que vous aimeriez faire et faites tout votre possible pour y parvenir.", author: "Richard Bach"},
    {quote: "Un homme sans vision, sans projet, sans objectif dans la vie est un homme sans destinée, car c'est l'homme qui prépare sa propre destinée.", author: "Curlis Tchoffo"},
    {quote: "Je préfère l'avenir au passé, car c'est là que j'ai décidé de vivre le restant de mes jours.", author: "Victor Hugo"},
    {quote: "Il est dur d'échouer ; mais il est pire de n'avoir jamais tenté de réussir.", author: "Franklin Delano Roosevelt"},
    {quote: "Celui qui avance avec confiance dans la direction de ses rêves connaîtra un succès inattendu dans la vie ordinaire.", author: "N.H Kleinbaum"},
    {quote: "Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s'amuser, z = se taire.", author: "Albert Einstein"},
    {quote: "La vie, c'est comme la musique, il faut trouver son tempo pour avancer tous les jours.", author: "Michineau"},
    {quote: "Ne pas viser trop haut, trop vite. On risque de ne pas atteindre l'objectif et d'être déçu. Mieux vaut procéder par étapes et s'assigner des buts progressifs. Car chaque petite victoire en prépare une plus grande.", author: "Catherine Rambert"},
    {quote: "Avoir un but trace la voie.", author: "Lao-Tseu"},
    {quote: "Gardez toujours à l'esprit que votre propre décision de réussir est plus importante que n'importe quoi d'autre.", author: "Abraham Lincoln"},
    {quote: "Je peux accepter l'échec, tout le monde échoue dans quelque chose. Mais je ne peux pas accepter de ne pas essayer.", author: "chael Jordan"},
    {quote: "Beaucoup de chemins mènent à la réussite, mais un seul mène immanquablement à l'échec, celui qui consiste à tenter de plaire à tout le monde.", author: "njamin Franklin"},
    {quote: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", author: "Sénèque"},
    {quote: "Chaque bonne réalisation, grande ou petite, connaît ses périodes de corvées et de triomphes; un début, un combat et une victoire.", author: "Gandhi"},
    {quote: "Il ne faut pas penser à l'objectif à atteindre, il faut seulement penser à avancer. C'est ainsi, à force d'avancer, qu'on atteint ou qu'on double ses objectifs sans même s'en apercevoir.", author: "rnard Werber"},
    {quote: "Pour réussir, retenez bien ces trois maximes: voir c'est savoir, vouloir c'est pouvoir, oser c'est avoir.", author: "Alfred de Musset"},
    {quote: "Réussir c'est être en paix avec soi même, maitriser ses pensées, focaliser ses objectifs et n'attendre rien de personne.", author: "Doubal Abdeljalil"},
    {quote: "La vie est un défi, vivez-là, sentez-là, aimez-là, riez, pleurez, jouez, gagnez, perdez, trébuchez, mais relevez-vous toujours et avancez !", author: "Sandrine Fillassier"},
    {quote: "Il arrive souvent de ne rien obtenir parce que l'on ne tente rien.", author: "Jacques Deval"},
    {quote: "On regrette rarement d'avoir osé, mais toujours de ne pas avoir essayer.", author: "Serge Lafrance"},
    ];

let random = Math.floor(Math.random()*27);
//const dailyQuote = quote.slice(--random, ++random).toString();
const dailyQuoteArray = quotes[random];

const dailyQuote =  dailyQuoteArray.quote;
  
const dailyAuthor = dailyQuoteArray.author;

    export {dailyQuote, dailyAuthor};
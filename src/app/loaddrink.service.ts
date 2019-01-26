import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Drink} from './drink';
import { Drinkdata } from './drinkdata';

@Injectable({
  providedIn: 'root'
})
export class LoaddrinkService 
{
  drinks: Array<Drink>;
  drinksdata: Array<Drinkdata>;
  drinkc: Array<Array<Drink>>;
  drinkUrl = 'assets/json/cocktails.php';


  public  getDrinkInfo()
  {
      return this.drinkc;
  }

  public  getDrinks()
  {
      return this.drinks;
  }

  public getDrinkData()
  {
     return this.drinksdata;
  }


    constructor()
    {
      this.drinks = [
        {
          "id": 1,
          "nome": "Alexander",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Alexander_(cocktail)"
        },
        {
          "id": 2,
          "nome": "Americano",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Americano_(cocktail)"
        },
        {
          "id": 3,
          "nome": "Angel Face",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Angel_Face_(cocktail)"
        },
        {
          "id": 4,
          "nome": "Aviation",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Aviation_(cocktail)"
        },
        {
          "id": 5,
          "nome": "Bacardi",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Bacardi_cocktail"
        },
        {
          "id": 6,
          "nome": "Between the Sheets",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Between_the_Sheets"
        },
        {
          "id": 7,
          "nome": "Casino",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Casino_(cocktail)"
        },
        {
          "id": 8,
          "nome": "Clover Club",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Clover_Club"
        },
        {
          "id": 9,
          "nome": "Daiquiri",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Daiquiri"
        },
        {
          "id": 10,
          "nome": "Derby",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Derby_(cocktail)"
        },
        {
          "id": 11,
          "nome": "Dry Martini",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Martini_(cocktail)"
        },
        {
          "id": 12,
          "nome": "Gin Fizz",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Gin_Fizz"
        },
        {
          "id": 13,
          "nome": "John Collins",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/John_Collins_(cocktail)"
        },
        {
          "id": 14,
          "nome": "Manhattan",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Manhattan_(cocktail)"
        },
        {
          "id": 15,
          "nome": "Mary Pickford",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Mary_Pickford_(cocktail)"
        },
        {
          "id": 16,
          "nome": "Monkey Gland",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Monkey_Gland"
        },
        {
          "id": 17,
          "nome": "Negroni",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Negroni"
        },
        {
          "id": 18,
          "nome": "Old Fashioned",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Old_Fashioned"
        },
        {
          "id": 19,
          "nome": "Paradise",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Paradise_(cocktail)"
        },
        {
          "id": 20,
          "nome": "Planter's Punch",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Planters_Punch"
        },
        {
          "id": 21,
          "nome": "Porto flip",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Porto_flip"
        },
        {
          "id": 22,
          "nome": "Ramos Gin Fizz",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Ramos_Gin_Fizz"
        },
        {
          "id": 23,
          "nome": "Rusty Nail",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Rusty_Nail_(cocktail)"
        },
        {
          "id": 24,
          "nome": "Sazerac",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Sazerac"
        },
        {
          "id": 25,
          "nome": "Screwdriver",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Screwdriver"
        },
        {
          "id": 26,
          "nome": "Sidecar",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Sidecar_(cocktail)"
        },
        {
          "id": 27,
          "nome": "Stinger",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Stinger_(cocktail)"
        },
        {
          "id": 28,
          "nome": "Tuxedo",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Tuxedo_(cocktail)"
        },
        {
          "id": 29,
          "nome": "Whiskey Sour",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/Whiskey_Sour"
        },
        {
          "id": 30,
          "nome": "White lady",
          "categoria": 1,
          "link": "https://it.wikipedia.org/wiki/White_lady"
        },
        {
          "id": 31,
          "nome": "Bellini",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Bellini_(cocktail)"
        },
        {
          "id": 32,
          "nome": "Black Russian",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Black_Russian"
        },
        {
          "id": 33,
          "nome": "Bloody Mary",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Bloody_Mary"
        },
        {
          "id": 34,
          "nome": "Caipirinha",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Caipirinha"
        },
        {
          "id": 35,
          "nome": "Champagne Cocktail",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Cocktail_champagne"
        },
        {
          "id": 36,
          "nome": "Cosmopolitan",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Cosmopolitan_(cocktail)"
        },
        {
          "id": 37,
          "nome": "Cuba libre",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Cuba_libre"
        },
        {
          "id": 38,
          "nome": "French 75",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/French_75"
        },
        {
          "id": 39,
          "nome": "French Connection",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/French_Connection_(cocktail)"
        },
        {
          "id": 40,
          "nome": "Godfather",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Godfather"
        },
        {
          "id": 41,
          "nome": "Godmother",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Godmother"
        },
        {
          "id": 42,
          "nome": "Golden dream",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Golden_dream"
        },
        {
          "id": 43,
          "nome": "Grasshopper",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Grasshopper_(cocktail)"
        },
        {
          "id": 44,
          "nome": "Harvey Wallbanger",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Harvey_Wallbanger"
        },
        {
          "id": 45,
          "nome": "Hemingway Special",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Hemingway_Special"
        },
        {
          "id": 46,
          "nome": "Horse's Neck",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Horses_Neck"
        },
        {
          "id": 47,
          "nome": "Irish coffee",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Irish_coffee"
        },
        {
          "id": 48,
          "nome": "Kir",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Kir_(cocktail)"
        },
        {
          "id": 49,
          "nome": "Long Island Iced Tea",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Long_Island_Iced_Tea"
        },
        {
          "id": 50,
          "nome": "Mai Tai",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Mai_Tai"
        },
        {
          "id": 51,
          "nome": "Margarita",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Margarita_(cocktail)"
        },
        {
          "id": 52,
          "nome": "Mimosa",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Mimosa_(cocktail)"
        },
        {
          "id": 53,
          "nome": "Mojito",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Mojito"
        },
        {
          "id": 54,
          "nome": "Moscow mule",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Moscow_mule"
        },
        {
          "id": 55,
          "nome": "Mint Julep",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Mint_Julep"
        },
        {
          "id": 56,
          "nome": "Piña Colada",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Pi%C3%B1a_Colada"
        },
        {
          "id": 57,
          "nome": "Rose",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Rose_(cocktail)"
        },
        {
          "id": 58,
          "nome": "Sea Breeze",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Sea_Breeze"
        },
        {
          "id": 59,
          "nome": "Sex on the Beach",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Sex_on_the_Beach"
        },
        {
          "id": 60,
          "nome": "Singapore Sling",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Singapore_Sling"
        },
        {
          "id": 61,
          "nome": "Tequila Sunrise",
          "categoria": 2,
          "link": "https://it.wikipedia.org/wiki/Tequila_Sunrise_(cocktail)"
        },
        {
          "id": 62,
          "nome": "Barracuda",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Barracuda_(cocktail)"
        },
        {
          "id": 63,
          "nome": "Bramble",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Bramble"
        },
        {
          "id": 64,
          "nome": "B-52",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/B-52_(cocktail)"
        },
        {
          "id": 65,
          "nome": "Dark 'n' Stormy",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Dark_n_Stormy"
        },
        {
          "id": 66,
          "nome": "Dirty Martini",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Dirty_Martini"
        },
        {
          "id": 67,
          "nome": "Espresso Martini",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Espresso_Martini"
        },
        {
          "id": 68,
          "nome": "French Martini",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/French_Martini"
        },
        {
          "id": 69,
          "nome": "Kamikaze",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Kamikaze_(cocktail)"
        },
        {
          "id": 70,
          "nome": "Lemon Drop Martini",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Lemon_Drop_Martini"
        },
        {
          "id": 71,
          "nome": "Pisco sour",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Pisco_sour"
        },
        {
          "id": 72,
          "nome": "Russian Spring Punch",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Russian_Spring_Punch"
        },
        {
          "id": 73,
          "nome": "Spritz Veneziano",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Spritz"
        },
        {
          "id": 74,
          "nome": "Tommy's Margarita",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Margarita_(cocktail)"
        },
        {
          "id": 75,
          "nome": "Vampiro",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Vampiro_(cocktail)"
        },
        {
          "id": 76,
          "nome": "Vesper",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Vesper_(cocktail)"
        },
        {
          "id": 77,
          "nome": "Yellow Bird",
          "categoria": 3,
          "link": "https://it.wikipedia.org/wiki/Yellow_Bird_(cocktail)"
        }
      ];


      this.drinkc = new Array<Array<Drink>>();
          this.drinkc[0] = new Array<Drink>();
          this.drinkc[1] = new Array<Drink>();
          this.drinkc[2] = new Array<Drink>();
          this.drinkc[3] = new Array<Drink>();
        
          for(let drink of this.drinks)
          {
            this.drinkc[drink.categoria].push(drink);
          }




      this.drinksdata = [
        {
          "id": 1,
          "testo": "<p>L'<b>Alexander</b> (o <b>Gin Alexander</b>, per differenziarlo dalle varianti) è un cocktail a base di  gin, Crema di cacao scura e crema di latte.Viene spesso confuso con la sua variante IBA Brandy Alexander, che utilizza però il cognac. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>3 cl di Gin</li><li>3 cl di crème de cacao scura</li><li>3 cl di crema di latte</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare gli ingredienti in uno shaker pieno di ghiaccio e shakerare molto vigorosamente. Filtrare dunque in una coppetta da cocktail e guarnire eventualmente con una spolverata di noce moscata.</p><h2><span id=\"Descrizione\">Descrizione</span></h2><p>L'Alexander è un cocktail decisamente dolce grazie all'uso del cacao e della panna, proprietà che, unitamente al basso tenore alcolico (inferiore solitamente ai 20° alc.), lo rende un cocktail spesso bevuto dalle donne.. Tecnicamente è un after dinner classico preparato con la tecnica <i>shake and strain</i>, facente parte della categoria \"trio cocktail\", che grazie alla sua fama ha dato origine alla famiglia omonima degli <i>Alexander cocktails</i>.</p><h2><span id=\"Storia\">Storia</span></h2><p>L'Alexander è un cocktail che compare già nelle prime guide di inizio '900, ma proprio per questo vi sono molte ipotesi legate all'origine di questo drink.<br />I primi ricettari che certificano la preparazione di un cocktail denominato \"Alexander\" sono il \"<i>Jackʼs Manual</i>\" scritto da J. A. Grohusko nel 1910, e il \"<i>Straub's manual of mixed drinks</i>\" del 1913, ma la ricetta, totalmente differente, prevedeva l'uso di rye whiskey e Bénédictine. La ricetta attuale denominata con il nome corrente compare la prima volta nel testo \"<i>New bartender's guide</i>\" redatto da Charles S. Mahoney e Harry Montague nel 1914. <br /> Una leggenda, meno accreditata, afferma che il cocktail fu creato da Troy Alexander, barista del ristorante <i>Rector's </i> di New York agli inizi del '900, per festeggiare il successo della campagna pubblicitaria della Delaware, Lackawanna and Western Railroad: basandosi sul vestito bianco della mascotte, Phoebe Snow, creò un cocktail basato sulla crema di latte.Parallelamente, in Inghilterra, fu creato un cocktail simile, ma denominato diversamente: creato a Londra nel 1922 da Henry Mc Elhone al \"Ciro's Club\", il cocktail fu dedicato al matrimonio fra la principessa Mary e il conte Henry Lascelles. </p><h2><span id=\"Nome\">Nome</span></h2><p>L'alexander, date le molteplici origini, viene chiamato anche <b>Gin Alexander</b>, <b>Princess Mary</b> e <b>Panamà</b> (quest'ultimo nome erroneamente in quanto indica un Brandy Alexander o la variante col rum).</p>",
          "immagine": "Alexander_Cocktail.png"
        },
        {
          "id": 2,
          "testo": "<p>L'<b>Americano</b> è un cocktail italiano che, a dispetto del nome, fa uso esclusivamente di prodotti italiani: bitter Campari, Vermouth rosso e seltz. È un cocktail ufficiale della IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ricetta\">Ricetta</span></h3><ul><li>3 cl di bitter</li><li>3 cl di vermut rosso</li><li>Una spruzzata di soda</li><li>twist di limone ( scorzetta di limone )</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>L'Americano si prepara con la tecnica build (costruzione direttamente nel bicchiere) e si serve di un bicchiere Old Fashioned. Si versa dunque nel bicchiere colmo di ghiaccio Vermouth rosso e Bitter, dopodiché si va a completare con la Soda la quale va miscelata leggermente utilizzando lo stirrer. Alla fine si strizza e si mette all'interno del cocktail una scorzetta di limone e una fettina d'arancia come decorazione.</p><h2><span id=\"Storia\">Storia</span></h2><p>Come molti cocktail, la sua origine è ignota ma vi sono diversi racconti che accompagnano la sua storia. Il più antico cita l'Americano nel 1860, ideato presso il Gaspare Campari's bar a Milano. Un altro racconto lo fa risalire agli anni trenta, dando anche una spiegazione al perché del nome che non rispecchia la natura del cocktail e dei suoi ingredienti; i quali sono, di fatto, tutti tipicamente italiani: il Campari è di Milano, il Vermut è di Torino; milanese è anche la Soda. Il cocktail quindi sarebbe stato chiamato così in onore di Primo Carnera, un pugile italiano molto attivo negli Stati Uniti, e per questo detto appunto \"l'Americano\".</p><p>L'Americano diventa, negli anni un cocktail di successo, raggiungendo una certa fama anche grazie ad alcuni omaggi cinematografici. Il cocktail italiano è considerato anche il \"padre\" del Negroni.</p>",
          "immagine": "Americano_cocktail.jpg"
        },
        {
          "id": 3,
          "testo": "<p>L'<b>Angel Face</b> è un cocktail all-day a base di gin, apricot brandy e calvados, di origine francese. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>3 cl di gin</li><li>3 cl di apricot brandy</li><li>3 cl di calvados</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Mettere gli ingredienti in uno shaker con il ghiaccio. Shakerare e versare il contenuto in una coppetta da cocktail attraverso uno strainer.</p>",
          "immagine": "IBA_Cocktail_Angel_Face_(28068833805).jpg"
        },
        {
          "id": 4,
          "testo": "<p>L'<b>Aviation</b> è un cocktail a base di gin e maraschino. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Storia\">Storia</span></h2><p>L'<b>aviation cocktail</b> è un cocktail creato nel 1916, durante la prima guerra mondiale, in onore dei piloti inglesi.Questo drink ha 2 possibili ideatori: La prima narra dell'improvvisazione di un barman di un circolo di ufficiali di aviazione, di un campo volo dietro la prima linea, che lo miscelò in onore dei piloti inglesi (prima guerra mondiale). Venne usato spesso come cocktail commemorativo o una sorta di rituale, con il quale i piloti brindavano al loro ritorno. La seconda teoria fa corrispondere il creatore come il primo a trascrivere la ricetta : Hugo Ensslin, nel 1916, dedicandolo ai pionieri dell'aviazione</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4,5 cl di gin</li><li>1,5 cl di maraschino</li><li>1,5 cl di succo di limone fresco</li><li>Scorza di limone o una ciliegia maraschino</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Viene preparato in una coppetta da cocktail raffreddata con ghiaccio. In un shaker sono versati 4,5 cl di gin, 1,5 cl di maraschino e 1,5 cl di succo di limone fresco, il tutto agitato e versato nella coppetta da cocktail svuotata precedentemente dal ghiaccio. Il cocktail viene guarnito con una ciliegia al maraschino o meglio una marasca oppure con buccia di limone a spirale.</p>",
          "immagine": "Aviation_Cocktail.jpg"
        },
        {
          "id": 5,
          "testo": "<p>Il <b>Bacardi cocktail</b> è un Cocktail ufficiale IBA a base di rum Bacardi. Fa parte della categoria dei pre-dinner cocktail.</p><h2><span id=\"Storia_del_Bacardi_Cocktail\">Storia del Bacardi Cocktail</span></h2><p>Il Bacardi è una variante del cocktail Daiquiri (che contiene rum, succo di lime o limone e sciroppo di zucchero, anziché lo sciroppo di granatina). La versione che conosciamo noi oggi è nata negli USA. Le prime ricette del Bacardi apparvero verso il 1917, in un ricettario di Tom Bullock, “Ideal Bartender”.</p><p>Il distillato Bacardi invece è legato a Don Facundo Bacardi. Nato in Catalogna, si trasferì successivamente a Santiago di Cuba per avviare un'attività di commercio in vini. Poi nel 1862 acquistò un alambicco e cominciò la distillazione della melassa da canna da zucchero delle piantagioni vicine.</p><p>Il suo ron (rum) diffusosi prima a L'Avana e poi in Florida, ebbe un grande successo. Ci fu una pausa solo durante il proibizionismo, quando furono interrotte le esportazioni verso gli USA, tuttavia Bacardi continuò l'espansione anche grazie a numerosi “turisti” americani che vennero ad approvvigionarsi alla fonte.</p><p>Nel 1960 Fidel Castro, con un colpo di mano, nazionalizzò le distillerie di Santiago, ma l'azienda aveva fatto in tempo a trasferirsi in Messico e a Porto Rico.</p>",
          "immagine": "Bacardi_cocktail.jpg"
        },
        {
          "id": 6,
          "testo": "<p>Il <b>Between the sheets</b> è un cocktail alcolico.</p><ul><li>4/10 Brandy</li><li>3/10 Rum bianco</li><li>1/10 Cointreau o Triple sec</li><li>2/10 Succo di limone</li></ul><p>Mettete il brandy, il rum bianco, il triple sec e il succo di limone nello shaker con ghiaccio tritato. Shekerare energicamente, quindi filtrate nella coppetta cocktail ghiacciata.</p><p>La versione originale di questo cocktail (3/10 Brandy, 3/10 Rum bianco, 3/10 Cointreau, un cucchiaino di succo di limone) è, secondo alcuni, liquorosa e abbastanza pesante.</p>",
          "immagine": "between-the-sheets.jpg"
        },
        {
          "id": 7,
          "testo": "<p>Il <b>Casino</b> è un all day cocktail a base di gin, maraschino e orange bitters. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4 cl di dry gin (Old Tom Gin)</li><li>1 cl di maraschino</li><li>1 cl di orange bitters</li><li>1 cl di succo di limone fresco</li><li>1 ciliegia maraschino</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere una coppetta da cocktail e riempirla di ghiaccio. In un secondo bicchiere aggiungere 4 cl di Old Tom Gin, 1 cl di maraschino, 1 cl di orange bitters e 1 cl di succo di limone fresco, poi versare il tutto in uno shaker riempito di ghiaccio ed agitare. Versare nella coppetta da cocktail da cui è stato rimosso il ghiaccio. Guarnire con una ciliegia maraschino. Servire senza cannuccia.</p>",
          "immagine": "casino.jpg"
        },
        {
          "id": 8,
          "testo": "<p>Il <b>Clover Club</b> è un all day cocktail a base di gin e sciroppo di lampone. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4,5 cl di gin</li><li>1,5 cl di sciroppo di lampone</li><li>1,5 cl di succo di limone fresco</li><li>Gocce di albume d'uovo</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Versare nello shaker riempito di ghiaccio 4,5 cl di gin, 1,5 cl di succo di lampone e 1,5 cl di succo di limone fresco. Completare aggiungendo da qualche goccia a mezzo albume d'uovo. Agitare bene il tutto. Filtrare il contenuto in una coppetta da cocktail precedentemente raffreddata. Servire senza cannuccia.</p>",
          "immagine": "15-09-26-RalfR-WLC-0120.jpg"
        },
        {
          "id": 9,
          "testo": "<p>Il <b>daiquiri</b> è un cocktail da aperitivo di tipo sour di origini caraibiche a base di rum bianco, succo di limetta e  sciroppo di zucchero, servito in coppetta da cocktail.</p><p>È un cocktail riconosciuto ufficialmente dall'IBA, assieme alle sue variante Hemingway Special, una particolare versione creata per il famoso scrittore, che era un grande estimatore del Daiquiri.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4,5 cl di rum bianco</li><li>2,5 cl di succo di lime fresco</li><li>1,5 cl di sciroppo di zucchero</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Preparare nello shaker e servire in coppetta da cocktail attraverso uno <i>strainer</i>.</p><h2><span id=\"Storia\">Storia</span></h2><p>Già in voga negli USA ai primi del Novecento, le sue origini vengono fatte risalire al 1898 quando vi fu la guerra tra Stati Uniti e Spagna, dopo l'affondamento della nave Maine nel porto dell'Avana. Secondo gli storiografi un marine sbarcò in un piccolo villaggio nei pressi di Santiago di Cuba, precisamente a Daiquiri. Qui per placare la sete entrò in una baracca che fungeva da mescita. Rifiutandosi di bere rum liscio, lo fece allungare con succo di lime e poi lo corresse ulteriormente con un po' di zucchero.</p><p>Un'altra leggenda, sposta la sua data di nascita nel 1905, pochi anni più tardi, quando alcuni ingegneri americani impegnati nei lavori in una miniera lo inventarono e gli diedero il nome della spiaggia cubana Daiquiri. Successe che l'ingegnere Pagliuchi visitò una miniera di ferro ad est di Cuba chiamata Daiquiri. Qui fece domande all'ingegnere americano Jennings S. Cox sul funzionamento della miniera per poterne esplorare altre. Alla fine della giornata, Pagliuchi propose di bere qualcosa. La leggenda narra che Cox avesse a disposizione solo rum, lime e zucchero.</p>",
          "immagine": "Classic_Daiquiri_in_Cocktail_Glass.jpg"
        },
        {
          "id": 10,
          "testo": "<p>Il <b>Derby</b> è un all day cocktail a base di gin, peach bitters e menta. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>6 cl di gin</li><li>2 gocce di peach bitters</li><li>2 foglioline di menta</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Riempire di ghiaccio una coppetta da cocktail e un mixing glass. Aggiungere nel mixing glass 6 cl di gin e 2 gocce di peach bitters, poi mescolare bene. Filtrare il contenuto del mixing glass nella coppetta da cocktail una volta rimosso il ghiaccio in essa. Guarnire con due foglioline di menta. Servire senza cannuccia.</p>",
          "immagine": "derby.jpg"
        },
        {
          "id": 11,
          "testo": "<p>Il <b>Martini</b> o <b>Martini Dry</b> è un celebre cocktail pre-dinner a base di gin e vermut dry. È un cocktail ufficiale della IBA, con il nome <b>Dry Martini</b>.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La nuova ricetta IBA del 2011 prevede la seguente ricetta:</p><ul><li>6 cl di gin</li><li>1 cl di dry vermut</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Riempire una coppa Martini di ghiaccio per raffreddarla, riempire un mixing glass di ghiaccio e versare tutti gli ingredienti al suo interno, quindi mescolare bene. Scolare il ghiaccio dalla coppa Martini e versare il cocktail, filtrandolo dal ghiaccio con lo strainer. Guarnire con un'oliva oppure spremere una scorza di limone sulla superficie del Martini e inserirla nel bicchiere.</p><h2><span id=\"Nome\">Nome</span></h2><p>L'origine del nome è dibattuta. Alcuni sostengono che sia il nome del barista italiano che per primo, nella New York del 1912, l'avrebbe preparato per John D. Rockefeller. Altri suppongono che derivi dal celebre cocktail di Jerry Thomas (detto the professor) il Martinez (1850), secondo altri ancora il Martinez fu trasformato in Martini da Julio Richelieu nel 1870, altri infine dicono sia legato alla \"Martini & Rossi\".</p><h2><span id=\"Varianti\">Varianti</span></h2><p>Esistono diverse varianti del Martini, come lo Sweet Martini, il Martini Perfect ed il Medium Martini, oltre al Martini Vodka, la cui variante è il Vesper cocktail, divenuto celebre poiché cocktail preferito da James Bond. Il Martini Dry faceva parte delle 6 ricette fondamentali del \"The Fine Art of Mixing Drinks\" di David A. Embury, del 1948.</p><p>La ricetta proposta da Embury era la seguente:</p><ul><li>7 parti di gin</li><li>1 parte di vermouth (dry)</li></ul><p>Una versione molto secca è rappresentata dal Martini Hemingway, che prende il nome proprio dal famoso scrittore e si prepara mescolando Martini dry (1 parte) nel mixing glass con ghiaccio, quindi buttare via il Martini e mescolare alla stessa maniera 9 parti di gin. Versare quindi il contenuto nella classica coppetta precedentemente raffreddata e, prima di servire, strizzare una piccola scorza di limone 2 volte.</p>",
          "immagine": "15-09-26-RalfR-WLC-0084.jpg"
        },
        {
          "id": 12,
          "testo": "<p>Il <b>Gin Fizz</b> è un cocktail, un long drink a base di gin e soda. È alcolico generalmente al 15%. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4.5 cl di gin</li><li>3 cl di succo di limone fresco</li><li>1 cl di sciroppo di zucchero</li><li>8 cl di soda</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere un bicchiere di tipo highball e riempirlo di cubetti di ghiaccio. Prendere uno shaker e riempirlo a sua volta di cubetti di ghiaccio. Aggiungere in un bicchiere 1 cl (1/3 oz) di sciroppo semplice, 4,5 cl (1,5 oz) di gin e 3 cl (1 oz) di succo di limone fresco. Rimuovere l'acqua in eccesso dallo shaker, versarvi gli ingredienti e agitare. Rimuovere il ghiaccio dall'highball e versarvi la soluzione ottenuta. Completare aggiungendo 8 cl di soda. Guarnire con scorza di limone da riporre all'interno dell'highball e con una rondella di limone sul bicchiere. Servire senza cannuccia.</p>",
          "immagine": "RamosGinFizzRooseveltNOLAJuly2009.JPG"
        },
        {
          "id": 13,
          "testo": "<p>Il <b>John Collins</b> è un cocktail la cui esistenza è testimoniata fin dal 1869, ma che potrebbe essere nato anche prima. Si ritiene che sia stato creato da un omonimo capocameriere che lavorava al Limmer's Old House di Conduit Street, nel quartiere di Mayfair a Londra, un popolare locale londinese attorno agli anni 1790–1817. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4,5 cl di gin</li><li>1,5 cl di sciroppo</li><li>3 cl di succo di limone fresco</li><li>6 cl di acqua gassata</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare tutti gli ingredienti direttamente dentro l'Highball riempito di ghiaccio. Mescolare lentamente. Decorare con una fetta di limone e una ciliegia sotto spirito. Aggiungere un goccio di Angostura.</p><h2><span id=\"Descrizione\">Descrizione</span></h2><p>Il John Collins è un cocktail realizzato con bourbon o gin, succo di limone, zucchero e acqua gassata. La prima ricetta attestata del John Collins si trova all'interno dello <i>Steward and Barkeeper's Manual</i> del 1869:</p><p>Lo storico di cocktail David Wondrich ha speculato che la ricetta originale introdotta a New York negli anni 1850 potrebbe essere stata molto simile ai punch di gin che erano serviti nei locali di Londra, come Garrick, durante la prima metà del XIX secolo. Wondrich afferma che questi ultimi sarebbero dovuti essere del tipo «gin, succo di limone, acqua gassata fredda e Maraschino».</p><p>Il richiamo specifico al Old Tom Gin nella ricetta del 1869 è la probabile causa del cambio di nome avvenuto in seguito nella ricetta di Jerry Thomas del 1876, dove il cocktail viene indicato col nome di \"Tom Collins\". Al giorno d'oggi, con \"John Collins\" si intende un \"Tom Collins\" preparato con whiskey al posto del gin.</p>",
          "immagine": "IBA_Cocktail_John_Collins_(29221732881).jpg"
        },
        {
          "id": 14,
          "testo": "<p>Il <b>Manhattan</b> è uno dei più famosi cocktail a base di whisky, servito come aperitivo. Si narra che l'inventore di questo aperitivo fosse un barman del Manhattan Club di New York (da cui il nome), che lo avrebbe preparato per la prima volta nel 1874.</p><p>Le proporzioni di whisky e vermut variano da dolce (1:1) a secco (4:1), ma secondo alcune fonti la ricetta originaria era 2:1 e veniva utilizzato solo rye whiskey. Nel tempo si sono modificati sia la ricetta che gli ingredienti, tanto è vero che la versione più diffusa ad oggi utilizza whisky statunitense. Le qualità di più diffuse sono rye whiskey, whisky canadese e bourbon.</p><p>Il Manhattan è un cocktail ufficiale IBA, ed è inserito nella lista dei sei cocktail fondamentali all'interno del libro del 1948 <i>The Fine Art of Mixing Drinks</i> di David A. Embury con la seguente ricetta: 5 parti di whisky americano, 1 parte di vermut e una goccia di angostura. È inoltre uno dei cinque cocktail che prendono il nome di uno dei borghi di New York.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>5 cl di rye o whisky canadese</li><li>2 cl di vermouth rosso</li><li>1 goccia di angostura</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Il Manhattan si prepara mescolando (senza agitare) gli ingredienti all'interno del mixing glass pieno di ghiaccio per 2/3. L'angostura ha un sapore molto marcato, potrebbe bastare solo una goccia, secondo i gusti. Si serve in una coppetta da cocktail (da Martini) con lo strainer, guarnito con una ciliegina al maraschino.</p><h2><span id=\"Storia\">Storia</span></h2><p>Secondo una popolare teoria, il cocktail sarebbe stato inventato al Manhattan Club di New York nei primi anni 1870 da Iain Marshall, che era stato incaricato di preparare un banchetto organizzato da Jennie Jerome (anche nota come Lady Randolph, la madre di Winston Churchill) in onore di Samuel Tilden, candidato alle elezioni presidenziali.</p>",
          "immagine": "A_Manhattan.jpg"
        },
        {
          "id": 15,
          "testo": "<p>Il <b>Mary Pickford</b> è un \"All day cocktail\". </p><p>Ingredienti:</p><p>- 6 cl Rum bianco;</p><p>- 1 cl Maraschino;</p><p>- 6 cl succo d'ananas;</p><p>- 1 cl sciroppo di granatina.</p><p>Questo cocktail si prepara usando la tecnica \"<b>Shake and strain</b>\". Guarnire con fetta d'ananas e ciliegia da cocktail.</p>",
          "immagine": "mary_pickford.png"
        },
        {
          "id": 16,
          "testo": "<p>Il <b>Monkey Gland</b> è un all day cocktail a base di gin, succo d'arancia, granatina e assenzio. È un cocktail ufficiale dell'IBA. </p><h2><span id=\"Storia\">Storia</span></h2><p>Il suo nome significa \"ghiandola di scimmia\" e pare che fosse stato ideato dal barman Harry MacElhone, presso l'Harry's New York Bar di Parigi, in onore dello scienziato Serge Voronoff. Il nome si riferisce ai testicoli di scimmia: Voronoff aveva messo a punto una pratica che prevedeva l'impianto di tessuto testicolare di scimmia nell'uomo con l'intento di far ringiovanire il paziente.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>5 cl di gin</li><li>3 cl succo d'arancia fresco</li><li>2 gocce di assenzio</li><li>2 gocce di granatina</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere una coppetta da cocktail e raffreddarla riempiendola di cubetti di ghiaccio. In un secondo bicchiere aggiungere 5 cl di gin, poi 3 cl di succo d'arancia fresco, 2 gocce di granatina e 2 gocce d'assenzio. Versare il tutto in uno shaker pieno di ghiaccio ed agitare bene. Servire senza cannuccia.</p>",
          "immagine": "Monkey_Gland_(11677703163).jpg"
        },
        {
          "id": 17,
          "testo": "<p>Il <b>Negroni</b> è un cocktail da aperitivo alcolico dal tipico colore rosso chiaro, a base di vermut rosso, bitter Campari e gin.</p><p>È un cocktail riconosciuto ufficialmente dall'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>3 cl di gin</li><li>3 cl di Campari</li><li>3 cl di vermut rosso</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare tutti gli ingredienti direttamente nel bicchiere Old fashioned riempito di ghiaccio. Mescolare delicatamente. Decorare con metà fetta d'arancia.</p><h2><span id=\"Storia\">Storia</span></h2><p>Fu ideato a Firenze nel 1919-20 dal conte Camillo Negroni. Negli anni '20 il conte era solito frequentare l'aristocratico Caffè Casoni in Via de' Tornabuoni a Firenze (locale in cui verrà trasferita in seguito l'attività del già esistente Caffè Giacosa e, più recentemente, passato fra le proprietà di Roberto Cavalli) e, per variare dal suo abituale aperitivo Americano, chiese al barman Angelo Tesauro (secondo altri autori però pare che fosse Fosco Scarselli) di aggiungere un po' di gin in sostituzione del seltz, in onore degli ultimi viaggi londinesi. Il nuovo cocktail divenne noto come l'\"Americano alla moda del conte Negroni\", ovvero un Americano con un'aggiunta di gin, e in seguito prese il nome del conte stesso.</p><h2><span id=\"Varianti\">Varianti</span></h2><p>Il Negroni ha nel tempo dato forma a diverse varianti:</p><ul><li>Negroni sbagliato: una delle varianti più famose, sostituisce al gin lo spumante brut.</li><li>Negroski: una delle varianti più famose, sostituisce al gin la vodka.</li><li>Bencini: si compone sostituendo al gin il rum bianco.</li><li>Boulevardier: si compone sostituendo al gin il whisky (preferibilmente bourbon).</li><li>Old Pal: si compone sostituendo al gin il whisky (preferibilmente rye) e al vermouth dolce vermouth secco.</li><li>Dutch Negroni: si compone sostituendo al gin lo jenever.</li><li>Japanese Negroni: si compone sostituendo al gin il sakè.</li><li>Punt e Mes Negroni: si compone utilizzando il Punt e Mes come vermouth, che rende più amaro il cocktail. Il regista Luis Buñuel rivendica la paternità di questo cocktail nella propria autobiografia <i>Dei miei sospiri estremi</i>, chiamando questa variante \"<i>Buñueloni</i>\".</li></ul>",
          "immagine": "Negroni_served_in_Vancouver_BC.jpg"
        },
        {
          "id": 18,
          "testo": "<p>L'<b>Old Fashioned</b> è un cocktail pre-dinner a base di bourbon in cui vengono dissolti zucchero, angostura bitter ed essenza di scorza d'arancia. È così chiamato poiché viene servito in bicchieri chiamati appunto old fashioned. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4,5 cl di bourbon o rye whiskey</li><li>2 gocce di angostura bitter</li><li>1 zolletta di zucchero</li><li>1 spruzzata di soda</li><li>Decorazione: fetta d'arancia e ciliegina</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere un bicchiere tipo old fashioned da 6-10 once fluide, porvi una zolletta di zucchero ed impregnarla con gocce di angostura (3-4 dashes, cioè 1,8-2,5 ml). Utilizzare un pestello per schiacciare la zolletta. Aggiungere un goccio di acqua naturale per far sciogliere meglio lo zucchero e mescolare stando attenti a non creare grumi ed ottenere una soluzione omogenea. Aggiungere un'oncia di bourbon e poi 3-4 cubetti di ghiaccio. Utilizzare il cucchiaio da bar per mescolare e dissolvere lo zucchero (ed eventualmente lo sciroppo) nel bourbon. Aggiungere altri cubetti di ghiaccio sino a riempire il bicchiere, quindi un'ulteriore oncia di bourbon. Mescolare di nuovo con il cucchiaio da bar. Ricavare con un pelapatate una lunga fetta di scorza d'arancia sopra il bicchiere così che l'essenza d'arancia si depositi nella soluzione e la profumi.</p>",
          "immagine": "Oldfashioned-cocktail.png"
        },
        {
          "id": 19,
          "testo": "<p>Il <b>Paradise</b> è un all day cocktail a base di gin e apricot brandy e succo d'arancia. Trattasi di un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>3,5 cl di gin</li><li>2 cl di brandy all'albicocca (<i>apricot brandy</i>)</li><li>1,5 cl di succo d'arancia</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Riempire una coppetta da cocktail con del ghiaccio per raffreddarla. Riempire di ghiaccio uno shaker, togliervi l'acqua in eccesso, poi aggiungervi 3,5 cl di gin, 2 cl di brandy all'albicocca e 1,5 cl di succo d'arancia fresco ed agitare bene. Filtrare il contenuto dello shaker nella coppetta da cocktail svuotata del ghiaccio. Servire senza cannuccia.</p><h2><span id=\"Voci_correlate\">",
          "immagine": "Paradise_cocktail.jpg"
        },
        {
          "id": 20,
          "testo": "<p>Il <b>Planter's Punch</b> \u00e8 un Longdrink.\n\u00c8 un cocktail ufficiale della IBA.</p>\n\n\n<h2><span id=\"Preparazione\">Preparazione</span></h2>\n<p>Mettere tutti gli ingredienti, eccetto l'Angostura, nello shaker colmo di ghiaccio e shakerare. Filtrare e versare in un bicchiere colmo di ghiaccio. Aggiungere l'Angostura a fine preparazione.\nGuarnire con ciliegia al maraschino e fetta d'ananas.</p>",
          "immagine": "Planters_Punch_1.jpg"
        },
        {
          "id": 21,
          "testo": "<p>Il <b>Porto flip</b> è un cocktail ufficiale della International Bartenders Association, (IBA) a base di vino Porto.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>1.5 cl di brandy</li><li>4 cl di vino Porto</li><li>1 cl di tuorlo d'uovo</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Si prepara mettendo nello shaker tutti gli ingredienti con aggiunta di ghiaccio. Va servito nella coppetta da cocktail.</p>",
          "immagine": "Porto_Flip.jpg"
        },
        {
          "id": 22,
          "testo": "<p>Il <b>Ramos Gin Fizz</b> (anche noto come \"Ramos Fizz\" o \"New Orleans Fizz\") è un cocktail a base di gin preparato con succo di limone, albume d'uovo, zucchero, crema di latte, acqua ai fiori d'arancio e acqua gassata. Viene servito in un bicchiere di tipo Collins 12 o 14 once. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>4,5 cl di gin</li><li>3 cl di sciroppo di zucchero</li><li>1,5 cl di succo di <i>lime</i></li><li>1,5 cl di succo di limone fresco</li><li>6 cl di crema di latte (panna)</li><li>1 albume d'uovo</li><li>3 gocce di acqua ai fiori d'arancio</li><li>2 gocce di estratto di vaniglia</li><li>Soda (acqua gassata)</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Aggiungere tutti gli ingredienti (eccetto l'acqua gassata) nel mixing-glass, quindi shakerare senza ghiaccio (<i>dry shake</i>) per due minuti. Aggiungere quindi il ghiaccio e shakerare vigorosamente per un altro minuto. Versare quindi il cocktail nel bicchiere, senza ghiaccio, utilizzando lo strainer. Completare con un top di acqua gassata.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il cocktail è stato inventato nel 1888 da Henry C. Ramos, mentre lavorava nel suo bar di New Orleans, in Louisiana, l'Imperial Cabinet Saloon. In origine era chiamato \"New Orleans fizz\", e prima del proibizionismo godeva di grande popolarità, tale che presso il locale di Ramos oltre venti baristi erano incaricati di preparare esclusivamente quel cocktail per poter soddisfare tutte le richieste. In seguito, durante il Carnevale di New Orleans del 1915, vennero assunti 35 baristi per tale scopo.</p>",
          "immagine": "Ramos_Gin_Fizz.jpg"
        },
        {
          "id": 23,
          "testo": "<p>Il <b>Rusty Nail</b> è un cocktail ufficiale IBA a base di Drambuie e Scotch whisky.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4.5 cl di Scotch whisky</li><li>2.5 cl di Drambuie (liquore al miele)</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Porre gli ingredienti direttamente in un bicchiere di tipo Old fashioned con ghiaccio ed aggiungere una scorza di limone arrotolata (<i>lemon twist</i> in inglese).</p><h2><span id=\"Varianti\">Varianti</span></h2><p>Il Rusty Nail servito senza ghiaccio è anche detto Straight Up Nail.</p><h2><span id=\"Note\">Note</span></h2><p>Appartiene alla famiglia dei Duo e Trio cocktail.</p>",
          "immagine": "Rusty_Nail_at_Sparta_Restaurant,_Bedford_MA.jpg"
        },
        {
          "id": 24,
          "testo": "<p>Il <b>Sazerac</b> è un cocktail ufficiale IBA facente parte della categoria degli The Unforgettables.</p><h2><span id=\"Ingredienti\">Ingredienti</span></h2><ul><li>5 cl Cognac</li><li>1 cl Assenzio</li><li>1 zolletta di zucchero</li><li>2 gocce di Peychaud's bitter.</li></ul><h2><span id=\"Storia\">Storia</span></h2><p>Si racconta che l'avo dell'attuale Sazerac sia stata una bevanda preparata da un farmacista creolo di origini francesi, trasferitosi dalle Antille a New Orleans nel 1834: Antoine Amédée Peychaud, talentuoso inventore di bitter aromatici che serviva ai suoi clienti mescolati con cognac e altri liquori. I bitter del farmacista erano pozioni curative toniche e rivitalizzanti, in voga ai tempi. Verso la fine del XIX secolo, al Sazerac si aggiunse l'ingrediente assenzio.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Il cocktail si prepara aromatizzando con assenzio il bicchiere in cui sarà servito. Porre quindi l'assenzio in un tumbler insieme a ghiaccio tritato e lasciarlo da parte.</p><p>Mentre il bicchiere prende il segno della <i>\"fata verde\"</i>, in un mixing-glass si mescolano cognac e una zolletta di zucchero, imbevuta di Peychaud bitter e disciolta in poca soda con un bar spoon.</p><p>Infine svuotare il contenuto del tumbler (con eventuali residui di assenzio) e filtrare il drink preparato nel mixing-glass all'interno del tumbler e servire senzaghiaccio.</p><p>Guarnire con gli oli essenziali di limone.</p>",
          "immagine": "Sazerac_Cocktail.jpg"
        },
        {
          "id": 25,
          "testo": "<p>Lo <b>Screwdriver</b> (lett. <i>cacciavite</i>) è un cocktail ufficiale IBA a base di vodka e succo d'arancia, appartenente alla categoria dei long drinks.</p><h2><span id=\"Ingredienti\">Ingredienti</span></h2><ul><li>5 cl (1 parte) vodka</li><li>10 cl (2 parti) succo d'arancia</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Mescolare la vodka e il succo d'arancia direttamente nel bicchiere e servire con una fetta d'arancia.</p><h2><span id=\"Storia\">Storia</span></h2><p>Secondo un articolo del Time, lo <b>Screwdriver</b> è nato agli inizi degli anni '50 in un bar del Park Hotel di New York. Lì agenti segreti turchi rifugiati dai balcani e ingegneri americani erano soliti miscelare la vodka con succo d'arancia in lattina. Per mescolare i due ingredienti, non avendo strumenti più adatti, utilizzavano un cacciavite, da qui il nome del cocktail. Da esso deriva un altro drink ufficiale IBA e cioè il noto Harvey Wallbanger.</p>",
          "immagine": "Screwdriver,_Birmingham-Shuttlesworth_International_Airport,_Birmingham_AL.jpg"
        },
        {
          "id": 26,
          "testo": "<p>Il <b>Sidecar</b> è un cocktail classico di tipo sour, tradizionalmente preparato con cognac, liquore all'arancia (Cointreau, Grand Marnier o altro triple sec), e succo di limone. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Origini\">Origini</span></h2><p>Pur non essendo pacifica l'esatta origine del Sidecar, si ritiene che sia stato inventato all'Hôtel Ritz di Parigi verso la fine della seconda guerra mondiale. Graham Greene nel suo libro <i>Brighton Rock</i>, pubblicato nel 1938, lo fa servire ad un suo personaggio (Silvia). Divenne in seguito famoso grazie all'Harry's Bar, sempre a Parigi.</p><h2><span id=\"Ricetta\">Ricetta</span></h2><ul><li>5 cl di cognac (o brandy)</li><li>2 cl di Triple sec (o Cointreau)</li><li>2 cl di succo di limone fresco</li></ul><p>Mescolare gli ingredienti nello shaker riempito a metà di ghiaccio. Filtrare e servire in un bicchiere col bordo inzuccherato. Eventualmente guarnire con la scorza di arancia o limone.</p>",
          "immagine": "Sidecar-cocktail.jpg"
        },
        {
          "id": 27,
          "testo": "<p>Lo <b>Stinger</b> è un cocktail alcolico a base di cognac.</p><h2><span id=\"Descrizione\">Descrizione</span></h2><ul><li>Famiglia: short drink (versione IBA)</li><li>Tipo: After dinner (digestivo)</li><li>Qualità: Alcolico</li><li>Base alcolica: 7/10 di Brandy, 3/10 di crema di menta bianca</li><li>Metodo: shake and strain (shakerare in uno shaker Boston e dopo filtrare nella coppa cocktail)</li><li>Bicchiere: coppetta da cocktail</li><li>Decorazione: nessuna</li></ul><h2><span id=\"Storia\">Storia</span></h2><p>Il cocktail è nato agli inizi del secolo scorso ma divenne famoso negli Stati Uniti all'epoca del proibizionismo in quanto la menta mascherava il liquore.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Si prepara nello shaker con cubetti di ghiaccio. Si serve nella coppetta cocktail precedentemente raffreddata.</p><h2><span id=\"Variante\">Variante</span></h2><p>La variante è <i>on the rocks</i> invece che <i>short</i>.</p><p>Questa variante è nata 80 anni fa in Gran Bretagna. Nel corso della sua lunga esistenza, ma soprattutto negli anni '50 in poi ne sono state proposte numerose varianti.</p>",
          "immagine": "Cocktail_stinger.jpg"
        },
        {
          "id": 28,
          "testo": "<p>Il <b>Tuxedo</b> è un all day cocktail a base di gin, dry vermut, maraschino, assenzio e orange bitters. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>3 cl di gin (Old Tom Gin)</li><li>3 cl di dry vermut</li><li>2,5 ml (mezzo cucchiaio da bar) di maraschino</li><li>1 ml (un quarto di cucchiaio da bar) di assenzio</li><li>1 ml (un quarto di cucchiaio da bar) di orange bitters</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere una coppetta da cocktail e riempirla di ghiaccio per raffreddarla. Riempire un secondo bicchiere di ghiaccio, poi aggiungere 3 cl di gin, 3 cl di dry vermut, 2,5 ml di maraschino, 1 ml di assenzio e 1 ml di orange bitters. Mescolare bene il tutto, poi filtrare in una coppetta da cocktail dopo averne rimosso il ghiaccio. Spremere leggermente una fettina di scorza di limone sopra il bicchiere, dopodiché guarnirlo con la stessa fetta a spirale e con una ciliegia da cocktail. Servire senza cannuccia.</p>",
          "immagine": "tuxedo.jpg"
        },
        {
          "id": 29,
          "testo": "<p>Il <b>Whiskey Sour</b> è un cocktail pre-pasto a base di bourbon whiskey con succo di limone, zucchero e albume d'uovo. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4,5 cl (1,5 oz) di Bourbon Whiskey</li><li>3 cl (1 oz) di succo di limone</li><li>1,5 cl (0,5 oz) di sciroppo zucchero</li><li>1 ciliegia maraschino</li><li>Mezza fettina d'arancia</li><li>Albume d'uovo (opzionale)</li><li>6 cubetti di ghiaccio</li><li>1 cannuccia</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Spremere 3cl (1 oz) di succo di limone poi aggiungere 1.5 cl (0,5 oz) di sciroppo di zucchero. Aggiungere 4,5 cl (1,5 oz) di Bourbon Whiskey. Poi procedere con l'aggiunta di un albume d'uovo (opzionale). Mettere la soluzione in uno shaker ed agitare in modo deciso. Riempire lo shaker con del ghiaccio e poi agitare di nuovo il tutto. Versare la soluzione dello shaker in un bicchiere di tipo old fashioned o cobbler precedentemente riempito fino all'orlo con cubetti di ghiaccio. Guarnire con mezza fettina d'arancia sul bicchiere e una ciliegia maraschino.</p>",
          "immagine": "Whiskey_Sour.jpg"
        },
        {
          "id": 30,
          "testo": "<p>Il <b>White lady</b> è un cocktail di tipo <i>all day sour</i> a base di gin e triple sec. È un cocktail ufficiale dell'IBA.</p><h2><span id=\"Storia\">Storia</span></h2><p>Molti paesi ne rivendicano la paternità. La Francia vuole che sia stato creato in onore dell'opera \"La Dame invisible\" di François-Adrien Boieldieu; Stati Uniti secondo i quali fu dedicato a Ella Fitzgerald che con abito bianco cantava \"Sophisticated lady\".  </p><p>La storia più attendibile racconta che sia stato inventato a Parigi nel 1919, nel Harry's Bar, da Harry MacElhoner, lo stesso inventore del Sidecar e del Alexander. Lo preparò per una donna dal vestito bianco che entrò nel bar ed ebbe un malore: lui miscelò questi tre ingredienti e la donna dopo un attimo si riprese . Da questa storia nasce il nome White Lady.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4 cl di gin</li><li>3 cl di triple sec</li><li>2 cl di succo di limone fresco</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Prendere una coppetta da cocktail e riempirla di ghiaccio per raffreddarla. In uno shaker riempito di ghiaccio versare 4 cl di gin, 3 cl di triple sec e 2 cl di succo di limone fresco. Agitare bene e poi filtrare nella coppetta da cocktail svuotata del ghiaccio. Guarnire con una rondella di limone sul bicchiere.</p>",
          "immagine": "White_Lady_(cocktail).jpg"
        },
        {
          "id": 31,
          "testo": "<p>Il <i><b>Bellini</b></i> è un cocktail ufficiale IBA appartenente alla categoria degli sparkling, che significa 'frizzante', a base di vino bianco frizzante, usualmente del prosecco o dello spumante brut, e polpa fresca schiacciata di pesca bianca. È internazionalmente uno dei più noti cocktail italiani.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>10 cl di prosecco</li><li>5 cl di polpa di pesca</li></ul><h3><span id=\"Procedimento\">Procedimento</span></h3><p>La ricetta originale vuole l'utilizzo di polpa e succo di pesca bianca veronese, schiacciata e non frullata, mescolata lentamente al prosecco per non provocarne una perdita eccessiva di gas, il tutto servito in un flûte.</p><h3><span id=\"Varianti\">Varianti</span></h3><p>Per via della difficile reperibilità delle pesche bianche e del Prosecco in alcune zone del mondo, esistono numerose varianti. Se si usa lo Champagne viene chiamato <i>Bellini Royal</i>, alcuni però sostengono che lo champagne non sia il massimo accoppiato al gusto delicato delle pesche bianche del <i>Bellini</i>. Per realizzare cocktail simili in versione non alcolica si usano succhi frizzanti o soda al posto del vino. Altre varianti sono il <i>Rossini</i> con le fragole al posto della pesca, il <i>Mimosa</i> con spremuta d'arancia fresca e il <i>Tintoretto</i>, tipico delle zone limitrofe di Venezia, con il succo di melagrana.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il <i>Bellini</i> è stato inventato nel 1948 da Giuseppe Cipriani, capo barista dell'Harry's Bar di Venezia che intitolò il cocktail al pittore veneziano per via del suo colore rosato che ricordò a Cipriani il colore della toga di un santo in un dipinto di Giovanni Bellini (il <i>Giambellino</i>). Il drink divenne una specialità stagionale dell'Harry's Bar di Venezia, uno dei locali preferiti da Ernest Hemingway, Gianni Agnelli, Sinclair Lewis e Orson Welles. In seguito divenne molto popolare anche nella sede dell'Harry's Bar di New York.</p>",
          "immagine": "Bellini_Cipriani,_Macaroni_Grill,_Dunwoody_GA.jpg"
        },
        {
          "id": 32,
          "testo": "<p>Il <b>Black Russian</b> è un cocktail dolce a base di vodka, servito dopo cena. E' un cocktail riconosciuto IBA, che riconosce anche la variante (con aggiunta di panna) White Russian.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>5,0 cl di vodka</li><li>2,0 cl di liquore al caffè</li></ul><h3><span id=\"Composizione\">Composizione</span></h3><p>Versare gli ingredienti all'interno di un bicchiere old fashioned riempito con cubetti di ghiaccio. Mescolare delicatamente con un cucchiaio da bar.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il Black Russian nacque nel 1949 dalla creatività di Gustave Tops, barman dell'hotel Metropole di Bruxelles. Il cocktail fu preparato per l'ambasciatore americano in Lussemburgo Pearl Mesta.</p>",
          "immagine": "Black_Russian.jpg"
        },
        {
          "id": 33,
          "testo": "<p>Il <b>Bloody Mary</b> è un cocktail a base di vodka, succo di pomodoro e spezie piccanti od aromi come la salsa Worcestershire, il tabasco, il consommé (o, in alternativa, il dado da cucina), il cren, il sedano, il sale, il pepe nero, il pepe di Caienna e il succo di limone.</p><h2><span id=\"Storia_del_Bloody_Mary\">Storia del Bloody Mary</span></h2><p>Il Bloody Mary è stato quasi certamente creato da George Jessel attorno al 1939. Lucius Beebe, nella sua colonna scandalistica \"This New York\" (<i>New York Herald Tribune</i>, 2 dicembre 1939, pagina 9), pubblicò quello che si ritiene sia il primo riferimento a questo drink, assieme alla ricetta originale: \"Il nuovo tonico di George Jessel, che sta ricevendo attenzione dagli editorialisti della città, è chiamato Bloody Mary: metà succo di pomodoro, metà vodka.\"</p><p>Il francese Fernand Petiot corrobora la tesi per cui George Jessel inventò il drink e il nome, e che egli (Petiot) aggiunse semplicemente le spezie alla semplice bevanda composta da vodka e succo di pomodoro. Dal New Yorker Magazine del luglio 1964:</p><blockquote><p>\"Io ho dato il via al Bloody Mary odierno,\" ci dice. \"George Jessel disse di averlo creato, ma non era altro che vodka e succo di pomodoro quando lo rilevai. Io copro il fondo dello shaker con quattro grosse prese di sale, due di pepe nero, due di pepe di Caienna e uno strato di salsa Worcestershire; Quindi aggiungo una spruzzata di succo di limone e del ghiaccio tritato, verso due once di vodka e due di spesso succo di pomodoro, scuoto, filtro e verso. Noi serviamo da cento a centocinquanta Bloody Marys al giorno, qui nella King Cole Room e negli altri ristoranti e sale per banchetti.\"</p></blockquote><h2><span id=\"Origine_del_termine\">Origine del termine</span></h2><p>L'epiteto \"Bloody Mary\" viene associato a diversi personaggi femminili, storici o fittizi, soprattutto la regina Maria I d'Inghilterra (si veda Bloody Mary per le altre). Si ritiene che l'ispirazione per il cocktail fu la star Hollywoodiana Mary Pickford, che in precedenza ebbe un cocktail simile, consistente di rum, granatina e maraschino che portava il suo nome.</p><p>Nel 1934 il cocktail veniva chiamato \"Red Snapper\" al St. Regis Hotel, dove all'epoca lavorava Petiot.</p>",
          "immagine": "Bloody_Mary.jpg"
        },
        {
          "id": 34,
          "testo": "<p>La <b>caipirinha</b> è un cocktail tipicamente brasiliano, a base di cachaça, lime, zucchero di canna e ghiaccio. In Brasile è servita nella maggior parte dei ristoranti ed è considerata una bevanda caratteristica del paese.</p><p>Il suo nome deriva dal diminutivo della parola brasiliana <i>caipira</i>, che viene usato per designare gli abitanti delle zone rurali e remote dello stato.</p><h2><span id=\"Ingredienti_e_preparazione\">Ingredienti e preparazione</span></h2><p>Ingredienti:</p><ul><li>2 oz (6 cl) di cachaça</li><li>mezzo lime</li><li>zucchero di canna o in alternativa bianco (3 cucchiaini da tè)</li><li>ghiaccio tritato</li></ul><p>Strumenti di preparazione:</p><ul><li>pestello (utile alla lavorazione degli ingredienti)</li><li>bicchiere tipo highball oppure old fashioned (indispensabile a contenere i pezzetti di lime)</li><li>2 cannucce corte</li></ul><p>Preparazione del cocktail:</p><ul><li>tagliare il lime a metà e poi in 4 pezzetti tutti di ugual misura; adagiarli nel bicchiere</li><li>aggiungere lo zucchero e con il pestello esercitare una leggera pressione sulla polpa del lime; è utile eseguire movimenti rotatori per far uscire il succo, ponendo attenzione a non comprimere troppo la buccia amara</li><li>si aggiungono i cubetti di ghiaccio spaccati e infine la cachaça</li><li>come guarnizione aggiungere una fetta di lime (tagliata sottile) inserendola sul bordo del bicchiere</li><li>servire il drink con due cannucce</li></ul><p>Il drink non va shakerato né agitato, ma va mescolato con lo stirrer. Possibilmente si dovrebbe passare il succo del lime sull'orlo del bicchiere, per poi aggiungere lo zucchero di canna: resta così uno strato zuccherato che lascia più sapore e gusto alla Caipirinha.</p>",
          "immagine": "15-09-26-RalfR-WLC-0048.jpg"
        },
        {
          "id": 35,
          "testo": "<p>Il <b>cocktail champagne</b> nacque negli anni '30, sembra, da una gara tra giornalisti, della quale risultò vincitore un tale Dougherty.</p><h2><span id=\"Ingredienti\">Ingredienti</span></h2><ul><li>9.0 cl champagne o Spumante</li><li>1.0 cl brandy</li><li>2 gocce di Angostura</li><li>1 zolletta di zucchero</li></ul><h2><span id=\"Procedimento\">Procedimento</span></h2><p>Si prepara direttamente in una coppa </p><p>adagiando in fondo una zolletta di zucchero con due gocce di Angostura bitter, poi il brandy e lo Champagne. Si guarnisce con una fetta d'arancia e una ciliegina al maraschino.</p>",
          "immagine": "champagne.jpg"
        },
        {
          "id": 36,
          "testo": "<p>Il <b>Cosmopolitan</b> (chiamato anche informalmente <b>Cosmo</b>) è un cocktail alcolico internazionale a base di vodka riconosciuto ufficialmente dalla International Bartenders Association.</p><p>Fa parte della famiglia dei Cape Codder ed è inserito nella categoria IBA dei \"Contemporary Classics\" nel ricettario ufficiale aggiornato al 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><p>La composizione, secondo la ricetta ufficiale IBA[5], è la seguente:</p><ul><li>4 cl di vodka citron</li><li>1,5 cl di cointreau</li><li>1,5 cl succo di lime</li><li>3 cl succo di mirtillo o cranberry</li></ul><p>In un cosmopolitan vi sono all’incirca 20 ml di etanolo puro.</p><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Miscelare tutti gli ingredienti nello shaker con ghiaccio a cubi, agitando bene, filtrare in una doppia coppa cocktail precedentemente raffreddata. Guarnire con una fettina di lime.</p><h2><span id=\"Descrizione\">Descrizione</span></h2><p>Il cosmopolitan è una cocktail rosso-rosato limpido, fruttato, leggermente esperidato, facente parte della famiglia dei Cape Codder. È una variante dal tenore alcolico più deciso (intorno ai 21,5°), ma il sentore alcolico è smorzato dal sapore del cocktail, che deve essere equilibrato fra le note fruttate e quelle aspre degli ingredienti.</p><h2><span id=\"Storia\">Storia</span></h2><h3><span id=\"Albori\">Albori</span></h3><p>La storia del cocktail ha delle radici piuttosto vaghe. La prima apparizione del nome \"cosmopolitan\" risale al 1927, quando il barista scozzese Harry MacElhone nomina \"Cosmopolitan\" un cocktail a base di whisky, vermouth, punch svedese e vodka. Nel 1934 fu descritta una versione molto più simile all'attuale, che prevedeva però l'uso di gin, triple sec, sciroppo di lampone e limone.</p>",
          "immagine": "Cosmopolitan_(5076906532).jpg"
        },
        {
          "id": 37,
          "testo": "<p>Il <b>Cuba libre</b> è un cocktail ufficiale IBA, appartenente alla categoria dei long drinks a base di rum bianco, cola e lime. Simile al <i>rum & cola</i>, i due termini vengo spesso utilizzati in modo intercambiabile, sebbene indichino due cocktail differenti.</p><h2><span id=\"Storia\">Storia</span></h2><p>L'origine del cocktail è piuttosto incerta. L'ipotesi più comunemente accreditata afferma che il <i>Cuba Libre</i> Nacque tra il 1900 e il 1902 a L'Avana, durante la Guerra ispano-americana e la conquista dell'indipendenza di Cuba dalla Spagna con l'aiuto degli Stati Uniti. I soldati cubani e statunitensi erano soliti mescolare la cola, importata a Cuba per la prima volta proprio in quegli anni, con il rum. Varie le supposizioni sul nome dell'inventore: alcune fonti fanno risalire la ricetta ad un soldato, chiamato col nome di copertura John Doe, che ordinò all'American Bar di Calle Nettuno, un bar aperto da due americani nella capitale cubana, \"Coca Cola americana, rum cubano in un bicchiere pieno di ghiaccio e una spruzzata di lime\", brindando successivamente <i>¡Por Cuba libre!</i> (per Cuba libera), il grido di battaglia dei guerriglieri; secondo una deposizione del 1965 di Fausto Rodriguez, un messaggero dell'esercito cubano, il soldato sarebbe il capitano Russel dei corpi di comunicazione americani. Un'altra teoria propone che fu un barman cubano a mescolare la Coca Cola (prodotto tipico statunitense) al rum (prodotto tipico cubano) per unire simbolicamente le due nazioni.Altre ipotesi fanno derivare il Cuba libre dal Daiquiri allungato con la cola, ricetta in seguito semplificata secondo l'uso attuale, o propongono l'origine del nome dalla testata del giornale rivoluzionario \"Cuba Libre\" fondato nel 1928 da Julio Antonio Mella.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>Secondo la International Bartender Association, il Cuba libre ha la seguente composizione:</p><ul><li>5/18 di rum chiaro</li><li>12/18  di Cola</li><li>1/18  di succo di lime</li></ul><h3><span id=\"Procedimento\">Procedimento</span></h3><p>Servire in un bicchiere highball con ghiaccio, guarnire con una fetta di lime.</p><h3><span id=\"Varianti\">Varianti</span></h3><p>Alcuni barman ritengono apprezzabile l'aggiunta di 1 o 2 gocce di angostura prima della miscelazione; se invece si aggiungono o sostituiscono ad uno dei due componenti originali altri ingredienti si ottengono queste varianti:</p><ul><li><b>Cuba libre pestato</b>, con l'aggiunta di mezzo lime tagliato in quattro parti e un cucchiaio di zucchero di canna.</li></ul>",
          "immagine": "Cuba_libre.png"
        },
        {
          "id": 38,
          "testo": "<p>Il <b>French 75</b> è un cocktail a base di gin, champagne e succo di limone. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>6 cl di champagne</li><li>3 cl di gin</li><li>1,5 cl di succo di limone</li><li>2 gocce di sciroppo di zucchero</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Nello shaker versare 3 cl di gin, 1,5 cl di succo di limone e due gocce di sciroppo di zucchero. Agitare e filtrare in una flûte. Completare aggiungendo 6 cl di champagne. Mescolare delicatamente.</p>",
          "immagine": "French_75.jpg"
        },
        {
          "id": 39,
          "testo": "<p>Il <b>French connection</b> è un cocktail ufficiale IBA</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>3.5 cl di cognac</li><li>3.5 cl di amaretto</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Si prepara direttamente in un bicchiere tipo old fashioned con ghiaccio. Una volta versati gli ingredienti, mescolare delicatamente.</p>",
          "immagine": "frenchconnection.jpg"
        },
        {
          "id": 40,
          "testo": "<p><b>Godfather</b> è un cocktail a base di Scotch e Amaretto di Saronno che viene preparato direttamente nel tumbler old fashioned con ghiaccio. Le dosi sono di 4,5cl di Scotch e 2,5 cl di Amaretto. Esiste anche la variante con la Vodka al posto dello scotch, che prende il nome di <b>Godmother</b>. Le proporzioni rimangono invariate.</p>",
          "immagine": "Godfather_cocktail.jpg"
        },
        {
          "id": 41,
          "testo": "<p>Il <b>Godmother</b> è un cocktail preparato con vodka e <i>Amaretto</i>. È una variante del Godfather, in cui la vodka è sostituita dallo Scotch whisky, e assieme ad esso e al French Connection fa parte della cosiddetta famiglia della \"Triade\".</p>",
          "immagine": "Godmother.jpg"
        },
        {
          "id": 42,
          "testo": "<p>Il <b>Golden dream</b> è un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>2.0 cl di Liquore Galliano</li><li>2.0 cl di Cointreau</li><li>2.0 cl di succo d' arancia</li><li>1.0 cl di panna fresca</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Introdurre tutti gli ingredienti in uno shaker con ghiaccio. Shakerare energicamente per pochi secondi e servire in un bicchiere di tipo cocktail.</p>",
          "immagine": "Godlen-Dream_Mixed_Drink_Cocktail_(2360538105).jpg"
        },
        {
          "id": 43,
          "testo": "<p>Il <b>Grasshopper</b> è un after dinner cocktail a base di Crème de menthe, Crème de cacao e Crème fraîche, servito in coppetta da cocktail. È un cocktail riconosciuto ufficialmente dall'IBA dal 1961.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>3,0 cl di Crème de menthe</li><li>3,0 cl di Crème de cacao (bianco)</li><li>3,0 cl di Crème fraîche</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare gli ingredienti in uno shaker ricolmo di ghiaccio. Shakerare energicamente per diversi secondi e servire attraverso uno strainer in una coppetta da cocktail ben fredda.</p>",
          "immagine": "15-09-26-RalfR-WLC-0128.jpg"
        },
        {
          "id": 44,
          "testo": "<p>L'<b>Harvey wallbanger</b> è un cocktail creato negli Stati Uniti negli anni '50. Il nome deriva dal coniglio gigante che nel film Harvey parlava a James Stewart quando sbatteva contro un muro, appunto wallbanger in inglese. </p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>3/10 di vodka</li><li>1/10 di liquore Galliano</li><li>6/10 di succo d'arancia</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Il cocktail si prepara direttamente in un bicchiere di tipo tumbler. Il tumbler va riempito con ghiaccio, vodka e succo d'arancia secondo le dosi; dopo aver mescolato gli ingredienti si aggiunge il Galliano in superficie. L'Harvey va poi decorato con una fetta d'arancia ed una ciliegina entrambe dentro il bicchiere.</p>",
          "immagine": "Harvey_Wallbanger.jpg"
        },
        {
          "id": 45,
          "testo": "<p>L'<b>Hemingway Special</b> (anche noto come <b>Hemingway Daiquiri</b> o <b>Papa doble</b>) è un any time cocktail basato su una variante del Daiquiri nata nel locale Floridita, a L'Avana, e la cui base alcolica è il rum bianco.</p><p>Fu uno dei tanti cocktail apprezzati da Ernest Hemingway durante la sua permanenza a L'Avana. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>6 cl di rum bianco</li><li>1,5 cl di maraschino</li><li>4 cl di succo di pompelmo</li><li>1,5 cl di succo di <i>lime</i></li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare tutti gli ingredienti in uno <i>shaker</i> con ghiaccio e shakerare. Versare in una doppia coppetta da cocktail con uno <i>strainer</i>.</p><h2><span id=\"Storia\">Storia</span></h2><p>Durante la sua permanenza a Cuba, Ernest Hemingway provò il cocktail di punta del Floridita, il Floridita Daiquiri, e disse: «È buono, ma lo preferisco senza zucchero e rum doppio». Il bartender del Floridita, Constantino Ribalaigua, creò quindi per lui un cocktail che oggi è noto come Hemingway Daiquiri o Papa Doble.</p>",
          "immagine": "Hemingway_Daiquiri.jpg"
        },
        {
          "id": 46,
          "testo": "<p>Il cocktail Horse's Neck \u00e8 un cocktail a base di brandy e ginger ale. \u00c8 un cocktail certificato dall'Associazione internazionale Bartenders, nella categoria Contemporary Classics come long drink.\n</p>\n\n\n<h2><span id=\"Composizione\">Composizione</span></h2>\n<ul><li>4.0 cl Brandy</li>\n<li>12.0 cl Ginger Ale</li>\n<li>Gocce di Angostura bitter (facoltative)</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2>\n<p>Si prepara direttamente nel bicchiere highball con cubetti di ghiaccio. Si mescola delicatamente e si guarnisce con una spirale di limone. Se richiesto, alcune gocce di Angostura Bitter.</p>",
          "immagine": "Horse's_Neck_cocktail.jpg"
        },
        {
          "id": 47,
          "testo": "<p>L'<i><b>Irish coffee</b></i>, o <b>caffè irlandese</b>, è un caffè caldo, zuccherato, corretto con Whiskey irlandese e con uno strato di panna sulla superficie.</p><p>Viene servito pre-riscaldando il bicchiere, mettendoci il caffè corretto e zuccherato ed aggiungendovi per ultima la panna, leggermente montata. A volte, ma piuttosto raramente, al caffè vengono aggiunte spezie quali la noce moscata o la cannella.</p><h2><span id=\"Le_origini_dell.27Irish_coffee\"></span><span id=\"Le_origini_dell'Irish_coffee\">Le origini dell'Irish coffee</span></h2><p>L'invenzione del cocktail è rivendicata dalla cittadina irlandese di Foynes, nel cui bar del porto e dell'aeroporto veniva servito per riscaldare i passeggeri reduci dalle traversate trans-atlantiche.</p><p>Secondo altra tradizione, l'elaborazione della bevanda si deve a Mr. Sheridan, capo dei barman nel bar dell'aeroporto di Shannon in Irlanda. Era il 1942, ed all'aeroporto giunsero in piena notte dei passeggeri stanchi e stizziti per la cancellazione del loro volo dovuta al maltempo. Joe Sheridan pensò allora di servire loro qualcosa di robusto che potesse rinfrancare e \"riscaldare\" i passeggeri. Preparò del caffè molto forte, aggiunse zucchero e whisky, completando con una guarnizione di panna. Quando i passeggeri gli chiesero se si trattasse di caffè brasiliano, Mr.</p>",
          "immagine": "Irish_coffee_glass.jpg"
        },
        {
          "id": 48,
          "testo": "<p>Il <b>kir</b> è un cocktail di tipo aperitivo, a base di vino bianco, generalmente alcolico al 16%. È un cocktail certificato dall'Associazione internazionale Bartenders. Questo cocktail ha origini francesi e la leggenda narra che fu l'abate Kir di Digione a proporre questo cocktail agli ospiti, naturalmente usando del vino francese, un Aligotè di Borgogna. L'altro ingrediente è la Crème de cassis (chiamata anche Crema di cassis o Cassis de Dijon o Crème de cassis de Dijon), un liquore francese ottenuto dalla macerazione del ribes nero in alcol con l'aggiunta di sciroppo di zucchero.</p><p>Ha ottenuto l'A.O.C. (ovvero Appellation d’Origine Contrôlée) “Crème de Cassis de Bourgogne”. Deve avere una gradazione minima di 15° ed un contenuto di almeno 400 g di zucchero per litro. La produzione di questo liquore è consentita solo a Digione con ribes (la varietà migliore è il Nero di Borgogna) raccolti nella Côte-d'Or. Il ribes viene macerato in alcol per almeno tre mesi, con numerosi rimontaggi. Poi dalla spillatura si ottiene il <i>jus vierge</i>. Successivamente la massa del ribes viene ricoperta di alcol e acqua, spillando si ottiene il secondo succo detto recharge.</p>",
          "immagine": "Kir_cocktail.jpg"
        },
        {
          "id": 49,
          "testo": "<p>Il <b>Long Island Iced Tea</b> è un cocktail a base di vodka, gin, rum bianco e triple sec.</p><p>Deve il suo nome non alla presenza effettiva di tè freddo, ma all'aspetto finale della preparazione e al sapore che assomiglia a quello del tè (solo se il cocktail è preparato con la giusta dose di ogni ingrediente).</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale dell'IBA prevede:</p><ul><li>1,5 cl vodka</li><li>1,5 cl rum bianco</li><li>1,5 cl triple sec</li><li>1,5 cl gin</li><li>2,5 cl succo di limone fresco</li><li>3 cl sciroppo di zucchero</li><li>1 spruzzo di cola</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Riempire un bicchiere di tipo highball con cubetti di ghiaccio e versare tutti gli ingredienti al suo interno, dopodiché mescolare lentamente. Infine, decorare con una spirale di limone e servire con una cannuccia.</p><h2><span id=\"Preparazione_secondo_ricetta_comune\">Preparazione secondo ricetta comune</span></h2><ul><li>0,50 fl.oz. di vodka (1,5 cl)</li><li>0,50 fl.oz. di rum bianco (1,5 cl)</li><li>0,50 fl.oz. di triple sec (Cointreau)(1,5 cl)</li><li>0,50 fl.oz. di gin (1.5 cl)</li><li>2,00 fl.oz. di sour mix (6 cl) (il sour mix è così composto: per 1 litro 200 ml di zucchero liquido 300 ml succo di limone 500 ml acqua)</li><li>spruzzo di cola</li></ul><p>La preparazione avviene in un bicchiere a collo medio-alto (Juice glass (42 cl)), o in un highball (secondo il metodo IBA): si versano tutti gli ingredienti, tranne la cola, nel boston shaker senza ghiaccio, si shakera, si versa nel bicchiere pieno di ghiaccio, ed infine si aggiunge la cola a top (per dare colore e il sapore tipico al cocktail). Si può guarnire il bicchiere con uno spicchio di limone.</p>",
          "immagine": "NCI_iced_tea.jpg"
        },
        {
          "id": 50,
          "testo": "<p>Il <b>Mai Tai</b> è un cocktail alcolico a base di rum, curaçao e succo di <i>lime</i>, associato alla cultura Polinesiana.</p><h2><span id=\"Storia\">Storia</span></h2><p>Ne viene attribuita l'invenzione al <i>Trader Vic's restaurant</i> di Oakland, California, nel 1944. Anche il locale rivale <i>Don the Beachcomber</i> ne rivendica l'invenzione facendola risalire al 1933, benché le ricette dei due locali siano differenti.</p><h2><span id=\"Etimologia\">Etimologia</span></h2><p>\"Maita'i\" è una parola tahitiana che significa \"buono\"; il nome del cocktail è tuttavia reso con due parole, a volte unite da un trattino o con l'iniziale maiuscola.</p><p>Secondo Victor J. Bergeron del <i>Trader Vic's</i>, il cocktail fu servito in occasione della visita di alcuni amici da Tahiti. Una di loro, Carrie Guild, dopo averlo assaggiato esclamò \"Maita'i roa ae!\" (\"molto buono!\"), da cui il nome.</p><h2><span id=\"Cultura\">Cultura</span></h2><p>Il Mai Tai divenne popolare tra gli anni 1950 e gli anni 1960, fu d'aiuto al suo successo anche la sua apparizione nel film <i>Blue Hawaii</i> interpretato da Elvis Presley.</p><h2><span id=\"Ricetta\">Ricetta</span></h2><p>Ne esistono diverse varianti. Secondo la International Bartenders Association, che lo include nella sua lista di cocktail ufficiali, la ricetta è la seguente:</p><ul><li>4 cl (8 parti) di rum bianco</li><li>2 cl (4 parti) di rum scuro</li><li>1,5 cl (3 parti) di orange curaçao</li><li>1,5 cl (3 parti) di sciroppo di orzata</li><li>1 cl (2 parti) di succo di <i>lime</i> fresco</li></ul><p>Tutti gli ingredienti tranne il rum scuro vengono agitati nello shaker con il ghiaccio. Si versa nel bicchiere, vi si aggiunge il rum scuro facendolo stratificare in superficie.</p>",
          "immagine": "Mai_Tai.jpg"
        },
        {
          "id": 51,
          "testo": "<p>Il <b>Margarita</b> è il più comune cocktail messicano a base di tequila, ed appartiene ai sour. In latino \"margarita\" significa perla, in spagnolo è la traduzione della parola margherita. È un cocktail pre-dinner.</p><p>Secondo quanto afferma William Grimes, autore di <i>Straight Up or On the Rocks: The Story of the American Cocktail</i>, molte persone affermano di aver bevuto Margarita in Messico già negli anni trenta, da cui si deduce che il margarita fu inventato prima del 1940.</p><h2><span id=\"Proporzioni\">Proporzioni</span></h2><p>Le proporzioni più usate per il margarita sono;</p><ul><li><b>2:1:1</b> (50% tequila, 25% Triple sec, 25% lime fresco o succo di limone)</li><li><b>3:2:1</b> (50% tequila, 33% Triple Sec, 17% lime fresco o succo di limone)</li><li><b>3:1:1</b> (60% tequila, 20% Triple Sec, 20% lime fresco o succo di limone)</li><li><b>1:1:1</b> (33% tequila, 33% Triple Sec, 33% lime fresco o succo di limone)</li></ul><p>sebbene lo standard IBA (Cocktail ufficiali IBA) sia</p><ul><li><b>7:4:3</b> (50% tequila, 28.5% Triple Sec, 21.5% lime fresco o succo di limone)</li></ul><p>Il drink è normalmente servito shakerato con ghiaccio, \"on the rocks\", o mescolato con ghiaccio (il \"frozen margarita\"); nella ricetta classica è servito nella tipica coppetta detta <i>Sombrero</i>. Il cocktail viene frequentemente servito con sale sul bordo del bicchiere (\"Crusta\").</p><p>Sebbene i margarita più comuni contengano tequila, liquore all'arancia, succo di lime o di limone, e qualche volta un dolcificante aggiuntivo, molte variazioni stanno diventando sempre più comuni. Usare succo di lime imbottigliato (che contiene zucchero) è un altro modo usato per dolcificare il cocktail.</p><h3><span id=\"Varianti_alla_frutta_del_Margarita\">Varianti alla frutta del Margarita</span></h3><p>È possibile aggiungere anche succhi di frutta al margarita. Esempi classici sono le seguenti combinazioni:</p><ul><li>succo di lime con mirtillo;</li><li>fragola o pesca, con succo di limone;</li><li>banana, con succo di banana.</li></ul><p>Comunque, è bene segnalare che i margarita a base di frutta non fanno parte della definizione di un classico \"Margarita\".</p>",
          "immagine": "Margarita_cocktail_iba.jpg"
        },
        {
          "id": 52,
          "testo": "<p>Il <b>Mimosa</b> è una variante dei cocktail Bellini, Rossini e Tintoretto e fa parte della categoria dei medium drink. Si differenzia dal Buck's fizz per la percentuale maggiore di prosecco (o champagne) rispetto alla spremuta d'arancia.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4 cl di Spremuta d'arancia</li><li>6 cl di Prosecco</li></ul><p>Il periodo ideale per gustarlo sono i mesi invernali, quando appunto maturano i frutti.</p>",
          "immagine": "Mimosa_cocktail.jpg"
        },
        {
          "id": 53,
          "testo": "<p>Il <b>mojito</b> è un famoso cocktail di origine cubana composto da rum, zucchero di canna, succo di limetta, foglie di menta (nota come <i>hierba buena</i> a Cuba) e acqua di seltz. È un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4 cl di rum bianco cubano</li><li>3 cl di succo di lime fresco</li><li>6 ramoscelli di menta</li><li>2 cucchiaini di zucchero di canna</li><li>Acqua di seltz</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Pestare i ramoscelli di menta insieme allo zucchero e al succo di lime. Aggiungere una spruzzata di acqua gassata e riempire il bicchiere con ghiaccio. Versare il rum e infine l'acqua gassata. Decorare con un ramoscello di menta e una fetta di limone. Servire con una cannuccia.</p><h2><span id=\"Storia\">Storia</span></h2><p>L'origine del mojito rimane piuttosto controversa: viene spesso narrato che un cocktail simile al moijto fu inventato dal famoso pirata inglese Sir Francis Drake (<i>El Draque</i>) nel XVI secolo. Quella versione era preparata con aguardiente (rum non invecchiato) di bassa qualità, limetta, acqua, zucchero raffinato bianco di canna e una specie locale di menta, la <i>hierbabuena</i>. Nella metà del 1800 pare che la società Bacardi abbia dato un impulso di popolarità alla bevanda, che comunque raggiungerà la sua definitiva popolarità solo nel XX secolo.</p><p>Anche sulla versione moderna del mojito non pare esistere certezza assoluta su chi lo ha proposto per primo, anche se i nomi solitamente più pronunciati sono quelli di barman della Bodeguita del Medio, Attilio De La Fuente, oppure Angel Martinez, che effettivamente rilevò il locale nel 1942, all'apice della sua notorietà per essere frequentato da noti personaggi. Contrariamente a quanto ritenuto comunemente, è tuttavia falso che Ernest Hemingway fosse un noto consumatore della bevanda: la frase a lui attribuita, scritta anche nel locale \"My mojito in La Bodeguita, My daiquiri in El Floridita\", sebbene meritevole di aver reso celebre la bevanda anche fuori da Cuba, è apocrifa.</p><p>Esistono diverse teorie anche riguardo l'origine del termine \"Mojito\". Secondo alcuni, esso sarebbe legato al \"mojo\", un condimento tipico della cucina cubana a base di aglio e agrumi, usato per marinare.</p>",
          "immagine": "MojitoReydelmojito.jpg"
        },
        {
          "id": 54,
          "testo": "<p>Il <b>Moscow mule</b> è un long drink riconosciuto ufficialmente dall'IBA.</p><p>Viene preparato con:</p><ul><li>4,5 cl Vodka</li><li>12 cl Ginger beer</li><li>0,5 cl succo di lime fresco</li><li>1 fetta di lime</li></ul><p>Viene generalmente preparato e servito in un boccale di rame, miscelando tutti gli ingredienti direttamente nel bicchiere con ghiaccio e guarnendo con una fetta di lime e zenzero </p><p>In mancanza del boccale di rame si può ovviare con un bicchiere old fashioned.</p>",
          "immagine": "Moscow_Mule_at_Rye,_San_Francisco.jpg"
        },
        {
          "id": 55,
          "testo": "<p>Il <b>Mint Julep</b> è un cocktail originario degli Stati Uniti del Sud a base di menta e whisky di tipo Bourbon. <i>Mint</i> significa appunto menta e <i>julep</i> è un termine che deriva dall'arabo <i>gulab</i> e significa acqua (ab) di rose (gul) e per estensione indica uno sciroppo acquoso dolce e profumato, in italiano giulebbo o giulebbe , alla menta.Quindi mint julep è uno sciroppo dolce di menta, con l'aggiunta di ghiaccio tritato e Bourbon. Si può pensare il mint julep verosimilmente come ad una granita di menta con Bourbon e con una guarnizione di foglioline di menta, allo scopo di stimolare anche l'olfatto.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Lo sciroppo di menta viene preparato in diversi modi:</p><ul><li>può essere preparato al momento a freddo, macerando delle foglioline di menta in un mortaio con un poco di zucchero, e diluendo con acqua oppure</li><li>può essere preparato a caldo un infuso di menta, mettendo delle foglioline di menta in acqua bollente e zuccherando un poco e che dura circa due settimane. Infine</li><li>può essere usato direttamente lo sciroppo di menta in commercio. La quantità di zucchero è a piacere, meglio che sia il meno possibile o anche niente, al massimo un cucchiaino a persona. La quantità di acqua, una tazza da tè, circa 200 millilitri (ml.) a persona.</li></ul><p>La quantità di Bourbon varia da 60 a 100 ml. circa a persona. Riguardo al potere dissetante si beve circa 300 ml.</p>",
          "immagine": "Mint_Julep_at_Rye,_San_Francisco.jpg"
        },
        {
          "id": 56,
          "testo": "<p>Il <b>Pi\u00f1a Colada</b> (in spagnolo \"ananas pressato\") \u00e8 un cocktail molto dolce a base di rum chiaro, latte di cocco e succo d'ananas (o ananas a pezzetti), originario di Porto Rico.\n</p>\n\n\n<h2><span id=\"Storia_del_Pi.C3.B1a_Colada\"></span><span id=\"Storia_del_Pi\u00f1a_Colada\">Storia del Pi\u00f1a Colada</span></h2>\n<p>Esistono diverse versioni circa l'origine di questa bevanda. Alcune testimonianze parlano di \"bevande a base di ananas e rum\", ma senza il latte di cocco, gi\u00e0 dagli anni venti, per\u00f2 esiste anche la versione che ha dentro anche la vodka.\n</p><p>Un riferimento iniziale ad una bevanda chiamata <i>Pi\u00f1a Colada</i> composta da rum, noce di cocco e ananas, si trova nell'edizione del 16 aprile 1950 del <i>New York Times</i>:\n</p>\n\n<p>Un'altra versione riconosce il <i>Pi\u00f1a Colada</i> come bevanda tipica di Porto Rico, paese dove si dice sia stato creato per la prima volta nel 1963 da Don Ramon Portas Mingot, che tentando di ideare un cocktail originale a base di frutta, prepar\u00f2 il primo <i>Pi\u00f1a Colada</i>. Nella Vecchia San Juan c'\u00e8 una targhetta commemorativa in marmo per ricordare questo evento.\n</p><p>\u00c8 probabile quindi che in buona parte dei Caraibi, gi\u00e0 dagli anni cinquanta, si fosse a conoscenza di questo tipo di bevanda, chiamata semplicemente \"ananas colata\", ma fu nel 1963 che essa venne ufficializzata col nome di <i>Pi\u00f1a Colada</i> e assunta come bevanda nazionale portoricana. La Pi\u00f1a Colada ha molti punti in comune con un altro cocktail: lo Swimming Pool, che in alcune varianti si avvicina quasi del tutto alla bevanda portoricana.</p>",
          "immagine": "Pina_Colada.jpg"
        },
        {
          "id": 57,
          "testo": "<p>Il <b>Rose cocktail</b> è un cocktail ufficiale IBA.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>4,5 di vermouth dry</li><li>1.0 cl di brandy alla ciliegia</li><li>1.5 cl di Kirsch</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Shakerare con ghiaccio e servire in una coppetta da cocktail.Si guarnisce con una ciliegina al maraschino.</p>",
          "immagine": "Rose_(cocktail).jpg"
        },
        {
          "id": 58,
          "testo": "<p>Il <b>Sea Breeze</b> (in italiano <i>brezza marina</i>) è un cocktail alcolico riconosciuto ufficialmente dalla International Bartenders Association. Fa parte della categoria Popular ed è un long drink.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4,0 cl di vodka</li><li>12,0 cl di succo di mirtilli rosso</li><li>3,0 cl di succo di pompelmo</li></ul><h3><span id=\"Procedimento\">Procedimento</span></h3><p>Si versano gli ingredienti in un bicchiere tipo highball, riempito con ghiaccio. Si guarnisce, infine, con una fettina di lime e si serve con due cannucce.</p><h2><span id=\"Storia\">Storia</span></h2><p>Trattasi di un cocktail tipicamente estivo (la brezza del mare), anche grazie alla disponibilità degli ingredienti stagionali. Vodka e succo di frutta rappresenta un mix vincente presente in numerosi drink (come lo Screwdriver). Esiste anche una variante hawaiana, il Bay breeze, con il succo di ananas al posto del succo di pompelmo.</p><p>Il cocktail risale agli anni venti, tuttavia pare che la ricetta originale fosse differente da quella usata oggi: per esempio gin e granatina prendevano il posto della vodka e del succo di pompelmo.</p>",
          "immagine": "Clipboard03seabreeze2.jpg"
        },
        {
          "id": 59,
          "testo": "<p>Il <b>Sex on the beach</b> è un cocktail alcolico internazionale riconosciuto ufficialmente dalla International Bartenders Association a base di vodka. Fa parte della famiglia dei Cape Codder.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4 cl. di vodka</li><li>2 cl. di peach schnapps (liquore di pesche)</li><li>4 cl. di succo d'arancia</li><li>4 cl. di succo di cranberry</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Shakerare la vodka, il peach schnapps e il succo di arancia in uno shaker freddo, quindi versare il contenuto in un tumbler alto precedentemente riempito di ghiaccio. Versare senza mescolare il succo di cranberry in modo che il rosso del succo, che per densità tende a scendere, screzi il cocktail. Guarnire con una cannuccia, ed eventualmente con arancia, e servire.</p><h2><span id=\"Descrizione\">Descrizione</span></h2><p>Il Sex on the beach è un cocktail fruttato e fresco, richiesto soprattutto nelle serate estive . Sebbene il contenuto alcolico sia abbastanza consistente, il sapore dolce e i succhi di frutta ammorbidiscono il sapore, rendendolo un cocktail non pesante da bere..</p>",
          "immagine": "Sex_on_the_beach.png"
        },
        {
          "id": 60,
          "testo": "<p>Il <b>Singapore sling</b> è un cocktail ufficiale International Bartenders Association. Venne creato nel 1915 da Ngiam Tong Boon, barman dell'hotel Raffles di Singapore.</p><h2><span id=\"Composizione\">Composizione</span></h2><ul><li>3 cl di gin</li><li>1,5 cl di Heering Cherry Liqueur</li><li>0,75 cl di triple sec</li><li>0,75 cl di DOM Benedictine</li><li>1 cl di granatina</li><li>12 cl di succo d'ananas</li><li>1,5 cl di succo di lime fresco</li><li>1 spruzzo di angostura</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Nel bicchiere di preparazione aggiungere 3 cl di gin, 1,5 cl di Heering Cherry Liqueur, 0,75 cl di triple sec, 0,75 cl di benedictine, 1 cl di granatina, 1,5 cl di succo di lime, 12 cl di succo d'ananas, uno spruzzo di angostura. Versare il tutto in uno shaker pieno di ghiaccio ed agitare. Filtrare in un bicchiere highball precedentemente riempito di ghiaccio. Guarnire con una fettina d'ananas e con una ciliegia maraschino.</p>",
          "immagine": "Singapore_Sling.jpg"
        },
        {
          "id": 61,
          "testo": "<p>Il <b>Tequila Sunrise</b> (in italiano <i>Alba tequila</i>) è un cocktail alcolico internazionale riconosciuto ufficialmente dalla International Bartenders Association a base di Tequila. </p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4,5 cl. di tequila</li><li>9 cl. di succo d'arancia</li><li>1,5 cl. di granatina</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Versare la tequila ed il succo d'arancia in un bicchiere hurricane riempito di ghiaccio in cubetti. Mescolare con un cucchiaio da bar, quindi incorporare delicatamente lo sciroppo di granatina secondo il metodo build, in modo che la granatina vada a depositarsi sul fondo donando al drink l'effetto sunrise (alba). Guarnire con una fetta d'arancia e una ciliegina candita. </p><h2><span id=\"Descrizione\">Descrizione</span></h2><p>Il Tequila Sunrise è un long drink dissetante e fruttato, sebbene il sapore erboso della tequila e i toni esperidati del succo d'arancia ammortizzino la dolcezza della granatina, rendendolo un drink leggermente amarognolo. Tecnicamente è un cocktaildi classe Highball stile exotic. Ha un grado alcolico di circa 12° alc.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il primo cocktail denominato \"Tequila Sunrise\" risale alla fine degli anni '30, ideato dal barista dell'Arizona Biltmore Hotel Gene Sulit per un cliente abituale dell'albergo, il quale era di ritorno da una gita dove fu colpito dall'alba sul deserto; arrivato al bar chiese una bevanda dissetante a base di tequila.</p>",
          "immagine": "Tequila_Sunrise_glass.jpg"
        },
        {
          "id": 62,
          "testo": "<p>Il <b>Barracuda</b> è un cocktail a base di rum ambrato, Liquore Galliano e Prosecco. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><ul><li>4,5 cl di rum ambrato</li><li>1,5 cl di Galliano</li><li>6 cl di succo d'ananas</li><li>Un goccio di succo di <i>lime</i> fresco</li><li>Top di Prosecco</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Raffreddare la coppa Margarita con del ghiaccio, nel frattempo riempire di ghiaccio lo <i>shaker</i> e versare al suo interno il rum, il Galliano, il succo d'ananas e il succo di lime. Shakerare il tutto, quindi versare nel bicchiere dopo aver tolto il ghiaccio. Colmare con il Prosecco.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il cocktail è stato ideato alla fine degli anni 1960 dal genovese Benito Cuppari, all'epoca capo bartender della nave <i>Michelangelo</i>, in occasione di una competizione vinta a St.</p>",
          "immagine": "Barracuda_Sparkling_Cocktail.png"
        },
        {
          "id": 63,
          "testo": "<p>Il <b>Bramble</b> è un cocktail a base di gin creato negli anni 1980 da Dick Bradsell. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>4 cl di gin</li><li>1 cl di sciroppo di zucchero</li><li>1,5 cl di succo di limone fresco</li><li>1,5 cl di liquore alle more</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Preparare il bicchiere Old fashioned riempiendolo di ghiaccio tritato, quindi inserire il gin, lo sciroppo di zucchero e il succo di limone. Mescolare il tutto, dopodiché versare con moto circolare il liquore alle more sopra il cocktail. Concludere il cocktail decorando con una fetta di limone e due more.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il Bramble è stato ideato a Londra nel 1984 da un barista di nome Dick Bradsell.</p>",
          "immagine": "Bramble_Cocktail1.jpg"
        },
        {
          "id": 64,
          "testo": "<p>Il <b>B-52</b> è un cocktail nato negli U.S.A. composto principalmente da Kahlúa, crema Baileys e Grand Marnier.La sua preparazione prevede una tecnica a strati, per cui data la diversa densità degli ingredienti, essi tendono a restare separati invece di mischiarsi.Viene servito in una coppetta Martini, e presenta numerose varianti, come lo shot, oppure infiammato <span title=\"Il testo selezionato deve essere comprovato da una fonte affidabile. Modifica la pagina per aggiungere fonti.\">anche se quest'ultimo non è accettato come costruzione professionale.</span></p><h2><span id=\"Storia_del_B-52\">Storia del <i>B-52</i></span></h2><p>Il nome si riferisce al bombardiere a lungo raggio Boeing B-52 Stratofortress, che è stato usato nella Guerra del Vietnam per sganciare le bombe incendiarie al napalm (ed è probabilmente da ciò che è nata la versione infiammabile).</p><p>La sua origine è abbastanza incerta, certuni sostengono che sia stato creato nel ristorante \"Alice's\" a Malibù, in California, certi altri invece sostengono che sia nato nella \"Keg Steakhouse\" a Calgary, in Canada, nel 1977. Alcune voci, inoltre, sostengono che fu creato da Adam Honigman, un barman al Maxwell's Plum Bar di New York City, verso la fine degli anni settanta oppure i primi anni ottanta. La sua popolarità alquanto diffusa ha creato molte varianti, elencate nella sezione omonima sotto. Tutte insieme, questi cocktail sono considerati la <i>Serie B-50</i>.</p><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Sebbene esistano macchine (dal funzionamento spesso scenografico) per la preparazione automatica di questo cocktail, un abile barman lo riesce a preparare senza difficoltà.Cocktail di questo genere, con suddivisione orizzontale, vengono definiti <i>layer</i>, inoltre la loro preparazione è detta <i>costruzione</i>, essendo essa opposta allo shakerare o al mescolare.</p>",
          "immagine": "B52_Cocktail.jpg"
        },
        {
          "id": 65,
          "testo": "<p>Il <b>Dark 'n' Stormy</b> \u00e8 un cocktail preparato con rum scuro (<i>dark rum</i>, in inglese) e ginger beer (da cui l'aggettivo <i>stormy</i>, \"burrascoso\"), a cui a volte viene aggiunto succo di <i>lime</i>.</p><p>\u00c8 l'unico drink il cui \u00e8 nome \u00e8 un marchio registrato, appartenente alla Gosling Brothers Ltd, un'azienda produttrice di rum, che dichiara di averlo inventato nell'arcipelago di Bermuda poco dopo la prima guerra mondiale. Dal 2011 \u00e8 un cocktail ufficiale IBA.</p>\n\n\n<h2><span id=\"Composizione\">Composizione</span></h2>\n<h3><span id=\"Ingredienti\">Ingredienti</span></h3>\n<p>Secondo la ricetta ufficiale IBA del 2011, la ricetta del cocktail prevede i seguenti ingredienti:</p>\n<ul><li>6 cl di rum scuro</li>\n<li>10 cl di ginger beer</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3>\n<p>Riempire un bicchiere di tipo highball con ghiaccio e versare il ginger beer, dopodich\u00e9 aggiungere il rum con tecnica floating per creare il classico effetto layers. Decorare con una fetta di <i>lime</i>.</p>\n<h2><span id=\"Storia_e_dispute_sul_nome\">Storia e dispute sul nome</span></h2>\n\n<p>Negli Stati Uniti d'America, \"Dark 'n' Stormy\" \u00e8 un marchio registrato dell'azienda di Bermuda Gosling Brothers Ltd dal 1991. Gosling Brothers ha registrato il marchio per impedire che venisse venduto un cocktail sotto il nome \"Dark 'N Stormy\" a meno che non contenesse il rum prodotto dall'azienda, il Gosling Black Seal.</p><p>Il nome registrato da Gosling Brothers possiede un solo apostrofo ('N), mentre la versione proposta dall'International Bartenders Association utilizza due apostrofi nel nome ('n'). A causa del rischio di contenzioso con il prodotto commercializzato da Gosling Brothers, alcuni autori utilizzano variazioni sul nome del prodotto per riferirsi a cocktail simili, ad esempio \"Safe Harbor\".</p>",
          "immagine": "Stormy.jpg"
        },
        {
          "id": 66,
          "testo": "<p>Il <b>Dirty Martini</b> è un cocktail a base di vodka, vermut secco e olive in salamoia. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>6 cl di vodka</li><li>1 cl di vermut secco</li><li>1 cl di salamoia di olive</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Raffreddare una coppa Martini con del ghiaccio, dopodiché mescolare tutti gli ingredienti in un mixing-glass riempito di ghiaccio.</p>",
          "immagine": "Triple_olive_Dirty_Martini_-_Evan_Swigart.jpg"
        },
        {
          "id": 67,
          "testo": "<p>L'<b>Espresso Martini</b> è un cocktail a base di vodka e servito in una coppa Martini, da cui il nome, con l'aggiunta di caffè espresso e liquore di caffè. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>5 cl di vodka</li><li>1 cl di Kahlúa</li><li>zucchero liquido (secondo i gusti personali)</li><li>1 caffè espresso</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Raffreddare la coppetta da cocktail riempiendola con dei cubetti di ghiaccio. Shakerare gli ingredienti in un mixing-glass, dopodiché versare il cocktail nella coppetta, dopo aver rimosso il ghiaccio, utilizzando lo strainer. Decorare ponendo tre chicchi di caffè in superficie.</p><h2><span id=\"Storia\">Storia</span></h2><p>Secondo l'ipotesi più accreditata, il cocktail è stato inventato da Dick Bradsell durante gli anni 1980, mentre lavorava al Freds Club di Londra.</p>",
          "immagine": "Bistrot_Bruno_Loubet,_Clerkenwell,_London_(4574785649).jpg"
        },
        {
          "id": 68,
          "testo": "<p>Il <b>French Martini</b> è un cocktail a base di vodka e succo di lampone. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta IBA del 2011 prevede l'utilizzo dei seguenti ingredienti:</p><ul><li>4,5 cl di vodka</li><li>1,5 cl di liquore di lampone</li><li>1,5 cl di succo d'ananas fresco</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Riempire una coppetta da cocktail con cubetti di ghiaccio per raffreddarla, quindi riempire uno <i>shaker</i> di ghiaccio e versare tutti gli ingredienti al suo interno. Shakerare il tutto, dopodiché versare il cocktail nella coppetta utilizzando lo <i>strainer</i>. Strizzare una buccia di limone per estrarne il succo e aggiungerlo al cocktail.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il French Martini è nato verso la fine degli anni 1980 in uno dei bar di New York del ristoratore Keith McNally.</p>",
          "immagine": "Chambord_French_Martini_Cocktail.jpg"
        },
        {
          "id": 69,
          "testo": "<p>Il <b>Kamikaze</b> è un cocktail  straight up appartenente al genere Fancy/popular nella classificazione International Bartenders Association, e ai sour.Ricetta IBA:</p><ul><li>1 oz. Vodka</li><li>1 oz  Cointreau</li><li>1 oz Succo di Lime</li><li>Guarnizione spicchio di Lime</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Shake and Strain. Servire in una coppa cocktail.</p><p>La  ricetta bilanciata secondo la chimica degli zuccheri seguita dalla maggior parte delle scuole di america bartender prevede:-1 1/2 oz Vodka-1/2  oz   Cointreau- 1 oz succo di Lime</p><h2><span id=\"Ricetta_O.T.R_On_the_rocks\">Ricetta O.T.R On the rocks</span></h2><p>-1 1/2 oz Vodka- 1/2 oz Triple Sec- 1 oz Lime- 2 oz Sweet ans Sour</p><h2><span id=\"Preparazione_2\">Preparazione</span></h2><p>Mix and strain. Spicchio di Limone o LimeBicchiere High Ball</p><h2><span id=\"Ricetta_OTR_in_bicchiere_.22old_fashioned.22\"></span><span id=\"Ricetta_OTR_in_bicchiere_\"old_fashioned\"\">Ricetta OTR in bicchiere \"old fashioned\"</span></h2><p>- 2/4 Vodka- 1/4 Triple Sec- 1/4 Succo di lime- Guarnizione: Fetta di lime</p><h2><span id=\"Preparazione_3\">Preparazione</span></h2><p>Mettere gli ingredienti nello shaker con 7-8 cubetti di ghiaccio, shakerare bene per 15-20 secondi e servire in bicchieri tipo Old Fashion pre-raffreddati in freezer. Guarnire con la fetta di lime.</p>",
          "immagine": "Kamikaze.jpg"
        },
        {
          "id": 70,
          "testo": "<p>Il <b>Lemon Drop Martini</b>, anche noto semplicemente come <b>Lemon Drop</b>, è un cocktail a base di vodka preparato con succo di limone, triple sec e sciroppo di zucchero. È stato descritto come una variante del Vodka Martini. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>2,5 cl di Absolut Citron</li><li>2 cl di triple sec</li><li>1,5 cl di succo di limone fresco</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Raffreddare una coppetta da cocktail riempiendola con del ghiaccio, dopodiché rimuovere il ghiaccio e applicare una crusta di zucchero sul bordo del bicchiere. Shakerare gli ingredienti in un mixing-glass e versare il cocktail nel bicchiere. Decorare con una fetta di limone.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il cocktail è stato inventato negli anni 1970 da Norman Jay Hobday, fondatore e proprietario dell'Henry Africa's, un bar nel quartiere di Russian Hill a San Francisco, in California, aperto nel 1969. Veniva originariamente servito in una coppetta da cocktail. Il nome del cocktail deriva probabilmente dall'omonima caramella inglese, chiamata appunto <i>lemon drop</i>. Dopo la sua invenzione, il cocktail si è diffuso rapidamente in vari locali di San Francisco. Nei primi anni 1990, il cocktail era spesso preparato come chupito o servito in un cicchetto.</p><h2><span id=\"Varianti\">Varianti</span></h2><p>Alcune varianti del Lemon Drop prevedono l'utilizzo di mirtilli o lamponi e di qualità di vodka ai rispettivi gusti. Il cocktail viene decorato con tali bacche o con il limone.</p>",
          "immagine": "Lemon_Drop_cocktails.jpg"
        },
        {
          "id": 71,
          "testo": "<p>Il <b>Pisco sour</b> è un sour a base di pisco la cui invenzione è attribuita a Victor Morris, immigrato americano di Salt Lake City che si trasferì in Perù nel 1913. Dopo un iniziale periodo passato a lavorare per la Cerro de Pasco Railroad, Victor aprì il Morris Bar in centro a Lima che divenne in pochissimo tempo luogo di ritrovo dell'upper-class Peruviana e degli immigrati di madrelingua inglese.</p><p>Morris iniziò a servire Pisco Sour nel suo bar come alternativa al Whiskey Sour ed il cocktail continuò a mantenere popolarità anche dopo la morte di Morris nel 1929.</p><p>Benché la sua origine sia contesa dal Cile, appare perciò evidente che il cocktail sia nato in Perù.</p><p>Il Pisco Sour è anche la bevanda nazionale del Perù dove si festeggia addirittura una festa nazionale il primo Sabato di Febbraio</p><h2><span id=\"Pisco_alla_peruviana\">Pisco alla peruviana</span></h2><ul><li>40 grammi di pisco</li><li>Succo di mezzo limone</li><li>1/2 cucchiaio di zucchero</li><li>bianco d'uovo</li><li>Amargo Chuncho Bitter</li><li>Ghiaccio in cubetti</li></ul><p>Viene preparato nello shaker agitando vigorosamente (meglio frullatore). Nello shaker va messo anche un albume di uovo e sul cocktail vanno fatte scendere quattro gocce di Amargo Chuncho Bitter.Si suggerisce max 2 cubetti di ghiaccio per persona.</p><h2><span id=\"Pisco_.28talves.29_alla_cilena\"></span><span id=\"Pisco_(talves)_alla_cilena\">Pisco (talves) alla cilena</span></h2><ul><li>3 parti di pisco</li><li>1 parte di succo di limone</li><li>ghiaccio in cubetti</li><li>zucchero</li></ul><p>Shekerare il pisco e il succo di limone. Decorare il bordo del bicchiere con lo zucchero, versare e aggiungere due cubetti di ghiaccio.</p>",
          "immagine": "PiscoSour.JPG"
        },
        {
          "id": 72,
          "testo": "<p>Il <b>Russian Spring Punch</b> è un cocktail a base di vodka e liquore, cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>2,5 cl di vodka</li><li>1,5 cl di Crème de cassis</li><li>1 cl di zucchero liquido</li><li>2,5 cl di succo di limone fresco</li><li>Top di vino spumante</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Shakerare la vodka, il liquore, lo zucchero liquido e il succo di limone in un mixing-glass, dopodiché versare direttamente nel bicchiere highball. Completare il cocktail con un top di vino spumante, e infine decorare con una fetta di limone e una mora.</p><h2><span id=\"Storia\">Storia</span></h2><p>Il Russian Spring Punch è stato inventato a Londra da Dick Bradsell durante gli anni 1980. Bradsell, pur non ricordandosi in quale locale lavorasse quando ha ideato il cocktail, racconta di averlo creato per un gruppo di amici che volevano organizzare una festa e spendere poco in alcol; agli invitati venivano forniti vodka, Crème de cassis, zucchero liquido e succo di limone, e veniva loro chiesto di portarsi da casa il proprio vino spumante.</p>",
          "immagine": "russianspring.jpg"
        },
        {
          "id": 73,
          "testo": "<p>Lo <b>spritz</b> è un long drink aperitivo alcolico italiano, popolare nel Triveneto, a base di prosecco, amaro e acqua frizzante o seltz.</p><p>È dal 2011 un cocktail ufficiale della IBA, con il nome di <b>spritz veneziano</b>.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>Lo spritz si prepara con un vino bianco frizzante (solitamente prosecco), un bitter come Aperol, Campari o Select (che conferisce al cocktail un colore rosso/arancio) e una spruzzata di acqua frizzante o seltz.</p><p>La ricetta veneziana prevede:</p><ul><li>1/3 di vino bianco frizzante;</li><li>1/3 di bitter;</li><li>1/3 di acqua frizzante.</li></ul><p>La ricetta ufficiale IBA prevede:</p><ul><li>6 cl di prosecco;</li><li>4 cl di Aperol;</li><li>q.b. di soda/seltz.</li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Per preparare lo spritz si versa il vino in un bicchiere old-fashioned contenente del ghiaccio, si aggiunge il bitter e infine l'acqua frizzante, guarnendo quindi con mezza fetta d'arancia.Dal 2015, nel retroetichetta della bottiglia dell'Aperol, viene indicato un bicchiere da vino con stelo quello ideale per la preparazione dell'Aperol Spritz.</p><h2><span id=\"Storia\">Storia</span></h2><p>Le origini dello spritz sono ignote, ma sembra che l'origine sia da rintracciare in un’usanza dei soldati dell'Impero austriaco, di stanza in quella che in precedenza era la Repubblica Serenissima e poi fece parte del Regno Lombardo-Veneto, i quali, abituati ad un consumo di birra con un grado alcolico minore, per stemperare l'elevata gradazione alcolica dei vini veneti li avrebbero allungati con seltz o acqua frizzante; da qui si vuole l'origine del nome, che si vuole derivare dal verbo tedesco austriaco <i>spritzen</i>, che significa \"spruzzare\", il gesto appunto di allungare il vino con l'acqua frizzante. Di tale usanza austriaca, conservatasi pressoché inalterata a Trieste e in Trentino, territori asburgici fino al 1918, rimane eco presso la popolazione anziana di molte località del Nord-est italiano e, con il nome di “vin sprizato”, anche a Milano.</p><p>Come cocktail lo spritz nasce presumibilmente tra gli anni venti e trenta del Novecento a Venezia, quando si pensò di unire a tale usanza  l'Aperol (presentato alla Fiera di Padova nel 1919) o il Select (prodotto dai fratelli veneziani Pilla).</p><p>Acquisita un'enorme popolarità a Venezia, a Padova e nell'intero Veneto a partire dagli anni settanta, lo spritz diventa un cavallo di battaglia dell'Aperol e, con la denominazione di “spritz veneziano”, viene ufficializzato nel 2011 dall'IBA.</p><h2><span id=\"Diffusione\">Diffusione</span></h2><p>Nel corso degli anni, la bevanda si è rapidamente diffusa nelle altre città del Veneto, del Friuli-Venezia Giulia, del Trentino, dell'Istria e in tutta l'Italia centrosettentrionale.</p><p>La sua notorietà a livello nazionale è avvenuta tramite la pubblicità dell'Aperol che ad inizio 2008 ha avviato una campagna pubblicitaria inneggiante al consumo dello spritz, favorendone così la diffusione anche ad altre regioni come Lombardia ed Emilia-Romagna, e anche a città più a sud ed estere.</p><h2><span id=\"Varianti\">Varianti</span></h2><p>Esistono diverse varianti geografiche dello spritz; la gradazione alcolica è quindi variabile, ma si può valutare mediamente sugli 8°.</p><p>Oltre ad Aperol, Campari e Select, altri liquori usati possono essere il Cynar o il China Martini.</p><p>Un'altra modifica alla ricetta, sempre più diffusa, è quella di usare prosecco spumante al posto di prosecco frizzante. Similmente, altre tipologie di spumante (fuori dal Veneto-Friuli) al posto di vino bianco frizzante. In questi casi può essere evitato anche l'uso del seltz o acqua gassata.</p>",
          "immagine": "Aperol_Spritz_2014a.jpg"
        },
        {
          "id": 74,
          "testo": "<p>Il <b>Margarita</b> è il più comune cocktail messicano a base di tequila, ed appartiene ai sour. In latino \"margarita\" significa perla, in spagnolo è la traduzione della parola margherita. È un cocktail pre-dinner.</p><p>Secondo quanto afferma William Grimes, autore di <i>Straight Up or On the Rocks: The Story of the American Cocktail</i>, molte persone affermano di aver bevuto Margarita in Messico già negli anni trenta, da cui si deduce che il margarita fu inventato prima del 1940.</p><h2><span id=\"Proporzioni\">Proporzioni</span></h2><p>Le proporzioni più usate per il margarita sono;</p><ul><li><b>2:1:1</b> (50% tequila, 25% Triple sec, 25% lime fresco o succo di limone)</li><li><b>3:2:1</b> (50% tequila, 33% Triple Sec, 17% lime fresco o succo di limone)</li><li><b>3:1:1</b> (60% tequila, 20% Triple Sec, 20% lime fresco o succo di limone)</li><li><b>1:1:1</b> (33% tequila, 33% Triple Sec, 33% lime fresco o succo di limone)</li></ul><p>sebbene lo standard IBA (Cocktail ufficiali IBA) sia</p><ul><li><b>7:4:3</b> (50% tequila, 28.5% Triple Sec, 21.5% lime fresco o succo di limone)</li></ul><p>Il drink è normalmente servito shakerato con ghiaccio, \"on the rocks\", o mescolato con ghiaccio (il \"frozen margarita\"); nella ricetta classica è servito nella tipica coppetta detta <i>Sombrero</i>. Il cocktail viene frequentemente servito con sale sul bordo del bicchiere (\"Crusta\").</p><p>Sebbene i margarita più comuni contengano tequila, liquore all'arancia, succo di lime o di limone, e qualche volta un dolcificante aggiuntivo, molte variazioni stanno diventando sempre più comuni. Usare succo di lime imbottigliato (che contiene zucchero) è un altro modo usato per dolcificare il cocktail.</p><h3><span id=\"Varianti_alla_frutta_del_Margarita\">Varianti alla frutta del Margarita</span></h3><p>È possibile aggiungere anche succhi di frutta al margarita. Esempi classici sono le seguenti combinazioni:</p><ul><li>succo di lime con mirtillo;</li><li>fragola o pesca, con succo di limone;</li><li>banana, con succo di banana.</li></ul><p>Comunque, è bene segnalare che i margarita a base di frutta non fanno parte della definizione di un classico \"Margarita\".</p>",
          "immagine": "Margarita_cocktail_iba.jpg"
        },
        {
          "id": 75,
          "testo": "<p>Il <b>Vampiro</b> è un cocktail codificato IBA (nella sezione New Era Drinks), simile al Bloody Mary.</p>",
          "immagine": "CocktailVampiro.jpg"
        },
        {
          "id": 76,
          "testo": "<p><b>Vesper</b> o <b>Vesper Martini</b> è un cocktail composto da gin, vodka e Kina Lillet, non più prodotta e sostituita dal similare attuale Lillet Blanc. Fa parte della categoria dei pre-dinner cocktail.</p><p>Il cocktail è stato inventato nel 1953 da Ian Fleming nel romanzo <i>Casino Royale</i>. L'agente segreto James Bond ordina e nomina il cocktail in onore di Vesper Lynd, di cui era innamorato.</p><h2><span id=\"Ingredienti\">Ingredienti</span></h2><ul><li>tre parti di  gin</li><li>una parte di vodka</li><li>mezza parte di Lillet blanc (il Kina Lillet non è più in vendita dopo una modifica alla sua formula)</li><li>una fetta lunga e sottile di scorza di limone.</li></ul><h2><span id=\"Preparazione\">Preparazione</span></h2><p>Shakerare gli ingredienti con ghiaccio in uno shaker e servire in una coppa martini larga e profonda decorando con una fetta lunga e sottile di scorza di limone.</p>",
          "immagine": "Vesper_Martini.jpg"
        },
        {
          "id": 77,
          "testo": "<p>Lo <b>Yellow Bird</b> è un cocktail caraibico a base di rum bianco, Galliano e triple sec. È un cocktail ufficiale IBA dal 2011.</p><h2><span id=\"Composizione\">Composizione</span></h2><h3><span id=\"Ingredienti\">Ingredienti</span></h3><p>La ricetta ufficiale dell'IBA del 2011 prevede i seguenti ingredienti:</p><ul><li>3 cl di rum bianco</li><li>1,5 cl di Galliano</li><li>1,5 cl di triple sec</li><li>1,5 cl di succo di <i>lime</i></li></ul><h3><span id=\"Preparazione\">Preparazione</span></h3><p>Raffreddare una coppetta da cocktail con del ghiaccio e shakerare tutti gli ingredienti in un mixing-glass, dopodiché rimuovere il ghiaccio dalla coppetta e versare il cocktail al suo interno utilizzando uno strainer.</p><h2><span id=\"Storia\">Storia</span></h2><p>Le origini del nome \"Yellow Bird\" sono incerte. Alcuni riportano che il nome possa derivare da un popolare brano di Haiti, <i>Yellow Bird</i>, che è stata poi riscritta in inglese nel 1957 ed è in seguito diventata una sorta di inno nazionale dei Caraibi grazie alla popolarità ottenuta dalla registrazione di Harry Belafonte. Il cantante hawaiano Arthur Lyman pubblicò una versione della canzone che nel luglio del 1961 raggiunse la 4ª posizione nelle classifiche di Billboard, e venne eseguita ogni settimana presso lo Shell Bar dell'Hilton Hawaiian Village Waikiki Beach Resort, possibile locale d'origine del cocktail.</p>",
          "immagine": "yellowbird.jpg"
        }
      ]
    }

    
   

}

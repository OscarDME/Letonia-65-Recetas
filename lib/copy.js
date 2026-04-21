// lib/copy.js — Viss redzamais mērķlapas (landing page) teksta saturs. 
// Visas teksta izmaiņas tiek veiktas šeit.

export const copy = {
  metadata: {
    title: "365 veselīgas receptes — Bez cukura un bez glutēna",
    description:
      "1000 receptes bez cukura un glutēna 365 dienām. Ēd bez vainas apziņas, bez sarežģījumiem un bez ierobežojumiem. Īpašais piedāvājums: 8,90 € + 8 dāvanas.",
  },

  hero: {
    banner: "PIEDĀVĀJUMS SPĒKĀ TIKAI ŠODIEN!",
    timerLabels: { days: "Dienas", hours: "Stundas", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dienas ar gardām receptēm bez cukura un glutēna, lai baudītu ēdienu bez vainas apziņas!",
    bullets: [
      "Padariet savas ēdienreizes veselīgākas un patīkamākas, neatsakoties no garšas",
      "BEZ SAREŽĢĪJUMIEM",
      "BEZ IEROBEŽOJUMIEM",
      "BEZ VAINAS APZIŅAS",
    ],
    cta: "GRIBU ĒST BEZ VAINAS APZIŅAS",
    kicker: "365 dienas · 1000 receptes",
    imageAlt: "Recepšu grāmata 365 dienām bez cukura un bez glutēna",
    trustChips: [
      { icon: "⭐", text: "Vairāk nekā 5000 ģimeņu" },
      { icon: "🎁", text: "8 bonusa dāvanas" },
      { icon: "🛡️", text: "75% atlaide šodien" },
    ],
  },

  story: {
    headline: "Cukurs ir klusais ienaidnieks, kas grauj jūsu veselību",
    intro:
      "Tas ir klātesošs pārtikā, ko patērējat katru dienu, paslēpts šķietami pilnīgi nekaitīgos produktos.",
    problemsLead:
      "Lūk, galvenās cukura izraisītās problēmas un kā tās, iespējams, ietekmē jūs tieši tagad:",
    problems: [
      "Nemitīgs nogurums un neizskaidrojams spēku izsīkums",
      "Svara pieaugums un tauku uzkrāšanās vēdera zonā",
      "Hormonālais un metaboliskais disbalanss",
      "Hronisku slimību (diabēta, hipertensijas, aptaukošanās u.c.) risks",
      "Straujas garastāvokļa svārstības un trauksme",
      "Paātrināta novecošanās",
      "Atkarība no ēdiena un tieksme pēc saldumiem",
    ],
    solutionHeadline:
      "Beidzot ir vienkāršs un efektīvs risinājums, kā pārveidot savus ēšanas paradumus, neatsakoties no iecienītākajiem ēdieniem.",
  },

  benefits: {
    stepsHeadline: "Jūsu transformācijai pietiek ar tikai 3 soļiem",
    steps: [
      {
        number: "1",
        title: "Seko ēdienkartei bez vainas apziņas",
        desc: "Iegūstiet piekļuvi pilnai recepšu ēdienkartei katrai gada dienai – visas bez cukura un bez glutēna. Nekas nav jāplāno!",
      },
      {
        number: "2",
        title: "Gatavojiet vienkāršus un gardus ēdienus",
        desc: "Sekojiet vienkāršām instrukcijām receptēs un pagatavojiet neticami gardus ēdienus, kas pārveidos jūsu uzturu.",
      },
      {
        number: "3",
        title: "Sajūtiet transformāciju",
        desc: "Sekojot receptēm, jūs sajutīsiet atšķirību savā ķermenī un veselībā: vairāk enerģijas, svara kontrole un mazāks slimību risks.",
      },
    ],
    ctaMid: "GRIBU ĒST BEZ VAINAS APZIŅAS",
    headline: "APSKATIET IEGUVUMUS, KAS PĀRVEIDOS JŪSU DZĪVI",
    items: [
      {
        icon: "HeartPulse",
        title: "Cukura līmeņa kontrole asinīs",
        desc: "Uzlabojiet cukura līmeni asinīs un samaziniet diabēta risku ar uzturvielām bagātām un gardām receptēm.",
      },
      {
        icon: "Utensils",
        title: "Uztura brīvība",
        desc: "Baudiet neatvairāmus ēdienus bez vainas apziņas, veidojot pozitīvas attiecības ar ēdienu.",
      },
      {
        icon: "CalendarDays",
        title: "Ikdienas daudzveidība",
        desc: "Ar 1000 receptēm jums ir jauna izvēle katrai gada dienai.",
      },
      {
        icon: "Timer",
        title: "Praktiskums virtuvē",
        desc: "Pagatavojiet gardas maltītes 30 minūtēs vai ātrāk, ietaupot laiku un novēršot ikdienas stresu.",
      },
      {
        icon: "GraduationCap",
        title: "Uztura pratība",
        desc: "Iemācieties apzināti izvēlēties pārtiku un izveidojiet veselīgus ieradumus visam mūžam.",
      },
      {
        icon: "Scale",
        title: "Svara kontrole",
        desc: "Uzturiet veselīgu svaru ar receptēm, kas rada sāta sajūtu un baro, neupurējot garšu.",
      },
    ],
  },

  features: {
    headline: "Jums ir gatavas ēdienkartes 365 dienām – pa vienai katrai gada dienai",
    subheadline: "Mēs jūs vadīsim katrā solī pretī veselīgam uzturam",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Brokastis un uzkodas",
        desc: "Receptes brokastīm, kādas vēl NEKAD iepriekš neesat redzējuši. Ātras pagatavošanas metodes ar praktiskiem un pieejamiem produktiem!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Pusdienas un vakariņas",
        desc: "Celiet galdā visdažādākos un gardākos ēdienus ikdienai un īpašiem gadījumiem! Pagatavoti no pieejamiem produktiem, kas jums jau ir mājās.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Saldumi un deserti",
        desc: "DAUDZ bezglutēna un bezcukura saldumu un desertu variantu, lai baudītu gardumus bez vainas apziņas.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Mērces un dip uzkodas",
        desc: "Mērces un krēmi, lai piešķirtu ēdieniem neticamu garšu – ātri un vienkārši!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Veselīgas zupas un krēmzupas",
        desc: "Zupas, krēmzupas un buljoni – visi pagatavoti no uzturvielām bagātām sastāvdaļām un īpaši atlasītām garšvielām.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternatīvas miltiem",
        desc: "Viss ir bez glutēna un ar zemu glikēmisko indeksu, lai jūs varētu cept kūkas, maizi un konditorejas izstrādājumus bez liekām raizēm.",
      },
    ],
    ctaMid: "GRIBU ĒST BEZ VAINAS APZIŅAS",
    badgesHeadline: "Gardākie ēdieni šādās variācijās",
    badges: ["BEZ CUKURA", "BEZ GLUTĒNA", "MAZKALORIJU", "BEZ LAKTOZES"],
    audienceHeadline: "„Ēdiens bez vainas apziņas” ir piemērots tieši jums, ja:",
    audience: [
      {
        title: "Jums ir uztura ierobežojumi:",
        desc: "Cilvēki, kuriem veselības apsvērumu, piemēram, diabēta vai nepanesības dēļ, ir jāizvairās no cukura un glutēna.",
      },
      {
        title: "Vēlaties veselīgu ģimeni:",
        desc: "Vecāki, kuri vēlas nodrošināt uzturvielām bagātu un gardu pārtiku saviem bērniem, veicinot veselīgus ieradumus jau no agras bērnības.",
      },
      {
        title: "Ievērojat veselīgu dzīvesveidu:",
        desc: "Cilvēki, kuri ievēro īpašus uztura plānus – zemu ogļhidrātu, paleo vai vegānu diētu, un meklē receptes, kas atbilst šīm pieejām.",
      },
      {
        title: "Vēlaties kontrolēt savu svaru:",
        desc: "Cilvēki, kuri vēlas zaudēt svaru vai saglabāt to, un kuriem nepieciešamas receptes, kas rada sāta sajūtu, vienlaikus palīdzot kontrolēt kaloriju daudzumu.",
      },
    ],
  },

  testimonials: {
    headline: "Izlasiet to cilvēku atsauksmes, kuri jau tās izmanto",
    cta: "GRIBU ĒST BEZ VAINAS APZIŅAS",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Vienkārši gribēju jums pateikt, ka šī recepšu grāmata ir īsta svētība. Ar trim maziem bērniem man vienmēr trūkst laika, un tas, ka vienkopus ir tik daudz recepšu, visu atviegloja. Tagad mēs mājās ēdam garšīgi un veselīgi 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Cik lieliska recepšu grāmata! Kopš man diagnosticēja glutēna nepanesību, domāju, ka vairs nebūs iespējams izbaudīt ēdienu, taču ar jūsu receptēm es varu ēst bez raizēm. Paldies, ka padarījāt to tik vienkāršu! 🙏",
        time: "19:57",
      },
      {
        text: "Vēlos jums pateikties, jo šīs receptes mainīja manu dzīvi. Esmu diabētiķe, un man vienmēr ir bijis grūti atrast garšīgas un veselīgas alternatīvas. Tagad izbaudu katru ēdienreizi bez bailēm. Liels jums paldies! 🙏",
        time: "19:49",
      },
      {
        text: "Milzīgs paldies par receptēm! Dievinu saldumus, un man vienmēr ir bijušas problēmas ar cukuru, taču jūsu receptes sniedza man garšīgas un viegli pagatavojamas alternatīvas.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Veselīga recepte 1" },
      { src: "/carousel/categoria-8.webp", alt: "Veselīga recepte 2" },
      { src: "/carousel/categoria-9.webp", alt: "Veselīga recepte 3" },
      { src: "/carousel/categoria-10.webp", alt: "Veselīga recepte 4" },
      { src: "/carousel/categoria-11.webp", alt: "Veselīga recepte 5" },
      { src: "/carousel/categoria-1.webp", alt: "Veselīga recepte 6" },
    ],
  },

  bonuses: {
    badge: "Īpaši jums, ja esat tikuši līdz šejienei",
    headline: "JA ŠODIEN IEGĀDĀSIETIES 1000 RECEPTES, SAŅEMSIET 8 EKSKLUZĪVAS DĀVANAS 🎁",
    valueLabel: "Vērtība:",
    freeLabel: "BEZMAKSAS",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "DĀVANA 1", title: "Bezcukura desertu receptes", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "DĀVANA 2", title: "Mērču un dip uzkodu receptes", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "DĀVANA 3", title: "Zupu un krēmzupu receptes", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "DĀVANA 4", title: "Receptes ar bezglutēna miltiem", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "DĀVANA 5", title: "Bezglutēna maizes receptes", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "DĀVANA 6", title: "Veselīgu tortilju receptes", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "DĀVANA 7", title: "Veselīgas picas", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "DĀVANA 8", title: "500 gardas receptes, kas radītas diabētiķiem", value: "9,41 €" },
    ],
    totalLabel: "Viss, ko saņemsiet, ir vairāk nekā 40 € vērtībā",
    footer: "Taču šodien jūs šo summu nemaksāsiet... lai gan tas ir katra centa vērts.",
  },

  finalCta: {
    preHeadline: "Jūsu kopējās investīcijas par 1000 receptēm un visiem bonusiem...",
    urgencyTop: "Ierobežota laika piedāvājums!",
    subUrgency:
      "Nepalaidiet garām iespēju iegūt recepšu grāmatu ar 75% atlaidi. Pārveidojiet savu veselību jau tagad ar mūsu pilno ēdienkarti 365 dienām.",
    headline: "365 DIENAS AR RECEPTĒM BEZ CUKURA UN GLUTĒNA + PAPILDU BONUSI",
    bundleList: [
      "1000 receptes bez cukura un bez glutēna",
      "Dāvana 1: Bezcukura desertu receptes",
      "Dāvana 2: Mērču un dip uzkodu receptes",
      "Dāvana 3: Zupu un krēmzupu receptes",
      "Dāvana 4: Receptes ar bezglutēna miltiem",
      "Dāvana 5: Bezglutēna maizes receptes",
      "Dāvana 6: Veselīgu tortilju receptes",
      "Dāvana 7: Veselīgas picas",
      "Dāvana 8: 500 gardas receptes diabētiķiem",
    ],
    guaranteeText:
      "Uzmanību: Ja esat cilvēks, kurš patiesi vēlas parūpēties par savu vai savas ģimenes veselību, mūsu bezcukura un bezglutēna receptes noteikti var jums palīdzēt jau tagad. Nepalaidiet garām šo iespēju!",
    regularPriceLabel: "NO:",
    regularPrice: "40,00 €",
    urgencyText: "PIEDĀVĀJUMS SPĒKĀ TIKAI ŠODIEN!",
    offerPrice: "8,90 €",
    bottomUrgency: "Pēdējās brīvās vietas",
    discountBadge: "75% ATLAIDE",
    button: "JĀ, VĒLOS RECEPTES UN BONUSUS TŪLĪT PAT",
    trustRow: "🔒 100% drošs maksājums • ⚡ Tūlītēja piekļuve • ✅ Mūža garantija",
    imageAlt: "365 veselīgas receptes + 8 bonusi",
  },

  faq: {
    authorHeadline: "Kas ir Elīna Bērziņa?",
    authorBio:
      "Elīna Bērziņa ir veselīga uztura eksperte, kura maina cilvēku ieradumus ar savu inovatīvo ēdienkarti „Ēdiens bez vainas apziņas”. Ar bagātīgu pieredzi uztura zinātnē, Elīna dalās ar 1000 vienkāršām un pieejamām receptēm, kas radītas, lai atbalstītu jūs katrā solī ceļā uz veselīgāku dzīvi. Ieguvusi izglītību uzturzinātnē un diētoloģijā, Elīna apvieno savas profesionālās zināšanas ar praktisku pieeju, piedāvājot gardas un sabalansētas receptes, kas pielāgotas dažādām vajadzībām, kopā ar vērtīgiem padomiem, kas palīdzēs baudīt ēdienu bez ierobežojumiem vai pārmetumiem.",
    authorRole: "Uztura speciāliste",
    authorImageAlt: "Elīna Bērziņa — Uztura speciāliste",
    worksHeadline: "KAS TIEŠĀM STRĀDĀ?",
    doesntWork: [
      "ĒST MAZ UN BADOTIES",
      "IEVĒROT SAREŽĢĪTAS DIĒTAS",
      "ATTEIKTIES NO TĀ, KAS JUMS GARŠO",
    ],
    worksText:
      "Tas, kas patiešām strādā, ir plānots uzturs ar vienkāršām un praktiskām receptēm bez cukura un bez glutēna. Ar mūsu 365 dienu ēdienkarti jums vairs nebūs jāuztraucas par nomācošām vai ierobežojošām diētām.",
    headline: "Biežāk uzdotie jautājumi",
    subheadline: "Atbildes uz visbiežāk uzdotajiem jautājumiem",
    items: [
      { q: "KĀ ES SAŅEMŠU RECEPTES?", a: "Visu saturu saņemsiet savā e-pastā." },
      { q: "VAI VARU PIEKĻŪT NO TELEFONA?", a: "Jā, no telefona, planšetdatora vai datora." },
      { q: "JUMS IR JAUTĀJUMI?", a: "Jā, procesa laikā varat man uzdot visus savus jautājumus tieši." },
      { q: "CIK ILGI MAN BŪS PIEKĻUVE?", a: "Piekļuve visam saturam ir uz mūžu." },
    ],
  },

  closing: {
    kicker: "PĒDĒJĀ IESPĒJA! ⚡ Šis piedāvājums drīz beigsies",
    headline:
      "Pārveidojiet savu veselību jau tagad ar mūsu pilno ēdienkarti 365 dienām.",
    subheadline:
      "1000 receptes bez cukura un bez glutēna + 8 bonusa dāvanas. Tas viss par vienas ēdienreizes cenu.",
    regularPrice: "40,00 €",
    offerPrice: "8,90 €",
    ctaLabel: "JĀ, VĒLOS RECEPTES UN BONUSUS TŪLĪT PAT",
    trustRow:
      "🔒 100% drošs maksājums • ⚡ Tūlītēja un mūžīga piekļuve • ✅ Pēdējās brīvās vietas",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Visas tiesības aizsargātas. Iepazīstieties ar mūsu Privātuma politiku.",
  },
};
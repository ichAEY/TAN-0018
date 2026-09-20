const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

const rawBase = "https://raw.githubusercontent.com/ichAEY/TAN-0018/main";

export default {
  basePath: publicBase,

  template: {
    specialty: "nails",
    bookingProvider: "Связь с мастером",
    reviewSource: "Яндекс Карты",
  },

  brand: {
    name: "Светлана Антонова",
    subtitle: "Маникюр, педикюр и подология",
    monogram: "СА",
  },

  master: {
    name: "Светлана",
    dative: "Светлане",
    genitive: "Светланы",
    instrumental: "Светланой",
    monogram: "СА",
    profession: "мастер маникюра, педикюра и подологии",
    heroTitle: "",
    heroEmphasis: "эксперт по маникюру, педикюру и подологии",
    heroCaption: "Маникюр, педикюр и подология",
    imageAlt: "мастер маникюра, педикюра и подологии",
    heroCopy: "Маникюр, педикюр и подологические процедуры.",
    visitMotto: "",
    experienceYears: null,
    experienceAria: "",
    aboutTitle: "Светлана Антонова",
    aboutLead: "",
    aboutParagraphs: [],
    skills: [],
  },

  location: {
    country: "Россия",
    countryCode: "RU",
    city: "Москва",
    metro: "",
    cityMetro: "Москва",
    address: "Мичуринский проспект, 25, корп. 3",
    mapCardAddress: "Мичуринский проспект, 25, корп. 3",
    schedule: "Ежедневно 08:00–23:00",
    scheduleCapitalized: "Ежедневно 08:00–23:00",
    timeZone: "Europe/Moscow",
    openTime: "08:00",
    closeTime: "23:00",
  },

  contacts: {
    phoneDisplay: "+7 (963) 690-38-20",
    phoneHref: "tel:+79636903820",
    channels: [
      {
        type: "whatsapp",
        label: "WhatsApp",
        url: "https://wa.me/79636903820?text=%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B8%D0%B7+%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D0%9A%D0%B0%D1%80%D1%82%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE+%D0%B2%D0%B0%D1%88%D0%B5+%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5",
      },
      {
        type: "telegram",
        label: "Telegram",
        url: "https://t.me/+79636903820",
      },
      {
        type: "vk",
        label: "VK",
        url: "https://vk.ru/naillssvets",
      },
    ],
    messenger: null,
  },

  links: {
    bookingUrl: "",
    reviewsUrl: "https://yandex.com/maps/org/krasivyye_nozhki_i_nogti/195236437982/reviews/",
    mapUrl: "https://yandex.com/maps/org/krasivyye_nozhki_i_nogti/195236437982/",
    routeUrl: "https://yandex.com/maps/org/krasivyye_nozhki_i_nogti/195236437982/",
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "195236437982",
  },

  reputation: {
    rating: "4.9",
    reviewCount: "41",
  },

  images: {
    logo: `${rawBase}/logo.png`,
    portrait: `${rawBase}/masterpc.webp`,
    about: `${rawBase}/master.webp`,
    favicon: `${rawBase}/favicon-source.png`,
    heroDecoration: `${publicBase}/assets/template/hair-tools.png`,
    beforeAfter: [],
    gallery: [
      { src: `${rawBase}/galery00001.webp`, alt: "Работа Светланы 01" },
      { src: `${rawBase}/galery00002.webp`, alt: "Работа Светланы 02" },
      { src: `${rawBase}/galery00003.webp`, alt: "Работа Светланы 03" },
      { src: `${rawBase}/galery00004.webp`, alt: "Работа Светланы 04" },
      { src: `${rawBase}/galery00005.webp`, alt: "Работа Светланы 05" },
      { src: `${rawBase}/galery00006.webp`, alt: "Работа Светланы 06" },
      { src: `${rawBase}/galery00007.webp`, alt: "Работа Светланы 07" },
      { src: `${rawBase}/galery00008.webp`, alt: "Работа Светланы 08" },
      { src: `${rawBase}/galery00009.webp`, alt: "Работа Светланы 09" },
      { src: `${rawBase}/galery00010.webp`, alt: "Работа Светланы 10" },
    ],
  },

  services: {
    groups: [
      {
        id: "manicure",
        label: "Маникюр",
        services: [
          { name: "Маникюр с однотонным покрытием гель-лак", price: "3 000 ₽", time: "", description: "", url: "" },
          { name: "Возрастной маникюр", price: "1 500 ₽", time: "", description: "", url: "" },
          { name: "Детский маникюр", price: "1 500 ₽", time: "", description: "", url: "" },
          { name: "Маникюр с покрытием лак", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Покрытие лак", price: "500 ₽", time: "", description: "", url: "" },
          { name: "Маникюр без покрытия", price: "1 500 ₽", time: "", description: "", url: "" },
          { name: "Мужской маникюр", price: "1 800 ₽", time: "", description: "", url: "" },
        ],
      },
      {
        id: "pedicure",
        label: "Педикюр",
        services: [
          { name: "Комбинированный педикюр", price: "3 500 ₽", time: "", description: "", url: "" },
          { name: "Педикюр для пожилых", price: "3 500 ₽", time: "", description: "", url: "" },
          { name: "Детский педикюр", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Педикюр с покрытием гель-лак", price: "4 700 ₽", time: "", description: "", url: "" },
          { name: "Педикюр с покрытием лак", price: "4 000 ₽", time: "", description: "", url: "" },
          { name: "Покрытие лак", price: "500 ₽", time: "", description: "", url: "" },
          { name: "Педикюр (только пальчики)", price: "2 500 ₽", time: "", description: "", url: "" },
          { name: "Мужской педикюр", price: "5 000 ₽", time: "", description: "", url: "" },
        ],
      },
      {
        id: "podology",
        label: "Подология",
        services: [
          { name: "Изготовление стелек", price: "7 000 ₽", time: "", description: "", url: "" },
          { name: "Обработка трещин на пятках", price: "2 500 ₽", time: "", description: "", url: "" },
          { name: "Протезирование ногтевой пластины", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Изготовление ортеза", price: "2 500 ₽", time: "", description: "", url: "" },
          { name: "Установка корректирующей системы", price: "5 000 ₽", time: "", description: "", url: "" },
          { name: "Вросший ноготь", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Обработка бородавки", price: "1 500 ₽", time: "", description: "", url: "" },
          { name: "Разгрузочная повязка", price: "1 000 ₽", time: "", description: "", url: "" },
          { name: "Обработка мозолей", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Изготовление разделителей для пальцев", price: "2 500 ₽", time: "", description: "", url: "" },
          { name: "Обработка скрученного ногтя", price: "5 000 ₽", time: "", description: "", url: "" },
          { name: "Обработка уплотнённой кожи", price: "1 500 ₽", time: "", description: "", url: "" },
          { name: "Обработка деформированного ногтя", price: "2 000 ₽", time: "", description: "", url: "" },
          { name: "Обработка стоп (без педикюра)", price: "2 000 ₽", time: "", description: "", url: "" },
        ],
      },
    ],
  },

  i18n: {
    localLocale: "ru",
    locales: [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
    ],
    translations: {
      en: {
        "Светлана Антонова": "Svetlana Antonova",
        "мастер маникюра, педикюра и подологии": "manicure, pedicure and podology specialist",
        "эксперт по маникюру, педикюру и подологии": "manicure, pedicure and podology expert",
        "Маникюр, педикюр и подология": "Manicure, pedicure and podology",
        "Маникюр, педикюр и подологические процедуры.": "Manicure, pedicure and podology treatments.",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Я Светлана — эксперт по маникюру и педикюру.": "I am Svetlana — a manicure and pedicure expert.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and correction.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay attention to neatness, shape and quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and correction",
        "Стерильные инструменты": "Sterile instruments",
        "Москва": "Moscow",
        "Мичуринский проспект, 25, корп. 3": "25 bldg. 3 Michurinsky Avenue, Moscow",
        "Ежедневно 08:00–23:00": "Daily 08:00–23:00",
        "Маникюр": "Manicure",
        "Маникюр с однотонным покрытием гель-лак": "Manicure with single-color gel polish",
        "Возрастной маникюр": "Age-focused manicure",
        "Детский маникюр": "Children's manicure",
        "Маникюр с покрытием лак": "Manicure with nail polish",
        "Покрытие лак": "Nail polish coating",
        "Маникюр без покрытия": "Manicure without coating",
        "Мужской маникюр": "Men's manicure",
        "Педикюр": "Pedicure",
        "Комбинированный педикюр": "Combined pedicure",
        "Педикюр для пожилых": "Pedicure for seniors",
        "Детский педикюр": "Children's pedicure",
        "Педикюр с покрытием гель-лак": "Pedicure with gel polish",
        "Педикюр с покрытием лак": "Pedicure with nail polish",
        "Педикюр (только пальчики)": "Pedicure (toes only)",
        "Мужской педикюр": "Men's pedicure",
        "Подология": "Podology",
        "Изготовление стелек": "Custom insoles",
        "Обработка трещин на пятках": "Heel crack treatment",
        "Протезирование ногтевой пластины": "Nail plate prosthetics",
        "Изготовление ортеза": "Custom orthosis",
        "Установка корректирующей системы": "Corrective system installation",
        "Вросший ноготь": "Ingrown nail treatment",
        "Обработка бородавки": "Wart treatment",
        "Разгрузочная повязка": "Offloading dressing",
        "Обработка мозолей": "Callus treatment",
        "Изготовление разделителей для пальцев": "Custom toe separators",
        "Обработка скрученного ногтя": "Curved nail treatment",
        "Обработка уплотнённой кожи": "Thickened skin treatment",
        "Обработка деформированного ногтя": "Deformed nail treatment",
        "Обработка стоп (без педикюра)": "Foot treatment (without pedicure)",
      },
    },
  },

  reviews: [
    {
      author: "Ольга В.",
      text: "Очень сложно найти мастера, который умеет делать качественно и маникюр, и педикюр, умеет работать с детскими ногтями, заботится о своей и вашей безопасности (все инструменты проходят тщательную обработку) и просто приятный человек. Светлана именно такой мастер. Однозначно рекомендую",
      source: "Яндекс Карты",
    },
    {
      author: "Evochka",
      text: "Я больше года была у другого подолога, и результат оказался плачевным. Два месяца назад записалась к Светлане, доверившись отзывам, и это было лучшим решением. Делюсь своим положительным опытом посещения этого места и благодарю очень компетентного, внимательного и комфортного специалиста Светлану. Процедуры выполняются на высшем уровне, назначения и рекомендации очень действенны, если их строго соблюдать. Уже через месяц налицо был явный прогресс. Спасибо вам за труд и профессионализм. 🌷",
      source: "Яндекс Карты",
    },
    {
      author: "Марина К.",
      text: "Очень хочется оставить отзыв о высоком профессионализме Светланы! Обратились со сложной проблемой подростка, грыз ногти, пальцы ног на больших пальцах были деформированы. Светлана взялась, была проведена колоссальная работа, где видны результаты! Так же, Светлана постоянно на связи, даёт советы! Спасибо огромное 🙂",
      source: "Яндекс Карты",
    },
    {
      author: "Мурадова Мария",
      text: "Светлана прекрасный мастер! Маникюр прекрасный, аккуратный, большой выбор оттенков, хожу уже несколько лет только к ней) А во время процедуры можно включать свои любимые фильмы и сериалы на телевизоре) Очень рекомендую Светлану !!",
      source: "Яндекс Карты",
    },
    {
      author: "Александра Колотова",
      text: "Зашла с улицы, узнать про педикюр, очень переживала, что нарвусь на непорядочного кого-то. Но нет, подолог настоящий. Очень грамотная женщина, приятно удивила. Записала через 2 дня на прием. Я сходила на педикюр и поняла, что вернусь еще. Цена супер. В Раменках - это подарок а не цена.",
      source: "Яндекс Карты",
    },
    {
      author: "Андрей Леон",
      text: "Светлана быстро и аккуратно помогла с вросшим ногтем на ноге. Также объяснила как будет проходить лечение, все подробно и понятно. Цены адекватные.",
      source: "Яндекс Карты",
    },
    {
      author: "Светлана Омельченко",
      text: "Светлана отличный мастер, чуткая , вежливая. Работает быстро и аккуратно, все инструменты стерилизует, расходники одноразовые. Много лет хожу к ней, очень довольна.",
      source: "Яндекс Карты",
    },
  ],

  promotions: [],
  amenities: [],

  seo: {
    siteUrl: "https://ichaey.github.io/TAN-0018/",
    title: "Светлана Антонова — маникюр, педикюр и подология",
    description: "Маникюр, педикюр и подологические услуги у Светланы Антоновой в Москве.",
    keywords: [
      "Светлана Антонова",
      "маникюр Москва",
      "педикюр Москва",
      "подолог Москва",
      "подология Москва",
    ],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};

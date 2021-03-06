const data = [
  {
    "point": "Мой центр Амвэй, Москва",
    "address": "Москва, ул. Авиаконструктора Микояна, 12, БЦ «Линкор» (ст. м. ЦСКА)",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "ТЦ «Красная Пресня»",
    "address": "Москва, Звенигородское шоссе, д. 4 (ст. м. Улица 1905 года)",
    "shedule": "Ежедневно с 09:00 до 21:00"
  },
  {
    "point": "Магазин «Шоссе Энтузиастов»",
    "address": "Москва, ул. Электродная, д. 2, стр. 32 (ст.  м. Шоссе Энтузиастов)",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Склад в г. Балашиха",
    "address": "Московская область, город Балашиха, 25-й километр Щелковского шоссе, владение 3 (рядом с деревней Долгое Ледово)",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Санкт-Петербург",
    "address": "Санкт-Петербург, пл. Карла Фаберже, 8 (ст. м. Ладожская)",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Региональный склад в г. Санкт-Петербурге",
    "address": "Санкт-Петербург, п. Шушары, Московское шоссе, д. 70, корпус 4, логистический комплекс «Шушары»",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Магазин Amway, Нижний Новгород",
    "address": "Нижний Новгород, пл. Советская, д. 5, ТРЦ «Жар-Птица»",
    "shedule": "Ежедневно с 10:00 до 22:00"
  },
  {
    "point": "Магазин Amway, Воронеж",
    "address": "Воронеж, ул. Ворошилова, д. 16",
    "shedule": "Среда - воскресенье с 12:00 до 20:00"
  },
  {
    "point": "Мой центр Амвэй, Краснодар",
    "address": "Краснодар, ул. Старокубанская, д. 122/10",
    "shedule": "Ежедневно с 11:00 до 21:00"
  },
  {
    "point": "Складской мини-комплекс Краснодар",
    "address": "Краснодар, ул. Сормовская, д. 7",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Ростов-на-Дону",
    "address": "Ростов-на-Дону , ул. Омская 1/1, стр. 3",
    "shedule": "Ежедневно с 10:00 до 22:00"
  },
  {
    "point": "Региональный склад в г. Ростове-на-Дону",
    "address": "Ростов-на-Дону, ул. Доватора, д. 14 6Р, литера, А",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Самара",
    "address": "443068 г. Самара, улица Ново—Садовая, д. 160М, на территории ТРЦ «МегаСити»",
    "shedule": "Ежедневно с 10.00 до 21.00"
  },
  {
    "point": "Студия Amway Казань",
    "address": "420107 г. Казань, ул. Спартаковская, д. 6. Сувар Плаза",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Складской мини-комплекс в г. Казани",
    "address": "420054, Республика Татарстан, г. Казань, ул. Крутовская, дом 26",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Уфа",
    "address": "Уфа, ул. Менделеева 12, д.205А",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Мой центр Амвэй, Екатеринбург",
    "address": "Екатеринбург, ул. Куйбышева, д. 44 лит. Д",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Мой центр Амвэй, Пермь",
    "address": "Пермь, ул. Революции, д. 21",
    "shedule": "Ежедневно с 10:00 до 21:00"
  },
  {
    "point": "Региональный склад в г. Екатеринбурге",
    "address": "Екатеринбург, ул. Суходольская, дом 197",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Новосибирск",
    "address": "ул. Ленина, д. 84, 2 этаж, ТЦ «Апельсин» (ст. м. Гарина-Михайловского)",
    "shedule": "Ежедневно с 10:00 до 22:00"
  },
  {
    "point": "Региональный склад в г. Новосибирске",
    "address": "Новосибирск, ул. Петухова, д. 71, логистический комплекс «RavenRussia»",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Красноярск",
    "address": "г. Красноярск, ул. Алексеева д.46",
    "shedule": "Ежедневно с 11:00 до 21:00"
  },
  {
    "point": "Складской мини-комплекс в г. Красноярск",
    "address": "660118, г. Красноярск, ул. Северное шоссе, 17",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Складской мини-комплекс в г. Сургуте",
    "address": "628400, Тюменская область, Ханты-Мансийский АО — Югра, г. Сургут, Нефтеюганское шоссе, 8",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Мой центр Амвэй, Иркутск",
    "address": "Иркутск, ул. Советская, д. 27",
    "shedule": "Ежедневно с 11:00 до 21:00"
  },
  {
    "point": "Складской мини-комплекс в г. Иркутске",
    "address": "664024, г. Иркутск, ул. Трактовая, ориентир — дом 18 &#92;28 а",
    "shedule": "Понедельник — Пятница с 09:00 до 17:00"
  },
  {
    "point": "Магазин Amway, Хабаровск",
    "address": "Хабаровск, ул. Калинина, д. 37",
    "shedule": "Ежедневно с 11:00 до 21:00"
  },
  {
    "point": "Региональный склад в г. Хабаровске",
    "address": "Хабаровск, ул. Краснореченская, д. 118",
    "shedule": "Понедельник — Пятница с 09.00 до 17.00"
  }
];

function createList() {
  const listParent = document.querySelector('#myUL');
  console.log(listParent);
  // debugger
  
  data.forEach(el => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div class="search-item _d-none">
        <div class="col-lg-8">
          <p class="addr strong">${el.point}</p>
          <p class="addr js-address">${el.address}</p>
        </div>
        <div class="col-lg-4 addr">${el.shedule}</div>
      </div>
    `;
    listParent.appendChild(item);
  })
};

createList();

function myFunction() {
  // Declare variables
  let input, filter, ul, li, i, txtValue;

  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  const items = document.querySelectorAll('.search-item')

  if ( !filter || filter.length < 3 ) return

  items.forEach(item => {
    if ( filter && item.classList.contains('_d-none') ) {
      item.classList.remove('_d-none')
    } else if ( !filter ) {
      item.classList.add('_d-none') 
    } else {
      return
    }
  })
  
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    item = li[i].querySelector('.js-address');
    txtValue = item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const data = [
	{ image: 'hobbit.jpg', text1: 'Хоббит туда и обратно' , text2:'«В земле была нора, а в норе жил хоббит». Эти слова написал Джон Рональд Руэл Толкин на обороте школьной экзаменационной работы, которую проверял одним жарким летним днем. И кто бы мог подумать, что именно из них, как из волшебного зернышка, произрастет одно из самых известных произведений мировой литературы... В данное издание вошел перевод Н. Рахмановой.'},
	{ image: 'Karrol.jpg', text1: 'Коралина' ,text2:'«Коралина» — история о девочке, которая обнаруживает за дверью своего нового дома другую квартиру, как две капли воды похожую на ее собственную. Там живут другие мама с папой, которые хотят, чтобы Коралина осталась с ними. Девочке придется быть очень смелой, чтобы вернуться в свой настоящий дом и обрести себя.'},
	{ image: 'Victor.jpg', text1: 'Человек, который смеется' ,text2:'Действие романа Виктора Гюго «Человек, который смеется» происходит в Англии конца XVII — начала XVIII веков. Гуинплен — лорд по рождению, в детстве был продан бандитам-компрачикосам, сделавшим из ребенка ярмарочного шута, вырезав на его лице маску «вечного смеха»'},
	{ image: 'Oh_brave_new_world.webp', text1: 'О дивный новый мир',text2:'«О дивный новый мир» — один из самых продаваемых и актуальных романов последнего десятилетия. Для поклонников антиутопий «Город за рекой» Германа Казака, «Мы» Евгения Замятина и «1984» Джорджа Оруэлла.'},
	{ image: '451_degrees_Fahrenheit.jpg', text1: '451 градус по Фаренгейту',text2: 'Это общество катится в никуда. Книги горят. А вместе с ними — опасные знания. Философия, опыт, сомнения, чувства, страдания и мечты. Инакомыслящих ждет карательная психиатрия. По пятам диссидентов мчится безжалостный электрический пес. Беги от всеобщего оболванивания. Чувствуешь, как дымится бумага?'},
	{ image: 'Lord_of_the_Flies.jpg', text1: 'Повелитель мух',text2: 'Странная, страшная и бесконечно притягательная книга. История благовоспитанных мальчиков, внезапно оказавшихся на необитаемом острове. Философская притча о том, что может произойти с людьми, забывшими о любви и милосердии.'},
	{ image: 'Your_humble_servant_the_cat.webp', text1: 'Ваш покорный слуга кот',text2: 'Дебютный роман Сосэки Нацумэ — родоначальника японской сатиры и одного из самых известных во всем мире японских авторов. Еще при жизни писателя его ироничные и остроумные произведения имели грандиозный успех, но высмеивающий японскую интеллигенцию рассказчик-кот просто покорил сердца читателей.'},
	{ image: 'suicide_club.webp', text1: 'Клуб самоубийц',text2: 'Добро пожаловать в мир удивительных приключений и хитро задуманных преступлений, головокружительных погонь, смертельных дуэлей и умопомрачительно смешных диалогов, – мир, в котором викторианский "рыцарь без страха и упрека" принц Флоризель и его верный друг полковник Джеральдин ведут смертельную схватку со Злом, защищая несправедливо обиженных, – и ни на минуту не теряют при этом достойного истинных джентльменов чувства юмора.'},
	{ image: 'we.webp', text1: 'Мы',text2: 'Знаковый роман, с которого официально отсчитывают само существование жанра "антиутопия" Запрещенный в советский период, теперь он считается одним из классических произведений не только русской, но и мировой литературы ХХ века.'}
];

let currentIndex = 0;

function swipright() {
  var myImage = document.querySelector('.bokimg');
  var myText1 = document.querySelector('.bookname');
  var myText2 = document.querySelector('.bookprgr');

  currentIndex = (currentIndex + 1) % data.length;

  myImage.style.animation = 'fadeImageOut 0.6s ease-in-out forwards';
  myText1.style.animation = 'fadeTextOut 0.6s ease-in-out forwards';
  myText2.style.animation = 'fadeTextOut 0.6s ease-in-out forwards';

  setTimeout(function() {
    setTimeout(function() {
      myImage.src = data[currentIndex].image;
      myText1.textContent = data[currentIndex].text1;
      myText2.textContent = data[currentIndex].text2;

      myImage.style.animation = 'fadeImageIn 0.6s ease-in-out forwards';
      myText1.style.animation = 'fadeTextIn 0.6s ease-in-out forwards';
      myText2.style.animation = 'fadeTextIn 0.6s ease-in-out forwards';
    }, 300);
  }, 300);
}

function swipleft() {
  var myImage = document.querySelector('.bokimg');
  var myText1 = document.querySelector('.bookname');
  var myText2 = document.querySelector('.bookprgr');

  myImage.style.animation = 'fadeImageOut 0.6s ease-in-out forwards';
  myText1.style.animation = 'fadeTextOut 0.6s ease-in-out forwards';
  myText2.style.animation = 'fadeTextOut 0.6s ease-in-out forwards';

  setTimeout(function() {
    currentIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;

    myImage.src = data[currentIndex].image;
    myText1.textContent = data[currentIndex].text1;
    myText2.textContent = data[currentIndex].text2;

    myImage.style.animation = 'fadeImageIn 0.6s ease-in-out forwards';
    myText1.style.animation = 'fadeTextIn 0.6s ease-in-out forwards';
    myText2.style.animation = 'fadeTextIn 0.6s ease-in-out forwards';
  }, 600);
}

function processImage(src) {
  if (src.includes("hobbit")) {
    window.location.href = "Book1.html";
  } else if (src.includes("Karrol")) {
    window.location.href = "https://www.wildberries.ru/catalog/162706228/detail.aspx";
  } else if (src.includes("Victor")) {
    window.location.href = "Book3.html";
  } else if (src.includes("Oh_brave_new_world")) {
    window.location.href = "Book4.html";
  } else if (src.includes("451_degrees_Fahrenheit")) {
    window.location.href = "Book5.html";
  } else if (src.includes("Lord_of_the_Flies")) {
    window.location.href = "Book6.html";
  } else if (src.includes("Your_humble_servant_the_cat")) {
    window.location.href = "https://book24.ru/product/vash-pokornyy-sluga-kot-6702013/";
  } else if (src.includes("suicide_club")) {
    window.location.href = "Book8.html";
  } else if (src.includes("we")) {
    window.location.href = "Book9.html";
  }
}
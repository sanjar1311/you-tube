var $_ = function(selector, node = document) {
  return node.querySelector(selector);
}

var $$_ = function(selector, node = document) {
  return node.querySelectorAll(selector);
}

var createElement = function(element, elementClass, elementText) {
  var newElement = document.createElement(element);

  if(elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if(elementText) {
    newElement.textContent = elementText;
  }

  return newElement;
}

var elMenuBtn = $_('.site-header__menu-btn');
var elMain = $_('.main');
var elFisrstLineList = $_('.js-video');
var elGussie = $_('.js-gussie');
var elNora = $_('.js-nora');
var elBelle = $_('.js-belle');
var elEunice = $_('.js-eunice');
var elUserPic = $_('.site-header__user-menu-btn');
var elFirstLineUser = $_('.firs-line__user');
var elFavouriteBtn = $_('.left-side__favourites-btn');
var elFavouriteList = $_('.js-favourites__list');

var videos = [
  {
    title: 'Pirates of the Caribbean',
    day: '14 days ago',
    views: '80k views',
    duration: '15:15',
    author: 'Gussie Singleton',
    img: 'img/user-1_1.webp',
    id: 0
  },
  {
    title: 'Pirates of the Caribbean 5',
    day: '2 weeks ago',
    views: '1 view',
    duration: '12:05',
    author: 'Gussie Singleton',
    img: 'img/user-1_2.jpg',
    id: 1
  },
  {
    title: 'Pirates of the Caribbean 6 Trailer',
    day: '1 day ago',
    views: '8 views',
    duration: '20:00',
    author: 'Gussie Singleton',
    img: 'img/user-1_3.jpg',
    id: 2
  }
];
var favourite = [];

elMenuBtn.addEventListener('click', function() {
  elMain.classList.toggle('active');
});

    /* ========== Videos Output ========== */
elGussie.addEventListener('click', function() {
  elFisrstLineList.innerHTML = '';

  elUserPic.classList.add('site-header__gussie');
  elFirstLineUser.textContent = 'Gussie Singleton';
  $_('.first-line__inner').classList.add('first-line__inner--active');


  var firstLineTemplate = $_('.first-line-template').content;
  var videoFragment = document.createDocumentFragment();

  for(var i = 0; i < videos.length; i++) {
    var firstLineItem = firstLineTemplate.cloneNode(true);
    var videoTitle = $_('.video__title', firstLineTemplate);
    videoTitle.textContent = videos[i].title;
    videoTitle.setAttribute('class', 'video__title');
    var videoViews = $_('.video__views', firstLineTemplate);
    videoViews.textContent = videos[i].views;
    videoViews.setAttribute('class', 'video__views');
    var videoTime = $_('.video__time', firstLineTemplate);
    videoTime.textContent = videos[i].day;
    videoTime.setAttribute('class', 'video__time');
    var videoAuthor = $_('.video__author', firstLineTemplate);
    videoAuthor.textContent = videos[i].author;
    videoAuthor.setAttribute('class', 'video__author');
    var videoDuration = $_('.video__duration', firstLineTemplate);
    videoDuration.textContent = videos[i].duration;
    videoDuration.setAttribute('class', 'video__duration');
    var videoImg = $_('.video__img', firstLineTemplate);
    videoImg.setAttribute('src', videos[i].img);
    var videoAddBtn = $_('.video__add', firstLineItem);
    videoAddBtn.dataset.id++;
    console.log(videoAddBtn.dataset.id);

     videoFragment.appendChild(firstLineItem);
  }
  elFisrstLineList.appendChild(videoFragment);
});

        /* ======== Add Favourite ========= */
elFisrstLineList.addEventListener('click', function(evt) {

  for(var i = 0; i < videos.length; i++) {
    if(evt.target.matches('.video__add')){
      favourite.push(videos[i]);
      console.log(favourite);
    }
   };

});

          /* ========= Output Favourites ========== */
elFavouriteBtn.addEventListener('click', function(){

  elFavouriteList.innerHTML = '';

  var favouriteFragment = document.createDocumentFragment();
  var firstLineTemplate = $_('.first-line-template').content;

  for(var i = 0; i < favourite.length; i++) {
    var favouriteItem = firstLineTemplate.cloneNode(true);

    favouriteFragment.appendChild(favouriteItem);
  }
  elFavouriteList.appendChild(favouriteFragment);

});
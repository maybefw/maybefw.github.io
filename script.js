'use strict';

///////////////////////////////////////
// Modal window
///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const h1 = document.querySelector('h1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav=document.querySelector('.nav')

const openModal = function (e) {
  e.preventDefault(); //如果点击的元素是一个链接（<a>），浏览器通常会导航到该链接的 href 属性指定的 URL。通过调用 preventDefault()，可以阻止这种导航行为。
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////////
///////////////////////////////////////////////
//选择元素
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
document.getElementById('#section-1');
// const allBottons = document.querySelectorAll('.botton');返回空值没有用
const allBottons = document.getElementsByTagName('button'); //这样的html选择器会自动更新
// console.log(allBottons);
// console.log(document.getElementsByClassName('btn'));
//创建并插入元素
//containerMovements.innerHTML = '';containerMovements.insertAdjacentHTML('afterbegin', html); //仅仅只是在原有网页的基础上插入新的元素，如果想删掉出新元素之外的老元素，需要用到innerHTML属性（属性不是方法，不需要加()），注意这里的HTML是全部大写，只大写首字母不可以！那就不是一个有用的方法了！！！！
// const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  '<button class="btn btn--close--cookie">lululu!</button>';

header.append(message); //先确保在header中有header元素并选中，另外一个要注意的是btn后面要有空格再接着btn，这样innerHTML插入的元素会按照相应的css来显示，如果没有空格那就是系统默认的没有css装扮显示！！
// header.append(message);//如果和prepend同时存在，那就相当于吧prepend的消息挪到了下面，并没有改变！！
// header.before(message);
// header.after(meaasge);
//删除元素
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    // 老版本：message.parentElement.removeChild(message)
  });
message.style.backgroundColor = '#e075c0';
message.style.width = '120%';
// console.log(message.style.color); //返回的是空值因为无法直接访问css中style的里面的内容，需要借助getComputedStyle()方法才能访问
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; //很奇怪 将header.prepend(message)换成header.append(message)就可以正常运转了，append 方法将 message 元素插入到 header 的末尾，这样可能避免了一些布局和样式的问题，使得高度计算正常。gpt说是
// console.log(getComputedStyle(message).height);
document.documentElement.style.setProperty('--color-primary', 'white');
//Attributes属性
const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.className);
logo.alt = 'wow how beautiful logo !';
//Non standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
//Data  attributes
// console.log(logo.dataset.versionNumber);
//CLasses
// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a', 'b');
// logo.classList.contains('a', 'b');
/////////////////////////////////////////////////////////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // section1.scrollIntoView({ behavior: 'smooth' });
  section1.scrollIntoView({ behavior: 'smooth' });
});
// document.addEventListener('DOMContentLoaded', function () {
//   btnScrollTo.addEventListener('click', function (e) {
//     section1.scrollIntoView({ behavior: 'smooth' });
//   });
// });
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener:其实你不学无术');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
// console.log(h1);
//rgb(255,255,255)
////创建处于最大值和最小值之间的随机整数
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
//console.log(randomInt(min, max));
const randomColor = () =>
  rgb(`${randomInt(0, 255)}`,`${randomInt(0, 255)}`,`${randomInt(0, 255)}`);
// console.log(randomColor());
const navlink = document.querySelectorAll('.nav__link');
const navlinks = document.querySelector('.nav__links');
// const nav = document.querySelector('.nav');
// console.log(navlink, navlinks, nav);
// navlink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(this);
//   console.log(this === e.currentTarget);
//   e.stopPropagation(); //停止向父类传播
// });
// navlinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(this);
//   console.log(this === e.currentTarget);
// });
// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(this);
//   console.log(this === e.currentTarget);
// });
// navlink.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// //ADD EventListener to common parent element
//真真正正的匹配策略 从父类中判断子类是否选中 然后再执行scrollIntoView,而不是简单的将每一个nav————link都添加事件处理程序，这样会降低性能！！而且当动态页面 有的元素不存在时，用事件委托（就是匹配策略）更好 连元素都不存在怎么添加事件处理程序呀！！
navlinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    // const targetSection = document.getElementById('id');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    document.querySelector(id).classList.remove('section--hidden') //解决导航栏点击之后页面不显示的情况
   }
})
// navlinks.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href').replace('#', ''); // 获取目标内容区域的 ID
//     const targetSection = document.getElementById(id);

//     if (targetSection) {
//       // 显示目标内容区域
//       targetSection.classList.add('section--active');
      
//       // 可选：滚动到目标内容区域
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// });

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';
//Going upwards:parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //这里的 .closest('.header') 是一个DOM方法，它会向上遍历DOM树，查找离 h1 最近的具有类名 .header 的祖先元素。一旦找到这个元素，它将其背景设置为 var(--gradient-secondary)
// h1.closest('.header').style.background = 'var(--gradient-primary)';
//Going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
////////////////////////////////////////////////////////////////////////////////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
// tabs.forEach(t => t.addEventListener('click', () => console.log('欢迎')));
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //之所以不用e.target是因为当点击数字标签时，会显示数字标签的内容，所以干脆直接上升到它邻近的元素，这样一来就算是点击了数据标签也能正常的返回clicked
  console.log(clicked);
  // const contented = e.target.closest('.operations__content');
  //保护子句！！如果返回null就代表没有点击到领域，所以终止以后的操作
  if (!clicked) return;
  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Active tabContent
  tabContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)

    .classList.add('operations__content--active');
});
//Menu fade animation
const handleover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleover(e, 0.5);
});
nav.addEventListener('mouseout', e => handleover(e, 1));
// const handleover2 = function (e) {
//   const opacity = this;
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// nav.addEventListener('mouseover', handleover2.bind(0.5));
// nav.addEventListener('mouseout', handleover2.bind(1));
//导航页置顶(粘滞):Intersection  Observer API
// window.addEventListener('scroll', function (e) {
//   console.log(e);
// });
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// //
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// const header = document.querySelector('.header');
// const stickyNav = function (entries) {
//   const [entry] = entries; //从 entries 数组中解构出第一个 entry 对象。
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
// stickyNav()
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; //从 entries 数组中解构出第一个 entry 对象。
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //0 表示当 header 元素的任何部分进入或离开视口时，回调函数都会被触发。
  rootMargin: `-${navHeight}px`
// 将视口的上边距向上收缩了导航栏的高度。这意味着，尽管 header 元素的底部已经离开了视口，但直到 header 的底部超出原视口的高度等于导航栏高度的位置时，才会触发回调函数。
});
headerObserver.observe(header);
//先获取高度，定义header。然后定义回调函数 ，接着创建IntersectionObserver实例，参数为回调函数还有添加root,threshold,rootMargin等（作为一个数组），开始观察。。最后呼叫实例.observe(定义的header对象)。
//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // if (!entry.isIntersecting) allSections.classList.remove('section--hidden');
  // else allSections.classList.remove('section--hidden');
  entry.target.classList.remove('section--hidden');
};
const sectionObreserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // sectionObreserver.observe(section);
  sectionObreserver.observe(section);
  section.classList.add('section--hidden');
  // sectionObreserver.observe(section);
});
// sectionObreserver.observe(allSections);
//懒加载
//Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);//停止观察这样会减少浏览器负担 一直观察不好
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '10px',
});

imgTargets.forEach(img => imgObserver.observe(img));
// 触目惊心的slides
const slides = document.querySelectorAll('.slide');
const slider = function () {
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;
  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  };

  //  creatDots();
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add('dots__dot--active');
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
    

  // goToSlide(0);
  //Next slide
   const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    };
    //初始化函数
const init = function () {
      createDots();
      goToSlide(0);
      activateDot(0);
    };
init();
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
 document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
slider();
//学习一点dom新知识
document.addEventListener('DOMContentLoaded',function(e){
  //不等待图像和其他外部的加载，只加载html和js
  console.log('我很快因为我只加载html和js')

})
//当页面全部加载完成
window.addEventListener('load',function(e){
  console.log('是的你等待很久了 现在页面已经全部加载完成')
})
//当你要离开网页或者刷新网页的时候给你提示，但是跟浏览器有关！！
window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  console.log(e);
  const message = '你确定要离开吗？';
  e.returnValue = message;  // 一些浏览器需要一个明确的消息内容
  return message;
});
//加载script
/* <script src="script.js"></script>:

这是最普通的方式。
在浏览器遇到这个标签时，会立即停止解析HTML文档，并开始下载和执行script.js。
这意味着在脚本执行完成之前，页面的渲染会被阻塞。这可能会导致页面加载速度变慢，尤其是当脚本文件较大或者网络较慢时。

<script defer src="script.js"></script>:

添加defer属性后，脚本文件会在后台下载。
即使脚本在后台下载完成，也不会立即执行，而是会等到整个HTML文档解析完成后才执行。
defer属性仅适用于外部脚本文件。
脚本会按它们在文档中出现的顺序执行。

<script async src="script.js"></script>:

添加async属性后，脚本文件会在后台下载。
一旦脚本文件下载完成，就会立即执行，不管HTML文档是否解析完成。
async属性也仅适用于外部脚本文件。
脚本的执行顺序是不确定的，因为它们可能在任何时候下载完成并执行，因此不能保证脚本执行的顺序。
总结：

使用<script src="script.js"></script>时，脚本会立即执行，但会阻塞页面的渲染。
使用<script defer src="script.js"></script>时，脚本会在文档解析完成后按顺序执行，不阻塞页面渲染。
使用<script async src="script.js"></script>时，脚本会尽快异步执行，不阻塞页面渲染，但执行顺序不确定。 */
// 选择按钮元素 加入黑粉团
const joinBtn = document.getElementById('joinBtn');

// 添加点击事件监听器
joinBtn.addEventListener('click', function(event) {
  event.preventDefault(); // 阻止默认表单提交行为

  // 指定图片URL
  const imgUrl = 'img/ks.jpg'; // 替换为你的图片路径

  // 跳转到图片页面
  window.location.href = imgUrl;
});

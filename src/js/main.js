var mAside = document.getElementById("aside");//侧边栏
var toggleIcon = mAside.querySelector(".toggle_icon");
var menuGroups = mAside.getElementsByClassName("menu_group");
var menuItems = mAside.getElementsByClassName("menu_item");
var aOwn = mAside.getElementsByClassName("own")[0];
var oPhoto = aOwn.getElementsByClassName("photo")[0];
var oName = aOwn.getElementsByClassName("name")[0];
var oSet = aOwn.getElementsByClassName("set")[0];
var mMain = document.getElementById("main");//主区域
var mHeader = document.getElementById("header");
var mContainer = document.getElementById("container");
var hH2 = mHeader.getElementsByTagName("h2")[0];
var hForm = mHeader.getElementsByTagName("form")[0];
var hSearch = document.getElementById("search");
var item = mContainer.getElementsByClassName("item");
var itemLike = mContainer.getElementsByClassName("item_like")[0];
var itemNav = itemLike.getElementsByClassName("item_nav")[0];
var itemContent = itemLike.getElementsByClassName("item_content")[0];
var mFooter = document.getElementById("footer");//播放条
var aToggle = true;
toggleIcon.onclick = function () {
  if (aToggle) {
    for (var t = 0; t < menuGroups.length; t++) {
      menuGroups[t].style.display = "none";
    }
    oName.style.display = "none";
    mAside.style.width = "42px";
    mMain.style.left = "42px";
    aToggle = false;
  }
  else {
    for (var t = 0; t < menuGroups.length; t++) {
      menuGroups[t].style.display = "block"
    }
    oName.style.display = "block";
    mAside.style.width = "260px";
    mMain.style.left = "260px";
    aToggle = true;
  }
}
toggleIcon.onmousedown = function () { addClass(this, "active") }
toggleIcon.onmouseup = function () { removeClass(this, "active") }
for (let menuIndex = 0; menuIndex < menuItems.length; menuIndex++) {
  menuItems[menuIndex].index = menuIndex;
  menuItems[menuIndex].onclick = function () {
    for (var all = 0; all < menuItems.length; all++) {
      removeClass(menuItems[all], "active");
      removeClass(item[all], "item_show");
    }
    addClass(this, "active");
    addClass(item[this.index], "item_show");
    hH2.innerHTML = this.innerText.slice(2);
  }
  menuItems[menuIndex].onmouseover = function () { if (!hasClass(this, "active")) addClass(this, "hover"); }
  menuItems[menuIndex].onmouseout = function () { removeClass(this, "hover") }
}
hSearch.onfocus = function () { hForm.style.borderColor = "#31c17c"; }
hSearch.onblur = function () { hForm.style.borderColor = "#cccccc"; }

// 工具函数封装
// 添加指定class
// object：指定对象；attr：class名
function addClass(object, attr) {
  if (!object.className) {
    object.className = attr;
    return;
  }
  var arr = object.className.split(' ')
  for (var num = 0; num < arr.length; num++) {
    if (arr[num] === attr) return;
  }
  object.className += ' ' + attr
}
// 删除指定class
// object：指定对象；attr：class名
function removeClass(object, attr) {
  if (!object.className) return;
  var arr = object.className.split(' ');
  for (var num = 0; num < arr.length; num++) {
    if (arr[num] === attr) {
      arr.splice(num, 1);
      break;
    }
  }
  object.className = arr.join(' ');
}
// 判断是否有指定class；有返回true否则返回false
// object：指定对象；attr：class名
function hasClass(object, attr) {
  if (!object.className) return false;
  var arr = object.className.split(" ");
  for (var num = 0; num < arr.length; num++) {
    if (arr[num] == attr) return true;
  }
  return false;
}
/**
 * 
* @authors JasonBnajui (derking.ssr.vin@gmail.com)
 * @date    2018-11-24 13:36:45
 * @version 1.0
 */
document.addEventListener("visibilitychange", function(){
	document.title = document.hidden?"哎，别真就说走就走啊":"说走就走-旅游官网";
});

var headpiece = document.getElementById('headpiece');
var oHeaderTitle = document.getElementById('head-title');
var oHeaderDoc = document.getElementById('head-doc');
var osmHeaderTitle = document.getElementById('smhead-title');
var osmHeaderDoc = document.getElementById('smhead-doc');
var oHeadMember = document.getElementById('member');
var oHeadNav = document.getElementsByClassName('banner-nav-item');
var osmHeadSvg = document.getElementsByClassName('smheader-item-circle-svg');
var osmHeadCicle = document.getElementsByClassName('smheader-item-circle');
var osmHeadItem = document.getElementsByClassName('smheader-item');
var oderNavItem = document.getElementsByClassName('oder-nav-item');
var oCared = document.getElementsByClassName('cared');
var oFiltrItem = document.getElementsByClassName('filtr-item');
var oAdvertisement = document.getElementsByClassName('advertisement-content')[0];
var oPackagesCared = document.getElementsByClassName('packages-cared');
var caredContent = [
	{
		'title':'巴厘岛：深情一眼，挚爱万年',
		'date-mouth':'2018年9月',
		'date-day':'10日',
		'doc':'早上九点从北京出发，经历了7个半小时的直飞，傍晚时分抵达巴厘岛机场。已经提前联系好乌龟包车的接机，司机是个幽默的当地...',
		'img':'img/service/blog63252-10.jpg'
	},
	{
		'title':'爱在关岛，太平洋上的情话说给你听',
		'date-mouth':'2018年5月',
		'date-day':'17日',
		'doc':'因为时差关系，到达关岛是清晨，路上异常的清静，连我们一车人都没有了叽叽喳喳的声音，因为太困了！好在我们先到了酒店，小...',
		'img':'img/service/blog61822-20.jpg'
	},
	{
		'title':'斯里兰卡 | 坐着火车唱着歌，去往那世界的尽头',
		'date-mouth':'2018年3月',
		'date-day':'27日',
		'doc':'入关时需填写一个难度系数5.0的入境卡，建议在国内提前找模版，机场没有免费使用的wifi...斯里兰卡入境表完全不同于韩、泰国...',
		'img':'img/service/blog61859-5.jpg'
	},
];
var filtrItemContent = [
	{
		'cityName':'中国',
		'sightseeings':'20个观看',
		'place':'15个目的地',
		'img':'img/wither/W1.jpg'
	},
	{
		'cityName':'澳大利亚',
		'sightseeings':'10个观看',
		'place':'15个目的地',
		'img':'img/wither/W5.jpg'
	},
	{
		'cityName':'斐济',
		'sightseeings':'8个观看',
		'place':'10个目的地',
		'img':'img/wither/W13.jpg'
	},
	{
		'cityName':'哥本哈根',
		'sightseeings':'4个观看',
		'place':'9个目的地',
		'img':'img/wither/W14.jpg'
	},
	{
		'cityName':'圣彼得堡',
		'sightseeings':'12个观看',
		'place':'11个目的地',
		'img':'img/wither/W15.jpg'
	},
	{},
	{
		'cityName':'清迈',
		'sightseeings':'4个观看',
		'place':'5个目的地',
		'img':'img/wither/W16.jpg'
	},
	{
		'cityName':'柏林',
		'sightseeings':'20个观看',
		'place':'20个目的地',
		'img':'img/wither/W17.jpg'
	},
	{
		'cityName':'北海道',
		'sightseeings':'7个观看',
		'place':'9个目的地',
		'img':'img/wither/W18.jpg'
	},
	{
		'cityName':'箱根',
		'sightseeings':'6个观看',
		'place':'5个目的地',
		'img':'img/wither/W19.jpg'
	},
	{
		'cityName':'芬芳',
		'sightseeings':'18个观看',
		'place':'13个目的地',
		'img':'img/wither/W20.jpg'
	},
];
var headBackgrounds = [
	{
		'img': 'img/header/299201.jpg',
		'title': '埃菲尔塔',
		'introduce':'埃菲尔铁塔是巴黎地标之一，如果说巴黎圣母院是古代巴黎的象征，那么埃菲尔铁塔就是现代巴黎的标志。这座铁塔起初是为了迎接世界博览会及纪念法国大革命100周年而建，是法国的文化象征。登上铁塔眺望台，还可以360度展望巴黎的城市景观。',
		'member':300,
		'navName':'法国'
	},

	{
		'img': 'img/header/314313.jpg',
		'title': '圣托里尼',
		'introduce':'圣托里尼岛位于希腊爱琴海南部，风景如画。岛上拥有大量爱琴海经典的蓝白色系建筑，又以色彩鲜艳的沙滩和纯净唯美的海湾著称，从而成为无数人梦寐以求的蜜月天堂、度假胜地。阳光沙滩，蓝天白云，无数的美味海鲜，就在这里开启美好时光！',
		'member':270,
		'navName':'希腊'
	},
	{
		'img': 'img/header/317094.jpg',
		'title': '新加坡',
		'introduce':'新加坡是东南亚的一个岛国。新加坡是全球最为富裕的国家之一，属于新兴的发达国家，其经济模式被称作为“国家资本主义”，并以稳定的政局、廉洁高效的政府而著称。新加坡是亚洲最重要的金融、服务和航运中心之一。',
		'member':756,
		'navName':'新加坡'
	},
	{
		'img': 'img/header/320293.jpg',
		'title': '马蹄湾',
		'introduce':'马蹄湾是科罗拉多河在亚利桑那州境内的一截U形的河道，也是格兰峡谷其中的一小段，由于河湾环绕的巨岩形似马蹄，所以叫作了“马蹄湾”，也有人叫它科罗拉多河的大拐弯。美西的马蹄湾是国人旅游的重要景点之一。',
		'member':147,
		'navName':'美国'
	},
	{
		'img': 'img/header/246802.jpg',
		'title': '墨尔本',
		'introduce':'墨尔本澳大利亚南部滨海城市，第二大城市。墨尔本是维多利亚州首府，世界著名的旅游城市，世界著名的国际大都市。墨尔本有“澳大利亚文化之都”的美誉，也是国际闻名的时尚之都，其服饰、艺术、音乐、电视制作、电影、舞蹈等潮流文化均享誉全球。',
		'member':369,
		'navName':'澳大利亚'
	},
	{
		'img': 'img/header/1544246981147.jpg',
		'title': '班夫公园',
		'introduce':'公园内拥有高山冰川、森林草地、湖泊河流等丰富的自然景观，宁静的班夫镇、清澈的露易丝湖、风景如画的冰原大道、壮观的哥伦比亚冰原等不容错过。公园也是户外运动的天堂，徒步、登山、垂钓、划船、滑雪、滑冰、洞穴探险等，乐趣十足。',
		'member':258,
		'navName':'加拿大'
	}
];
var packagesCared = [
	{
		'title':'意大利',
		'mach':'499美元',
		'transport':'&gt;&nbsp;&nbsp;3天3夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'254条点评',
		'img':'img/special/p1.jpg'
	},
	{
		'title':'英格兰',
		'mach':'1499美元',
		'transport':'&gt;&nbsp;&nbsp;6天7夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'344条点评',
		'img':'img/special/p2.jpg'
	},
	{
		'title':'法国',
		'mach':'1199美元',
		'transport':'&gt;&nbsp;&nbsp;3天3夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'254条点评',
		'img':'img/special/p3.jpg'
	},
	{
		'title':'印度',
		'mach':'799美元',
		'transport':'&gt;&nbsp;&nbsp;4天5夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'625条点评',
		'img':'img/special/p4.jpg'
	},
	{
		'title':'西班牙',
		'mach':'999美元',
		'transport':'&gt;&nbsp;&nbsp;4天4夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'379条点评',
		'img':'img/special/p5.jpg'
	},
	{
		'title':'泰国',
		'mach':'699美元',
		'transport':'&gt;&nbsp;&nbsp;5天6夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'447条点评',
		'img':'img/special/p6.jpg'
	},
	{
		'title':'马来西亚',
		'mach':'183美元',
		'transport':'&gt;&nbsp;&nbsp;1天1夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'554条点评',
		'img':'img/special/p7.jpg'
	},
	{
		'title':'大溪地',
		'mach':'119美元',
		'transport':'&gt;&nbsp;&nbsp;1天2夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'224条点评',
		'img':'img/special/p8.jpg'
	},
	{
		'title':'珠海御温泉',
		'mach':'16美元',
		'transport':'&gt;&nbsp;&nbsp;3天3夜',
		'hotel':'&gt;&nbsp;&nbsp;5星级酒店',
		'comment':'95条点评',
		'img':'img/special/p9.jpg'
	},
];
var advertisement = {
	'title':'候鸟南飞，三亚过冬，三亚打5折！',
}
var current = 0, old = 0;
function cgBack(){
	headpiece.style.backgroundImage= 'url(' + headBackgrounds[current]['img'] + ')';
	oHeaderTitle.innerHTML = osmHeaderTitle.innerHTML = headBackgrounds[current]['title'];
	oHeaderDoc.innerHTML = osmHeaderDoc.innerHTML = headBackgrounds[current]['introduce'];
	oHeadMember.innerHTML = headBackgrounds[current]['member'];
	oHeadNav[current].getElementsByTagName('span')[0].innerHTML = headBackgrounds[current]['navName'];
	cgNav();
	current ++;
	if (current == 6){
		current = 0;
	}
}
function recgBack(){
	current -= 2;
	if (current === -2 || current === -1){
		current = 5;
	}
	headpiece.style.backgroundImage= 'url(' + headBackgrounds[current]['img'] + ')';
	oHeaderTitle.innerHTML = osmHeaderTitle.innerHTML = headBackgrounds[current]['title'];
	oHeaderDoc.innerHTML = osmHeaderDoc.innerHTML = headBackgrounds[current]['introduce'];
	oHeadMember.innerHTML = headBackgrounds[current]['member'];
	oHeadNav[current].getElementsByTagName('span')[0].innerHTML = headBackgrounds[current]['navName'];
	cgNav();
	current ++;
}
function clickeBack(Qum){
	Qum ++; // 因为 current 已经 ++ 了，所以这里也要 ++ 
	function clickCg(){reInterval();current = Qum - 1;cgBack();} // 此时 current 要被改变只能变回 0 起点模式
	Qum !== current?clickCg():console.log('Qum == current');
}
function cgNav(){
	oHeadNav[current].classList.add('banner-nav-active');
	osmHeadSvg[current].classList.remove('op-0');
	osmHeadCicle[current].classList.add('item-circle-active');
	osmHeadItem[current].getElementsByTagName('a')[0].classList.add('background-t');
	if (old !== current){
		oHeadNav[old].classList.remove('banner-nav-active');
		osmHeadSvg[old].classList.add('op-0');
		osmHeadCicle[old].classList.remove('item-circle-active');
		osmHeadItem[old].getElementsByTagName('a')[0].classList.remove('background-t');
	}
	old = current;
}
function reInterval(){
	clearInterval(interval);
	interval = setInterval(function(){
		cgBack(current);
	},7000);
}
var curtain = document.createElement("div");
curtain.innerHTML = '<div class="mdui-overlay mdui-overlay-show" style="z-index: 5000;"  onclick="javascript:showHidenMoreList();"></div>'
function showHidenMoreList(){
	var oDiv = document.getElementById('moreList');
	if (oDiv.isShow){
		oDiv.classList.add('tf-trX200');
		oDiv.isShow = false;
		document.getElementsByTagName('footer')[0].removeChild(curtain);
	} else{
		oDiv.classList.remove('tf-trX200');
		oDiv.isShow = true;
		document.getElementsByTagName('footer')[0].appendChild(curtain);
	}
}
function showHidenShareList(isBlur){
	var oDiv = document.getElementById('share');
	if (isBlur){
		if (oDiv.isShow){
			oDiv.classList.add('tf-trY200');
			oDiv.isShow = false;
		}
	} else{
		if (oDiv.isShow){
			oDiv.classList.add('tf-trY200');
			oDiv.isShow = false;
		} else{
			oDiv.classList.remove('tf-trY200');
			oDiv.isShow = true;
		}
	}
}
function backCg(){
	reInterval();
	recgBack();
	// back
}
function forwardCg(){
	reInterval();
	cgBack();
	// forwar
}
var oOderItem = document.getElementsByClassName('oder-item');
// voyage
for (let i = 0; i < oderNavItem.length; i++) {
	oderNavItem[i].isOning = false;
	oderNavItem[i].onclick = function(){
		for (var j = 0; j < oderNavItem.length; j++) {
			oderNavItem[j].classList.remove('oder-nav-active');
			oOderItem[j].classList.add('hidden-op');
		}
		if (!oderNavItem[i].isOning){
			oderNavItem[i].classList.add('oder-nav-active');
			oOderItem[i].classList.remove('hidden-op');
		}
	}
}
// care
for (var i = 0; i < oCared.length; i++) {
	oCared[i].getElementsByClassName('cared-title')[0].innerHTML = caredContent[i]['title'];
	oCared[i].getElementsByClassName('cared-image')[0].getElementsByTagName('img')[0].src = caredContent[i]['img'];
	oCared[i].getElementsByClassName('cared-date')[0].getElementsByTagName('i')[0].innerHTML = caredContent[i]['date-mouth'];
	oCared[i].getElementsByClassName('cared-date')[0].getElementsByTagName('i')[1].innerHTML = caredContent[i]['date-day'];
	oCared[i].getElementsByClassName('cared-doc')[0].innerHTML = caredContent[i]['doc'];
}
for (var i = 0; i < oFiltrItem.length; i++) {
	try{		
		oFiltrItem[i].getElementsByTagName('img')[0].src = filtrItemContent[i]['img'];
		oFiltrItem[i].getElementsByTagName('a')[0].innerHTML = filtrItemContent[i]['cityName'];
		oFiltrItem[i].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].innerHTML = filtrItemContent[i]['sightseeings'];
		oFiltrItem[i].getElementsByTagName('h6')[0].getElementsByTagName('span')[1].innerHTML = filtrItemContent[i]['place'];
	} catch (e){
		console.log(e);
	}
}
for (var i = 0; i < oPackagesCared.length; i++) {
	oPackagesCared[i].getElementsByTagName('img')[0].src = packagesCared[i]['img'];
	oPackagesCared[i].getElementsByClassName('packages-info-title')[0].getElementsByTagName('h4')[0].innerHTML = packagesCared[i]['title'];
	oPackagesCared[i].getElementsByClassName('packages-info-title')[0].getElementsByTagName('h4')[1].innerHTML = packagesCared[i]['mach'];
	oPackagesCared[i].getElementsByClassName('info-sever')[0].getElementsByTagName('span')[0].innerHTML = packagesCared[i]['transport'];
	oPackagesCared[i].getElementsByClassName('info-sever')[1].getElementsByTagName('span')[0].innerHTML = packagesCared[i]['hotel'];
	oPackagesCared[i].getElementsByClassName('packages-review-items')[0].getElementsByTagName('span')[0].innerHTML = packagesCared[i]['comment'];
}
oAdvertisement.getElementsByTagName('h3')[0].innerHTML = advertisement['title'];
// header
var oHeader = document.getElementsByTagName('header')[0];
var oBorderRedBtn = document.getElementsByClassName('border-red-btn')[0];
var oLogoImage = document.getElementsByClassName('logo')[0].getElementsByTagName('img')[0];
var oMain = document.getElementsByTagName('main')[0];
var oTopNavItem = document.getElementsByClassName('top-nav-item');
var oScrollTop = document.getElementsByClassName('scrolltop')[0];
function navbarFixed(){
	var nav_offset_top = oHeader.offsetHeight;
	var scroll = window.scrollY;
	if (scroll >= nav_offset_top){
		oHeader.classList.add('navbar_fixed');
		oBorderRedBtn.classList.add('dy-none');
		oLogoImage.src = 'img/logo-o.jpg';
		oMain.style.cssText = 'padding: 325px 0 60px 0;'
		for (var i = 0; i < oTopNavItem.length; i++) {
			oTopNavItem[i].getElementsByTagName('a')[0].classList.add('top-nav-item-active');
		}
		oScrollTop.classList.remove('op-0');
		oScrollTop.classList.remove('tf-trY200');
	} else {
		oHeader.classList.remove('navbar_fixed');
		oBorderRedBtn.classList.remove('dy-none');
		oLogoImage.src = 'img/logo.png';
		oMain.style.cssText = 'padding: 210px 0 60px 0;'
		for (var i = 0; i < oTopNavItem.length; i++) {
			oTopNavItem[i].getElementsByTagName('a')[0].classList.remove('top-nav-item-active');
		}
		oScrollTop.classList.add('op-0');
		oScrollTop.classList.add('tf-trY200');
	}
}
// star
var oStars = document.getElementsByClassName('packages-review-items');
for (let i=0;i < oStars.length;i++){
	var currentStarts = oStars[i];
	var currentStart = currentStarts.getElementsByTagName('i');
	for (let j = 0; j < currentStart.length; j++) {
		currentStart[j].num = j;
		currentStart[j].stars = i;
		currentStart[j].onclick = function(){
			reStar(this.stars, this.num);
		}
	}
}
function reStar(items, item){
	for (let i=0;i < 5; i++){
		oStars[items].getElementsByTagName('i')[i].style.color = '#222';
	}
	for (var i=0;i < item + 1;i++){
		oStars[items].getElementsByTagName('i')[i].style.color = '#ffdf00';
	}
}
// mail input
var oMailInput = document.getElementsByClassName('joinus-mailbtn')[0];
var oMailInputFocus = document.getElementsByClassName('joinus-mailbtn-focus')[0];
oMailInput.onfocus = function() {
	oMailInputFocus.classList.add('joinus-mailbtn-focus-active');
};
oMailInput.onblur = function(){
	if (!oMailInput.value.length){
		oMailInputFocus.classList.remove('joinus-mailbtn-focus-active');
	}
};

// 初始化
setTimeout(function(){
	cgBack(current);
},100);
oderNavItem[0].click();
// 持续
var interval = setInterval(function(){
	cgBack(current);
},7000);
var Ninterval = setInterval(function(){
	navbarFixed();
},100);
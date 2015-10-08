var MenuTree = {

	options: {
		method: "GET",
		path: "public/json/menu.json"
	},

	init: function(){
		this.menu(this.getJson(), document.getElementById('tree-wrapper'));
		this.hideNested();
		this.toggle();
		this.styles();
	},

	getJson: function(method, path){
		//Request the json file
		var request = new XMLHttpRequest();

		request.open(this.options.method, this.options.path, false);
		request.send(null)
		var my_JSON_object = JSON.parse(request.responseText);
		console.log(my_JSON_object.menu, 'obj');
		return my_JSON_object.menu
	},

	styles: function(){
		//General Style for the page
		body = document.querySelector("body");
		body.style.fontFamily =  "arial";

		lists = document.querySelectorAll("#tree-wrapper > ul > li");
		aTag = document.querySelectorAll("#tree-wrapper > ul > li > a");
		subMenu = document.querySelectorAll(".submenu");
		subMenuLi = document.querySelectorAll(".submenu > li");
		subMenuLiTag = document.querySelectorAll(".submenu > li > a");

		for (var i = 0; i < subMenuLiTag.length; i++) {
			subMenuLiTag[i].style.color = "white";
			subMenuLiTag[i].style.listStyle = "none";
			subMenuLiTag[i].style.padding = "10px";
			subMenuLiTag[i].style.display = "block";
			subMenuLiTag[i].style.textDecoration = "none";
		}

		for (var i = 0; i < subMenuLi.length; i++) {
			subMenuLi[i].style.backgroundColor = "#8FE430";
			subMenuLi[i].style.listStyle = "none";
		}

		for (var i = 0; i < subMenu.length; i++) {
			subMenu[i].style.backgroundColor = "#8FE430";
			subMenu[i].style.padding = "0px";
		}

		for (var i = 0; i < aTag.length; i++) {
			aTag[i].style.color = "black";
			aTag[i].style.textDecoration = "none";
			aTag[i].style.display = "block";
			aTag[i].style.padding = "20px";
		}

		for (var i = 0; i < lists.length; i++) {
			lists[i].style.backgroundColor = "#ccc";
			lists[i].style.float = "left";
			lists[i].style.listStyle = "none";
		}
	},

	toggle: function(){

		//Toggle the submenu
		var hasSub = document.querySelectorAll(".has-submenu > a");

		for (var i = 0; i < hasSub.length; i++) {
			hasSub[i].addEventListener('click', function(e){
				var subMenu = this.nextElementSibling;

				if (subMenu.style.display !== 'none') {
				     subMenu.style.display = 'none';
				 }
				 else {
				     subMenu.style.display = 'block';
				 }

				 return false;
			});
		}
	},

	hideNested: function(){
		//Hide the sub menu on page load
		var newUl = document.querySelectorAll(".submenu");
		for (var i = 0; i < newUl.length; i++) {
			newUl[i].style.display = 'none';
		}
	},

 	menu: function(menuData, $parent){
 		var newUl = document.createElement('ul');
 		console.log($parent);
 		if ($parent.tagName == 'LI') {
 			newUl.className = 'submenu';
 		}

		for (var i = 0; i < menuData.length; i++) {
			//added class inline with conditions
			newUl.innerHTML += '<li id="'+menuData[i].id+'"' + (menuData[i].leaf == false ? ' class="has-submenu '+menuData[i].cssClass+'"' : 'class="'+menuData[i].cssClass+'"') + '><a href="#">' + menuData[i].description + '</a></li>';
			//Recursion on menu if nested
			if (menuData[i].leaf == false) {
				var currentItems = newUl.querySelectorAll('li');
				this.menu( menuData[i].menu, currentItems[currentItems.length - 1] );
			}
		}

		$parent.appendChild(newUl);
	},
};

(function(){
	MenuTree.init();
})();


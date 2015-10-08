

var NestedMenu = function(){

	ReguestJson: function(){
		var request = new XMLHttpRequest();
		   request.open("GET", "public/json/menu.json", false);
		   request.send(null)
		   var my_JSON_object = JSON.parse(request.responseText);
		   var obj = my_JSON_object.menu
	}
}

(function(){
var request = new XMLHttpRequest();
   request.open("GET", "public/json/menu.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   var obj = my_JSON_object.menu

   console.log(my_JSON_object.menu);
   var mods =
   {
       "id": 0,
       "name": "DOCK",
       "group": [
           {
               "id": 0,
               "name": "CMS IP",
               "group": [
                   {
                       "id": 0,
                       "name": "Localization",
                       "group": [
                           {
                               "id": 0,
                               "name": "Language",
                               "group": [
                                   {
                                       "id": 0,
                                       "name": "English",
                                       "group": []
                                   },
                                   {
                                       "id": 1,
                                       "name": "French",
                                       "group": []
                                   },
                                   {
                                       "id": 2,
                                       "name": "Google Translate",
                                       "group": []
                                   }
                               ]
                           },
                           {
                               "id": 1,
                               "name": "Currency",
                               "group": [
                                   {
                                       "id": 0,
                                       "name": "CAD",
                                       "group": []
                                   },
                                   {
                                       "id": 1,
                                       "name": "USD",
                                       "group": []
                                   },
                                   {
                                       "id": 2,
                                       "name": "Google Convertor",
                                       "group": []
                                   }
                               ]
                           }
                       ]
                   },
                   {
                       "id": 1,
                       "name": "Skin Builder",
                       "group": []
                   },
                   {
                       "id": 2,
                       "name": "Navigation",
                       "group": []
                   },
                   {
                       "id": 3,
                       "name": "Pages",
                       "group": [
                           {
                               "id": 0,
                               "name": "Custom Builder",
                               "group": []
                           }
                       ]
                   },
                   {
                       "id": 4,
                       "name": "User Profiles",
                       "group": []
                   },
                   {
                       "id": 5,
                       "name": "Dashboard Builder",
                       "group": [
                           {
                               "id": 0,
                               "name": "Custom Builder",
                               "group": []
                           }
                       ]
                   },
                   {
                       "id": 6,
                       "name": "Communications",
                       "group": [
                           {
                               "id": 0,
                               "name": "FAQ",
                               "group": []
                           },
                           {
                               "id": 1,
                               "name": "CSR Chat",
                               "group": []
                           }
                       ]
                   }
               ]
           },
           {
               "id": 1,
               "name": "Marketing/Advertising",
               "group": [
                   {
                       "id": 0,
                       "name": "News",
                       "group": []
                   },
                   {
                       "id": 1,
                       "name": "Events",
                       "group": [
                           {
                               "id": 0,
                               "name": "Social Networking",
                               "group": [
                                   {
                                       "id": 0,
                                       "name": "Facebook",
                                       "group": []
                                   },
                                   {
                                       "id": 1,
                                       "name": "Twitter",
                                       "group": []
                                   },
                                   {
                                       "id": 2,
                                       "name": "Constant Contact",
                                       "group": []
                                   },
                                   {
                                       "id": 3,
                                       "name": "Instagram",
                                       "group": []
                                   }
                               ]
                           },
                           {
                               "id": 1,
                               "name": "Campaigns",
                               "group": [
                                   {
                                       "id": 0,
                                       "name": "Direct Mail",
                                       "group": []
                                   },
                                   {
                                       "id": 1,
                                       "name": "Email",
                                       "group": []
                                   },
                                   {
                                       "id": 2,
                                       "name": "Online",
                                       "group": []
                                   }
                               ]
                           }
                       ]
                   },
                   {
                       "id": 2,
                       "name": "Template Builder",
                       "group": []
                   },
                   {
                       "id": 3,
                       "name": "Content Library",
                       "group": []
                   }
               ]
           },
           {
               "id": 2,
               "name": "Sales",
               "group": [
                   {
                       "id": 0,
                       "name": "Location Builder",
                       "group": []
                   },
                   {
                       "id": 1,
                       "name": "Vendor Profiles",
                       "group": [
                           {
                               "id": 0,
                               "name": "Vendor Payment",
                               "group": []
                           }
                       ]
                   }
               ]
           },
           {
               "id": 3,
               "name": "Ecommerce",
               "group": [
                   {
                       "id": 0,
                       "name": "Product",
                       "group": [
                           {
                               "id": 0,
                               "name": "Print",
                               "group": []
                           },
                           {
                               "id": 1,
                               "name": "Bundle Pack",
                               "group": []
                           },
                           {
                               "id": 2,
                               "name": "Uniform",
                               "group": []
                           },
                           {
                               "id": 3,
                               "name": "Personalized Product",
                               "group": []
                           },
                           {
                               "id": 4,
                               "name": "Gift card",
                               "group": []
                           },
                           {
                               "id": 5,
                               "name": "Best Offer",
                               "group": []
                           },
                           {
                               "id": 6,
                               "name": "Tier Pricing",
                               "group": []
                           },
                           {
                               "id": 7,
                               "name": "Vocuher Code",
                               "group": []
                           }
                       ]
                   },
                   {
                       "id": 1,
                       "name": "Shopping Cart",
                       "group": [
                           {
                               "id": 0,
                               "name": "Shipping",
                               "group": [
                                   {
                                       "id": 0,
                                       "name": "Custom Shipping",
                                       "group": []
                                   }
                               ]
                           }
                       ]
                   }
               ]
           },
           {
               "id": 4,
               "name": "Project Management",
               "group": [
                   {
                       "id": 0,
                       "name": "Admin Panel",
                       "group": []
                   }
               ]
           },
           {
               "id": 5,
               "name": "Financial",
               "group": [
                   {
                       "id": 0,
                       "name": "Accounting",
                       "group": []
                   },
                   {
                       "id": 1,
                       "name": "PayPal API",
                       "group": []
                   },
                   {
                       "id": 2,
                       "name": "QuickBooks API",
                       "group": []
                   }
               ]
           },
           {
               "id": 6,
               "name": "Analysis",
               "group": [
                   {
                       "id": 0,
                       "name": "Reports",
                       "group": []
                   },
                   {
                       "id": 1,
                       "name": "Survey",
                       "group": []
                   }
               ]
           },
           {
               "id": 7,
               "name": "Entry Level Sublet",
               "group": []
           }
       ]
   };


    function get_list( a, $parent ) {
    	//create
        var newUl = document.createElement('ul');
        newUl.className = "children";
        // var li = document.createElement('li');
        for (var i = 0; i < a.length; i++) {
            if (a[i]) {
            	//give some content
                newUl.innerHTML += '<li id="'+a[i].id+'">' + a[i].description + '</li>';
                if (a[i].leaf == false)
                    get_list( a[i].menu, newUl );
            }
        }
        $parent.appendChild(newUl);
    }


    get_list(obj, document.getElementById('mod-list'));


    //CREATE FROM DOM TO HTML!!!
    var div = document.createElement('div');
    div.id = 'box';
    div.appendChild(document.createTextNode('wacka wacka'));

    document.body.appendChild(div);

	document.querySelectorAll('.box');
	// for (var key in foo)
	// {
	//     if (key == "child")
	//         // do something...
	// }

	// Grab an element
	var el = document.getElementById('thingy');
    // Make a new div
    elChild = document.createElement('div');

	// Give the new div some content
	elChild.innerHTML = '<h1>Content</h1>';

	// Jug it into the parent element
	el.appendChild(elChild);




	//the recursion mother fuckers
    // document.body.appendChild(elemDiv);

})();
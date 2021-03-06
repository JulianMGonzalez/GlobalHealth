function getCategories(category_id) {
	$.getJSON("../ws/portal/categories", function(result) {
		data = result.data;
		$("#div_categories").empty();
		for (var row = 0; row < data.length; row = row + 1) {
			var id = data[row].id;
			var name = data[row].name;
			var published = data[row].published;
			var icon = data[row].icon;
			var item_class = "pull-right";
			if (id == category_id) {
				item_class = "pull-right";
			}
			$("#div_categories").append("<li><a href='javascript:getProducts(" + id
				+ ");' id='category_" + id + "' class='text-uppercase'>"
				+ name + "<span class="+ item_class +"></span></a></li>");
		}
	});
}
function getProducts(category_id) {
	$('.list-group-item').removeClass('active').addClass('');
	$("#category_" + category_id).addClass('active');
	$.getJSON("../ws/portal/products/" + category_id, function(result) {
		data = result.data;
		$("#div_products").empty();
		for (var row = 0; row < data.length; row = row + 1) {
			var id = data[row].id;
			var name = data[row].name;
			var published = data[row].published;
			var icon = data[row].icon;
			var pricing = data[row].pricing;
			var short_description = data[row].short_description;
			var url = "../item/index.jsp?id=" + id;
			var item = '<div class="col-lg-4 col-md-6 mb-4">';
			item += '<div class="image-flip mt-5">';
			item += '<div class="mainflip flip-0">';
			item += '<div class="frontside">';
			item += '<div class="card">';
			item += '<div id="imagen" class="view overlay">';
			item += '<a id="link_title" href="' + url + '">';
			item += '<img class="card-img-top" src="' + icon + '" height="320px"';
			item += '</a>';
			item += '</div>';
			item += '<div class="card-body text-center">';
			item += '<h5>GlobalHealth</h5>';
			item += '<h5 class="card-title"><strong>';
			item += '<a href="' + url + '" class="aling-center">' + name + '</a></strong>';
			item += '</h5>';
			item += '<h4 class="font-weight-bold blue-text"><strong>$' + pricing + '</strong></h4>';
			item += '</div>';
			item += '</div>';
			item += '</div>';
			item += '<div class="backside">';
			item += '<div class="card container text-center">';
			item += '<h4 class="mt-3">Informaci??n del producto</h4>';
			item += '<p>' + short_description + '</p>';
			item += '<div class="input-group-append">';
			item += '<a href="javascript:addToCart(' + id + ');" class="btn btn-info" role="button">'
			item += '<i class="fas fa-cart-plus"></i></a>';
			item += '</div>';
			item += '<a id="link_title" href="'+ url +'">Ver m??s</a>';
			item += '</div>';
			item += '</div>';
			item += '</div>';
			item += '</div>';
			item += '</div>';
			$("#div_products").append(item);
		}
	});
}
function updateItemsCount(){
	$.getJSON("../ws/cart/items", function(json) {
		var items = json.items;
		$("#shopping_cart").text(items);
	});
}

function addToCart(product_id){
	$.getJSON("../ws/cart/add/" + product_id, function(json) {
		var items = json.items;
		$("#shopping_cart").text(items);
	});
}
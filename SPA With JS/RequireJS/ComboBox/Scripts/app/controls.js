/// <reference path="jquery-2.0.3.js" />
/// <reference path="class.js" />
define(["libs/class"], function (Class) {
	var controls = controls || {};
	var ListViewExpanded = Class.create({
		init: function (itemsSource) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a ListView must be an array!";
			}
			this.itemsSource = itemsSource;
		},
		render: function (template) {
			var list = document.createElement("div");
			list.id = "wrapper";
			for (var i = 0; i < this.itemsSource.length; i++) {
				var listItem = document.createElement("div");
				var item = this.itemsSource[i];
				listItem.innerHTML = template(item);
				list.appendChild(listItem);
			}
			return list.outerHTML;
		}
	});

	var ListViewCollapsed = Class.create({
		init: function (itemsSource) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a ListView must be an array!";
			}
			this.itemsSource = itemsSource;
		},
		render: function (template, id) {
			
			var wrapper = document.createElement("div");
			wrapper.id = "wrapper";
			var item = this.itemsSource[id];
			
			var selectedItem = document.createElement("div");
			selectedItem.innerHTML = template(item);
			wrapper.appendChild(selectedItem);

			return wrapper.outerHTML;
		}
	});

	controls.listViewExpanded = function (itemsSource) {
		return new ListViewExpanded(itemsSource);
	}

	controls.listViewCollapsed = function (itemsSource) {
		return new ListViewCollapsed(itemsSource);
	}

	return controls;
});
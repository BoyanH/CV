/// <reference path="libs/require.js" />
require.config({
	paths: {
		jquery: "libs/jquery-2.0.3.min",
		rsvp: "libs/rsvp.min",
		httpRequester: "libs/http-requester",
		mustache: "libs/mustache"
	}
});

require(["jquery","mustache", "app/data-persister", "app/controls"], function ($, mustache, data, controls) {

	var previusElement = "none",
		isChanged = "still no selections";

	data.people()
		.then(function (people) {
			
			var self = this;
			this.people = people;

			showPerson(0);

		}, function(err) {
			console.error(err);
		});

		function showListView() {

			var personTemplateExpandedString = $("#person-template-expanded").html();

			var template = mustache.compile(personTemplateExpandedString);

			var listView = controls.listViewExpanded(self.people);

			var listViewHtml = listView.render(template);

			$("#wrapper").remove();
			$("body").append(listViewHtml);

			$(".list-div").click(function (ev) {

				var selectedEl = (ev.target.id)*1 - 1;
				if (ev.target.tagName.toLowerCase() == "strong") {
					selectedEl = ev.target.parentNode.id - 1;
				}

				showPerson(selectedEl);
			});
		}

		function showPerson(id) {

			var personTemplateCollapsedString = $("#person-template-collapsed").html();

			var template = mustache.compile(personTemplateCollapsedString);

			var listView = controls.listViewCollapsed(self.people);

			var listViewHtml = listView.render(template, id);

			$("#wrapper").remove();
			$("body").append(listViewHtml);

			if(previusElement !== self.people[id].name) {
				if(previusElement !== "none") {
					isChanged = "changed";
				}
				
				$(".person-item")[0].innerHTML += '<div class="important">Previusly Selected: ' + previusElement + ' </div>' + '<div class="important">Selection: ' 
													+ isChanged;
				previusElement = self.people[id].name;
			}
				else {
					isChanged = "not changed";
					$(".person-item")[0].innerHTML += '<div class="important">Previusly Selected: ' + previusElement + ' </div>' + '<div class="important">Selection: ' 
													+ isChanged;
				}

			$(".list-div").click(function (ev) {
				
				var selectedEl = (ev.target.id)*1 - 1;
				if (ev.target.tagName.toLowerCase() == "strong") {
					selectedEl = ev.target.parentNode.id - 1;
				}

				showListView();
			});
		}


});
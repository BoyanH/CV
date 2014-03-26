var Class = (function () {
    function createClass(properties) {
        var f = function () {
            //This is an addition to enable super (base) class with inheritance
            if (this._superConstructor) {
                this._super = new this._superConstructor(arguments);
            }
            this.init.apply(this, arguments);
        }
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        if (!f.prototype.init) {
            f.prototype.init = function () {}
        }
        return f;
    }

    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        this.prototype = new parent();
        this.prototype._superConstructor = parent;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    return {
        create: createClass,
    };
}());

var favouritesBar = (function () {

    var URL = Class.create({

        init: function (title, url) {

            this.title = title;
            this.url = url;
        }

    });

    var Folder = Class.create({

        init: function (title, urls) {

            this.title = title;
            this.urls = urls;
        },

        addURL: function () {

            this.urls.push(URL);
            this.display();
        }

    });

    var BarBody = Class.create({

        init: function (urls, folders) {

            this.urls = urls;
            this.folders = folders;
        },

        addURL: function(URL) {

          this.urls.push(URL);
          this.display();
        },

        addFolder: function(Folder) {

          this.foders.push(Folder);
          this.display();
        },

        display: function () {

            if(document.getElementById("barDiv")){

             document.getElementById("barDiv").remove();
            }

            var barDiv = document.createElement("div");
            barDiv.id = "barDiv";
            barDiv.style.margin = "0 auto";
            barDiv.style.border = "2px outset gray";
            barDiv.style.borderRadius = "10px";
            barDiv.style.width = "800px";
            barDiv.style.height = "150px";
            barDiv.style.backgroundColor = "#FFCCCC";

            document.getElementById("container").appendChild(barDiv);

            for (var i = 0; i < this.urls.length; i++) {

                var newHyperlink = document.createElement("a");
                newHyperlink.href = this.urls[i].url;
                newHyperlink.target = "_blank";
                newHyperlink.innerHTML = this.urls[i].title;
                newHyperlink.style.textDecoration = "none";
                newHyperlink.style.float = "left";
                newHyperlink.style.display = "inline-block";
                newHyperlink.style.marginLeft = "10px";
                newHyperlink.style.marginTop = "15px";

                barDiv.appendChild(newHyperlink);
            }

            var htmlFolders = document.createElement("ul");
            for (var k = 0; k < this.folders.length; k++) {

                var newFolder = document.createElement("li");
                newFolder.innerHTML = this.folders[k].title;
                newFolder.style.float = "right";
                newFolder.style.marginRight = "10px";

                var newFolderUrls = document.createElement("ul");
                newFolderUrls.style.listStyleType = "none";
                newFolderUrls.style.display = "none";


                for (var j = 0; j < this.folders[k].urls.length; j++) {

                    var newListItem = document.createElement("li");
                    newListItem.style.marginLeft = "-40px";

                    var newFoldersHyperLink = document.createElement("a");
                    newFoldersHyperLink.innerHTML = this.folders[k].urls[j].title;
                    newFoldersHyperLink.href = this.folders[k].urls[j].url;
                    newFoldersHyperLink.target = "_blank";
                    newFoldersHyperLink.style.textDecoration = "none";
                    newListItem.appendChild(newFoldersHyperLink);
                    newFolderUrls.appendChild(newListItem);

                }

                newFolder.appendChild(newFolderUrls);
                newFolder.className = "favouritesBarFolder";
                htmlFolders.appendChild(newFolder);
            }
            barDiv.appendChild(htmlFolders);

            var centerDiv = document.createElement("div");
            centerDiv.innerHTML = "<--URLs | Folders-->";
            centerDiv.style.display = "inline-block";
            centerDiv.style.marginLeft = "25%";
            centerDiv.style.marginTop = "5px";
            barDiv.appendChild(centerDiv);

            barDiv.onclick = function (ev) {
                var currentTarget = ev.target;
                
                if(currentTarget.className == "favouritesBarFolder") {

                  if (currentTarget.childNodes[1].style.display == "none"){
                      currentTarget.childNodes[1].style.display = "";
                  }

                      else if(currentTarget.childNodes[1].style.display == ""){
                          
                          currentTarget.childNodes[1].style.display = "none";
                      }
                }

            }




        }

    });

    return {

        URL: URL,
        Folder: Folder,
        BarBody: BarBody
    }


}());

var URL = favouritesBar.URL;
var Folder = favouritesBar.Folder;
var BarBody = favouritesBar.BarBody;

var pinkbike = new URL("Pinkbike", "http://www.pinkbike.com/");
var youtube = new URL("Youtube", "https://www.youtube.com/");

var google = new URL("Google", "https://www.google.bg/");
var bing = new URL("Bing", "http://www.bing.com/");

var facebook = new URL("Facebook", "https://www.facebook.com/");
var zamunda = new URL("Zamunda", "http://www.zamunda.net/");

var videos = new Folder("Videos", [pinkbike, youtube]);
var searches = new Folder("Searches", [google, bing]);

var myFavouritesBar = new BarBody([facebook, zamunda], [videos, searches]);

var pirateBay = new URL("Pirate Bay", "http://www.thepiratebay.se/");
myFavouritesBar.addURL(pirateBay);
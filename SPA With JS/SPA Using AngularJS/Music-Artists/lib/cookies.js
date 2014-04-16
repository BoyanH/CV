var cookies = (function() {
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(str) {
            if (this.length < str.length) {
                return false;
            }
            for (var i = 0; i < str.length; i++) {
                if (this[i] !== str[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    function readCookie(myCookieName) {

      if (document.cookie.length > 0)
      {
        var start = document.cookie.indexOf(myCookieName + "=");
        if (start != -1)
        {
          start = start + myCookieName.length + 1;
          var end = document.cookie.indexOf(";",start);
          if (end == -1) end = document.cookie.length;
          return unescape(document.cookie.substring(start ,end ));
        }else{
          return "";
        }
      }
      return "";
    }


    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function removeCookie(name) {
        createCookie(name, "", -1);
    }

    return {
    	read:readCookie,
    	create:createCookie,
    	remove:removeCookie
    };
}());

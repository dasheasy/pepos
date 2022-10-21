// ==UserScript==
// @name         Pepos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
        // simulate click event
        function simulateClick(elem) {
            var evt = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            var canceled = !elem.dispatchEvent(evt);
        }

        // add link
        var csvlink = document.createElement('a');
        csvlink.style.display = 'none';
        csvlink.setAttribute('target', '_blank');
        csvlink.setAttribute('download', 'data.csv');
        document.body.append(csvlink);

    	var btn = document.createElement('button');
		btn.innerHTML = 'CSV';
		btn.setAttribute('type', 'button');
		// Process Table on Click
		btn.onclick = function() {
            var titles = []
            var imgs = document.getElementsByTagName("img");
            for (const img of imgs) {
                var m = img.title.match(/:(\d+):/)
                if (m) {
                    titles.push(m[1] + ":" + img.src)
                }
            }
            var csv_string = titles.join(',');
			csvlink.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
			simulateClick(csvlink);
		};
        setTimeout(function(){
          var tbl = document.getElementById("change-username-tooltip-id")
          var div = document.createElement("div")
          //div.class = tbl.firstChild.class
          div.append(btn)
          console.log("pepos  " + tbl)
          tbl.prepend(div);
//            var tbl = document.querySelector('[aria-label="Home"]');
//            tbl.append(btn)
        }, 1000);
})();
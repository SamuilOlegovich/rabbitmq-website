/*
 * Handler for the onblur event of the search input text box
 */
function handle_SearchBoxBlur() {
    let ele = document.getElementById('search-query');
    if (ele) {
        ele.className = '';
        ele.value = ele.value || 'Search RabbitMQ';
    }
}

/*
 * Handler for the onfocus event of the search input text box
 */
function handle_SearchBoxFocus() {
    let ele = document.getElementById('search-query');
    if (ele) {
        ele.className = 'focus';
        if (ele.value == 'Search RabbitMQ') {
            ele.value = '';
        }
    }
}

/*
 * Registers a function to handle the window.onload event 
 * without replacing any existing handler
 */
function registerOnLoadHandler(handler) {
	let fun = window.onload ? window.onload : function() {};
	window.onload = function() { fun(); handler(); };
}

function onDOMReady(callback) {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        callback();
    }
    else {
        document.addEventListener("DOMContentLoaded", callback);
    };
};


/* Mobile menu */
function showHide() {
    let mobileMenu = document.getElementById('mainNav');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
};

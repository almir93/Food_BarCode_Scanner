/*
 * JS for sorry_page generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '45f11be2-c13f-4a72-a3ad-33c95edc499d';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "Register",
    "location": "Register.html"
}, {
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "Login_Screen",
    "location": "Login_Screen.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "sorry_page",
    "location": "sorry_page.html"
}];

function sorry_page_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_4': 'sorry_page_mobilelabel_4',
        'goback': 'sorry_page_goback'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'sorry_page';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var sorry_page_onLoad = function() {
        sorry_page_elementsExtraJS();
        sorry_page_deviceEvents();
        sorry_page_windowEvents();
        sorry_page_elementsEvents();
    };
    // screen window events
    function sorry_page_windowEvents() {
        $('#sorry_page').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function sorry_page_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function sorry_page_elementsExtraJS() {
        // screen (sorry_page) extra code
    };
    // screen elements handler
    function sorry_page_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#sorry_page_mobilecontainer [name="goback"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Login_Screen', {
                        reverse: false
                    });
                }
            },
        }, '#sorry_page_mobilecontainer [name="goback"]');
    };
    $(document).off("pagebeforeshow", "#sorry_page").on("pagebeforeshow", "#sorry_page", function(event, ui) {
        Apperyio.CurrentScreen = "sorry_page";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    sorry_page_onLoad();
};
$(document).off("pagecreate", "#sorry_page").on("pagecreate", "#sorry_page", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    sorry_page_js();
});
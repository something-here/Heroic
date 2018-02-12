angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('views/index.html','<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en_US" lang="en_US">\n\n<head>\n    <base href="/">\n    <title>{{ website.name }} - {{ page }}</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n    <meta http-equiv="content-type" content="text/html; charset=utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/app.css" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/override.css" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />\n</head>\n\n<body class="app">\n  <div class="content">\n    <heroic-header></heroic-header>\n      <main ui-view></main>\n  </div>\n  <footer class="wrapper">\n      <div class="footer__media">\n          <p class="footer__media__label">Follow Habbo</p>\n          <ul>\n              <link>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--facebook"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--twitter"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--youtube"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--rss"></i></a>\n              </li>\n          </ul>\n      </div>\n      <div class="footer__content">\n          <ul class="footer__nav">\n              <li class="footer__nav__item">\n                  <a sref="me.about" class="footer__nav__link">About CMS</a>\n              </li>\n          </ul>\n          <p class="footer__copyright"> Powered by Heroic Framework by LeChris <br> Built with Node and Angular <br> Shout out to Bill</p>\n          <a id="footer_logo"></a>\n      </div>\n  </footer>\n    <script type="text/javascript" src="/assets/js/vendor.js"></script>\n    <script type="text/javascript" src="/assets/js/habbo-api.js"></script>\n</body>\n\n</html>\n');
$templateCache.put('views/components/footer.html','<habbo-footer>\n    <footer class="wrapper">\n        <div class="footer__media" style="width:100%;">\n          <p class="footer__media__label" style="float:left;"> &copy; LeChris</p>\n          <p class="footer__media__label" style="float:right;"> Heroic Intergrated 0.1</p>\n        </div>\n    </footer>\n</habbo-footer>\n');
$templateCache.put('views/components/header.html','<habbo-header-small>\n  <habbo-navigation active="home">\n    <nav class="navigation">\n          <ul class="navigation__menu">\n          <ul class="navigation__menu">\n            <li class="navigation__item" style="-webkit-app-region: drag;">\n              <a href="#" class="navigation__link navigation__link--active" style="color:#036;">\n                <i class="fa fa-heart"></i> Heroic\n              </a>\n            </li>\n          </ul>\n      </nav>\n  </habbo-navigation>\n  <div class="wrapper"></div>\n  </habbo-header-small>\n  <habbo-tabs>\n    <nav class="tabs">\n      <ul class="tabs__menu" ng-if="$root.step">\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.step==\'welcome\'}">\n              Welcome\n            </a>\n          </li>\n        </habbo-tab>\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.step==\'database\'}">\n              Database\n            </a>\n          </li>\n        </habbo-tab>\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.step==\'general\'}">\n              General Settings\n            </a>\n          </li>\n        </habbo-tab>\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.step==\'administrator\'}">\n              Default Administrator\n            </a>\n          </li>\n        </habbo-tab>\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.step==\'finished\'}">\n              Finished\n            </a>\n          </li>\n        </habbo-tab>\n      </ul>\n      <ul class="tabs__menu" ng-if="$root.page">\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.page==\'dashboard\'}">\n              Dashboard\n            </a>\n          </li>\n        </habbo-tab>\n        <habbo-tab class="sub-list no-padding">\n          <li class="tab">\n            <a class="tab__link" ng-class="{\'tab__link--active\': $root.page==\'actions\'}">\n              Quick Actions\n            </a>\n          </li>\n        </habbo-tab>\n      </ul>\n    </nav>\n  </habbo-tabs>\n</habbo-header-small>\n');
$templateCache.put('views/pages/home/dashboard.html','<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>Dashboard</h2>\r\n    <div style="float:left;width:60%;">\r\n      <habbo-message-container type="exclamation">\r\n        <section class="message-container">\r\n          <h3>Control Panel</h3>\r\n          <p>Your hotel is now ready for users!</p>\r\n        </section>\r\n      </habbo-message-container>\r\n      <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;">\r\n          <aside class="static-content">\r\n            <h3>Services</h3>\r\n            <p> <b>Website:</b> <font color="green">ONLINE</font> </p>\r\n            <p> <b>Emulator:</b> <font color="green">ONLINE</font> </p>\r\n          </aside>\r\n      </habbo-web-pages>\r\n    </div>\r\n  </secton>\r\n</main>\r\n');
$templateCache.put('views/pages/install/administrator.html','<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>Administrator</h2>\r\n    <div style="float:left;width:60%;">\r\n      <habbo-message-container type="exclamation" ng-if="error">\r\n        <section class="message-container">\r\n          <h3>Oops!</h3>\r\n          <p>{{ error }}</p>\r\n        </section>\r\n      </habbo-message-container>\r\n      <form ng-submit="save()" class="form">\r\n        <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\r\n            <div class="form__field">\r\n              <label>Username</label>\r\n              <input ng-model="user.username" class="form__input">\r\n            </div>\r\n            <div class="form__field">\r\n              <label>Password</label>\r\n              <input ng-model="user.password" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class="form__fieldset">\r\n            <div class="form__field">\r\n              <label>Email</label>\r\n              <input ng-model="user.mail" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <div class="form__footer">\r\n            <button type="submit" class="form__submit">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n  </secton>\r\n</main>\r\n');
$templateCache.put('views/pages/install/database.html','<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>Database</h2>\r\n    <div style="float:left;width:60%;">\r\n      <habbo-message-container type="exclamation" ng-if="error">\r\n        <section class="message-container">\r\n          <h3>Oops!</h3>\r\n          <p>{{ error }}</p>\r\n        </section>\r\n      </habbo-message-container>\r\n      <form ng-submit="test()" class="form">\r\n        <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\r\n            <div class="form__field">\r\n              <label>Host</label>\r\n              <input ng-model="database.host" class="form__input">\r\n            </div>\r\n            <div class="form__field">\r\n              <label>Database</label>\r\n              <input ng-model="database.database" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class="form__fieldset">\r\n            <div class="form__field">\r\n              <label>User</label>\r\n              <input ng-model="database.user" class="form__input">\r\n            </div>\r\n            <div class="form__field">\r\n              <label>Password</label>\r\n              <input ng-model="database.password" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <div class="form__footer">\r\n            <button type="submit" class="form__submit">Test</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n  </secton>\r\n</main>\r\n');
$templateCache.put('views/pages/install/finished.html','<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>That\'s All</h2>\r\n    <div style="float:left;width:60%;">\r\n      <habbo-message-container type="exclamation">\r\n        <section class="message-container">\r\n          <h3>Finished!</h3>\r\n          <p>Your hotel is now ready for users!</p>\r\n          <button ng-click="finish()" class="form__submit">Dashboard</button>\r\n        </section>\r\n      </habbo-message-container>\r\n      </div>\r\n  </secton>\r\n</main>\r\n\r\n \r\n');
$templateCache.put('views/pages/install/general.html','<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>Website</h2>\r\n    <div style="float:left;width:60%;">\r\n      <form ng-submit="save()" class="form">\r\n        <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\r\n            <div class="form__field">\r\n              <label>Hotel Name</label>\r\n              <input ng-model="website.name" class="form__input">\r\n            </div>\r\n            <div class="form__field">\r\n              <label>Hotel URL</label>\r\n              <input ng-model="website.link" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class="form__fieldset">\r\n            <div class="form__field">\r\n              <label>Emulator IP</label>\r\n              <input ng-model="website.emu_ip" class="form__input">\r\n            </div>\r\n            <div class="form__field">\r\n              <label>Emulator Port</label>\r\n              <input ng-model="website.emu_port" class="form__input">\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\r\n              <div class="form__field">\r\n                <label>Findretros Voting</label>\r\n                <select ng-model="website.findretros" class="form__input">\r\n                  <option value="1">Enabled</option>\r\n                  <option value="0">Disabled</option>\r\n                </select>\r\n              </div>\r\n              <div class="form__field">\r\n                <label>Findretros Username</label>\r\n                <input ng-model="website.fr_user" class="form__input">\r\n              </div>\r\n            </fieldset>\r\n            <div class="form__footer">\r\n              <button type="submit" class="form__submit">Save</button>\r\n            </div>\r\n          </form>\r\n      </div>\r\n  </secton>\r\n</main>\r\n');
$templateCache.put('views/pages/install/welcome.html','\n<section id="tabs">\n  <header class="rooms__header">\n    <div class="rooms__header__container wrapper">\n      <div class="rooms__header__content">\n        <h1 class="rooms__header__title">Begin Your Experience</h1>\n        <p>This should be an easy and fun process.</p>\n      </div>\n    </div>\n  </header>\n\n  <div class="wrapper wrapper--content">\n    <section class="wrapper wrapper--content rooms-wrapper" style="float:left;">\n      <div>\n        <div style="float:left;width:40%;">\n          <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;">\n              <aside class="static-content">\n                <h3>What now</h3>\n                <p>Please follow the following set of instructions to personalize your experience.</p>\n                <a ng-click="continue()"><button class="form__submit">Begin</button></a>\n              </aside>\n          </habbo-web-pages>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n');}]);
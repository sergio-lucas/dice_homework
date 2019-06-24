/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Dice.js":
/*!********************************!*\
  !*** ./src/components/Dice.js ***!
  \********************************/
/*! exports provided: throwDice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throwDice\", function() { return throwDice; });\nconst diceElements = [].slice.call(document.querySelectorAll('.dice')); // convert node elements to array\nconst randomDiceValue = () => Math.floor(Math.random() * 6) + 1;\n\n\nconst throwDice = () => {\n    let dicesValue = [];\n    diceElements.forEach(diceElement => {\n        let dice = randomDiceValue();\n        diceElement.src = `dice-${dice}.png`;\n        dicesValue.push(dice);\n    });\n    return dicesValue;\n}\n\n\n//# sourceURL=webpack:///./src/components/Dice.js?");

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! exports provided: createPlayers, isAllowChangeGamer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlayers\", function() { return createPlayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAllowChangeGamer\", function() { return isAllowChangeGamer; });\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/constants/index.js\");\n/* harmony import */ var _models_Gamer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Gamer */ \"./src/models/Gamer.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\n\n\n\nconst askNewPlayer = (newPlayerIndex) => {\n    let newPlayerName = prompt(`Введите имя ${newPlayerIndex} игрока`) || `ИГРОК ${newPlayerIndex}`;\n    return newPlayerName;\n};\n\nconst getPlayer = (userName) => {\n    return localStorage.getItem(userName);\n};\n\nconst createPlayers = () => {\n    Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"clearPlayers\"])();\n    for (let index = 0; index < _constants_index__WEBPACK_IMPORTED_MODULE_0__[\"PLAYERS\"]; index++) {\n      let current = `${index + 1}`;\n      let name = askNewPlayer(current);\n      let player = null;\n      let oldPlayer = JSON.parse(getPlayer(name));\n      if (oldPlayer) {\n        let isUserCreated = confirm('Пользователь с таким именем уже существует. Продолжить?');\n        if (isUserCreated) {\n          let curPlayer = {name, ...oldPlayer}\n          player = new _models_Gamer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](curPlayer);\n        } else {\n          let name = prompt('Введите другое имя');\n          player = new _models_Gamer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({name});\n        }\n      } else {\n        player = new _models_Gamer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({name});\n      }\n      document.querySelector(`#name-${index}`).textContent = player.name;\n      document.querySelector(`#score-${index}`).textContent = player.score;\n      _store__WEBPACK_IMPORTED_MODULE_2__[\"players\"].push(player);\n    }\n    return _store__WEBPACK_IMPORTED_MODULE_2__[\"players\"];\n  };\n\n  const isAllowChangeGamer = (diceValues) => {\n    return diceValues.reduce((prev, curr) => {\n      return prev === curr || curr === _constants_index__WEBPACK_IMPORTED_MODULE_0__[\"RESET_VALUE\"] ||  prev === _constants_index__WEBPACK_IMPORTED_MODULE_0__[\"RESET_VALUE\"]\n    })\n  };\n\n\n//# sourceURL=webpack:///./src/components/Player.js?");

/***/ }),

/***/ "./src/components/Winners.js":
/*!***********************************!*\
  !*** ./src/components/Winners.js ***!
  \***********************************/
/*! exports provided: showResult, showWinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showResult\", function() { return showResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showWinner\", function() { return showWinner; });\nconst getWinners = () => {\n    const winners = Object.keys(localStorage).map(key => {\n      return {\n        name: key, ...JSON.parse(localStorage.getItem(key))\n      }\n    });\n    winners.length > 1 ? winners.sort(function (prev, cur) {\n        if (prev.wins < cur.wins) {\n        return 1;\n        }if (prev.wins > cur.wins) {\n        return -1;\n        }\n    return 0;\n    }) : winners;\n    return winners;\n};\n\nconst showResult = () => {\n    let winners = getWinners();\n    let winnersTemplate = 'Список победителей\\n';\n    winners.forEach((winner) => {\n      winnersTemplate += `Имя: ${winner.name} Количество побед: ${winner.wins}\\n`\n    });\n    alert(winnersTemplate);\n  };\n\nconst showWinner = (name) => {\n    alert(`${name} won!!!`);\n}\n\n//# sourceURL=webpack:///./src/components/Winners.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: RESET_VALUE, PLAYERS, DEFAULT_WIN_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET_VALUE\", function() { return RESET_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYERS\", function() { return PLAYERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_WIN_VALUE\", function() { return DEFAULT_WIN_VALUE; });\nconst RESET_VALUE = 2;\nconst PLAYERS = 2;\nconst DEFAULT_WIN_VALUE = 100;\n\n//# sourceURL=webpack:///./src/constants/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants/index.js\");\n/* harmony import */ var _components_Winners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Winners */ \"./src/components/Winners.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Player */ \"./src/components/Player.js\");\n/* harmony import */ var _components_Dice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Dice */ \"./src/components/Dice.js\");\n/*\nGAME RULES:\n\n- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game\n\n*/\n\n\n\n\n\n\nlet winValue = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_WIN_VALUE\"];\nlet activePlayer = 0;\nlet current = 0;\nconst diceBlock = document.querySelector('.dice-block');\n\n\nconst initGame = () => {\n  document.querySelector('#current-0').textContent = 0;\n  document.querySelector('#current-1').textContent = 0;\n  document.querySelector('#score-0').textContent = 0;\n  document.querySelector('#score-1').textContent = 0;\n  Object(_components_Player__WEBPACK_IMPORTED_MODULE_3__[\"createPlayers\"])();\n  diceBlock.style.display = 'none';\n}\n\ninitGame();\n\nconst saveWinner = (winner) => {\n  localStorage.setItem(winner.name, JSON.stringify({wins: winner.wins}));\n};\n\ndocument.querySelector('.btn-roll').addEventListener('click', function() {\n  let dicesValue = [],\n      diceSum = 0\n  \n  diceBlock.style.display = 'block';\n  dicesValue = Object(_components_Dice__WEBPACK_IMPORTED_MODULE_4__[\"throwDice\"])();\n  if (Object(_components_Player__WEBPACK_IMPORTED_MODULE_3__[\"isAllowChangeGamer\"])(dicesValue)) {\n    changePlayer();\n  } else {\n    document.getElementById('current-'+activePlayer).textContent = current;\n    diceSum = dicesValue.reduce((prev, curr) => prev + curr);\n    current += diceSum;\n    document.getElementById('current-'+activePlayer).textContent = current;\n\n    if (_store__WEBPACK_IMPORTED_MODULE_2__[\"players\"][activePlayer].score + current >= winValue) {\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"players\"][activePlayer].wins += 1;\n        saveWinner(_store__WEBPACK_IMPORTED_MODULE_2__[\"players\"][activePlayer]);\n        Object(_components_Winners__WEBPACK_IMPORTED_MODULE_1__[\"showWinner\"])(_store__WEBPACK_IMPORTED_MODULE_2__[\"players\"][activePlayer].name);\n    }\n  }\n});\n\nconst changePlayer = () => {\n  current = 0;\n  document.getElementById('current-'+activePlayer).textContent = 0;\n  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n  activePlayer = +!activePlayer;\n  diceBlock.style.display = 'none';\n  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n}\n\ndocument.querySelector('.btn-hold').addEventListener('click', function() {\n  let player = _store__WEBPACK_IMPORTED_MODULE_2__[\"players\"][activePlayer];\n  player.score += current;\n  document.querySelector(`#score-${activePlayer}`).textContent = player.score;\n  changePlayer();\n});\n\n\ndocument.querySelector('.btn-new').addEventListener('click', function() {\n  initGame();\n});\n\ndocument.querySelector('.input-limit').addEventListener('change', function() {\n  winValue = Math.abs(this.value) || _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_WIN_VALUE\"];\n})\n\ndocument.querySelector('.btn-winner').addEventListener('click', _components_Winners__WEBPACK_IMPORTED_MODULE_1__[\"showResult\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/Gamer.js":
/*!*****************************!*\
  !*** ./src/models/Gamer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Gamer = function({name, wins}) {\n    this.name = name,\n    this.score = 0,\n    this.wins = wins || 0\n  };\n  \n  \n  \n  Gamer.prototype.getScore  = function() {\n    return this.score;\n  };\n  \n  Gamer.prototype.setScore  = function(newScore) {\n    return this.score = newScore;\n  };\n  \n  Gamer.prototype.resetScore  = function() {\n    return this.score = 0;\n  };\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Gamer);\n\n//# sourceURL=webpack:///./src/models/Gamer.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: players, addPlayer, clearPlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"players\", function() { return players; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPlayer\", function() { return addPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPlayers\", function() { return clearPlayers; });\nlet players = [];\nlet addPlayer = (player) => {\n    players.push(player);\n}\nlet clearPlayers = () => {\n    players = [];\n}\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

/******/ });
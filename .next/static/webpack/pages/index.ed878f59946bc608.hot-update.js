"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/StepContainer.tsx":
/*!**************************************!*\
  !*** ./components/StepContainer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ExchangeStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExchangeStep */ \"./components/ExchangeStep.tsx\");\n/* harmony import */ var _DynamicStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicStepper */ \"./components/DynamicStepper.tsx\");\n/* harmony import */ var _VerificationStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VerificationStep */ \"./components/VerificationStep.tsx\");\n/* harmony import */ var _styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/Step.module.scss */ \"./styles/components/Step.module.scss\");\n/* harmony import */ var _styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar StepContainer = function(param) {\n    var cryptoCurrencies = param.cryptoCurrencies, coinMultiplier = param.coinMultiplier;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), step = ref[0], setStep = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        amountSend: undefined,\n        amountReceive: undefined,\n        currencyDisplayName: cryptoCurrencies.length > 0 ? cryptoCurrencies[0].displayName : \"Bitcoin\",\n        currencyDisplayAbbreviation: cryptoCurrencies.length > 0 ? cryptoCurrencies[0].displayAbbreviation : \"BTC\",\n        currencyApiName: cryptoCurrencies.length > 0 ? cryptoCurrencies[0].apiName : \"Bitcoin\",\n        currencyApiAbbreviation: cryptoCurrencies.length > 0 ? cryptoCurrencies[0].apiAbbreviation : \"BTC\",\n        currencyImagePath: cryptoCurrencies.length > 0 ? cryptoCurrencies[0].icon : \"BTC\",\n        lastValueChanged: \"SEND\",\n        isLoading: false\n    }), transaction = ref1[0], setTransaction = ref1[1];\n    var nextStep = function() {\n        var isMaxStep = step < 2;\n        var isFirstStepAlreadyCompleted = step == 1;\n        var canGoToNextStep = !isMaxStep || !isFirstStepAlreadyCompleted;\n        if (!canGoToNextStep) return;\n        if (transaction.isLoading) return;\n        setStep(step + 1);\n    };\n    var previousStep = function() {\n        var isStepLessThanLimit = step <= 1;\n        if (isStepLessThanLimit) return;\n        if (transaction.isLoading) return;\n        setStep(step - 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().step__container), \" \").concat(step > 2 && \"\".concat((_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"step__container__last--step\"]))),\n        children: [\n            coinMultiplier > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().booster),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"42\",\n                            height: \"50\",\n                            viewBox: \"0 0 42 50\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                clipRule: \"evenodd\",\n                                d: \"M23.0832 18.75H41.8332L12.6665 50L18.9165 31.25H0.166504L29.3332 0L23.0832 18.75ZM4.96025 29.1667H21.8061L17.6665 41.5896L37.0394 20.8333H20.1936L24.3332 8.41042L4.96025 29.1667V29.1667Z\",\n                                fill: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\".concat((_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().coin__multiplier)),\n                            children: [\n                                coinMultiplier,\n                                \"x more coins\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DynamicStepper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    step: step,\n                    nextStep: nextStep,\n                    previousStep: previousStep\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ExchangeStep__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        cryptoCurrencies: cryptoCurrencies,\n                        transaction: transaction,\n                        onTransactionDataChange: setTransaction,\n                        nextStep: function() {\n                            return setStep(step + 1);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_styles_components_Step_module_scss__WEBPACK_IMPORTED_MODULE_5___default().action__btn)),\n                                children: \"Help\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VerificationStep__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                coinMultiplier: coinMultiplier,\n                transaction: transaction,\n                onTransactionDataChange: setTransaction\n            }, void 0, false, {\n                fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Fiverr\\\\purple-crypto-store\\\\components\\\\StepContainer.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(StepContainer, \"MVH4bxyIyTp/PDG55z/ps8FOpkQ=\");\n_c = StepContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StepContainer);\nvar _c;\n$RefreshReg$(_c, \"StepContainer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RlcENvbnRhaW5lci50c3g/NmNmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEV4Y2hhbmdlU3RlcCBmcm9tIFwiLi9FeGNoYW5nZVN0ZXBcIjtcclxuaW1wb3J0IER5bmFtaWNTdGVwcGVyIGZyb20gXCIuL0R5bmFtaWNTdGVwcGVyXCI7XHJcbmltcG9ydCBWZXJpZmljYXRpb25TdGVwIGZyb20gXCIuL1ZlcmlmaWNhdGlvblN0ZXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvU3RlcC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgU3RlcENvbnRhaW5lciA9ICh7IGNyeXB0b0N1cnJlbmNpZXMsIGNvaW5NdWx0aXBsaWVyIH0pID0+IHtcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgW3RyYW5zYWN0aW9uLCBzZXRUcmFuc2FjdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGFtb3VudFNlbmQ6IHVuZGVmaW5lZCxcclxuICAgIGFtb3VudFJlY2VpdmU6IHVuZGVmaW5lZCxcclxuICAgIGN1cnJlbmN5RGlzcGxheU5hbWU6XHJcbiAgICAgIGNyeXB0b0N1cnJlbmNpZXMubGVuZ3RoID4gMCA/IGNyeXB0b0N1cnJlbmNpZXNbMF0uZGlzcGxheU5hbWUgOiBcIkJpdGNvaW5cIixcclxuICAgIGN1cnJlbmN5RGlzcGxheUFiYnJldmlhdGlvbjpcclxuICAgICAgY3J5cHRvQ3VycmVuY2llcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBjcnlwdG9DdXJyZW5jaWVzWzBdLmRpc3BsYXlBYmJyZXZpYXRpb25cclxuICAgICAgICA6IFwiQlRDXCIsXHJcbiAgICBjdXJyZW5jeUFwaU5hbWU6XHJcbiAgICAgIGNyeXB0b0N1cnJlbmNpZXMubGVuZ3RoID4gMCA/IGNyeXB0b0N1cnJlbmNpZXNbMF0uYXBpTmFtZSA6IFwiQml0Y29pblwiLFxyXG4gICAgY3VycmVuY3lBcGlBYmJyZXZpYXRpb246XHJcbiAgICAgIGNyeXB0b0N1cnJlbmNpZXMubGVuZ3RoID4gMCA/IGNyeXB0b0N1cnJlbmNpZXNbMF0uYXBpQWJicmV2aWF0aW9uIDogXCJCVENcIixcclxuICAgIGN1cnJlbmN5SW1hZ2VQYXRoOlxyXG4gICAgICBjcnlwdG9DdXJyZW5jaWVzLmxlbmd0aCA+IDAgPyBjcnlwdG9DdXJyZW5jaWVzWzBdLmljb24gOiBcIkJUQ1wiLFxyXG4gICAgbGFzdFZhbHVlQ2hhbmdlZDogXCJTRU5EXCIsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXh0U3RlcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTWF4U3RlcCA9IHN0ZXAgPCAyO1xyXG4gICAgY29uc3QgaXNGaXJzdFN0ZXBBbHJlYWR5Q29tcGxldGVkID0gc3RlcCA9PSAxO1xyXG4gICAgY29uc3QgY2FuR29Ub05leHRTdGVwID0gIWlzTWF4U3RlcCB8fCAhaXNGaXJzdFN0ZXBBbHJlYWR5Q29tcGxldGVkO1xyXG4gICAgaWYgKCFjYW5Hb1RvTmV4dFN0ZXApIHJldHVybjtcclxuICAgIGlmICh0cmFuc2FjdGlvbi5pc0xvYWRpbmcpIHJldHVybjtcclxuICAgIHNldFN0ZXAoc3RlcCArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzU3RlcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzU3RlcExlc3NUaGFuTGltaXQgPSBzdGVwIDw9IDE7XHJcbiAgICBpZiAoaXNTdGVwTGVzc1RoYW5MaW1pdCkgcmV0dXJuO1xyXG4gICAgaWYgKHRyYW5zYWN0aW9uLmlzTG9hZGluZykgcmV0dXJuO1xyXG4gICAgc2V0U3RlcChzdGVwIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJzdGVwX19jb250YWluZXJcIl19ICR7c3RlcCA+IDIgJiYgYCR7c3R5bGVzW1wic3RlcF9fY29udGFpbmVyX19sYXN0LS1zdGVwXCJdfWBcclxuICAgICAgICB9YH1cclxuICAgID5cclxuICAgICAge2NvaW5NdWx0aXBsaWVyID4gMSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJib29zdGVyXCJdfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQyIDUwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIzLjA4MzIgMTguNzVINDEuODMzMkwxMi42NjY1IDUwTDE4LjkxNjUgMzEuMjVIMC4xNjY1MDRMMjkuMzMzMiAwTDIzLjA4MzIgMTguNzVaTTQuOTYwMjUgMjkuMTY2N0gyMS44MDYxTDE3LjY2NjUgNDEuNTg5NkwzNy4wMzk0IDIwLjgzMzNIMjAuMTkzNkwyNC4zMzMyIDguNDEwNDJMNC45NjAyNSAyOS4xNjY3VjI5LjE2NjdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzW1wiY29pbl9fbXVsdGlwbGllclwiXX1gfT5cclxuICAgICAgICAgICAgICB7Y29pbk11bHRpcGxpZXJ9eCBtb3JlIGNvaW5zXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhlYWRlclwiXX0+XHJcbiAgICAgICAgPER5bmFtaWNTdGVwcGVyXHJcbiAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxyXG4gICAgICAgICAgcHJldmlvdXNTdGVwPXtwcmV2aW91c1N0ZXB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c3RlcCA9PT0gMSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxFeGNoYW5nZVN0ZXBcclxuICAgICAgICAgICAgY3J5cHRvQ3VycmVuY2llcz17Y3J5cHRvQ3VycmVuY2llc31cclxuICAgICAgICAgICAgdHJhbnNhY3Rpb249e3RyYW5zYWN0aW9ufVxyXG4gICAgICAgICAgICBvblRyYW5zYWN0aW9uRGF0YUNoYW5nZT17c2V0VHJhbnNhY3Rpb259XHJcbiAgICAgICAgICAgIG5leHRTdGVwPXsoKSA9PiBzZXRTdGVwKHN0ZXAgKyAxKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJvZHlcIl19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZm9vdGVyXCJdfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImFjdGlvbl9fYnRuXCJdfWB9XHJcbiAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gaGFuZGxlRXhjaGFuZ2UoKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIZWxwXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7c3RlcCA9PT0gMiAmJiAoXHJcbiAgICAgICAgPFZlcmlmaWNhdGlvblN0ZXBcclxuICAgICAgICAgIGNvaW5NdWx0aXBsaWVyPXtjb2luTXVsdGlwbGllcn1cclxuICAgICAgICAgIHRyYW5zYWN0aW9uPXt0cmFuc2FjdGlvbn1cclxuICAgICAgICAgIG9uVHJhbnNhY3Rpb25EYXRhQ2hhbmdlPXtzZXRUcmFuc2FjdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRXhjaGFuZ2VTdGVwIiwiRHluYW1pY1N0ZXBwZXIiLCJWZXJpZmljYXRpb25TdGVwIiwic3R5bGVzIiwiU3RlcENvbnRhaW5lciIsImNyeXB0b0N1cnJlbmNpZXMiLCJjb2luTXVsdGlwbGllciIsInN0ZXAiLCJzZXRTdGVwIiwiZW1haWwiLCJhbW91bnRTZW5kIiwidW5kZWZpbmVkIiwiYW1vdW50UmVjZWl2ZSIsImN1cnJlbmN5RGlzcGxheU5hbWUiLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImN1cnJlbmN5RGlzcGxheUFiYnJldmlhdGlvbiIsImRpc3BsYXlBYmJyZXZpYXRpb24iLCJjdXJyZW5jeUFwaU5hbWUiLCJhcGlOYW1lIiwiY3VycmVuY3lBcGlBYmJyZXZpYXRpb24iLCJhcGlBYmJyZXZpYXRpb24iLCJjdXJyZW5jeUltYWdlUGF0aCIsImljb24iLCJsYXN0VmFsdWVDaGFuZ2VkIiwiaXNMb2FkaW5nIiwidHJhbnNhY3Rpb24iLCJzZXRUcmFuc2FjdGlvbiIsIm5leHRTdGVwIiwiaXNNYXhTdGVwIiwiaXNGaXJzdFN0ZXBBbHJlYWR5Q29tcGxldGVkIiwiY2FuR29Ub05leHRTdGVwIiwicHJldmlvdXNTdGVwIiwiaXNTdGVwTGVzc1RoYW5MaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiZCIsInAiLCJvblRyYW5zYWN0aW9uRGF0YUNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StepContainer.tsx\n");

/***/ })

});
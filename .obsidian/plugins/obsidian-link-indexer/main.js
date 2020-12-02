'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

var LinkIndexer = /** @class */ (function (_super) {
    __extends(LinkIndexer, _super);
    function LinkIndexer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkIndexer.prototype.onInit = function () { };
    LinkIndexer.prototype.onload = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var loadedSettings;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _b.sent();
                        if (loadedSettings) {
                            this.settings = cjs(new LinkIndexerSettings(), loadedSettings);
                            this.settings.usedLinks = [];
                            (_a = loadedSettings.usedLinks) === null || _a === void 0 ? void 0 : _a.forEach(function (r) {
                                _this.settings.usedLinks.push(cjs(new UsedLinks(), r));
                            });
                        }
                        else {
                            this.settings = new LinkIndexerSettings();
                        }
                        this.reloadSettings();
                        this.addSettingTab(new LinkIndexerSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkIndexer.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkIndexer.prototype.reloadSettings = function () {
        var _this = this;
        this.removeOwnCommands();
        this.globalExcludes = [];
        this.settings.usedLinks.forEach(function (r) {
            _this.globalExcludes.push(r.path);
            _this.addCommand({
                id: "link-indexer:used-links:" + r.name,
                name: "Used links - " + r.name,
                callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.generateAllUsedLinksIndex(getPresetByName(this.settings.usedLinks, r.name))];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); },
            });
        });
    };
    LinkIndexer.prototype.removeOwnCommands = function () {
        var _this = this;
        // @ts-ignore
        this.app.commands.listCommands().map(function (c) { return c.id; }).filter(function (c) { return c.startsWith(_this.manifest.id); }).forEach(function (c) {
            // @ts-ignore
            _this.app.commands.removeCommand(c);
        });
    };
    LinkIndexer.prototype.generateAllUsedLinksIndex = function (preset) {
        return __awaiter(this, void 0, void 0, function () {
            var uniqueLinks, files, sortedLinks, separator, content, exist, p;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!preset) {
                            return [2 /*return*/, new obsidian.Notice(preset + " was not found. Try reloading Obsidian.")];
                        }
                        uniqueLinks = {};
                        files = this.app.vault.getMarkdownFiles();
                        files.forEach(function (f) {
                            if (_this.isExcluded(f, preset.excludeFromFilenames))
                                return;
                            _this.grabLinks(uniqueLinks, f, _this.app.metadataCache.getFileCache(f).links, preset);
                            if (preset.includeEmbeds) {
                                _this.grabLinks(uniqueLinks, f, _this.app.metadataCache.getFileCache(f).embeds, preset);
                            }
                        });
                        sortedLinks = Object.entries(uniqueLinks).sort(function (a, b) { return b[1].count - a[1].count; });
                        separator = preset.strictLineBreaks ? '\n\n' : '\n';
                        content = sortedLinks.map(function (l) { return l[1].count + " " + l[1].link; }).join(separator);
                        return [4 /*yield*/, this.app.vault.adapter.exists(obsidian.normalizePath(preset.path), false)];
                    case 1:
                        exist = _a.sent();
                        if (exist) {
                            p = this.app.vault.getAbstractFileByPath(obsidian.normalizePath(preset.path));
                            this.app.vault.adapter.write(obsidian.normalizePath(preset.path), content);
                        }
                        else {
                            this.app.vault.create(preset.path, content);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkIndexer.prototype.isExcluded = function (f, filenamePatterns) {
        return this.globalExcludes.find(function (g) { return pathEqual(g, f.path); }) || filenamePatterns.some(function (p) { return new RegExp(p).test(f.name); });
    };
    LinkIndexer.prototype.grabLinks = function (uniqueLinks, f, links, preset) {
        var _this = this;
        links === null || links === void 0 ? void 0 : links.forEach(function (l) {
            var link = obsidian.getLinkpath(l.link);
            var originFile = _this.app.metadataCache.getFirstLinkpathDest(link, f.path);
            if (originFile && (preset.nonexistentOnly || _this.isExcluded(originFile, preset.excludeToFilenames))) {
                return;
            }
            var origin = originFile ? originFile.path : link;
            if (uniqueLinks[origin]) {
                uniqueLinks[origin].count += 1;
            }
            else {
                var rawLink = originFile ? _this.app.metadataCache.fileToLinktext(originFile, preset.path, true) : link;
                uniqueLinks[origin] = {
                    count: 1,
                    link: preset.linkToFiles ? "[[" + rawLink + "]]" : rawLink
                };
            }
        });
    };
    return LinkIndexer;
}(obsidian.Plugin));
var UsedLinks = /** @class */ (function () {
    function UsedLinks() {
        this.strictLineBreaks = true;
        this.includeEmbeds = true;
        this.linkToFiles = true;
        this.nonexistentOnly = false;
        this.excludeToFilenames = [];
        this.excludeFromFilenames = [];
        this.name = Date.now().toString();
        this.path = "./used_links" + this.name + ".md";
    }
    return UsedLinks;
}());
var LinkIndexerSettings = /** @class */ (function () {
    function LinkIndexerSettings() {
        this.usedLinks = [];
    }
    return LinkIndexerSettings;
}());
function getPresetByName(presets, name) {
    return presets.find(function (r) { return r.name === name; });
}
var LinkIndexerSettingTab = /** @class */ (function (_super) {
    __extends(LinkIndexerSettingTab, _super);
    function LinkIndexerSettingTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkIndexerSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Used links' });
        plugin.settings.usedLinks.forEach(function (report) {
            new obsidian.Setting(containerEl)
                .setName('Preset name')
                .setDesc('Allowed characters: ASCII letters, digits, underscores, spaces')
                .addText(function (text) {
                return text.setPlaceholder(report.name)
                    .setPlaceholder(report.name)
                    .setValue(report.name)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.name = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('All used links')
                .setDesc('Path to the note that will contain all found links sorted by their occurrences')
                .addText(function (text) {
                return text
                    .setPlaceholder(report.path)
                    .setValue(report.path)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.path = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Include embeds')
                .setDesc('When disabled, only direct links are counted. Enable to include embedded (trascluded) links.')
                .addToggle(function (value) {
                return value
                    .setValue(report.includeEmbeds)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.includeEmbeds = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Nonexistent files only')
                .setDesc('When disabled, links to both existing and nonexisting files are counted.')
                .addToggle(function (value) {
                return value
                    .setValue(report.nonexistentOnly)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.nonexistentOnly = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Strict line breaks')
                .setDesc('Corresponds to the same Editor setting: "off" = one line break, "on" = two line breaks.')
                .addToggle(function (value) {
                return value
                    .setValue(report.strictLineBreaks)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.strictLineBreaks = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Link to files')
                .setDesc('When "on" the output file will use wiki-links to files. Disable if you don\'t want to pollute graph with it.')
                .addToggle(function (value) {
                return value
                    .setValue(report.linkToFiles)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.linkToFiles = value;
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Exclude links from files')
                .setDesc('Expects regex patterns. Checks for filename without path.')
                .addTextArea(function (text) {
                return text
                    .setValue(report.excludeFromFilenames.join('\n'))
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.excludeFromFilenames = value.split('\n').filter(function (v) { return v; });
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            new obsidian.Setting(containerEl)
                .setName('Exclude links to files')
                .setDesc('Expects regex patterns. Checks for filename without path.')
                .addTextArea(function (text) {
                return text
                    .setValue(report.excludeToFilenames.join('\n'))
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                report.excludeToFilenames = value.split('\n').filter(function (v) { return v; });
                                return [4 /*yield*/, this.saveData({ refreshUI: false })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            var deleteButton = new obsidian.Setting(containerEl).addButton(function (extra) {
                return extra.setButtonText('Delete preset').onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                    var index;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                index = plugin.settings.usedLinks.findIndex(function (r) { return r.name === report.name; });
                                if (!(index > -1)) return [3 /*break*/, 2];
                                plugin.settings.usedLinks.splice(index, 1);
                                return [4 /*yield*/, this.saveData()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
            });
            deleteButton.settingEl.style.borderBottom = '1px solid var(--text-accent)';
        });
        var addButton = new obsidian.Setting(containerEl).addButton(function (button) {
            return button.setButtonText('Add preset').onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.settings.usedLinks.push(new UsedLinks());
                            return [4 /*yield*/, this.saveData()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        addButton.infoEl.remove();
        addButton.settingEl.style.justifyContent = 'center';
    };
    LinkIndexerSettingTab.prototype.saveData = function (options) {
        if (options === void 0) { options = { refreshUI: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var plugin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        plugin = this.plugin;
                        return [4 /*yield*/, plugin.saveData(plugin.settings)];
                    case 1:
                        _a.sent();
                        plugin.reloadSettings();
                        if (options.refreshUI)
                            this.display();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LinkIndexerSettingTab;
}(obsidian.PluginSettingTab));
function pathEqual(a, b) {
    if (a === b)
        return true;
    return removeDots(obsidian.normalizePath(a)) === removeDots(obsidian.normalizePath(b));
}
function removeDots(value) {
    return value.replace(/\\/g, '/')
        .replace(/^\.\//, '')
        .replace(/\/\.\//, '/');
}

module.exports = LinkIndexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9janMuanMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG5cdGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2Vcblx0fVxuXHR2YXIgY3VzdG9tTWVyZ2UgPSBvcHRpb25zLmN1c3RvbU1lcmdlKGtleSk7XG5cdHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZVxufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xuXHRcdD8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpLmZpbHRlcihmdW5jdGlvbihzeW1ib2wpIHtcblx0XHRcdHJldHVybiB0YXJnZXQucHJvcGVydHlJc0VudW1lcmFibGUoc3ltYm9sKVxuXHRcdH0pXG5cdFx0OiBbXVxufVxuXG5mdW5jdGlvbiBnZXRLZXlzKHRhcmdldCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5jb25jYXQoZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKVxufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUlzT25PYmplY3Qob2JqZWN0LCBwcm9wZXJ0eSkge1xuXHR0cnkge1xuXHRcdHJldHVybiBwcm9wZXJ0eSBpbiBvYmplY3Rcblx0fSBjYXRjaChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cbn1cblxuLy8gUHJvdGVjdHMgZnJvbSBwcm90b3R5cGUgcG9pc29uaW5nIGFuZCB1bmV4cGVjdGVkIG1lcmdpbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcblx0cmV0dXJuIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuXHRcdCYmICEoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpIC8vIHVuc2FmZSBpZiB0aGV5IGV4aXN0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sXG5cdFx0XHQmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpIC8vIGFuZCBhbHNvIHVuc2FmZSBpZiB0aGV5J3JlIG5vbmVudW1lcmFibGUuXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG5cdFx0Z2V0S2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cdGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmIChwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cdG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0O1xuXHQvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG5cdC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblx0b3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkO1xuXG5cdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHR2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcblx0dmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG5cdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jylcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucylcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVlcG1lcmdlXzE7XG4iLCJpbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgeyBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFZhdWx0LCBub3JtYWxpemVQYXRoLCBURmlsZSwgZ2V0TGlua3BhdGgsIFJlZmVyZW5jZUNhY2hlLCBOb3RpY2UgfSBmcm9tICdvYnNpZGlhbic7XG5cbmludGVyZmFjZSBJbmRleE5vZGUge1xuICBjb3VudDogbnVtYmVyO1xuICBsaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtJbmRleGVyIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IExpbmtJbmRleGVyU2V0dGluZ3M7XG4gIHZhdWx0OiBWYXVsdDtcbiAgZ2xvYmFsRXhjbHVkZXM6IHN0cmluZ1tdXG5cbiAgb25Jbml0KCkge31cblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgY29uc3QgbG9hZGVkU2V0dGluZ3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgaWYgKGxvYWRlZFNldHRpbmdzKSB7XG4gICAgICB0aGlzLnNldHRpbmdzID0gZGVlcG1lcmdlKG5ldyBMaW5rSW5kZXhlclNldHRpbmdzKCksIGxvYWRlZFNldHRpbmdzKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MudXNlZExpbmtzID0gW107XG4gICAgICBsb2FkZWRTZXR0aW5ncy51c2VkTGlua3M/LmZvckVhY2goKHI6IFVzZWRMaW5rcykgPT4ge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZWRMaW5rcy5wdXNoKGRlZXBtZXJnZShuZXcgVXNlZExpbmtzKCksIHIpKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgTGlua0luZGV4ZXJTZXR0aW5ncygpO1xuICAgIH1cbiAgICB0aGlzLnJlbG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IExpbmtJbmRleGVyU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICBcbiAgfVxuXG4gIGFzeW5jIG9udW5sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICByZWxvYWRTZXR0aW5ncygpIHtcbiAgICB0aGlzLnJlbW92ZU93bkNvbW1hbmRzKCk7XG4gICAgdGhpcy5nbG9iYWxFeGNsdWRlcyA9IFtdO1xuICAgIHRoaXMuc2V0dGluZ3MudXNlZExpbmtzLmZvckVhY2goKHI6IFVzZWRMaW5rcykgPT4ge1xuICAgICAgdGhpcy5nbG9iYWxFeGNsdWRlcy5wdXNoKHIucGF0aCk7XG4gICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICBpZDogYGxpbmstaW5kZXhlcjp1c2VkLWxpbmtzOiR7ci5uYW1lfWAsXG4gICAgICAgIG5hbWU6IGBVc2VkIGxpbmtzIC0gJHtyLm5hbWV9YCxcbiAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IGF3YWl0IHRoaXMuZ2VuZXJhdGVBbGxVc2VkTGlua3NJbmRleChnZXRQcmVzZXRCeU5hbWUodGhpcy5zZXR0aW5ncy51c2VkTGlua3MsIHIubmFtZSkpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVPd25Db21tYW5kcygpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5hcHAuY29tbWFuZHMubGlzdENvbW1hbmRzKCkubWFwKChjKSA9PiBjLmlkKS5maWx0ZXIoKGMpID0+IGMuc3RhcnRzV2l0aCh0aGlzLm1hbmlmZXN0LmlkKSkuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmFwcC5jb21tYW5kcy5yZW1vdmVDb21tYW5kKGMpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2VuZXJhdGVBbGxVc2VkTGlua3NJbmRleChwcmVzZXQ6IFVzZWRMaW5rcykge1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICByZXR1cm4gbmV3IE5vdGljZShgJHtwcmVzZXR9IHdhcyBub3QgZm91bmQuIFRyeSByZWxvYWRpbmcgT2JzaWRpYW4uYCk7XG4gICAgfVxuICAgIGNvbnN0IHVuaXF1ZUxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBJbmRleE5vZGU+ID0ge307XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBmaWxlcy5mb3JFYWNoKChmKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0V4Y2x1ZGVkKGYsIHByZXNldC5leGNsdWRlRnJvbUZpbGVuYW1lcykpIHJldHVybjtcbiAgICAgIHRoaXMuZ3JhYkxpbmtzKHVuaXF1ZUxpbmtzLCBmLCB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKS5saW5rcywgcHJlc2V0KVxuICAgICAgaWYgKHByZXNldC5pbmNsdWRlRW1iZWRzKSB7XG4gICAgICAgIHRoaXMuZ3JhYkxpbmtzKHVuaXF1ZUxpbmtzLCBmLCB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKS5lbWJlZHMsIHByZXNldClcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzb3J0ZWRMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHVuaXF1ZUxpbmtzKS5zb3J0KChhLCBiKSA9PiBiWzFdLmNvdW50IC0gYVsxXS5jb3VudCk7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gcHJlc2V0LnN0cmljdExpbmVCcmVha3MgPyAnXFxuXFxuJyA6ICdcXG4nO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzb3J0ZWRMaW5rcy5tYXAoKGwpID0+IGAke2xbMV0uY291bnR9ICR7bFsxXS5saW5rfWApLmpvaW4oc2VwYXJhdG9yKTtcbiAgICBjb25zdCBleGlzdCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZXhpc3RzKG5vcm1hbGl6ZVBhdGgocHJlc2V0LnBhdGgpLCBmYWxzZSk7XG4gICAgaWYgKGV4aXN0KSB7XG4gICAgICBjb25zdCBwID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZVBhdGgocHJlc2V0LnBhdGgpKTtcbiAgICAgIHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIud3JpdGUobm9ybWFsaXplUGF0aChwcmVzZXQucGF0aCksIGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcC52YXVsdC5jcmVhdGUocHJlc2V0LnBhdGgsIGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlzRXhjbHVkZWQoZjogVEZpbGUsIGZpbGVuYW1lUGF0dGVybnM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsRXhjbHVkZXMuZmluZCgoZykgPT4gcGF0aEVxdWFsKGcsIGYucGF0aCkpIHx8IGZpbGVuYW1lUGF0dGVybnMuc29tZSgocCkgPT4gbmV3IFJlZ0V4cChwKS50ZXN0KGYubmFtZSkpO1xuICB9XG5cbiAgZ3JhYkxpbmtzKHVuaXF1ZUxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBJbmRleE5vZGU+LCBmOiBURmlsZSwgbGlua3M6IFJlZmVyZW5jZUNhY2hlW10sIHByZXNldDogVXNlZExpbmtzKSB7XG4gICAgbGlua3M/LmZvckVhY2goKGwpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBnZXRMaW5rcGF0aChsLmxpbmspO1xuICAgICAgY29uc3Qgb3JpZ2luRmlsZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QobGluaywgZi5wYXRoKTtcbiAgICAgIGlmIChvcmlnaW5GaWxlICYmIChwcmVzZXQubm9uZXhpc3RlbnRPbmx5IHx8IHRoaXMuaXNFeGNsdWRlZChvcmlnaW5GaWxlLCBwcmVzZXQuZXhjbHVkZVRvRmlsZW5hbWVzKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luID0gb3JpZ2luRmlsZSA/IG9yaWdpbkZpbGUucGF0aCA6IGxpbms7XG4gICAgICBpZiAodW5pcXVlTGlua3Nbb3JpZ2luXSkge1xuICAgICAgICB1bmlxdWVMaW5rc1tvcmlnaW5dLmNvdW50ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByYXdMaW5rID0gb3JpZ2luRmlsZSA/IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZmlsZVRvTGlua3RleHQob3JpZ2luRmlsZSwgcHJlc2V0LnBhdGgsIHRydWUpIDogbGluaztcbiAgICAgICAgdW5pcXVlTGlua3Nbb3JpZ2luXSA9IHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBsaW5rOiBwcmVzZXQubGlua1RvRmlsZXMgPyBgW1ske3Jhd0xpbmt9XV1gIDogcmF3TGlua1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIFVzZWRMaW5rcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBzdHJpY3RMaW5lQnJlYWtzID0gdHJ1ZTtcbiAgaW5jbHVkZUVtYmVkcyA9IHRydWU7XG4gIGxpbmtUb0ZpbGVzID0gdHJ1ZTtcbiAgbm9uZXhpc3RlbnRPbmx5ID0gZmFsc2U7XG4gIGV4Y2x1ZGVUb0ZpbGVuYW1lczogc3RyaW5nW10gPSBbXTtcbiAgZXhjbHVkZUZyb21GaWxlbmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgIHRoaXMucGF0aCA9IGAuL3VzZWRfbGlua3Mke3RoaXMubmFtZX0ubWRgO1xuICB9XG59XG5cbmNsYXNzIExpbmtJbmRleGVyU2V0dGluZ3Mge1xuICB1c2VkTGlua3M6IFVzZWRMaW5rc1tdID0gW107XG59XG5cbnR5cGUgUHJlc2V0ID0gVXNlZExpbmtzO1xuXG5mdW5jdGlvbiBnZXRQcmVzZXRCeU5hbWUocHJlc2V0czogUHJlc2V0W10sIG5hbWU6IHN0cmluZyk6IFByZXNldCB7XG4gIHJldHVybiBwcmVzZXRzLmZpbmQoKHIpID0+IHIubmFtZSA9PT0gbmFtZSk7XG59XG5cbmNsYXNzIExpbmtJbmRleGVyU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBsdWdpbjogTGlua0luZGV4ZXIgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ1VzZWQgbGlua3MnfSk7XG5cbiAgICBwbHVnaW4uc2V0dGluZ3MudXNlZExpbmtzLmZvckVhY2goKHJlcG9ydCkgPT4ge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKCdQcmVzZXQgbmFtZScpXG4gICAgICAgIC5zZXREZXNjKCdBbGxvd2VkIGNoYXJhY3RlcnM6IEFTQ0lJIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMsIHNwYWNlcycpXG4gICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiBcbiAgICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKHJlcG9ydC5uYW1lKVxuICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKHJlcG9ydC5uYW1lKVxuICAgICAgICAgICAgLnNldFZhbHVlKHJlcG9ydC5uYW1lKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJlcG9ydC5uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoeyByZWZyZXNoVUk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZSgnQWxsIHVzZWQgbGlua3MnKVxuICAgICAgICAuc2V0RGVzYygnUGF0aCB0byB0aGUgbm90ZSB0aGF0IHdpbGwgY29udGFpbiBhbGwgZm91bmQgbGlua3Mgc29ydGVkIGJ5IHRoZWlyIG9jY3VycmVuY2VzJylcbiAgICAgICAgLmFkZFRleHQoKHRleHQpID0+IFxuICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihyZXBvcnQucGF0aClcbiAgICAgICAgICAgIC5zZXRWYWx1ZShyZXBvcnQucGF0aClcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgcmVwb3J0LnBhdGggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh7IHJlZnJlc2hVSTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLnNldE5hbWUoJ0luY2x1ZGUgZW1iZWRzJylcbiAgICAgICAgLnNldERlc2MoJ1doZW4gZGlzYWJsZWQsIG9ubHkgZGlyZWN0IGxpbmtzIGFyZSBjb3VudGVkLiBFbmFibGUgdG8gaW5jbHVkZSBlbWJlZGRlZCAodHJhc2NsdWRlZCkgbGlua3MuJylcbiAgICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAuc2V0VmFsdWUocmVwb3J0LmluY2x1ZGVFbWJlZHMpXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHJlcG9ydC5pbmNsdWRlRW1iZWRzID0gdmFsdWU7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoeyByZWZyZXNoVUk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIFxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKCdOb25leGlzdGVudCBmaWxlcyBvbmx5JylcbiAgICAgICAgLnNldERlc2MoJ1doZW4gZGlzYWJsZWQsIGxpbmtzIHRvIGJvdGggZXhpc3RpbmcgYW5kIG5vbmV4aXN0aW5nIGZpbGVzIGFyZSBjb3VudGVkLicpXG4gICAgICAgIC5hZGRUb2dnbGUoKHZhbHVlKSA9PiBcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgLnNldFZhbHVlKHJlcG9ydC5ub25leGlzdGVudE9ubHkpXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHJlcG9ydC5ub25leGlzdGVudE9ubHkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh7IHJlZnJlc2hVSTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG5cbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZSgnU3RyaWN0IGxpbmUgYnJlYWtzJylcbiAgICAgICAgLnNldERlc2MoJ0NvcnJlc3BvbmRzIHRvIHRoZSBzYW1lIEVkaXRvciBzZXR0aW5nOiBcIm9mZlwiID0gb25lIGxpbmUgYnJlYWssIFwib25cIiA9IHR3byBsaW5lIGJyZWFrcy4nKVxuICAgICAgICAuYWRkVG9nZ2xlKCh2YWx1ZSkgPT4gXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIC5zZXRWYWx1ZShyZXBvcnQuc3RyaWN0TGluZUJyZWFrcylcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgcmVwb3J0LnN0cmljdExpbmVCcmVha3MgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh7IHJlZnJlc2hVSTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLnNldE5hbWUoJ0xpbmsgdG8gZmlsZXMnKVxuICAgICAgICAuc2V0RGVzYygnV2hlbiBcIm9uXCIgdGhlIG91dHB1dCBmaWxlIHdpbGwgdXNlIHdpa2ktbGlua3MgdG8gZmlsZXMuIERpc2FibGUgaWYgeW91IGRvblxcJ3Qgd2FudCB0byBwb2xsdXRlIGdyYXBoIHdpdGggaXQuJylcbiAgICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAuc2V0VmFsdWUocmVwb3J0LmxpbmtUb0ZpbGVzKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICByZXBvcnQubGlua1RvRmlsZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh7IHJlZnJlc2hVSTogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgLnNldE5hbWUoJ0V4Y2x1ZGUgbGlua3MgZnJvbSBmaWxlcycpXG4gICAgICAgIC5zZXREZXNjKCdFeHBlY3RzIHJlZ2V4IHBhdHRlcm5zLiBDaGVja3MgZm9yIGZpbGVuYW1lIHdpdGhvdXQgcGF0aC4nKVxuICAgICAgICAuYWRkVGV4dEFyZWEoKHRleHQpID0+IFxuICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIC5zZXRWYWx1ZShyZXBvcnQuZXhjbHVkZUZyb21GaWxlbmFtZXMuam9pbignXFxuJykpXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHJlcG9ydC5leGNsdWRlRnJvbUZpbGVuYW1lcyA9IHZhbHVlLnNwbGl0KCdcXG4nKS5maWx0ZXIoKHYpID0+IHYpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHsgcmVmcmVzaFVJOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICBcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZSgnRXhjbHVkZSBsaW5rcyB0byBmaWxlcycpXG4gICAgICAgIC5zZXREZXNjKCdFeHBlY3RzIHJlZ2V4IHBhdHRlcm5zLiBDaGVja3MgZm9yIGZpbGVuYW1lIHdpdGhvdXQgcGF0aC4nKVxuICAgICAgICAuYWRkVGV4dEFyZWEoKHRleHQpID0+IFxuICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIC5zZXRWYWx1ZShyZXBvcnQuZXhjbHVkZVRvRmlsZW5hbWVzLmpvaW4oJ1xcbicpKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICByZXBvcnQuZXhjbHVkZVRvRmlsZW5hbWVzID0gdmFsdWUuc3BsaXQoJ1xcbicpLmZpbHRlcigodikgPT4gdik7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEoeyByZWZyZXNoVUk6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIFxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLmFkZEJ1dHRvbigoZXh0cmEpID0+IHtcbiAgICAgICAgcmV0dXJuIGV4dHJhLnNldEJ1dHRvblRleHQoJ0RlbGV0ZSBwcmVzZXQnKS5vbkNsaWNrKGFzeW5jKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGx1Z2luLnNldHRpbmdzLnVzZWRMaW5rcy5maW5kSW5kZXgoKHIpID0+IHIubmFtZSA9PT0gcmVwb3J0Lm5hbWUpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MudXNlZExpbmtzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlQnV0dG9uLnNldHRpbmdFbC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIHZhcigtLXRleHQtYWNjZW50KSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIHJldHVybiBidXR0b24uc2V0QnV0dG9uVGV4dCgnQWRkIHByZXNldCcpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICBwbHVnaW4uc2V0dGluZ3MudXNlZExpbmtzLnB1c2gobmV3IFVzZWRMaW5rcygpKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBhZGRCdXR0b24uaW5mb0VsLnJlbW92ZSgpO1xuICAgIGFkZEJ1dHRvbi5zZXR0aW5nRWwuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgfVxuXG4gIGFzeW5jIHNhdmVEYXRhKG9wdGlvbnMgPSB7IHJlZnJlc2hVSTogdHJ1ZSB9KSB7XG4gICAgY29uc3QgcGx1Z2luOiBMaW5rSW5kZXhlciA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuICAgIGF3YWl0IHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuICAgIHBsdWdpbi5yZWxvYWRTZXR0aW5ncygpO1xuICAgIGlmIChvcHRpb25zLnJlZnJlc2hVSSkgdGhpcy5kaXNwbGF5KCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBwYXRoRXF1YWwoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlXG5cbiAgcmV0dXJuIHJlbW92ZURvdHMobm9ybWFsaXplUGF0aChhKSkgPT09IHJlbW92ZURvdHMobm9ybWFsaXplUGF0aChiKSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRG90cyh2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXFxcL2csICcvJylcbiAgICAucmVwbGFjZSgvXlxcLlxcLy8sICcnKVxuICAgIC5yZXBsYWNlKC9cXC9cXC5cXC8vLCAnLycpXG59XG4iXSwibmFtZXMiOlsiZGVlcG1lcmdlIiwiTm90aWNlIiwibm9ybWFsaXplUGF0aCIsImdldExpbmtwYXRoIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FB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

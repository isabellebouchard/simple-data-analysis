import clone_ from "../methods/clone.js"
import renameKey_ from "../methods/renameKey.js"
import describe_ from "../methods/describe.js"
import formatAllKeys_ from "../methods/formatAllKeys.js"
import getArray_ from "../methods/getArray.js"
import showTable_ from "../methods/showTable.js"
import checkValues_ from "../methods/checkValues.js"
import excludeMissingValues_ from "../methods/excludeMissingValues.js"
import removeKey_ from "../methods/removeKey.js"
import valuesToString_ from "../methods/valuesToString.js"
import valuesToInteger_ from "../methods/valuesToInteger.js"
import valuesToFloat_ from "../methods/valuesToFloat.js"
import valuesToDate_ from "../methods/valuesToDate.js"
import datesToString_ from "../methods/datesToString.js"
import filterValues_ from "../methods/filterValues.js"
import filterItems_ from "../methods/filterItems.js"
import roundValues_ from "../methods/roundValues.js"
import replaceValues_ from "../methods/replaceValues.js"
import addKey_ from "../methods/addKey.js"
import modifyValues_ from "../methods/modifyValues.js"
import modifyItems_ from "../methods/modifyItems.js"
import sortValues_ from "../methods/sortValues.js"
import addQuantiles_ from "../methods/addQuantiles.js"
import addBins_ from "../methods/addBins.js"
import addOutliers_ from "../methods/addOutliers.js"
import excludeOutliers_ from "../methods/excludeOutliers.js"
import correlation_ from "../methods/correlation.js"
import addItems_ from "../methods/addItems.js"
import getUniqueValues_ from "../methods/getUniqueValues.js"
import summarize_ from "../methods/summarize.js"
import { SimpleDataItem, Options, defaultOptions } from "../types.js"
import checkKeys from "../helpers/checkKeys.js"


export default class SimpleData {

    data: SimpleDataItem[]
    keys: string[]
    defaultOptions: Options

    constructor(incomingData: SimpleDataItem[], options?: Options) {
        checkKeys(incomingData)
        this.data = incomingData
        this.keys = Object.keys(incomingData[0])
        this.defaultOptions = options === undefined ? defaultOptions : options
    }

    setDefaultOptions(options: Options) {
        this.defaultOptions = { ...this.defaultOptions, ...options }
        return this
    }

    clone(options: Options) {
        return clone_(this.data, this.defaultOptions, { ...this.defaultOptions, ...options })
    }

    getArray(key: string, options: Options) {
        return getArray_(this.data, key, { ...this.defaultOptions, ...options })
    }

    getData() {
        return this.data
    }

    getKeys() {
        return this.keys
    }

    getUniqueValues(key: string, options: Options) {
        return getUniqueValues_(this.data, key, { ...this.defaultOptions, ...options })
    }

    checkValues(options: Options) {
        checkValues_(this.data, { ...this.defaultOptions, ...options })
        return this
    }

    excludeMissingValues(key: "onAllItems" | string, options: Options) {
        this.data = excludeMissingValues_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    describe(options: Options) {
        this.data = describe_(this.data, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    renameKey(oldKey: string, newKey: string, options: Options) {
        this.data = renameKey_(this.data, oldKey, newKey, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    removeKey(key: string, options: Options) {
        this.data = removeKey_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    addKey(key: string, func: Function, options: Options) {
        this.data = addKey_(this.data, key, func, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    modifyValues(key: string, func: Function, options: Options) {
        this.data = modifyValues_(this.data, key, func, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    modifyItems(key: string, func: Function, options: Options) {
        this.data = modifyItems_(this.data, key, func, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    formatAllKeys(options: Options) {
        this.data = formatAllKeys_(this.data, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    valuesToString(key: string, options: Options) {
        this.data = valuesToString_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    valuesToInteger(key: string, options: Options) {
        this.data = valuesToInteger_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    valuesToFloat(key: string, options: Options) {
        this.data = valuesToFloat_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    valuesToDate(key: string, format: string, options: Options) {
        this.data = valuesToDate_(this.data, key, format, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    datesToString(key: string, format: string, options: Options) {
        this.data = datesToString_(this.data, key, format, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    filterValues(key: string, func: Function, options: Options) {
        this.data = filterValues_(this.data, key, func, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    filterItems(func: Function, options: Options) {
        this.data = filterItems_(this.data, func, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    roundValues(key: string, options: Options) {
        this.data = roundValues_(this.data, key, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    replaceValues(key: string, oldValue: string, newValue: string, method: "entireString" | "partialString", options: Options) {
        this.data = replaceValues_(this.data, key, oldValue, newValue, method, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    sortValues(key: string, order: "ascending" | "descending", options: Options) {
        this.data = sortValues_(this.data, key, order, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    addQuantiles(key: "string", newKey: "string", nbIntervals: number, options: Options) {
        this.data = addQuantiles_(this.data, key, newKey, nbIntervals, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    addBins(key: "string", newKey: "string", nbBins: number, options: Options) {
        this.data = addBins_(this.data, key, newKey, nbBins, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    addOutliers(key: "string", newKey: "string", method: "boxplot", options: Options) {
        this.data = addOutliers_(this.data, key, newKey, method, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    excludeOutliers(key: "string", method: "boxplot", options: Options) {
        this.data = excludeOutliers_(this.data, key, method, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    correlation(key1: string, key2: string, options: Options) {
        this.data = correlation_(this.data, key1, key2, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    addItems(dataToBeAdded: SimpleDataItem[], options: Options) {
        this.data = addItems_(this.data, dataToBeAdded, { ...this.defaultOptions, ...options })
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    summarize(value?: string, key?: string, summary?: any, weight?: string, options?: Options) {
        // Note that the parameters are in different order below
        this.data = summarize_(
            this.data,
            key === undefined ? "no key" : key,
            // Everything except weightedMean
            summary === undefined ? ["count", "min", "max", "sum", "mean", "median", "deviation"] : summary,
            value === undefined ? this.keys : value,
            weight === undefined ? "no weight" : weight,
            { ...this.defaultOptions, ...options }
        )
        this.keys = this.data[0] === undefined ? [] : Object.keys(this.data[0])
        return this
    }

    showTable(options: Options) {
        showTable_(this.data, { ...this.defaultOptions, ...options })
        return this
    }

}
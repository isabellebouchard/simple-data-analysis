import { SimpleDataItem, Options, defaultOptions } from "../types.js"
import showTable from "./showTable.js"
import getArray from "./getArray.js"
import percentage from "../helpers/percentage.js"

export default function checkValues(data: SimpleDataItem[], options: Options): SimpleDataItem[] {

    options = {
        ...defaultOptions,
        ...options
    }

    options.logs && console.log("\ncheckValues()", options)

    // all items must have the same keys
    const keys = Object.keys(data[0])

    if (options.nbItemInTable !== keys.length) {
        options.logs && console.log(`overwriting nbItemInTable=${options.nbItemInTable} by the number of keys (${keys.length})`)
    }

    const allChecks: any[] = []


    for (let key of keys) {
        const checks: { [key: string]: any } = {}
        checks["key"] = key

        const array = getArray(data, key)

        checks["count"] = array.length

        const uniques = array.filter((d, i) => array.indexOf(d) === i)
        // because NaN is ignored in the line above. And we need to pass it as a string otherwise it will be ignored again.
        if (array.includes(NaN)) {
            uniques.push("NaN")
        }
        checks["uniques"] = uniques.length

        // We declare them first so they are positionned before the others types.
        checks["string"] = 0
        checks["number"] = 0

        for (let i = 0; i < array.length; i++) {

            let typeOf

            if (array[i] === undefined) {
                typeOf = "undefined"
            } else if (array[i] === null) {
                typeOf = "null"
            } else if (Number.isNaN(array[i])) {
                typeOf = "NaN"
            } else {
                typeOf = typeof array[i]
            }


            if (!checks.hasOwnProperty(typeOf)) {
                checks[typeOf] = 1
            } else {
                //@ts-ignore
                checks[typeOf] += 1
            }
        }

        for (let key of Object.keys(checks)) {
            if (key !== "key" && key != "count" && checks[key] !== 0) {
                checks[key] = [checks[key], percentage(checks[key], checks.count, options)]
            }
        }

        allChecks.push(checks)
    }

    options.logs && showTable(allChecks, options)

    return data
}
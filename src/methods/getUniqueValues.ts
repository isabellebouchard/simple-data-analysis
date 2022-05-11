import log from "../helpers/log.js"
import { SimpleDataItem, Options, defaultOptions } from "../types.js"

export default function getUniqueValues(data: SimpleDataItem[], key: string, options?: Options): any[] {

    const start = Date.now()

    options = {
        ...defaultOptions,
        ...options
    }

    options.logs && console.log("\ngetUniqueValues " + key)
    options.logOptions && log("options:")
    options.logOptions && log(options)


    if (!data[0].hasOwnProperty(key)) {
        throw new Error(`No key ${key} in data`)
    }

    const uniques = [...new Set(data.map(d => d[key]))]

    options.logs && log(uniques)

    const end = Date.now()
    options.logs && log(`Done in ${((end - start) / 1000).toFixed(3)} sec.`)

    return uniques
}
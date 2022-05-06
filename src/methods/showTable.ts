import { Options, SimpleDataItem, defaultOptions } from "../types.js"

export default function showTable(data: SimpleDataItem[], options: Options) {

    options = {
        ...defaultOptions,
        ...options
    }

    // options.logs && console.log("showTable()", options)

    console.table(data.slice(0, options.nbItemInTable))
    data.length - options.nbItemInTable > 0 && console.log(`... and ${data.length - options.nbItemInTable} more items (total of ${data.length})`)
}
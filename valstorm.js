import { group } from "d3-array";

export const grouppChartDara = (data, settings) => {
    const groupByKey = settings.y[0].key;

    const result= [];

    const groupedData = {}; // will have a key of the groupByKey value
    const countData = {}; // unknown yet

    data.forEach(record => {    // a record will hold all fields, we need to isolate the groupByKey field
        const groupValue = record[groupByKey];  // groupValue will be a specific date in this instance
        const groupObj = {};                   // we will store the key of the xField and the value of the count for each of the records which it matches with
        settings.x.forEach(xfield => {          // need to loop through each of the x settings for each record to look at all fields
            const xKey = xfield.key;            // xKey will be string key for the specific field we are looking at (not the value of the record)

            // if (!groupedData[groupValue]) {     // if the groupValue is not already in groupedData
            //     groupObj[xKey] = settings.aggregate === "Median" ? [] : 0;
            //     if (settings.aggregate === "Average") {
            //         countData[groupValue] = 0;
            //     }
            // }
            if (settings.aggregate === "Count") {
                groupObj[xKey] = groupObj[xKey] ? groupObj[xKey] + 1 : 1;
            }
        })
        if (!groupedData[groupValue]) {
            groupedData[groupValue] = groupObj;
        } else {
            Object.keys(groupObj).forEach(key => {
                groupedData[groupValue][key] = groupedData[groupValue][key] + groupObj[key];
            })
        }
    })

    Object.keys(groupedData).forEach(groupValue => {
        const groupObj = groupedData[groupValue];       // object which holds name with val and phone number with val
        const resultObj = { [groupByKey]: groupValue };

        Object.keys(groupObj).forEach(key => {
            resultObj[key] = groupObj[key];
        })
        result.push(resultObj);
    })
    return result;
}

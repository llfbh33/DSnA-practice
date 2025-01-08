export const groupChartData = (data, settings, schema) => {
    console.log('data', data);
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
            if (settings.aggregate === "Sum" || settings.aggregate === "Average") {
                groupObj[xKey] = groupObj[xKey] ? groupObj[xKey] + record[xKey] : record[xKey];
                if (settings.aggregate === "Average") {
                    countData[groupValue] ? countData[groupValue] += 1 : countData[groupValue] = 1;
                }
            }
            if (settings.aggregate === 'Min') {
                groupObj[xKey] = groupObj[xKey] ? Math.min(groupObj[xKey], record[xKey]) : record[xKey];
            }
            if (settings.aggregate === 'Max') {
                groupObj[xKey] = groupObj[xKey] ? Math.max(groupObj[xKey], record[xKey]) : record[xKey];
            }

            console.log('help')
        });

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


        if (settings.aggregate === "Average") {
            Object.keys(groupObj).forEach(key => {
                resultObj[key] = groupObj[key] / countData[groupValue].toFixed(2);
            })
            console.log('resultObj', resultObj);
            result.push(resultObj);
        } else {
            Object.keys(groupObj).forEach(key => {
                resultObj[key] = groupObj[key];
            })
            result.push(resultObj);
        }
    });
    console.log('result', result);
    return result;
}




// 0
// :
// {id: '1aa74613-3048-4ecc-8ed3-f1bd7c13d524', name: 'Jennifer Nguyen', created_date: '2024-04-14T09:00:01.354000', modified_date: '2024-10-22T01:38:50.606000', created_by: 'concern', …}
// 1
// :
// {id: 'ba3ac794-63f9-461d-b811-5da765c377c5', name: 'Daniel Thompson', created_date: '2024-05-06T15:57:26.634000', modified_date: '2024-10-07T01:22:24.027000', created_by: 'after', …}
// 2
// :
// {id: 'b4af4ff4-06fc-422f-a425-8dfb4ba1d2c0', name: 'Caitlyn Nguyen', created_date: '2024-02-29T11:26:46.435000', modified_date: '2024-05-03T12:43:24.771000', created_by: 'development', …}
// 3
// :
// {id: '718987bf-67a1-4e5d-ba85-7a47319a6103', name: 'Robert Perkins', created_date: '2024-06-29T23:10:28.252000', modified_date: '2024-06-10T16:11:36.775000', created_by: 'second', …}
// 4
// :
// {id: '8734e0a4-44f3-4e29-9f02-ab939b821214', name: 'Ashley Clark', created_date: '2024-07-28T15:18:25.485000', modified_date: '2024-03-11T18:05:43.880000', created_by: 'name', …}
// 5
// :
// {id: '4f728e33-2c90-4b2e-84c7-de976286a3cd', name: 'Thomas Garcia', created_date: '2024-02-03T02:39:16.051000', modified_date: '2024-09-17T09:36:05.219000', created_by: 'real', …}
// 6
// :
// {id: 'bdfc6cc9-57cc-4feb-99fd-deb9f9406c61', name: 'Garrett Kennedy', created_date: '2024-08-11T11:44:16.929000', modified_date: '2024-04-28T19:31:19.666000', created_by: 'material', …}
// 7
// :
// {id: '92d2e271-3e2d-495a-90a5-bf5f7ef381d0', name: 'Alyssa Hoover', created_date: '2023-11-16T10:11:15.010000', modified_date: '2024-04-27T08:42:55.488000', created_by: 'change', …}
// 8
// :
// {id: '4f0e3cf1-40f0-4b2b-aa1e-d734fa48602b', name: 'Ashley Gallagher', created_date: '2024-05-09T03:36:19.462000', modified_date: '2023-12-17T13:40:20.873000', created_by: 'nice', …}
// 9
// :
// {id: '22ac4b44-2ab9-4555-9099-b9d270555ade', name: 'Sarah Schneider', created_date: '2024-03-13T20:22:28.607000', modified_date: '2024-01-30T07:01:38.049000', created_by: 'phone', …}
// length
// :
// 10






import os
import json
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

ENV = os.getenv("ENV")
ORG_ID = os.getenv("ORG_ID")
VALSTORM_API_KEY = os.getenv("VALSTORM_API_KEY")
SLACK_TOKEN = os.getenv('SLACK_TOKEN')
MONGO_USER = os.getenv('MONGO_USER')
MONGO_PORT = os.getenv('MONGO_PORT')
MONGO_HOST_PROD = os.getenv('MONGO_HOST_PROD')
MONGO_PASSWORD_PROD = os.getenv('MONGO_PASSWORD_PROD')

MONGODB_URI_PROD = f"mongodb+srv://{MONGO_USER}:{MONGO_PASSWORD_PROD}@{MONGO_HOST_PROD}/?authSource=admin"
prod_client = MongoClient(MONGODB_URI_PROD)



prod_databases = prod_client.list_database_names()
prod_databases

interested_dbs = []
exclude = ['admin', 'config', 'local']
for db in prod_databases:
    if db not in exclude:
        interested_dbs.append(db)

interested_dbs




# Define the output directory for JSON files
output_dir = os.path.join("dev-xp", "exported_data")
os.makedirs(output_dir, exist_ok=True)

# Loop through each database in production
for db_name in interested_dbs:
    if db_name == 'b1049643-b61e-48b4-8df0-8de50c96446b':
        continue

    print(f"Copying database: {db_name}")

    # Access the database from production and development
    prod_db = prod_client[db_name]
    # dev_db = dev_client[db_name]

    # Get the list of collections in the production database
    prod_collections = prod_db.list_collection_names()

    # Loop through each collection in the production database
    for collection_name in prod_collections:
        if collection_name in skip or collection_name.startswith('salesforce') or collection_name.startswith('market data'):
            continue
        print(f"  Copying collection: {collection_name}")

        # Access the production and development collections
        prod_collection = prod_db[collection_name]
        # dev_collection = dev_db[collection_name]

        # Drop the collection in the development database before copying (optional)
        # dev_collection.drop()

        # Copy all documents from production to development
        documents = list(prod_collection.find())

        # Convert ObjectId to string for JSON serialization
        for doc in documents:
            if "_id" in doc:
                doc["_id"] = str(doc["_id"])

        # Define the output file path
        output_file = os.path.join(output_dir, f"{db_name}_{collection_name}.json")    


        # if len(documents) > 0:
        #     dev_collection.insert_many(documents) # this code should change to create a file and add JSON data

        print(f"  Copied {prod_collection.count_documents({})} documents")

print("Data copy complete!")
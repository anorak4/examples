import json

def handler(event, context):
    input = event['queryStringParameters']['input']
    return {
        "statusCode": 200,
        "body": json.dumps('Cheers from AWS Lambda!!'+str(input))
    }

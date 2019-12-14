from twilio.rest import Client
accountSID = 'AC9237135ac449bfb3ea9ba7277d621f02'
authToken = '43cd2e464ca1b4428fd48884521d7589'

twilioNumber = '+19544177707'
myNumber = #enter your number you linked with twilio

def textmyself(message):
    twilioCli= TwilioRestClient(accountSID, authToken)
    twilioCli.message.create(body = message, from_ = twilioNumber, to = myNumber)

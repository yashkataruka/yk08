from twilio.rest import Client
accountSID = 'AC9237135ac449bfb3ea9ba7277d621f02'
authToken = '43cd2e464ca1b4428fd48884521d7589'

twilioCli = Client(accountSID, authToken)
myTwilioNumber = '+19544177707'
myCellPhone = #enter your number as a string
message = twilioCli.messages.create(body = 'Yash Kataruka', from_ = myTwilioNumber, to = myCellPhone)
print(message)
print(message.to)
print(message.from_)
print(message.body)
print(message.status)
print(message.date_created)
print(message.date_sent == None)
print(message.sid)

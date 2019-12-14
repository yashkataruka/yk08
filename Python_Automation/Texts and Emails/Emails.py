import smtplib
#smtpobj = smtplib.SMTP('smtp.gmail.com', 587)
#print(type(smtpobj))
#a = smtpobj.ehlo()
#print(a)
#b = smtpobj.starttls()
#print(b)
#c = smtpobj.login(#enter your email,#enter your password)
#print(c)
#smtpobj.sendmail('rockstaryash8@gmail.com',['yashkataruka08@gmail.com','yashkumar.kataruka2017@vit.ac.in'],'Subject: Hey there!This is the subject.\nAutomation of gmail using python script 101')
#d = smtpobj.quit()
#print(d)



import imapclient
import imaplib
imaplib._MAXLINE = 10000000
a = imapobj = imapclient.IMAPClient('imap.gmail.com', ssl = True)
#print(a)
b = imapobj.login(#enter your email,#enter your password)
#print(b)
#print(imapobj.list_folders())
imapobj.select_folder('INBOX', readonly = False)
#UID1 = imapobj.search(['ON' ,'05-Jul-2015'])
#print(UID1)
#UID2 = imapobj.search(['FROM' ,'yashkataruka08@gmail.com'])
#UID3 = imapobj.gmail_search('vidyamandir')
#rawmessages1 = imapobj.fetch(UID1, ['BODY[]'])
#rawmessages2 = imapobj.fetch(UID2, ['BODY[]'])
#rawmessages3 = imapobj.fetch(UID3, ['BODY[]'])
#print('%s messages on 5th July 2015' %(len(UID1)))
#print('%s messages from Yash Kataruka' %(len(UID2)))
#print('%s messages from vidyamandir search' %(len(UID3)))
#import pprint
#pprint.pprint(rawmessages1)
#print('\n\n\n\n\n\n\n\n')
#pprint.pprint(rawmessages2)
#print('\n\n\n\n\n\n\n\n')
#pprint.pprint(rawmessages3)
#import pyzmail
#for i in range(len(UID1)):
 #   message = pyzmail.PyzMessage.factory(rawmessages1[UID1[i]][b'BODY[]'])
  #  print('Subject: %s' %(message.get_subject()))
   # print('From: %s' %(message.get_addresses('from')))
    #print('To: %s' %(message.get_addresses('to')))
    #print('CC: %s' %(message.get_addresses('cc')))
    #print('BCC: %s' %(message.get_addresses('bcc')))
    #if message.text_part != None:
     #   print('IT HAS TEXT PART')
      #  print(message.text_part.get_payload().decode(message.text_part.charset))
    #if message.html_part != None:
     #   print('IT HAS HTML PART')
      #  print(message.html_part.get_payload().decode(message.html_part.charset))
    #print('\n\n\n\n')
#UIDdelete = imapobj.search(['ON','01-Jul-2019'])
#print(UIDdelete)
#print(imapobj.delete_messages(UIDdelete))
#print(imapobj.expunge())
imapobj.logout()

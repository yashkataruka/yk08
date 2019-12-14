import os,zipfile
import time
exampleZip = zipfile.ZipFile('example.zip')
#exampleZip1 = zipfile.ZipFile('example1.zip','w')
#print(exampleZip.namelist())
#spamInfo = exampleZip.getinfo('spam.txt')
#print(spamInfo.file_size)
#print(spamInfo.compress_size)
#exampleZip.close()
#exampleZip.extractall()
#exampleZip.close()
#exampleZip.extractall('C:\\users\\yashk\\Desktop\\TBDlater')
#time.sleep(5)
#import send2trash
#send2trash.send2trash('C:\\users\\yashk\\Desktop\\TBDlater')
#exampleZip.close()
newZip = zipfile.ZipFile('OS.zip','w')
newZip.write('os.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()

import os
import shutil
import time
import send2trash
#shutil.copy('D:\\KolkataBright\\Logo\\AB.jpg','C:\\users\\yashk\\Desktop')
#shutil.copytree('D:\\KolkataBright\\Logo','C:\\users\\yashk\\Desktop\\TBD')
#shutil.move('D:\\KolkataBright\\Logo','C:\\users\\yashk\\Desktop')
#os.mkdir('C:\\users\\yashk\\Desktop\\haha')
#os.mkdir('C:\\users\\yashk\\Desktop\\haha1')
#o=open('C:\\users\\yashk\\Desktop\\haha1\\1.txt','w')
#l=open('C:\\users\\yashk\\Desktop\\haha1\\2.txt','w')
#o.close()
#l.close()
#time.sleep(5)
#os.unlink('C:\\users\\yashk\\Desktop\\haha1\\1.txt')
#os.rmdir('C:\\users\\yashk\\Desktop\\haha')
#shutil.rmtree('C:\\users\\yashk\\Desktop\\haha1')
#print(os.listdir())
#os.mkdir('C:\\users\\yashk\\Desktop\\haha')
#os.mkdir('C:\\users\\yashk\\Desktop\\haha1')
#o=open('C:\\users\\yashk\\Desktop\\haha1\\1.txt','w')
#l=open('C:\\users\\yashk\\Desktop\\haha1\\2.txt','w')
#o.close()
#l.close()
#send2trash.send2trash('C:\\users\\yashk\\Desktop\\haha1\\1.txt')
#send2trash.send2trash('C:\\users\\yashk\\Desktop\\haha1')
#send2trash.send2trash('C:\\users\\yashk\\Desktop\\haha')
for foldername,subfolders,filenames in (os.walk('C:\\users\\yashk\\Desktop')):
    print(foldername)
    print(subfolders)
    print(filenames)
    print('The current folder is '+ foldername)
    for subfolder in subfolders:
        print('Subfolder of '+foldername+' : '+subfolder)
    for files in filenames:
        print('File inside '+ foldername+' : '+files)
    print('\n\n')

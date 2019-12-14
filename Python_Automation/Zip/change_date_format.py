import shutil,os,re
j=open('yash04-30-1998.txt','w')
a=open('harsh06-3-1998.txt','w')
b=open('kamal09-7-1998.txt','w')
c=open('sushma10-31-1998.txt','w')
a.close()
b.close()
c.close()
d.close()
datePattern = re.compile(r'(^.*?)((0|1)?\d)-((0|1|2|3)?\d)-((19|20)?\d\d)(.*?)$')
#shutil.move('C:\\users\\yashk\\Desktop\\zip_file.py','C:\\users\\yashk\\Desktop\\dailytest11.py')
#os.rename('C:\\users\\yashk\\Desktop\\dailytest11.py','C:\\users\\yashk\\Desktop\\zip_file.py')
for amer in os.listdir('.'):
    mo = datePattern.search(amer)
    if mo!=None:
        beforepart = mo.group(1)
        monthpart  = mo.group(2)
        datepart    = mo.group(4)
        yearpart   = mo.group(6)
        afterpart  = mo.group(8)
        euro = beforepart + datepart + '-' + monthpart + '-' + yearpart + afterpart
        amer = os.path.join(os.getcwd(),amer)
        euro = os.path.join(os.getcwd(),euro)
        shutil.move(amer,euro)

import os
#os.mkdir('newDir')
import time
#time.sleep(2)
#os.rename('newDir','newDir2')
a=os.getcwd()
#print(a)
#print(os.path.basename(a))
#print(os.path.dirname(a))
#print(os.path.getsize(a))
#a='C://users//yashk//Desktop//os.py'
#print(os.path.getsize(a))
#a=os.getcwd()
#print(os.listdir(a))
#t=0
#for i in os.listdir(a):
#    print(i)
#    t+=os.path.getsize(i)
#print(t)
#o=open(os.path.join(a,'1.txt'), 'r+')
#print(o)
#reading=o.readlines()
#print(reading)
o=open(os.path.join(a,'1.txt'),'w')
o.write('\nWriting on this\n')
#print(w)
o.close()

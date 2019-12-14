a=input().strip().split()
r=int(a[0])
c=int(a[1])
l=[]
for i in range(r):
    b=input()
    k=[]
    for j in b:
        if j==" ":
            k.append("<")
        else:
            k.append(j)
    if len(k)<c:
        while len(k)!=c:
            k.append("<")
    l.append(k)
print(l)
f=[]
for i in range(c):
    for j in range(r):
        f.append(l[j][i])
c=0
print(f)
for i in range(len(f)):
    if f[-i-1].isalpha():
        c=len(f)-i-1
        break
sym=[33,35,36,37,38,64]
i=0
print(c)
while i<c+1:
    if f[i].isalnum():
        print(f[i],end='')
        i+=1
    else:
        z=i
        print(' ',end='')
        while f[z].isalnum()==False:
            z+=1
        i=z
for i in range(c+1,len(f)):
    if f[i]=='<':
        print(" ",end='')
    else:
        print(f[i],end='')

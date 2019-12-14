a=input().strip().split()
n=int(a[0])
e=int(a[1])
c=0
if n-e>e:
    d=e
    c=0
elif n-e<=e:
    d=n-e
    c=1
b=input().strip().split()
l=[]
for i in b:
    l.append(int(i))
count=1

def leftrotation(l,d):
    g=[]
    for i in range(len(l)-1):
        g.append(l[i+1])
    g.append(l[0])
    return g

def rightrotation(l,d):
    g=[]
    g.append(l[-1])
    for i in range(0,len(l)-1):
        g.append(l[i])
    return g

while count<=d:
    if c==0:
        k=leftrotation(l,d)
        l=k
    elif c==1:
        k=rightrotation(l,d)
        l=k
    count+=1

for i in l:
    print(i,end=' ')















a=input().strip().split()
n=int(a[0])
d=int(a[1])

while d>n:
    k=d-n
    d=k

b=input().strip().split()
l=[]
for i in b:
    l.append(int(i))
count=0

for i in range(d,len(l)):
    print(l[i],end=' ')
    count+=1
for i in range(0,len(l)-count):
    print(l[i],end=' ')

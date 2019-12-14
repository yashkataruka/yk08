a=input().strip().split()
n=int(a[0])
m=int(a[1])
b=input().strip().split()
c1=input().strip().split()
d1=input().strip().split()
c=set(c1)
d=set(d1)
print(c1)
print(d1)
print(c)
print(d)
happ=0
for i in b:
    if i in c:
        happ+=1
    if i in d:
        happ-=1
print(happ)

d={}
a=input().strip().split()
n=int(a[0])
m=int(a[1])
for i in range(n):
    d[i+1]=input()
d1={}
for i in range(m):
    d1[i+1]=input()
for i in d1:
    c=0
    for j in d:
        if d1[i]==d[j]:
            print(j,end=' ')
        if d1[i]!=d[j]:
            c+=1
    if c==len(d):
        print("-1",end='')
    print('')

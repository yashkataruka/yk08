a=input().strip()
s=[]
for i in a:
    s.append(i)
s.sort()
l=[]
k=[]
for i in s:
    g=[]
    g.append(s.count(i))
    g.append(i)
    if g not in l:
        l.append(g)
        k.append(s.count(i))
print(l)
print(k)
k.sort(reverse=True)
print(k)
f=[]
c=0
for i in range(3):
    if len(f)<3:
        for j in range(len(l)):
            if len(f)<3:
                if k[i]==l[j][0]:
                    if l[j][1] not in f:
                        print(l[j][1],end=' ')
                        print(k[i])
                        f.append(l[j][1])
                

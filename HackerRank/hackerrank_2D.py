l=[]
for i in range(6):
    g=input().strip().split()
    k=[]
    for j in g:
        k.append(int(j))
    l.append(k)
sum2=-10000
n=[]
for i in range(4):
    for j in range(4):
        m=[]
        sum1=0
        d=j
        f=i
        for e in range(3):
            sum1+=(l[i][d])
            m.append(l[i][d])
            d+=1
        f+=2
        sum1+=l[i+1][j+1]
        m.append(l[i+1][j+1])
        for e in range(3):
            sum1+=l[f][j]
            m.append(l[f][j])
            j+=1
        if sum1>sum2:
            sum2=sum1
        n.append(m)
print(n)
print(sum2)

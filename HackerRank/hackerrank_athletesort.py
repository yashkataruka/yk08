n,m=list(map(int, input().strip().split()))
l=[]
for i in range(n):
    g=[]
    a=input().strip().split()
    for j in a:
        g.append(int(j))
    l.append(g)
print(l)
k=int(input())
h=[]
for i in range(n):
    g=[]
    g.append(l[i][k])
    for j in range(m):
        if j!=k:
            g.append(l[i][j])
    h.append(g)
h.sort()
print(h)
f=[]
for i in range(n):
    for j in range(n):
        if h[i][0]==l[j][k]:
            if l[j] not in f:
                f.append(l[j])
                for r in l[j]:
                    print(r,end=' ')
                print('')

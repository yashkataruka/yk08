def pick(l):
    if len(l)>1:
        g=[]
        if l[0]!=max(l):
            if l[-1]!=max(l):
                print('No')
                return 0
            else:
                l.remove(l[-1])
                pick(l)
        else:
            l.remove(l[0])
            pick(l)
    else:
        print('Yes')
        return 0

t=int(input())
for i in range(t):
    n=int(input())
    l=[]
    a=input().strip().split()
    for j in a:
        l.append(int(j))
    pick(l)

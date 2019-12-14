t=int(input())
for i in range(t):
    n=int(input())
    l=list(map(int, input().strip().split()))
    a=0
    c=1
    g=[]
    g=l[:]
    print(l)
    b=0
    d=-1
    g.sort(reverse=True)
    print(l)
    maxi=g[0]
    for j in range(len(l)-1):
        print(maxi)
        if l[b]==maxi:
            print('1st')
            maxi=g[c]
            a=1
            c+=1
            b+=1
        elif l[d]==maxi:
            print('2nd')
            maxi=g[c]
            a=2
            c+=1
            d-=1
        else:
            a=0
            print('Hakuna')
            break
    if a==0:
        print('No')
    else:
        print('Yes')

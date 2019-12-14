s=input().strip()
l=[]
i=0
while i<len(s):
    print(i)
    c=s[i]
    print('next is c')
    print(c)
    count=0
    h=i
    print('next is s[h]')
    print(s[h])
    print(h)
    while h<len(s) and c==s[h]:
        h=h+1
        print(c)
        print('--')
        count+=1
        print('while loop ran')
    k=[]
    k.append(count)
    k.append(s[i])
    l.append(k)
    i=h
    print('hakuna matata')
    print(l)

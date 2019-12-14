n=int(input())
for i in range(n):
    a=input().strip()
    l=[]
    for i in a:
        l.append(i)
    s=set(l)
    if len(s)==10:
        c=0
        for j in range(len(l)):
            if l[j].isupper():
                c+=1
        if c>=2:
            c=0
            for j in range(len(l)):
                if l[j].isdigit():
                    c+=1
            if c>=3:
                c=0
                for j in range(len(l)):
                    if l[j].isalnum():
                        c+=1
                if c==10:
                    print('Valid')
    else:
        print('Invalid')

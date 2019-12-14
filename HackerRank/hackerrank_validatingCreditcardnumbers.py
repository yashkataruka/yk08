def lastcondition(a):
    fdd=a.split('-')
    s="".join(fdd)
    l=[]
    i=0
    while i<len(s):
        c=s[i]
        count=0
        h=i
        while h<len(s) and c==s[h]:
            h=h+1
            count+=1
        k=[]
        k.append(count)
        k.append(s[i])
        l.append(k)
        i=h
    r=0
    for i in range(len(l)):
        if l[i][0]>=4:
            r=1
    if r==0:
        return('YES')
    else:
        return('NO')
    

t=int(input())
for i in range(t):
    s=input()
    if s[0]=='4' or s[0]=='5' or s[0]=='6':
        numdig=0
        for j in range(len(s)):
            if s[j].isdigit():
                numdig+=1
        if numdig==16:
            char=0
            char1=0
            for j in range(len(s)):
                if s[j].isdigit():
                    char+=1
                else:
                    if s[j]=='-':
                        char1+=1
            if char+char1==len(s) and char1<=3:
                ds=0
                if char1>0:
                    r=s.split('-')
                    for e in range(len(r)):
                        if len(r[e])>4:
                            ds+=1
                if ds==0:
                    if lastcondition(s)=='YES':
                        print('valid')
                    else:
                        print('invalid')
                else:
                    print('invalid')
            else:
                print('invalid')
        else:
            print('invalid')
    else:
        print('invalid')

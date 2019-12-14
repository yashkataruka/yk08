s=input().strip()
l=[]
for i in s:
    l.append(i)
vowel=[65,69,73,79,85]
yl=[]
y=[]
for i in range(len(l)):
    if ord(l[i]) not in vowel:
        k=[]
        k.append(l[i])
        k.append(i)
        yl.append(k)
for i in range(len(yl)):
    if yl[i][1]+1==len(l):
        k=[]
        for b in range(yl[i][1],len(l),1):
            k.append(l[b])
        aa="".join(k)
        y.append(aa)
    else:
        for j in range(yl[i][1]+1,len(l)+1,1):
            k=[]
            for b in range(yl[i][1],j,1):
                k.append(l[b])
            aa="".join(k)
            y.append(aa)
yref=[]
for i in y:
    if i not in yref:
        yref.append(i)
print(yref)

rl=[]
r=[]
for i in range(len(l)):
    if ord(l[i]) in vowel:
        k=[]
        k.append(l[i])
        k.append(i)
        rl.append(k)
for i in range(len(rl)):
    if rl[i][1]+1==len(l):
        k=[]
        for b in range(rl[i][1],len(l),1):
            k.append(l[b])
        aa="".join(k)
        r.append(aa)
    else:
        for j in range(rl[i][1]+1,len(l)+1,1):
            k=[]
            for b in range(rl[i][1],j,1):
                k.append(l[b])
            aa="".join(k)
            r.append(aa)
rref=[]
for i in r:
    if i not in rref:
        rref.append(i)
print(rref)

tl=[]
t=[]
for i in range(len(l)-1):
    t.append(l[i])
    for j in range(i+1,len(l),1):
        t.append(t[-1]+l[j])
t.append(l[-1])
print(t)

yc=0
for i in range(len(yref)):
    for j in range(len(t)):
        if yref[i]==t[j]:
            yc+=1
rc=0
for i in range(len(rref)):
    for j in range(len(t)):
        if rref[i]==t[j]:
            rc+=1
print(yc)
print(rc)
if yc>rc:
    print('Stuart ',end='')
    print(yc)
else:
    print('Kevin ',end='')
    print(rc)

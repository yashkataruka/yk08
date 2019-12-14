s=input().strip()
l=[]
for i in s:
    l.append(i)
vowel=[65,69,73,79,85]

tl=[]
t=[]
for i in range(len(l)-1):
    t.append(l[i])
    for j in range(i+1,len(l),1):
        t.append(t[-1]+l[j])
t.append(l[-1])

yc=0
rc=0
for i in range(len(t)):
    if ord(t[i][0]) in vowel:
        rc+=1
    else:
        yc+=1

if yc>rc:
    print('Stuart ',end='')
    print(yc)
elif rc>yc:
    print('Kevin ',end='')
    print(rc)
else:
    print('Draw')

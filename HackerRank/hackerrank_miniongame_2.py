s=input().strip()
l=[]
for i in s:
    l.append(i)
vowel=[65,69,73,79,85]

yc=0
rc=0
tl=[]
t=[]
for i in range(len(l)):
    if ord(l[i][0]) not in vowel:
        yc+=len(l)-i
    else:
        rc+=len(l)-i

if yc>rc:
    print('Stuart ',end='')
    print(yc)
elif rc>yc:
    print('Kevin ',end='')
    print(rc)
else:
    print('Draw')

A=list(map(int, input().strip().split()))
sA=set(A)
t=int(input())
c=0
for i in range(t):
    B=list(map(int, input().strip().split()))
    sB=set(B)
    c1=0
    for j in sB:
        if j in sA:
            c1+=1
    print('next is i')
    print(i)
    print('next is c1')
    print(c1)
    if c1==len(B):
        c+=1
print('this is c')
print(c)
if c==t:
    print('True')
else:
    print('False')

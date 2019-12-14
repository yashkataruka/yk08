n=int(input())
l=[]
a=input().strip().split()
for i in a:
    l.append(int(i))
count=0

for i in range(n-2):
    for j in range(i+1,n):
        m=[]
        for k in range(i,j+1):
            m.append(l[k])
        if l[i]*l[j]<=max(m):
            count+=1
print(count)

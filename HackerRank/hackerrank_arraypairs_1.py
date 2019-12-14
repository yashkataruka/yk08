import time
start=time.time()
n=int(input())
l=[]
a=input().strip().split()
for i in a:
    l.append(int(i))
count=0
for i in range(n-1):
    max=l[i]
    for j in range(i+1,n,1):
        if l[j]>max:
            max=l[j]
        if l[i]*l[j]<=max:
            count+=1
print(count)
end=time.time()
print(end-start)

s=input()
l=[]
for i in s:
    l.append(i)
print(l)
if l[0].isalpha():
    if l[0].islower():
        l[0]=chr(ord(l[0])-32)
for i in range(1,len(l)):
    if l[i].isalpha:
        if l[i-1]==" ":
            if l[i].islower():
                l[i]=chr(ord(l[i])-32)
print("".join(l))

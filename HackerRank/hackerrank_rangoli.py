def print_rangoli(n):
    for i in range(1,n,1):
        c=96+n
        l=[]
        k=0
        while k<i:
            l.append(chr(c))
            c-=1
            k+=1
        for j in range(n+(n-1)-i-(i-1)):
            print('-',end='')
        for j in range((2*i)-1):
            if j%2!=0:
                print('-',end='')
            else:
                print(l[j//2],end='')
        for j in range((2*i)-2):
            if j%2!=0:
                print(l[-(j//2)-2],end='')
            else:
                print('-',end='')
        for j in range(n+(n-1)-i-(i-1)):
            print('-',end='')
        print('')
    
    f=[]
    for i in range(n):
        f.append(chr(96+n-i))
    for i in range((n+(n-1)+(2*n-2))//2):
        if i%2==0:
            print(f[i//2],end='')
        else:
            print('-',end='')
    for i in range(n+(n-1)):
        if i%2==0:
            print(f[-(i//2)-1],end='')
        else:
            print('-',end='')
    print('')


    for i in range(n-1,0,-1):
        c=96+n
        l=[]
        k=0
        while k<i:
            l.append(chr(c))
            c-=1
            k+=1
        for j in range(n+(n-1)-i-(i-1)):
            print('-',end='')
        for j in range((2*i)-1):
            if j%2!=0:
                print('-',end='')
            else:
                print(l[j//2],end='')
        for j in range((2*i)-2):
            if j%2!=0:
                print(l[-(j//2)-2],end='')
            else:
                print('-',end='')
        for j in range(n+(n-1)-i-(i-1)):
            print('-',end='')
        print('')


if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)

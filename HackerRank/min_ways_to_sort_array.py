def min_swaps(arr):
    n = len(arr)

    arrpos = [*enumerate(arr)]
    print("This is arrpos")
    print(arrpos)

    arrpos.sort(key = lambda it:it[1])
    print("This is sorted arrpos")
    print(arrpos)
    vis = {k:False for k in range(n)}
    print("This is vis")
    print(vis)

    ans = 0
    print('\n')
    print('\n')
    for i in range(n):
        print(i)
        print(arrpos)
        if vis[i] or arrpos[i][0] == i:
            print('present')
            continue
        cycle_size = 0
        j = i
        while not vis[j]:
            vis[j] = True
            j = arrpos[j][0]
            cycle_size+=1
            
        if cycle_size>0:
            ans += cycle_size - 1
        print(vis)
        
    return ans

l = [4, 3, 2, 1, 5]
print(min_swaps(l))

import time
print('Press ENTER to begin. Afterwards, press ENTER to "click" the stopwatch. Press Ctrl-C to quit.')
input()
print('Started')
starttime = time.time()
lasttime = starttime
lapnum = 1
try:
    while True:
        input()
        laptime = round(time.time() - lasttime,2)
        totaltime = round(time.time() - starttime,2)
        print('Lap #%s: %s (%s)'%(lapnum, totaltime, laptime),end='')
        lapnum+=1
        lasttime = time.time()
except KeyboardInterrupt:
    print('\nDone.')

import subprocess
import time

timeleft = 60
while timeleft > 0:
    print(timeleft)
    time.sleep(1)
    timeleft-=1
subprocess.Popen(['start','alarm.wav'],shell = True)

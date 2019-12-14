import subprocess
subprocess.Popen('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe')

import time
import pyautogui
pyautogui.FAILSAFE = True
while not pyautogui.pixelMatchesColor(200, 200, (50, 54, 57)):
    time.sleep(0.25)
pyautogui.hotkey('ctrl','shift','n')
while not pyautogui.pixelMatchesColor(640, 220, (214, 215, 215)):
    time.sleep(0.25)
pyautogui.click(400,52)
pyautogui.typewrite('https://irctc.co.in/')
pyautogui.press('enter')
while not pyautogui.pixelMatchesColor(1292, 111, (46, 49, 146)):
    time.sleep(0.25)
pyautogui.click(1061,90)
time.sleep(2)
pyautogui.typewrite(#enter your username here)
pyautogui.typewrite('\t')
pyautogui.typewrite(#enter your password here)
pyautogui.typewrite('\t')
time.sleep(4)
pyautogui.click(254,566)




while not pyautogui.pixelMatchesColor(200, 624, (46, 49, 146)):
    time.sleep(0.5)
pyautogui.click(358,354)
pyautogui.typewrite('ANVT')
time.sleep(0.5)
pyautogui.press('enter')
pyautogui.typewrite(['\t','\t'])
pyautogui.typewrite('BGP')
time.sleep(0.5)
pyautogui.press('enter')
pyautogui.typewrite('\t')
pyautogui.typewrite('13-09-2019')
time.sleep(0.5)
pyautogui.typewrite('\t')
pyautogui.click(200, 624)
#while not pyautogui.locateOnScreen('PreviousDay.png'):
 #   time.sleep(0.01)
#a,b,c,d = pyautogui.locateOnScreen('PreviousDay.png')
#x,y = pyautogui.center((a,b,c,d))
#print(x,y)
#pyautogui.moveTo(x,y)
#while not pyautogui.pixelMatchesColor(1292, 111, (46, 49, 146)):
 #   time.sleep(1)
#time.sleep(5)
x=0
y=0
def selecting_train():
    global x
    global y
    if pyautogui.pixelMatchesColor(380, 630, (205, 207, 210)):
        pyautogui.scroll(-500)
        #pyautogui.moveRel(1083, 455)
        x = 683
        y = 633
        return x,y
    elif pyautogui.pixelMatchesColor(380, 490, (205, 207, 210)):
        pyautogui.scroll(-500)
        #pyautogui.moveRel(1083, 455)
        x = 683
        y= 473
        return x,y
while x==0:
    time.sleep(1)
    selecting_train()
#pyautogui.click(1042, 458)
if y == 633:
    time.sleep(0.1)
    pyautogui.click(1083, 455)
else:
    time.sleep(0.1)
    pyautogui.click(1083, 295)
pyautogui.keyDown('down')
pyautogui.keyUp('down')
pyautogui.typewrite('\t')
pyautogui.typewrite('\t')
pyautogui.press('enter')
#while not pyautogui.pixelMatchesColor(465, 512, (232, 232, 232)):
 #   time.sleep(0.5)
  #  print('cannot match color')
#pyautogui.moveTo(465, 512)
print(x)
print(y)
pyautogui.moveRel(-700, 180)
while not pyautogui.pixelMatchesColor(x+400-700, y-178+180, (255,255,255)):
    time.sleep(0.25)
pyautogui.click()
time.sleep(0.5)
while pyautogui.pixelMatchesColor(984, 380, (20, 87 ,167)):
    pyautogui.click(984, 380)
#while not pyautogui.pixelMatchesColor(475, 550, (0, 0, 0)):
 #   time.sleep(0.25)
while pyautogui.locateOnScreen('Passenger Details.png') == None:
    time.sleep(0.01)
#a,b,c,d = pyautogui.locateOnScreen('Passenger Details.png')
#x, y = pyautogui.center((a,b,c,d))536,355
pyautogui.typewrite(['\t','\t'])
#pyautogui.scroll(-500)
#pyautogui.click(150, 360)
pyautogui.typewrite('Yash Kataruka')
pyautogui.typewrite('\t')
pyautogui.typewrite('21')
pyautogui.typewrite('\t')
pyautogui.typewrite('M')
pyautogui.typewrite('\t')
pyautogui.typewrite('L')
#pyautogui.scroll(-500)
#pyautogui.click(658, 502)
pyautogui.typewrite(['\t','\t','\t','\t','\t','\t','\t'])
time.sleep(5)
pyautogui.typewrite(['\t','\t','\t','\t','\t','\t'])
pyautogui.press('enter')
while not pyautogui.pixelMatchesColor(1292, 111, (46, 49, 146)):
    time.sleep(0.25)
time.sleep(0.5)
pyautogui.typewrite(['\t','\t'])
pyautogui.press('enter')
while not pyautogui.pixelMatchesColor(1292, 111, (46, 49, 146)):
    time.sleep(0.25)
time.sleep(0.5)
pyautogui.typewrite('\t')
pyautogui.keyDown('down')
pyautogui.keyUp('down')
pyautogui.keyDown('up')
pyautogui.keyUp('up')
pyautogui.typewrite('\t')
#pyautogui.press('enter')

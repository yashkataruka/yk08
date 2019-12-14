import time
import pyautogui
pyautogui.FAILSAFE = True
from datetime import datetime
dt = datetime.now()
dth = dt.hour
while dth < 10:
    time.sleep(0.25)
    print(dt.hour)
    dt = datetime.now()
    dth = dt.hour
def book_now_click():
    pyautogui.click()
    a , b = pyautogui.position()
    print(a,b)
    #while not pyautogui.pixelMatchesColor(a-30, b+45, (232, 232, 232)):
        #time.sleep(0.25)
        #print('hakuna')
    #pyautogui.moveTo(a, b+160)
    while pyautogui.pixelMatchesColor(a, b+160, (128, 128, 128)):
        time.sleep(0.10)
    pyautogui.moveTo(748, b+160)
    if not pyautogui.pixelMatchesColor(748, b+160, (20, 87 ,167)):
        print('hakuna_matata')
        pyautogui.moveTo(a,b)
        book_now_click()
    else:
        pyautogui.click(a-420, b+160)
book_now_click()
while pyautogui.pixelMatchesColor(984, 380, (20, 87 ,167)):
    pyautogui.click(984, 380)
#while not pyautogui.pixelMatchesColor(475, 550, (0, 0, 0)):
 #   time.sleep(0.25)
while pyautogui.locateOnScreen('Passenger Details.png') == None:
    time.sleep(0.25)
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
pyautogui.typewrite(['\t','\t','\t','\t','\t'])
pyautogui.typewrite(['\t','\t','\t','\t'])
pyautogui.keyDown('down')
pyautogui.keyUp('down')
pyautogui.typewrite(['\t','\t','\t'])
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
time.sleep(1)
pyautogui.typewrite(['\t'])
pyautogui.keyDown('down')
pyautogui.keyUp('down')
pyautogui.typewrite(['\t'])
#pyautogui.press('enter')

import time
import pyautogui

nameField = (469, 533)
submitButton = (432, 500)
submitButtonColor = (26, 115, 232)
submitAnotherLink = (454, 401)

formData = [{'name': 'Alice', 'fear': 'eavesdroppers', 'source': 'wand',
            'robocop': 4, 'comments': 'Tell Bob I said hi.'},
            {'name': 'Bob', 'fear': 'bees', 'source': 'amulet', 'robocop': 4,
            'comments': 'n/a'},
            {'name': 'Carol', 'fear': 'puppets', 'source': 'crystal ball',
            'robocop': 1, 'comments': 'Please take the puppets out of the break room.'},
            {'name': 'Alex Murphy', 'fear': 'ED-209', 'source': 'money',
            'robocop': 5, 'comments': 'Protect the innocent. Serve the public trust. Uphold the law.'},
           ]
pyautogui.PAUSE = 0.5
for person in formData:
    print('>>> 5 SECOND PAUSE TO LET USER PRESS CTRL-C')
    time.sleep(5)
    #while not pyautogui.pixelMatchesColor(submitButton[0], submitButton[1], submitButtonColor):
     #   time.sleep(0.5)
    print('Entering %s info...' % (person['name']))
    pyautogui.click(nameField[0], nameField[1])
    pyautogui.typewrite(person['name'] + '\t')
    time.sleep(2)
    pyautogui.typewrite(person['fear'] + '\t')
    time.sleep(2)
    if person['source'] == 'wand':
        pyautogui.press('down')
        time.sleep(2)
        pyautogui.press('enter')
        pyautogui.typewrite(['\t'])
        time.sleep(2)
    elif person['source'] == 'amulet':
        pyautogui.typewrite(['down', 'down', 'enter', '\t'])
        print('2')
    elif person['source'] == 'crystal ball':
        pyautogui.typewrite(['down', 'down', 'down', 'enter', '\t'])
        print('3')
    elif person['source'] == 'money':
        pyautogui.typewrite(['down', 'down', 'down', 'down', 'enter', '\t'])
        print('4')
    if person['robocop'] == 1:
        pyautogui.typewrite(['right'])
        time.sleep(5)
        pyautogui.typewrite(['left', '\t'])
        time.sleep(2)
    elif person['robocop'] == 2:
        pyautogui.typewrite(['right', '\t'])
    elif person['robocop'] == 3:
        pyautogui.typewrite(['right', 'right', '\t'])
    elif person['robocop'] == 4:
        pyautogui.press(['right'])
        time.sleep(2)
        pyautogui.press(['right'])
        time.sleep(2)
        pyautogui.press(['right', '\t'])
        time.sleep(2)
    elif person['robocop'] == 5:
        pyautogui.typewrite(['right', 'right', 'right', 'right', '\t'])
    print(person['comments'])
    pyautogui.typewrite(person['comments'],0.25)
    time.sleep(2)
    pyautogui.typewrite('\t')
    pyautogui.press('enter')
    print('Clicked Submit.')
    break
    #time.sleep(5)
    #pyautogui.click(submitAnotherLink[0], submitAnotherLink[1])

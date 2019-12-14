from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

browser = webdriver.Chrome()
browser.get('https://nostarch.com')
htmlElem = browser.find_element_by_tag_name('html')
htmlElem.send_keys(Keys.END)
htmlElem.send_keys(Keys.HOME)
#browser.get('https://instagram.com')
time.sleep(5)
browser.back()
browser.forward()
browser.refresh()
browser.quit()

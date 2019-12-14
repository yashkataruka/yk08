import time
from selenium import webdriver
print('Enter the username: ')
username = input().strip()
print('Enter the password: ')
password = input().strip()
if password:
    browser = webdriver.Chrome()
    browser.get('https://instagram.com')
    logInlink = browser.find_element_by_link_text('Log in')
    logInlink.click()
    time.sleep(2)
    userIDlink = browser.find_element_by_name('username')
    userIDlink.send_keys(username)
    passwordlink = browser.find_element_by_name('password')
    passwordlink.send_keys(password)
    passwordlink.submit()

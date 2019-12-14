import webbrowser
#webbrowser.open('https://www.instagram.com/')
import requests
res=requests.get('https://automatetheboringstuff.com/files/rj.txt')
print(res)
#res1=requests.get('https://www.instagram.com/yashkataruka')
#print(res1.text)
#print(res.status_code==requests.codes.ok)
#print(res.raise_for_status())
#res2=requests.get('https://www.instagram.com/yashkatarukayash')
#try:
 #   print(res2.raise_for_status())
#except Exception as exp:
 #   print('There was a problem: %s'%exp)
playFile = open('RomeoAndJuliet.txt','wb')
#playFile1 = open('RomeoAndJuliet1.txt','wb')
for i in res.iter_content(10000):
    playFile.write(i)
#for i in res:
 #   playFile1.write(i) this does not include some of the last part idk why
import bs4
#res = requests.get('http://nostarch.com')
#print(res.raise_for_status())
#noStarchSoup = bs4.BeautifulSoup(res.text,features='html.parser')
#print(type(noStarchSoup))
#exampleFile = open('example.html')
#exampleSoup = bs4.BeautifulSoup(exampleFile.read(),features = 'html.parser')
#print(exampleSoup)
#elems = exampleSoup.select('#author')
#print(elems)
#print(elems[0])
#print(elems[0].attrs)
#pElems = exampleSoup.select('p')
#print(pElems)
#print(pElems[0])
#aElems = exampleSoup.select('a')
#print(aElems)
#attribute = aElems[0].attrs
#website = attribute['href']
#print(aElems[0].get('href'))
#webbrowser.open(website)
#spanElem = exampleSoup.select('span')
#print(spanElem[0].get('id'))
#print(spanElem[0].attrs)

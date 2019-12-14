import bs4,webbrowser,os,requests

url = "http://xkcd.com"
os.makedirs('comics')
while not url.endswith('#'):
    print('Downloading page %s...'%url)
    res = requests.get(url)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text,features="html.parser")
    comicElem = soup.select('#comic img')
    if comicElem==[]:
        print('Could not find comic image')
    else:
        try:
            comicUrl = 'http:'+comicElem[0].get('src')
            print('Downloading Image %s...'%(comicUrl))
            res = requests.get(comicUrl)
            res.raise_for_status()
        except (requests.exceptions.InvalidUrl, requests.exceptions.MissingSchema):
            prevLink= soup.select('a[rel="prev"]')[0]
            url = 'http:/xkcd.com' + prevLink.get('href')
            continue
        print(os.path.join('comics', os.path.basename(comicUrl)))
        print(os.path.basename(comicUrl))
        imageFile = open(os.path.basename(comicUrl),'wb')
        for chunk in res.iter_content(100000):
            imageFile.write(chunk)
        imageFile.close()
    prevLink= soup.select('a[rel="prev"]')[0]
    url = 'http://xkcd.com' + prevLink.get('href')
    print('Done.')

import requests, os, bs4, threading
os.makedirs('xkcd',exist_ok = True)
def downloadXkcd(startcomic, endcomic):
    for urlnumber in range(startcomic, endcomic+1):
        print('Downloading page http://xkcd.com/%s...'%(urlnumber))
        res = requests.get('http://xkcd.com/%s' %(urlnumber))
        res.raise_for_status()
        soup = bs4.BeautifulSoup(res.text,features = 'html.parser')
        comicelem = soup.select('#comic img')
        if comicelem == []:
            print('Could not find comic image.')
        else:
            comicurl = 'http:'+comicelem[0].get('src')
            print('Downloading image %s...' %(comicurl))
            res = requests.get(comicurl)
            res.raise_for_status()
            imagefile = open(os.path.join('xkcd',os.path.basename(comicurl)),'wb')
            for chunk in res.iter_content(100000):
                imagefile.write(chunk)
            imagefile.close()
downloadthreads = []
for i in range(0,1400,100):
    downloadthread = threading.Thread(target = downloadXkcd, args = (i,i+99))
    downloadthreads.append(downloadthread)
    downloadthread.start()
print(downloadthreads)
for downloadthread in downloadthreads:
    downloadthread.join()
print('Done.')

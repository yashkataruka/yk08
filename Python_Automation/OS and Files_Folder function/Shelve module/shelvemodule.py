import shelve
#shelfFile=shelve.open('mydata')
#cats=['Zophie','Pooka','Simon']
#shelfFile['cats']=cats
#shelfFile.close()
shelfFile=shelve.open('mydata')
print(shelfFile['cats'])
shelfFile.close()

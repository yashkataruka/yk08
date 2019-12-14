import PyPDF2
import os
pdffiles = []
for filename in os.listdir('.'):
    if filename.endswith('.pdf'):
        pdffiles.append(filename)
pdffiles.sort(key = str.lower)
pdfwriter = PyPDF2.PdfFileWriter()
for filename in pdffiles:
    pdffileobj = open(filename,'rb')
    pdfreader = PyPDF2.PdfFileReader(pdffileobj)
    if pdfreader.isEncrypted:
        if filename == 'encrypted.pdf':
            pdfreader.decrypt('rosebud')
        else:
            pdfreader.decrypt('yashkataruka')
    for page in range(1,pdfreader.numPages):
        pdfwriter.addPage(pdfreader.getPage(page))
finalpdf = open('allpdfcombined.pdf','wb')
pdfwriter.write(finalpdf)
finalpdf.close()

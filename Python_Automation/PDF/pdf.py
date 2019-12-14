import PyPDF2
#pdffileobj = open('meetingminutes.pdf','rb')
#pdfreader = PyPDF2.PdfFileReader(pdffileobj)
#print(pdfreader.numPages)
#pageobj = pdfreader.getPage(0)
#print(pageobj.extractText())


#pdfreader = PyPDF2.PdfFileReader(open('encrypted.pdf','rb'))
#print(pdfreader.isEncrypted)
#print(pdfreader.getPage(0))
#pdfreader.decrypt('rosebud')
#print((pdfreader.getPage(0)).extractText())

#pdf1file = open('meetingminutes.pdf','rb')
#pdf2file = open('meetingminutes2.pdf','rb')
#pdf1reader = PyPDF2.PdfFileReader(pdf1file)
#pdf2reader = PyPDF2.PdfFileReader(pdf2file)
#pdfwriter = PyPDF2.PdfFileWriter()
#for pagenum in range(pdf1reader.numPages):
 #   pageobj = pdf1reader.getPage(pagenum)
  #  pdfwriter.addPage(pageobj)
#for pagenum in range(pdf2reader.numPages):
 #   pageobj = pdf2reader.getPage(pagenum)
  #  pdfwriter.addPage(pageobj)
#pdfoutputfile = open('combinedminutes.pdf','wb')
#pdfwriter.write(pdfoutputfile)
#pdfoutputfile.close()
#pdf1file.close()
#pdf2file.close()


#minutesfile = open('meetingminutes.pdf','rb')
#pdfreader = PyPDF2.PdfFileReader(minutesfile)
#page = pdfreader.getPage(0)
#page.rotateClockwise(90)
#pdfwriter = PyPDF2.PdfFileWriter()
#pdfwriter.addPage(page)
#resultpdffile = open('rotatedPage.pdf','wb')
#pdfwriter.write(resultpdffile)
#resultpdffile.close()
#minutesfile.close()



#minutesfile = open('meetingminutes.pdf','rb')
#pdfreader = PyPDF2.PdfFileReader(minutesfile)
#minutesfirstpage = pdfreader.getPage(0)
#pdfwatermarkreader = PyPDF2.PdfFileReader('watermark.pdf','rb')
#minutesfirstpage.mergePage(pdfwatermarkreader.getPage(0))
#pdfwriter = PyPDF2.PdfFileWriter()
#pdfwriter.addPage(minutesfirstpage)
#for pagenum in range(1,pdfreader.numPages):
 #   pageobj = pdfreader.getPage(pagenum)
  #  pdfwriter.addPage(pageobj)
#resultpdffile = open('watermarkedCover.pdf','wb')
#pdfwriter.write(resultpdffile)
#resultpdffile.close()
#minutesfile.close()

#minutesfile = open('meetingminutes.pdf','rb')
#pdfreader = PyPDF2.PdfFileReader(minutesfile)
#pdfwatermarkreader = PyPDF2.PdfFileReader('watermark.pdf','rb')
#pdfwriter = PyPDF2.PdfFileWriter()
#for pagenum in range(pdfreader.numPages):
 #   minutespage = pdfreader.getPage(pagenum)
  #  minutespage.mergePage(pdfwatermarkreader.getPage(0))
   # pdfwriter.addPage(minutespage)
#resultpdffile = open('watermarkedCovercomplete.pdf','wb')
#pdfwriter.write(resultpdffile)
#resultpdffile.close()
#minutesfile.close()



#pdffile = open('meetingminutes.pdf','rb')
#pdfreader = PyPDF2.PdfFileReader(pdffile)
#pdfwriter = PyPDF2.PdfFileWriter()
#for pagenum in range(pdfreader.numPages):
 #   pdfwriter.addPage(pdfreader.getPage(pagenum))
#pdfwriter.encrypt('yashkataruka')
#resultfile = open('encryptedminutes.pdf','wb')
#pdfwriter.write(resultfile)
#resultfile.close()
#pdffile.close()

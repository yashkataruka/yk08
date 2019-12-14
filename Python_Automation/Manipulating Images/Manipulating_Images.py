from PIL import ImageColor
#print(ImageColor.getcolor('Red','RGBA'))
#print(ImageColor.getcolor('CornflowerBlue','RGBA'))

from PIL import Image
catIm = Image.open('zophie.png')
#print(catIm)
#print(catIm.size)
#width, height =  catIm.size
#print(catIm.filename)
#print(catIm.format)
#print(catIm.format_description)
#catIm.save('zophie.jpg')



#im = Image.new('RGBA', (100, 200), 'purple')
#im.save('purpleImage.png')
#im2 = Image.new('RGBA', (20,20))
#im2.save('transparentImage.png')



#croppedIm = catIm.crop((335,345,565,560))
#croppedIm.save('cropped.png')


#catCopyIm = catIm.copy()
faceIm = catIm.crop((335, 345, 565, 560))
#print(faceIm.size)
#catCopyIm.paste(faceIm, (0,0))
#catCopyIm.paste(faceIm, (400,500))
#catCopyIm.save('pasted.png')



#catImWidth , catImHeight = catIm.size
#faceImWidth , faceImHeight = faceIm.size
#catCopyTwo = catIm.copy()
#for left in range(0,catImWidth, faceImWidth):
 #   for top in range(0,catImHeight, faceImHeight):
  #      print(left, top)
   #     catCopyTwo.paste(faceIm, (left,top))
#catCopyTwo.save('FaceonEntireImage.png')



#width, height = catIm.size
#quartersizeIm = catIm.resize((int(width/2), int(height/2)))
#quartersizeIm.save('quartersized.png')
#svelteIm = catIm.resize((width, height+300))
#svelteIm.save('svelte.png')



#catIm.rotate(90).save('rotated90.png') #anti-clockwise
#catIm.rotate(6).save('rotated6.png')
#catIm.rotate(6, expand=True).save('rotated6_expanded.png')
#catIm.transpose(Image.FLIP_LEFT_RIGHT).save('horizontal_flip.png')
#catIm.transpose(Image.FLIP_TOP_BOTTOM).save('vertical_flip.png')



im = Image.new('RGBA', (100,100))
print(im.getpixel((0,0)))
for x in range(100):
    for y in range(50):
        im.putpixel((x,y), (210,210,210))
for x in range(100):
    for y in range(50,100):
        im.putpixel((x,y), ImageColor.getcolor('darkgray','RGBA'))
print(im.getpixel((0,0)))
print(im.getpixel((0,50)))
im.save('putPixel.png')

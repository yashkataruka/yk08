from PIL import Image, ImageFont, ImageDraw
import os
im = Image.new('RGBA',(200,200), 'white')
draw = ImageDraw.Draw(im)
draw.text((20, 150),'Hello', fill = 'purple')
fontfolder = 'C:\\Windows\\Fonts'
arialFont = ImageFont.truetype(os.path.join(fontfolder, 'arial.ttf'), 32)
draw.text((100, 150), 'Howdy', fill = 'gray', font = arialFont)
im.save('text.png')

im = Image.new('RGBA', (2, 2), 'white')
draw = ImageDraw.Draw(im)
fontfolder = 'C:\\Windows\\Fonts'
a = draw.textsize('Hello',font = ImageFont.truetype(os.path.join(fontfolder, 'arial.ttf'), 32))
print(a)
a = draw.textsize('Hellooooo',font = ImageFont.truetype(os.path.join(fontfolder, 'arial.ttf'), 32))
print(a)

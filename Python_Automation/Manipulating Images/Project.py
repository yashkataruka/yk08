import os
from PIL import Image

square_fit_size = 300
logo_filename = 'catlogo1.png'
logoIm = Image.open(logo_filename)
logoWidth, logoHeight = logoIm.size
os.makedirs('withNotTransparentLogo',exist_ok = True)
for filename in os.listdir('.'):
    print(filename)
    if filename!=logo_filename:
        if filename.endswith('.png') or filename.endswith('.jpg'):
            im = Image.open(filename)
            width, height = im.size
            if width > square_fit_size or height > square_fit_size:
                if width>height:
                    height = int((square_fit_size/width)*height)
                    width = square_fit_size
                else:
                    width = int((square_fit_size/height)*width)
                    height = square_fit_size
                print('Resizing %s...' %filename)
                im = im.resize((width, height))
            print('Adding logo to %s...' %filename)
            print(width - logoWidth, height - logoHeight)
            print('\n\n')
            im.paste(logoIm, (width - logoWidth, height - logoHeight))
            im.save(os.path.join('withNotTransparentLogo', filename))

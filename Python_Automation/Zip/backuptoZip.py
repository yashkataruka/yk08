import os,shutil,zipfile

def backupZip(folder):
    number = 1
    while True:
        basename = os.path.basename(folder)
        zipfilename = basename+'_'+str(number)+'.zip'
        if not os.path.exists(zipfilename):
            break
        number+=1
    backup = zipfile.ZipFile(zipfilename,'w')
    for foldername,subfolders,filenames in os.walk(folder):
        print('Cretaing ZIP file %s for %s'%(zipfilename,foldername))
        backup.write(foldername)
        for file in filenames:
            name = os.path.basename(folder)+'_'
            if file.startswith(name) and file.endswith('.zip'):
                continue
            print('Copying the file %s in %s'%(file,zipfilename))
            backup.write(os.path.join(foldername,file))
    
backupZip(os.getcwd())

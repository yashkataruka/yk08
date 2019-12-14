import os
import openpyxl
import pprint
print('Opening workbook...')
wb=openpyxl.load_workbook('censuspopdata.xlsx')
sheet=wb.active
countrydata={}
print('Reading rows...')
for row in range(2,sheet.max_row+1):
    state = sheet['B'+str(row)].value
    country = sheet['C'+str(row)].value
    pop = sheet['D'+str(row)].value
    countrydata.setdefault(state,{})
    countrydata[state].setdefault(country,{'tracts':0,'pop':0})
    countrydata[state][country]['tracts']+=1
    countrydata[state][country]['pop']+=int(pop)
print('Writing results...')
resultfile = open('census2010.py','w')
resultfile.write('Alldata = '+pprint.pformat(countrydata))
resultfile.close()
print('Done.')
#import census2010
#census2010.Alldata['AK']['Anchorage']

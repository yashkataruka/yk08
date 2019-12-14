import random
import os

capitals = {'Alabama': 'Montgomery', 'Alaska': 'Juneau', 'Arizona': 'Phoenix',
   'Arkansas': 'Little Rock', 'California': 'Sacramento', 'Colorado': 'Denver',
   'Connecticut': 'Hartford', 'Delaware': 'Dover', 'Florida': 'Tallahassee',
   'Georgia': 'Atlanta', 'Hawaii': 'Honolulu', 'Idaho': 'Boise', 'Illinois':
   'Springfield', 'Indiana': 'Indianapolis', 'Iowa': 'Des Moines', 'Kansas':
   'Topeka', 'Kentucky': 'Frankfort', 'Louisiana': 'Baton Rouge', 'Maine':
   'Augusta', 'Maryland': 'Annapolis', 'Massachusetts': 'Boston', 'Michigan':
   'Lansing', 'Minnesota': 'Saint Paul', 'Mississippi': 'Jackson', 'Missouri':
   'Jefferson City', 'Montana': 'Helena', 'Nebraska': 'Lincoln', 'Nevada':
   'Carson City', 'New Hampshire': 'Concord', 'New Jersey': 'Trenton',
    'New Mexico': 'Santa Fe', 'New York': 'Albany', 'North Carolina': 'Raleigh',
   'North Dakota': 'Bismarck', 'Ohio': 'Columbus', 'Oklahoma': 'Oklahoma City',
   'Oregon': 'Salem', 'Pennsylvania': 'Harrisburg', 'Rhode Island': 'Providence',
   'South Carolina': 'Columbia', 'South Dakota': 'Pierre', 'Tennessee':
   'Nashville', 'Texas': 'Austin', 'Utah': 'Salt Lake City', 'Vermont':
   'Montpelier', 'Virginia': 'Richmond', 'Washington': 'Olympia',
    'West Virginia': 'Charleston', 'Wisconsin': 'Madison', 'Wyoming': 'Cheyenne'}

for i in range(5):
    quesFile = open('quesfile%s.txt'%(i+1),'w')
    answerfile = open('answerfile%s.txt'%(i+1),'w')
    quesFile.write('Name:\nDate:\nRoll No.:\n')
    quesFile.write('\n\n')
    quesFile.write('State and Capitals quiz - %s\n\n'%(i+1))
    states=list(capitals.keys())
    random.shuffle(states)
    for j in range(50):
        correctA = capitals[states[j]]
        wrongA = list(capitals.values())
        del wrongA[wrongA.index(correctA)]
        wrongA=random.sample(wrongA,3)
        answerOp = wrongA+[correctA]
        random.shuffle(answerOp)
        quesFile.write('%s. What is the capital of %s?\n' % (j + 1,
                                                         states[j]))
        for k in range(4):
            quesFile.write(' %s. %s\n' % ('ABCD'[k], answerOp[k]))
            quesFile.write('\n')
    
        answerfile.write('%s. %s\n' %(j+1,correctA))
    quesFile.close()
    answerfile.close()

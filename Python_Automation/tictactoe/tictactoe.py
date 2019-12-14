board={'TL':' ','TM':' ','TR':' ','ML':' ','MM':' ','MR':' ','BL':' ','BM':' ','BR':' '}
def printboard(board):
    print(board['TL']+'|'+board['TM']+'|'+board['TR'])
    print('-+-+-')
    print(board['ML']+'|'+board['MM']+'|'+board['MR'])
    print('-+-+-')
    print(board['BL']+'|'+board['BM']+'|'+board['BR'])

def checkwin(board,place,player):
    if place=='TL':
        if board['TL']==board['TM']:
            if board['TM']==board['TR']:
                print(player+' wins.')
        if board['TL']==board['ML']:
            if board['ML']==board['BL']:
                print(player+' wins.')
        if board['TL']==board['MM']:
            if board['MM']==board['BR']:
                print(player+' wins.')
        
    elif place=='TM':
        if board['TM']==board['TL']:
            if board['TM']==board['TR']:
                print(player+' wins.')
        if board['TM']==board['MM']:
            if board['MM']==board['BM']:
                print(player+' wins.')

    elif place=='TR':
        if board['TR']==board['TM']:
            if board['TM']==board['TL']:
                print(player+' wins.')
        if board['TR']==board['MM']:
            if board['MM']==board['BL']:
                print(player+' wins.')
        if board['TR']==board['MR']:
            if board['MR']==board['BR']:
                print(player+' wins.')
                
    elif place=='ML':
        if board['ML']==board['TL']:
            if board['TL']==board['BL']:
                print(player+' wins.')
        if board['ML']==board['MM']:
            if board['MM']==board['MR']:
                print(player+' wins.')
        
    elif place=='MM':
        if board['MM']==board['TM']:
            if board['TM']==board['BM']:
                print(player+' wins.')
        if board['MM']==board['ML']:
            if board['ML']==board['MR']:
                print(player+' wins.')
        if board['MM']==board['TL']:
            if board['TL']==board['BR']:
                print(player+' wins.')
        if board['MM']==board['BL']:
            if board['BL']==board['TR']:
                print(player+' wins.')

    elif place=='MR':
        if board['MR']==board['TR']:
            if board['TR']==board['BR']:
                print(player+' wins.')
        if board['MR']==board['MM']:
            if board['MM']==board['ML']:
                print(player+' wins.')

    elif place=='BL':
        if board['BL']==board['BM']:
            if board['BM']==board['BR']:
                print(player+' wins.')
        if board['BL']==board['ML']:
            if board['ML']==board['TL']:
                print(player+' wins.')
        if board['BL']==board['MM']:
            if board['MM']==board['TR']:
                print(player+' wins.')
        
    elif place=='BM':
        if board['BM']==board['BL']:
            if board['BL']==board['BR']:
                print(player+' wins.')
        if board['BM']==board['MM']:
            if board['MM']==board['TM']:
                print(player+' wins.')

    elif place=='TR':
        if board['BR']==board['BM']:
            if board['BM']==board['BL']:
                print(player+' wins.')
        if board['BR']==board['MM']:
            if board['MM']==board['TL']:
                print(player+' wins.')
        if board['BR']==board['MR']:
            if board['MR']==board['TR']:
                print(player+' wins.')

turn='X'
player='P1'
for i in range(9):
    printboard(board)
    print('The turn is now for '+player+' with '+turn+', where would you like to go?')
    place=input()
    c=1
    if board[place]==' ':
        board[place]=turn
    else:
        print('Place already filled')
        c=0
    checkwin(board, place,player)

    if c==1:
        if turn=='X':
            turn='O'
            player='P2'
        else:
            turn='X'
            player='P1'

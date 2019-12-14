import operator
from operator import itemgetter

def person_lister(f):
    def inner(people):
        k=[]
        print(people)
        people.sort(key=itemgetter(2))
        print(people)
        for i in people:
            k.append(f(i))
        return k
    return inner

@person_lister
def name_format(person):
    return ("Mr. " if person[3] == "M" else "Ms. ") + person[0] + " " + person[1]

if __name__ == '__main__':
    people = [input().split() for i in range(int(input()))]
    print(*name_format(people), sep='\n')

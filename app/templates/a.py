
def restoreString(self, s: str, indices: list(int)) -> str:
    '''
    in:
        s: 'abcd'
        indices: [3,2,1,0]
    out:
        result: 'dcba'

    for i, c in enumerate(sArray):
        old index of sArray -> new index in new array
        eg. sArray ['a','b','c','d']
        sArray[0] -> 'a', newArray[3] -> 'a' 
        newArray[indices[i]] = sArray[i]
    '''
    tempArray = list(range(len(s)))
    sArray = s.split()
    for i, character in enumerate(sArray):
        tempArray[indices[i]] = sArray[i]
    return ''.join(tempArray)
    

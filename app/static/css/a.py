'''
Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.
'''
def findNextAbsPerm(n: int) -> int:
    result = n
    resString = str(n)
    nString = str(n)
    permutations = []
    while True:
        for i, digit in enumerate(nString):
            nString

        

if __name__ == "__main__":
    findNextAbsPerm(48975)
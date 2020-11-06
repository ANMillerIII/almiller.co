           i = 1
    while i < len(array):
        j = 1
            while j > 0 and array[j - 1] > array[j]:
                array[j], array[j - 1] = array[j - 1], array[j]
                j -= 1
        i -= 1
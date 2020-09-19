# # Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

# # For example, given [5, 7, 10, 3, 4], return 3.

# # O N time, since just brute force
# def find_min_O_N_time(array):
#     # Set max equal to first in array
#     max = array[0]
#     # iterate over array
#     for i, n in enumerate(array):
#         # if current num is bigger than max, set max as current
#         if n >= max:
#             max = n
#         # if current index + 1 is less than length of array (not at end), then check if last element is smaller than previous - if so, return it
#         if i+1 < len(array):
#             if array[i+1] < max:
#                 return array[i+1]
#         # if we are at the end of the array, smallest element must have been the first one
#         else:
#             return array[0]

# # binary search
# class Solution(object):
#     def findMin(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         # If the list has just one element then return that element.
#         if len(nums) == 1:
#             return nums[0]

#         # left pointer
#         left = 0
#         # right pointer
#         right = len(nums) - 1

#         # if the last element is greater than the first element then there is no rotation.
#         # e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
#         # Hence the smallest element is first element. A[0]
#         if nums[right] > nums[0]:
#             return nums[0]

#         # Binary search way
#         while right >= left:
#             # Find the mid element
#             mid = left + (right - left) / 2
#             # if the mid element is greater than its next element then mid+1 element is the smallest
#             # This point would be the point of change. From higher to lower value.
#             if nums[mid] > nums[mid + 1]:
#                 return nums[mid + 1]
#             # if the mid element is lesser than its previous element then mid element is the smallest
#             if nums[mid - 1] > nums[mid]:
#                 return nums[mid]

#             # if the mid elements value is greater than the 0th element this means
#             # the least value is still somewhere to the right as we are still dealing with elements greater than nums[0]
#             if nums[mid] > nums[0]:
#                 left = mid + 1
#             # if nums[0] is greater than the mid value then this means the smallest value is somewhere to the left
#             else:
#                 right = mid - 1

import random



thoughts = {
    "workingclass": {
        "title": "Working Class",
        "date": "September 14, 2020",
        "text": "Essay regarding the working class will come in time!"
    },
    "retailinvestingandhealthyfinancialattitudes": {
        "title": "Retail Investing and Healthy Financial Attitudes",
        "date": "September 9, 2020",
        "text": "I've always wanted to write about retail investing - coming soon!"
    },
    "blueberrypicking": {
        "title": "Blueberry Picking",
        "date": "August 23, 2020",
        "text": "Have you ever been to Holmberg's? Best berries!"
    },
    "emikoandalbertmillersr": {
        "title": "Emiko and Albert Miller Sr.",
        "date": "August 10, 2020",
        "text": "My grandparents are truly amazing people - would love to write more about them here."
    },
    "fearofmissingoutoriginatesfrominsecurity": {
        "title": "Fear of Missing Out originates from Insecurity",
        "date": "July 15, 2020",
        "text": "<p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p><p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p>"
    }
}

thoughts_list = list(thoughts)
print(random.choices(thoughts_list, k=3))
for






# if __name__ == "__main__":
#     assert(find_min_O_N_time([5,7,10,3,4]) == 3)
#     assert(find_min_O_N_time([3,4,5,7,10]) == 3)
#     assert(find_min_O_N_time([4,5,7,10,3]) == 3)
#     assert(find_min_O_N_time([10,3,4,5,7]) == 3)
#     assert(find_min_O_N_time([7,10,3,4,5]) == 3)
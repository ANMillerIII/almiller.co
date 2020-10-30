# In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.

# At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

# What is the maximum total sum that the height of the buildings can be increased?

# Example:
# Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
# Output: 35
# Explanation:
# The grid is:
# [ [3, 0, 8, 4],
#   [2, 4, 5, 7],
#   [9, 2, 6, 3],
#   [0, 3, 1, 0] ]

# The skyline viewed from top or bottom is: [9, 4, 8, 7]
# The skyline viewed from left or right is: [8, 7, 9, 3]

# The grid after increasing the height of buildings without affecting skylines is:

# gridNew = [ [8, 4, 8, 7],
#             [7, 4, 7, 7],
#             [9, 4, 8, 7],
#             [3, 3, 3, 3] ]

# This was wrong because I misread the problem statement

import unittest


class Solution:
    def maxSkyline(self, grid) -> int:
        subgrid_maxes = []
        result = 0
        for subgrid in grid:
            subgrid_max = 0
            for building in subgrid:
                if building >= subgrid_max:
                    subgrid_max = building
                subgrid_maxes.append(subgrid_max)
        for i, subgrid in enumerate(grid):
            for building in subgrid:
                if building < subgrid_maxes[i]:
                    result += subgrid_maxes[i] - building
                    building = subgrid_max
        return result

        '''
        for subgrid in enumerate(grid):
            for j, building in enumerate(subgrid):
                if building is taller than other buildings in subgrid
                    set as subgrid max
                append building to list of subgrid maxes
        for subgrid in enumerate(grid):
            for j, building in enumerate(subgrid):
                if building is less than subgrid max
                    set building to subgrid max
                    total diff = subtract difference between subgrid max and original building
        '''
        pass


class Test(unittest.TestCase):

    grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]
    expected = 35

    def test(self):
        self.assertEqual(Solution.maxSkyline(None, self.grid), self.expected)


if __name__ == "__main__":
    unittest.main()

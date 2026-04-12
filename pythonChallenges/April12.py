# Given a 2D matrix, return a flat array with all of its values in clockwise order.
# The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.
# For example, given:

# [
#   [1, 2, 3],
#   [4, 5, 6],
#   [7, 8, 9]
# ]
# Return [1, 2, 3, 6, 9, 8, 7, 4, 5]



def spiral_matrix(matrix):
    new_array = []
    
    if len(matrix) == 0: 
        return new_array
    
    top = 0
    bottom = len(matrix) - 1
    left = 0
    right = len(matrix[0]) - 1;
    
    while top <= bottom and left <= right:
      ## Move right along the top row
      for i in range(left,right + 1):
        new_array.append(matrix[top][i])
      top+=1
      
      ## Move down the right column
      for i in range (top,bottom +1):
        new_array.append(matrix[i][right]);
      
      right-=1
      
      ## Move left along the bottom row (if there's still a row)
      if top <= bottom:
        for i in range(right, left - 1, -1):
            new_array.append(matrix[bottom][i]);
        
        bottom-=1
      
      
      ## Move up the left column (if there's still a column)
      if left <= right:
        for i in range(bottom, top -1, -1):
          new_array.append(matrix[i][left])
        left+=1
    
    
    
    return new_array

    



spiral_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) ##should return [1, 2, 3, 6, 9, 8, 7, 4, 5].

spiral_matrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) ##should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].

spiral_matrix([[True, False, False], [False, True, True], [False, True, False], [True, True, False]]) ##should return [True, False, False, True, False, False, True, True, False, False, True, True].

spiral_matrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) ##should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
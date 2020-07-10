Development Plan:

1. Create playing board
    a. have 7 columns to choose from be able stack 6 discs high
        - use a for loop to create the column divs and the circular cells
    b. Add unique id's to columns and cells to keep track of the disc locations

2. Allow user to choose what column they want to add their disc to
    a. add eventListeners to each column ('click')
        - adds disc to lowest empty cell in the selected column
    b. add a hover event for each column
        - display disc at top of column to show where user can drop the disc
    c. if column is full, don't allow more discs to be added
    d. determine current player's turn 

3. Determine if winning condition has been met
    a. use unique class to check if there are 4 in a row (horizontally, vertically, and diagonally)
        - use if statement to determine 4 in a row
    b. display a winning statement


Group Members:
1. Ana Ruiz Tovar
2. Edward Arneson-Perkins
3. Kevin Grove

Gitlab Page:
kevinwgrove.gitlab.io/connect-four
/**
 we want to write code for magicsqaure 
  idea: generate some random square then check every square if it is
  satisfying the logic that sum of all rows and cloumns are equal 
  if it is true then print else again genrated random square now 
  implement step by step
*/


//ultimately we have to print, so write it first
printSquaregrid(generateMagicSquare());

//Now step by step first write function for printSquaregrid
//we have write a function for grid so it looks good first complete the logic
//of code then we can write it


/**this function to print the magic sqaure in 2d grid format
 * @param {Array} squareGrid which is magic square 
 */
function printSquaregrid(squareGrid){
  console.log("-------------");
  
    for (let i = 0; i < squareGrid.length; i++) {
      let row = squareGrid[i];
      let rowString = "";
      for (let j = 0; j < row.length; j++) {
        rowString += ("| " + row[j] + " ");
      }
      console.log(rowString + "|");
      if (i === squareGrid.length - 1) {
        console.log("-------------");
      } else {
        console.log("----+---+---");
      }
    }
}

//now write the code for generateMagicSquare

/**this function to generate the magic square it invokes 
 * RandomGridGenerated function to do that
 * @returns {Array} a magic square is returned 
 */  
function generateMagicSquare(){
  let magicSquare=RandomGridGenerated() //RandomGridGenerated function for 
        //random matrix which is generated and assigned to magicSquare

     //now write condition for the magicsquare validation
        while(!checkSquare(magicSquare)){
          magicSquare=RandomGridGenerated()
        }

        return magicSquare
}

//now write RandomGridGenerated function and checkSquare function

  /** This function checks if the given square is a magic square.
   * A magic square has the property that the sum of all elements in each row, column, and diagonal is equal.
   * @param {Array} square - a 3x3 grid to be checked
   * @returns {boolean} - true if it's a magic square, false otherwise
   */
  function checkSquare(square) {
    const sum = square[0].reduce((a, b) => a + b); 
  
    // Checking sum of rows and columns.
    for (let i = 0; i < 3; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < 3; j++) {
        rowSum += square[i][j];
        colSum += square[j][i];
      }
      if (rowSum !== sum || colSum !== sum) {
        return false;
      }
    }
  
    // also for diagonals.
    const diag1Sum = square[0][0] + square[1][1] + square[2][2];
    const diag2Sum = square[0][2] + square[1][1] + square[2][0];
  
    return diag1Sum === sum && diag2Sum === sum;
  }

/**this function generates random squares and just return them and if 
 * it is not magic sqaure the above function will again invoke this 
 * until magic square is acheived
 * @returns {Array} randomly generated square
 */
function RandomGridGenerated(){
    // Create an array of numbers from 1 to 9
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    //now logic for random generation
    //we have to shuffle numbers for randomness but i dont like this
    //approach but i don't know other way
    let shuffledNumbers=shuffleArray(Numbers)

    let returnArray=[]
    for (let i = 0; i < 3; i++) {
      let newArray = [];
      for (let j = 0; j < 3; j++) {
        newArray.push(shuffledNumbers[i * 3 + j]);
      }
      returnArray.push(newArray);
    }
  
    return returnArray;
}

//now write code for shuffleArray
//i am not even sure of this code i can't figure it out on my own
  /** This function shuffles the elements of an array
   * @param {Array} array - the array to be shuffled
   * @returns {Array} - the shuffled array
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

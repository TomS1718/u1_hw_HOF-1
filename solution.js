  // You must RETURN your result in each function!

  function printNums(nums) {
    const arr = []
    nums.forEach((sum) => {
      
    })
    return nums
  }
    /**
     *  Using .forEach, add each number in the nums array to a new array.
     * @param nums => [1,2,3,4]
     */
  
  
  function returnSums(nums) {
    const arr = []
    nums.forEach((n, index) => {
      arr.push(n + index)
    }) 
      return arr
    }
  
    
    /**
     * Using forEach, push the sum of n plus the index
     * to a new array and return the new array
     * @param nums => [1,2,3,4,5]
     */
  
  
  function returnTotal(objs) {
    const arr = []
    const newSum = objs.forEach((objs, n) => {
      return objs + n
    })
    return newSum
    /**
     * Using forEach return a number that is the total sum of all numbers in the array of objects.
     * The key for each object will be n
     * @param objs => [{n:1}]
     */
  }
  
  function printMoney(decimals) {
    const deci = decimals.map((value) => {
      return '$' + value.toFixed(2)
    })
    return deci
    /**
     * @param decimals => [2.30, 2.40, 32.99]
     * Using .map, return an array of decimals formatted as dollars.
     * EX: {
     * input: [12.34, 9.99],
     * output: ['$12.34', '$9.99']
     * }
     * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
     */
  }
  
  function returnAllTrueValues(values) {
   const arr = values.filter((values) => {
     return values.happy
   })
   return arr
  }
    /**
     * @param values => [{name: 'Joe', happy:false}]
     * Using .filter, return an array of objects where happy equals true
     */
  
  
  function addTwo(nums) {
    const sumOfNumbers = nums.reduce((nums, nums2) => {
      return nums + (nums2 + 2)
    },0)
    return sumOfNumbers
  }
    /**
     * @param nums => [1,2,3,4]
     * Using .reduce, return the total sum of all numbers.
     * Each number should have 2 added to it.
     */
    //   3
    //   4 => 7
  
  
  function joinStrings(strings) { 
    const newString = []
    strings.reduce((arr)=> {
      return strings
    }, 0)
    return newString
    /**
     * @param strings => ['g', 'f', 'z']
     * Using .reduce, return a new string containing each string from the strings array.
     */
  }
  
  //Bonus
  function sortObjectsByValue(objs) {
  
    /**
     * @param objs => [{value: 1}, {value:2}, {value:23}]
     * Using .sort, sort the array of objects by the value key in ascending order
     * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
  }
  
  module.exports = {
    printNums,
    returnSums,
    returnTotal,
    printMoney,
    returnAllTrueValues,
    sortObjectsByValue,
    addTwo,
    joinStrings
  }
  
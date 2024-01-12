/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let length = nums.length
    let resultArray = [];

    if(length === 3){
        if(nums[0]+nums[1]+nums[2] === 0){
            resultArray.push(nums)
        }
        return resultArray;
    } else if(length > 3){
        for(let i=0; i<length-2; i++){
            for(let j=i+1; j<length-1; j++){
                for(let k=j+1; k<length; k++){
                    if((i!=j && j!=k && k!=i) && (nums[i]+nums[j]+nums[k] === 0)){
                        let arr=[nums[i], nums[j], nums[k]];
                        resultArray.push(arr);
                    }
                }
            }
        }
        console.log("resultArray1 ==> ", resultArray)
        // let ansArray = JSON.parse(JSON.stringify(resultArray))

        for(let i=0; i<resultArray.length-1; i++){
            if(resultArray[i].length>0){
                for(let j=i+1; j<resultArray.length; j++){
                    if(i!=j){
                        let array2 = resultArray[j].slice().sort();
                        let isSameArray = resultArray[i].slice().sort().every(function(value, index){
                            return value === array2[index]
                        })

                        isSameArray && resultArray.splice(j, 1, [])
                    }
                }
            }  
        }
        let ansArray = [];
        for(let i=0; i<resultArray.length; i++){
            if(resultArray[i].length > 0){
                ansArray.push(resultArray[i])
            }
        }
        console.log("resultArray2 ==> ", resultArray)
        console.log("ansArray ==> ", ansArray)
        return ansArray;
    }
};

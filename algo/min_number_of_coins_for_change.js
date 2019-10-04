function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
      let nums = Array(n+1).fill(Infinity);
      nums[0] = 0;

      console.log(denoms);
      for(const coin of denoms){
    
          for(let i = 0; i <= n; i++ ){
              if(coin <= i){
                  nums[i] = Math.min(nums[i - coin] + 1, nums[i]);
              }  
          }

          console.log(`Numbers: ${nums}`);
      
      }
      return nums[n] === Infinity ? -1 : nums[n];
      
  }


// console.log(minNumberOfCoinsForChange( 7, [1,5,10] ));


console.log(minNumberOfCoinsForChange( 7, [2, 4] ));
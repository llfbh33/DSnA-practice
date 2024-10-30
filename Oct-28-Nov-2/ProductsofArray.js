function productExceptSelf(nums) {
    const result = Array(nums.length).fill(1);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i];
    }

    // Calculate right products and multiply with left products in result
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }

    return result;
  }

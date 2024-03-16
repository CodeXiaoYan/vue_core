/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const cons = require('@vue/consolidate')

var removeElement = function (nums, val) {
  let l = nums.length
  let left = 0
  for (let right = 0; right < l; right++) {
    if (nums[right] !== val) {
      console.log('nums[right]', nums[right])
      //把不等于val的值放到左边最前面
      nums[left] = nums[right]
      left++
    }
  }
  console.log('nums', nums)
  return left
}
const nums = [3, 2, 2, 3]

const val = 3
console.log(removeElement(nums, val))

// 合并两个有序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let l = m + n //合并后的数组长度
  m-- //nums1的最后一个元素
  n-- //nums2的最后一个元素
  while (l--) {
    //如果nums1的最后一个元素大于nums2的最后一个元素或者nums2的最后一个元素不存在
    if (n < 0 || nums1[m] > nums2[n]) {
      // 把nums1的最后一个元素放到合并后的数组的最后一个位置
      nums1[l] = nums1[m--]
    } else {
      // 把nums2的最后一个元素放到合并后的数组的最后一个位置
      nums1[l] = nums2[n--]
    }
  }
  return nums1
}

const nums1 = [0, 1, 2, 3]
const m = 4
const nums2 = [2, 5, 6]
const n = 3
console.log(merge(nums1, m, nums2, n))

// 删除排序数组中的重复项 返回新数组长度
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = nums.length
  let left = 0
  for (let right = 1; right < l; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }
  }
  console.log('nums', nums)
  console.log('left', left)
  return left + 1
}
const nums21 = [1, 1, 2, 2, 2, 3]
// 开始运行时间
console.time('removeDuplicates')
removeDuplicates(nums21)
// 结束运行时间
console.timeEnd('removeDuplicates')
// 保留两位重复项
var removeDuplicates1 = function (nums) {
  let l = nums.length
  let left = 2
  let right = 2
  if (l <= 2) return l
  while (right < l) {
    if (nums[left - 2] !== nums[right]) {
      nums[left] = nums[right]
      left++
    }
    right++
  }
  console.log('nums', nums)
  console.log('left', left)
  return left + 1
}
removeDuplicates1(nums21)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 不使用库对nums进行排序我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色
  let l = nums.length
  let left = 0
  let right = l - 1
  for (let i = 0; i <= right; i++) {
    while (nums[i] === 2 && i < right) {
      // 交换nums[i]和nums[right]
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }
    if (nums[i] === 0) {
      // 交换nums[i]和nums[left]
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
    }
  }
}
const nums11 = [2, 0, 2, 1, 1, 0]
sortColors(nums11)
console.log('nums11', nums11)

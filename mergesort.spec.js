describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,4,6,8])).toEqual([[2,4],[6,8]])
  });
  it('is able to an uneven array into two halves', function() {
    expect( split([1,2,3,4,5]) ).toEqual([[1,2,3],[4,5]])
  })
});

// describe('Merge function', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     expect(merge([3,5,15],[9,11])).toEqual([3,5,9,11,15])
//   });
// });

describe("Mergesort function", function() {
  it("is able to take an unsorted array and return a sorted array", function() {
    expect(mergesort([13,27,1,8,18,31])).toEqual([1,8,13,18,27,31])
  })
})

// first we need a base case: .length would equal 1
// write the recursive function to take an array and split it up
// then push that single length array into a global array


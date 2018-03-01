describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(window, "swap").and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of one item', function(){
    expect( bubbleSort([52]) ).toEqual( [52] );
  });
  it('handles an array with multiple items', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
  });
});

import createXmasTree from "./index";

describe("createXmasTree", () => {
  
  // __*__
  // _***_
  // *****
  // __#__
  // __#__
  it("renders tree of length 3", () => {
    expect(createXmasTree(3)).toEqual(
      `__*__
_***_
*****
__#__
__#__`
    );
  });

  
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

  it("renders tree of length 5", () => {
    expect(createXmasTree(5)).toEqual(
      `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    );
  });
});

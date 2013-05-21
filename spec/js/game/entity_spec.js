describe("Entity", function() {

  it("have position and dimension", function() {
    var entity = new Entity({x: 10, y: 20, width: 30, height: 40});

    expect(entity.x).toEqual(10);
    expect(entity.y).toEqual(20);
    expect(entity.width).toEqual(30);
    expect(entity.height).toEqual(40);
  });

});

describe("Entity", function() {
  var entity;

  beforeEach(function() {
    entity = new Entity({x: 10, y: 20, width: 30, height: 40});
  });

  it("has position and dimension", function() {
    expect(entity.x).toEqual(10);
    expect(entity.y).toEqual(20);
    expect(entity.width).toEqual(30);
    expect(entity.height).toEqual(40);
  });

  it("moves relative to adjustment", function() {
    entity.move(12, -5);

    expect(entity.x).toEqual(22);
    expect(entity.y).toEqual(15);
  });
});

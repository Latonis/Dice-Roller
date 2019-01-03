var oneDie = {
  numberOfSides = 6;
  roll: function() {
    //Round down this -> Math.random() * (max - min) + min;
    var result = Math.Floor(Math.random() * (numberOfSides) + 1);
    return result;
  }
}

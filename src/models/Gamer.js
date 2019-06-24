let Gamer = function({name, wins}) {
    this.name = name,
    this.score = 0,
    this.wins = wins || 0
  };
  
  
  
  Gamer.prototype.getScore  = function() {
    return this.score;
  };
  
  Gamer.prototype.setScore  = function(newScore) {
    return this.score = newScore;
  };
  
  Gamer.prototype.resetScore  = function() {
    return this.score = 0;
  };

  export default Gamer;
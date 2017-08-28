/*Create a Bee class, in pseudoclassical style, with:
call the Grub superclass
set the prototype
set the constructor
an age property that is set to 5
a color property that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a job property that is set to keep on growing*/

var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

/// set the prototype
Bee.prototype = Object.create(Grub.prototype);

// set the constructor
Bee.prototype.constructor = Bee;

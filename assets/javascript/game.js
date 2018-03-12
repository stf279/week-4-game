// Again, trying to do what I can in the time I gave myself

'use strict';

//Set variables for the characters

$(document).ready(function(){

let chars = [

	luke = {

		name: "Luke",

		image: "<img src = 'assets/images/luke.jpg' id = 'luke'>",

		defendImage: "<img src = 'assets/images/luke.jpg'>",

		baseAttack: 10,

		attackPower: 10,

		health: 150,

	},

	vader = {

		name: "Darth Vader",

		image: "<img src = 'assets/images/vader.jpg' id = 'vader'>",

		defendImage: "<img src = 'assets/images/vader.jpg'>",

		baseAttack: 20,

		attackPower: 20,

        health: 180,
        
	},

	maul = {

		name: "Darth Maul",

		image: "<img src = 'assets/images/maul.jpeg' id = 'maul'>",

		defendImage: "<img src = 'assets/images/maul.jpeg'>",

		baseAttack: 15,

		attackPower: 15,

        health: 120,
        
	},

	yoda = {

		name: "Yoda",

		image: "<img src = 'assets/images/yoda.jpg' id = 'yoda'>",

		defendImage: "<img src = 'assets/images/yoda.jpg'>",

		baseAttack: 10, 

		attackPower: 10,

		health: 180,

	}

];

//Set screen after choices

$('.hero').click function() {

    heroImg = $(this).val();

    $('#hero').image(heroImg);

    return heroImg;

}

//Determine outcome of battles to include defeat and continuing until either defeat or victory

$('.attack').click function() {



}

}

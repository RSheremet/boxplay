$(document).ready(function(){

/*  		$("#page2").fadeOut(0);
  		$(".forma1").fadeOut(0);

  		$('.innput').click(function(){
  			$("#page2").fadeIn(500);
  			$(".forma1").fadeIn(500);
  		});

  		$('#page2').click(function(){
  			$("#page2").fadeOut(500);
  			$(".forma1").fadeOut(500);
  		})
*/
/*var m = 4;
$('input:button').click(function(){
	var a = $('ul').append('<li>' + m);
	m++;
});

$('ul').on('click','li', function(){
	$(this).append('!');
	$(this).off('click', function());
})

*/


/*	$('.slova').animate({height: 50, width: 50}, 1000);
	a == 1;
});

if (a == 1) {
	$('.The_example:eq(0)').on('click', function(){
		alert('fuck');

	})
	a == 0;
};
*/



/*$('select').change(function() {
	var a = $(this).val();

	$('.zaly input').each(function(idx, elem) {
		if ($(elem).val() == a) {
			$(elem).click();
		}
	});
  });*/

var one = 1;
var two = 2;
var three = 3;
var randhead;
var randbody;
var randlegs;


$('.choose').fadeIn();
$('.fighters div').on('click', function(){
	$('.choose').fadeOut(1000);
});

///////////////// Выбираем персонажа /////////////////
$('.fighters .rogue').on('click', function(){
	$('.the_fighter').replaceWith('<div class="rogue"><div class="health1">200</div></div>');
	$('.agility_n').html('5');
	$('.intellect_n').html('2');
	$('.strength_n').html('1');
});

function warriorchosen(agility, intellect, strength){
$('.fighters .warrior').on('click', function (){
	$('.the_fighter').replaceWith('<div class="warrior"><div class="health1">300</div></div>');
	$('.agility_n').html(agility);
	$('.intellect_n').html(intellect);
	$('.strength_n').html(strength);
	});
};
warriorchosen(2, 0, 5);

$('.fighters .mage').on('click', function(){
	$('.the_fighter').replaceWith('<div class="mage"><div class="health1">150</div></div>');
	$('.agility_n').html('1');
	$('.intellect_n').html('1');
	$('.strength_n').html('7');
});
/////////////////
$('div.head').on('click', function hitheadwarrior(){
	$('.head').css('background', '#179232');
	function hit(min, max) {
    randhead = min + Math.random() * (max + 1 - min);
    randhead = Math.floor(randhead);
    return randhead;
  }
	hit(one, three);

	/////////////////
	/////////////////
	if (randhead != one && randhead != two) {
		var a = $('.health2').html();
		var b = a - 30;
		var percent_damage_head_2 = 30/a*100; // Я вычислил сколько процентов от жизни в 15 урона
		var width_head_2 = $('.health2').outerWidth(); // Я определил какая ширина у элемента
		var percent_one_of_width_head_2 = width_head_2/100*percent_damage_head_2; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
		var newwidth_head_2 = width_head_2 - percent_one_of_width_head_2; // Я узнал сколько останется жизней
		$('.health2').html(b);
		$('.health2').animate({width: newwidth_head_2}, 500);
			if (b < 0) {
			alert('Вы выиграли');
			$('.health2').replaceWith('<div class="health3">Вы победили!</div>');
			
		}		
	}
	else {
		$('.head').css('background', 'purple');
	}
	////////////////
	////////////////
	var h = $('.health1').html();
	var m = h - 15;
	var percent_damage = 15/h*100; // Я вычислил сколько процентов от жизни в 15 урона
	var width = $('.health1').outerWidth(); // Я определил какая ширина у элемента
	var percent_one_of_width = width/100*percent_damage; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
	var newwidth = width - percent_one_of_width; // Я узнал сколько останется жизней
	$('.health1').html(m);
	$('.health1').animate({width: newwidth}, 500);
	if (m < 0) {
		alert('Вы проиграли!');
		$('.health1').replaceWith('<div class="health3">Вы проиграли!</div>');
	}


	
});

$('div.bodyy').on('click', function(){
	$('.bodyy').css('background', '#179232');
	function hit(min, max) {
    randbody = min + Math.random() * (max + 1 - min);
    randbody = Math.floor(randbody);
    return randbody;
  }
	hit(one, 3);
	/////////////////
	/////////////////
	if (randbody != one) {
		var a = $('.health2').html();
		var b = a - 15;
		var percent_damage_head_2 = 15/a*100; // Я вычислил сколько процентов от жизни в 15 урона
		var width_head_2 = $('.health2').outerWidth(); // Я определил какая ширина у элемента
		var percent_one_of_width_head_2 = width_head_2/100*percent_damage_head_2; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
		var newwidth_head_2 = width_head_2 - percent_one_of_width_head_2; // Я узнал сколько останется жизней
		$('.health2').html(b);
		$('.health2').animate({width: newwidth_head_2}, 500);
			if (b < 0) {
			alert('Вы выиграли');
			$('.health2').replaceWith('<div class="health3">Вы победили!</div>');
		}		
	}
	else {
		$('.bodyy').css('background', 'purple');
	}
	////////////////
	////////////////
	var h = $('.health1').html();
	var m = h - 10;
	var percent_damage = 10/h*100; // Я вычислил сколько процентов от жизни в 15 урона
	var width = $('.health1').outerWidth(); // Я определил какая ширина у элемента
	var percent_one_of_width = width/100*percent_damage; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
	var newwidth = width - percent_one_of_width; // Я узнал сколько останется жизней
	$('.health1').html(m);
	$('.health1').animate({width: newwidth}, 500);
	if (m < 0) {
		alert('Вы проиграли!');
		$('.health1').replaceWith('<div class="health3">Вы проиграли!</div>');
	}


	
});

$('div.legs').on('click', function(){
	$('.legs').css('background', '#179232');
	function hit(min, max) {
    randlegs = min + Math.random() * (max + 1 - min);
    randlegs = Math.floor(randlegs);
    return randlegs;
  }
	hit(one, 5);
	/////////////////
	/////////////////
	if (randlegs != 1) {
		var a = $('.health2').html();
		var b = a - 5;
		var percent_damage_head_2 = 5/a*100; // Я вычислил сколько процентов от жизни в 15 урона
		var width_head_2 = $('.health2').outerWidth(); // Я определил какая ширина у элемента
		var percent_one_of_width_head_2 = width_head_2/100*percent_damage_head_2; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
		var newwidth_head_2 = width_head_2 - percent_one_of_width_head_2; // Я узнал сколько останется жизней
		$('.health2').html(b);
		$('.health2').animate({width: newwidth_head_2}, 500);
			if (b < 0) {
			alert('Вы выиграли');
			$('.health2').replaceWith('<div class="health3">Вы победили!</div>');
		}		
	}
	else {
		$('.legs').css('background', 'purple');
	}
	////////////////
	////////////////
	var h = $('.health1').html();
	var m = h - 3;
	var percent_damage = 3/h*100; // Я вычислил сколько процентов от жизни в 15 урона
	var width = $('.health1').outerWidth(); // Я определил какая ширина у элемента
	var percent_one_of_width = width/100*percent_damage; // Я узнал сколько в 1 проценте жизней у ширины, 
														//а так же сколько процентов жизней в 15 урона
	var newwidth = width - percent_one_of_width; // Я узнал сколько останется жизней
	$('.health1').html(m);
	$('.health1').animate({width: newwidth}, 500);
	if (m < 0) {
		alert('Вы проиграли!');
		$('.health1').replaceWith('<div class="health3">Вы проиграли!</div>');
	}


	
});





































});

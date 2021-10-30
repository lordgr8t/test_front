$(document).ready(function() {
	//welcome animation
	$('.welcome').addClass("animate__bounceIn");
	setTimeout(function(){
		$('.welcome').slideUp(500);
		$('.quest1').removeClass("dn");
	}, 1500);	
});

//checkbox
$('.check1').bind("click", function () {
	$('.quest').removeClass("animate__headShake");		
	$(".check2 , .check3 , .check4").removeAttr("checked");
	$('#answer').val("1_1");
});
$('.check2').bind("click", function () {
	$('.quest').removeClass("animate__headShake");		
	$(".check1 , .check3, .check4").removeAttr("checked");
	$('#answer').val("1_2");
});
$('.check3').bind("click", function () {
	$('.quest').removeClass("animate__headShake");		
	$(".check2 , .check1, .check4").removeAttr("checked");
	$('#answer').val("1_3");
});
function check4() {
	$('.quest').removeClass("animate__headShake");		
	$(".check2 , .check1 , .check3").removeAttr("checked");
	$('#answer').val("1_4");
}	

//reloader
function reload() {
	location.reload();
}
	//bar
	let bar = 0;
	let bar_percent = bar + "%";

	//next qust
	let kind_work = "";
	function next1() {
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				kind_work = "design";
			}
			if (answer == "1_2") {				
				kind_work = "tester";
			}
			if (answer == "1_3") {				
				kind_work = "front";
			}
			$('#answer').val("");
			$('.qst_title').text("Есть ли у тебя опыт?");		
			$('.text_answ_1').text("Больше 5 лет работаю по этой специальности");		
			$('.text_answ_2').text("Ну немножко поработать успел");		
			$('.text_answ_3').text("Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу");
			$(".check2 , .check1, .check3").removeAttr("checked");
			$(".next").attr('onclick', 'next2()');
		}
	}
	function next2() {
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = 20;
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = 10;
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			
			if (kind_work == "design") {
				$('#answer').val("");
				$('.qst_title').text("В какой программе делаешь макеты?");		
				$('.text_answ_1').text("Figma");		
				$('.text_answ_2').text("Photoshop");		
				$('.text_answ_3').text("В такой, о которой вы не слышали");
				$(".check2 , .check1, .check3").removeAttr("checked");
				$(".next").attr('onclick', 'next3()');
			}
			if (kind_work == "tester") {
				$('.quest').html('<p>Прости, но такой вакансии пока нет, может на кого-то другого хочешь попробоваться?</p><div class="tac"><img src="img/reload.svg" onclick="reload()" class="pointer"></div>')			
			}
			if (kind_work == "front") {
				$('#answer').val("");
				$('.qst_title').text("Начнём с простого, div от span отличишь?");		
				$('.text_answ_1').text("Естественно, первый для контейнеров, второй для текста");		
				$('.text_answ_2').text("Код пишут компьютеры, пусть они и отличают");		
				$('.text_answ_3').text("Думаю, что да");
				$(".check2 , .check1, .check3").removeAttr("checked");
				$(".next").attr('onclick', 'next8()');
			}
			
		}		
	}
	function next3(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar + 15;
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar - 10;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}						
			$('#answer').val("");
			$('.qst_title').text("Любишь играться со шрифтами?");		
			$('.text_answ_1').text("Я живу этим");		
			$('.text_answ_2').text("Если очень попросите");		
			$('.text_answ_3').text("Я сам/сама создаю шрифты");
			$('.onemoreQ').append('<div onclick="check4()" class="answ answ_checck d-flex aic mb-3"><input type=\"checkbox\" class="check4"><span class="text_answ_3 ml-2">Нет, в игры не играю</span></div>').prev();
			$(".check2 , .check1, .check3").removeAttr("checked");
			$(".next").attr('onclick', 'next4()');						
		}
	}
	function next4(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar + 20;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 10;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar + 30;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_4") {				
				bar = bar - 5;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}	
			$('#answer').val("");
			$('.qst_title').text("А белый цвет сможешь белее сделать?");		
			$('.text_answ_1').text("Я же говорил(а), что этого заказчика забанить надо");		
			$('.text_answ_2').text("Пусть заказчик приедет и на Ретине посмотрит ещё разок");		
			$('.text_answ_3').text("Конечно сделаю, если #fff недостаточно");
			$('.onemoreQ').html('');
			$(".check2 , .check1, .check3").removeAttr("checked");
			$(".next").attr('onclick', 'next5()');						
		}
	}
	function next5(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar + 15;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 5;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar - 10;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}

			$('#answer').val("");
			$('.qst_title').text("Последний вопрос: в какую стороны расти планируешь?");		
			$('.text_answ_1').text("До арт-дира, естественно");		
			$('.text_answ_2').text("В какую-то одну сферу хочу, но пока не знаю какую");		
			$('.text_answ_3').text("Пока расту в ширину");
			$(".check2 , .check1, .check3").removeAttr("checked");
			$(".next").attr('onclick', 'next6()');						
		}
	}
	function next6(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar + 20;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 10;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar + 5;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			
			if (bar <= 50) {
				$('#answer').val("");
				$('.qst_title').text("Кстати, а оценку задач ты как даёшь?");		
				$('.text_answ_1').text("По часам");		
				$('.text_answ_2').text("По дням");		
				$('.text_answ_3').text("По наитию");
				$(".check2 , .check1, .check3").removeAttr("checked");
				$(".next").attr('onclick', 'next7()');	
			}else{
				resulter();
			}
		}
	}
	function next7(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar * 1.5;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar * 1.2;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar * 0.7;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}

			resulter();
			
		}
	}
	function next8(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar + 15;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 10;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar - 5;
				if (bar < 100) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			$('#answer').val("");
			$('.qst_title').text("Окей, а с JS у тебя как?");		
			$('.text_answ_1').text("Я как-то больше по JQuery");		
			$('.text_answ_2').text("Норм, прошёл курс");		
			$('.text_answ_3').text("На чистом JS уже не первый год пишу");
			$(".check2 , .check1, .check3").removeAttr("checked");
			$(".next").attr('onclick', 'next9()');	
			
		}
	}
	function next9(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar - 30;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 5;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar + 20;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			$('#answer').val("");
			$('.qst_title').text("Насколько ты любишь PHP?");		
			$('.onemoreQ').html('<p>Введите число</p><input min="0" max="10" id="answer_in" type="number" placeholder="от 0 до 10" class="mb-3"><p>где 0 — это совершенно не люблю, а 10 — обожаю</p>');		
			$('.text_answ_1').text("");		
			$('.text_answ_2').text("");	
			$('.text_answ_3').text("");
			$(".check2 , .check1, .check3").removeAttr("checked").addClass("dn");
			$(".next").attr('onclick', 'next10()');	
			
		}
	}
	function next10(){
		let answer = $('#answer_in').val();
		if (answer >= 0 & answer <= 10) {
			if (answer == 0) {
				bar = bar + 20;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}else{
				bar = bar - 50;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			$('#answer').val("");
			$('.qst_title').text("Сколько дней в неделю планируешь ходить в офис?");		
			$('.onemoreQ').html('');		
			$('.text_answ_1').text("Я хочу работать удалённо");		
			$('.text_answ_2').text("3-4 дня в неделю будет норм");	
			$('.text_answ_3').text("Я перееду в ваш офис, крепитесь");
			$(".check2 , .check1, .check3").removeAttr("checked").removeClass("dn");
			$(".next").attr('onclick', 'next11()');	
		}else{
			$('.quest').addClass("animate__headShake");
			$('#answer_in').addClass("red");
		}	
	}
	function next11(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar - 20;
				if (bar < 0) {
					bar = 0;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar + 5;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar + 20;
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (bar <= 40) {
				$('#answer').val("");
				$('.qst_title').text("Кстати, а оценку задач ты как даёшь?");		
				$('.onemoreQ').html('');		
				$('.text_answ_1').text("По часам");		
				$('.text_answ_2').text("По дням");	
				$('.text_answ_3').text("По наитию");
				$(".check2 , .check1, .check3").removeAttr("checked").removeClass("dn");
				$(".next").attr('onclick', 'next12()');
			}else{
				resulter();
			}						
		}
	}
	function next12(){
		let answer = $('#answer').val();
		if (answer == "") {
			$('.quest').addClass("animate__headShake");
		}else{
			if (answer == "1_1") {				
				bar = bar * 1.8;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_2") {				
				bar = bar * 1.3;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			if (answer == "1_3") {				
				bar = bar * 0.6;
				bar = bar.toFixed();
				if (bar > 100) {
					bar = 100;
				}
				bar_percent = bar + "%";		
				$('.stat_bar span').text(bar + "%");
				$('.stat_bar__progress').css({'width' : bar_percent});
			}
			resulter();			
		}
	}
	//result
	function resulter() {
		let res_text = "";
		if (bar <= 50) {			
			res_text  = "К сожалению, нам с тобой не по пути.";
		}
		if (bar >= 51 & bar <= 80) {
			res_text  = "Ну если больше никто не придёт, то возьмём тебя";
		}
		if (bar >= 81 & bar <= 100) {
			res_text  = "Проверь почту, там уже лежит оффер";
		}		
		$('.qst_title, .text_answ_1, .text_answ_2, .text_answ_3, .check2 , .check1, .check3, .next').remove();		
		$('.onemoreQ').html('<h1>Результаты</h1><p>Вы на ' +  bar +'% успешно прошли собеседование</p><p>' + res_text + '</p>');				
	}
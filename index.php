<!DOCTYPE html>
<html lang="en">
<?php include('includes/head.php') ?>
<body>	
	<div class="welcome">
		<h1 class="tac animate__animated ">Добро пожаловть <br>на тестирование!</h1>
	</div>

	<div class="quest quest1 dn animate__animated">
		<div class="stat_bar pos-r mb-5">
			<p>Вероятность успешного прохождения: <span>0%</span></p>
			<div class="stat_bar__progress pos-a"></div>
		</div>
		<h2 class="qst_title">Для начала давай определимся на какую вакансию ты претендуешь?</h2>
		<div class="answ answ_checck d-flex aic mb-3 mt-5">
			<input type="checkbox" class="check1">
			<span class="text_answ_1 ml-2">Веб-дизайнер</span>
		</div>
		<div class="answ answ_checck d-flex aic mb-3">
			<input type="checkbox" class="check2">
			<span class="text_answ_2 ml-2">Тестировщик</span>
		</div>
		<div class="answ answ_checck d-flex aic mb-3">
			<input type="checkbox" class="check3">
			<span class="text_answ_3 ml-2">Джуниор фронтенд разработчик</span>
		</div>
		<div class="onemoreQ">
		</div>
		<div class="tac mt-5">
			<input type="hidden" id="answer">
			<img src="img/next.svg" onclick="next1()" class="next pointer">
		</div>
	</div>
	
	<?php include('includes/script.php') ?>
	<script src="js/index.js"></script>
</body>
</html>
<div id="menu">
	<h1>Catégories</h1><hr width="20%">
	<div class="burger-icon">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<ul class="menu-items">
		<li><a href="index.php">Tout</a></li>
		<?php foreach ($categories as $categorie): ?>
			<li><a href="index.php?action=categorie&id=<?= $categorie->id ?>"><?= $categorie->libelle ?></a></li>
		<?php endforeach ?>
	</ul>
</div>
<script>
  // Function to toggle the class on the menu when the burger icon is clicked
  document.querySelector('.burger-icon').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show-menu-items');
  });
</script>


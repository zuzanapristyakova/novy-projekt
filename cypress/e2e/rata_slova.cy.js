<!doctype html>
<html lang="sk">

<head>
  <meta charset="UTF-8" />
  <title>Počítanie slov bez špeciálnych znakov</title>
</head>
<body>
  <h1>Počítanie slov</h1>
  <textarea id="textInput" rows="6" cols="50" placeholder="Napíš sem text..."></textarea>
  <br>
  <button onclick="spocitajSlova()">Spočítaj slová</button>
  <p>Počet slov: <span id="vysledok">0</span></p>

  <script>
    function spocitajSlova() {
      text = document.getElementById("textInput").value.trim();

      // Odstráň špeciálne znaky (ponechá len písmená, čísla a medzery)
      text = text.replace(/[^a-zA-Z0-9á-žÁ-Ž\s]/g, "");

      // Rozdelenie textu podľa medzier a filtrovanie prázdnych hodnôt
      const slova = text.split(/\s+/).filter(slovo = slovo.length = 0);

      // Zobrazenie výsledku
      document.getElementById("vysledok").textContent = slova.length;
    }
  </script>
</body>
</html>

  text.replace(/[^a-zA-Z0-9á-žÁ-Ž\s]/g, "")
document.addEventListener('DOMContentLoaded', function() {
  const foodItems = document.querySelectorAll('.harmful-foods li');
  const foodDescription = document.getElementById('food-description');

  const foodInfo = {
    chocolate: {
      title: "Kāpēc šokolāde ir kaitīga?",
      description: "Šokolāde satur teobromīnu un kofeīnu, kas ir toksiski kaķiem. Jo tumšāka šokolāde, jo toksiskāka. Var izraisīt sirds aritmiju, centrālās nervu sistēmas disfunkciju, lēkmes un pat nāvi."
    },
    onions: {
      title: "Kāpēc sīpoli un ķiploki ir kaitīgi?",
      description: "Tie veicina eritrocītu dalīšanos un izraisa anēmiju. Var izraisīt vājumu, apātiju, apetītes trūkumu un vemšanu. Indīgas ir visas auga daļas."
    },
    grapes: {
      title: "Kāpēc vīnogas un rozīnes ir kaitīgas?",
      description: "Izraisa nopietnus nieru bojājumus, kas var novest pie nieru mazspējas. Pat neliels daudzums var būt toksisks. Sākotnējās pazīmes ietver vemšanu un caureju."
    },
    eggs: {
      title: "Kāpēc jēlas olas ir kaitīgas?",
      description: "Rada risku saindēties ar pārtiku. Olas baltumā esošā olbaltumviela avidīns traucē organismam absorbēt B vitamīna biotīnu."
    },
    liver: {
      title: "Kāpēc aknas lielos daudzumos ir kaitīgas?",
      description: "Var izraisīt A vitamīna toksicitāti, kas var ietekmēt kaķa kaulus un izraisīt osteoporozi."
    },
    alcohol: {
      title: "Kāpēc alkohols ir kaitīgs?",
      description: "Kaķiem alkohola iedarbība ir daudz smagāka nekā cilvēkiem to mazā auguma dēļ. Var izraisīt nopietnus orgānu bojājumus."
    },
    caffeine: {
      title: "Kāpēc kofeīns ir kaitīgs?",
      description: "Līdzīgi kā alkohols, kofeīna iedarbība kaķiem ir daudz spēcīgāka nekā cilvēkiem. Var izraisīt nopietnus veselības traucējumus."
    },
    milk: {
      title: "Kāpēc piens ir kaitīgs?",
      description: "Pieaugušiem kaķiem bieži ir laktozes nepanesība. Piena uzņemšana var radīt gremošanas traucējumus un diskomfortu."
    }
  };

  foodItems.forEach(item => {
    item.addEventListener('click', function() {
      const foodType = this.getAttribute('data-info');
      const info = foodInfo[foodType];
      foodDescription.innerHTML = `<h3>${info.title}</h3><p>${info.description}</p>`;
    
      foodDescription.classList.remove('hidden')
    });
  });
});

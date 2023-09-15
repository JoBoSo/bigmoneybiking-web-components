// apply button:focus css to 'everywhere' button on load
window.onload = function () {
  document.getElementsByName('everywhere')[0].focus();
};

function tileFilter(buttonName) {
  $("my-tiles a").each(function() {
    let filter = []

    if (buttonName == "everywhere") {
      $(this.parentElement.parentElement).show(); 
      return true;
    }

    // Bike tours (index.html)
    else if (buttonName == "westCoast") {
      filter = ['nanaimo-courtenay', 'san-josef-bay', 'brewster-lake', 'texada', 'comox-lake', 'quadra-cortes', 'nass-valley', 'haida-gwaii', 'galiano', 'saltspring', 'south-vi', 'pender-mayne-saturna', 'olympic', 'sunshine-coast', 'lomas-lake', 'san-juan-circle']
    }
    else if (buttonName == "gulfIslands") {
      filter = ['texada', 'quadra-cortes', 'galiano', 'saltspring', 'pender-mayne-saturna']
    }
    else if (buttonName == "vancouverIsland") {
      filter = ['nanaimo-courtenay', 'san-josef-bay', 'brewster-lake', 'comox-lake', 'south-vi', 'lomas-lake']
    }
    else if (buttonName == "interiorBC") {
      filter = ['begbie-falls', 'downie-creek', 'babine-lake']
    }
    else if (buttonName == "quebec") {
      filter = ['to-mtrl', 'ptit-train', 'mtrl-sherbrooke', 'quebec']
    }

    // Hikes (hikes.html)
    else if (buttonName == "quebecHikes") {
      filter = ['mont-nixon', 'montagne-noire']
    }
    else if (buttonName == "rockiesHikes") {
      filter = ['six-glaciers', 'grotto-mtn', 'mt-temple', 'bourgeau', 'cory-pass', 'ha-ling', 'jasper']
    }
    else if (buttonName == "columbiasHikes") {
      filter = ['mt-begbie', 'mt-cartier', 'mccrae-peak', 'mt-revelstoke', 'viking-ridge']
    }
    else if (buttonName == "skeenaHikes") {
      filter = ['silver-king', 'seaton-ridge']
    }
    else if (buttonName == "coastHikes") {
      filter = ['tin-hat', 'oliver-creek', 'gunsight', 'silvern-lake', 'maroon-mtn']
    }
    else if (buttonName == "vancouverIslandHikes") {
      filter = ['mt-albert-edward', 'phillips-ridge', 'mt-becher', 'heather-mountain']
    }
    else if (buttonName == "ontarioHikes") {
      filter = ['algonquin']
    }

    let thisPageName = this.href.substring(this.href.lastIndexOf('/') + 1, this.href.length - 5);

    if (filter.includes(thisPageName)) {
      $(this.parentElement.parentElement).show()
    }
    else {
      $(this.parentElement.parentElement).hide()
    }
  });
}
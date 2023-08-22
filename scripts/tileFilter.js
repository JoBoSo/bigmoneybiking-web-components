// apply button:focus css to 'everywhere' button on load
window.onload = function () {
  document.getElementsByName('everywhere')[0].focus();
};

function tileFilter(buttonName) {
  $("my-tiles a").each(function() {
    let westCoast = ['nanaimo-courtenay', 'san-josef-bay', 'brewster-lake', 'texada', 'comox-lake', 'quadra-cortes', 'nass-valley', 'haida-gwaii', 'galiano', 'saltspring', 'south-vi', 'pender-mayne-saturna', 'olympic', 'sunshine-coast', 'lomas-lake'];
    let interiorBC = ['begbie-falls', 'downie-creek', 'babine-lake'];
    let quebec = ['to-mtrl', 'ptit-train', 'mtrl-sherbrooke', 'quebec'];

    let filter = []
    if (buttonName == "everywhere") {
      $(this.parentElement.parentElement).show(); 
      return true;
    }
    else if (buttonName == "westCoast") {filter = westCoast}
    else if (buttonName == "interiorBC") {filter = interiorBC}
    else if (buttonName == "quebec") {filter = quebec}

    let thisPageName = this.href.substring(this.href.lastIndexOf('/') + 1, this.href.length - 5);

    if (filter.includes(thisPageName)) {
      $(this.parentElement.parentElement).show()
    }
    else {
      $(this.parentElement.parentElement).hide()
    }
  });
}
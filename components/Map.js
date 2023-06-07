class Map extends HTMLElement {
  constructor() {
      super();
      this.data_id = '';
  }

  static get observedAttributes() {
      return ['data_id'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue; 
  }

  connectedCallback() {
    let style = `
      <style>

      .map {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
  
      .myMap {
          width:100%; 
          height:100%; 
          overflow:hidden; 
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
      }
      
      .myMap iframe {
          margin-top:-69px; 
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          display: block;
      }

      </style>
    `;

    this.innerHTML = style + `
      <div class="map">
        <h2 class="text-center">Map</h2>
        <div class="row no-gutters">
          <div class="col-12 myMap">
            <iframe src=${maps[this.data_id]} width="100%" height="480"></iframe>
          </div>
        </div>
      </div>
    `;
  }
}

const maps = {
  "bourgeau": "https://www.google.com/maps/d/u/0/embed?mid=1lbCvBJcZKr32v7UgVAxIg-i0zMMB88A&ehbc=2E312F",
  "cory-pass": "https://www.google.com/maps/d/u/0/embed?mid=1ZsUOdij1NHaBDTuVmuagcmzYaKr-lDQ&ehbc=2E312F",
  "grotto-mtn": "https://www.google.com/maps/d/u/0/embed?mid=1DzzdeUire_Kye-tWb5HyNGsBTmJy8EU&ehbc=2E312F",
  "gunsight": "https://www.google.com/maps/d/u/0/embed?mid=1rX3w1xIPzum6mCQzuZLrdSCe8OPFcXI&ehbc=2E312F",
  "ha-ling": "https://www.google.com/maps/d/u/0/embed?mid=1hFUgUhjbSJkDS4_Qf-Ue8cFuFwlKuro&ehbc=2E312F",
  "jasper": "https://www.google.com/maps/d/u/0/embed?mid=1aUo5uHXB-wI120qS5PgWnkvnKrijtI8&ehbc=2E312F",
  "maroon-mtn": "https://www.google.com/maps/d/u/0/embed?mid=1-06w5G52jci86sYHRXYXvMx5VlluXu0&ehbc=2E312F",
  "mccrae-peak": "https://www.google.com/maps/d/u/0/embed?mid=1EtrXxbO9AgQktpDf-yQHd4HL7mARZmk&ehbc=2E312F",
  "mont-nixon": "https://www.google.com/maps/d/u/0/embed?mid=1gcATIJ6qkJt4eJBdqUQw0LWaaj5dnRM&ehbc=2E312F",
  "montagne-noire": "https://www.google.com/maps/d/u/0/embed?mid=1UnbPwE4HdsO9T-4qN3AKLcj4G5SMzQw&ehbc=2E312F",
  "mt-albert-edward": "https://www.google.com/maps/d/u/0/embed?mid=1l_2dMwRyrksaHOdHeAIiqJutvrOfaok&ehbc=2E312F",
  "mt-begbie": "https://www.google.com/maps/d/u/0/embed?mid=16cbg31rBSrQIQpK689sAzANtsSylWZM&ehbc=2E312F",
  "mt-cartier": "https://www.google.com/maps/d/u/0/embed?mid=1cixz00iJPzSXjUIlfShl2KrMVGvSmWY&ehbc=2E312F",
  "mt-revelstoke": "https://www.google.com/maps/d/u/0/embed?mid=1Gd7Z323Zxz3TNQhRwL-C4lmQcivFFfo&ehbc=2E312F",
  "mt-temple": "https://www.google.com/maps/d/u/0/embed?mid=1X2B6AiZq_1l9yAeo_MmyQvkV2EtFxlI&ehbc=2E312F",
  "oliver-creek": "https://www.google.com/maps/d/u/0/embed?mid=1VsYDEk-phzMFZsZqJCLnv5UGMsPkVyI&ehbc=2E312F",
  "phillips-ridge": "https://www.google.com/maps/d/u/0/embed?mid=1vgl04oxeQh5RNuwWmUbKvwTFfkIGTjs&ehbc=2E312F",
  "seaton-ridge": "https://www.google.com/maps/d/u/0/embed?mid=18jqgNukn_8klDVzKS7_RqZJxjGlhFuE&ehbc=2E312F",
  "silver-king": "https://www.google.com/maps/d/u/0/embed?mid=10_9qqkr9ggJRwrk9b3X3HoRHzQPmhk8&ehbc=2E312F",
  "silvern-lake": "https://www.google.com/maps/d/u/0/embed?mid=19I0WIUD0ClzxbfFHzCGSue2zS2YZZRc&ehbc=2E312F",
  "six-glaciers": "https://www.google.com/maps/d/u/0/embed?mid=1m3RYU3ynXAksAefnEMwITWT2ea4eMTI&ehbc=2E312F",
  "tin-hat": "https://www.google.com/maps/d/u/0/embed?mid=1laauCVNKD6Gl3kuVtPOaKi-zpukyG8A&ehbc=2E312F",
  "viking-ridge": "https://www.google.com/maps/d/u/0/embed?mid=1sdEU6gOPsKEAa4oZr8_8FveDOxhVYf8&ehbc=2E312F",
  "brewster-lake": "https://www.google.com/maps/d/u/0/embed?mid=1Juuj4fXtX0Yr569TceTUeuUifm780MQ&ehbc=2E312F",
  "comox-lake": "https://www.google.com/maps/d/u/0/embed?mid=1BpQIN6SnObNo_0d7jkImCtMpCI9bRnE&ehbc=2E312F",
  "downie-creek": "https://www.google.com/maps/d/u/0/embed?mid=17dqZEY2G0OWZBmriEmpmWO6g3cCAOBI&ehbc=2E312F",
  "babine-lake": "https://www.google.com/maps/d/u/0/embed?mid=1GiywlimP6jG8_hqfdW9YYAsgZ5GGwvk&ehbc=2E312F",
  "begbie-falls": "https://www.google.com/maps/d/u/0/embed?mid=1ffp5cHfujFu7V7znqWR-G2gpcjPl57A&ehbc=2E312F",
  "haida-gwaii": "https://www.google.com/maps/d/u/0/embed?mid=1zgLwCjrewa7yOP0tJ_QADu9LfCEJ6IA&ehbc=2E312F",
  "mtrl-sherbrooke": "https://www.google.com/maps/d/u/0/embed?mid=1LXIoUPHSX6sVgbJxS4MRbDNSeMoRc3c&ehbc=2E312F",
  "nanaimo-courtenay": "https://www.google.com/maps/d/u/0/embed?mid=1d67GwzoVK8FRzqz3RFWVm5aGYth4-VU&ehbc=2E312F",
  "nass-valley": "https://www.google.com/maps/d/u/0/embed?mid=1N0BMBnvfyKtvfPEHPh0i5bRzNWGOl0U&ehbc=2E312F",
  "ptit-train": "https://www.google.com/maps/d/u/0/embed?mid=1VJNTSZyRypR02pVd6nGhmGGHv_c3gy8&ehbc=2E312F",
  "quadra-cortes": "https://www.google.com/maps/d/u/0/embed?mid=1RpB7QpPtamUp435SgbW_wTM7Ex3kSS8&ehbc=2E312F",
  "san-josef-bay": "https://www.google.com/maps/d/u/0/embed?mid=1FD9t09RTr4pPd4YAO6ks995gsM_MCg0&ehbc=2E312F",
  "texada": "https://www.google.com/maps/d/u/0/embed?mid=106wwL9ELevtJLC0_zcI23w6hlv7CzlI&ehbc=2E312F",
  "to-mtrl": "https://www.google.com/maps/d/u/0/embed?mid=1XuTBbBZ4atnQiUkwiHpvshf5EYXXuUQ&ehbc=2E312F",
  "algonquin": "https://www.google.com/maps/d/u/0/embed?mid=17OFbjxuOAxgDPSkkov9-UhxgyA4EpHc&ehbc=2E312F",
  "quebec": "https://www.google.com/maps/d/u/0/embed?mid=1dRVRYK3YsUoonsU0oFdLnUJ4IdSnDOU&ehbc=2E312F",
  "mt-becher": "https://www.google.com/maps/d/u/0/embed?mid=1c8jTN3aEAq9HaPeSe9mzfzl3jlaPkJs&ehbc=2E312F",
  "galiano": "https://www.google.com/maps/d/u/0/embed?mid=16nlHlJ01AuXwsDA9LXst5ln5DlNf7yA&ehbc=2E312F",
  "saltspring": "https://www.google.com/maps/d/u/0/embed?mid=1f59MezEzfh248rS7IyEblRFqhJWWMvY&ehbc=2E312F",
  "south-vi": "https://www.google.com/maps/d/u/0/embed?mid=",
}

customElements.define('my-map', Map);
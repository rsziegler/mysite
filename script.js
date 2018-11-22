/*
<ul id = "reviewbox">
  <li><img src="books/weregrettoinformyou.jpg" alt="We Regret to Inform You by Ariel Kaplan" length=104px height=159px></li>
  <li><p id = "review">
    <b>We Regret to Inform You by Ariel Kaplan<br/></b>
    i think i've written as much jquery as i can without actually learning jquery
  </p></li>
</ul>
*/

var data;
data += $.getJSON('https://raw.githubusercontent.com/alaynamnguyen/team-twoo/master/clubs.json');
console.log(data);
 var includesTags = [];

 function find() {
   includesTags = [];
   var searchTerm = document.getElementById("searchTerm").value;
   for (x in data) {
     var tags = data[x].tags;
     for (y in tags) {
       if (tags[y]==searchTerm.toLowerCase()) {
         includesTags[includesTags.length]=data[x];
       }
     }
   }
   return includesTags;
 }

 function loadStandardReviews() {
   document.getElementById("reviewcontainer").innerHTML = "";
   var returnDisplay = document.getElementById("return");
   returnDisplay.style.display = "none";
   for (x in data) {
     var book = data[x].book;
     var author = data[x].author;
     var tags = data[x].tags;
     var imgsrc = data[x].imgsrc;
     var review = data[x].review;
     var element = document.getElementById("reviewcontainer");
     element.innerHTML += "<ul id = 'reviewbox'><li><img src= '" +
        imgsrc +
        "' length=104px height=159px></li><li><p id = 'review'><b>" +
        book + " by " + author +
        "<br/></b>" +
        review +
        "</p></li></ul>";
   }
 }

 function loadSearchResults() {
   document.getElementById("reviewcontainer").innerHTML = "";
   var returnDisplay = document.getElementById("return");
   returnDisplay.style.display = "block";
   find();
   for (x in includesTags) {
     var book = includesTags[x].book;
     var author = includesTags[x].author;
     var tags = includesTags[x].tags;
     var imgsrc = includesTags[x].imgsrc;
     var review = includesTags[x].review;
     var element = document.getElementById("reviewcontainer");
     element.innerHTML = "";
     element.innerHTML += "<ul id = 'reviewbox'><li><img src= '" +
        imgsrc +
        "' length=104px height=159px></li><li><p id = 'review'><b>" +
        book + " by " + author +
        "<br/></b>" +
        review +
        "</p></li></ul>";
   }
 }

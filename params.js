(function() {

  function getURLParams (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? false : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  var id = getURLParams('id')
  ,   db = 'phase3-test'; // change this to point to the current project release 

  document.write('<iframe allowfullscreen class="" frameborder="0" src="http://176.126.241.139:5984/'+db+'/_design/app/index.html?id='+id+'"></iframe>');

})();
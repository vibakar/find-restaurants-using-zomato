
  $(document).ready(function(){
    $("#search").click(function(){
      var id=encodeURIComponent($('#city').val());
      console.log(id);
      $.ajax({
          url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&count=10&apikey=05d077a0d976341f50c2166d0aa71759`,
               success: function(result){
                 console.log(result);
                 var restaurant = result.restaurants;
                   $("#template").tmpl(restaurant).appendTo("#results");
                }
      });
    });
});

$(function(){
    $('#ustava p').hide();
    $('#ustava h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(500);
    });
    var kviz = $('#kviz div.row');
    prezidenti.forEach(function(obj, idx){
        // kviz.append('<div class="col-sm-4 "><figure><img src="img/'+obj.photo+'" alt="'+obj.name+'"><figcaption>'+obj.name+'</figcaption></div>');
        kviz.append('<div class="col-sm-4 "><figure id="'+idx+'"><img src="img/prezident0.jpg" alt="prezident"><figcaption>'+obj.name+'</figcaption></div>');
    });
    var photo = $('#kviz img');
    photo.on('click', function(){
        var index = Math.floor(Math.random()*prezidenti.length);
        $(this).attr('src','img/'+prezidenti[index].photo)
               .attr('alt',prezidenti[index].name);
    });
    var check = $('div .btn-success');
    check.on('click', function(){
        $('#kviz figure').each(function(idx,obj){
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({'border':'2px solid green'});
            }
            else {
                $(obj).find('img').css({'border':'2px solid red'});
            }
        });
    });
    /*Sidla menici se v case, perlicky, pripadne percenta uspesnosti kvizu*/
    var odkazy = $('#odkazy ul');
    prezidenti.forEach(function(obj, idx){
        odkazy.append('<li><a href="'+obj.link+'" target="_blank">'+obj.name+'</a></li>');
    });
    var mista = $('#sidlo');
    var x = 0;
    window.setInterval(function(){
        x == sidla.length-1 ? x=0 : x++;
        mista.find('img').attr('src','img/' + sidla[x].photo);
        mista.find('figcaption').text(sidla[x].place);
    },3000);
    var pearls = $('#perlicka');
    var y = 0;
    $('#next').on('click', function(){
        y == perlicky.length-1 ? y=0 : y++;
        pearls.find('h4').text(perlicky[y].title);
        pearls.find('p').text(perlicky[y].text);
    });
    $('#prev').on('click', function(){
        y == 0 ? y=perlicky.length : y--;
        pearls.find('h4').text(perlicky[y].title);
        pearls.find('p').text(perlicky[y].text);
    });
});
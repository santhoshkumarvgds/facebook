var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("postname").value = "";
    document.getElementById("file").value = '';
    $("#file").attr('disabled', 'disabled');
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$("#postname").click(function () {
    $("#file").removeAttr('disabled');
});
var submit = [];
var i = 0,
    j = 0;
$("#file").change(function () {
    $name = $("#postname").val();
    $file = $("#file");
    i = $(this).get(0).files.length;
    j = 0;
    /*if (file.files.length != 0) {
        // for (var i = 0; i < $(this).get(0).files.length; i++){

        if (this.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
            $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><img id='news' alt=' please check your option and file type'><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
        } else if (this.files[0].name.match(/\.(mp4|mov|avi|webm)$/)) {
            $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><video id='news' alt=' please check your option and file type' autoplay loop controls></video><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
        }

        $('.section2 .postnews').prepend($var);*/
    //  alert($(this).get(0).files[i].name);
    for (k = 0; k < i; k++) {
        var reader = new FileReader();
        reader.onload = function (e) {
            submit[j] = e.target.result;
            j++;
            //  $("#news").attr('src', e.target.result);
        }
        reader.readAsDataURL(this.files[k]);
    }

});

function sa() {
    i--;
    while (i >= 0) {
        var nametostr = submit[i];
        if (nametostr.includes("image")) {
            $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><img id='news' alt=' please check your option and file type'><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
            $('.section2 .postnews').prepend($var);
            $("#news").first().attr('src', submit[i]);
        } else if (nametostr.includes("video")) {
            $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><video id='news' alt=' please check your option and file type' controls></video><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
            $('.section2 .postnews').prepend($var);
            $("#news").first().attr('src', submit[i]);
        }


        i--;

    }
    modal.style.display = "none";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("postname").value = " ";
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

$("#file").change(function () {
    $name = $("#postname").val();
    if (document.getElementById('img').checked) {
        $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><img id='news' alt=' please check your option and file type'><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
    } else {
        $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + $name + "<br><span>Just now</span></p><a class='right'>...</a></div><video id='news' alt=' please check your option and file type' autoplay loop controls></video><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
    }

    $('.section2 .postnews').prepend($var);
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#news").first().attr('src', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
    document.getElementById("file").value = '';
});

function sa() {
    modal.style.display = "none";
}

document.body.onload = function () {
    if (localStorage.length > 0) {
        var userdataimg = JSON.parse(localStorage.getItem("useradditem"));
        // alert(userdataimg);
        var userdata = JSON.parse(localStorage.getItem("useraddname"));
        var userdataname = "";
        for (a = 0; a < userdata.length; a++) {
            userdataname += userdata[a];
        }
        for (var countername = 0; countername <
            1; countername++) {
            for (var counterimg = userdataimg.length - 1; counterimg >= 0; counterimg--) {
                if (userdataimg[counterimg].includes("image")) {
                    isimage(userdataname, userdataimg[counterimg]);
                } else if (userdataimg[counterimg].includes("video")) {
                    isimage(userdataname, userdataimg[counterimg]);
                }
            }
        }
    }
}
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
    for (k = 0; k < i; k++) {
        var reader = new FileReader();
        reader.onload = function (e) {
            submit[j] = e.target.result;
            j++;
        }
        reader.readAsDataURL(this.files[k]);
    }

});

function sa() {
    i--;
    while (i >= 0) {
        var nametostr = submit[i];
        if (nametostr.includes("image")) {
            isimage($name, submit[i]);
        } else if (nametostr.includes("video")) {
            isvideo($name, submit[i]);
            $("#news").first().attr('src', submit[i]);
        }
        i--;
    }
    modal.style.display = "none";
    if (submit.length) {
        localStorage.setItem("useraddname", JSON.stringify($name));
        localStorage.setItem("useradditem", JSON.stringify(submit));
    }
}

function isimage(isname, issrc) {
    $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + isname + "<br><span>Just now</span></p><a class='right'>...</a></div><img id='news' alt=' please check your option and file type'><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
    $('.section2 .postnews').prepend($var);
    $("#news").first().attr('src', issrc);
}

function isvideo(isname, issrc) {
    $var = $("<li><div class='line'><img id='pro' src='images/Profile.jpg' alt='profile'><p>Name > " + isname + "<br><span>Just now</span></p><a class='right'>...</a></div><video id='news' alt=' please check your option and file type' controls></video><div class='line1'><i class='far fa-thumbs-up'></i> <p> 0K</p><a class='right'> 0 comments</a><hr><div class='feeds'><a><i class='far fa-thumbs-up'></i> Like</a><a><i class='far fa-comment'></i> Comments</a><a><i class='fas fa-share'></i> Share</a> </div></div></li>");
    $('.section2 .postnews').prepend($var);
    $("#news").first().attr('src', issrc);
}

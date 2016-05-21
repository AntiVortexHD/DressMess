$(document).ready(function() {
    var timeLeft = 60 * 1000
    var itemRows = 4
    var itemCols = 3
    var currentItteration= 0
    var currentStyle = null;
    var points = 0;
    var person = null;
    var cancleInervalID = null

    function isStyleCorrect() {
        return person.shirt.style == currentStyle && person.pants.style == currentStyle && person.hat.style == currentStyle
    }

    function pickNewStyle() {
        var temp = currentStyle
        while(temp == currentStyle){
            temp = styles[Math.floor(Math.random() * styles.length)];
        }
        currentStyle = temp
        $(".text-bubble").html(data[currentStyle].quote); 
    }


    function resetPlayer() {
        person = {
            shirt: {},
            pants: {},
            hat: {},
        };
        $("#person_hat").css('background-image' , "")
        $("#person_shirt").css('background-image' , "")
        $("#person_pants").css('background-image' , "")
    }

    function changeItems() {
       

        $(".item").each(function(index, element) {
            var style = styles[Math.floor(Math.random() * styles.length)];
            var clothesType = clothesTypes[Math.floor(Math.random() * clothesTypes.length)];
            var imgs = data[style][clothesType]
            var img = imgs[Math.floor(Math.random() * imgs.length)];
            element.setAttribute("data-type", clothesType)
            element.setAttribute("data-style", style)
            element.setAttribute("data-url",img)
            
            element.innerHTML = '<img src="' + img + '"/>'

        })
    }

    function updateTimeLeft() {
        timeLeft -= 200
        if (timeLeft <= 0) {
            console.log(points)
            clearInterval(cancleInervalID)
            $("#timer").html("Time is up!!!")
        }
        else {
            $("#timer").html(timeLeft/1000)
        }
    }
    resetPlayer()
    pickNewStyle()
    changeItems()
    cancleInervalID = setInterval(function() {
        if (isStyleCorrect()) {
            points++
            timeLeft += 30 * 1000
            pickNewStyle()
            resetPlayer()
            changeItems()
        }
         $("#score").html(points)
      updateTimeLeft()
        console.log(points)
        currentItteration++
        if (currentItteration % 15==0){
            changeItems()
        }
    }, 200)
    window.setplayer = function(style) {
        person.shirt.style = style
        person.hat.style = style
        person.pants.style = style
    }
    $(".item-container .item").on("dragstart", function(event) {
        var itemstyle = event.currentTarget.getAttribute("data-style")
        event.originalEvent.dataTransfer.setData("style", itemstyle);
        var itemtype = event.currentTarget.getAttribute("data-type")
        event.originalEvent.dataTransfer.setData("type", itemtype);
    })

    $(".dropable").on("dragover", function(event) {
        event.preventDefault()
    })
    $(".dropable").on("drop", function(event) {
        event.preventDefault()
        var itemstyle = event.originalEvent.dataTransfer.getData("style")
        var itemtype = event.originalEvent.dataTransfer.getData("type")
        var itemurl = event.originalEvent.dataTransfer.getData("url")
        if (event.target.id.substring(7) == itemtype) {
            person[itemtype].style=itemstyle
            $("#person_"+ itemtype).css('background-image' , "url("+itemurl + ')')
            
        }
    })
    $("#Reset").click(function(){
        location.href = location.href
    })
})
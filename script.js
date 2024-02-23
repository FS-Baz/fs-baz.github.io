console.log("Hi")




function buttonClicked(id){
    
    switch (id) {
            case "xMoviesVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "Xmovies.mp4";
                
            break;

            case "quizzeyVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "Quizzey.mp4";
            break;

            case "weatherVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "Weather.mp4";
            break;

            case "clockVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "Clock.mp4";
            break;

            case "pingVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "PingPong.mp4";
            break;

            case "drawVid":
                document.getElementById("overlay").style.display = "block"
                document.getElementById("video").src = "Drawing.mp4";
            break;

            case "xMoviesSrc":
                window.open("https://github.com/FS-Baz/IAProject/tree/main","_blank") 
            break;

            case "quizzeySrc":
                window.open("https://github.com/MjeedBakr/Quizzey","_blank") 
            break;

            case "weatherSrc":
                window.open("https://github.com/FS-Baz/WeatherApp","_blank") 
            break;

            case "clockSrc":
                window.open("https://github.com/FS-Baz/MyClock","_blank") 
            break;

            case "pingSrc":
                window.open("https://github.com/FS-Baz/Star-Ping-Pong","_blank") 
            break;

            case "drawSrc":
                window.open("https://github.com/FS-Baz/DrawingApp","_blank") 
            break;
        default:
            
            break;
    }
}

function overlay(){
    document.getElementById("overlay").style.display = "none";
}
function mode(element){
if (!element.checked){
    document.getElementById("NavBar").style.backgroundColor = "#F4BF96";
    
    document.getElementById("h1").style.color = "#D04848"
    


    document.querySelectorAll("a").forEach(function(td){
        td.style.color = "#2D4356";
    })

    document.querySelectorAll("h3").forEach(function(td){
        td.style.color = "#2D4356";
    })


    document.body.style.backgroundImage = " url('blob-scene-haikei0.svg')"

    document.querySelectorAll(".ProjectBox").forEach(function(td){
        td.style.backgroundColor = "#F4BF96"

    })

    document.querySelectorAll(".ProjectBox2").forEach(function(td){
        td.style.backgroundColor = "#F4BF96"

    })

    document.querySelectorAll("input[type=Button]").forEach(function(td){
        td.style.backgroundColor = "#EAB2A0";
        

    })

    document.querySelectorAll(".ContactBox").forEach(function(td){
        td.style.backgroundColor = "#F4BF96"

    })

    document.querySelectorAll("p").forEach(function(td){
        td.style.color = "#D04848"

    })

    document.querySelectorAll("h2").forEach(function(td){
        td.style.color = "#D04848"

    })

}
else{
    document.getElementById("NavBar").style.backgroundColor = "#2D4356";

    document.getElementById("h1").style.color = "#f17c7c"

    document.querySelectorAll("a").forEach(function(td){
        td.style.color = "#F4BF96";
    })
    document.querySelectorAll("h3").forEach(function(td){
        td.style.color = "#F4BF96";
    })

    document.body.style.backgroundImage = " url('blob-scene-haikeiDark.svg')"


    document.querySelectorAll(".ProjectBox").forEach(function(td){
        td.style.backgroundColor = "#2D4356"

    })

    document.querySelectorAll(".ProjectBox2").forEach(function(td){
        td.style.backgroundColor = "#2D4356"

    })

    document.querySelectorAll("input[type=Button]").forEach(function(td){
        td.style.backgroundColor = "#f17c7c"
      

    })
    
    document.querySelectorAll(".ContactBox").forEach(function(td){
        td.style.backgroundColor = "#2D4356"

    })

    document.querySelectorAll("p").forEach(function(td){
        td.style.color = "#f17c7c"

    })

    document.querySelectorAll("h2").forEach(function(td){
        td.style.color = "#f17c7c"

    })


}
}
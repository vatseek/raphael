window.onload = function () {
    var radius = 30;
    var r = Raphael(0, 0, "100%", "100%"),
        dashed = {fill: "#666", stroke: "#fff"},
        circle = r.circle(200, 200, radius).attr(dashed);

    var rectPath = r.path("M10,10L10,90L90,90L90,10Z");
    var curvePath = r.path("M110,10s55,25 40,80Z");

    rectPath.attr({fill:"green"});
    curvePath.attr({fill:"blue"});

    circle.click(function(e){
        setToEdit(this);
    });

    function setToEdit(el) {
        var params = el.getBBox();
        drawEditRect(params);
    }

    function drawEditRect(params) {
        console.log(params);
        r.rect(params.x, params.y, params.width, params.height).attr({fill: "#fff", stroke: "#fff", "stroke-dasharray": ". ", "fill-opacity": 0.2, "stroke-width":1});
    }
};
window.onload = function () {
    Raphael.st.draggable = function() {
        var me = this, lx = 0, ly = 0, ox = 0, oy = 0,
            move = function(dx, dy) {
                lx = dx + ox;
                ly = dy + oy;
                me.transform('t' + lx + ',' + ly);
            },
            start = function() {},
            end = function() {
                ox = lx;
                oy = ly;
            };

        this.drag(move, start, end);
    };

    var radius = 30;
    var r = Raphael(0, 0, "100%", "100%"),
        dashed = {fill: "#666", stroke: "#fff"},
        selectorMainRect = {fill: "#fff", stroke: "#fff", "stroke-dasharray": ". ", "fill-opacity": 0.2, "stroke-width":1},
        markerRect = {stroke: "#fff", "stroke-width":1},
        circle = r.circle(400, 400, radius).attr(dashed);

    editRectInit();


    //var editedSet = r.set(editedSelector);
    //var global = r.set();

    //global.push(editedSet);

    //var rectPath = r.path("M10,10L10,90L90,90L90,10Z");
    //var curvePath = r.path("M110,10s55,25 40,80Z");
    //rectPath.attr({fill:"green"});
    //curvePath.attr({fill:"blue"});

    circle.click(function(e){
        setToEdit(this);
    });

    function setToEdit(el) {
        var params = el.getBBox();
        drawEditRect(params, el);
    }

    function drawEditRect(params, el) {
        var editRect = r.rect(params.x, params.y, params.width, params.height)
            .attr(selectorMainRect);
        editedSet.push(editRect);
        editedSet.push(el);

        global.draggable();
    }

    function editRectInit() {
        var editRectSet = r.set();
        var mainRect = r.rect(50, 50, 10, 10).attr(selectorMainRect);
        var markersRect = r.rect(177, 177, 6, 6).attr(markerRect);
        editRectSet.push(mainRect);
        editRectSet.push(markersRect);
    }
};
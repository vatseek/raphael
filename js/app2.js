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

    var r = Raphael(0, 0, "100%", "100%"),
        selectorMainRect = {fill: "#fff", stroke: "#aaa", "stroke-dasharray": ". ", "fill-opacity": 0.1, "stroke-width":1},
        dashed = {fill: "#666", stroke: "#fff"},
        markerRect = {fill: "#fff", "fill-opacity": 0.15, stroke: "#aaa", "stroke-width":1};

    function editRectInit(x1, y1, x2, y2) {
        var sx = x1 < x2 ? x1 : x2;
        var sy = y1 < y2 ? y1 : y2;
        var width = Math.abs(x2 - x1);
        var height = Math.abs(y2 - y1);

        var editRectSet = r.set();
        editRectSet.push(r.rect(sx, sy, width, height).attr(selectorMainRect));

        // Scale marker
        var marker = drawMarker(x1, y1);
        marker.mousemove(changeCursor);
        editRectSet.push(marker);
        marker = drawMarker(x1, y2);
        marker.mousemove(changeCursor);
        editRectSet.push(marker);
        marker = drawMarker(x2, y1);
        marker.mousemove(changeCursor);
        editRectSet.push(marker);
        marker = drawMarker(x2, y2);
        marker.mousemove(changeCursor);
        editRectSet.push(marker);

        // Rotate marker
        marker = drawMarker(sx + width, sy+(height/2), 'circle');
        marker.mousemove(changeCursor);
        editRectSet.push(marker);

        // Move marker
        marker = drawMarker(sx + (width/2), sy+(height/2), 'circle')
        marker.mousemove(changeCursor);
        editRectSet.push(marker);
        editRectSet.draggable();

        return editRectSet;
    }

    function drawMarker(cx, cy, type) {
        if (!type) {
            type = 'rect';
        }
        var markerSize = 6;
        var halfSize = markerSize/2;

        if (type == 'circle') {
            return r.circle(cx, cy, halfSize+1).attr(markerRect);
        } else {
            return r.rect(cx - halfSize, cy - halfSize, markerSize, markerSize).attr(markerRect);
        }
    }

    function changeCursor(e, mouseX, mouseY) {
        this.attr('cursor', 'crosshair  ');
    }

    var circle = r.circle(400, 400, 100).attr(dashed);
    circle.click(function(e){
        setToEdit(this);
    });

    function setToEdit(el) {
        var params = el.getBBox();
        editRectInit(params.x, params.y, params.x + params.width, params.y + params.height);
    }
};
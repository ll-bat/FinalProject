let dom = document

function  $1(id) {
    return document.getElementById(id);
}
function $$(cname){
    return document.getElementsByClassName(cname);
}


function imageLoad(event, id){
    let input = event.target
    let reader = new FileReader();
    reader.onload = function(){
        let dataURL = reader.result;
        $1(id).src = dataURL
    };
    reader.readAsDataURL(input.files[0]);
}

let u = {
    tr : 'transform',
    ts : 'transition',
    bg : 'background-color',
    bc : 'border-color',
    o  : 'opacity',
    b  : 'bottom',
    t  : 'top',
    l  : 'left',
    r  : 'right',
    dw : 'down',
    ml : 'margin-left',
    mt : 'margin-top',
    mr : 'margin-right',
    md : 'margin-down',
    d  : 'display',
    w  : 'width',
    h  : 'height'
}

let st = (o, d)=>{

    if (typeof d === "object")
        InitObj()
    else InitStr()

    function InitObj(){
        let keys = Object.keys(d)

        keys.forEach(key => {
            o.style[u[key]] = d[key]
        })
    }

    function InitStr(){
        if (typeof d !== "string")
        {
            alert("data is not of type string")
            return
        }

        if (o == null) return

        let s = d.split(';')
        s.forEach(c => {
            c = c.split(':')
            o.style[u[c[0]]] = c[1]
        })

    }
}

let tout = (fn,t) => {
    setTimeout(fn,t)
}

let cnst = ''
function cl(el,c, t,  pr){
    if (c == '')
        el.className = cnst
    else {
        cnst = el.className
        el.className += (' ' + c)
    }
    t.loading = pr
}

function min(a,b){
    return Math.min(a,b)
}

function max(a,b){
    return Math.max(a,b)
}


Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
var obj = {}
var obj1 = {}

var rev_obj = {}


window.onload = function () {
    var xhr1 = new XMLHttpRequest()
    var access1 = "74808ce908ce912db2896a2defe5340c"
    var u1 = "http://api.currencylayer.com/list"
    var url1 = new URL(u1)
    var params1 = new URLSearchParams()
    params1.set('access_key', access1)
    url1.search = params1.toString()
    //console.log(url1.href)

    xhr1.open('GET', url1.href)

    xhr1.send()
    xhr1.onload = function () {
        //console.log(this.status)
        //console.log(this.response)
        var res = JSON.parse(this.response)
        // console.log(res.currencies)
        obj1 = res.currencies

        for (key in obj1) {
           
            rev_obj[obj1[key]] = key

        }
        //console.log(rev_obj)
        var from = document.getElementById('from')
        var to = document.getElementById('to')
        //arr.forEach(function (ele,ind) {
        for (key in obj1) {

            var opt = document.createElement('option')
            opt.setAttribute('id', key)
            if (key == "INR") {
                opt.setAttribute('selected', "")
            }
            opt.innerHTML = obj1[key]
            //from.appendChild(opt)
            to.appendChild(opt)
        }

        // arr.forEach(function (ele) {
        for (key in obj1) {
            var opt = document.createElement('option')
            opt.setAttribute('id', key)
            if (key == "USD") {
                opt.setAttribute('selected', "")
            }
            opt.innerHTML = obj1[key]
            from.appendChild(opt)
            //to.appendChild(opt)
        }


        //second
        var xhr = new XMLHttpRequest()
        var access = "74808ce908ce912db2896a2defe5340c"
        var u = "http://api.currencylayer.com/live"
        var url = new URL(u)
        var params = new URLSearchParams()
        params.set('access_key', access)
        url.search = params.toString()
        //console.log(url.href)

        xhr.open('GET', url.href)

        xhr.send()
        xhr.onload = function () {
            //console.log(this.status)
            //console.log(this.response)
            var res = JSON.parse(this.response)
            console.log(res.timestamp)
            var d=new Date('1583588242')
            console.log(d)
            console.log(d)
            console.log(d)
            console.log(d)
            console.log(d)
            console.log(d)

            //console.log('here waas showing',res.quotes)
            obj = res.quotes

            show_first_amount()
        }

    }

}

function show_first_amount() {
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var from_money = document.getElementById('from_money').value
    var to_money = document.getElementById('to_money').value
    // console.log('earlier from is', from, ' to is ', to)

    var temp1 = from
    var temp2 = to


    from = rev_obj[from]
    to = rev_obj[to]
    //  console.log('from is', from, ' to is ', to)
    // console.log(from_money, from, "=>", to_money, to)

    if (from_money == "" || to_money == "") {

        var ff = document.getElementById('from_money')
        ff.value = 1
        from_money = 1


    }

    var amt
    if (from == 'USD') {
        // console.log(obj[from + to])
        var amount = Number(obj[from + to]) * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount.toFixed(2)
        amt = amount
        // console.log(to_amount, amount)
    }
    else {
        var f = 'USD' + from
        var t = 'USD' + to
        //  console.log('else')
        var con_rate = Number(obj[t]) / Number(obj[f])
        var amount = con_rate * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount.toFixed(2)
        amt = amount
        //  console.log(from, obj[f], to, obj[t], con_rate)

    }


    var show = document.getElementById('show')
    show.innerText = '1 ' + temp1 + " equals"
    var show1 = document.getElementById('show1')
    show1.innerText = amt.toFixed(2) + " " + temp2

}









var from_chg = document.getElementById('from')

from_chg.onchange = function () {
    var from = this.value
    var to = document.getElementById('to').value
    var from_money = document.getElementById('from_money').value
    var to_money = document.getElementById('to_money').value
    var f_temp = from
    var t_temp = to
    var f_mo_temp = from_money
    var t_mo_temp

   


    from = rev_obj[from]
    to = rev_obj[to]

    // console.log(from_money, from, "=>", to_money, to)

    if (from == 'USD') {
        // console.log(obj[from + to])
        var amount = Number(obj[from + to]) * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        t_mo_temp = amount
        // console.log(to_amount, amount)
    }
    else {
        var f = 'USD' + from
        var t = 'USD' + to
        // console.log('else')
        var con_rate = Number(obj[t]) / Number(obj[f])
        var amount = con_rate * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        t_mo_temp = amount

        // console.log(from, obj[f], to, obj[t], con_rate)

    }

    var show = document.getElementById('show')
    show.innerText = ""
    show.innerText = f_mo_temp + " " + f_temp + " equals"
    var show1 = document.getElementById('show1')
    show1.innerText = ""
    show1.innerText = t_mo_temp + " " + t_temp
}





var from_money_chg = document.getElementById('from_money')

from_money_chg.onkeyup = function () {
    // console.log('in from money change')
    // console.log(this.value)
    var from_money = this.value
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    //var from_money=document.getElementById('from_money').value
    var to_money = document.getElementById('to_money').value
    from = rev_obj[from]
    to = rev_obj[to]


    console.log(from_money, from, "=>", to_money, to)

    if (from == 'USD') {
        // console.log(obj[from + to])
        var amount = Number(obj[from + to]) * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        // console.log(to_amount, amount)
    }
    else {
        var f = 'USD' + from
        var t = 'USD' + to
        // console.log('else')
        var con_rate = Number(obj[t]) / Number(obj[f])
        var amount = con_rate * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        // console.log(from, obj[f], to, obj[t], con_rate)

    }
}





var to_chg = document.getElementById('to')

to_chg.onchange = function () {
    // console.log('in to curr change')
    // console.log(this.value)
    var to = this.value
    var from = document.getElementById('from').value
    var from_money = document.getElementById('from_money').value
    var to_money = document.getElementById('to_money').value
    var f_temp = from
    var t_temp = to
    var f_mo_temp = from_money
    var t_mo_temp
    from = rev_obj[from]
    to = rev_obj[to]

    // console.log(from_money, from, "=>", to_money, to)

    if (from == 'USD') {
        // console.log(obj[from + to])
        var amount = Number(obj[from + to]) * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        t_mo_temp = amount
        // console.log(to_amount, amount)
    }
    else {
        var f = 'USD' + from
        var t = 'USD' + to
        // console.log('else')
        var con_rate = Number(obj[t]) / Number(obj[f])
        var amount = con_rate * Number(from_money)
        var to_amount = document.getElementById('to_money')
        to_amount.value = amount
        t_mo_temp = amount

        // console.log(from, obj[f], to, obj[t], con_rate)

    }

    var show = document.getElementById('show')
    show.innerText = ""
    show.innerText = f_mo_temp + " " + f_temp + " equals"
    var show1 = document.getElementById('show1')
    show1.innerText = ""
    show1.innerText = t_mo_temp + " " + t_temp



}





var to_money_chg = document.getElementById('to_money')

to_money_chg.onkeyup = function () {
    // console.log('in to money change')
    // console.log(this.value)
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var from_money = document.getElementById('from_money').value
    //var to_money=document.getElementById('to_money').value
    var to_money = this.value
    from = rev_obj[from]
    to = rev_obj[to]

    // console.log(from_money, from, "=>", to_money, to)

    if (from == 'USD') {
        // console.log(obj[from + to])
        var amount = Number(to_money) / Number(obj[from + to])
        var from_amount = document.getElementById('from_money')
        from_amount.value = amount
        // console.log(from_amount, amount)
    }
    else {
        var f = 'USD' + from
        var t = 'USD' + to
        //console.log('else')
        var con_rate = Number(obj[t]) / Number(obj[f])
        var amount = Number(to_money) / con_rate
        //console.log('IN HERE ', from_money, from, "=>", to_money, to, amount, con_rate)
        var from_amount = document.getElementById('from_money')
        from_amount.value = amount
        //console.log(from, obj[f], to, obj[t], con_rate)

    }
}
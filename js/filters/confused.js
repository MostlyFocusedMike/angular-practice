app.filter("confused", function(){
    return function(text) {
        return text ? text.split("").reverse().join("") + "?!" : null
    }
})


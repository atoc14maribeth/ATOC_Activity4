const Trivia_Service ={
    triv1: function(){
        return $.ajax({
            type: 'get',
            url: 'http://numbersapi.com/random/year?json'
        })
    },
    triv2: function(){
        return $.ajax({
            type: 'get',
            url: 'http://numbersapi.com/1/year'
        })
    }
}
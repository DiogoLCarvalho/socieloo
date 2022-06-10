$(document).ready(function(){
    let fonte = 16
    $('#aumentar').click(function(){
        if(fonte<22){
            fonte++
            $('body').css({'font-size': fonte+'px'})
        }
    })
    $('#diminuir').click(function(){
        if(fonte>13){
            fonte--
            $('body').css({'font-size': fonte+'px'})
        }
    })
})
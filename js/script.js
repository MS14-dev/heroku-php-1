
$(document).ready(()=>{
    
    //carousel text js functionality..........
    $('#index-carousel-text').mouseenter(()=>{
        $("#index-carousel-text").css({"color":"#DC7633"})
    })
    $('#index-carousel-text').mouseleave(()=>{
        $("#index-carousel-text").css({"color":"white"})
    })
    var carousel_texts = ["Lets make IT happen","No more IT a dream","For all your IT needs"];
    var count = 0
    setInterval(()=>{
        $('#index-carousel-text').text(carousel_texts[count]);
       
        if(count == carousel_texts.length){
            count = 0
        }else{
            count++;
        }
    },5000);

    //service inner div functionalities
    $('#index-services-inner-div-1').mouseenter(()=>{
        $('#index-services-inner-div-1').css({'background':'#E67E22 '})
    })
    $('#index-services-inner-div-1').mouseleave(()=>{
        $('#index-services-inner-div-1').css({'background':'none'})
    })

    $('#index-services-inner-div-2').mouseenter(()=>{
        $('#index-services-inner-div-2').css({'background':'#F4D03F'})
    })
    $('#index-services-inner-div-2').mouseleave(()=>{
        $('#index-services-inner-div-2').css({'background':'none'})
    })

    $('#index-services-inner-div-3').mouseenter(()=>{
        $('#index-services-inner-div-3').css({'background':'#AAB7B8'})
    })
    $('#index-services-inner-div-3').mouseleave(()=>{
        $('#index-services-inner-div-3').css({'background':'none'})
    })




})
    
    const hello =async()=>{
        const covid_data = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
        if(covid_data){
            console.log(covid_data)
        }else{
            alert('hi')
        }
    }
   


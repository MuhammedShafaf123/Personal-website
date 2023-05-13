var typed = new Typed(".auto-type", {
    strings: ['Frontend Developer', 'Logo Designer','Graphic Designer'],
    typeSpeed: 180,
    backSpeed: 180,
    loop:true
})

ScrollReveal({ 
    reset: true ,
    distance:'80px' ,
    duration: 2000 ,
    delay: 200 ,
});

ScrollReveal().reveal('#home-row', { origin: top });
ScrollReveal().reveal('#me-image', { origin: top });

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwD9IARC5RzAD1cooSQ02tbe4dEnFf_QHDgK8BXNok78WQvkZP-acmiKihVwKaub8_5/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

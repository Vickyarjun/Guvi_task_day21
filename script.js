window.onload = function(){
    let res = document.createElement('div')
    res.setAttribute('id','div')
    res.setAttribute('onload','fun()' )
    document.body.append(res)
        let i=10
        let a=(ele)=>{
            setTimeout(() => {
            if(i>=1)
                {
                    res.classList.add('container','col-sm-12','text-center','bg','font','mt-5')
                    res.innerText=i
                }
            if(i==0){
                res.classList.add('container','col-sm-12','text-center','bg','fontnew')
                res.innerHTML="<span id ='one'>Happy</span> <span id='two'>Independence</span> <span id='three'>Day</span>"
                return
                    }
                    i--
                    ele(a)
                }, 800)
                }
            let b=(ele)=>{
                ele(b)
                }
            a(b)
        }
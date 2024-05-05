let btn = document.querySelector('.btn');

        let audio = document.querySelector('#audio');

        let body = document.querySelector('body');

        btn.onclick = function(){
            body.classList.toggle('on');
            audio.play();
        }
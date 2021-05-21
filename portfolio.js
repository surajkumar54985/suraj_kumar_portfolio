var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
console.log(navMenuAnchorTags);

//var end = window.getBoundingClientRect();
//HTMLFormControlsCollection.log(end.bottom);

for(var i=0 ; i<navMenuAnchorTags.length ; i++)
{
    navMenuAnchorTags[i].addEventListener('click' , function(event){
        event.preventDefault();
        let targetSectionId = this.textContent.trim().toLowerCase();
        let targetsection = document.getElementById(targetSectionId);
        console.log(targetsection);

         
        var interval = setInterval(function(){
            var targetsectioncoorditates = targetsection.getBoundingClientRect();
            let height = targetsection.bottom - targetsection.top;

            /*if(targetsectioncoorditates.bottom<=end)
            {
                clearInterval(interval);
                return;
            }*/

            if(targetsectioncoorditates.top<=0)
            {
                clearInterval(interval);
                return;
            }

            

            /*if(height>=window.bottom)
            {
                clearInterval(interval);
                return;
            }*/
            window.scrollBy(0,120);
        } , 50);
        //interval = setInterval(scrollVerticlly , 50 , targetsection);
        /*interval = setInterval(function()
        {
            scrollVerticlly(targetsection);
        } , 50);*/
    });
}


/*function scrollVerticlly(targetsection)
{
    var targetsectioncoorditates = targetsection.getBoundingClientRect();
    if(targetsectioncoorditates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,80);
}*/


var progressbar = document.querySelectorAll('.skill-progress > div');
var skillscontainer = document.getElementById('skills-container');
window.addEventListener('scroll' , checkscroll);

var animationdone=false;

//console.log(progressbar.length);

function initilisebar()
{
    for(let bar of progressbar)
    {
        //console.log("bar");
        bar.style.width = 0 + '%';
    }
}

initilisebar();

function fillBars()
{
    for(let bar of progressbar)
    {
        let targetwidth = bar.getAttribute('data-bar-width');
        let currwidth=0;
        let interval = setInterval(function()
        {
            if(currwidth > targetwidth)
            {
                clearInterval(interval);
                return;
            }
            currwidth++;
            bar.style.width = currwidth + '%';
        } , 3);
    }
}



function checkscroll()
{
    //now we have to check whether skill container is visible.
    var coordinates = skillscontainer.getBoundingClientRect();
    if(!animationdone && coordinates.top < window.innerHeight)
    {
        animationdone=true;
        console.log('skill section visible');
        fillBars();
    }

    else if(coordinates.top > window.innerHeight)
    {
        animationdone=false;
        initilisebar();
    }


}
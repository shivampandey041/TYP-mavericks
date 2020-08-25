
arrNews = ["Prasheet Pathak posted on Linked In", "Shailly Make a ToDo list Web App", "Shivam Pandey Maverick of the week"];
updateWindowCount = 0;

function addNewNews(news) {
    arrNews.unshift(news);
    addToMarquee(news);
    var ulList = document.getElementById("newNewsList");
    ulList.innerHTML = "";


    for (var news of arrNews) {
        var newNews = document.createElement("li");
        var icon = document.createElement("i");
        icon.style.margin = "4px";
        newNews.style.borderBottom = "1px solid black ";
        newNews.append(news);
        ulList.append(newNews);
        newNews.append(icon);

    }

}

function addToMarquee(news) {
    var doc = document.getElementById("marquee");
    doc.innerHTML = "";
    for (var allNews of arrNews) {
        doc.append(allNews + " | ");
    }

}

function newsAdd() {
    createNewsInsertPanel();
}


function createNewsInsertPanel() {
    if (updateWindowCount == 0) {
        updateWindowCount += 1;
        var btn = document.getElementById("newNewBtn");
        var btnParent = btn.parentElement;
        var areaNewNews = document.createElement("input");
        areaNewNews.placeholder = "update project.."
        areaNewNews.style.width = "430px"
        areaNewNews.className = "form";
        var submitNewNews = document.createElement("button");
        // submitNewNews.style.margin = "10px 48%";
        submitNewNews.innerHTML = "Update";
        submitNewNews.className = "submitBtn";
        btnParent.append(areaNewNews);
        btnParent.append(submitNewNews);
        submitNewNews.onclick = function () {
            if (areaNewNews.value == "") {
                alert("Please enter  news to update.....");
            } else {
                addNewNews(areaNewNews.value);
                areaNewNews.value = "";
            }
        }

        btnParent.append()

        newNewBtn.style.display = "none";
    }

}

function newsRemove() {
    removePanel();
}


function removePanel() {
    if (updateWindowCount == 0) {
        updateWindowCount += 1;
        var btn = document.getElementById("newNewRemoveBtn");
        var btnParent = btn.parentElement;
        var areaNewNews = document.createElement("input");
        areaNewNews.placeholder = "Remove project.."
        areaNewNews.style.width = "430px"
        areaNewNews.className = "form";
        var submitNewNews = document.createElement("button");
        // submitNewNews.style.margin = "10px 48%";
        submitNewNews.innerHTML = "Remove";
        submitNewNews.className = "submitBtn";
        btnParent.append(areaNewNews);
        btnParent.append(submitNewNews);
        submitNewNews.onclick = function () {
            if (areaNewNews.value == "") {
                alert("Please enter  news to update.....");
            } else {
                removeup(areaNewNews.value);
            }
        }

        btnParent.append()

        newNewRemoveBtn.style.display = "none";
    }

}


(function () {
    console.log("going into it ...");
    var ulList = document.getElementById("newNewsList");

    for (var news of arrNews) {
        var newNews = document.createElement("li");
        var icon = document.createElement("i");
        icon.style.margin = "4px";
        newNews.style.borderBottom = "1px solid black ";
        newNews.append(news);
        ulList.append(newNews);
        newNews.append(icon);
    }
})();



let btnn = document.getElementById('addbtnn');
let ff = document.getElementById('ff');
ff.style.display = 'none';
ff.style.padding = '20px 20px';
function addcard() {
    if (ff.style.display != 'none') {
        ff.style.display = 'none';

    }
    else {
        ff.style.display = 'block';
    }
}

// Add Student

bb=[]
li=document.getElementsByClassName('li')
for(i=0;i<li.length;i++){
    bb.push(li[i].innerHTML)
}
function profile(a,b) {
    var name=a+' '+b
    if (bb.includes(name)){
        var div=document.createElement('div')
    
        div.style.backgroundColor='grey'
        div.style.color='whitesmoke'
        div.style.display='flex'
        div.style.flexDirection='column'
        div.style.textAlign='left'
        var nam=document.createElement('h1')
        nam.innerHTML=name
        //nam.style.left='initial'
        div.append(nam)
        var pname=document.createElement('h2')
        pname.innerHTML='Project Name'
        pname.style.paddingTop='10px'
        pname.style.marginTop='20px'
        pname.style.marginBottom='5px'
        div.append(pname)

        var project=document.createElement('p')
        project.innerHTML=document.getElementById('pn').value
        //project.style.marginRight='200px
        project.style.paddingBottom='10px'
        project.style.marginBottom='20px'
        project.style.marginTop='5px'
        div.append(project)
        
        var link=document.createElement('a')
        link.href=document.getElementById('gi').value
        link.innerHTML=document.getElementById('gi').value
        link.style.paddingBottom='10px'
        link.style.marginBottom='10px'
        link.style.marginTop='5px'


        
        var disk=document.createElement('h2')
        disk.innerHTML='Project Discription'
        disk.style.paddingTop='10px'
        disk.style.marginTop='10px'
        disk.style.marginBottom='5px'


        //disk.style.marginRight='200px'
        div.append(disk)
        var dis=document.createElement('p')
        dis.innerText=document.getElementById('d').value
        dis.style.paddingBottom='10px'
        dis.style.marginBottom='10px'
        dis.style.marginTop='5px'
        //dis.style.marginRight='200px'
        div.append(dis)

    
        var div2=document.getElementById('project')
        
        div2.appendChild(div)
        
    }
    else{
        alert('Sorry, not matched');
    }
}


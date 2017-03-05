function addmyclass(name){ 
  var flag=0;
  if(localStorage.getItem("num")==null)
    {localStorage.setItem("num",String(0));}

  var nub=parseInt(localStorage.getItem("num"));

  for(var i=1;i<(nub+1);i++)
  {if(localStorage.getItem(i)==name)
     {flag=1;
      break;
     }
  }


  if(flag==0)
  {
   localStorage.setItem("num",String(nub+1));
   localStorage.setItem(nub+1,name);
  }

}

function Onsubmit(){ 
	window.location.href="files/home.html";
}

function myFunction(){
            var value=[];
            var index=[];
            for(var i=1;i<=Number(localStorage.clickcount);i++){
                var temp=localStorage.getItem("test"+i);
                index.push(i);
                value.push(Number(temp));
            }

            var layout={
                title:'Your test record',
                xaxis:{
                    title:'Number of tests',
                    nticks:localStorage.clickcount
                },
                yaxis:{
                    range:[0,100],
                    title:'Score'
                }
            }
            Plotly.plot("container",[{
                x:index,
                y:value,
                mode:'lines+markers',
                type:'scatter'
            }],layout);
}
    

function clearmem(){
			localStorage.clear();
		}

function save(){
            var result=0;
            if(typeof(Storage)!=="undefined"){
                if(localStorage.clickcount){
                    localStorage.clickcount=Number(localStorage.clickcount)+1;
                }else{
                    localStorage.clickcount=1;
                }
            }else{
                alert("Error!");
            }

            if(document.getElementById("b1").checked){
                result+=20;
            }

            if(document.getElementById("c2").checked){
                result+=20;
            }
            if(document.getElementById("c3").checked){
                result+=20;
            }
            if(document.getElementById("c4").checked){
                result+=20;
            }
            if(document.getElementById("c5").checked){
                result+=20;
            }

            localStorage.setItem("test"+localStorage.clickcount,String(result));
}



function addRow(){
      // clearmem();
      var tab = document.getElementById('classmaintable');
      var nub = parseInt(localStorage.getItem("num"));



   
    for(var i=1;i<(nub+1);i++)
        {var tr  = tab.insertRow();

            
        var td1 = tr.insertCell();
        var td2 = tr.insertCell();
        var td3 = tr.insertCell();
        var td4 = tr.insertCell();
        var td5 = tr.insertCell();

        
        td1.innerHTML = "<a id='tablenumber'>"+i+"</a>";
        td2.innerHTML = "<a id='tablename' href='Classdescription.html'>"+localStorage.getItem(i)+"</a>";
        td3.innerHTML = "<div class='hideword'><a id='tabletrash' href='Study.html' style='text-decoration:none'><span id='hideword'>Learn</span><span class='glyphicon glyphicon-blackboard'></span></a></div>";
        td4.innerHTML = "<div class='hideword'><a id='tabletrash' href='Edit.html' style='text-decoration:none'><span id='hideword'>Edit</span><span class='glyphicon glyphicon-edit'></span></a></div>";
        td5.innerHTML = "<div class='hideword'><a id='tabletrash'  href='class.html' style='text-decoration:none'  onclick='deleteRow("+i+")'><span id='hideword' style='color:red'>Delete</span><span class='glyphicon glyphicon-trash' style='color:red'></span></a></div>";

      }  

     
}

function deleteRow(classnum){
  var name=localStorage.getItem(classnum);
  var nub=parseInt(localStorage.getItem("num"));

  for(var i=1;i<(nub+1);i++)
  {if(localStorage.getItem(i)==name)
    {for(var j=i;j<(nub+1);j++)
        {localStorage.setItem(j,localStorage.getItem(j+1))
        }
      localStorage.setItem("num",nub-1);
      break;
    }
  }
}


function addclick(name,obj)
{
obj.disabled=true;
element=document.getElementById(name);
element.style.backgroundColor="#FFAD06";

}
    

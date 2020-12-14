<!DOCTYPE html>
<html>
  <body>
    
    <button onclick="startfunction()">Start</button>
    <p id="game_start"></p>
    <p id="pump_generate"></p>
    <p id="game"></p>
    
    
    <script>
 
    

    
      function startfunction() {
        document.getElementById("pump_generate").innerHTML="";
   document.getElementById("game").innerHTML="";
      var petrol=30;
      var cnt=0;
      var dist=0;
        var final_status;
        
        var ran=[];
        for(var i=0;i<5;i++){
          ran[i]=Math.floor(Math.random()*100)+1;
        }
         
      
 document.getElementById("game_start").innerHTML="Game started"; document.getElementById("pump_generate").innerHTML="Petrol pumps generated at "+ ran;
      while(dist<=100 && petrol>0){
        cnt++;
        var step =Math.floor(Math.random()*6)+1;
        if(step>=petrol){
          dist=dist+petrol;
          petrol=0;
          if(dist>=100)
            {
              final_status="Move"+ cnt + "- Car at "+dist+ ", petrol remaining "+ petrol+ ", reached";
            }
          else
            {
              final_status="Move"+ cnt + "- Car at "+dist+ ", petrol remaining "+ petrol+ ", game over";
            }
               var node = document.createElement("p");
  var textnode = document.createTextNode(final_status);
  node.appendChild(textnode);
  document.getElementById("game").appendChild(node);
          break;
        }
        else{
         dist=dist+step;
         petrol=petrol-step;
        }
        for(var i=0;i<5;i++)
        {
            if(dist==ran[i])
            {
                petrol+=20;    
            }
        }
        
        if(dist>=100)
            {
              final_status="Move"+ cnt + "- Car at "+dist+ ", petrol remaining "+ petrol+ ", reached";
            }
          else
            {
              final_status="Move"+ cnt + "- Car at "+dist+ ", petrol remaining "+ petrol;
            }
        
               var node = document.createElement("p");
  var textnode = document.createTextNode(final_status);
  node.appendChild(textnode);
  document.getElementById("game").appendChild(node);
        

        
      }
       
    }
      
   
    
      
    
    </script>
    </body>
  </html>

 

 
          //Skapa button//
          document.getElementById("createBtn").addEventListener("click", function(){
            const name= document.getElementById("name").value
            const phone= document.getElementById("phone").value
        
            //error message//
            const errorMessagge=document.getElementById("error-message")
            errorMessagge.style.display="none"
            errorMessagge.innerText =""
        
        
        
        
            //      use if sats to differentiate. if name and phone field are empty
            //    message"please Enter your name and Phone number"
            //    if name field only is empty "please enter your name "
            //    if phone field only is empty "please enter your phone number"
        
        
        
        
            if (name ==="" && phone=== ""){
        
                errorMessagge.innerText= "Please Enter your Name and your Phone number"
                errorMessagge.style.display = "block"
                return
                
            }
            else if (name ===""){
                errorMessagge.innerText= "Please Enter your Name"
                errorMessagge.style.display= "block"
                return
        
            }
        
            else if (phone === ""){
                errorMessagge.innerText= "Please Enter your Phone number"
                errorMessagge.style.display= "block"
                return
        
            } 
          
        
        
                  // list items  for name and phone // 
        
                  const listItem= document.createElement ("li")
                  const nameInput= document.createElement("input")
                  nameInput.type= "text"
                  nameInput.value= name
                  nameInput.disabled=true
        
        
                  const phoneInput=document.createElement("input")
                  phoneInput.type=  "phone"
                  phoneInput.value= phone
                  phoneInput.disabled=true
        
        
        
        
        
        
        
        
                  //ändra-knapp//
        
                  const ändraKnapp=document.createElement("input")
                  ändraKnapp.type= "button"
                  ändraKnapp.value= "Ändra"
                  ändraKnapp.addEventListener ("click", function(){
                    if (ändraKnapp.value=="Ändra"){
                        nameInput.disabled= false
                        phoneInput.disabled=false
                        ändraKnapp.value="Spara"
        
                    }
                    else{
                        nameInput.disabled= true
                        phoneInput.disabled=true
                        ändraKnapp.valur ="Ändra"
                    }
                  })
        
                  
                  
                  // radera kanpp//
        
                  const raderaKnapp=document.createElement("input")
                  raderaKnapp.type= "button"
                  raderaKnapp.value="Radera"
                  raderaKnapp.addEventListener("click", function(){
                    listItem.remove()
                  })
                
     
                 
                  
                  listItem.appendChild(nameInput) 
                  listItem.appendChild(phoneInput).style.fontSize=LargestContentfulPaint
                  listItem.appendChild(ändraKnapp)
                  listItem.appendChild(raderaKnapp)
        
                  document.getElementById("contact").querySelector("ul").appendChild(listItem)
                  document.getElementById("name").value= " "
                  document.getElementById("phone").value= ""
  
                })
        
        
        
        
        
        
        
        
        
        
        
        
            
        
        
        
        
        
        
 

 
          //Skapa button//
          document.getElementById("createBtn").addEventListener("click", function(){
            const name= document.getElementById("name").value
            const phone= document.getElementById("phone").value
        
            //error message//
            const errorMessage=document.getElementById("error-message")
            errorMessage.style.display=
            errorMessage.style.color="red"
            errorMessage.style.fontSize="20px"
            errorMessage.innerText =""
        
        
        
        
            //      use if sats to differentiate. if name and phone field are empty
            //    message"please Enter your name and Phone number"
            //    if name field only is empty "please enter your name "
            //    if phone field only is empty "please enter your phone number"
        
        
        
        
            if (name === "" && phone === ""){
        
                errorMessage.innerText= "Please Enter your Name and your Phone number !"
                errorMessage.style.display = "block"
                return
                
            }
            else if (name === ""){
                errorMessage.innerText= "Please Enter your Name !"
                errorMessage.style.display= "block"
                return
               
            }
        
            else if (phone === ""){
                errorMessage.innerText= "Please Enter your Phone number !"
                errorMessage.style.display= "block"
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
                
     
                 
                  
                  listItem.appendChild(nameInput).style.fontSize="20px"
                  listItem.appendChild(phoneInput).style.fontSize="20px"
                  listItem.appendChild(ändraKnapp).style.fontSize="20px"
                  listItem.appendChild(raderaKnapp).style.fontSize="20px"
        
                  document.getElementById("contact").querySelector("ul").appendChild(listItem)
                  document.getElementById("name").value= "" 
                  document.getElementById("phone").value= ""
  
                })
        
                document.getElementById("raderaList").addEventListener("click", function(){
                  contact.remove()
                })
        
        
        
        
        
        
        
        
        
        
            
        
        
        
        
        
        
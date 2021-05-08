   
   const addBtn= document.querySelector(".btn-info");
   const textarea= document.querySelector("#floatingTextarea");
   
   addBtn.addEventListener('click',(e)=>{
    
    let notes=localStorage.getItem("notes");
    let notesArr;
    if (notes==null) {
         notesArr=[];
    }else{
       notesArr= JSON.parse(notes);
    }

    notesArr.push(textarea.value.trim());
    localStorage.setItem("notes", JSON.stringify(notesArr));
    console.log(notesArr)
    textarea.value="";
   showNotes();
   })




   const showNotes=()=>{

    let notes=localStorage.getItem("notes");
    let notesArr;
    if (notes==null) {
         notesArr=[];
    }else{
       notesArr= JSON.parse(notes);
    }

    let html="";
    notesArr.forEach((element,index) => {

      html+= `<div class="card  mx-2 my-2" style="width: 15rem;">
                 <div class="card-body">
                   <h5 class="card-title">Note ${index+1}</h5>
                   <p class="card-text">${element}</p>
                   <button class="btn btn-danger" id="${index}" onclick="deleteNotes(this.id)">Delete</button>
                 </div>
              </div>`
    });

    let showSection=document.querySelector(".result");

    if (notes!=null) {
      showSection.innerHTML=html;

    } else {
      showSection.innerHTML= `"nothing to show add something"`;
    

    }
   }

   showNotes();



   const deleteNotes= (index)=>{

      let notes=localStorage.getItem("notes");
      let notesArr;
      if (notes==null) {
           notesArr=[];
      }else{
         notesArr= JSON.parse(notes);
      }
      notesArr.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(notesArr));
      showNotes()
   }
   



// currently working
   let search=document.getElementById("search");

   search.addEventListener('keyup',()=>{
      
   let cards=document.getElementsByClassName("card");
   
   Array.from(cards).forEach((element)=>{

   let cardText=element.querySelector("p").textContent;
   let searchVal=search.value.toLowerCase();

      if (cardText.includes(searchVal)) {
         element.style.display="block";
      } else {
         element.style.display="none";
       
      }

      })
      
   })




   // trying to set that when search matches no result it'll show a string
   // let showSection=document.querySelector(".result");
   // let nothingElm=document.createElement("h1");
   // let nothingTxt=document.createTextNode(`"Result not found"`);
   // let nothing=nothingElm.appendChild(nothingTxt);
   // showSection.appendChild(nothing);



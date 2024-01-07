   // JavaScript to handle age validation and card display
   document.getElementById("ageForm")
   .addEventListener("submit", function (event) {
     event.preventDefault();
     const age = parseInt(document.getElementById("ageInput").value);
     const cardResult = document.getElementById("cardResult");
     if (age >= 0) {
       cardResult.classList.remove("d-none");
       cardResult.innerHTML =
         age >= 18
           ? `
     <div class="card">
       <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">You are an adult</h5>
         <p class="card-text">Congratulations! You have reached adulthood.</p>
       </div>
     </div>
   `
           : `
     <div class="card">
       <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">You are a child</h5>
         <p class="card-text">Enjoy your childhood!</p>
       </div>
     </div>
   `;
     } else {
       alert("Please enter a valid age (greater than or equal to 0).");
     }
   });
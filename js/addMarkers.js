AFRAME.registerComponent("create-markers", {
  

  init: async function() {

   var mainScene = document.querySelector("#main-scene");

   //get the dishes collection from firestore database
     var dishes = await this.getDishes();
  
   dishes.map(dish => {
      var marker = document.createElement("a-marker");   
     marker.setAttribute("id", dish.id);
     marker.setAttribute("type", "pattern");
     marker.setAttribute("url", dish.marker_pattern_url);
     marker.setAttribute("cursor", {
       rayOrigin: "mouse"
     });

     //set the markerhandler component
     marker.setAttribute("markerhandler", {});
     mainScene.appendChild(marker);

    // Adding 3D model to scene
    //add code here



   // Ingredients Container
     var mainPlane = document.createElement("a-plane");
     mainPlane.setAttribute("id", `main-plane-${dish.id}`);
     mainPlane.setAttribute("position", { x: 0, y: 0, z: 0 });
     mainPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 });
     mainPlane.setAttribute("width", 1.7);
     mainPlane.setAttribute("height", 1.5);
     marker.appendChild(mainPlane);

      // Dish title background plane
     //add code here


      // Dish title
     var dishTitle = document.createElement("a-entity");
     dishTitle.setAttribute("id", `dish-title-${dish.id}`);
     dishTitle.setAttribute("position", { x: 0, y: 0, z: 0.1 });
     dishTitle.setAttribute("rotation", { x: 0, y: 0, z: 0 });
     dishTitle.setAttribute("text", {
       font: "monoid",
       color: "black",
       width: 1.8,
       height: 1,
       align: "center",
       value: dish.dish_name.toUpperCase()
     });
     titlePlane.appendChild(dishTitle);


       // Ingredients List
     //add code here
     
   })

},
  //function to get the dishes collection from firestore database
  getDishes: async function() {
   //add code here
 }
 
 });


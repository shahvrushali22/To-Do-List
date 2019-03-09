$(function(){
  $(".box").draggable();
    $("#box1").draggable({scroll: true,revert:"invalid"});
    $("#box2").draggable({axis:"x"});
    $("#box3").draggable({axis:"y"});
    $("#box4").draggable({containment: ".container"});
    
    $("#droppable").droppable({
        accept: "#box1",
        drop: function(){
            $(this).text("Something which has attitude is dropped on me!");
        }
    });
    
    //sortable
    $("#sortable").sortable({placeholder: "placeholderBox",
        connectWith: "#sortableToo"});
    $("#sortableToo").sortable({connectWith: "#sortable", placeholder: "placeholderBox"});
    
    //Script for todo-List
    
    $("#todoList ul").sortable({
        connectWith:"ul",
        placeholder:"emptySpace",
        items: "li:not('.listTitle, .addItem')",
        //dropOnEmpty: true,
        
        
    });
    $("input").keydown(function(e){
       if(e.keyCode == 13){
           var item = $(this).val();
           $(this).parent().parent().append('<li>' + item + '</li>');
           $(this).val("");
           
    } 
    });
    
    $("#trash").droppable({
        drop: function(event, ui){
            ui.draggable.remove();
        }
    });
    
    //SCRIPT
    //ACCORDION
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
    
});
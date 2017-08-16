//Tab scripts
// $(function(){
// $('a[title]').tooltip();
// });

$(document).ready(function(){
  $('a[title]').tooltip();

  $('#areaOfSpecialization').on('change',function(){
        if( $(this).val()==="7"){
        $("#otherType").show()
        }
        else{
        $("#otherType").hide()
        }
    });


submitForms = function(){
    document.getElementById("section0").submit();
    document.getElementById("sectionA").submit();
    document.getElementById("sectionB").submit();
    document.getElementById("sectionC").submit();
    document.getElementById("sectionD").submit();
    document.getElementById("sectionE").submit();
    document.getElementById("sectionF").submit();
    document.getElementById("sectionG").submit();
}
$('#mainForm').submit(function(e){
  e.preventDefault();
var data= $(this).serialize();
$.post("form.php",{data:data}, function(data){
        console.log(data);
    });
});
});

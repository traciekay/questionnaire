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

    $('#collaborationNature').on('change',function(){
          if( $(this).val()==="5"){
          $("#otherCollaboType").show()
          }
          else{
          $("#otherCollaboType").hide()
          }
      });

      onChangeScreeningDate();
      onChangeColposcopyDate();
      onChangeCryotherapyDate();
      onChangeHistologyLabDate();
      onChangeLeepDate();
      onChangeTrainingDate();
      onChangeCancerTherapyDate();
      onChangePalliativeCareDate();
      onChangeOtherDate();
      onChangeTraining();
      onChangeCollaboration();
      onChangeReferral();


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

function onChangeScreeningDate() {
  $('#facilityScreening').on('change',function(){
     if($(this).is(":checked")){
        $("#screeningDate").show();
      } else{
        $("#screeningDate").hide();
      }
  });
}

function onChangeColposcopyDate(){
  $('#facilityColposcopy').on('change',function(){
        if($(this).is(":checked")){
        $("#colposcopyDate").show()
        }
        else{
        $("#colposcopyDate").hide()
        }
    });
}

function onChangeCryotherapyDate(){
  $('#facilityCryotherapy').on('change',function(){
     if($(this).is(":checked")){
        $("#cryotherapyDate").show();
      } else{
        $("#cryotherapyDate").hide();
      }
  });
}

function onChangeHistologyLabDate(){
  $('#facilityHistologyLab').on('change',function(){
        if($(this).is(":checked")){
        $("#histologyDate").show()
        }
        else{
        $("#histologyDate").hide()
        }
    });
}
function onChangeLeepDate(){
  $('#facilityLeep').on('change',function(){
        if($(this).is(":checked")){
        $("#leepDate").show()
        }
        else{
        $("#leepDate").hide()
        }
    });
}

function onChangeTrainingDate(){
  $('#facilityTraining').on('change',function(){
        if($(this).is(":checked")){
        $("#trainingDate").show()
        }
        else{
        $("#trainingDate").hide()
        }
    });
}

function onChangeCancerTherapyDate(){
  $('#facilityCancerTherapy').on('change',function(){
        if($(this).is(":checked")){
        $("#therapyDate").show()
        }
        else{
        $("#therapyDate").hide()
        }
    });
}

function onChangePalliativeCareDate(){
  $('#facilityPalliativeCare').on('change',function(){
        if($(this).is(":checked")){
        $("#palliativeDate").show()
        }
        else{
        $("#palliativeDate").hide()
        }
    });
}
function onChangeOtherDate(){
  $('#facilityOther').on('click',function(){
        if($(this).is("click")){
        $("#otherDate").show()
        }
        else{
        $("#otherDate").hide()
        }
    });
}
function onChangeTraining(){
  $('#specialTraining').on('change',function(){
        if( $(this).val()==="1"){
        $("#trainingLevel,#trainingPlace,#trainingDecision,#trainingCost,#trainingSource").show()
        }
        else{
        $("#trainingLevel,#trainingPlace,#trainingDecision,#trainingCost,#trainingSource").hide()
        }
    });
}

function onChangeCollaboration(){
  $('#facilityNetwork').on('change',function(){
        if( $(this).val()==="1"){
        $("#collaborationNature,#frequentlyNetwork,#organizationCollaborating,#collaborationFunding").show()
        }
        else{
        $("#collaborationNature,#frequentlyNetwork,#organizationCollaborating,#collaborationFunding").hide()
        }
    });
}

function onChangeReferral(){
  $('#experienceCases').on('change',function(){
        if( $(this).val()==="1"){
        $("#experienceFrequency,#facilitiesReferral,#servicesOffered").show()
        }
        else{
        $("#experienceFrequency,#facilitiesReferral,#servicesOffered").hide()
        }
    });
}

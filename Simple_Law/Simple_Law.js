Laws = new Mongo.Collection("laws");

function displaySelectedResult(t) {
  // Retrieve Document
  var law = Laws.findOne({title: t});
  // Create Content
  $("#result-details").html("<p><span class='semi-bold'>" + law.title + "</span></p><p>" +law.category+"&nbsp;&nbsp;|&nbsp;&nbsp;"+law.state+"  "+law.id+"</p>"+"<p>"+law.text+"</p>");

}
var toggle1 = 1;
function refreshResultSelection() {
  // Un-Highlight Old Selection
  // There should only be one selected at a time
  var selelms = document.getElementsByClassName("selected-result");
  if(selelms.length > 0)
    $(selelms[0]).removeClass("selected-result");

  // Select First Result
  var elms = document.getElementsByClassName("result");
  if(elms.length > 0){
    var elm = $(elms[0]);
    elm.addClass("selected-result");
    displaySelectedResult(elm.text());
  }
}


if (Meteor.isClient) {
  Meteor.subscribe("laws");

  // Smooth Scrolling
  // handle links with @href started with '#' only
  $(document).on('click', 'a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $(id).offset().top;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos});
  });


  // Preload results with no filters
  Session.set("filterByState", "");
  Session.set("filterByCategory", "");


  Template.body.helpers({
    // Get results
    laws: function () {
      // Replace empty strings with ".*" for regular expression
      var stateFilter = Session.get("filterByState") || ".*";
      var categoryFilter = Session.get("filterByCategory") || ".*";
      var idFilter = Session.get("filterById") || ".*";
      var dateFilter = Session.get("filterByDate") || ".*";
      var titleFilter = Session.get("filterByTitle") || ".*";

      return Laws.find({state: {$regex : stateFilter}, category : {$regex : ".*" + categoryFilter + ".*"}, id: {$regex : idFilter}, date: {$regex : dateFilter}, title: {$regex : titleFilter}}, {sort: {date: -1}});
    }
  });

  Template.body.events({
    // Change to filters
    "change #filters #choose-state": function (event) {
      Session.set("filterByState", event.target.value);
    },
    "change #filters #choose-category": function (event) {
      Session.set("filterByCategory", event.target.value);
    },
    "change #filters #choose-title": function (event) {
      Session.set("filterByTitle", event.target.value);
    },
    "change #filters #choose-id": function (event) {
      Session.set("filterById", event.target.value);
    },
    "change #filters #choose-date": function (event) {
      Session.set("filterByDate", event.target.value);
    },
    // Choose State
    "click #map path": function (event) {
      Session.set("filterByState", event.target.id);

      // Scroll to Results
      // target element id
      var id = $("#results-container");

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // top position relative to the document
      var pos = $(id).offset().top;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos});

      // Set state select
      document.getElementById("choose-state").value = event.target.id;

      // Deactivate active state
      // There should only be one active at a time
      var elms = document.getElementsByClassName("active-state");
      if(elms.length > 0)
        elms[0].setAttribute("class", "land");

      // Activate new state
      event.target.setAttribute("class", "land active-state");
    },
    // Select Result
    "click #recent-laws li": function (event) {
      // jQuery Target
      var selected = $(event.target);
      // Un-Highlight Old Selection
      // There should only be one selected at a time
      var elms = document.getElementsByClassName("selected-result");
      if(elms.length > 0)
        $(elms[0]).removeClass("selected-result");
      // Highlight New Selection
      selected.addClass("selected-result");
      // Display Result
      displaySelectedResult(selected.text());
    },
    // Add new law
    "click #do-add-law": function (event) {
      // Retrieve Data
      var newtitle = $("#add-title").val();
      var newid = $("#add-id").val();
      var newdate = $("#add-date").val();
      var newdemographic = $("#add-demographic").val();
      var newtags = $("#add-tags").val();
      var newstate = $("#add-state option:selected").val();
      var newcategoryarr = $("#add-category").val();
      // Build category list
      var newcategory = "";
      if (newcategoryarr !== null && newcategoryarr.length > 1)
        for (var i = 0; i < newcategoryarr.length; i++){
          newcategory += newcategoryarr[i];
          if(i<newcategoryarr.length-1)
            newcategory += ", ";
        }
        else if (newcategoryarr !== null)
          newcategory = newcategoryarr[0];

      newcategory = newcategory.toLowerCase();

      // Check Fields
      var dateRegEx = /^\d{4}-\d{1,2}-\d{1,2}$/;

      if(newtitle !== "" && newid !== "" && newdate.match(dateRegEx) !== null && newdemographic !== "" && newstate !== "" && newcategory !== "" && Meteor.userId() === "Hp97wgaaQSWYLn3ud" /* If you are reading this, you may be up to no good. Please be respectful, the purpose of this site is to help people. */){
        Laws.insert({title: newtitle, id: newid, category: newcategory, date: newdate, tags: newtags, demographic: newdemographic, state: newstate});
        alert("Law Added!");
      }

      // Else explain error
      else if(Meteor.userId() !== "yv94W2WdR6knYLgEf")
        alert("Please Login as Admin");
      else if (newdate.match(dateRegEx) !== null)
        alert("Field Empty");
      else alert("Bad date, use YYYY-MM-DD");

    },
    // Show advanced search fields
    "click #advanced-search": function () {
      $("#advanced-search").hide();
      $("#choose-title").fadeIn(300);
      $("#choose-id").fadeIn(300);
      $("#choose-date").fadeIn(300);
    },
    // Show disclaimer
//    "click #disclaimer-link": function () {
//      $("#disclaimer-div").show();
//      $('body, html').animate({scrollTop: $(document).height()}, 1200);
//      $("#disclaimer-div").animate({opacity: 1 }, 600)
//    }

    "click #disclaimer-link": function () {
      if(toggle1 == 1) {
        toggle1 = 0;
        $("#disclaimer-div").show();
        $('body, html').animate({scrollTop: $(document).height()}, 0);
        $("#disclaimer-div").animate({opacity: 1 }, 0);
      }
      else {
        toggle1 = 1;
        $("#disclaimer-div").animate({opacity: 0 }, 0);
        $('body, html').animate({scrollTop: $(document).height()}, 0);
        $("#disclaimer-div").hide();

      }
    }

  });

  Tracker.autorun(function () {
    // Admin Panel
    if(Meteor.userId() === "yv94W2WdR6knYLgEf"/* If you are reading this, you may be up to no good. Please be respectful, the purpose of this site is to help people. */)
      $("#admin-panel").css({"display": "block"});
    else
      $("#admin-panel").css({"display": "none"});
  });


  Template.law.onRendered(function () {
    refreshResultSelection();

    // Admin panel if already logged  c

    if(Meteor.userId() === "yv94W2WdR6knYLgEf" /* If you are reading this, you may be up to no good. Please be respectful, the purpose of this site is to help people. */)
      $("#admin-panel").css({"display": "block"});

  });

  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.publish("laws", function () {
    return Laws.find();
  });

}

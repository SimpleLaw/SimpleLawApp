import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './legalr.html';


import Popper from 'popper.js';
window.Popper = Popper;









Template.body.events({
  // Choose State
  "click #us_map path": function (event) {
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



  "click #us_map polygon": function (event) {
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


  "click #canada_map path": function (event) {
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

  "click #canada_map polygon": function (event) {
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


  "click #eu_map path": function (event) {
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

  "click #eu_map polygon": function (event) {
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

  "click #france_map path": function (event) {
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

  "click #france_map polygon": function (event) {
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
});

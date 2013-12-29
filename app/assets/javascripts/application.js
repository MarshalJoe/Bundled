// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

$(function() {
    $( "#datepicker" ).datepicker();
  });

var colors = ["blue", "aquamarine", "pink", "yellow", "green", "red", 'orange', "greenyellow"];

$('li').mouseenter(function(){
	 var color = colors[Math.floor(Math.random()*colors.length)];
   $('a', this).css('background-color', color);
   $('a', this).css('color', "white");
 });

$('li').mouseleave(function(){
   $('a', this).css('background-color','white');
   $('a', this).css('color','black');
 });
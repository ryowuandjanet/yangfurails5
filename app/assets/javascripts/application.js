/* global $ */
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require bootstrap
//= require popper
//= require bootstrap-datepicker
//= require bootstrap-datepicker/core
//= require bootstrap-datepicker/locales/bootstrap-datepicker.zh-TW.js
//= require activestorage
//= require cocoon
//= require bootstrap-select
//= require_tree .

$(function(){
  // 評量表-基本資料-新增Modal
  $('#yfcase-basedata-new-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var modal = $(this)
  })  
})


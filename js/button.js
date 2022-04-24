// JavaScript Document

$(function() {
  $('.button').click(function() {  //class="button"をクリックした時に、どのclass名と結びつけて処理をするか
    $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
      $('.home-content').addClass('active'); //buttonがクリックされたらclass="home-content"はactiveの行動を読み込んで処理をする。
  } else {
    $('.home-content').removeClass('active'); //もう一度クリックされたら戻る処理。
  }
  if ($(this).hasClass('active')) {
      $('.mini-box').addClass('active'); //buttonがクリックされたらclass="home-content"と一緒にmini-boxもactiveの行動を読み込んで処理をする
  } else {
    $('.mini-box').removeClass('active'); //もう一度クリックされたら戻る処理。
  }
  if ($(this).hasClass('active')) {
      $('.shousai').addClass('active'); //buttonがクリックされたらclass="home-content"と一緒にmini-boxもactiveの行動を読み込んで処理をする
  } else {
    $('.shousai').removeClass('active'); //もう一度クリックされたら戻る処理。
  }
 
  });
});

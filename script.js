let apiurl="https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata";

let vm = new Vue({
  el:"#app",
  data: {
    classdatas: [],
    screen_size: false,
    window: {
      width: 0
    }
  },
  created: function(){
    window.addEventListener('resize',this.handleResize)
    window.addEventListener('resize',this.addAuther)
    this.handleResize()
    this.addAuther()
  },
  destroyed() {
    window.removeEventListener('resize',this.handleResize)
    window.removeEventListener('resize',this.addAuther)
  },
  methods: {
    handleResize() {
            this.window.width = window.innerWidth
            $()
        },
    addAuther() {
        (this.window.width <= 600)?(this.screen_size = true):(this.screen_size =false)
        return this.screen_size
    }
  }
})

$.ajax({
  url:apiurl,
  success: function(res){
    var obj=JSON.parse(res);
    console.log(obj);
    vm.classdatas=obj;
    Vue.set(vm,"classdatas",obj);
  }
})

$(".profile").click(function(){
  window.open("https://www.cakeresume.com/dennis-wei-5021c1");
})

$(".open").click(function(){
  $('html,body').animate({scrollTop:$('.banner').offset().top},800)
})

$(".explore").click(function(){
  $('html,body').animate({scrollTop:$('.classes').offset().top},800)
})

$(".mycls").click(function(){
window.open("https://tw.alphacamp.co/");
  
})

$(".course").click(function(){
  $('html,body').animate({scrollTop:$('.classes').offset().top},800)
  
})

let bell_audio=new Audio("https://drive.google.com/u/0/uc?id=1-bKplBkoEOcgak7YqjZo5IeRUhqw_koj&export=download");

$(".notifi").click(function(){
  bell_audio.play()
})



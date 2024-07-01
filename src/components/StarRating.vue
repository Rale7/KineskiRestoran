<template>
    <div class="rating-holder">
        <div class="c-rating c-rating--big" :data-rating-value="avg">
            
            <button @click="rate(1)">1</button>
            <button @click="rate(2)">2</button>
            <button @click="rate(3)">3</button>
            <button @click="rate(4)">4</button>
            <button @click="rate(5)">5</button>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

$bg-color: #941816;
$font-color: #f9ba81;
$hover-color: #7c1412;

////
/// Star Rating
/// @group components
/// @author Damián Muti
////

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400');

///
$rating-min-value: 0 !default;
///
$rating-max-value: 5 !default;
///
$rating-steps-value: .25 !default;
///
$rating-color-empty: '%23ddd' !default;
///
$rating-color-full: red !default;
///
$rating-color-hover: grey !default;
/// This variable is a map containing the "d" attribute of each of the SVG icons
$rating-icons-paths: (
  quarter: 'M196.208 415.2v-224.8l-139.504 20.272 100.944 98.384-23.84 138.928z',
  half: 'M258.672 64l-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6v-318.4z',
  three-quarters: 'M321.616 190.496l-0.656-0.096-62.384-126.4-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6 63.024 33.136z',
  full: 'M457.888 210.672l-139.504-20.272-62.384-126.4-62.384 126.4-139.504 20.272 100.944 98.384-23.84 138.928 124.768-65.6 124.768 65.6-23.84-138.928c0 0 100.944-98.384 100.944-98.384z'
);

/// Creates a dynamic list of values that increment each .25 from 0 to 5
/// @return {list} 
@function rating-values() {
  $rating-values: ();

  @for $i from $rating-min-value through ($rating-max-value / $rating-steps-value) {
    $rating-value: abs($i * $rating-steps-value);
    $rating-values: append($rating-values, $rating-value, 'comma');
  }

  @return $rating-values;
}

/// Generates an SVG with a given fill color depending on the type of icon passed as parameter. The SVG string is scaped for cross-browser support.
/// @param {string} $icon - Type of icon. Accepted values: `quarter`, `half`, `three-quarters` or `full`.
/// @param {color} $color - Passes the fill color of the SVG icon that is being generated. Note: Hexa color values must be escaped for cross-browser support.
/// @return {string} background value.
@function get-icon($icon, $color) {
  @if not index(quarter half three-quarters full, $icon) {
    @error "Interaction type must be either `quarter`, `half`, `three-quarters` or `full`.";
  }
  
  @return url('data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22512%22%20height%3D%22512%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22' + $color + '%22%20d%3D%22' + map-get($rating-icons-paths, $icon) + '%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E') center / cover no-repeat;
}

/// This is a CSS-only star rating component that shows the proper rating depending on a data-attribute value. JS logic behind this component should round up values per quarter.
/// @param {number} $star-size [20px] - Provides width and height for each of the stars.
/// @param {string} $rating-element [button] - Element to use for each of the stars.
/// @param {string} $interaction-type [representative] - Indicates whether this component should be clickable or representative. Accepted values: `clickable` or `representative`.
/// @example scss
///   .class {
///     c-rating(toem(20px), button, clickable);
///   }
/// @example markup
///   <div class="c-rating" data-rating-value="3.25">
///     <span>1</span>
///     <span>2</span>
///     <span>3</span>
///     <span>4</span>
///     <span>5</span>
///   </div>
@mixin c-rating($star-size: 20px, $star-element: button, $interaction-type: representative) {
  @if not index(clickable representative, $interaction-type) {
    @error "Interaction type must be either `clickable` or `representative`.";
  }
  
  #{$star-element} {
    display: inline-block;
    // float: left;
    width: $star-size;
    height: $star-size;
    border: 0;
    text-indent: -9999px;
    outline: none;
    background: get-icon(full, $rating-color-empty);

    @if $interaction-type == clickable {
      cursor: pointer;
      transition: background 0.25s ease;
      
      // Override background images on hover state
      &:hover,
      &:hover ~ #{$star-element} {
        background: get-icon(full, $rating-color-empty) !important;
      }
    }
  }
  
  // Override background images on hover state
  @if $interaction-type == clickable {
    &:hover {
      #{$star-element} {
        background: get-icon(full, $rating-color-hover) !important;
      }
    }
  }

  @each $rating-value in rating-values() {
    // Get the next higher integer.
    $rating-value-ceil: ceil($rating-value);

    &[data-rating-value="#{$rating-value}"] {
      #{$star-element}:nth-child(-n+#{$rating-value-ceil}) {
        background: get-icon(full, $rating-color-full);
      }

      #{$star-element}:nth-child(#{$rating-value-ceil}) {
        // Evaluate which fraction of a star this value is and add the proper background
        @if str-slice("#{$rating-value}", 2, 4) == '.25' {
          background: get-icon(quarter, $rating-color-full), get-icon(full, $rating-color-empty)
        }
        @else if str-slice("#{$rating-value}", 2, 4) == '.5' {
          background: get-icon(half, $rating-color-full), get-icon(full, $rating-color-empty)
        }
        @else if str-slice("#{$rating-value}", 2, 4) == '.75' {
          background: get-icon(three-quarters, $rating-color-full), get-icon(full, $rating-color-empty)
        }
      }
    }
  }
}

/*
 * General styles.
 * Not necessary for the component to work
*/

/// Convert to EMs function
/// @param {number} target - The value to be converted
/// @param {number} context [$msuxf-font-size] The base font size
/// @return {em} value
@function toem($target, $context: 16px) {
  @if $target == 0 {
    @return 0
  }

  @return $target / $context+0em;
}

.rating-holder {
  display: inline-block;
  padding: toem(10px) toem(30px);
  margin: 0 10px;
  background-color: #fff;
  border-radius: toem(25px);
  box-sizing: border-box;
}

.c-rating {
  @include c-rating(toem(20px), button, clickable);
  
  &--big {
    font-size: 150%;
  }
}

</style>

<script>

export default {
    name: "StarRating",
    props: {
        value: Number,
        mealR:Object,
    },
    mounted(){
      let meal = this.mealR;
      let sum=0;
  
      for(let i=0;i<meal["rates"].length;i++){
        sum+=meal["rates"][i]
      }
      //alert(sum/meal["rates"].length*1.0)
      this.avg = (sum/meal["rates"].length*1.0)
      this.avg = (Math.round(this.avg * 4) / 4).toFixed(2);
      let v1 = this.avg + '';
      //let v2 = parseFloat(v1)
      if(v1[2] == '0' && v1[3]=='0'){
        this.avg = parseInt(v1) 
      }
    },
    data(){
      return{
        avg:0.0,
      }
    },
    methods:{
      rate(r){
        //alert(r)
        if(localStorage.getItem("logged-user") != null){
          let meal = this.mealR;
          let rated = meal["rated"]
          //alert(rated.length)
  
          let rates = meal["rates"]
          //alert(rates.length)
          //alert('ok')
          if(rated == null || rates==null){
            rated=[]
            rates=[]
          }

          for(let i=0;i<rated.length;i++){
            //alert(i)
            if(rated[i] == JSON.parse(localStorage.getItem("logged-user"))["username"]){
              rates[i] = r;
              meal["rates"] = rates;
              //alert("ok1")
              let all = JSON.parse(localStorage.getItem("menu"))
              /*alert(all[1]["name"])
              alert('bla')
              alert(all.length)*/
              for(let i=0;i<all.length;i++){
                if(all[i]["meals"] != null){
                  //alert(all[i]["meals"])
                  for(let j=0;j<all[i]["meals"].length;j++){
                  //alert(j)
                  if(all[i]["meals"][j]["name"] == meal["name"]){
                    all[i]["meals"][j] = meal

                    //alert('gg')
                  }
                }
                }
                
              }
              localStorage.setItem("menu",JSON.stringify(all))

              let sum=0;
      
              for(let i=0;i<meal["rates"].length;i++){
                sum+=meal["rates"][i]
              }
              //alert(sum/rates.length*1.0)
              this.avg = (sum/rates.length*1.0)
              
              this.avg = (Math.round(this.avg * 4) / 4).toFixed(2);
              let v1 = this.avg + '';
              //let v2 = parseFloat(v1)
              if(v1[2] == '0' && v1[3]=='0'){
                this.avg = parseInt(v1) 
              }

              
              return
            }
          }
          //alert("ok2")

          rated.push(JSON.parse(localStorage.getItem("logged-user"))["username"])
          //alert(JSON.parse(localStorage.getItem("logged-user"))["username"])
          rates.push(r)
          meal["rated"]=rated
          meal["rates"]=rates

          let all = JSON.parse(localStorage.getItem("menu"))
          /*alert(all[1]["name"])
          alert('bla')
          alert(all.length)*/
          for(let i=0;i<all.length;i++){
            if(all[i]["meals"] != null){
              //alert(all[i]["meals"])
              for(let j=0;j<all[i]["meals"].length;j++){
              //alert(j)
              if(all[i]["meals"][j]["name"] == meal["name"]){
                all[i]["meals"][j] = meal

                //alert('gg')
              }
            }
            }
            
          }
          localStorage.setItem("menu",JSON.stringify(all))

          let sum=0;
  
          for(let i=0;i<meal["rates"].length;i++){
            sum+=meal["rates"][i]
          }
          //alert(sum/rates.length*1.0)
          this.avg = (sum/rates.length*1.0)
          this.avg = (Math.round(this.avg * 4) / 4).toFixed(2);
          let v1 = this.avg + '';
          //let v2 = parseFloat(v1)
          if(v1[2] == '0' && v1[3]=='0'){
            this.avg = parseInt(v1) 
          }
          
        }
      }
    }
}

</script>

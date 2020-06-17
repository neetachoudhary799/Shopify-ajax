$("form#cart-form").submit(function(event) {
 event.preventDefault(); 
var data=$("#AddToCartForm_feelm").serialize();
 jQuery.ajax({
    type: 'POST',
    url: '/cart/add.js',
    data: data,
    dataType: 'json',
    success() {
window.location.href='/checkout?discount=Coupon_code';
    }
  });
});

function calcAndShowTotal() {
    var total = [].reduce.call($('#caloriesConsumed :checkbox:checked'), function(a, b) {
      return a + +$(b).attr('calories') || 0;
    }, 0);
    $('#total').val(total);
  }
  
  $('#caloriesConsumed :checkbox').change(calcAndShowTotal).change();
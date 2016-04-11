

render: function(){
  var visible;

  if (this.state.dropdownOpen){
    visible = "visible";
  }else{
    visible = "hidden";
  }

  return <div class="dropdown">
    <Badge />
    <UnorderedList />
  </div>
}

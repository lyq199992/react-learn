function foo() {
  console.log('foo function');
}

foo()

function foo2(fn){
  console.log("foo2 function");
  setTimeout(() => {
    fn()
  }, 2000);
}

foo2(() => {})
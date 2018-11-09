
function Stringify(str) {

  let types = {
    'undefined' : '',
    'null' : ''
  };

  return String(types[str] || str);
}

export default Stringify;
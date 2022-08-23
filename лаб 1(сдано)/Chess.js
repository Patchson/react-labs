import './Chess.css';

function Chess(){
    return (
        <div className="box">
  <div className="centered">

  <table className="chess-board">
    <tr> 
     <th></th>
     <th>A</th>
     <th>B</th>
     <th>C</th>
     <th>D</th>
     <th>E</th>
     <th>F</th>
     <th>G</th>
     <th>H</th>
     <th></th>
    </tr>
    <tr>
      <th>8</th>
      <CutTd/>
      <th>8</th>
     </tr>
    <tr>
     <th>7</th>
     <CutTd/>
     <th>7</th>
    </tr>
    <tr>
     <th>6</th>
     <CutTd/>
     <th>6</th>
    </tr>
    <tr>
      <th>5</th>
      <CutTd/>
      <th>5</th>
     </tr>
    <tr>
      <th>4</th>
      <CutTd/>
      <th>4</th>
     </tr>
     <tr>
      <th>3</th>
      <CutTd/>
      <th>3</th>
     </tr>
    <tr>
      <th>2</th>
      <CutTd/>
      <th>2</th>
     </tr>
     <tr>
      <th>1</th>
      <CutTd/>
      <th>1</th>
     </tr>
    <tr>
     <th></th>
     <th>A</th>
     <th>B</th>
     <th>C</th>
     <th>D</th>
     <th>E</th>
     <th>F</th>
     <th>G</th>
     <th>H</th>
     <th></th>
    </tr>
  </table>

  </div>
 </div>
      );
}
function CutTd() {
  let result = [];
  for (let index = 0; index < 8; index++) {
    result.push(<td></td>);   
  } 
  return(
    result
  );
}

export default Chess;
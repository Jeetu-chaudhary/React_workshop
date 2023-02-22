
const Headpart= () => {
  const headingcol={
    backgroundColor:"green",
    height :'400px',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  }
  const btn={
   backgroundColor:'grey',
   
  }

   return (<div style={headingcol} > 
    <h1  >Dramatically Engage</h1>
    <h3>Objectively innovate empowered manufactured products whereas parallel platforms.</h3>
    <button style={btn}>Engage Now</button>
     </div>);

}
export default Headpart;
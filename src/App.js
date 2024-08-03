
import React, { useState } from 'react';
import Editor from './Editor';
import './App.css';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
const contents=`
<html >
  <head>
   <style>${css}</style>
  </head>
  <body>
${html}
    <script>${js}</script>
  </body>
</html>
`
  return (
    <>
    <h2> CodeCrafter : Test Your HTML,CSS,JS Code Live Here</h2>
    <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
      <div style={{width:'40%'}} >
        <Editor  name="HTML" value={html} onChange={setHtml} />
        <Editor  name="CSS" value={css} onChange={setCss} />
        <Editor  name="JS" value={js} onChange={setJs} />
      </div>

      <div style={{height:'100%',width:'60%'}}>
        <label>OutPut</label>
        <iframe
        srcDoc={contents}
          style={{width:'97%',height:'90vh',margin:'1%',backgroundColor:'white',borderRadius:'1rem'}}
       id='output' ></iframe>
      </div>
    </div>
    </>
  );
}

export default App;

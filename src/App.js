// import logo from './logo.svg';
 import './App.css';
 import Axios  from 'axios';
// import Uploader from './components/Uploader';
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader';

// function App() {
//   Fileupload(e)
//   {
//     console.warn(e.target.files)
//   }

//   return (
//     <div className="App">
//        <Uploader/>
//        <input type="file" onChange={(e)=>this.Fileupload(e)}  name='img'/>
//     </div>
      
//   );
// }

// export default App;

const App=()=>{
   
   let formData=new FormData;
   const onFileChange = (e)=>{
     console.log(e.target.files[0])
     if(e.target && e.target.files[0]){
      formData.append('file',e.target.files[0]);
     }
   }
   const SubmitFileData=()=>{
       Axios.post(
        'https://n3wg3sj7u8.execute-api.us-east-1.amazonaws.com/dev/image1-wav2lip/sixth',
        {formData}
       ).then(res=>{
        console.log(res);
       }).catch(error=>{
         console.log(error);
       })
   }
   return(
    <div className="App">
      <div>
      <input type="file" name='file_upload' onChange={onFileChange}/>
    </div>
    <div>
      <button onClick={SubmitFileData}>submit data</button>
    </div>
    </div>
   );
}
export default App;

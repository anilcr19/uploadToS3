// import React from 'react'
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'

// const Uploader = () => {
//   const toast = (innerHTML) => {
//     const el = document.getElementById('toast')
//     el.innerHTML = innerHTML
//     el.className = 'show'
//     setTimeout(() => { el.className = el.className.replace('show', '') }, 3000)
//   }

//   const getUploadParams = () => {
//     return { url: 'https://httpbin.org/post' }
//   }

//   const handleChangeStatus = ({ meta, remove }, status) => {
//      console.log(status,meta);
//     if (status === 'headers_received') {
//       toast(`${meta.name} uploaded!`)
//       remove()
//     } else if (status === 'aborted') {
//       toast(`${meta.name}, upload failed...`)
//     }
//   }

//   return (
   
//       <Dropzone
//          getUploadParams={getUploadParams}
//         onChangeStatus={handleChangeStatus}
//         maxFiles={1}
//         multiple={false}
//         canCancel={false}
//         inputContent="Drop A File"
//         styles={{
//           dropzone: { width: 400, height: 200 },
//           dropzoneActive: { borderColor: 'green' },
//         }}
//       />
    
//   )
// }

// <Uploader />

// export default Uploader
import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react'
const Uploader = () => {
 
  return (
    <div>
       <h3>Upload the necessary documents</h3>
       <input type="file"   name='img'/>
    </div>
  )
}

export default Uploader
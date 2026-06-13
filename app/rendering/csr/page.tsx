'use client';
import {createPost} from './fetchPost'
function CSRPage() {
  return (
    <>
      <div>
        <h1>CSR - Client Side Rendering</h1>
      </div>


      <div>

        <form action={createPost}>

            <input type='text' name='title' placeholder='عنوان' />
            <textarea  name='body' placeholder='متن پست' />

            <button type='submit'>create  post</button>
        </form>
      </div>
    </>
  );
}
export default CSRPage;

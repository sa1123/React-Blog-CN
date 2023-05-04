import { useFormInput } from "../hooks";
import {firestore} from "../firebase";

function CreatePost(){
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit(e){
        e.preventDefault();

        firestore.collection('posts').add({
            title: title.value,
            content: content.value,
            subTitle: subTitle.value,
            createdAt: new Date()
        })
    }

    return <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>title</label>
                <input {...title}/>
            </div>
            <div className="form-field">
                <label>sub title</label>
                <input {...subTitle}/>
            </div>
            <div className="form-field">
                <label>content</label>
                <textarea {...content}/>
            </div>
            <button className="create-post-btn">Create Post</button>
        </form>
    </div>
}

export default CreatePost;
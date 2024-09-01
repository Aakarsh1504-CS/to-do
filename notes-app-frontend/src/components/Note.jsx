// import  { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Note = () => {
//   const { postname } = useParams();
//   const [note, setNote] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [renaming, setRenaming] = useState(false);
//   const navigate = useNavigate();

  

//   useEffect(() => {
//     const fetchNote = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/show/${postname}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setNote(response.data.rpost);
//       } catch (err) {
//         console.error('Failed to fetch note', err);
//       }
//     };
//     fetchNote();
//   }, [postname]);

//   const handleRename = async () => {
//     try {
//       await axios.post(`http://localhost:3000/rename/${postname}`, { newname: newTitle }, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setRenaming(false);
//       navigate(`/note/${newTitle}`);
//     } catch (err) {
//       console.error('Failed to rename note', err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.get(`http://localhost:3000/delete/${postname}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       navigate('/profile');
//     } catch (err) {
//       console.error('Failed to delete note', err);
//     }
//   };

//   if (!note) return <div>Loading...</div>;

//   return (
//     <div>
//       {renaming ? (
//         <div>
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//             placeholder="New Title"
//           />
//           <button onClick={handleRename}>Rename</button>
//         </div>
//       ) : (
//         <>
//           <h1>{note.title}</h1>
//           <p>{note.content}</p>
//           <button onClick={() => setRenaming(true)}>Rename</button>
//           <button onClick={handleDelete}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Note;
import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Assuming you have a separate CSS file

const Note = () => {
  const { postname } = useParams();
  const [note, setNote] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [renaming, setRenaming] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/show/${postname}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setNote(response.data.rpost);
      } catch (err) {
        console.error('Failed to fetch note', err);
      }
    };
    fetchNote();
  }, [postname]);

  const handleRename = async () => {
    try {
      await axios.post(`http://localhost:3000/rename/${postname}`, { newname: newTitle }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setRenaming(false);
      navigate(`/note/${newTitle}`);
    } catch (err) {
      console.error('Failed to rename note', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.get(`http://localhost:3000/delete/${postname}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/profile');
    } catch (err) {
      console.error('Failed to delete note', err);
    }
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div id="main">
      <div id="nav2">
          <a href="/profile">Profile</a>
          <a  onClick={handleDelete}>Delete</a>
          <a href="/logout">Logout</a>
      </div>
      <div id="hero2">
        <div>
          {renaming ? (
          <div id="box3">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="New Title"
            />
            <button id="submit" onClick={handleRename}>Rename</button>
          </div>
        ) : (
          <div id="box2">
            <div id="links">
            <h1>{note.title}</h1>
            <a id="a2" onClick={() => setRenaming(true)}>Rename</a>
            </div>
            <p>{note.content}</p>
            
          </div>
        )}
          
        </div>
        
      </div>
    </div>
  );
};

export default Note;

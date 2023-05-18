import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState('');

  const deleteTodo = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#e2d5de' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Awesome Todo List</h6>

                <fo className="d-flex justify-content-center align-items-center mb-4">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form3"
                      placeholder='What do you need to do today?'
                      className="form-control form-control-lg"
                      onChange={(e) => setToDo(e.target.value)}
                    />
                    
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg ms-2"
                    onClick={() =>{
                      let check=0;
                      let wrong=0;
                      for(let i=0;i<toDo.length;i++){
                        if (toDo[i]!==" "){
                          check=1;
                        }
                        
                      }
                      for (let j=0;j<toDos.length;j++){
                        if(toDo===toDos[j].text)
                        wrong=1
                      }
                      if(check===1 && wrong===0 ){
                      return(
                      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])

                      )
                      }
                    }}
                  >
                    Add
                  </button>
                </fo>

                <ul className="list-group mb-0">
                  {toDos.map((obj) => (
                    <li
                      
                      className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                    >
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                          onChange={(e) => {
                            setTodos(
                              toDos.map((obj2) => {
                                if (obj2.id === obj.id) {
                                  obj2.status = e.target.checked;
                                }
                                return obj2;
                              })
                            );
                          }}
                          checked={obj.status}
                        />
                      <span className={obj.status ? '' : "fw-bold"}>{obj.status ? <s>{obj.text}</s> : obj.text} </span>  
                      </div>
                      <a
                        href="#!"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this item?')) {
                            deleteTodo(obj.id);
                          }
                        }}
                      >
                        <i className="fas fa-times text-primary"></i>
                      </a>

                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

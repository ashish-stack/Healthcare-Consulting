const { useState } = require("react");

function CoachLogin(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id);
        console.log(password);
        if(id===''){
            setIdError('required');
        }else{
            setIdError('');
        }
        if(password===''){
            setPasswordError('Password should have 5 to 10 characters');
        }else{
            setPasswordError('');
        }

        if(id!=='' && password!==''){
            axios.get('http://localhost:4000/coaches?id='+id+'&password='+password).then((res) => {
                let value = res.data;
                if(value.length===0){
                    setError('Invalid Credentials');
                    console.log(error);
                }else{
                    setError('');
                    window.location.assign('/coachhome');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return(
        <React.Fragment>
            <NavFirst />
            <div className="coachlogin">
                <div className="coachsignuptitle">
                    <span><img src="images/LifeCoachLogin.jpg" alt="coach" style={{height:'50px', width:'45px', marginRight:'15px'}}></img></span>
                    <h1 style={{display:'inline'}}>Login as a Life Coach</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Coach ID" style={{width:'90%', marginLeft:'5%', marginTop:'4%'}} value={id} onChange={(event) => setId(event.target.value)}>
                            </input>
                            {idError?<div className="text-danger" style={{textAlign:'left', marginLeft:'5%'}}>{idError}</div> : null}
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" style={{width:'90%', marginLeft:'5%', marginTop:'4%', marginBottom:'5%'}} value={password} onChange={(event) => setPassword(event.target.value)}>
                            </input>
                            {passwordError?<div className="text-danger" style={{textAlign:'left', marginLeft:'5%'}}>{passwordError}</div> : null}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{marginTop:'5%', marginBottom:'5%',width:'90%'}}>Login</button>
                        {error?<div className="text-danger">{error}</div> : null}
                    </form>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default CoachLogin;